import { ReferencePointer } from './parser';
import { Util, ExtractionResult } from './util';
import { ObjectUtil } from './object-util'
import { Stream } from './stream';

export interface XRef {
    id: number
    pointer: number
    generation: number
    free: boolean
    update: boolean
    compressed?: boolean
}

interface SubSectionHeader {
    id: number
    count: number
    end_ptr: number // points to the end of the sub section header
}

interface Trailer {
    size: number
    root: ReferencePointer
    prev?: number
    is_encrypted : boolean // true, if the document is enrypted otherwise false
    encrypt?: ReferencePointer // reference to the encryption dictionary if document is encrypted
    id? : Uint8Array[] // document id
}

var generateDefaultTrailer = () => {
    return { size: -1, root: { obj: -1, generation: -1 }, is_encrypted : false}
}

export interface ObjectLookupTable {
    [id: number]: XRef
}

export interface UpdateSection {
    start_pointer: number
    size: number
    refs: XRef[]
    prev?: number
    root?: ReferencePointer
    is_encrypted : boolean// true, if the document is enrypted otherwise false
    encrypt?: ReferencePointer// reference to the encryption dictionary if document is encrypted
    id?: Uint8Array[]// document id
}

/**
 * Holds the complete information of one update section in the Cross-Reference-Stream Object format.
 *
 * */
export class CrossReferenceStreamObject {
    public refs: XRef[] = []

    constructor(private data: Uint8Array) { }

    public trailer: Trailer = generateDefaultTrailer()

    public streamLength: number = -1

    public w: number[] = []
    public index: number[] = []
    private start_pointer: number = 0

    /**
     * Extracts a cross reference section that is a continuous definition of cross reference entries
     * */
    extractCrossReferenceSection(first_object_id: number, object_count: number, stream: Stream) {
        let current_object_id = first_object_id

        for (let i = 0; i < object_count; ++i) {
            let _type = stream.getNBytesAsNumber(this.w[0])

            let xref = undefined

            switch (_type) {
                case 0:
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: true, update: false }
                    break
                case 1:
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: false, update: true }
                    break
                case 2:
                    // in this case the pointer becomes the stream object id that contains the compressed object and the generation represents the index of the object in the stream
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: true, update: false, compressed: true }
                    break
            }


            if (xref)
                this.refs.push(xref)
            else
                throw Error(`Invalid cross-reference-stream type ${_type}`)
        }
    }

    /**
     * Extracts the cross-reference-table from the stream
     * */
    extractStream(stream: Stream) {
        let cross_reference_length = this.w.reduce((a, b) => a + b, 0)

        // check if the data stream has a valid size
        if (stream.getLength() !== cross_reference_length * this.index.filter((v, i) => i % 2 === 1).reduce((a, b) => a + b, 0))
            throw Error(`Invalid stream length - is ${stream.getLength()} but should be ${cross_reference_length * this.index.filter((v, i) => i % 2 === 1).reduce((a, b) => a + b, 0)}`)

        if (this.index.length % 2 === 1)
            throw Error(`Invalid index flag ${this.index}`)

        for (let i = 0; i < this.index.length; i += 2) {
            this.extractCrossReferenceSection(this.index[i], this.index[i + 1], stream)
        }

    }

    /**
     * Parses the Cross-Reference-Stream-Object at the given index
     * */
    extract(xref: XRef) {
        let index = xref.pointer
        this.start_pointer = index
        let crs_object = ObjectUtil.extractObject(this.data, xref)

        let ptr_object_end = Util.locateSequence(Util.ENDOBJ, this.data, index)
        this.data = this.data.slice(index, ptr_object_end)

        // check type
        if (crs_object.value["/Type"] !== "/XRef")
            throw Error(`Invalid Cross-Reference-Stream-object type: ${crs_object.value["/Type"]}`)

        // extract size
        if (!crs_object.value["/Size"])
            throw Error(`Invalid size value ${crs_object.value["/Size"]}`)
        this.trailer.size = crs_object.value["/Size"]

        // extract ROOT if it exists
        if (crs_object.value["/Root"])
            this.trailer.root = crs_object.value["/Root"]

        // extract PREV if it exists
        if (crs_object.value["/Prev"])
            this.trailer.prev = crs_object.value["/Prev"]

        // extract W parameter
        this.w = crs_object.value["/W"]

        if (!this.w || 0 === this.w.length)
            throw Error("Invalid /W parameter in Cross-Reference-Stream-Object")

        // extract Index parameter
        this.index = crs_object.value["/Index"]

        if (!this.index || 0 === this.index.length)
            this.index = [0, crs_object.value["/Size"]]

        if (!crs_object.stream)
            throw Error("Missing stream at cross reference stream object")

        let stream = crs_object.stream

        if (!stream)
            throw Error("Invalid stream object")

        this.streamLength = crs_object.value["/Length"]

        this.extractStream(stream)

        // the cross-reference-stream object is also a known reference
        this.refs.push({ id: crs_object.id.obj, pointer: this.start_pointer, generation: crs_object.id.generation, free: false, update: true })
    }

    /**
     * Returs the update section representing this CrossReferenceStreamObject
     * */
    getUpdateSection(): UpdateSection {
        return {
            start_pointer: this.start_pointer,
            size: this.trailer.size,
            prev: this.trailer.prev,
            root: this.trailer.root,
            refs: this.refs,
            is_encrypted: this.trailer.is_encrypted,
            encrypt: this.trailer.encrypt,
            id: this.trailer.id
        }
    }
}

