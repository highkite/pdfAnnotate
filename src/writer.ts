import { Util } from './util'
import { ObjectUtil } from './object-util'
import { Annotation, ReferencePointer, PDFDocumentParser, Page, CryptoInterface } from './parser'
import { XRef } from './document-history'
import { WriterUtil } from './writer-util'

/**
 * Creats the byte array that must be attached to the end of the document
 * */
export class Writer {

    public static N: number = 110
    public static F: number = 102

    public static SPACE: number = 32
    public static CR: number = 13
    public static LF: number = 10
    public static OBJ: number[] = [111, 98, 106]
    public static ENDOBJ: number[] = [101, 110, 100, 111, 98, 106]
    public static ENCRYPT: number[] = [47, 69, 110, 99, 114, 121, 112, 116]
    public static ARRAY_START: number = 91
    public static ARRAY_END: number = 93
    public static DICT_START: number[] = [60, 60]
    public static HEX_STRING_START: number[] = [60]
    public static HEX_STRING_END: number[] = [62]
    public static DICT_END: number[] = [62, 62]
    public static TYPE_ANNOT: number[] = [47, 84, 121, 112, 101, Writer.SPACE, 47, 65, 110, 110, 111, 116]
    public static RECT: number[] = [47, 82, 101, 99, 116]
    public static SUBTYPE: number[] = [47, 83, 117, 98, 116, 121, 112, 101]
    public static UPDATE_DATE: number[] = [47, 77] // = '/M'
    public static AUTHOR: number[] = [47, 84] // = '/T'
    public static CONTENTS: number[] = [47, 67, 111, 110, 116, 101, 110, 116, 115] // = '/Contents'
    public static BRACKET_START: number = 40
    public static BRACKET_END: number = 41
    public static FLAG: number[] = [47, 70] // = '/F'
    public static ID: number[] = [47, 78, 77] // = '/NM'
    public static DOCUMENT_ID: number[] = [47, 73, 68] // = '/ID'
    public static COLOR: number[] = [47, 67] // = '/C'
    public static FILL: number[] = [47, 73, 67] // = '/IC'
    public static OPACITY: number[] = [47, 67, 65] // = '/CA'
    public static BORDER: number[] = [47, 66, 111, 114, 100, 101, 114] // = '/Border'
    public static PAGE_REFERENCE: number[] = [47, 80] // = '/P'
    public static DEFAULT_APPEARANCE: number[] = [47, 68, 65] // = '/DA'
    public static INKLIST: number[] = [47, 73, 110, 107, 76, 105, 115, 116] // = '/InkList'

    public static TRAILER: number[] = [116, 114, 97, 105, 108, 101, 114] // = 'trailer'
    public static SIZE: number[] = [47, 83, 105, 122, 101] // = '/Size'
    public static ROOT: number[] = [47, 82, 111, 111, 116] // = '/Root'
    public static PREV: number[] = [47, 80, 114, 101, 118] // ='/Prev'
    public static STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static EOF: number[] = [37, 37, 69, 79, 70] // = '%%EOF'

    public static XREF: number[] = [120, 114, 101, 102] // = 'xref'

