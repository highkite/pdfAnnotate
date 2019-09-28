import { Util } from '../util';
import { crossReferenceStreamObject_string, simpleListObject_1 } from './Data2'

test('readNextWord', () => {
    let res = Util.readNextWord(crossReferenceStreamObject_string, 0)
    expect(Util.convertAsciiToString(res[0]!)).toBe("625")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("obj")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("<<")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/Length")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("1644")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/ID")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("[<9BFD8283F629F168063225BF31A92429>")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("<6A28637CD303B944B7A012622D2884DD>]")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/Info")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("7")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("R")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/Root")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("1")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("R")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/Type")

    res = Util.readNextWord(crossReferenceStreamObject_string, res[1])
    expect(Util.convertAsciiToString(res[0]!)).toBe("/XRef")
})

test('locateSequence', () => {
    let sequence = [40]
    let data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(-1)

    sequence = [101, 40]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(-1)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(0)

    sequence = [47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(0)

    sequence = [80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(6)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 4)).toBe(-1)

    sequence = [80, 97, 103, 101, 115, 120]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 4)).toBe(-1)
})

test('locateSequence with closed flag', () => {
    let sequence = [112]
    let data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 0, true)).toBe(-1)

    sequence = [84, 121, 112, 101]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 0, true)).toBe(1)
})

test('locateDelimiter', () => {
    let data = new Uint8Array([84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateDelimiter(data, 0)).toBe(3)

    expect(Util.locateDelimiter(data, 6)).toBe(9)

    data = new Uint8Array([84])
    expect(Util.locateDelimiter(data, 0)).toBe(0)
})

test('locateDelimiterReversed', () => {
    let data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateDelimiterReversed(data, 1)).toBe(0)

    expect(Util.locateDelimiterReversed(data, 10)).toBe(4)
})

test('locateSequenceReversed', () => {
    let sequence = [40]
    let data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data)).toBe(-1)

    sequence = [101, 40]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(-1)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(0)

    sequence = [47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(0)

    sequence = [80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data)).toBe(6)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 4)).toBe(-1)

    sequence = [80, 97, 103, 101, 115, 120]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequence(sequence, data, 4)).toBe(-1)
})

test('locateSequenceReversed with closed flag', () => {
    let sequence = [112]
    let data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data, data.length - 1, true)).toBe(-1)

    sequence = [80, 97, 103]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data, data.length - 1, true)).toBe(6)

    sequence = [47, 84, 121, 112]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data, data.length - 1, true)).toBe(0)
})

test('convertStringToAscii', () => {
    let _str = "Type"
    let data = [84, 121, 112, 101]
    expect(Util.convertStringToAscii(_str)).toEqual(data)

    _str = "()<>[]{}/%"
    data = [40, 41, 60, 62, 91, 93, 123, 125, 47, 37]
    expect(Util.convertStringToAscii(_str)).toEqual(data)

    _str = " \t\n\r\f"
    data = [32, 9, 10, 13, 12]
    expect(Util.convertStringToAscii(_str)).toEqual(data)
})

test('extractNumber', () => {
    let data = new Uint8Array([49])
    expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

    data = new Uint8Array([50, 51])
    expect(Util.extractNumber(data, 0, data.length - 1)).toBe(23)

    data = new Uint8Array([53, 51, 49, 55])
    expect(Util.extractNumber(data, 0, data.length - 1)).toBe(5317)

    // check with preceding delimiters
    data = new Uint8Array([32, 49])
    expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0)).toBe(1)

    data = new Uint8Array([32, 13, 10, 49, 32])
    expect(Util.extractNumber(data, 0)).toBe(1)

    // test float values
    data = new Uint8Array([50, 46, 53])
    expect(Util.extractNumber(data, 0)).toBe(2.5)

    data = new Uint8Array([50, 48, 46, 53, 56, 54, 54])
    expect(Util.extractNumber(data, 0)).toBe(20.5866)

    data = new Uint8Array([32, 13, 10])
    expect(() => Util.extractNumber(data, 0)).toThrow(Error)
})

test('extractString', () => {
    let data = new Uint8Array([40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0)).toEqual('abc')

    data = new Uint8Array([32, 10, 13, 40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0)).toEqual('abc')
})