/**
 * Holds the complete information of one update section in the Cross-Reference-Table format. That comprises:
 * - the body update
 * - the crossiste reference table
 * - the trailer
 * */
export class CrossReferenceTable {
    public refs: XRef[] = []

    public start_pointer: number = -1

    public trailer: Trailer = generateDefaultTrailer()

    constructor(private data: Uint8Array) { }

    /**
     * Returns the reference with the given id
     * */
    getReference(id: number): XRef | undefined {
        for (let ref of this.refs) {
            if (ref.id === id)
                return ref
        }

        return undefined
    }

    /**
     * Returs the update section representing this CrossReferenceTable
     * */
    getUpdateSection(): UpdateSection {
        return {
            start_pointer: this.start_pointer,
            size: this.trailer.size,
            refs: this.refs,
            prev: this.trailer.prev,
            root: this.trailer.root,
            is_encrypted: this.trailer.is_encrypted,
            encrypt: this.trailer.encrypt,
            id: this.trailer.id
        }
    }

    /**
     * Extracts the header of a sub section. For instance
     *
     * 0 1 // <--
     * ...
     *
     * So the obejct id 0 and the number of sub section entries 1
     * */
    extractSubSectionHeader(index: number): SubSectionHeader {
        let ptr = Util.locateDelimiter(this.data, index)

        let obj_id = Util.extractNumber(this.data, index, ptr).result

        ptr = Util.skipDelimiter(this.data, ptr + 1)

        let ptr_ref_count = ptr

        ptr = Util.locateDelimiter(this.data, ptr)

        let reference_count = Util.extractNumber(this.data, ptr_ref_count, ptr).result

        return { id: obj_id, count: reference_count, end_ptr: ptr }
    }

    /**
     * Extracts the references of a sub section. The index points to the start of
     * the first reference and count represents the number of references that are
     * contained in the subsection.
     *
     * The first_object_id is the id provided in the sub section header
     *
     * By definition of the PDF standard one entry is 20 bytes long, but since the standard is rarely respected we better make it failsafe
     * */
    extractReferences(index: number, count: number, first_object_id: number): {refs: XRef[], end_index: number} {
        let _refs: XRef[] = []

        let res : ExtractionResult = { result: null, start_index: -1, end_index: index}

        for (let i = 0; count === -1 || i < count; ++i) {
            res = Util.readNextWord(this.data, res.end_index + 1)

            let pointer = Util.extractNumber(res.result, 0).result

            res = Util.readNextWord(this.data, res.end_index + 1)

            let generation = Util.extractNumber(res.result, 0).result

            res = Util.readNextWord(this.data, res.end_index + 1)

            let ptr_flag = res.result

            let isFree = ptr_flag[0] === 102 // 102 = f
            _refs.push({
                id: first_object_id + i,
                pointer: pointer,
                generation: generation,
                free: isFree,
                update: !isFree
            })

            // if the word trailer occurs stop since we reached the end
            if (this.data[Util.skipSpaces(this.data, res.end_index + 1)] === 116) {
                break
            }
        }

        return {refs: _refs, end_index: res.end_index}
    }

