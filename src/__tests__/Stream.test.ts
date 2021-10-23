import { Stream, FlateStream } from '../stream';

test('getNBytesAsNumber', () => {
    let data = new Uint8Array([15, 14, 200, 120])
    let str = new Stream(data)

    expect(str.getNBytesAsNumber()).toBe(15)
    expect(str.peekNBytesAsNumber(1, 1)).toBe(14)
    expect(str.peekNBytesAsNumber(1, 2)).toBe(200)
    expect(str.peekNBytesAsNumber(1, 3)).toBe(120)

    expect(str.peekNBytesAsNumber(2, 0)).toBe(3854)
    expect(str.peekNBytesAsNumber(2, 2)).toBe(51320)
    expect(str.peekNBytesAsNumber(3, 1)).toBe(968824)

    expect(str.getNBytesAsNumber()).toBe(14)
    expect(str.getNBytesAsNumber(2)).toBe(51320)
})

test('getNBytesAsNumber_2', () => {
    let data = new Uint8Array([15, 14, 200, 120, 1, 0, 0, 5])
    let str = new Stream(data)

    expect(str.getNBytesAsNumber(1)).toBe(15)
    expect(str.getNBytesAsNumber(3)).toBe(968824)

    expect(str.getNBytesAsNumber(1)).toBe(1)
    expect(str.getNBytesAsNumber(3)).toBe(5)
})

test('testPNGFilter_None', () => {
    let source = new Uint8Array(
        [0, 52, 55, 61, 66, 70,
            0, 63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.decodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Sub', () => {
    let source = new Uint8Array(
        [1, 52, 3, 6, 5, 4,
            1, 63, -4, -4, 35, 19]
    )
    let target = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.decodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Up', () => {
    let source = new Uint8Array(
        [2, 52, 55, 61, 66, 70,
            2, 11, 4, -6, 24, 39]
    )
    let target = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.decodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Avg', () => {
    let source = new Uint8Array(
        [3, 52, 29, 34, 36, 37,
            3, 37, 0, -5, 30, 29]
    )
    let target = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.decodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Paeth', () => {
    let source = new Uint8Array(
        [4, 52, 3, 6, 5, 4,
            4, 11, -4, -6, 29, 19]
    )
    let target = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.decodePNGFilter(source, decodeParameters)).toEqual(target)
})


test('testPNGFilter_None_encode', () => {
    let source = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [0, 52, 55, 61, 66, 70,
            0, 63, 59, 55, 90, 109]
    )

    let decodeParameters = { predictor: 12, columns: 5, encoding: 0 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.encodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Sub_encode', () => {
    let source = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [1, 52, 3, 6, 5, 4,
            1, 63, -4, -4, 35, 19]
    )

    let decodeParameters = { predictor: 12, columns: 5, encoding: 1 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.encodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Up_encode', () => {
    let source = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [2, 52, 55, 61, 66, 70,
            2, 11, 4, -6, 24, 39]
    )

    let decodeParameters = { predictor: 12, columns: 5, encoding: 2 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.encodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Avg_encode', () => {
    let source = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [3, 52, 29, 34, 36, 37,
            3, 37, 0, -5, 30, 29]
    )

    let decodeParameters = { predictor: 12, columns: 5, encoding: 3 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.encodePNGFilter(source, decodeParameters)).toEqual(target)
})

test('testPNGFilter_Paeth_encode', () => {
    let source = new Uint8Array(
        [52, 55, 61, 66, 70,
            63, 59, 55, 90, 109]
    )
    let target = new Uint8Array(
        [4, 52, 3, 6, 5, 4,
            4, 11, -4, -6, 29, 19]
    )

    let decodeParameters = { predictor: 12, columns: 5, encoding: 4 }
    let flt = new FlateStream(new Uint8Array())
    expect(flt.encodePNGFilter(source, decodeParameters)).toEqual(target)
})
