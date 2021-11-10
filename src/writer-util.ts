import { Page, ReferencePointer } from './parser';
import { Util } from './util';
import { Stream }  from './stream';

export class WriterUtil {
    public static N: number = 110
    public static F: number = 102
    public static q: number = 113
    public static Q: number = 81

    public static BT: number[] = [66, 84] // = 'BT'
    public static ET: number[] = [69, 84] // = 'ET'
    public static BMC: number[] = [66, 77, 67] // = 'BMC'
    public static EMC: number[] = [69, 77, 67] // = 'EMC'
    public static AP_N: number[] = [47, 78] // = '/N'
    public static AP_D: number[] = [47, 68] // = '/D'
    public static AP_R: number[] = [47, 82] // = '/R'
    public static SPACE: number = 32
    public static CR: number = 13
    public static LF: number = 10
    public static AP: number[] = [47, 65, 80] // = '/AP'
    public static OBJ: number[] = [111, 98, 106]
    public static ENDOBJ: number[] = [101, 110, 100, 111, 98, 106]
    public static ENCRYPT: number[] = [47, 69, 110, 99, 114, 121, 112, 116]
    public static ARRAY_START: number = 91
    public static OPEN: number[] = [47, 79, 112, 101, 110]
    public static ARRAY_END: number = 93
    public static DICT_START: number[] = [60, 60]
    public static HEX_STRING_START: number[] = [60]
    public static HEX_STRING_END: number[] = [62]
    public static DICT_END: number[] = [62, 62]
    public static TYPE0: number[] = [ 47, 84, 121, 112, 101, 48 ] // /Type0
    public static TYPE1: number[] = [ 47, 84, 121, 112, 101, 49 ] // /Type1
    public static TYPE3: number[] = [ 47, 84, 121, 112, 101, 51 ] // /Type3
    public static MMTYPE1: number[] = [ 47,  77,  77, 84, 121, 112, 101, 49 ] // /MMType1
    public static TRUETYPE: number[] = [ 47, 84, 114, 117, 101, 84, 121, 112, 101 ] // /TrueType
    public static CIDFONTTYPE0: number[] = [ 47,  67,  73, 68,  70, 111, 110, 116, 84, 121, 112, 101,  48 ] // /CIDFontType0
    public static CIDFONTTYPE2: number[] = [ 47,  67,  73, 68,  70, 111, 110, 116, 84, 121, 112, 101,  50 ] // /CIDFontType2
    public static TYPE_ANNOT: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 65, 110, 110, 111, 116]
    public static TYPE_XOBJECT: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 88, 79, 98, 106, 101, 99, 116]
    public static TYPE_EXTGSTATE: number[] = [47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 69, 120, 116, 71, 83, 116, 97, 116, 101]
    public static TYPE_FONTDESCRIPTOR: number[] = [ 47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 70, 111, 110, 116,  68, 101, 115, 99, 114, 105, 112, 116, 111, 114]
    public static TYPE_FONT: number[] = [ 47, 84, 121, 112, 101, WriterUtil.SPACE, 47, 70, 111, 110, 116]
    public static FONTNAME: number[] = [ 47, 70, 111, 110, 116, 78,  97, 109, 101 ] // = '/FontName'
    public static FONTFAMILY: number[] = [ 47,  70, 111, 110, 116,  70,  97, 109, 105, 108, 121 ] // = '/FontFamily'
    public static FONTSTRETCH: number[] = [ 47,  70, 111, 110, 116, 83, 116, 114, 101, 116, 99, 104 ] // = '/FontStretch'
    public static FLAGS: number[] = [ 47, 70, 108, 97, 103, 115 ] // = '/Flags'
    public static FONTBBOX: number[] = [ 47, 70, 111, 110, 116, 66,  66, 111, 120 ] // = '/FontBBox'
    public static ITALICANGLE: number[] = [ 47,  73, 116,  97, 108, 105,  99,  65, 110, 103, 108, 101 ] // = '/ItalicAngle'
    public static ASCENT: number[] = [ 47,  65, 115, 99, 101, 110, 116 ] // = '/Ascent'
    public static DESCENT: number[] = [ 47,  68, 101, 115, 99, 101, 110, 116 ] // = '/Descent'
    public static LEADING: number[] = [ 47,  76, 101,  97, 100, 105, 110, 103 ] // = '/Leading'
    public static CAPHEIGHT: number[] = [ 47,  67,  97, 112, 72, 101, 105, 103, 104, 116 ] // = '/CapHeight'
    public static XHEIGHT: number[] = [ 47,  88,  72, 101, 105, 103, 104, 116 ] // = '/XHeight'
    public static STEMV: number[] = [ 47, 83, 116, 101, 109, 86 ] // = '/StemV'
    public static ENCODING: number[] = [ 47,  69, 110,  99, 111, 100, 105, 110, 103 ] // = '/Encoding'
    public static STEMH: number[] = [ 47, 83, 116, 101, 109, 2 ] // = '/StemH'
    public static AVGWIDTH: number[] = [ 47,  65, 118, 103, 87, 105, 100, 116, 104 ] // = '/AvgWidth'
    public static MAXWIDTH: number[] = [ 47,  77,  97, 120, 87, 105, 100, 116, 104 ] // = '/MaxWidth'
    public static MISSINGWIDTH: number[] = [ 47,  77, 105, 115, 115, 105, 110, 103,  87, 105, 100, 116, 104 ] // = '/MissingWidth'
    public static FIRSTCHAR: number[] = [ 47,  70, 105, 114, 115, 116,  67, 104, 97, 114 ] // = '/FirstChar'
    public static LASTCHAR: number[] = [ 47, 76,  97, 115, 116, 67, 104,  97, 114 ] // = '/LastChar'
    public static BASEFONT: number[] = [ 47, 66,  97, 115, 101, 70, 111, 110, 116 ] // = '/BaseFont'
    public static WIDTHS: number[] = [ 47,  87, 105, 100, 116, 104, 115 ] // = '/Widths'
    public static FONTDESCRIPTOR: number[] = [ 47,  70, 111, 110, 116, 68, 101, 115,  99, 114, 105, 112, 116, 111, 114 ] // = '/FontDescriptor'
    public static XOBJECT: number[] = [47, 88, 79, 98, 106, 101, 99, 116] // = '/XObject'
    public static EXTGSTATE: number[] = [47, 69, 120, 116, 71, 83, 116, 97, 116, 101] // = '/ExtGState'
    public static COLORSPACE: number[] = [47, 67, 111, 108, 111, 114, 83, 112, 97, 99, 101] // = '/ColorSpace'
    public static PATTERN: number[] = [47, 80, 97, 116, 116, 101, 114, 110] // = '/Pattern'
    public static SHADING: number[] = [47, 83, 104, 97, 100, 105, 110, 103] // = '/Shading'
    public static FONT: number[] = [47, 70, 111, 110, 116] // = '/Font'
    public static PROCSET: number[] = [47, 80, 114, 111, 99, 83, 101, 116] // = '/ProcSet'
    public static PROPERTIES: number[] = [47, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115] // = '/Properties'
    public static RECT: number[] = [47, 82, 101, 99, 116]
    public static RESOURCES: number[] = [47, 82, 101, 115, 111, 117, 114, 99, 101, 115] // = '/Resources'
    public static SUBTYPE: number[] = [47, 83, 117, 98, 116, 121, 112, 101]
    public static FORM: number[] = [47, 70, 111, 114, 109] // = '/Form'
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
    public static STATE: number[] = [47, 83, 116, 97, 116, 101] // = '/State'
    public static STATEMODEL: number[] = [47, 83, 116, 97, 116, 101, 77, 111, 100, 101, 108] // = '/StateModel'
    public static OPACITY: number[] = [47, 67, 65] // = '/CA'
    public static _OPACITY: number[] = [47, 99, 97] // = '/ca'
    public static BORDER: number[] = [47, 66, 111, 114, 100, 101, 114] // = '/Border'
    public static PAGE_REFERENCE: number[] = [47, 80] // = '/P'
    public static DEFAULT_APPEARANCE: number[] = [47, 68, 65] // = '/DA'
    public static INKLIST: number[] = [47, 73, 110, 107, 76, 105, 115, 116] // = '/InkList'
    public static FILTER: number[] = [47, 70, 105, 108, 116, 101, 114] // = '/Filter'
    public static FLATEDECODE: number[] = [47, 70, 108, 97, 116, 101, 68, 101, 99, 111, 100, 101] // = '/FlateDecode'
    public static LENGTH: number[] = [47, 76, 101, 110, 103, 116, 104] // = '/Length'
    public static STREAM: number[] = [115, 116, 114, 101, 97, 109] // = 'stream'
    public static ENDSTREAM: number[] = [101, 110, 100, 115, 116, 114, 101, 97, 109] // = 'endstream'
    public static FORMTYPE: number[] = [47, 70, 111, 114, 109, 84, 121, 112, 101] // = '/FormType'
    public static MATRIX: number[] = [47, 77, 97, 116, 114, 105, 120] // = '/Matrix'
    public static BBOX: number[] = [47, 66, 66, 111, 120] // = '/BBox'

    public static RC: number[] = [47, 82, 67] // = '/RC'
    public static CREATION_DATE: number[] = [47, 67, 114, 101, 97, 116, 105, 111, 110, 68, 97, 116, 101] // = '/CreationDate'
    public static SUBJ: number[] = [47, 83, 117, 98, 106] // = '/Subj'
    public static TRAILER: number[] = [116, 114, 97, 105, 108, 101, 114] // = 'trailer'
    public static SIZE: number[] = [47, 83, 105, 122, 101] // = '/Size'
    public static ROOT: number[] = [47, 82, 111, 111, 116] // = '/Root'
    public static PREV: number[] = [47, 80, 114, 101, 118] // ='/Prev'
    public static STARTXREF: number[] = [115, 116, 97, 114, 116, 120, 114, 101, 102] // = 'startxref'
    public static EOF: number[] = [37, 37, 69, 79, 70] // = '%%EOF'

    public static TRUE: number[] = [116, 114, 117, 101] // = 'true'

    public static XREF: number[] = [120, 114, 101, 102] // = 'xref'

    public static TEXT_JUSTIFICATION : number[] = [47, 81] // = '/Q'
    public static DEFAULT_STYLE_STRING : number[] = [47, 68, 83] // = '/DS'
    public static DIFFERENCE_RECTANGLE : number[] = [47, 82, 68] // = '/RD'
    public static IT : number[] = [47, 73, 84] // = '/IT'
    public static LINE_ENDING : number[] = [47, 76, 69] // = '/LE'
    public static CALLOUT_LINE : number[] = [47, 67, 76] // = '/CL'
    public static QUADPOINTS: number[] = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115] // = '/QuadPoints'
    public static VERTICES: number[] = [47, 86, 101, 114, 116, 105, 99, 101, 115] // = '/Vertices'
    public static NAME: number[] = [47, 78, 97, 109, 101] // = '/Name'
    public static DRAFT: number[] = [47, 68, 114, 97, 102, 116] // = '/Draft'

    public static SY: number[] = [47, 83, 121] // = '/Sy'
    public static P: number = 80

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
