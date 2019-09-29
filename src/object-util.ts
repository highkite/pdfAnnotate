import { Util } from './util';
/**
 * While the general Util class holds low level methods to navigate through the pdf data, the ObjectUtil
 * is purposefully build to extract complete objects. It returns those as json dictionaries.
 * */
export class ObjectUtil {

    public static extractDictKeyRec(data: Uint8Array, ptr: number, dict: any): number {
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array = next[0] || new Uint8Array([])
        let _ptr = Util.skipDelimiter(next_string, 0)

        if (Util.DICT_END[0] === next_string[0]) {
            let wordLookup = Util.readNextWord(data, next[1])
            if (wordLookup[0] && Util.DICT_END[0] === wordLookup[0][0]) {
                return wordLookup[1]
            }
        }

        return ObjectUtil.extractDictValueRec(data, next[1], dict, Util.convertAsciiToString(next_string))
    }

    public static extractDictValueRec(data: Uint8Array, ptr: number, dict: any, current_key: string | undefined = undefined): number {
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array = next[0] || new Uint8Array([])
        ptr = next[1] - next_string.length

        if (next_string[0] === Util.ARRAY_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous array definition")
            // handle array
            let extracted_array = Util.extractArray(data, ptr)
            dict[current_key] = extracted_array.result
            return ObjectUtil.extractDictKeyRec(data, extracted_array.end_index + 1, dict)
        } else if (next_string[0] === Util.STRING_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous string definition")
            let extracted_string = Util.extractString(data, ptr)
            // handle string
            dict[current_key] = extracted_string.result
            return ObjectUtil.extractDictKeyRec(data, extracted_string.end_index, dict)
        } else if (next_string[0] === Util.DICT_START[0]) { // <
            if (data[next[1]] === Util.DICT_START[0]) {
                if (current_key) {
                    let sup_dict = {}
                    let end_sub_dict = ObjectUtil.extractDictKeyRec(data, next[1] + 1, sup_dict)
                    dict[current_key] = sup_dict
                    return ObjectUtil.extractDictKeyRec(data, end_sub_dict, dict)
                } else {
                    return ObjectUtil.extractDictKeyRec(data, next[1] + 1, dict)
                }
            }
        } else if (next_string[0] === 47) { // /
            if (!current_key)
                throw Error("Invalid anonymous property definition")
            // handle Reference
            dict[current_key] = "/" + Util.extractOptionValue(data, ptr)
            return ObjectUtil.extractDictKeyRec(data, next[1], dict)
        } else { // It is a number, but this number might be part of a Reference
            let lookupNext = Util.readNextWord(data, next[1])
            let lookupNextWord = lookupNext[0] || new Uint8Array([])

            if (!current_key)
                throw Error("Invalid anonymous reference/number definition")

            let value_end_ptr = next[1]

            if (lookupNextWord[0] === 47 || lookupNextWord[0] === Util.DICT_END[0]) { // is a number
                dict[current_key] = Util.extractNumber(data, ptr)
            } else { // is a rereference
                let extracted_reference = Util.extractReferenceTyped(data, ptr)
                dict[current_key] = extracted_reference.result
                value_end_ptr = extracted_reference.end_index
            }
            // handle Reference
            return ObjectUtil.extractDictKeyRec(data, value_end_ptr, dict)
        }

        throw Error(`Could not interpret: ${next_string}`)
    }

    /**
     * Parses a PDF object and returns a dictionary containing its fields
     * */
    public static extractObject(data: Uint8Array, ptr: number): any {
        let ret_obj: any = {}

        let object_id = Util.extractObjectId(data, ptr)

        ret_obj.id = object_id

        ptr = Util.locateSequence(Util.OBJ, data, ptr) + Util.OBJ.length
        let ptr_obj_end = Util.locateSequence(Util.ENDOBJ, data, ptr)

        data = data.slice(ptr, ptr_obj_end)
        Util.debug_printIndexed(data)

        // determine the type of the object:
        let next = Util.readNextWord(data, 0)

        if (next[0] && next[0][0] === Util.DICT_START[0]) { // object contains a dict
            let result_dict = {}
            ObjectUtil.extractDictValueRec(data, 0, result_dict)
            ret_obj.value = result_dict
        } else if (next[0] && next[0][0] === Util.ARRAY_START[0]) { // object contains an array
            let lst = Util.extractArray(data, next[1])
            ret_obj.value = lst.result
        } else {
            throw Error(`Invalid object type - starting with: ${next[0]}`)
        }

        return ret_obj
    }
}
