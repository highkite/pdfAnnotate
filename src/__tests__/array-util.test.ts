import { ArrayUtil } from '../array-util'
import { Util } from '../util';
import { encode } from './Data2'

test('extractArray', () => {
    let data = new Uint8Array([91, 49, 32, 50, 32, 51, 32, 93]) // number array
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).result).toEqual([1, 2, 3])
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(7)

    data = new Uint8Array([91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93]) // reference pointer array
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(13)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(6)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)

    expect(ArrayUtil.extractArray(data, 0).result[1].obj).toEqual(8)
    expect(ArrayUtil.extractArray(data, 0).result[1].generation).toEqual(0)
})

test('extractArray_2', () => {
    let data = encode(`[ 15 0 R/XYZ 69 756 0]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(21)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(15)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)

    expect(ArrayUtil.extractArray(data, 0).result[1]).toBe("/XYZ")

    expect(ArrayUtil.extractArray(data, 0).result[2]).toBe(69)
    expect(ArrayUtil.extractArray(data, 0).result[3]).toBe(756)
    expect(ArrayUtil.extractArray(data, 0).result[4]).toBe(0)

})

test('extractArray_3', () => {
    let data = encode(`[/PDF/Text/ImageB/ImageC/ImageI]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual("/PDF")
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual("/Text")
    expect(ArrayUtil.extractArray(data, 0).result[2]).toEqual("/ImageB")
    expect(ArrayUtil.extractArray(data, 0).result[3]).toEqual("/ImageC")
    expect(ArrayUtil.extractArray(data, 0).result[4]).toEqual("/ImageI")

})

test('extractArray_4', () => {
    let data = encode(`[<9BFD8283F629F168063225BF31A92429> <6A28637CD303B944B7A012622D2884DD>]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual(new Uint8Array(Util.convertHexStringToByteArray("9BFD8283F629F168063225BF31A92429")))
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual(new Uint8Array(Util.convertHexStringToByteArray("6A28637CD303B944B7A012622D2884DD")))

})


test('extractArray_5', () => {
    let data = encode(`[(String 1) (String 2)]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(Util.convertAsciiToString(ArrayUtil.extractArray(data, 0).result[0])).toEqual("String 1")
    expect(Util.convertAsciiToString(ArrayUtil.extractArray(data, 0).result[1])).toEqual("String 2")

})

test('extractArray_6', () => {
    let data = encode('[4 0 R /XYZ null null null]')
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(4)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)
    expect(ArrayUtil.extractArray(data, 0).result[1]).toBe("/XYZ")
    expect(ArrayUtil.extractArray(data, 0).result[2]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[3]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[4]).toBe("null")
})

test('extractArray_7', () => {
    let data = encode(`[4 0 R %  blabla
        /XYZ  % bublub
        null null null]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(4)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)
    expect(ArrayUtil.extractArray(data, 0).result[1]).toBe("/XYZ")
    expect(ArrayUtil.extractArray(data, 0).result[2]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[3]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[4]).toBe("null")
})

test('extractArray_8', () => {
    let data = encode(`[4 0 R %  blabla
        %
        /XYZ  % bublub
        null null null]`)
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(4)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)
    expect(ArrayUtil.extractArray(data, 0).result[1]).toBe("/XYZ")
    expect(ArrayUtil.extractArray(data, 0).result[2]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[3]).toBe("null")
    expect(ArrayUtil.extractArray(data, 0).result[4]).toBe("null")
})

test('extractArray_9', () => {
    let data = new Uint8Array([91,40,122,101,63,145,221,120,129,65,182,230,117,42,176,129,30,131,41,32,40,61,133,44,242,236,12,213,180,243,44,79,92,41,77,16,182,25,41,32,93])
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual(new Uint8Array([ 122, 101, 63, 145, 221, 120, 129, 65, 182, 230, 117, 42, 176, 129, 30, 131 ]))
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual(new Uint8Array([ 61, 133, 44, 242, 236, 12, 213, 180, 243, 44, 79, 41, 77, 16, 182, 25 ]))
    expect(ArrayUtil.extractArray(data, 0).end_index).toBe(40)
})

test('extractArrayNested', () => {
    let data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 93])
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result).toEqual([[1, 2, 3], [1, 2, 3]])

    data = new Uint8Array([91, 91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93, 32, 93]) // reference pointer array
    expect(ArrayUtil.extractArray(data, 0).start_index).toBe(0)
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(data.length - 1)
    expect(ArrayUtil.extractArray(data, 0).result[0][0].obj).toEqual(6)
    expect(ArrayUtil.extractArray(data, 0).result[0][0].generation).toEqual(0)
    expect(ArrayUtil.extractArray(data, 0).result[0][1].obj).toEqual(8)
    expect(ArrayUtil.extractArray(data, 0).result[0][1].generation).toEqual(0)
})
