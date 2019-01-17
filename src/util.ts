import { ReferencePointer } from './parser';
/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
export class Util {

        public static TYPE : string = "/Type "
        public static SPACE : number= 32
        public static OBJ : number[] = [111, 98, 106] // 'obj'
        public static ENDOBJ : number[] = [101, 110, 100, 111, 98, 106] // 'endobj'
        public static ARRAY_START : number[] = [91] // '['
        public static ARRAY_END : number[] = [93] // ']'
        public static R : number[] = [82] // 'R'
        public static ANNOT : number[] = [47, 65, 110, 110, 111, 116] // '/Annot'
        public static ANNOTS : number[] = [47, 65, 110, 110, 111, 116, 115] // '/Annot'
        public static DICT_START : number[] = [60, 60] // '['
        public static DICT_END : number[] = [62, 62] // ']'

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
         * Search the seuqence in data starting at the offset
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
         * Search the seuqence in data starting at the offset in reverse direction
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
         * array or a pointer within the array
         * */
        public static extractArraySequence(data : Int8Array, index : number) : Int8Array {
                let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index)

                let end_array = this.locateSequence(Util.ARRAY_END, data, index)

                let nested_array_start = this.locateSequence(Util.ARRAY_START, data, array_start + 1)

                if (nested_array_start != -1 && nested_array_start < end_array) {
                        throw new Error("Nested arrays")
                }

                return data.slice(array_start + 1, end_array)
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
                        throw Error("Could not parse number at position " + start)
                }

                return +str_id
        }

        /**
         * Takes as argument an array of references and returns those typed
         * */
        public static extractReferencesFromArraySequence (array_sequence : Int8Array) : ReferencePointer[] {
                let refs : ReferencePointer[] = []

                let i = 0
                while (i < array_sequence.length) {
                        refs.push(Util.extractReferenceTyped(array_sequence, i))
                        i = Util.locateSequence(Util.R, array_sequence, i, true) + 2
                }

                return refs
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
