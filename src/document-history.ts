import { ReferencePointer } from './parser';
import { Util } from './util';
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
     * By definition of the PDF standard one entry is 20 bytes long
     * */
    extractReferences(index: number, count: number, first_object_id: number): XRef[] {
        let _refs: XRef[] = []

        for (let i = 0; i < count; ++i, index += 20) {
            let ptr_end_pointer = Util.locateDelimiter(this.data, index)

            let pointer = Util.extractNumber(this.data, index, ptr_end_pointer).result

            let ptr_gen_start = Util.skipDelimiter(this.data, ptr_end_pointer + 1)

            let ptr_gen_end = Util.locateDelimiter(this.data, ptr_gen_start)

            let generation = Util.extractNumber(this.data, ptr_gen_start, ptr_gen_end).result

            let ptr_flag = Util.skipDelimiter(this.data, ptr_gen_end + 1)

            let isFree = this.data[ptr_flag] === 102 // 102 = f

            _refs.push({
                id: first_object_id + i,
                pointer: pointer,
                generation: generation,
                free: isFree,
                update: !isFree
            })
        }

        return _refs
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
    extract(index: number) {
        this.start_pointer = index

        let start_ptr = index + 5 // + length(xref) + blank
        start_ptr = Util.skipDelimiter(this.data, start_ptr)

        let first_header = this.extractSubSectionHeader(start_ptr)

        let ref_start = Util.skipDelimiter(this.data, first_header.end_ptr + 1)

        // extract first reference
        this.refs = this.refs.concat(this.extractReferences(ref_start, first_header.count, first_header.id))

        // extract remaining references
        start_ptr = Util.skipSpaces(this.data, ref_start + first_header.count * 20)

        while (this.data[start_ptr] !== 116) { // 116 = 't' start of the word trailer that concludes the crosssite reference section
            let header = this.extractSubSectionHeader(start_ptr)

            ref_start = Util.skipDelimiter(this.data, header.end_ptr + 1)

            let references = this.extractReferences(ref_start, header.count, header.id)

            this.refs = this.refs.concat(references)

            start_ptr = Util.skipSpaces(this.data, ref_start + header.count * 20)
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
    extractCrossReferenceTable(index: number): CrossReferenceTable {
        let crt = new CrossReferenceTable(this.data)
        crt.extract(index)

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
     * */
    extractDocumentEntry(): number {
        let ptr = this.data.length - 1

        let ptr_startxref = Util.locateSequenceReversed(Util.STARTXREF, this.data, ptr, true) + 9

        ptr = Util.extractNumber(this.data, ptr_startxref).result

        return ptr
    }

    /**
     * Extracts the entire update sections
     *
     * Needs to adapt depending whether the document uses a cross-reference table or a cross-reference stream object
     * */
    extractDocumentHistory() {

        let ptr = this.extractDocumentEntry()

        let xref = {
            id: -1,
            pointer: ptr,
            generation: 0,
            free: false,
            update: true
        }

        this.extractCrossReferenceTables(ptr, xref)
    }


    /**
     * Extracts the cross reference tables of the entire document
     * */
    extractCrossReferenceTables(ptr : number, xref : XRef) {
        // Handle cross reference table
        if (Util.areArraysEqual(this.data.slice(ptr, ptr + Util.XREF.length), Util.XREF)) {

            let crt = this.extractCrossReferenceTable(ptr)

            this.updates.push(crt.getUpdateSection())

            let us = this.updates[0]

            while (us.prev) {
                crt = this.extractCrossReferenceTable(us.prev)
                this.updates.push(crt.getUpdateSection())
                us = this.updates[this.updates.length - 1]
            }

        } else { // handle cross reference stream object
            try {
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
            } catch(err) {
                if (err.name = "MissingObjSequenceError") {
                    // try to locate Cross reference table start manually
                    // forward search for the word 'xref'
                    let xref_ptr = Util.locateSequence(Util.XREF, this.data, ptr, true)

                    if (xref_ptr !== -1 &&
                        this.data[xref_ptr - 1] !== 116) { // the 't' as end of start in startxref
                        this.extractCrossReferenceTables(xref_ptr, xref)
                    }

                    // backward search for the word 'xref'
                    xref_ptr = Util.locateSequenceReversed(Util.XREF, this.data, ptr, true)
                    if (xref_ptr !== -1) {
                        this.extractCrossReferenceTables(xref_ptr, xref)
                    }
                } else {
                    throw err
                }
            }
        }

        this.trailerSize = this.getRecentUpdate().size
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
        let obj_count = update.size

        let i = 1
        while (Object.keys(objTable).length < obj_count) {
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
