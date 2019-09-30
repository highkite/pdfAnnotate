import { Util } from './util';
import { Stream, FlateStream } from './stream';
import { ObjectLookupTable, XRef } from './document-history';
/**
 * While the general Util class holds low level methods to navigate through the pdf data, the ObjectUtil
 * is purposefully build to extract complete objects. It returns those as json dictionaries.
 * */
export class ObjectUtil {

    private static extractDictKeyRec(data: Uint8Array, ptr: number, dict: any): number {
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

    private static extractDictValueRec(data: Uint8Array, ptr: number, dict: any, current_key: string | undefined = undefined): number {
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
                dict[current_key] = Util.extractNumber(data, ptr).result
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
    public static extractObject(data: Uint8Array, xref: XRef, objectLookupTable: ObjectLookupTable | undefined = undefined): any {
        if (xref.compressed) {
            if (!objectLookupTable)
                throw Error("Provide ObjectLookupTable to extract stream object")

            return ObjectUtil.extractStreamObject(data, xref.generation, objectLookupTable[xref.pointer])
        }

        let ret_obj: any = {}
        let ptr = xref.pointer

        let object_id = Util.extractObjectId(data, ptr)

        ret_obj.id = object_id

        ptr = Util.locateSequence(Util.OBJ, data, ptr) + Util.OBJ.length
        let ptr_obj_end = Util.locateSequence(Util.ENDOBJ, data, ptr)

        data = data.slice(ptr, ptr_obj_end)

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

        // check if the object has a stream part
        ptr = Util.locateSequence(Util.STREAM, data, ptr)

        if (-1 !== ptr) {
            // extract stream part
            let ptr_stream_data_start = ptr + Util.STREAM.length
            ptr_stream_data_start = Util.skipDelimiter(data, ptr_stream_data_start)

            let ptr_stream_data_end = ptr_stream_data_start + ret_obj.value["/Length"]

            ret_obj.stream = ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), ret_obj.value["/Filter"])
        }

        return ret_obj
    }

    private static extractStreamObject(data: Uint8Array, offset: number, streamObj_xref: XRef): any {
        let ptr = streamObj_xref.pointer
        let ret_obj: any = {}
        // extract object id
        let object_id: any = Util.extractObjectId(data, ptr)
        ret_obj.id = object_id

        ptr = Util.locateSequence(Util.OBJ, data, ptr) + Util.OBJ.length
        let ptr_obj_end = Util.locateSequence(Util.ENDOBJ, data, ptr)

        data = data.slice(ptr, ptr_obj_end)

        // extract dict part
        let next = Util.readNextWord(data, 0)

        if (!next[0] || next[0][0] !== Util.DICT_START[0]) {
            throw Error("Invalid stream object -- no dict")
        }

        let result_dict: any = {}
        ObjectUtil.extractDictValueRec(data, 0, result_dict)
        ret_obj.value = result_dict

        // check if filter is supported
        if (!result_dict["/Filter"] || result_dict["/Filter"] !== "/FlateDecode")
            throw Error(`Unsupported stream filter: ${result_dict["/Filter"]} - Only supported filter is FlateDecode`)

        if (!result_dict["/Type"] || result_dict["/Type"] !== "/Objstm")
            throw Error(`Invalid Stream object type: ${result_dict["/Type"]}`)

        // extract the stream length
        let streamLength = result_dict["/Length"]

        // extract stream part
        let ptr_stream_data_start = Util.locateSequence(Util.STREAM, data) + Util.STREAM.length
        ptr_stream_data_start = Util.skipDelimiter(data, ptr_stream_data_start)

        let ptr_stream_data_end = ptr_stream_data_start + streamLength

        ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), result_dict["/Filter"])
    }

    private static extractStreamData(streamData: Uint8Array, compression: string): Stream {
        let stream: Stream | undefined = undefined
        if (compression === '/FlateDecode') {
            stream = new FlateStream(streamData)
        } else {
            throw Error(`Unsupported stream filter: ${compression} - Only supported filter is FlateDecode (right now)`)
        }

        if (!stream)
            throw Error("Could not derive stream")

        Util.debug_printIndexed(stream.getData())

        return stream
    }
}