    /**
     * Extracts the trailer of the subsection that means the part stating with the 'trailer' keyword and
     * in particular the trailer dictionary
     * */
    extractTrailer(index: number): Trailer {
        // run forward to the dictionary start
        index = Util.locateSequence(Util.DICT_START, this.data, index) + 2

        let obj: any = {}
        ObjectUtil.extractDictKeyRec(this.data, index, obj)

        return {
            size: obj["/Size"],
            root: obj["/Root"],
            prev: obj["/Prev"] ? obj["/Prev"] : undefined,
            is_encrypted: obj["/Encrypt"] ? true : false,
            encrypt: obj["/Encrypt"] ? obj["/Encrypt"] : undefined,
            id: obj["/ID"] ? obj["/ID"] : undefined
        }
    }

    /**
     * Parses the Cross Reference Table at the given index
     * */
    extract(index: number, skipXREFString : boolean = false) {
        this.start_pointer = index

        let start_ptr = index

        if (!skipXREFString)
            start_ptr += 5 // + length(xref) + blank

        start_ptr = Util.skipDelimiter(this.data, start_ptr)

        // check if there actually is a subsection header
        // if the line finishes with an 'f' we know that it starts with the first cross reference entry
        let tmp_ptr = start_ptr
        while(tmp_ptr < this.data.length && this.data[tmp_ptr] !== 102 && this.data[tmp_ptr] !== 13 && this.data[tmp_ptr] !== 10) tmp_ptr++

        let first_header = {id: 0, count: -1, end_ptr: start_ptr - 1}

        if (this.data[tmp_ptr] === 10 || this.data[tmp_ptr] === 13)
            first_header = this.extractSubSectionHeader(start_ptr)

        let ref_start = Util.skipDelimiter(this.data, first_header.end_ptr + 1)

        // extract first reference
        let reference_result = this.extractReferences(ref_start, first_header.count, first_header.id)
        this.refs = this.refs.concat(reference_result.refs)

        // extract remaining references
        start_ptr = Util.skipSpaces(this.data, reference_result.end_index + 1)

        while (first_header.count > 0 && this.data[start_ptr] !== 116) { // 116 = 't' start of the word trailer that concludes the crosssite reference section
            let header = this.extractSubSectionHeader(start_ptr)

            ref_start = Util.skipDelimiter(this.data, header.end_ptr + 1)

            let references = this.extractReferences(ref_start, header.count, header.id)

            this.refs = this.refs.concat(references.refs)

            start_ptr = Util.skipSpaces(this.data, references.end_index + 1)
        }

        this.trailer = this.extractTrailer(start_ptr)
    }
}

/**
 * Represents the complete PDF document history and therefore holds the
 * updated body parts, the crosssite references and the document trailers
 * */
export class DocumentHistory {
    public updates: UpdateSection[] = []

    public trailerSize: number = -1

    /**
     * Holds object ids that were formerly freed and are now 'already' reused.
     * This is used to prevent a freed object a second time */
    private already_reused_ids: XRef[] = []

    constructor(private data: Uint8Array) {
        this.data = new Uint8Array(data)
    }

    /**
     * Extracts the cross reference table starting at the given index
     * */
    extractCrossReferenceTable(index: number, skipXREFString : boolean = false): CrossReferenceTable {
        let crt = new CrossReferenceTable(this.data)
        crt.extract(index, skipXREFString)

        return crt
    }

    /**
     * Extracts the cross reference stream object starting at the given index
     * */
    extractCrossReferenceStreamObject(xref: XRef): CrossReferenceStreamObject {
        let crs = new CrossReferenceStreamObject(this.data)
        crs.extract(xref)

        return crs
    }

