import { ArrayUtil } from '../array-util'
import { encode } from './Data2'

test('extractArray', () => {
    let data = new Uint8Array([91, 49, 32, 50, 32, 51, 32, 93]) // number array
    expect(ArrayUtil.extractArray(data, 0).result).toEqual([1, 2, 3])
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(8)

    data = new Uint8Array([91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93]) // reference pointer array
    expect(ArrayUtil.extractArray(data, 0).end_index).toEqual(14)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(6)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)

    expect(ArrayUtil.extractArray(data, 0).result[1].obj).toEqual(8)
    expect(ArrayUtil.extractArray(data, 0).result[1].generation).toEqual(0)
})

test('extractArray_2', () => {
    let data = encode(`[ 15 0 R/XYZ 69 756 0]`)
    expect(ArrayUtil.extractArray(data, 0).result[0].obj).toEqual(15)
    expect(ArrayUtil.extractArray(data, 0).result[0].generation).toEqual(0)

    expect(ArrayUtil.extractArray(data, 0).result[1]).toBe("/XYZ")

    expect(ArrayUtil.extractArray(data, 0).result[2]).toBe(69)
    expect(ArrayUtil.extractArray(data, 0).result[3]).toBe(756)
    expect(ArrayUtil.extractArray(data, 0).result[4]).toBe(0)

})

test('extractArray_3', () => {
    let data = encode(`[/PDF/Text/ImageB/ImageC/ImageI]`)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual("/PDF")
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual("/Text")
    expect(ArrayUtil.extractArray(data, 0).result[2]).toEqual("/ImageB")
    expect(ArrayUtil.extractArray(data, 0).result[3]).toEqual("/ImageC")
    expect(ArrayUtil.extractArray(data, 0).result[4]).toEqual("/ImageI")

})

test('extractArray_4', () => {
    let data = encode(`[<9BFD8283F629F168063225BF31A92429> <6A28637CD303B944B7A012622D2884DD>]`)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual("9BFD8283F629F168063225BF31A92429")
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual("6A28637CD303B944B7A012622D2884DD")

})


test('extractArray_5', () => {
    let data = encode(`[(String 1) (String 2)]`)
    expect(ArrayUtil.extractArray(data, 0).result[0]).toEqual("String 1")
    expect(ArrayUtil.extractArray(data, 0).result[1]).toEqual("String 2")

})

test('extractArrayNested', () => {
    let data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 93])
    expect(ArrayUtil.extractArray(data, 0).result).toEqual([[1, 2, 3], [1, 2, 3]])

    data = new Uint8Array([91, 91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93, 32, 93]) // reference pointer array
    expect(ArrayUtil.extractArray(data, 0).result[0][0].obj).toEqual(6)
    expect(ArrayUtil.extractArray(data, 0).result[0][0].generation).toEqual(0)
    expect(ArrayUtil.extractArray(data, 0).result[0][1].obj).toEqual(8)
    expect(ArrayUtil.extractArray(data, 0).result[0][1].generation).toEqual(0)
})
