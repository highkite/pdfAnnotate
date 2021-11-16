import { ReferencePointer } from './parser';
import { Color } from './annotations/annotation_types';

/**
 * The result contains the extraction result and the
 * end_index always points to the last position that describes the extracted result.
 *
 * NOT ONE POSITION AHEAD AND NO TRAILING SPACES.
 * */
export interface ExtractionResult {
    result: any
    /*
     * The stard index holds the beginning of the read word. This is of particular importance in case of comments. Comments are ignored and than the next word might start at a subsequent index
     * */
    start_index: number
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

    public static readonly VERSION: number[] = [37, 80, 68, 70, 45] // %PDF-
    public static readonly COMMENT_START: number[] = [37] // '%'
    public static readonly NULL: number[] = [110, 117, 108, 108] // null
    public static readonly DOT: number = 46
    public static readonly CR: number = 13
    public static readonly LF: number = 10
    public static readonly TYPE: string = "/Type "
    public static readonly SPACE: number = 32
    public static readonly OBJ: number[] = [111, 98, 106] // 'obj'
    public static readonly ENDOBJ: number[] = [101, 110, 100, 111, 98, 106] // 'endobj'
    public static readonly ARRAY_START: number[] = [91] // '['
    public static readonly ARRAY_END: number[] = [93] // ']'
    public static readonly LITERAL_STRING_START: number[] = [40] // '('
    public static readonly HEX_STRING_START: number[] = [60] // '<'
    public static readonly LITERAL_STRING_END: number[] = [41] // ')'
    public static readonly HEX_STRING_END: number[] = [62] // '>'
    public static readonly R: number[] = [82] // 'R'
    public static readonly ANNOTS: number[] = [47, 65, 110, 110, 111, 116, 115] // '/Annot'
    public static readonly DICT_START: number[] = [60, 60] // '<<'
    public static readonly DICT_END: number[] = [62, 62] // '>>'
    public static readonly PAGE: number[] = [47, 80, 97, 103, 101]
    public static readonly SIZE: number[] = [47, 83, 105, 122, 101] // /Size
    public static readonly ROOT: number[] = [47, 82, 111, 111, 116] // /Root
    public static readonly PREV: number[] = [47, 80, 114, 101, 118] // /Prev
    public static readonly STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static readonly XREF: number[] = [120, 114, 101, 102] // = 'xref'
    public static readonly STREAM: number[] = [115, 116, 114, 101, 97, 109] // = 'stream'
    public static readonly TRAILER: number[] = [116, 114, 97, 105, 108, 101, 114] // = 'trailer'

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
     * Consumes comments that is
     *  '%.................. EOL'
     *
     *  Also handles mulitple line comments
     * */
    private static consumeComment(data : Uint8Array, index: number) : number {
        while (data[index] !== 13 && data[index] != 10 && index < data.length)++index
        index = Util.skipSpaces(data, index)

        if (data[index] == 37) //%
            return Util.consumeComment(data, index)

        return index
    }

    /**
     * Returns the next word. These are bytes that are not separated by a delimiter and a ptr to the position where the word ends
     * It ignores/skips comments.
     * */
    public static readNextWord(data: Uint8Array, index: number = 0): ExtractionResult {
        if (index >= data.length) {
            return { result: undefined, start_index: index, end_index: data.length - 1 }
        }

        index = Util.skipSpaces(data, index)

        if (data[index] === 37) { //%
            index = Util.consumeComment(data, index)
        }

        let start_index = index

        index++

        while (!Util.isDelimiter(data[index]) && index < data.length)++index

        if (index <= data.length)
            return { result: data.slice(start_index, index), start_index: start_index, end_index: index - 1 }

        return { result: undefined, start_index: start_index, end_index: index - 1 }
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
        while (index < data.length && (data[index] === 10 || data[index] === 9 || data[index] === 13 || data[index] === 32))++index

        return index
    }

    /**
     * Skips the symbol specified by _symbol
     * */
    public static skipSymbol(data: Uint8Array | number[], _symbol: number, index: number = 0): number {
        while (index < data.length && (data[index] === _symbol))++index

        return index
    }

    /**
     * Skips only spaces
     * */
    public static skipSpacesReverse(data: Uint8Array | number[], index: number = 0): number {
        while (index > 0 && (data[index] === 10 || data[index] === 9 || data[index] === 13 || data[index] === 32))--index

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
            value === 93 || // ]
            value === 40 || // (
            value === 41 // )
    }

    public static isNumber(value: number) : boolean {
        return value >= 48 && value <= 57// 0 <= value <=  9
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

        return { result: { obj: id, generation: gen }, start_index: index, end_index: index + ref_data.length + 1 } // + _R
    }

