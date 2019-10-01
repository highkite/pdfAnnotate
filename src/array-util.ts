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

        if (data[ptr] !== Util.ARRAY_START[0])
            throw Error("Invalid array sequence -- does not start with '['")

        let next = Util.readNextWord(data, ptr + 1)
        let next_string: Uint8Array | undefined = next[0]

        let ret_list = []

        while (next_string) {
            if (next_string[0] === Util.ARRAY_START[0]) {
                ret_list.push(ArrayUtil.extractArray(data, ptr))
            } else if (next_string[0] === Util.STRING_END[0]) {
                return { result: ret_list, end_index: next[1] }
            } else if (next_string[0] === Util.STRING_START[0]) {
                let extracted_string = Util.extractString(data, ptr).result
                ret_list.push(extracted_string.result)
            } else if (next_string[0] === Util.DICT_START[0]) { // <
                let dict = {}
                ObjectUtil.extractDictValueRec(data, ptr, dict)
                ret_list.push(dict)
            } else if (next_string[0] === 47) { // /
                ret_list.push("/" + Util.extractOptionValue(data, ptr))
            } else if (next_string[0] === Util.R) { // /
                let obj = ret_list[ret_list.length - 2]
                let generation = ret_list[ret_list.length - 1]
                ret_list = ret_list.slice(0, ret_list.length - 2)
                ret_list.push({ obj: obj, generation: generation })
            } else {
                ret_list.push(Util.extractNumber(data, ptr).result)
            }

            ptr = next[1]
            next = Util.readNextWord(data, next[1])
            next_string: Uint8Array | undefined = next[0]
        }

        return { result: ret_list, end_index: next[1] }
    }
}
