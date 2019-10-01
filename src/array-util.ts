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
        console.log("######################### RUN ARRAY EXTRACTION")
        ptr = Util.skipSpaces(data, ptr)

        if (data[ptr] !== Util.ARRAY_START[0])
            throw Error("Invalid array sequence -- does not start with '['")

        ptr += 1

        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array | undefined = next[0]
        console.log(`Process ${Util.convertAsciiToString(next_string!)}`)

        let ret_list: any[] = []

        while (next_string) {
            if (next_string[0] === Util.ARRAY_START[0]) {
                let sub_array = ArrayUtil.extractArray(data, ptr)
                next[1] = sub_array.end_index
                ret_list.push(sub_array.result)
            } else if (next_string[0] === Util.STRING_END[0]) {
                return { result: ret_list, end_index: next[1] }
            } else if (next_string[0] === Util.STRING_START[0]) {
                let extracted_string = Util.extractString(data, ptr)
                ret_list.push(extracted_string.result)
                next[1] = extracted_string.end_index
            } else if (next_string[0] === Util.DICT_START[0]) { // <
                let lookup_word = Util.readNextWord(data, next[1])
                if (lookup_word[0] && lookup_word[0][0] === Util.DICT_START[0]) {
                    let dict = {}
                    ObjectUtil.extractDictValueRec(data, ptr, dict)
                    ret_list.push(dict)
                } else {
                    let hex_string = Util.extractHexString(data, ptr)
                    ret_list.push(hex_string.result)
                    next[1] = hex_string.end_index
                }
            } else if (next_string[0] === 47) { // /
                ret_list.push("/" + Util.extractOptionValue(data, ptr))
            } else if (next_string[0] === Util.R[0]) { // /
                let obj = ret_list[ret_list.length - 2]
                let generation = ret_list[ret_list.length - 1]
                ret_list = ret_list.slice(0, ret_list.length - 2)
                ret_list.push({ obj: obj, generation: generation })
            } else if (next_string[0] === Util.ARRAY_END[0]) {
                break
            } else {
                ret_list.push(Util.extractNumber(data, ptr).result)
            }

            ptr = next[1]
            next = Util.readNextWord(data, next[1])
            next_string = next[0]
            console.log(`Process ${Util.convertAsciiToString(next_string!)}`)
        }

        console.log(ret_list)

        return { result: ret_list, end_index: next[1] }
    }
}
