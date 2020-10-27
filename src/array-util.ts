import { Util, ExtractionResult } from './util'
import { ObjectUtil } from './object-util'
/**
 * Holds the logic for extracting arrays
 * */
export class ArrayUtil {
    /**
     * Extracts array of numbers and arrays of references
     *
     * The function supports arbitrarily nesting of arrays and multiple types.
     * */
    public static extractArray(data: Uint8Array, ptr: number): ExtractionResult {
        ptr = Util.skipSpaces(data, ptr)
        let start_index = ptr

        if (data[ptr] !== Util.ARRAY_START[0])
            throw Error("Invalid array sequence -- does not start with '['")

        ptr += 1

        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array | undefined = next.result
        ptr = next.start_index

        let ret_list: any[] = []

        while (next_string) {
            if (next_string[0] === Util.ARRAY_START[0]) {
                let sub_array = ArrayUtil.extractArray(data, ptr)
                ptr = sub_array.end_index
                ret_list.push(sub_array.result)
            } else if (Util.areArraysEqual(next_string, Util.NULL)) {
                ret_list.push("null")
                ptr += next_string.length - 1
            } else if (next_string[0] === Util.LITERAL_STRING_END[0]) {
                return { result: ret_list, start_index: start_index, end_index: next.end_index }
            } else if (next_string[0] === Util.LITERAL_STRING_START[0]) {
                let extracted_string = Util.extractString(data, ptr)
                ret_list.push(extracted_string.result)
                ptr = extracted_string.end_index
            } else if (next_string[0] === Util.DICT_START[0]) { // <
                let lookup_word = Util.readNextWord(data, next.end_index + 1)
                if (lookup_word.result && lookup_word.result[0] === Util.DICT_START[0]) {
                    let dict = {}
                    ptr = ObjectUtil.extractDictValueRec(data, ptr, dict)
                    ret_list.push(dict)
                } else {
                    let hex_string = Util.extractHexString(data, ptr)
                    ret_list.push(hex_string.result)
                    ptr = hex_string.end_index
                }
            } else if (next_string[0] === 47) { // /
                let opt_value = Util.extractOptionValue(data, ptr)
                ret_list.push("/" + opt_value.result)
                ptr = opt_value.end_index
            } else if (next_string[0] === Util.R[0]) { // Reference pointer
                let obj = ret_list[ret_list.length - 2]
                let generation = ret_list[ret_list.length - 1]
                ret_list = ret_list.slice(0, ret_list.length - 2)
                ret_list.push({ obj: obj, generation: generation })
                ptr = next.end_index
            } else if (next_string[0] === Util.ARRAY_END[0]) {
                break
            } else {
                let nbr = Util.extractNumber(data, ptr)
                ret_list.push(nbr.result)
                ptr = nbr.end_index
            }

            ++ptr
            ptr = Util.skipSpaces(data, ptr)
            next = Util.readNextWord(data, ptr)
            next_string = next.result
            ptr = next.start_index

        }

        return { result: ret_list, start_index: start_index, end_index: next.end_index }
    }
}
