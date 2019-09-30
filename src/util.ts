import { ReferencePointer } from './parser';

interface ExtractionResult {
    result: any
    end_index: number
}

export interface PDFVersion {
    major: number
    minor: number
}


/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
export class Util {

    public static VERSION: number[] = [37, 80, 68, 70, 45] // %PDF-
    public static DOT: number = 46
    public static CR: number = 13
    public static LF: number = 10
    public static TYPE: string = "/Type "
    public static SPACE: number = 32
    public static OBJ: number[] = [111, 98, 106] // 'obj'
    public static ENDOBJ: number[] = [101, 110, 100, 111, 98, 106] // 'endobj'
    public static ARRAY_START: number[] = [91] // '['
    public static ARRAY_END: number[] = [93] // ']'
    public static STRING_START: number[] = [40] // '('
    public static STRING_END: number[] = [41] // ')'
    public static R: number[] = [82] // 'R'
    public static ANNOTS: number[] = [47, 65, 110, 110, 111, 116, 115] // '/Annot'
    public static DICT_START: number[] = [60, 60] // '<<'
    public static DICT_END: number[] = [62, 62] // '>>'
    public static PAGE: number[] = [47, 80, 97, 103, 101]
    public static SIZE: number[] = [47, 83, 105, 122, 101] // /Size
    public static ROOT: number[] = [47, 82, 111, 111, 116] // /Root
    public static PREV: number[] = [47, 80, 114, 101, 118] // /Prev
    public static STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static XREF: number[] = [120, 114, 101, 102] // = 'xref'
    public static STREAM: number[] = [115, 116, 114, 101, 97, 109] // = 'stream'

    /**
     * Extracts the version information of a PDF file
     * */
    public static extractVersion(data: Uint8Array, index: number = 0): PDFVersion {

        let ptr_version_start = Util.locateSequence(Util.VERSION, data, index) + Util.VERSION.length
        let ptr_delimiter = Util.locateSequence([Util.DOT], data, ptr_version_start)
        let major_version = Util.extractNumber(data, ptr_version_start, ptr_delimiter).result
        let ptr_end = Util.locateDelimiter(data, ptr_delimiter)
        let minor_version = Util.extractNumber(data, ptr_delimiter + 1, ptr_end).result

        return { major: major_version, minor: minor_version }
    }

    /**
     * Returns the next word. These are bytes that are not separated by a delimiter and a ptr to the position where the word ends
     * It ignores/skips comments.
     * */
    public static readNextWord(data: Uint8Array, index: number = 0): [Uint8Array | undefined, number] {
        index = Util.skipSpaces(data, index)

        if (data[index] === 37) {
            // in case of a comment run to the end of the line
            while (data[index] !== 13 && data[index] != 10 && index < data.length)++index
            index = Util.skipSpaces(data, index)
        }

        let start_index = index

        index++

        while (!Util.isDelimiter(data[index]) && index < data.length)++index

        if (index <= data.length)
            return [data.slice(start_index, index), index]

        return [undefined, index]
    }

    /**
     * Assumes that at position index is a delimiter and than runs as long forward until it finds
     * another delimiter or reaches the end of the document
     * */
    public static skipDelimiter(data: Uint8Array, index: number = 0): number {
        while (index < data.length && this.isDelimiter(data[index]))++index

        return index
    }

    /**
     * Skips only spaces
     * */
    public static skipSpaces(data: Uint8Array | number[], index: number = 0): number {
        while (index < data.length && (data[index] === 10 || data[index] === 13 || data[index] === 32))++index

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

    public static isSpace(value: number): boolean {
        return value === Util.LF ||
            value === Util.CR ||
            value === Util.SPACE
    }

    public static isDelimiter(value: number): boolean {
        return Util.isSpace(value) ||
            value === 47 || // /
            value === 37 || // %
            value === 60 || // <
            value === 62 || // >
            value === 91 || // [
            value === 93 // ]
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
    public static extractArraySequence(data: Uint8Array, index: number): ExtractionResult {
        let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index)

        if (-1 === array_start)
            array_start = index

        let root_list = { ptr: array_start, lst: [] }
        let start_pointer: any[] = [root_list]

        let i = array_start + 1
        for (; i < data.length && start_pointer.length > 0;) {
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
                        return { result: as_toAdd, end_index: i }
                    }
                } else if (sp.ptr === -1 && start_pointer.length > 0) {
                    start_pointer[start_pointer.length - 1].lst.push(sp.lst)
                }
            }

