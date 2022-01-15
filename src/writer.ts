import { Util } from './util'
import { ObjectUtil } from './object-util'
import { Annotation, ReferencePointer, PDFDocumentParser, Page, CryptoInterface } from './parser'
import { AnnotationState, AnnotationStateModel, AnnotationIcon, TextAnnotationObj } from './annotations/text_annotation';
import { Color, MarkupAnnotationObj } from './annotations/annotation_types';
import { XRef } from './document-history'
import { WriterUtil } from './writer-util'
import { AppStream, XObjectObj } from './appearance-stream';
import { Font } from './fonts';

/**
 * Creats the byte array that must be attached to the end of the document
 * */
export class Writer {


    /**
     * Holds the crossite reference table
     * */
    private xrefs: XRef[] = []

    private cryptoInterface: CryptoInterface

    /**
     * data : The data representing the original PDF document
     * aannotations : The annotations to add to the document
     * */
    constructor(private data: Uint8Array, private annotations: Annotation[], private toDelete: Annotation[], private parser: PDFDocumentParser) {
        this.data = new Uint8Array(data)
        this.cryptoInterface = parser.getCryptoInterface()
    }

    /**
     * Sorts the annotations pagewise.
     *
     * This is necessary since the annotation arrays of the sites must be extended
     * and it makes sense to do this update in one step.
     * */
    sortPageWise(annotations: Annotation[]): { [item: number]: Annotation[] } {
        let pageAnnots: { [item: number]: Annotation[] } = {}

        for (let annot of annotations) {
            if (!pageAnnots[annot.page])
                pageAnnots[annot.page] = []

            pageAnnots[annot.page].push(annot)
        }

        return pageAnnots
    }