    /**
     * Extracts the last update section of a document (that means
     * the most recent update locating at the end of the file)
     *
     * Handles missing or wrong pointers
     * and also decides, whether the cross reference table is provided as stream object or regular
     * */
    extractDocumentEntry(): {pointer: number, sectionType: string} {
        let ptr = this.data.length - 1


        let ptr_startxref = Util.locateSequenceReversed(Util.STARTXREF, this.data, ptr, true) + 9

        // identify cross reference section type
        let section_type : string = "UNKNOWN"
        let preceding_word_index = Util.skipSpacesReverse(this.data, ptr_startxref - 10)

        if (Util.areArraysEqual(this.data.slice(preceding_word_index - 5, preceding_word_index + 1), Util.ENDOBJ)) {
            section_type = "stream"
        } else {
            section_type = "trailer"
        }

        // try to locate cross reference table manually
        let locateXREFStartManually = () => {
            let new_ptr = Util.locateSequenceReversed(Util.XREF, this.data, this.data.length)
            section_type = "trailer"

            while (new_ptr > 0 && this.data[new_ptr - 1] === 116) {// 116 = 't' -> we are looking for 'xref' not 'startxref'
                new_ptr = Util.locateSequenceReversed(Util.XREF, this.data, new_ptr - 1)
            }

            if (new_ptr === -1) { // than we try to identify the word 'trailer' and run backwards as long as we find a symbol that is not a number or 'f' or 'n' - what could possibly go wrong
                section_type = "trailer_without_xref_start"
                new_ptr = Util.locateSequenceReversed(Util.TRAILER, this.data, this.data.length)

                if (new_ptr > 0) {
                    new_ptr--
                    while (new_ptr > 0 && (Util.isSpace(this.data[new_ptr]) || Util.isNumber(this.data[new_ptr]) || this.data[new_ptr] === 110 || //110 = 'n' 102 = 'f'
                        this.data[new_ptr] === 102)) --new_ptr

                    new_ptr = Util.skipSpaces(this.data, new_ptr + 1)
                }
            }

            return {pointer: new_ptr, sectionType: section_type}
        }

        try {
            ptr = Util.extractNumber(this.data, ptr_startxref).result
        } catch (err) {
            return locateXREFStartManually()
        }

        if (ptr > this.data.length) {
            return locateXREFStartManually()
        }

        // start section with XREF?
        if (section_type !== "stream" && !(this.data[ptr] === Util.XREF[0] && this.data[ptr + 1] === Util.XREF[1] && this.data[ptr + 2] === Util.XREF[2] && this.data[ptr + 3] === Util.XREF[3])) {
            return locateXREFStartManually()
        }

        return {pointer: ptr, sectionType: section_type}
    }

    /**
     * Extracts the entire update sections
     *
     * Needs to adapt depending whether the document uses a cross-reference table or a cross-reference stream object
     * */
    extractDocumentHistory() {

        let document_entry = this.extractDocumentEntry()
        let ptr = document_entry.pointer

        if (ptr === -1) {
            throw Error("Could not locate document entry")
        }

        let xref = {
            id: -1,
            pointer: ptr,
            generation: 0,
            free: false,
            update: true
        }

        this.extractCrossReferenceTables(document_entry, xref)

        // adapt pointer in case there is junk before the header
        let pdf_header_start = Util.locateSequence(Util.VERSION, this.data, 0)

        if (pdf_header_start !== 0 && pdf_header_start !== -1) {
            for (let updateSection of this.updates) {
                for(let ref of updateSection.refs) {
                    ref.pointer += pdf_header_start
                }
            }
        }
    }