test('extractArray', () => {
    let data = new Uint8Array([91, 49, 32, 50, 32, 51, 32, 93]) // number array
    expect(Util.extractArray(data, 0).result).toEqual([1, 2, 3])
    expect(Util.extractArray(data, 0).end_index).toEqual(7)

    data = new Uint8Array([91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93]) // reference pointer array
    expect(Util.extractArray(data, 0).end_index).toEqual(14)
    expect(Util.extractArray(data, 0).result[0].obj).toEqual(6)
    expect(Util.extractArray(data, 0).result[0].generation).toEqual(0)

    expect(Util.extractArray(data, 0).result[1].obj).toEqual(8)
    expect(Util.extractArray(data, 0).result[1].generation).toEqual(0)
})

test('extractArrayNested', () => {
    let data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 93])
    expect(Util.extractArray(data, 0)).toEqual([[1, 2, 3], [1, 2, 3]])

    data = new Uint8Array([91, 91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93, 32, 93]) // reference pointer array
    expect(Util.extractArray(data, 0).result[0][0].obj).toEqual(6)
    expect(Util.extractArray(data, 0).result[0][0].generation).toEqual(0)
    expect(Util.extractArray(data, 0).result[0][1].obj).toEqual(8)
    expect(Util.extractArray(data, 0).result[0][1].generation).toEqual(0)
})

test('extractOptionValue', () => {
    let data = new Uint8Array([47, 72, 105, 103, 104, 108, 105, 103, 104, 116])
    expect(Util.extractOptionValue(data, 0)).toEqual('Highlight')
})

test('extractNumbersArray', () => {
    let data = new Uint8Array([91, 49, 32, 50, 32, 51, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([1, 2, 3])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(7)

    data = new Uint8Array([91, 55, 55, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 51, 46, 55, 57, 51, 49, 57, 48, 52, 49, 54, 49, 32, 56, 51, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 57, 46, 55, 56, 53, 54, 50, 52, 50, 49, 49, 57, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])

    data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32])
    expect(Util.extractNumbersArray(data, 0).result[0]).toEqual([1, 2, 3])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(11)

    data = new Uint8Array([91, 91, 53, 51, 54, 46, 50, 53, 49, 53, 51, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result[0]).toEqual([536.251536, 387.975456])

    data = new Uint8Array([91, 91, 53, 51, 54, 46, 50, 53, 49, 53, 51, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93, 10])
    expect(Util.extractNumbersArray(data, 0).result[0]).toEqual([536.251536, 387.975456])

    data = new Uint8Array([32, 91, 91, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93, 32])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([[[387.975456]]])
})

test('extractNumbersArrayNested', () => {
    let data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([[1, 2, 3]])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(10)

    data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([[1, 2, 3], [1, 2, 3]])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(18)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([[[1, 2, 3]]])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(13)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result).toEqual([[[1, 2, 3], [1, 2, 3]]])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(22)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 32, 91, 32, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93, 32, 93])
    expect(Util.extractNumbersArray(data, 0).result[0][0]).toEqual([1, 2, 3])
    expect(Util.extractNumbersArray(data, 0).result[0][1]).toEqual([[1, 2, 3]])
    expect(Util.extractNumbersArray(data, 0).end_index).toEqual(data.length - 1)
})

test('extractObjectId', () => {
    let data = new Uint8Array([55, 32, 48, 32, 111, 98, 106])
    expect(Util.extractObjectId(data, 0).obj).toEqual(7)
    expect(Util.extractObjectId(data, 0).generation).toEqual(0)
})

test('extractReference', () => {
    let data = new Uint8Array([50, 32, 51, 32, 82])
    expect(Util.extractReference(data, 0)).toEqual(new Uint8Array([50, 32, 51]))

    data = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractReference(data, 0)).toEqual(new Uint8Array([50, 32, 51]))

    expect(Util.extractReference(data, 6)).toEqual(new Uint8Array([52, 48, 32, 53]))

    data = new Uint8Array([32, 50, 32, 51, 32, 82])
    expect(Util.extractReference(data, 0)).toEqual(new Uint8Array([50, 32, 51]))

    data = new Uint8Array([32, 13, 50, 32, 51, 32, 82])
    expect(Util.extractReference(data, 0)).toEqual(new Uint8Array([50, 32, 51]))
})

