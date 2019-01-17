import { ReferencePointer } from './parser';
import { Util } from './util';

export interface XRef {
        id : number
        pointer : number
        generation : number
        free : boolean
        update : boolean
}

interface SubSectionHeader {
        id : number
        count : number
        end_ptr : number // points to the end of the sub section header
}

interface Trailer {
        size : number
        root : ReferencePointer
        prev? : number
}

export interface ObjectLookupTable {
        [id : number] : XRef
}

/**
 * Holds the complete information of one update section. That comprises:
 * - the body update
 * - the crossiste reference table
 * - the trailer
 * */
export class UpdateSection {
        public refs : XRef[] = []

        public start_pointer : number = -1

        public trailer : Trailer = { size : -1, root : {obj : -1, generation: -1}}

        private static SIZE : number[] = [47, 83, 105, 122, 101] // /Size
        private static ROOT : number[] = [47, 82, 111, 111, 116] // /Root
        private static PREV : number[] = [47, 80, 114, 101, 118] // /Prev
        private static STARTXREF : number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102]

        constructor (private data : Int8Array) { }

        /**
         * Returns the reference with the given id
         * */
        getReference (id : number) : XRef  | undefined {
                for (let ref of this.refs) {
                        if (ref.id === id)
                                return ref
                }

                return undefined
        }

        /**
         * Extracts the header of a sub section. For instance
         *
         * 0 1 // <--
         * ...
         *
         * So the obejct id 0 and the number of sub section entries 1
         * */
        extractSubSectionHeader (index : number) : SubSectionHeader {
                let ptr = Util.locateDelimiter(this.data, index)

                let obj_id = Util.extractNumber(this.data, index, ptr)

                ptr = Util.skipDelimiter(this.data, ptr + 1)

                let ptr_ref_count = ptr

                ptr = Util.locateDelimiter(this.data, ptr)

                let reference_count = Util.extractNumber(this.data, ptr_ref_count, ptr)

                return { id : obj_id, count : reference_count, end_ptr :  ptr}
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
        extractReferences ( index : number, count : number, first_object_id : number) : XRef[] {
                let _refs : XRef[] = []

                for (let i = 0; i < count; ++i, index += 20) {
                        let ptr_end_pointer = Util.locateDelimiter(this.data, index)

                        let pointer = Util.extractNumber(this.data, index, ptr_end_pointer)

                        let ptr_gen_start = Util.skipDelimiter(this.data, ptr_end_pointer + 1)

                        let ptr_gen_end = Util.locateDelimiter(this.data, ptr_gen_start)

                        let generation = Util.extractNumber(this.data, ptr_gen_start, ptr_gen_end)

                        let ptr_flag = Util.skipDelimiter(this.data, ptr_gen_end + 1)

                        let isFree = this.data[ptr_flag] === 102

                        _refs.push({
                                id : first_object_id + i,
                                pointer : pointer,
                                generation : generation,
                                free : isFree,
                                update : !isFree
                        })
                }

                return _refs
        }

        /**
         * Extracts the trailer of the subsection that means the part stating with the 'trailer' keyword and
         * in particular the trailer dictionary
         * */
        extractTrailer (index : number) : Trailer {
                let end_trailer_index : number = Util.locateSequence(UpdateSection.STARTXREF, this.data, index, true)
                let _data = this.data.slice(index, end_trailer_index)
                index = 0

                let ptr_start_size = Util.locateSequence(UpdateSection.SIZE, _data, index, true) + UpdateSection.SIZE.length
                ptr_start_size = Util.skipDelimiter(_data, ptr_start_size)

                let size = Util.extractNumber(_data, ptr_start_size)


                let ptr_start_root = Util.locateSequence(UpdateSection.ROOT, _data, index, true) + UpdateSection.ROOT.length
                ptr_start_root = Util.skipDelimiter(_data, ptr_start_root)
                let root_reference = Util.extractReferenceTyped(_data, ptr_start_root)


                let ptr_start_prev = Util.locateSequence(UpdateSection.PREV, _data, index, true)
                let prev = undefined
                if (-1 != ptr_start_prev) {
                        ptr_start_prev = Util.skipDelimiter(_data, ptr_start_prev + UpdateSection.PREV.length)

                        prev = Util.extractNumber(_data, ptr_start_prev)
                }

                return {
                        size : size,
                        root : root_reference,
                        prev : prev
                }
        }

        /**
         * Parses the Update section at the given index
         * */
        extract (index : number) {
                this.start_pointer = index

                let start_ptr = index + 5 // + length(xref) + blank
                start_ptr = Util.skipDelimiter(this.data, start_ptr)

                let first_header = this.extractSubSectionHeader(start_ptr)

                // the first header must be 0 to establish the linked list of free objects
                if (first_header.id !== 0) {
                        throw Error ("First object id not 0")
                }

                let ref_start = Util.skipDelimiter(this.data, first_header.end_ptr + 1)

                // extract first reference
                this.refs = this.refs.concat(this.extractReferences(ref_start, first_header.count, first_header.id))

                // extract remaining references
                start_ptr = ref_start + first_header.count * 20

                while (this.data[start_ptr] !== 116) { // 116 = 't' start of the word trailer that concludes the crosssite reference section
                        let header = this.extractSubSectionHeader(start_ptr)

                        ref_start = Util.skipDelimiter(this.data, header.end_ptr + 1)

                        let references = this.extractReferences(ref_start, header.count, header.id)

                        this.refs = this.refs.concat(references)

                        start_ptr = ref_start + header.count * 20
                }

                this.trailer = this.extractTrailer(start_ptr)
        }
}