    /**
     * Extracts the cross reference tables of the entire document
     * */
    extractCrossReferenceTables(document_entry : {pointer: number, sectionType: string}, xref : XRef) {
        let ptr = document_entry.pointer

        // Handle cross reference table
        if (document_entry.sectionType === "trailer") {

            let crt = this.extractCrossReferenceTable(ptr)

            this.updates.push(crt.getUpdateSection())

            let us = this.updates[0]

            while (us.prev) {
                crt = this.extractCrossReferenceTable(us.prev)
                this.updates.push(crt.getUpdateSection())
                us = this.updates[this.updates.length - 1]
            }

        } else if (document_entry.sectionType === "stream") { // handle cross reference stream object
            let crs = this.extractCrossReferenceStreamObject(xref)

            this.updates.push(crs.getUpdateSection())

            let us = this.updates[0]

            while (us.prev) {
                let _xref = {
                    id: -1,
                    pointer: us.prev,
                    generation: 0,
                    free: false,
                    update: true
                }
                crs = this.extractCrossReferenceStreamObject(_xref)
                this.updates.push(crs.getUpdateSection())
                us = this.updates[this.updates.length - 1]
            }
        } else if (document_entry.sectionType === "trailer_without_xref_start") {
            let crt = this.extractCrossReferenceTable(ptr, true)

            this.updates.push(crt.getUpdateSection())

            let us = this.updates[0]

            while (us.prev) {
                crt = this.extractCrossReferenceTable(us.prev)
                this.updates.push(crt.getUpdateSection())
                us = this.updates[this.updates.length - 1]
            }
        } else {
            throw Error("Could not part cross reference table")
        }

        this.trailerSize = this.extractReferenceNumberCount()
    }

    /**
     * Counts the number of specified objects
     * */
    extractReferenceNumberCount() : number {
        let visited : number[] = []
        let count = 0
        for(let update of this.updates) {
            for(let ref of update.refs) {
                if (!visited.includes(ref.id)) {
                    count++
                    visited.push(ref.id)
                }
            }
        }

        return count
    }

    /**
     * Primarily for clarification. The first element is the most recent. We parsed backwards.
     * */
    getRecentUpdate(): UpdateSection {
        return this.updates[0]
    }

    /**
     * Indicates whether the PDF document is encrypted
     * */
    isEncrypted() : boolean {
        return this.getRecentUpdate().is_encrypted
    }

    /**
     * By running through the PDf history we can for every object id determine the pointer address to the most recent version, and
     * whether the object id is still in used.
     *
     * So the object lookup table has an entry for every existing object id, a pointer to the the most recent object definition, as long
     * as the object exists, or an according indication otherwise.
     * */
    createObjectLookupTable(): ObjectLookupTable {
        let objTable: { [id: number]: XRef } = {}

        let update: UpdateSection = this.getRecentUpdate()

        let i = 1
        while (Object.keys(objTable).length < this.extractReferenceNumberCount()) {
            let refs = update.refs

            for (let ref of refs) {
                if (!objTable.hasOwnProperty(ref.id)) {
                    objTable[ref.id] = ref
                }
            }

            update = this.updates[i]
            ++i
        }

        return objTable
    }

    /**
     * Returns the new object id. It primarily tries to reuse an existing id, but if no such exists it will return a
     * new one
     * */
    getFreeObjectId(): ReferencePointer {
        let objectLookupTable: ObjectLookupTable = this.createObjectLookupTable()

        let free_header = objectLookupTable[0]

        if (!free_header)
            throw Error("Crosssite reference has no header for the linked list of free objects")

        // if the pointer of object 0 points to 0 there is no freed object that can be reused
        if (0 === free_header.pointer) {
            if (-1 === this.trailerSize)
                throw Error("Trailer size not set")

            return { obj: this.trailerSize++, generation: 0, reused: false }
        }

        // get list head
        let ptr = free_header.pointer
        let freedHeaderList: XRef[] = []
        while (ptr !== 0) {
            freedHeaderList.push(free_header)
            free_header = objectLookupTable[ptr]

            if (!free_header.free) {
                // handle the case of an incosistent xref
                return { obj: this.trailerSize++, generation: 0, reused: false }
            }

            ptr = free_header.pointer
        }

        let getFreeHeader = (freeHeaderList: XRef[]) => {
            for (let p of freeHeaderList.reverse()) {
                if (p.generation < 65535 && // max generation number
                    -1 === this.already_reused_ids.indexOf(p)) { // not already reused
                    return p
                }
            }

            return undefined
        }
        let reused_free_header = getFreeHeader(freedHeaderList)

        if (reused_free_header) {
            free_header = reused_free_header

            // store used id to make sure it will not be selected again
            this.already_reused_ids.push(free_header)
        } else {
            // handle the case that all freed object ids are already reused
            return { obj: this.trailerSize++, generation: 0, reused: false }
        }

        return { obj: free_header.pointer, generation: objectLookupTable[free_header.id].generation, reused: true }
    }
}
