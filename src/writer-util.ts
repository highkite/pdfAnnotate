import { Page, ReferencePointer } from './parser'
import { Util } from './util'

export class WriterUtil {
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
        let ret: number[] = Util.ARRAY_START

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
        let ret: number[] = Util.ARRAY_START

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
    public static replaceAnnotsFieldInPageObject(data: Int8Array, page: Page, page_ptr: number, annot_array_reference: ReferencePointer): number[] {
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
            ptr_annots_array_end = Util.skipDelimiter(complete_page_object_data, ptr_annots_array_end)

            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_annots_array_end, complete_page_object_data.length)))

        } else {
            let ptr_dict_end = Util.locateSequenceReversed(Util.DICT_END, complete_page_object_data, complete_page_object_data.length - 1, true)

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
}