/**
 * Represents the complete PDF document history and therefore holds the
 * updated body parts, the crosssite references and the document trailers
 * */
export class DocumentHistory {
        public updates : UpdateSection[] = []

        private static STARTXREF : number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'

        public trailerSize : number = -1

        constructor (private data : Int8Array) {
                this.data = new Int8Array(data)
        }

        /**
         * Extracts the update section starting at the given index
         * */
        extractUpdateSection (index : number) {
                let updateSection = new UpdateSection(this.data)
                updateSection.extract(index)

                this.updates.push(updateSection)
        }

        /**
         * Extracts the last update section of a document (that means
         * the most recent update locating at the end of the file)
         * */
        extractDocumentEntry () {
                let ptr = this.data.length - 1

                let ptr_startxref = Util.locateSequenceReversed(DocumentHistory.STARTXREF, this.data, ptr, true) + 9

                ptr = Util.extractNumber(this.data, ptr_startxref)

                this.extractUpdateSection(ptr)
        }

        /**
         * Extracts the entire update sections
         * */
        extractDocumentHistory () {
                this.extractDocumentEntry()

                let us = this.updates[0]

                while (us.trailer.prev) {
                        this.extractUpdateSection(us.trailer.prev)
                        us = this.updates[this.updates.length - 1]
                }

                this.trailerSize = this.getRecentUpdate().trailer.size
        }

        /**
         * Primarily for clarification. The first element is the most recent. We parsed backwards.
         * */
        getRecentUpdate () : UpdateSection {
                return this.updates[0]
        }

        /**
         * By running through the PDf history we can for every object id determine the pointer address to the most recent version, and
         * whether the object id is still in used.
         *
         * So the object lookup table has an entry for every existing object id, a pointer to the the most recent object definition, as long
         * as the object exists, or an according indication otherwise.
         * */
        createObjectLookupTable () : ObjectLookupTable {
                let objTable : {[id : number] : XRef} = {}

                let update = this.getRecentUpdate()
                let obj_count = update.trailer.size

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
        getFreeObjectId() : ReferencePointer {
                let update = this.getRecentUpdate()
                let free_header = update.getReference(0)

                if (!free_header)
                        throw Error("Most recent crosssite reference has no header for the linked list of free objects")

                if (1 === free_header.pointer || 0 === free_header.pointer) {
                        if (-1 === this.trailerSize)
                                throw Error("Trailer size not set")

                        return { obj : this.trailerSize++, generation : 0, reused : false }
                }

                return {obj : free_header.pointer, generation : this.createObjectLookupTable()[free_header.id].generation, reused : true}
        }
}
