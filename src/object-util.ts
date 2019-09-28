import { Util } from './util';
/**
 * While the general Util class holds low level methods to navigate through the pdf data, the ObjectUtil
 * is purposefully build to extract complete objects. It returns those as json dictionaries.
 * */
export class ObjectUtil {

    /**
     * Handles the value field of an entry
     * */
    private static handleValue(data: Uint8Array, ptr: number): [any, number] {
        if (data[ptr] === 47) {
            let optValue = "/" + Util.extractOptionValue(data, ptr)
            return [optValue, ptr + optValue.length]
        }

        let field_value_end_ptr = Util.locateSequence([47], data, ptr)

        let value_data: Uint8Array = new Uint8Array([])

        console.log(`value_data : ${Util.convertAsciiToString(value_data)}`)

        if (field_value_end_ptr === -1) {
            value_data = data.slice(ptr, data.length)
            field_value_end_ptr = data.length
        } else {
            value_data = data.slice(ptr, field_value_end_ptr)
        }


        for (let i = 0; i < value_data.length; ++i) {
            if (value_data[i] === Util.ARRAY_START[0] || value_data[i] === Util.ARRAY_END[0]) {
                // handle array
                return [Util.extractArray(value_data, 0), field_value_end_ptr]
            } else if (value_data[i] === Util.STRING_START[0] || value_data[i] === Util.STRING_END[0]) {
                // handle string
                return [Util.extractString(value_data, 0), field_value_end_ptr]
            } else if (value_data[i] === Util.R[0]) { // R
                // handle Reference
                return [Util.extractReferenceTyped(value_data, 0), field_value_end_ptr]
            }
        }

        return [Util.extractNumber(value_data, 0), field_value_end_ptr]
    }

    public static extractDictKeyRec(data: Uint8Array, ptr: number, dict: any): number {
        //console.log(Util.convertAsciiToString(data.slice(ptr, data.length)))
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array = next[0] || new Uint8Array([])
        console.log(`Process key at position (${ptr}) - : ${next_string} - ${Util.convertAsciiToString(next_string)}`)
        let _ptr = Util.skipDelimiter(next_string, 0)

        if (Util.locateSequence(Util.DICT_END, next_string) !== -1) {
            console.log(`DICT END -- continue at ${next[1]}`)
            return next[1]
        }

        return ObjectUtil.extractDictValueRec(data, next[1], dict, Util.convertAsciiToString(next_string))
    }

    public static extractDictValueRec(data: Uint8Array, ptr: number, dict: any, current_key: string | undefined = undefined): number {
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array = next[0] || new Uint8Array([])
        ptr = Util.skipDelimiter(data, ptr)
        console.log(`Process value: ${Util.convertAsciiToString(next_string)} with end index: ${ptr}`)

        if (next_string[0] === Util.ARRAY_START[0]) {
            console.log("\t -- ARRAY")
            if (!current_key)
                throw Error("Invalid anonymous array definition")
            // handle array
            let extracted_array = Util.extractArray(data, ptr)
            dict[current_key] = extracted_array.result
            console.log(dict)
            return ObjectUtil.extractDictKeyRec(data, extracted_array.end_index + 1, dict)
        } else if (next_string[0] === Util.STRING_START[0]) {
            console.log("\t -- STRING")
            if (!current_key)
                throw Error("Invalid anonymous string definition")
            let extracted_string = Util.extractString(data, ptr)
            // handle string
            dict[current_key] = extracted_string.result
            return ObjectUtil.extractDictKeyRec(data, extracted_string.end_index, dict)
        } else if (next_string[0] === Util.DICT_START[0]) { // <
            console.log("\t -- DICT_START")
            if (current_key) {
                console.log("\t\t -- SUB DICT")
                let sup_dict = {}
                let end_sub_dict = ObjectUtil.extractDictKeyRec(data, next[1], sup_dict)
                dict[current_key] = sup_dict
                console.log(`-----------------------here: ${end_sub_dict}`)
                return ObjectUtil.extractDictKeyRec(data, end_sub_dict, dict)
            } else {
                return ObjectUtil.extractDictKeyRec(data, next[1], dict)
            }
        } else if (next_string[0] === 47) { // /
            console.log("\t -- PROPERTY")
            if (!current_key)
                throw Error("Invalid anonymous property definition")
            // handle Reference
            dict[current_key] = "/" + Util.extractOptionValue(data, ptr)
            console.log(dict)
            return ObjectUtil.extractDictKeyRec(data, next[1], dict)
        } else { // It is a number, but this number might be part of a Reference
            let lookupNext = Util.readNextWord(data, next[1])
            let lookupNextWord = lookupNext[0] || new Uint8Array([])

            if (!current_key)
                throw Error("Invalid anonymous reference/number definition")

            let value_end_ptr = next[1]
            console.log(`Lookup next word: ${Util.convertAsciiToString(lookupNextWord)}`)

            if (lookupNextWord[0] === 47 || lookupNextWord[0] === Util.DICT_END[0]) { // is a number
                console.log("\t -- NUMBER")
                dict[current_key] = Util.extractNumber(data, ptr)
            } else { // is a rereference
                console.log("\t -- REFERENCE")
                let extracted_reference = Util.extractReferenceTyped(data, ptr)
                dict[current_key] = extracted_reference.result
                value_end_ptr = extracted_reference.end_index
            }
            // handle Reference
            console.log(dict)
            return ObjectUtil.extractDictKeyRec(data, value_end_ptr, dict)
        }
    }

    /**
     * Parses a PDF object and returns a dictionary containing its fields
     * */
    public static extractObject(data: Uint8Array, ptr: number): any {
        Util.debug_printIndexed(data)
        let ret_obj: any = {}

        let object_id = Util.extractObjectId(data, ptr)

        ret_obj.id = object_id

        ptr = Util.locateSequence(Util.OBJ, data) + Util.OBJ.length

        ObjectUtil.extractDictValueRec(data, ptr, ret_obj)

        return ret_obj
    }
}
