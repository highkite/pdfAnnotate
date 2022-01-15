import { Util } from './util';
import { ArrayUtil } from './array-util'
import { Stream, FlateStream, FilterParameters } from './stream';
import { ObjectLookupTable, XRef } from './document-history';

interface StreamObjectLookupTable {
    [id: number]: number
}

/**
 * While the general Util class holds low level methods to navigate through the pdf data, the ObjectUtil
 * is purposefully build to extract complete objects. It returns those as json dictionaries.
 * */
export class ObjectUtil {

    public static extractDictKeyRec(data: Uint8Array, ptr: number, dict: any): number {
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array | undefined = next.result

        if (!next_string)
            return ptr

        let _ptr = Util.skipDelimiter(next_string, 0)

        if (next_string[0] && Util.DICT_END[0] === next_string[0]) {
            let wordLookup = Util.readNextWord(data, next.end_index + 1)
            if (wordLookup.result && Util.DICT_END[0] === wordLookup.result[0]) {
                return wordLookup.end_index
            }
        }

        return ObjectUtil.extractDictValueRec(data, next.end_index + 1, dict, Util.convertAsciiToString(next_string))
    }

    private static i: number = 0

    public static extractDictValueRec(data: Uint8Array, ptr: number, dict: any, current_key: string | undefined = undefined): number {
        let next = Util.readNextWord(data, ptr)
        let next_string: Uint8Array = next.result || new Uint8Array([])
        ptr = next.end_index - next_string.length + 1

        if (next_string[0] === Util.ARRAY_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous array definition")
            // handle array
            let extracted_array = ArrayUtil.extractArray(data, ptr)
            dict[current_key] = extracted_array.result
            return ObjectUtil.extractDictKeyRec(data, extracted_array.end_index + 1, dict)
        } else if (next_string[0] === Util.DICT_START[0] && data[next.end_index + 1] === Util.DICT_START[0]) {
            if (current_key) {
                let sup_dict = {}
                let end_sub_dict = ObjectUtil.extractDictKeyRec(data, next.end_index + 2, sup_dict)
                dict[current_key] = sup_dict
                return ObjectUtil.extractDictKeyRec(data, end_sub_dict + 1, dict)
            } else {
                return ObjectUtil.extractDictKeyRec(data, next.end_index + 2, dict)
            }
        } else if (next_string[0] === Util.HEX_STRING_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous string definition")
            let extracted_string = Util.extractHexString(data, ptr)
            dict[current_key] = extracted_string.result
            return ObjectUtil.extractDictKeyRec(data, extracted_string.end_index + 1, dict)
        } else if (next_string[0] === Util.LITERAL_STRING_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous string definition")
            let extracted_string = Util.extractString(data, ptr)
            dict[current_key] = extracted_string.result
            return ObjectUtil.extractDictKeyRec(data, extracted_string.end_index + 1, dict)
        } else if (next_string[0] === 47) { // /
            if (!current_key)
                throw Error("Invalid anonymous property definition")
            let opt_value = Util.extractOptionValue(data, ptr)
            dict[current_key] = "/" + opt_value.result
            return ObjectUtil.extractDictKeyRec(data, opt_value.end_index + 1, dict)
        } else { // It is a number, but this number might be part of a Reference
            let lookupNext = Util.readNextWord(data, next.end_index + 1)
            let lookupNextWord = lookupNext.result || new Uint8Array([])

            if (!current_key)
                throw Error("Invalid anonymous reference/number definition")

            let value_end_ptr = next.end_index + 1

            if (lookupNextWord[0] === 47 || lookupNextWord[0] === Util.DICT_END[0]) { // is a number
                dict[current_key] = Util.extractNumber(data, ptr).result
            } else { // is a rereference
                let extracted_reference = Util.extractReferenceTyped(data, ptr)
                dict[current_key] = extracted_reference.result
                value_end_ptr = extracted_reference.end_index + 1
            }
            // handle Reference
            return ObjectUtil.extractDictKeyRec(data, value_end_ptr, dict)
        }
    }