            i = Util.skipSpaces(data, i + 1)
        }

        return { result: root_list.lst, end_index: i - 1 }
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
    public static extractReferenceArray(data: Uint8Array, index: number): ExtractionResult {
        let array_sequence = Util.extractArraySequence(data, index)

        return { result: this.extractReferenceArrayRec(array_sequence.result), end_index: array_sequence.end_index }
    }


    private static extractNumbersArrayRec(arraySeq: any): any {
        if (arraySeq instanceof Uint8Array) {
            let nbrs: any = []

            let i = 0
            while (i < arraySeq.length) {
                nbrs.push(Util.extractNumber(arraySeq, i).result)

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
    public static extractNumbersArray(data: Uint8Array, index: number): ExtractionResult {
        let array_sequence = Util.extractArraySequence(data, index)

        return { result: this.extractNumbersArrayRec(array_sequence.result), end_index: array_sequence.end_index }
    }

    /**
     * Extract an object identifier
     * <ID> <GEN> obj
     * */
    public static extractObjectId(data: Uint8Array, index: number): ReferencePointer {
        index = Util.skipDelimiter(data, index)

        let end_obj_ptr = Util.locateDelimiter(data, index + 1)

        let obj = Util.extractNumber(data, index, end_obj_ptr).result

        let start_gen_ptr = Util.skipDelimiter(data, end_obj_ptr + 1)
        let end_gen_ptr = Util.locateDelimiter(data, start_gen_ptr + 1)

        let gen = Util.extractNumber(data, start_gen_ptr, end_gen_ptr).result

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
    public static extractReferenceTyped(data: Uint8Array, index: number): ExtractionResult {

        let ref_data = this.extractReference(data, index)

        let del_index = this.locateDelimiter(ref_data, 0)

        let id = this.extractNumber(ref_data, 0, del_index).result
        let gen = this.extractNumber(ref_data, del_index + 2).result

        return { result: { obj: id, generation: gen }, end_index: index + ref_data.length + 2 } // + _R
    }

    /**
     * Extracts array of numbers and arrays of references
     *
     * Mark that this function does not support arrays that contain different types, so either
     * it returns an array of references or an array of numbers. However the function supports
     * arbitrarily nesting of arrays.
     * */
    public static extractArray(data: Uint8Array, index: number): ExtractionResult {
        for (let i = index; i < data.length; ++i) {
            if (data[i] === Util.R[0]) { // 'R' -- we know it is an array of references
                return Util.extractReferenceArray(data, index)
            } else if (data[i] === Util.ARRAY_END[0]) { // stop at array end
                break
            }
        }

        return Util.extractNumbersArray(data, index)
    }

    /**
     * Extratcs the string
     * */
    public static extractString(data: Uint8Array, index: number): ExtractionResult {
        let string_start = Util.locateSequence(Util.STRING_START, data, index)
        let string_end = Util.locateSequence(Util.STRING_END, data, index)

        data = data.slice(string_start + 1, string_end)

        return { result: Util.convertUnicodeToString(data), end_index: string_end + 1 }
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
     * Parses the ascii encoded number of the PDF file
     * */
    public static extractNumber(data: Uint8Array, start: number, end: number = -1): ExtractionResult {
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

        return { result: +str_id, end_index: end + 1 }
    }

    /**
     * Takes as argument an array of references and returns those typed
     * */
    public static extractReferencesFromArraySequence(array_sequence: Uint8Array): ReferencePointer[] {
        let refs: ReferencePointer[] = []

        let i = 0
        while (i < array_sequence.length) {
            refs.push(Util.extractReferenceTyped(array_sequence, i).result)
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

            if (Util.isSpace(array[i]))
                outp += " ."
            else
                outp += " " + String.fromCharCode(array[i])
        }

        console.log(outp)
    }
}