    public static QUADPOINTS: number[] = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115] // = '/QuadPoints'
    public static VERTICES: number[] = [47, 86, 101, 114, 116, 105, 99, 101, 115] // = '/Vertices'
    public static NAME: number[] = [47, 78, 97, 109, 101] // = '/Name'
    public static DRAFT: number[] = [47, 68, 114, 97, 102, 116] // = '/Draft'

    public static SY: number[] = [47, 83, 121] // = '/Sy'
    public static P: number = 80

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

            let new_data: Uint8Array = new Uint8Array(ref_ptr.length + Writer.OBJ.length + obj_data.length + Writer.ENDOBJ.length)
            new_data.set(ref_ptr)
            new_data.set(Writer.OBJ, ref_ptr.length)
            new_data.set(obj_data, Writer.OBJ.length + ref_ptr.length)
            new_data.set(Writer.ENDOBJ, Writer.OBJ.length + obj_data.length + ref_ptr.length)

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
        ret.push(Writer.SPACE)
        ret = ret.concat(Writer.OBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)
        ret.push(Writer.ARRAY_START)


        for (let an of references) {
            ret = ret.concat(WriterUtil.writeReferencePointer(an, true))
            ret.push(Writer.SPACE)
        }

        ret.push(Writer.ARRAY_END)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        ret = ret.concat(Writer.ENDOBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        return { ptr: refArray_id, data: ret, pageReference: page.object_id, pageData: page_data }
    }

    /**
     * Converts a subtype to its byte representation
     * */
    convertSubtype(st: string): number[] {
        switch (st) {
            case 'Text':
            case '/Text':
                return [47, 84, 101, 120, 116] // = '/Text'
            case 'Highlight':
            case '/Highlight':
                return [47, 72, 105, 103, 104, 108, 105, 103, 104, 116] // = '/Highlight'
            case 'Underline':
            case '/Underline':
                return [47, 85, 110, 100, 101, 114, 108, 105, 110, 101] // = '/Underline'
            case 'Squiggly':
            case '/Squiggly':
                return [47, 83, 113, 117, 105, 103, 103, 108, 121] // = '/Squiggly'
            case 'StrikeOut':
            case '/StrikeOut':
                return [47, 83, 116, 114, 105, 107, 101, 79, 117, 116] // = '/StrikeOut'
            case 'Square':
            case '/Square':
                return [47, 83, 113, 117, 97, 114, 101] // = '/Square'
            case 'Circle':
            case '/Circle':
                return [47, 67, 105, 114, 99, 108, 101] // = '/Circle'
            case 'FreeText':
            case '/FreeText':
                return [47, 70, 114, 101, 101, 84, 101, 120, 116] // = '/FreeText'
            case 'Polygon':
            case '/Polygon':
                return [47, 80, 111, 108, 121, 103, 111, 110] // = '/Polygon'
            case 'PolyLine':
            case '/PolyLine':
                return [47, 80, 111, 108, 121, 76, 105, 110, 101] // '/PolyLine
            case 'Stamp':
            case '/Stamp':
                return [47, 83, 116, 97, 109, 112] // = '/Stamp'
            case 'Caret':
            case '/Caret':
                return [47, 67, 97, 114, 101, 116] // = '/Caret'
            case 'Ink':
            case '/Ink':
                return [47, 73, 110, 107] // = '/Ink'
        }

        return []
    }

    /**
     * Writes an annotation object
     * */
    writeAnnotationObject(annot: Annotation): { ptr: ReferencePointer, data: number[] } {
        if (!annot.author)
            annot.author = ""

        if (!annot.contents)
            annot.contents = ""

        if (!annot.object_id)
            throw Error("No object_id")

        let ret: number[] = WriterUtil.writeReferencePointer(annot.object_id)
        ret.push(Writer.SPACE)
        ret = ret.concat(Writer.OBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)
        ret = ret.concat(Writer.DICT_START)
        ret = ret.concat(Writer.TYPE_ANNOT)
        ret.push(Writer.SPACE)

        if (annot.rect && annot.rect.length > 0) {
            ret = ret.concat(Writer.RECT)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(annot.rect))
            ret.push(Writer.SPACE)
        }

        ret = ret.concat(Writer.SUBTYPE)
        ret.push(Writer.SPACE)
        ret = ret.concat(this.convertSubtype(annot.type))
        ret.push(Writer.SPACE)

        ret = ret.concat(Writer.UPDATE_DATE)
        ret.push(Writer.SPACE)
        ret.push(Writer.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(this.cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(annot.updateDate)), annot.object_id))))
        ret.push(Writer.BRACKET_END)
        ret.push(Writer.SPACE)

        ret = ret.concat(Writer.AUTHOR)
        ret.push(Writer.SPACE)
        ret.push(Writer.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(this.cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(annot.author)), annot.object_id))))
        ret.push(Writer.BRACKET_END)
        ret.push(Writer.SPACE)

        if (annot.contents) {
            ret = ret.concat(Writer.CONTENTS)
            ret.push(Writer.SPACE)
            ret.push(Writer.BRACKET_START)
            ret = ret.concat(Array.from(Util.escapeString(this.cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(annot.contents)), annot.object_id))))
            ret.push(Writer.BRACKET_END)
            ret.push(Writer.SPACE)
        }

        ret = ret.concat(Writer.ID)
        ret.push(Writer.SPACE)
        ret.push(Writer.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(this.cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(annot.id)), annot.object_id))))
        ret.push(Writer.BRACKET_END)
        ret.push(Writer.SPACE)

        if (annot.annotation_flag) {
            ret = ret.concat(Writer.FLAG)
            ret.push(Writer.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(annot.annotation_flag))
            ret.push(Writer.SPACE)
        }

        if (annot.color) {
            if (annot.color.r > 1) annot.color.r /= 255
            if (annot.color.g > 1) annot.color.g /= 255
            if (annot.color.b > 1) annot.color.b /= 255

            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.COLOR)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([annot.color.r, annot.color.g, annot.color.b]))
            ret.push(Writer.SPACE)
        }

        if (annot.fill) {
            if (annot.fill.r > 1) annot.fill.r /= 255
            if (annot.fill.g > 1) annot.fill.g /= 255
            if (annot.fill.b > 1) annot.fill.b /= 255

            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.FILL)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([annot.fill.r, annot.fill.g, annot.fill.b]))
            ret.push(Writer.SPACE)
        }


        let opacity = annot.opacity
        if (opacity) {
            ret = ret.concat(Writer.OPACITY)
            ret.push(Writer.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(opacity))
            ret.push(Writer.SPACE)
        }

        if (annot.border) {
            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.BORDER)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([annot.border.horizontal_corner_radius, annot.border.vertical_corner_radius, annot.border.border_width]))
            ret.push(Writer.SPACE)
        }

        if (annot.defaultAppearance) {
            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.DEFAULT_APPEARANCE)
            ret.push(Writer.SPACE)
            ret.push(Writer.BRACKET_START)
            ret = ret.concat(Util.convertStringToAscii(annot.defaultAppearance))
            ret.push(Writer.BRACKET_END)
            ret.push(Writer.SPACE)
        }

        if (!annot.pageReference)
            throw Error("No page reference")

        if (annot.pageReference.object_id) {
            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.PAGE_REFERENCE)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeReferencePointer(annot.pageReference.object_id, true))
            ret.push(Writer.SPACE)
        }

        if (annot.quadPoints) {
            ret = ret.concat(Writer.QUADPOINTS)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(annot.quadPoints))
            ret.push(Writer.SPACE)
        }

        if (annot.vertices) {
            ret = ret.concat(Writer.VERTICES)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(annot.vertices))
            ret.push(Writer.SPACE)
        }

        if (annot.stampType) {
            ret = ret.concat(Writer.NAME)
            ret.push(Writer.SPACE)
            ret = ret.concat(Writer.DRAFT)
            ret.push(Writer.SPACE)
        }

        if (annot.caretSymbol) {
            ret = ret.concat(Writer.SY)
            ret.push(Writer.SPACE)
            ret.push(Writer.P)
            ret.push(Writer.SPACE)
        }

        if (annot.inkList) {
            ret = ret.concat(Writer.INKLIST)
            ret.push(Writer.SPACE)
            ret = ret.concat(WriterUtil.writeNestedNumberArray(annot.inkList))
            ret.push(Writer.SPACE)
        }

        ret = ret.concat(Writer.DICT_END)
        ret.push(Writer.CR)
        ret.push(Writer.LF)
        ret = ret.concat(Writer.ENDOBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        return { ptr: annot.object_id, data: ret }
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
        let ret: number[] = Writer.XREF
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        this.xrefs = this.applyObjectFreeing(this.xrefs)

        let ordered_sequences = this.computeXrefSequences()

        for (let sequence of ordered_sequences) {
            let head = sequence[0]
            ret = ret.concat(Util.convertNumberToCharArray(head.id))
            ret.push(Writer.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(sequence.length))
            ret.push(Writer.CR)
            ret.push(Writer.LF)

            for (let i = 0; i < sequence.length; ++i) {
                let _ret: number[] = []
                _ret = _ret.concat(WriterUtil.pad(10, sequence[i].pointer))
                _ret.push(Writer.SPACE)
                _ret = _ret.concat(WriterUtil.pad(5, sequence[i].generation))
                _ret.push(Writer.SPACE)

                if (sequence[i].free)
                    _ret.push(Writer.F)

                if (sequence[i].update)
                    _ret.push(Writer.N)

                _ret.push(Writer.CR)
                _ret.push(Writer.LF)

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
        let ret: number[] = Writer.TRAILER
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        ret = ret.concat(Writer.DICT_START)
        ret = ret.concat(Writer.SIZE)
        ret.push(Writer.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.parser.documentHistory.trailerSize))
        ret.push(Writer.SPACE)

        if (this.parser.documentHistory.isEncrypted()) {
            ret = ret.concat(Writer.ENCRYPT)
            ret.push(Writer.SPACE)
            let enc_ref = this.parser.getCryptoInterface().getEncryptionDictReference()
            if (!enc_ref)
                throw Error("No reference pointer to encryption dictionary")
            ret = ret.concat(WriterUtil.writeReferencePointer(enc_ref, true))
            ret.push(Writer.SPACE)
        }

        let trailer = this.parser.documentHistory.getRecentUpdate()

        if (trailer.id) {
            ret = ret.concat(Writer.DOCUMENT_ID)
            ret.push(Writer.SPACE)
            ret.push(Writer.ARRAY_START)

            for (let val of trailer.id) {
                ret.push(Writer.SPACE)
                ret = ret.concat(Writer.HEX_STRING_START)
                ret = ret.concat(Util.convertStringToAscii(Util.convertByteArrayToHexString(val)))
                ret = ret.concat(Writer.HEX_STRING_END)
                ret.push(Writer.SPACE)
            }
            ret.push(Writer.ARRAY_END)
            ret.push(Writer.SPACE)
        }

        ret = ret.concat(Writer.ROOT)
        ret.push(Writer.SPACE)

        if (!trailer.root)
            throw Error("No root object in trailer, although this is an cross reference table document")

        ret = ret.concat(WriterUtil.writeReferencePointer(trailer.root, true))
        ret.push(Writer.SPACE)

        ret = ret.concat(Writer.PREV)
        ret.push(Writer.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.parser.documentHistory.getRecentUpdate().start_pointer))
        ret.push(Writer.SPACE)
        ret = ret.concat(Writer.DICT_END)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        ret = ret.concat(Writer.STARTXREF)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        ret = ret.concat(Util.convertNumberToCharArray(posXref))
        ret.push(Writer.CR)
        ret.push(Writer.LF)
        ret = ret.concat(Writer.EOF)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

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
            new_data.push(Writer.CR)
            new_data.push(Writer.LF)
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
        ret.push(Writer.SPACE)
        ret = ret.concat(Writer.OBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)
        ret.push(Writer.ARRAY_START)


        for (let an of references) {
            ret = ret.concat(WriterUtil.writeReferencePointer(an, true))
            ret.push(Writer.SPACE)
        }

        ret.push(Writer.ARRAY_END)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        ret = ret.concat(Writer.ENDOBJ)
        ret.push(Writer.CR)
        ret.push(Writer.LF)

        return { ptr: refArray_id, data: ret }
    }
}