    /**
     * Locates the object start in case the ptr does not point correctly
     * */
    public static locateObjectStart(data : Uint8Array, ptr : number) : number {
        let obj_ptr : number = Util.locateSequence(Util.OBJ, data, ptr)
        let endobj_ptr : number = Util.locateSequence(Util.ENDOBJ, data, ptr)

        let consumeGenerationAndNumberRevere = (ptr : number) => {
            // <id> <generation> obj ... endobj
            //                   ^
            // being somewhere here
            let new_ptr = Util.skipSpacesReverse(data, ptr - 1)
            // <id> <generation> obj ... endobj
            //                 ^
            // being somewhere here
            while(new_ptr > 0 && !Util.isDelimiter(data[new_ptr]))--new_ptr
            // <id> <generation> obj ... endobj
            //      ^
            // being somewhere here
            new_ptr = Util.skipSpacesReverse(data, new_ptr - 1)
            // <id> <generation> obj ... endobj
            // ^
            // being somewhere here
            while(new_ptr > 0 && !Util.isDelimiter(data[new_ptr]))--new_ptr

            return new_ptr
        }

        if (obj_ptr !== -1 && obj_ptr < endobj_ptr) {
            return consumeGenerationAndNumberRevere(obj_ptr)
        } else if (obj_ptr > endobj_ptr || (obj_ptr === -1 && endobj_ptr > -1)) {
            // <id> <generation> obj ... endobj
            //                        ^
            // being somewhere here
            let new_ptr = Util.locateSequenceReversed(Util.OBJ, data, ptr)
            return consumeGenerationAndNumberRevere(new_ptr)
        } else {
            throw Error("Could not correct object start")
        }
    }