    /**
     * Extracts a string in Hex notation <...>
     * */
    public static extractHexString(data: Uint8Array, index: number): ExtractionResult {
        let string_start = Util.locateSequence(Util.HEX_STRING_START, data, index)
        let string_end = Util.locateSequence(Util.HEX_STRING_END, data, index)

        data = data.slice(string_start + 1, string_end)

        return { result: new Uint8Array(Util.convertHexStringToByteArray(data)), start_index: string_start, end_index: string_end }
    }

    /**
     * Extratcs a string (...)
     * */
    public static extractString(data: Uint8Array, index: number): ExtractionResult {
        let string_start = Util.locateSequence(Util.LITERAL_STRING_START, data, index)
        let string_end = Util.locateSequence(Util.LITERAL_STRING_END, data, index)

        while (data[string_end - 1] === 92) { // "\" escape
            string_end = Util.locateSequence(Util.LITERAL_STRING_END, data, string_end + 1)
        }

        data = data.slice(string_start + 1, string_end)

        return { result: Util.unescapeString(data), start_index: string_start, end_index: string_end }
    }

    /**
     * Returns the value of an option
     * /<option>
     *
     * so for instance for /Highlight it would return 'Highlight'
     *
     * The index must point to the "/"
     * */
    public static extractOptionValue(data: Uint8Array, index: number = 0): ExtractionResult {

        if (data[index] !== 47)
            throw Error("misplaced option value pointer")

        let end = Util.locateDelimiter(data, index + 1)

        return { result: Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1))), start_index: index, end_index: end }
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

        return { result: +str_id, start_index: start, end_index: end }
    }

    /**
     * Converts the given date into PDF formatting
     * */
    public static convertDateToPDFDate(date: Date): string {
        let date_str = "D:"
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
        return date_str
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
     * Converts a hex string into a byte array
     * That means two consecutive hex values are merged into one byte that is appended to the array
     * */
    public static convertHexStringToByteArray(hex_string : string | Uint8Array | number[]) : number[] {
        let ret_val : number[] = []

        if (typeof hex_string !== "string") {
            hex_string = Util.convertAsciiToString(hex_string)
        }

        for (let i = 0; i < hex_string.length - 1; i+= 2) {
            ret_val.push((parseInt(hex_string.charAt(i), 16) << 4) + parseInt(hex_string.charAt(i + 1), 16))
        }

        if (hex_string.length % 2 !== 0) {
            ret_val.push(parseInt(hex_string.charAt(hex_string.length - 1), 16))

        }

        return ret_val
    }

    /**
     * Converts an array of byte values into a hex string
     * */
    public static convertByteArrayToHexString(values : Uint8Array | number[]) : string {
        let ret_val : string = ""

        let HEX_VALUES = "0123456789ABCDEF"

        for (let i = 0; i < values.length; ++i) {
            ret_val += HEX_VALUES.charAt(values[i] >> 4)
            ret_val += HEX_VALUES.charAt(values[i] & 15)
        }

        // remove leading zeros
        let i : number = 0
        while('0' === ret_val.charAt(i) && i < ret_val.length) ++i

        return ret_val.slice(i, ret_val.length)
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

    /**
     * Converts a list of 8 bit integers into a list of 32 bit integers
     * */
    public static convertUint8ArrayToInt32Array(a : Uint8Array | number[]) : Int32Array {
        let ret_val : Int32Array = new Int32Array(Math.ceil(a.length / 4))

        let i = 0
        let index = 0

        while (i < a.length) {
            if (a[i] > 255 || a[i + 1] > 255 || a[i + 2] >> 255 || a[i + 3] > 255)
                throw Error("Invalid byte size")

            ret_val[index++] = (a[i++] << 24) + (a[i++] << 16) + (a[i++] << 8) + (a[i++] << 0)
        }

        return ret_val
    }

    /**
     * Converts a list of 32 bit integers into a list of 8 bit UNSIGNED integers
     * */
    public static convertInt32ArrayToUint8Array(a : Int32Array | number[]) : Uint8Array {
        let ret_val : Uint8Array = new Uint8Array(a.length * 4)

        for(let i = 0; i < a.length; ++i) {
            for(let j = 0; j < 4; ++j) {
                ret_val[i * 4 + j] = (a[i] >> 8 * (4 - j - 1)) & 0xFF
            }
        }

        return ret_val
    }

    /**
     * Adds escape symbols to specific elements of the provided string
     *
     * Symbols that needs to be escaped are: \ ) (
     * */
    public static escapeString(array: Uint8Array | number[]) : Uint8Array {
        let ret_val : number[] = []

        for (let i = 0; i < array.length; ++i) {
            switch (array[i]) {
                case Util.LITERAL_STRING_START[0]:
                case Util.LITERAL_STRING_END[0]:
                case 92: // 92 = '\'
                    ret_val.push(92)
                    ret_val.push(array[i])
                    break
                case 9: // 9 = TAB
                    ret_val.push(92)
                    ret_val.push(116) // \t
                    break
                case 10: // 10 = LINE FEED
                    ret_val.push(92)
                    ret_val.push(110) // \n
                    break
                case 13: // 13 = CARRIAGE RETURN
                    ret_val.push(92)
                    ret_val.push(114) // \r
                    break
                case 8: // 8 = BACKSPACE
                    ret_val.push(92)
                    ret_val.push(98) // \b
                    break
                case 12: // 255 = FORM FEED
                    ret_val.push(92)
                    ret_val.push(102) // \f
                    break
                default:
                    ret_val.push(array[i])
            }
        }

        return new Uint8Array(ret_val)
    }

    /**
     * Removes escape symbols from the given string
     *
     * Symbols that needs to be escaped are: \ ) (
     * */
    public static unescapeString(array: Uint8Array | number[]) : Uint8Array {
        let ret_val : number[] = []

        let in_escape = false
        for (let i = 0; i < array.length; ++i) {

            if (in_escape) {
                in_escape = false

                switch (array[i]) {
                    case 92: // \
                        ret_val.push(92)
                        break
                    case Util.LITERAL_STRING_START[0]:
                        ret_val.push(Util.LITERAL_STRING_START[0])
                        break
                    case Util.LITERAL_STRING_END[0]:
                        ret_val.push(Util.LITERAL_STRING_END[0])
                        break
                    case 116: // \t
                        ret_val.push(9)
                        break
                    case 110: // \n
                        ret_val.push(10)
                        break
                    case 114: // \r
                        ret_val.push(13)
                        break
                    case 98: // \b
                        ret_val.push(8)
                        break
                    case 102: // \f
                        ret_val.push(12)
                        break
                    default:
                        ret_val.push(array[i])
                }

            } else {
                if (array[i] === 92) {
                    in_escape = true
                } else {
                    ret_val.push(array[i])
                }
            }
        }

        return new Uint8Array(ret_val)
    }

    /**
     * Returns true, if the object corresponds to the interface of a reference pointer.
     * */
    public static isReferencePointer (obj : any) : boolean {
        return ("obj" in obj && "generation" in obj && Object.keys(obj).length == 2)
    }

    /**
     * If color is provided in range [0,1) it will map these values in the color range [0, 255]
     * */
    public static colorToRange255(color : Color) : Color {
        if (color.r <= 1) {
            color.r = Math.round(color.r * 255)
        }

        if (color.g <= 1) {
            color.g =  Math.round(color.g * 255)
        }

        if (color.b <= 1) {
            color.b = Math.round(color.b * 255)
        }

        return color
    }

    /**
     * If color is provided in range [0,255] it will map these values in the color range [0, 1]
     * */
    public static colorToRange01(color : Color) : Color {
        if (color.r > 1) {
            color.r = +(color.r / 255).toFixed(3)
        }

        if (color.g > 1) {
            color.g = +(color.g / 255).toFixed(3)
        }

        if (color.b > 1) {
            color.b =  +(color.b / 255).toFixed(3)
        }

        return color
    }

    /**
     * Returns the HTML color hex code of the provided color
     * */
    public static colorToHex(color : Color) : string {
        if(color.r <= 1 || color.g <= 1 || color.b <= 1) {
            color = Util.colorToRange255(color)
        }
        let r = color.r.toString(16)
        r = r.length === 1 ? "0" + r : r
        let g = color.g.toString(16)
        g = g.length === 1 ? "0" + g : g
        let b = color.b.toString(16)
        b = b.length === 1 ? "0" + b : b

        return `#${r.toUpperCase()}${g.toUpperCase()}${b.toUpperCase()}`
    }

    /**
     * Converts a string into a byte string / hex string <12AFA3>
     * */
    public static convertStringToByteString(value : string) : number[] {
        let ret_value : number[] = [...Util.HEX_STRING_START]
        let hex_val : string = Util.convertByteArrayToHexString(Util.convertStringToAscii(value))
        ret_value = ret_value.concat(Util.convertStringToAscii(hex_val))
        ret_value = ret_value.concat(Util.HEX_STRING_END)
        return ret_value
    }

    /**
     * Converts a string into a byte string / hex string <12AFA3>
     * */
    public static convertStringToHexString(value : string) : number[] {
        return Util.convertStringToByteString(value)
    }
}