test('extractReferenceTyped', () => {
    let data = new Uint8Array([50, 32, 51, 32, 82])
    expect(Util.extractReferenceTyped(data, 0).result.obj).toEqual(2)
    expect(Util.extractReferenceTyped(data, 0).result.generation).toEqual(3)

    data = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractReferenceTyped(data, 0).result.obj).toEqual(2)
    expect(Util.extractReferenceTyped(data, 0).result.generation).toEqual(3)

    expect(Util.extractReferenceTyped(data, 6).result.obj).toEqual(40)
    expect(Util.extractReferenceTyped(data, 6).result.generation).toEqual(5)
})

test('extractArraySequence', () => {
    let data = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    let solution = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractArraySequence(data, 0).result).toEqual(solution)
    expect(Util.extractArraySequence(data, 0).end_index).toEqual(13)
    expect(Util.extractArraySequence(data, 5).result).toEqual(solution)
    expect(Util.extractArraySequence(data, 5).end_index).toEqual(13)
    expect(Util.extractArraySequence(data, 13).result).toEqual(solution)
    expect(Util.extractArraySequence(data, 13).end_index).toEqual(13)

    data = new Uint8Array([32, 91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    solution = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractArraySequence(data, 1).result).toEqual(solution)
    expect(Util.extractArraySequence(data, 1).end_index).toEqual(14)

    expect(Util.extractArraySequence(simpleListObject_1, 0).result).toEqual(new Uint8Array([48, 32, 48, 32, 54, 49, 50, 32, 55, 57, 50]))
})

test('extractArraySequenceNested', () => {
    let data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93])
    let solution = new Uint8Array([49, 32, 50, 32, 51, 32])
    expect(Util.extractArraySequence(data, 0).result).toEqual([solution])
    expect(Util.extractArraySequence(data, 0).end_index).toEqual(10)

    data = new Uint8Array([91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 93])
    expect(Util.extractArraySequence(data, 0).result).toEqual([solution, solution])
    expect(Util.extractArraySequence(data, 0).end_index).toEqual(18)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93])
    expect(Util.extractArraySequence(data, 0).result).toEqual([[solution]])
    expect(Util.extractArraySequence(data, 0).end_index).toEqual(13)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93])
    expect(Util.extractArraySequence(data, 0).result).toEqual([[solution, solution]])
    expect(Util.extractArraySequence(data, 0).end_index).toEqual(22)

    data = new Uint8Array([91, 91, 91, 49, 32, 50, 32, 51, 32, 93, 32, 91, 32, 91, 32, 49, 32, 50, 32, 51, 32, 93, 32, 93, 32, 93, 32, 93])
    expect((<any>Util.extractArraySequence(data, 0).result)[0][0]).toEqual(solution)
    expect((<any>Util.extractArraySequence(data, 0).end_index)).toEqual(27)
    expect((<any>Util.extractArraySequence(data, 0).result)[0][1]).toEqual([new Uint8Array([32, 49, 32, 50, 32, 51, 32])])
})

test('skipDelimiter', () => {
    let data = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    expect(Util.skipDelimiter(data, 0)).toEqual(0)

    data = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    expect(Util.skipDelimiter(data, 2)).toEqual(3)

    data = new Uint8Array([91, 50, 32, 13, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    expect(Util.skipDelimiter(data, 2)).toEqual(5)

    data = new Uint8Array([91, 50, 32, 13, 32])
    expect(Util.skipDelimiter(data, 4)).toEqual(5)
})

test('convertUnicode', () => {
    let data = new Uint8Array([254, 255, 0, 80, 0, 111, 0, 112, 0, 32, 0, 117, 0, 112, 0, 32, 0, 110, 0, 111, 0, 116, 0, 101])
    expect(Util.convertUnicodeToString(data)).toEqual('Pop up note')
})

test('areArraysEqual', () => {
    let data = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    expect(Util.areArraysEqual(data, data)).toBeTruthy()
    let data2 = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 40])
    expect(Util.areArraysEqual(data, data2)).toBeFalsy()
    data2 = new Uint8Array([91, 50, 32])
    expect(Util.areArraysEqual(data, data2)).toBeFalsy()
})