    /**
     * Parses a PDF object and returns a dictionary containing its fields
     * */
    public static extractObject(data: Uint8Array, xref: XRef | number, objectLookupTable: ObjectLookupTable | undefined = undefined): any {
        if (typeof xref !== 'number' && xref.compressed) {
            if (!objectLookupTable)
                throw Error("Provide ObjectLookupTable to extract stream object")

            return ObjectUtil.extractStreamObject(data, xref.id, xref.generation, objectLookupTable[xref.pointer])
        }

        let ret_obj: any = {}
        let ptr = typeof xref === 'number' ? xref : xref.pointer

        let object_id = Util.extractObjectId(data, ptr)

        if(isNaN(object_id.obj) || isNaN(object_id.generation)) {
            return ObjectUtil.extractObject(data, ObjectUtil.locateObjectStart(data, ptr), objectLookupTable)
        }

        ret_obj.id = object_id

        ptr = Util.locateSequence(Util.OBJ, data, ptr)

        if (ptr === -1)
            throw { message: "Object missing 'obj' sequence", name: "MissingObjSequenceError"}

        ptr += Util.OBJ.length

        let ptr_obj_end = Util.locateSequence(Util.ENDOBJ, data, ptr)

        data = data.slice(ptr, ptr_obj_end)

        // determine the type of the object:
        let next = Util.readNextWord(data, 0)

        if (next.result && next.result[0] === Util.DICT_START[0]) { // object contains a dict
            let result_dict = {}
            ObjectUtil.extractDictValueRec(data, 0, result_dict)
            ret_obj.value = result_dict
        } else if (next.result && next.result[0] === Util.ARRAY_START[0]) { // object contains an array
            let lst = ArrayUtil.extractArray(data, 0)
            ret_obj.value = lst.result
        } else {
            throw Error(`Invalid object type - starting with: ${next.result}`)
        }

        // check if the object has a stream part
        ptr = Util.locateSequence(Util.STREAM, data, 0)

        if (-1 !== ptr) {
            // extract stream part
            let ptr_stream_data_start = ptr + Util.STREAM.length
            ptr_stream_data_start = Util.skipDelimiter(data, ptr_stream_data_start)

            let ptr_stream_data_end = ptr_stream_data_start + ret_obj.value["/Length"]

            ret_obj.stream = ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), ret_obj.value["/Filter"], ObjectUtil.translateDecodeParams(ret_obj))
        }

        return ret_obj
    }

    private static extractStreamObject(data: Uint8Array, object_id_to_extract: number, offset: number, streamObj_xref: XRef): any {
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

        if (!next.result || next.result[0] !== Util.DICT_START[0]) {
            throw Error("Invalid stream object -- no dict")
        }

        let result_dict: any = {}
        ObjectUtil.extractDictValueRec(data, 0, result_dict)
        ret_obj.value = result_dict

        if (result_dict["/Filter"] && Array.isArray(result_dict["/Filter"]) &&  result_dict["/Filter"].length > 0)
            result_dict["/Filter"] = result_dict["/Filter"][0]

        // check if filter is supported
        if (!result_dict["/Filter"] || result_dict["/Filter"] !== "/FlateDecode")
            throw Error(`Unsupported stream filter: ${result_dict["/Filter"]} - Only supported filter is FlateDecode`)

        if (!result_dict["/Type"] || result_dict["/Type"] !== "/ObjStm")
            throw Error(`Invalid stream object type: ${result_dict["/Type"]}`)

        // extract the stream length
        let streamLength = result_dict["/Length"]

        // extract stream part
        let ptr_stream_data_start = Util.locateSequence(Util.STREAM, data) + Util.STREAM.length
        ptr_stream_data_start = Util.skipDelimiter(data, ptr_stream_data_start)

        let ptr_stream_data_end = ptr_stream_data_start + streamLength

        let stream = ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), result_dict["/Filter"], ObjectUtil.translateDecodeParams(result_dict))

        if (!result_dict["/N"])
            throw Error("Invalid stream object -- no number of objects specified")

        if (!result_dict["/First"])
            throw Error("Invalid stream object -- no offset to the first objct specified")

        let streamReferences: StreamObjectLookupTable = ObjectUtil.extractStreamObjectTable(stream, result_dict["/N"], result_dict["/First"])

        if (!streamReferences[object_id_to_extract])
            throw Error(`Object ${object_id_to_extract} not in stream object`)

        let result_obj: any = { id: { obj: object_id_to_extract, generation: 0 } }

        let stream_data : Uint8Array = stream.getData()

        next = Util.readNextWord(stream_data, streamReferences[object_id_to_extract])

        if (next.result && next.result[0] === Util.DICT_START[0]) { // object contains a dict
            let value = {}
            result_obj.pointer_stream_end = ObjectUtil.extractDictValueRec(stream_data, streamReferences[object_id_to_extract], value)
            result_obj.value = value
            result_obj.stream = stream
            result_obj.pointer_stream_start = streamReferences[object_id_to_extract]
        } else if (next.result && next.result[0] === Util.ARRAY_START[0]) { // object contains an array
            let lst = ArrayUtil.extractArray(stream_data, streamReferences[object_id_to_extract])
            result_obj.value = lst.result
            result_obj.stream = stream
            result_obj.pointer_stream_start = streamReferences[object_id_to_extract]
        } else {
            throw Error(`Invalid stream object type - starting with: ${next.result}`)
        }

        return result_obj
    }

    private static translateDecodeParams(dict: any): FilterParameters | undefined {
        if (!dict.value)
            return undefined

        if (!dict.value["/DecodeParms"])
            return undefined

        if (!dict.value["/DecodeParms"]["/Columns"])
            return undefined

        if (!dict.value["/DecodeParms"]["/Predictor"])
            return undefined

        return { columns: dict.value["/DecodeParms"]["/Columns"], predictor: dict.value["/DecodeParms"]["/Predictor"] }
    }

    private static extractStreamObjectTable(stream: Stream, number_of_obj: number, offset_first_obj: number): StreamObjectLookupTable {
        let references: StreamObjectLookupTable = {}

        for (let i = 0; i < number_of_obj; ++i) {
            let obj_id = stream.getNumber()
            let pointer = stream.getNumber() + offset_first_obj

            references[obj_id] = pointer
        }

        return references
    }

    private static extractStreamData(streamData: Uint8Array, compression: string, decodeParameters: FilterParameters | undefined = undefined): Stream {
        let stream: Stream | undefined = undefined
        if (compression === '/FlateDecode') {
            stream = new FlateStream(streamData, decodeParameters)
        } else {
            throw Error(`Unsupported stream filter: ${compression} - Only supported filter is FlateDecode (right now)`)
        }

        if (!stream)
            throw Error("Could not derive stream")

        return stream
    }
}
