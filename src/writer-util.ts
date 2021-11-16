import { Page, ReferencePointer } from './parser';
import { Util } from './util';
import { Stream }  from './stream';

export class WriterUtil {
    public static readonly N: number = 110
    public static readonly F: number = 102
    public static readonly q: number = 113
    public static readonly Q: number = 81

    public static readonly BT: number[] = [66, 84] // = 'BT'
    public static readonly ET: number[] = [69, 84] // = 'ET'
    public static readonly BMC: number[] = [66, 77, 67] // = 'BMC'
    public static readonly EMC: number[] = [69, 77, 67] // = 'EMC'
    public static readonly AP_N: number[] = [47, 78] // = '/N'
    public static readonly AP_D: number[] = [47, 68] // = '/D'
    public static readonly AP_R: number[] = [47, 82] // = '/R'
    public static readonly SPACE: number = 32
    public static readonly CR: number = 13
    public static readonly LF: number = 10
    public static readonly AP: number[] = [47, 65, 80] // = '/AP'
    public static readonly OBJ: number[] = [111, 98, 106]
    public static readonly ENDOBJ: number[] = [101, 110, 100, 111, 98, 106]
    public static readonly ENCRYPT: number[] = [47, 69, 110, 99, 114, 121, 112, 116]
    public static readonly ARRAY_START: number = 91
    public static readonly OPEN: number[] = [47, 79, 112, 101, 110]
    public static readonly ARRAY_END: number = 93
    public static readonly DICT_START: number[] = [60, 60]
    public static readonly HEX_STRING_START: number[] = [60]
    public static readonly HEX_STRING_END: number[] = [62]
    public static readonly DICT_END: number[] = [62, 62]
    public static readonly TYPE0: number[] = [ 47, 84, 121, 112, 101, 48 ] // /Type0
    public static readonly TYPE1: number[] = [ 47, 84, 121, 112, 101, 49 ] // /Type1
    public static readonly TYPE3: number[] = [ 47, 84, 121, 112, 101, 51 ] // /Type3
    public static readonly MMTYPE1: number[] = [ 47,  77,  77, 84, 121, 112, 101, 49 ] // /MMType1
    public static readonly TRUETYPE: number[] = [ 47, 84, 114, 117, 101, 84, 121, 112, 101 ] // /TrueType
    public static readonly CIDFONTTYPE0: number[] = [ 47,  67,  73, 68,  70, 111, 110, 116, 84, 121, 112, 101,  48 ] // /CIDFontType0
    public static readonly CIDFONTTYPE2: number[] = [ 47,  67,  73, 68,  70, 111, 110, 116, 84, 121, 112, 101,  50 ] // /CIDFontType2
    public static readonly TYPE_ANNOT: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 65, 110, 110, 111, 116]
    public static readonly TYPE_XOBJECT: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 88, 79, 98, 106, 101, 99, 116]
    public static readonly TYPE_EXTGSTATE: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 69, 120, 116, 71, 83, 116, 97, 116, 101]
    public static readonly TYPE_FONTDESCRIPTOR: number[] = [ 47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 70, 111, 110, 116,  68, 101, 115, 99, 114, 105, 112, 116, 111, 114]
    public static readonly TYPE_FONT: number[] = [ 47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 70, 111, 110, 116]
    public static readonly FONTNAME: number[] = [ 47, 70, 111, 110, 116, 78,  97, 109, 101 ] // = '/FontName'
    public static readonly FONTFAMILY: number[] = [ 47,  70, 111, 110, 116,  70,  97, 109, 105, 108, 121 ] // = '/FontFamily'
    public static readonly FONTSTRETCH: number[] = [ 47,  70, 111, 110, 116, 83, 116, 114, 101, 116, 99, 104 ] // = '/FontStretch'
    public static readonly FLAGS: number[] = [ 47, 70, 108, 97, 103, 115 ] // = '/Flags'
    public static readonly FONTBBOX: number[] = [ 47, 70, 111, 110, 116, 66,  66, 111, 120 ] // = '/FontBBox'
    public static readonly ITALICANGLE: number[] = [ 47,  73, 116,  97, 108, 105,  99,  65, 110, 103, 108, 101 ] // = '/ItalicAngle'
    public static readonly ASCENT: number[] = [ 47,  65, 115, 99, 101, 110, 116 ] // = '/Ascent'
    public static readonly DESCENT: number[] = [ 47,  68, 101, 115, 99, 101, 110, 116 ] // = '/Descent'
    public static readonly LEADING: number[] = [ 47,  76, 101,  97, 100, 105, 110, 103 ] // = '/Leading'
    public static readonly CAPHEIGHT: number[] = [ 47,  67,  97, 112, 72, 101, 105, 103, 104, 116 ] // = '/CapHeight'
    public static readonly XHEIGHT: number[] = [ 47,  88,  72, 101, 105, 103, 104, 116 ] // = '/XHeight'
    public static readonly STEMV: number[] = [ 47, 83, 116, 101, 109, 86 ] // = '/StemV'
    public static readonly ENCODING: number[] = [ 47,  69, 110,  99, 111, 100, 105, 110, 103 ] // = '/Encoding'
    public static readonly STEMH: number[] = [ 47, 83, 116, 101, 109, 2 ] // = '/StemH'
    public static readonly AVGWIDTH: number[] = [ 47,  65, 118, 103, 87, 105, 100, 116, 104 ] // = '/AvgWidth'
    public static readonly MAXWIDTH: number[] = [ 47,  77,  97, 120, 87, 105, 100, 116, 104 ] // = '/MaxWidth'
    public static readonly MISSINGWIDTH: number[] = [ 47,  77, 105, 115, 115, 105, 110, 103,  87, 105, 100, 116, 104 ] // = '/MissingWidth'
    public static readonly FIRSTCHAR: number[] = [ 47,  70, 105, 114, 115, 116,  67, 104, 97, 114 ] // = '/FirstChar'
    public static readonly LASTCHAR: number[] = [ 47, 76,  97, 115, 116, 67, 104,  97, 114 ] // = '/LastChar'
    public static readonly BASEFONT: number[] = [ 47, 66,  97, 115, 101, 70, 111, 110, 116 ] // = '/BaseFont'
    public static readonly WIDTHS: number[] = [ 47,  87, 105, 100, 116, 104, 115 ] // = '/Widths'
    public static readonly FONTDESCRIPTOR: number[] = [ 47,  70, 111, 110, 116, 68, 101, 115,  99, 114, 105, 112, 116, 111, 114 ] // = '/FontDescriptor'
    public static readonly XOBJECT: number[] = [47, 88, 79, 98, 106, 101, 99, 116] // = '/XObject'
    public static readonly EXTGSTATE: number[] = [47, 69, 120, 116, 71, 83, 116, 97, 116, 101] // = '/ExtGState'
    public static readonly COLORSPACE: number[] = [47, 67, 111, 108, 111, 114, 83, 112, 97, 99, 101] // = '/ColorSpace'
    public static readonly PATTERN: number[] = [47, 80, 97, 116, 116, 101, 114, 110] // = '/Pattern'
    public static readonly SHADING: number[] = [47, 83, 104, 97, 100, 105, 110, 103] // = '/Shading'
    public static readonly FONT: number[] = [47, 70, 111, 110, 116] // = '/Font'
    public static readonly PROCSET: number[] = [47, 80, 114, 111, 99, 83, 101, 116] // = '/ProcSet'
    public static readonly PROPERTIES: number[] = [47, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115] // = '/Properties'
    public static readonly RECT: number[] = [47, 82, 101, 99, 116]
    public static readonly RESOURCES: number[] = [47, 82, 101, 115, 111, 117, 114, 99, 101, 115] // = '/Resources'
    public static readonly SUBTYPE: number[] = [47, 83, 117, 98, 116, 121, 112, 101]
    public static readonly FORM: number[] = [47, 70, 111, 114, 109] // = '/Form'
    public static readonly UPDATE_DATE: number[] = [47, 77] // = '/M'
    public static readonly AUTHOR: number[] = [47, 84] // = '/T'
    public static readonly CONTENTS: number[] = [47, 67, 111, 110, 116, 101, 110, 116, 115] // = '/Contents'
    public static readonly BRACKET_START: number = 40
    public static readonly BRACKET_END: number = 41
    public static readonly FLAG: number[] = [47, 70] // = '/F'
    public static readonly ID: number[] = [47, 78, 77] // = '/NM'
    public static readonly DOCUMENT_ID: number[] = [47, 73, 68] // = '/ID'
    public static readonly COLOR: number[] = [47, 67] // = '/C'
    public static readonly FILL: number[] = [47, 73, 67] // = '/IC'
    public static readonly STATE: number[] = [47, 83, 116, 97, 116, 101] // = '/State'
    public static readonly STATEMODEL: number[] = [47, 83, 116, 97, 116, 101, 77, 111, 100, 101, 108] // = '/StateModel'
    public static readonly OPACITY: number[] = [47, 67, 65] // = '/CA'
    public static readonly _OPACITY: number[] = [47, 99, 97] // = '/ca'
    public static readonly BORDER: number[] = [47, 66, 111, 114, 100, 101, 114] // = '/Border'
    public static readonly PAGE_REFERENCE: number[] = [47, 80] // = '/P'
    public static readonly DEFAULT_APPEARANCE: number[] = [47, 68, 65] // = '/DA'
    public static readonly INKLIST: number[] = [47, 73, 110, 107, 76, 105, 115, 116] // = '/InkList'
    public static readonly FILTER: number[] = [47, 70, 105, 108, 116, 101, 114] // = '/Filter'
    public static readonly FLATEDECODE: number[] = [47, 70, 108, 97, 116, 101, 68, 101, 99, 111, 100, 101] // = '/FlateDecode'
    public static readonly LENGTH: number[] = [47, 76, 101, 110, 103, 116, 104] // = '/Length'
    public static readonly STREAM: number[] = [115, 116, 114, 101, 97, 109] // = 'stream'
    public static readonly ENDSTREAM: number[] = [101, 110, 100, 115, 116, 114, 101, 97, 109] // = 'endstream'
    public static readonly FORMTYPE: number[] = [47, 70, 111, 114, 109, 84, 121, 112, 101] // = '/FormType'
    public static readonly MATRIX: number[] = [47, 77, 97, 116, 114, 105, 120] // = '/Matrix'
    public static readonly BBOX: number[] = [47, 66, 66, 111, 120] // = '/BBox'

    public static readonly RC: number[] = [47, 82, 67] // = '/RC'
    public static readonly CREATION_DATE: number[] = [47, 67, 114, 101, 97, 116, 105, 111, 110, 68, 97, 116, 101] // = '/CreationDate'
    public static readonly SUBJ: number[] = [47, 83, 117, 98, 106] // = '/Subj'
    public static readonly TRAILER: number[] = [116, 114, 97, 105, 108, 101, 114] // = 'trailer'
    public static readonly SIZE: number[] = [47, 83, 105, 122, 101] // = '/Size'
    public static readonly ROOT: number[] = [47, 82, 111, 111, 116] // = '/Root'
    public static readonly PREV: number[] = [47, 80, 114, 101, 118] // ='/Prev'
    public static readonly STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static readonly EOF: number[] = [37, 37, 69, 79, 70] // = '%%EOF'

    public static readonly TRUE: number[] = [116, 114, 117, 101] // = 'true'

    public static readonly XREF: number[] = [120, 114, 101, 102] // = 'xref'

    public static readonly TEXT_JUSTIFICATION : number[] = [47, 81] // = '/Q'
    public static readonly DEFAULT_STYLE_STRING : number[] = [47, 68, 83] // = '/DS'
    public static readonly DIFFERENCE_RECTANGLE : number[] = [47, 82, 68] // = '/RD'
    public static readonly IT : number[] = [47, 73, 84] // = '/IT'
    public static readonly LINE_ENDING : number[] = [47, 76, 69] // = '/LE'
    public static readonly CALLOUT_LINE : number[] = [47, 67, 76] // = '/CL'
    public static readonly QUADPOINTS: number[] = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115] // = '/QuadPoints'
    public static readonly VERTICES: number[] = [47, 86, 101, 114, 116, 105, 99, 101, 115] // = '/Vertices'
    public static readonly NAME: number[] = [47, 78, 97, 109, 101] // = '/Name'
    public static readonly DRAFT: number[] = [47, 68, 114, 97, 102, 116] // = '/Draft'

    public static readonly SY: number[] = [47, 83, 121] // = '/Sy'
    public static readonly P: number = 80

    /**
     * Writes a reference pointer
     *
     * <obj_id> <generation> R
     *
     * The 'R' and the preceding space is only written in case 'referenced' is true
     * */
    public static writeReferencePointer(ref: ReferencePointer, referenced: boolean = false): number[] {
        let ret: number[] = Util.convertNumberToCharArray(ref.obj)

        ret.push(Util.SPACE)

        ret = ret.concat(Util.convertNumberToCharArray(ref.generation))

        if (referenced) {
            ret.push(Util.SPACE)
            ret.push(...Util.R)
        }

        return ret
    }

    /**
     * Adds preceding zeros (0) in front of the 'value' to match the length
     * */
    public static pad(length: number, value: string | number): number[] {
        value = String(value)

        let ret: number[] = []

        for (let i = 0; i < length - value.length; ++i) {
            ret.push(48)
        }

        ret = ret.concat(Util.convertNumberToCharArray(value))

        return ret
    }

    /**
     * Writes a nested number array
     * */
    public static writeNestedNumberArray(array: number[][]): number[] {
        let ret: number[] = [...Util.ARRAY_START]

        for (let subArray of array) {
            ret = ret.concat(WriterUtil.writeNumberArray(subArray))
            ret.push(Util.SPACE)
        }

        ret.push(...Util.ARRAY_END)
        return ret
    }

    /**
     * Writes a javascript number array to a PDF number array
     * */
    public static writeNumberArray(array: number[]): number[] {
        let ret: number[] = [...Util.ARRAY_START]

        for (let i of array) {
            ret = ret.concat(Util.convertNumberToCharArray(i))
            ret.push(Util.SPACE)
        }

        ret.push(...Util.ARRAY_END)

        return ret
    }

    /**
     * Replaces the /Annots field in an page object
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    public static replaceAnnotsFieldInPageObject(data: Uint8Array, page: Page, page_ptr: number, annot_array_reference: ReferencePointer): number[] {
        let ptr_objend = Util.locateSequence(Util.ENDOBJ, data, page_ptr, true)

        let complete_page_object_data = data.slice(page_ptr, ptr_objend + Util.ENDOBJ.length)

        let ret: number[] = []

        if (page.hasAnnotsField) {
            // in this case the page object directly contains an array of references and
            // does not point to an array array object -- we replace the array of references with a pointer
            // to the reference array
            let ptr_annots = Util.locateSequence(Util.ANNOTS, complete_page_object_data, 0, true)

            ret = Array.from(complete_page_object_data.slice(0, ptr_annots + Util.ANNOTS.length))
            ret.push(Util.SPACE)
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true))
            ret.push(Util.SPACE)
            let ptr_annots_array_end = Util.locateSequence(Util.ARRAY_END, complete_page_object_data, ptr_annots, true) + Util.ARRAY_END.length

            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_annots_array_end, complete_page_object_data.length)))

        } else {
            let ptr_dict_end = Util.locateSequenceReversed(Util.DICT_END, complete_page_object_data, complete_page_object_data.length - 1)

            if (-1 === ptr_dict_end)
                throw Error("Could not identify dictionary end")

            ret = Array.from(complete_page_object_data.slice(0, ptr_dict_end))
            ret = ret.concat(Util.ANNOTS)
            ret.push(Util.SPACE)
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true))
            ret.push(Util.SPACE)
            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_dict_end, complete_page_object_data.length)))
        }

        ret.push(Util.CR)
        ret.push(Util.LF)

        return ret
    }

    /**
     * Writes the given object as stream object. Handels all the necessary stuff
     * object_id: The reference pointer id and generation
     * dict: dictionary fields that must be added to the stream object. Must be already encoded in bytes
     * stream: The stream content. Note, that the stream output will be only compressed if you provide a stream object. Number arrays will be processed unaltered.
     * */
    public static writeStreamObject(object_id : ReferencePointer, dict : number[], stream : Stream | number[]) : number[] {
        let streamData = stream
        let compressed: boolean = false

        if (stream instanceof Stream) {
            streamData = Array.from(stream.encode())
            compressed = true
        }
        let ret: number[] = WriterUtil.writeReferencePointer(object_id)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret = ret.concat(WriterUtil.DICT_START)
        ret.push(WriterUtil.SPACE)

        if (compressed) {
            ret = ret.concat(WriterUtil.FILTER)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.FLATEDECODE)
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.LENGTH)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray((streamData as number[]).length))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(dict)
        ret = ret.concat(WriterUtil.DICT_END)
        ret = ret.concat(WriterUtil.STREAM)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(streamData as number[])
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDSTREAM)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return ret
    }
}
