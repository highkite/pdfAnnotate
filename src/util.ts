import { ReferencePointer } from './parser';
/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
export class Util {

    public static VERSION: number[] = [37, 80, 68, 70, 45] // %PDF-
    public static DOT: number = 46
    public static CR: number = 13
    public static LF: number = 10
    public static CATALOG: number[] = [47, 67, 97, 116, 97, 108, 111, 103] // '/Catalog'
    public static TYPE: string = "/Type "
    public static SPACE: number = 32
    public static _TYPE: number[] = [47, 84, 121, 112, 101] // '/Type'
    public static OBJ: number[] = [111, 98, 106] // 'obj'
    public static ENDOBJ: number[] = [101, 110, 100, 111, 98, 106] // 'endobj'
    public static ARRAY_START: number[] = [91] // '['
    public static ARRAY_END: number[] = [93] // ']'
    public static STRING_START: number[] = [40] // '('
    public static STRING_END: number[] = [41] // ')'
    public static R: number[] = [82] // 'R'
    public static ANNOT: number[] = [47, 65, 110, 110, 111, 116] // '/Annot'
    public static ANNOTS: number[] = [47, 65, 110, 110, 111, 116, 115] // '/Annot'
    public static DICT_START: number[] = [60, 60] // '<<'
    public static DICT_END: number[] = [62, 62] // '>>'
    public static SUBTYPE: number[] = [47, 83, 117, 98, 116, 121, 112, 101] // '/Subtype'
    public static PAGES: number[] = [47, 80, 97, 103, 101, 115] // /Pages
    public static PAGE: number[] = [47, 80, 97, 103, 101]
    public static KIDS: number[] = [47, 75, 105, 100, 115]
    public static COUNT: number[] = [47, 67, 111, 117, 110, 116]
    public static RECT: number[] = [47, 82, 101, 99, 116]
    public static INDEX: number[] = [47, 73, 110, 100, 101, 120] // /Index
    public static SIZE: number[] = [47, 83, 105, 122, 101] // /Size
    public static ROOT: number[] = [47, 82, 111, 111, 116] // /Root
    public static FILTER: number[] = [47, 70, 105, 108, 116, 101, 114] // /Filter
    public static PREV: number[] = [47, 80, 114, 101, 118] // /Prev
    public static M: number[] = [47, 77] // '/M'
    public static W: number[] = [47, 87] // '/W'
    public static T: number[] = [47, 84] // '/T'
    public static F: number[] = [47, 70] // '/F'
    public static C: number[] = [47, 67] // '/C'
    public static LENGTH: number[] = [47, 76, 101, 110, 103, 116, 104] // '/Length'
    public static CA: number[] = [47, 67, 65] // '/CA'
    public static NM: number[] = [47, 78, 77] // '/NM'
    public static P: number[] = [47, 80] // '/P'
    public static CONTENTS: number[] = [47, 67, 111, 110, 116, 101, 110, 116, 115] // '/Contents'
    public static BORDER: number[] = [47, 66, 111, 114, 100, 101, 114] // '/Border'
    public static QUADPOINTS: number[] = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115] // '/QuadPoints'
    public static INKLIST: number[] = [47, 73, 110, 107, 76, 105, 115, 116] // '/InkList'
    public static STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static XREF: number[] = [120, 114, 101, 102] // = 'xref'
    public static STREAM: number[] = [115, 116, 114, 101, 97, 109] // = 'stream'
    public static ENDSTREAM: number[] = [101, 110, 100, 115, 116, 114, 101, 97, 109] // = 'endstream'

    /**
     * Assumes that at position index is a delimiter and than runs as long forward until it finds
     * another delimiter or reaches the end of the document
     * */
    public static skipDelimiter(data: Uint8Array, index: number = 0): number {
        while (index < data.length && this.isDelimiter(data[index]))++index

        return index
    }

    /**
     * Assumes that at position index is a delimiter and than runs as long backwards until it finds
     * another delimiter or reaches the end of the document
     * */
    public static skipDelimiterReverse(data: Uint8Array, index: number = 0): number {
        while (index > 0 && this.isDelimiter(data[index]))--index

        return index
    }

    /**
     * Transforms a string into an array of the corresponding ascii values
     * */
    public static convertStringToAscii(toConvert: string): number[] {
        let asciis: number[] = []

        for (let i = 0; i < toConvert.length; ++i) {
            asciis.push(+toConvert.charCodeAt(i))
        }

        return asciis
    }

    public static isDelimiter(value: number): boolean {
        return value === 10 ||
            value === 13 ||
            value === 32 ||
            value === 47 // '/'
    }

    /**
     * Search the sequence in data starting at the offset
     *
     * Set the 'closed' flag to check if the suceeding char after the sequence is a line feed (10), a carriage return (13), the end
     * of the whole sequence or a space (32)
     * */
    public static locateSequence(sequence: number[], data: Uint8Array, offset: number = 0, closed: boolean = false): number {
        let i = offset
        for (let j = 0; i < data.length; ++i) {
            if (data[i] == sequence[j]) {
                if (j == sequence.length - 1) {
                    if (!closed || data.length == i + 1 || this.isDelimiter(data[i + 1]) || data[i + 1] === Util.ARRAY_START[0]) {
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
    public static locateSequenceReversed(sequence: number[], data: Uint8Array, offset: number = data.length - 1, closed: boolean = false): number {
        let i = offset

        for (let j = sequence.length - 1; i >= 0; --i) {
            if (data[i] == sequence[j]) {
                if (j == 0) {
                    if (!closed || i - 1 < 0 || this.isDelimiter(data[i - 1])) {
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
    public static locateDelimiter(data: Uint8Array, offset: number = 0): number {
        while (offset < data.length && !this.isDelimiter(data[offset]))++offset

        return offset - 1
    }

    /**
     * Locates the index after the last delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
     * or a space (32)
     * */
    public static locateDelimiterReversed(data: Uint8Array, offset: number = data.length - 1): number {
        while (offset > 0 && !this.isDelimiter(data[offset]))--offset

        if (offset <= 0)
            return offset

        return offset - 1
    }

    /**
     * Extracts the array data at the position of the index. The index can mark the start of the
     * array or a pointer within the array. If it is a nested array the pointer must mark the beginning
     * of the suberarray. Otherwise only the subarray is extracted
     * */
    public static extractArraySequence(data: Uint8Array, index: number): any {
        let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index)

        if (-1 === array_start)
            array_start = index

        let root_list = { ptr: array_start, lst: [] }
        let start_pointer: any[] = [root_list]

        for (let i = array_start + 1; i < data.length && start_pointer.length > 0;) {
            if (data[i] === Util.ARRAY_START[0]) {
                let _n = { ptr: i, lst: [] }
                start_pointer[start_pointer.length - 1].ptr = -1 // mark list as collection of other lists
                start_pointer.push(_n)
            }

            if (data[i] === Util.ARRAY_END[0]) {
                let sp = start_pointer.pop()

                if (undefined === sp) {
                    throw Error(`Missing start pointer ${JSON.stringify(sp)}`)
                }

                if (sp.ptr !== -1) {
                    let as_toAdd = data.slice(sp.ptr + 1, i)
                    if (start_pointer.length > 0) {
                        start_pointer[start_pointer.length - 1].lst.push(as_toAdd)
                    } else {
                        return as_toAdd
                    }
                } else if (sp.ptr === -1 && start_pointer.length > 0) {
                    start_pointer[start_pointer.length - 1].lst.push(sp.lst)
                }
            }

            i = Util.skipDelimiter(data, i + 1)
        }

        return root_list.lst
    }

    private static extractReferenceArrayRec(arraySeq: any): any {
        if (arraySeq instanceof Uint8Array) {
            return Util.extractReferencesFromArraySequence(arraySeq)
        } else {
            let nbr: any = []
            for (let array_sequence of arraySeq) {
                nbr.push(Util.extractReferenceArrayRec(array_sequence))
            }

            return nbr
        }
    }

    /**
     * Extracts the references in an array
     * */
    public static extractReferenceArray(data: Uint8Array, index: number): any {
        let array_sequences = Util.extractArraySequence(data, index)

        return this.extractReferenceArrayRec(array_sequences)
    }


    private static extractNumbersArrayRec(arraySeq: any): any {
        if (arraySeq instanceof Uint8Array) {
            let nbrs: any = []

            let i = 0
            while (i < arraySeq.length) {
                nbrs.push(Util.extractNumber(arraySeq, i))

                i = Util.locateDelimiter(arraySeq, i + 1) + 1
                i = Util.skipDelimiter(arraySeq, i + 1)
            }

            return nbrs
        } else {
            let nbr: any = []

            for (let array_sequence of arraySeq) {
                nbr.push(this.extractNumbersArrayRec(array_sequence))
            }

            return nbr
        }
    }

    /**
     * Extracts the numbers in an array
     * e.g.  [69.697 47.4148 96.4646 58.2598 ]
     * */
    public static extractNumbersArray(data: Uint8Array, index: number): any {
        let array_sequences = Util.extractArraySequence(data, index)

        return this.extractNumbersArrayRec(array_sequences)
    }

    /**
     * Extract an object identifier
     * <ID> <GEN> obj
     * */
    public static extractObjectId(data: Uint8Array, index: number): ReferencePointer {
        index = Util.skipDelimiter(data, index)

        let end_obj_ptr = Util.locateDelimiter(data, index + 1)

        let obj = Util.extractNumber(data, index, end_obj_ptr)

        let start_gen_ptr = Util.skipDelimiter(data, end_obj_ptr + 1)
        let end_gen_ptr = Util.locateDelimiter(data, start_gen_ptr + 1)

        let gen = Util.extractNumber(data, start_gen_ptr, end_gen_ptr)

        return { obj: obj, generation: gen }
    }

    /**
     * Extract the reference starting at position 'index'
     * */
    public static extractReference(data: Uint8Array, index: number): Uint8Array {
        index = Util.skipDelimiter(data, index)
        let r_index = this.locateSequence(this.convertStringToAscii(" R"), data, index, true)

        return data.slice(index, r_index)
    }

    /**
     * Returns a reference as typed object
     * */
    public static extractReferenceTyped(data: Uint8Array, index: number): ReferencePointer {

        let ref_data = this.extractReference(data, index)

        let del_index = this.locateDelimiter(ref_data, 0)

        let id = this.extractNumber(ref_data, 0, del_index)
        let gen = this.extractNumber(ref_data, del_index + 2)

        return { obj: id, generation: gen }
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
    public static getObjectByType(data: Uint8Array, _type: string, offset: number = 0) {
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
     *
     * Mark that this function does not support arrays that contain different types, so either
     * it returns an array of references or an array of numbers. However the function supports
     * arbitrarily nesting of arrays.
     * */
    public static extractArray(data: Uint8Array, index: number): any {
        for (let i = 0; i < data.length; ++i) {
            if (data[i] === Util.R[0]) { // 'R' -- we know it is an array of references
                return Util.extractReferenceArray(data, index)
            }
        }

        return Util.extractNumbersArray(data, index)
    }

    /**
     * Extratcs the string
     * */
    public static extractString(data: Uint8Array, index: number): string {
        let string_start = Util.locateSequence(Util.STRING_START, data, 0)
        let string_end = Util.locateSequence(Util.STRING_END, data, 0)

        data = data.slice(string_start + 1, string_end)

        return Util.convertUnicodeToString(data)
    }

    /**
     * Returns the value of an option
     * /<option>
     *
     * so for instance for /Highlight it would return 'Highlight'
     *
     * The index must point to the "/"
     * */
    public static extractOptionValue(data: Uint8Array, index: number = 0): string {

        if (data[index] !== 47)
            throw Error("misplaced option value pointer")

        let end = Util.locateDelimiter(data, index + 1)

        return Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1)))
    }

    /**
     * Extracts the value of the given field.
     *
     * Returns 'undefined' if this field does not exist in the object
     * */
    public static extractField(data: Uint8Array, field: number[], ptr: number = 0): any {
        // only check the fields of one object
        let start_obj_ptr = Util.locateSequence(Util.OBJ, data, ptr, true)
        let end_obj_ptr = Util.locateSequence(Util.ENDOBJ, data, start_obj_ptr, true)

        data = data.slice(start_obj_ptr, end_obj_ptr)

        let field_ptr = Util.locateSequence(field, data, 0, true)

        if (field_ptr === -1)
            return undefined

        field_ptr += field.length

        // handle case that there is an option value /<value> after the field /<field>
        let field_value_end_ptr = Util.skipDelimiter(data, field_ptr)

        if (data[field_value_end_ptr - 1] === 47) { // 47 = '/'
            return Util.extractOptionValue(data, field_value_end_ptr - 1)
        }

        field_value_end_ptr = Util.locateSequence([47], data, field_ptr)

        field_ptr = Util.skipDelimiter(data, field_ptr)

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
    public static extractNumber(data: Uint8Array, start: number, end: number = -1) {
        start = Util.skipDelimiter(data, start)

        if (-1 == end) {
            end = Util.locateDelimiter(data, start)
        }

        if (end < start) {
            throw Error(`Could not identify number bounds: [${start},${end}]`)
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
    public static extractReferencesFromArraySequence(array_sequence: Uint8Array): ReferencePointer[] {
        let refs: ReferencePointer[] = []

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
    public static convertDateToPDFDate(date: Date): string {
        let date_str = "(D:"
        date_str += date.getFullYear()
        let month: string = String(date.getMonth() + 1)
        date_str += (month.length == 1 ? "0" : "") + month
        let day: string = String(date.getDate())
        date_str += (day.length == 1 ? "0" : "") + day
        let hours: string = String(date.getHours())
        date_str += (hours.length == 1 ? "0" : "") + hours
        let minutes: string = String(date.getMinutes())
        date_str += (minutes.length == 1 ? "0" : "") + minutes
        let seconds: string = String(date.getSeconds())
        date_str += (seconds.length == 1 ? "0" : "") + seconds
        return date_str + ")"
    }

    /**
     * Converts a unicode sequence into a string
     * */
    public static convertUnicodeToString(val: Uint8Array): string {
        if (val instanceof Uint8Array)
            val = new Uint8Array(val)

        if (val[0] === 254 && val[1] === 255) {
            val = val.slice(2, val.length)

            let uintToString = (uintArray: any) => {
                let ret = ""
                for (let i = 0; i < uintArray.length - 1; i += 2) {
                    ret += String.fromCharCode((uintArray[i] << 8) | uintArray[i + 1] & 0xFF)
                }

                return ret
            }

            let ret = uintToString(val)
            return ret
        }

        // handle utf-8 compression
        let Utf8ArrayToStr = (array: number[]) => {
            let ret = ""
            let i = 0
            while (i < array.length) {
                let char1 = array[i++]
                let char2
                switch (char1 >> 4) {
                    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                        // one byte
                        ret += String.fromCharCode(char1)
                        break
                    case 12: case 13:
                        // two byte sequence
                        char2 = array[i++]
                        ret += String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F))
                        break
                    case 14:
                        // three byte sequence
                        char2 = array[i++]
                        let char3 = array[i++]
                        ret += String.fromCharCode(((char1 & 0x0F) << 12) |
                            ((char2 & 0x3F) << 6) |
                            ((char3 & 0x3F) << 0))
                        break
                }
            }

            return ret
        }

        let ret = Utf8ArrayToStr(Array.from(val))
        return ret
    }

    public static convertAsciiToString(val: number[] | Uint8Array): string {
        let ret: string = ""

        for (let i = 0; i < val.length; ++i) {
            ret += String.fromCharCode(val[i])
        }

        return ret
    }

    /**
     * takes a number and returns an array of its char representations
     * */
    public static convertNumberToCharArray(nbr: number | string): number[] {
        return Util.convertStringToAscii(String(nbr))
    }

    /**
     * takes two arrays and checks their equality
     * */
    public static areArraysEqual(array_one: Uint8Array | number[], array_two: Uint8Array | number[]): boolean {
        if (array_one.length !== array_two.length) return false

        for (let i = 0; i < array_one.length; ++i) {
            if (array_one[i] !== array_two[i])
                return false
        }

        return true
    }

    /**
     * Prints the array with leading indexes 10 bytes in a row
     * Delimiter are substituted by '.'
     * */
    public static debug_printIndexed(array: Uint8Array | number[]) {
        let outp = ""
        for (let i = 0; i < array.length; ++i) {
            if (i % 10 === 0) {
                outp += "\n" + i + ":"
            }

            if (Util.isDelimiter(array[i]))
                outp += " ."
            else
                outp += " " + String.fromCharCode(array[i])
        }

        console.log(outp)
    }
}
