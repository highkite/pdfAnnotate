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

test('testStreamEncoding', () => {
    let source = [ 47, 84, 120, 32, 66, 77, 67, 10, 32, 113, 10, 49, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 49, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 99, 109, 10, 48, 32, 48, 32, 48, 32, 114, 103, 10, 66, 84, 10, 49, 32, 48, 32, 48, 32, 49, 32, 50, 49, 52, 46, 54, 49, 51, 32, 55, 56, 48, 46, 51, 50, 56, 32, 84, 109, 10, 47, 72, 101, 108, 118, 101, 116, 105, 99, 97, 95, 48, 32, 49, 56, 32, 84, 102, 10, 40, 97, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 111, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 116, 97, 41, 32, 84, 106, 10, 49, 52, 46, 57, 57, 52, 32, 48, 32, 84, 100, 10, 40, 116, 105, 41, 32, 84, 106, 10, 56, 46, 57, 56, 50, 32, 48, 32, 84, 100, 10, 40, 111, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 32, 116, 101, 41, 32, 84, 106, 10, 49, 57, 46, 57, 57, 56, 32, 48, 32, 84, 100, 10, 40, 115, 116, 41, 32, 84, 106, 10, 69, 84, 10, 81, 10, 69, 77, 67, 10 ]
    let target = [ 120, 156, 211, 15, 169, 80, 112, 242, 117, 230, 82, 40, 228, 50, 212, 51, 0, 3, 5, 3, 12, 6, 30, 169, 228, 92, 46, 32, 15, 8, 139, 210, 185, 156, 66, 184, 12, 193, 108, 67, 5, 35, 67, 19, 61, 51, 67, 99, 5, 115, 11, 3, 61, 99, 35, 11, 133, 144, 92, 46, 125, 143, 212, 156, 178, 212, 146, 204, 228, 196, 120, 160, 10, 160, 80, 26, 151, 70, 162, 166, 66, 72, 22, 151, 165, 158, 165, 37, 80, 87, 72, 10, 151, 70, 30, 65, 129, 124, 116, 129, 18, 136, 33, 64, 11, 45, 45, 77, 96, 98, 153, 96, 49, 11, 61, 75, 11, 35, 92, 250, 48, 76, 86, 40, 73, 133, 152, 4, 18, 179, 128, 10, 22, 151, 128, 197, 92, 67, 184, 2, 185, 92, 129, 1, 5, 0, 130, 0, 65, 250 ]

    let flt = new FlateStream(new Uint8Array(source), undefined, true)

    expect(Array.from(flt.encode())).toEqual(target)
})

