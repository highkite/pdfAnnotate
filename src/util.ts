import { ReferencePointer } from './parser';
/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
export class Util {

        public static TYPE : string = "/Type "
        public static SPACE : number= 32
        public static _TYPE : number[] = [47, 84, 121, 112, 101] // '/Type'
        public static OBJ : number[] = [111, 98, 106] // 'obj'
        public static ENDOBJ : number[] = [101, 110, 100, 111, 98, 106] // 'endobj'
        public static ARRAY_START : number[] = [91] // '['
        public static ARRAY_END : number[] = [93] // ']'
        public static STRING_START : number[] = [40] // '('
        public static STRING_END : number[] = [41] // ')'
        public static R : number[] = [82] // 'R'
        public static ANNOT : number[] = [47, 65, 110, 110, 111, 116] // '/Annot'
        public static ANNOTS : number[] = [47, 65, 110, 110, 111, 116, 115] // '/Annot'
        public static DICT_START : number[] = [60, 60] // '['
        public static DICT_END : number[] = [62, 62] // ']'
        public static SUBTYPE : number[] = [47, 83, 117, 98, 116, 121, 112, 101] // '/Subtype'
        public static PAGES : number[] = [47, 80, 97, 103, 101, 115] // /Pages
        public static PAGE : number[] = [47, 80, 97, 103, 101]
        public static KIDS : number[] = [47, 75, 105, 100, 115]
        public static COUNT : number[] = [47, 67, 111, 117, 110, 116]
        public static RECT : number[] = [47, 82, 101, 99, 116]
        public static M : number[] = [47, 77] // '/M'
        public static T : number[] = [47, 84] // '/T'
        public static F : number[] = [47, 70] // '/F'
        public static C : number[] = [47, 67] // '/C'
        public static CA : number[] = [47, 67, 65] // '/CA'
        public static NM : number[] = [47, 78, 77] // '/NM'
        public static P : number[] = [47, 80] // '/P'
        public static CONTENTS : number[] = [47, 67, 111, 110, 116, 101, 110, 116, 115] // '/Contents'
        public static BORDER : number[] = [47, 66, 111, 114, 100, 101, 114] // '/Border'
        public static QUADPOINTS : number[] = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115] // '/QuadPoints'
        public static INKLIST : number[] = [47, 73, 110, 107, 76, 105, 115, 116] // '/InkList'

        /**
         * Assumes that at position index is a delimiter and than runs as long forward until it finds
         * another delimiter or reaches the end of the document
         * */
        public static skipDelimiter(data : Int8Array, index : number = 0) : number {
                while (index < data.length && this.isDelimiter(data[index])) ++index

                return index
        }

        /**
         * Transforms a string into an array of the corresponding ascii values
         * */
        public static convertStringToAscii (toConvert : string) : number[] {
                let asciis : number[] = []

                for (let i = 0; i < toConvert.length; ++i) {
                        asciis.push(+toConvert.charCodeAt(i))
                }

                return asciis
        }

        public static isDelimiter(value : number) : boolean {
                return value === 10 || value === 13 || value === 32
        }

        /**
         * Search the sequence in data starting at the offset
         *
         * Set the 'closed' flag to check if the suceeding char after the sequence is a line feed (10), a carriage return (13), the end
         * of the whole sequence or a space (32)
         * */
        public static locateSequence(sequence : number[], data : Int8Array, offset : number = 0, closed : boolean = false) : number {
                let i = offset
                for (let j = 0; i < data.length; ++i) {
                        if (data[i] == sequence[j]) {
                                if (j == sequence.length - 1) {
                                        if (!closed || data.length == i + 1 || this.isDelimiter(data[i + 1])) {
                                                return i - (sequence.length - 1)
                                        } else {
                                                j = -1
                                        }
                                }
                                ++j
                        } else {
                                j = 0
                        }
                }

                return -1
        }

        /**
         * Search the sequence in data starting at the offset in reverse direction
         *
         * Set the 'closed' flag to check if the preceding char before the sequence is a line feed (10), a carriage return (13), the start
         * of the whole data sequence or a space (32)
         * */
        public static locateSequenceReversed(sequence : number[], data : Int8Array, offset : number = data.length - 1, closed : boolean = false) : number {
                let i = offset

                for (let j = sequence.length - 1; i >=0; --i) {
                        if (data[i] == sequence[j]) {
                                if (j == 0) {
                                        if(!closed || i - 1 < 0 || this.isDelimiter(data[i - 1])) {
                                                return i
                                        } else {
                                                j = sequence.length
                                        }
                                }
                                --j
                        } else {
                                j = sequence.length - 1
                        }
                }

                return -1
        }

        /**
         * Locates the index before the next delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
         * or a space (32)
         * */
        public static locateDelimiter(data : Int8Array, offset : number = 0) : number {
                while(offset < data.length && !this.isDelimiter(data[offset])) ++offset

                return offset - 1
        }

        /**
         * Locates the index after the last delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
         * or a space (32)
         * */
        public static locateDelimiterReversed(data : Int8Array, offset : number = data.length - 1) : number {
                while(offset > 0 && !this.isDelimiter(data[offset])) --offset

                if (offset <= 0)
                        return offset

                return offset - 1
        }

        /**
         * Extracts the array data at the position of the index. The index can mark the start of the
         * array or a pointer within the array. If it is a nested array the pointer must mark the beginning
         * of the suberarray. Otherwise only the subarray is extracted
         * */
        public static extractArraySequence(data : Int8Array, index : number) : Int8Array[] {
                let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index)

                if (-1 === array_start)
                        array_start = index

                let start_pointer : number[] = [array_start]

                let array_sequence : Int8Array[] = []

                for (let i = array_start + 1; i < data.length && start_pointer.length > 0; ++i) {
                        if (data[i] === Util.ARRAY_START[0]) {
                                start_pointer.push(i)
                        }

                        if (data[i] === Util.ARRAY_END[0]) {
                                let sp = start_pointer.pop()

                                if (undefined === sp) {
                                        throw Error(`Missing start pointer ${sp}`)
                                }

                                array_sequence.push(data.slice(sp + 1, i))
                        }
                }

                return array_sequence
        }

        /**
         * Extracts the numbers in an array
         * e.g.  [69.697 47.4148 96.4646 58.2598 ]
         * */
        public static extractNumbersArray(data : Int8Array, index : number) : number[][] {
                let array_sequences = Util.extractArraySequence(data, index + 1)

                let _nbrs : number[][] = []

                for (let array_sequence of array_sequences) {
                        let nbrs : number[] = []

                        let i = 0
                        while (i < array_sequence.length) {
                                nbrs.push(Util.extractNumber(array_sequence, i))

                                i = Util.locateDelimiter(array_sequence, i + 1) + 1
                                i = Util.skipDelimiter(array_sequence, i + 1)
                        }

                        _nbrs.push(nbrs)
                }

                return _nbrs
        }

        /**
         * Extract an object identifier
         * <ID> <GEN> obj
         * */
        public static extractObjectId(data : Int8Array, index : number) : ReferencePointer {
                index = Util.skipDelimiter(data, index)

                let end_obj_ptr = Util.locateDelimiter(data, index + 1)

                let obj = Util.extractNumber(data, index, end_obj_ptr)

                let start_gen_ptr = Util.skipDelimiter(data, end_obj_ptr + 1)
                let end_gen_ptr = Util.locateDelimiter(data, start_gen_ptr + 1)

                let gen = Util.extractNumber(data, start_gen_ptr, end_gen_ptr)

                return { obj : obj, generation: gen}
        }

        /**
         * Extract the reference starting at position 'index'
         * */
        public static extractReference(data : Int8Array, index : number) : Int8Array {
                index = Util.skipDelimiter(data, index)
                let r_index = this.locateSequence(this.convertStringToAscii(" R"), data, index, true)

                return data.slice(index, r_index)
        }

        /**
         * Returns a reference as typed object
         * */
        public static extractReferenceTyped(data : Int8Array, index : number) : ReferencePointer {

                let ref_data = this.extractReference(data, index)

                let del_index = this.locateDelimiter(ref_data, 0)

                let id = this.extractNumber(ref_data, 0, del_index)
                let gen = this.extractNumber(ref_data, del_index + 2)

                return {obj: id, generation: gen}
        }

        /**
         * Objects in PDF files are defined as
         * <objNumber> <generation> obj
         * <<
         *      ...
         *      /Type /<type>
         *      ...
         * >>
         *
         * Approach: We identify an index within the object definiton search the uniquely identifyable end of the object definition
         * than the uniquely identifiable start. We than extract the generation and the object id
         * */
        public static getObjectByType (data : Int8Array, _type : string, offset : number = 0) {
                let searchSequence = this.convertStringToAscii(this.TYPE + _type)

                let obj_index = this.locateSequence(searchSequence, data, 0, true)

                let obj_end = this.locateSequence(Util.ENDOBJ, data, obj_index, true) + 6

                let obj_start = this.locateSequenceReversed(Util.OBJ, data, obj_index, true)

                let generation = this.locateDelimiterReversed(data, obj_start - 1)

                let obj_id = this.locateDelimiterReversed(data, generation - 1)

                return data.slice(obj_id, obj_end)
        }

        /**
         * Extracts array of numbers and arrays of references
         * */
        public static extractArray(data : Int8Array, index : number) : any {
                let array_sequence = Util.extractArraySequence(data, 1)
                for (let i = 0; i < data.length; ++i) {
                        if (data[i] === Util.R[0]) { // 'R' -- we know it is an array of references
                                return Util.extractReferencesFromArraySequence(array_sequence)
                        }
                }

                return Util.extractNumbersArray(data, index)
        }

        /**
         * Extratcs the string
         * */
        public static extractString(data : Int8Array, index : number) : string {
                let string_start = Util.locateSequence(Util.STRING_START, data, 0)
                let string_end = Util.locateSequence(Util.STRING_END, data, 0)

                data = data.slice(string_start + 1, string_end)

                return Util.convertAsciiToString(Array.from(data))
        }

        /**
         * Returns the value of an option
         * /<option>
         *
         * so for instance for /Highlight it would return 'Highlight'
         *
         * The index must point to the "/"
         * */
        public static extractOptionValue(data : Int8Array, index : number = 0) : string {

                if(data[index] !== 47)
                        throw Error("misplaced option value pointer")

                let end = Util.locateDelimiter(data, index)

                return Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1)))
        }

        /**
         * Extracts the value of the given field.
         * */
        public static extractField(data : Int8Array, field : number[], ptr : number = 0) : any {
                // only check the fields of one object
                let start_obj_ptr = Util.locateSequence(Util.OBJ, data, ptr, true)
                let end_obj_ptr = Util.locateSequence(Util.ENDOBJ, data, start_obj_ptr, true)

                data = data.slice(start_obj_ptr, end_obj_ptr)

                let field_ptr = Util.locateSequence(field, data, 0, true)

                if (field_ptr === -1)
                        return undefined

                field_ptr += field.length

                let field_value_end_ptr = Util.locateSequence([47], data, field_ptr)

                if (field_value_end_ptr === field_ptr + 1) {
                        return Util.extractOptionValue(data, field_value_end_ptr)
                }

                let value_data = data.slice(field_ptr, field_value_end_ptr)

                for (let i = 0; i < value_data.length; ++i) {
                        if (value_data[i] === Util.ARRAY_START[0] || value_data[i] === Util.ARRAY_END[0]) {
                                // handle array
                                return Util.extractArray(value_data, 0)
                        } else if (value_data[i] === Util.STRING_START[0] || value_data[i] === Util.STRING_END[0]) {
                                // handle string
                                return Util.extractString(value_data, 0)
                        } else if (value_data[i] === Util.R[0]) { // R
                                // handle Reference
                                return Util.extractReferenceTyped(value_data, 0)
                        }
                }

                return Util.extractNumber(value_data, 0)
        }

        /**
         * Parses the ascii encoded number of the PDF file
         * */
        public static extractNumber(data : Int8Array, start : number, end : number = -1) {
                start = Util.skipDelimiter(data, start)

                if (-1 == end) {
                        end = Util.locateDelimiter(data, start)
                }

                let str_id = ""

                for (let i = start; i <= end; ++i) {
                        str_id += String.fromCharCode(data[i])
                }

                if ("" === str_id) {
                        throw Error(`Could not parse number at position ${start}`)
                }

                return +str_id
        }

        /**
         * Takes as argument an array of references and returns those typed
         * */
        public static extractReferencesFromArraySequence (array_sequences : Int8Array[]) : ReferencePointer[][] {

                let _refs : ReferencePointer[][] = []

                for (let array_sequence of array_sequences) {
                        let refs : ReferencePointer[] = []

                        let i = 0
                        while (i < array_sequence.length) {
                                refs.push(Util.extractReferenceTyped(array_sequence, i))
                                i = Util.locateSequence(Util.R, array_sequence, i, true) + 2
                        }

                        _refs.push(refs)
                }

                return _refs
        }

        /**
         * Converts the given date into PDF formatting
         * */
        public static convertDateToPDFDate (date : Date) : string {
                let date_str = "(D:"
                date_str += date.getFullYear()
                let month : string = String(date.getMonth() + 1)
                date_str += (month.length == 1 ? "0" : "") + month
                let day : string = String(date.getDate())
                date_str += (day.length == 1 ? "0" : "") + day
                let hours : string = String(date.getHours())
                date_str += (hours.length == 1 ? "0" : "") + hours
                let minutes : string = String(date.getMinutes())
                date_str += (minutes.length == 1 ? "0" : "") + minutes
                let seconds : string = String(date.getSeconds())
                date_str += (seconds.length == 1 ? "0" : "") + seconds
                return date_str + ")"
        }

        public static convertAsciiToString (val : number[]) : string {
                let ret : string = ""

                for (let i = 0; i < val.length; ++i) {
                        ret += String.fromCharCode(val[i])
                }

                return ret
        }

        /**
         * takes a number and returns an array of its char representations
         * */
        public static convertNumberToCharArray (nbr : number | string) : number[] {
                return Util.convertStringToAscii(String(nbr))
        }
}