    /**
     * It returns the page object either extended by a /Annots field, if this did not exist yet or with the annots field replaced by a rerference pointer
     * to an array if the page object contains the list of annotations directly
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    adaptPageObject(page: Page, annot_array_reference: ReferencePointer): number[] {
        if (!page.object_id)
            throw Error("Page without object id")

        let ret: number[] = []
        let lookupTable = this.parser.documentHistory.createObjectLookupTable()

        let page_ptr: XRef = lookupTable[page.object_id.obj]

        if (page_ptr.compressed) {
            let obj = ObjectUtil.extractObject(this.data, page_ptr, lookupTable)
            let obj_data = obj.stream.getData().slice(obj.pointer_stream_start, obj.pointer_stream_end + 1)

            let ref_ptr = WriterUtil.writeReferencePointer(obj.id, false).concat(32)

            let new_data: Uint8Array = new Uint8Array(ref_ptr.length + WriterUtil.OBJ.length + obj_data.length + WriterUtil.ENDOBJ.length)
            new_data.set(ref_ptr)
            new_data.set(WriterUtil.OBJ, ref_ptr.length)
            new_data.set(obj_data, WriterUtil.OBJ.length + ref_ptr.length)
            new_data.set(WriterUtil.ENDOBJ, WriterUtil.OBJ.length + obj_data.length + ref_ptr.length)

            return WriterUtil.replaceAnnotsFieldInPageObject(new_data, page, 0, annot_array_reference)
        }

        return WriterUtil.replaceAnnotsFieldInPageObject(this.data, page, page_ptr.pointer, annot_array_reference)
    }

    /**
     * Takes the annotations of >>one<< page and derives the annotations array from it.
     * Thereby it also considers the potentially existing annotation array.
     *
     * toDelete := contains those annotations that must be deleted. It removes them from the reference array
     * and marks them as removed
     * */
    writeAnnotArray(annots: Annotation[], toDelete: Annotation[]): { ptr: ReferencePointer, data: number[], pageReference: ReferencePointer, pageData: number[] } {
        let page = annots[0].pageReference

        if (!page)
            throw Error("Missing page reference")

        if (!page.object_id)
            throw Error("Page without object id")

        let references: ReferencePointer[] = page.annots

        references = references.concat(annots.map((x) => {
            if (!x.object_id)
                throw Error("Annotation with object_id null")

            return x.object_id
        }))

        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a: any) => {
            let toDel = toDelete.find((t) => (<any>t.object_id).obj === a.obj && (<any>t.object_id).generation === a.generation)

            if (toDel) {
                toDel.is_deleted = true
                return false
            }

            return true
        })

        let refArray_id: any = page.annotsPointer

        let page_data: number[] = []
        if (!refArray_id) {
            refArray_id = this.parser.getFreeObjectId()
            page_data = this.adaptPageObject(page, refArray_id)
        }

        let ret: number[] = WriterUtil.writeReferencePointer(refArray_id)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret.push(WriterUtil.ARRAY_START)


        for (let an of references) {
            ret = ret.concat(WriterUtil.writeReferencePointer(an, true))
            ret.push(WriterUtil.SPACE)
        }

        ret.push(WriterUtil.ARRAY_END)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return { ptr: refArray_id, data: ret, pageReference: page.object_id, pageData: page_data }
    }

    /**
     * Writes an annotation object
     * */
    writeAnnotationObject(annot: Annotation): { ptr: ReferencePointer, data: number[] } {

        //if ((annot as _Annotation).stampType) {
        //    ret = ret.concat(Writer.NAME)
        //    ret.push(Writer.SPACE)
        //    ret = ret.concat(Writer.DRAFT)
        //    ret.push(Writer.SPACE)
        //}

        //if ((annot as _Annotation).caretSymbol) {
        //    ret = ret.concat(Writer.SY)
        //    ret.push(Writer.SPACE)
        //    ret.push(Writer.P)
        //    ret.push(Writer.SPACE)
        //}

        let ret : number[] = annot.writeAnnotationPreamble()

        ret = ret.concat(annot.writeAnnotationObject(this.cryptoInterface))
        ret = ret.concat(annot.writeAnnotationPostamble())

        return { ptr: annot.object_id!, data: ret }
    }

    /**
     * Takes all the cross site reference table entries and extracts the consecutive sequences
     * */
    computeXrefSequences(): XRef[][] {
        let seqs: XRef[][] = []

        let ordered_xrefs = this.xrefs.sort((a, b) => {
            if (a.id < b.id)
                return -1
            if (a.id > b.id)
                return 1
            return 0
        })

        let seq: XRef[] = [ordered_xrefs[0]]
        let last_id = ordered_xrefs[0].id
        seqs.push(seq)
        for (let i = 1; i < ordered_xrefs.length; ++i) {
            if (ordered_xrefs[i].id === last_id + 1) {
                seq.push(ordered_xrefs[i])
            } else {
                seq = [ordered_xrefs[i]]
                seqs.push(seq)
            }
            last_id = ordered_xrefs[i].id
        }

        return seqs
    }

    /**
     * Constructs the pointers of the linked list that contains the ids of freed objects
     * */
    applyObjectFreeing(refs: XRef[]): XRef[] {
        // write free object head
        let head = this.parser.documentHistory.createObjectLookupTable()[0]
        let last_freed_object_id = head.id

        let freed_objs: XRef[] = refs.filter(r => r.free)
        freed_objs = freed_objs.sort((a, b) => {
            if (a.id < b.id)
                return -1
            if (a.id > b.id)
                return 1
            return 0
        })

        let lastobj: XRef | undefined = undefined
        for (let obj of freed_objs) {
            if (!lastobj) {
                // set first object as list header
                head.pointer = obj.id
            }

            if (lastobj) {
                lastobj.pointer = obj.id
            }

            lastobj = obj
        }

        if (freed_objs.length > 0)
            freed_objs[freed_objs.length - 1].pointer = last_freed_object_id

        refs.push(head)

        return refs
    }

    /**
     * Writes the crossite reference table
     * */
    writeCrossSiteReferenceTable(): number[] {
        let ret: number[] = [...WriterUtil.XREF]
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        this.xrefs = this.applyObjectFreeing(this.xrefs)

        let ordered_sequences = this.computeXrefSequences()

        for (let sequence of ordered_sequences) {
            let head = sequence[0]
            ret = ret.concat(Util.convertNumberToCharArray(head.id))
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(sequence.length))
            ret.push(WriterUtil.CR)
            ret.push(WriterUtil.LF)

            for (let i = 0; i < sequence.length; ++i) {
                let _ret: number[] = []
                _ret = _ret.concat(WriterUtil.pad(10, sequence[i].pointer))
                _ret.push(WriterUtil.SPACE)
                _ret = _ret.concat(WriterUtil.pad(5, sequence[i].generation))
                _ret.push(WriterUtil.SPACE)

                if (sequence[i].free)
                    _ret.push(WriterUtil.F)

                if (sequence[i].update)
                    _ret.push(WriterUtil.N)

                _ret.push(WriterUtil.CR)
                _ret.push(WriterUtil.LF)

                if (_ret.length < 20)
                    throw Error("XRef entry < 20 bytes")

                ret = ret.concat(_ret)
            }
        }

        return ret
    }

    /**
     * Writes the trailer
     * */
    writeTrailer(posXref: number): number[] {
        let ret: number[] = [...WriterUtil.TRAILER]
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.DICT_START)
        ret = ret.concat(WriterUtil.SIZE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.parser.documentHistory.trailerSize))
        ret.push(WriterUtil.SPACE)

        if (this.parser.documentHistory.isEncrypted()) {
            ret = ret.concat(WriterUtil.ENCRYPT)
            ret.push(WriterUtil.SPACE)
            let enc_ref = this.parser.getCryptoInterface().getEncryptionDictReference()
            if (!enc_ref)
                throw Error("No reference pointer to encryption dictionary")
            ret = ret.concat(WriterUtil.writeReferencePointer(enc_ref, true))
            ret.push(WriterUtil.SPACE)
        }

        let trailer = this.parser.documentHistory.getRecentUpdate()

        if (trailer.id) {
            ret = ret.concat(WriterUtil.DOCUMENT_ID)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.ARRAY_START)

            for (let val of trailer.id) {
                ret.push(WriterUtil.SPACE)
                ret = ret.concat(WriterUtil.HEX_STRING_START)
                ret = ret.concat(Util.convertStringToAscii(Util.convertByteArrayToHexString(val)))
                ret = ret.concat(WriterUtil.HEX_STRING_END)
                ret.push(WriterUtil.SPACE)
            }
            ret.push(WriterUtil.ARRAY_END)
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.ROOT)
        ret.push(WriterUtil.SPACE)

        if (!trailer.root)
            throw Error("No root object in trailer, although this is an cross reference table document")

        ret = ret.concat(WriterUtil.writeReferencePointer(trailer.root, true))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.PREV)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.parser.documentHistory.getRecentUpdate().start_pointer))
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.DICT_END)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.STARTXREF)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(Util.convertNumberToCharArray(posXref))
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret = ret.concat(WriterUtil.EOF)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return ret
    }

    /**
     * Writes the annations at the end of the PDF byte representation and returns
     * the byte array
     * */
    write(): Uint8Array {
        let pageWiseSorted = this.sortPageWise(this.annotations)

        let ptr: number = this.data.length

        let new_data: number[] = []

        // Fix case that there is no linebreak after the end of the file
        if (this.data[ptr - 1] === 70) { // 70 = 'F' (from [%%EO]F
            new_data.push(WriterUtil.CR)
            new_data.push(WriterUtil.LF)
            ptr += 2
        }

        for (let key in pageWiseSorted) {
            let pageAnnots = pageWiseSorted[key]

            // write the array referencing to annotations of a certain page
            // it also removes references of annotations that must be deleted
            let annot_array = this.writeAnnotArray(pageAnnots, this.toDelete)
            this.xrefs.push({
                id: annot_array.ptr.obj,
                pointer: ptr,
                generation: annot_array.ptr.generation,
                free: false,
                update: true
            })

            new_data = new_data.concat(annot_array.data)
            ptr += annot_array.data.length

            // add adapted page object if it exists -- In the case the page had no annotation yet there exists
            // no such array referring to its annotations. A pointer to such an array must be added to the
            // page object. If this was done the `pageData` paramater is set and contains the adapted page object
            if (annot_array.pageData.length > 0) {
                this.xrefs.push({
                    id: annot_array.pageReference.obj,
                    pointer: ptr,
                    generation: annot_array.pageReference.generation,
                    free: false,
                    update: true
                })
                new_data = new_data.concat(annot_array.pageData)
                ptr += annot_array.pageData.length
            }

            // writes the actual annotation object
            for (let annot of pageAnnots) {
                /**
                 * write additional objects, that are related to the newly created or adapted annotation
                 * */
                for (let add_obj of annot.additional_objects_to_write) {
                    let data : number[] = add_obj.func(add_obj.obj, this.cryptoInterface)
                    this.xrefs.push({
                        id: add_obj.obj.object_id.obj,
                        pointer: ptr,
                        generation: add_obj.obj.object_id.generation,
                        free: false,
                        update: true
                    })

                    new_data = new_data.concat(data)
                    ptr += data.length
                }

                let annot_obj = this.writeAnnotationObject(annot)
                this.xrefs.push({
                    id: annot_obj.ptr.obj,
                    pointer: ptr,
                    generation: annot_obj.ptr.generation,
                    free: false,
                    update: true
                })

                new_data = new_data.concat(annot_obj.data)
                ptr += annot_obj.data.length
            }
        }

        // take all annotations that are not deleted yet
        let _toDelete: Annotation[] = this.toDelete.filter((t) => !t.is_deleted)
        let pageWiseSortedToDelete = this.sortPageWise(_toDelete)

        // adapt the remaining annotation reference tables
        for (let key in pageWiseSortedToDelete) {
            let del_data = this.updatePageAnnotationReferenceArray(pageWiseSortedToDelete[key])
            this.xrefs.push({
                id: del_data.ptr.obj,
                pointer: ptr,
                generation: del_data.ptr.generation,
                free: false,
                update: true
            })

            new_data = new_data.concat(del_data.data)
            ptr += del_data.data.length
        }

        // write new fonts
        let fonts : Font[] = this.parser.getFonts().getFontsToWrite()

        for (let font of fonts) {
            if (!font.object_id)
                throw Error("Font has no object id")

            let font_data = font.writeFont()
            this.xrefs.push({
                id: font.object_id.obj,
                pointer: ptr,
                generation: font.object_id.generation,
                free: false,
                update: true
            })

            new_data = new_data.concat(font_data)
            ptr += font_data.length
        }


        // at this point all references to annotation objects in pages should be removed and we can free
        // the annotation object ids
        for (let toDel of this.toDelete) {
            if (!toDel.object_id)
                continue

            this.xrefs.push({
                id: toDel.object_id.obj,
                pointer: -1,
                generation: toDel.object_id.generation + 1, // increase generation
                free: true,
                update: false
            })
        }

        let crtable = this.writeCrossSiteReferenceTable()
        new_data = new_data.concat(crtable)

        let trailer = this.writeTrailer(ptr)
        new_data = new_data.concat(trailer)

        let new_data_array = new Uint8Array(new_data)

        let ret_array = new Uint8Array(this.data.length + new_data_array.length)
        ret_array.set(this.data)
        ret_array.set(new_data, this.data.length)

        return ret_array
    }

    /**
     * Removes the given annotation
     * */
    updatePageAnnotationReferenceArray(toDelete: Annotation[]): { ptr: ReferencePointer, data: number[] } {
        let page = toDelete[0].pageReference

        if (!page)
            throw Error("Missing page reference")

        if (!page.object_id) {
            throw Error("Page without object id")
        }

        let references: ReferencePointer[] = page.annots

        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a: any) => {
            let toDel = toDelete.find((t) => (<any>t.object_id).obj === a.obj && (<any>t.object_id).generation === a.generation)

            if (toDel) {
                toDel.is_deleted = true
                return false
            }

            return true
        })

        let refArray_id: any = page.annotsPointer

        let ret: number[] = WriterUtil.writeReferencePointer(refArray_id)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret.push(WriterUtil.ARRAY_START)


        for (let an of references) {
            ret = ret.concat(WriterUtil.writeReferencePointer(an, true))
            ret.push(WriterUtil.SPACE)
        }

        ret.push(WriterUtil.ARRAY_END)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return { ptr: refArray_id, data: ret }
    }
}
