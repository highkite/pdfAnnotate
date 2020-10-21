import { Util } from '../util';
import { crossReferenceStreamObject_string, simpleListObject_1, encode } from './Data2'

test('readNextWord', () => {
    let res = Util.readNextWord(crossReferenceStreamObject_string, 0)
    expect(Util.convertAsciiToString(res.result)).toBe("625")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("obj")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("<")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("<")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Length")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("1644")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/ID")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("[")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("<9BFD8283F629F168063225BF31A92429")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe(">")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("<6A28637CD303B944B7A012622D2884DD")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe(">")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("]")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Info")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("7")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("R")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Root")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("1")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("0")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("R")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Type")

    res = Util.readNextWord(crossReferenceStreamObject_string, res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/XRef")
})

test('readNextWord_2', () => {
    let res = Util.readNextWord(encode('hello'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode(' hello'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(5)

    res = Util.readNextWord(encode('b hello'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("b")
    expect(res.end_index).toBe(0)
})

test('readNextWordWithComment', () => {
    let res = Util.readNextWord(encode('hello%comment stuff'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode('hello% comment stuff'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode(`%some comment
hello`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(18)

    res = Util.readNextWord(encode(` %some comment
hello`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(19)

    res = Util.readNextWord(encode(`
%some comment
hello`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")

    res = Util.readNextWord(encode(`hello %other comment`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode('b hello%coment'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("b")
    expect(res.end_index).toBe(0)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("/Type")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Page")
    expect(res.end_index).toBe(10)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), res.end_index + 1)
    expect(Util.convertAsciiToString(res.result)).toBe("/Contents")
    expect(res.end_index).toBe(52)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), res.end_index + 1)
    expect(res.result).toBeUndefined()
    expect(res.end_index).toBe(52)
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
    expect(Util.locateSequenceReversed(sequence, data)).toBe(-1)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data)).toBe(0)

    sequence = [47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data)).toBe(0)

    sequence = [80, 97, 103, 101, 115]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data)).toBe(6)

    sequence = [47, 84]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data, 4)).toBe(0)

    sequence = [80, 97, 103, 101, 115, 120]
    data = new Uint8Array([47, 84, 121, 112, 101, 32, 80, 97, 103, 101, 115])
    expect(Util.locateSequenceReversed(sequence, data, 4)).toBe(-1)
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
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(0)

    data = new Uint8Array([50, 51])
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(23)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(1)

    data = new Uint8Array([53, 51, 49, 55])
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(5317)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(3)

    // check with preceding delimiters
    data = new Uint8Array([32, 49])
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(1)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(3)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0).result).toBe(1)
    expect(Util.extractNumber(data, 0).end_index).toBe(3)

    data = new Uint8Array([32, 13, 10, 49, 32])
    expect(Util.extractNumber(data, 0).result).toBe(1)
    expect(Util.extractNumber(data, 0).end_index).toBe(3)

    // test float values
    data = new Uint8Array([50, 46, 53])
    expect(Util.extractNumber(data, 0).result).toBe(2.5)
    expect(Util.extractNumber(data, 0).end_index).toBe(2)

    data = new Uint8Array([50, 48, 46, 53, 56, 54, 54])
    expect(Util.extractNumber(data, 0).result).toBe(20.5866)
    expect(Util.extractNumber(data, 0).end_index).toBe(6)

    data = new Uint8Array([32, 13, 10])
    expect(() => Util.extractNumber(data, 0).result).toThrow(Error)
})

test('extractString', () => {
    let data = new Uint8Array([40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0).result).toEqual('abc')
    expect(Util.extractString(data, 0).end_index).toEqual(4)

    data = new Uint8Array([32, 10, 13, 40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0).result).toEqual('abc')
    expect(Util.extractString(data, 0).end_index).toEqual(7)

    data = new Uint8Array([32, 10, 13, 40, 97, 98, 99, 41, 32])
    expect(Util.extractString(data, 0).result).toEqual('abc')
    expect(Util.extractString(data, 0).end_index).toEqual(7)
})

test('extractHexString', () => {
    let data = encode(`<abc>`)
    expect(Util.extractHexString(data, 0).result).toEqual('abc')
    expect(Util.extractHexString(data, 0).end_index).toEqual(4)

    data = encode(` <abc> `)
    expect(Util.extractHexString(data, 0).result).toEqual('abc')
    expect(Util.extractHexString(data, 0).end_index).toEqual(5)
})

test('extractOptionValue', () => {
    let data = new Uint8Array([47, 72, 105, 103, 104, 108, 105, 103, 104, 116])
    expect(Util.extractOptionValue(data, 0).result).toEqual('Highlight')
    expect(Util.extractOptionValue(data, 0).end_index).toEqual(9)
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
    expect(Util.extractReferenceTyped(data, 0).end_index).toEqual(4)

    data = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractReferenceTyped(data, 0).result.obj).toEqual(2)
    expect(Util.extractReferenceTyped(data, 0).result.generation).toEqual(3)
    expect(Util.extractReferenceTyped(data, 0).end_index).toEqual(4)

    expect(Util.extractReferenceTyped(data, 6).result.obj).toEqual(40)
    expect(Util.extractReferenceTyped(data, 6).result.generation).toEqual(5)
    expect(Util.extractReferenceTyped(data, 6).end_index).toEqual(11)
})

test('skipDelimiter', () => {
    let data = new Uint8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
    expect(Util.skipDelimiter(data, 0)).toEqual(1)

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

test('convertHexStringToByteArray', () => {
    let val : string = "ab"
    expect(Util.convertHexStringToByteArray(val)).toEqual([171])
    val = "a"
    expect(Util.convertHexStringToByteArray(val)).toEqual([10])
    val = "AB"
    expect(Util.convertHexStringToByteArray(val)).toEqual([171])
    val = "Z"
    expect(Util.convertHexStringToByteArray(val)).toEqual([NaN])
})

test('convertByteArrayToHexString', () => {
    let val : number[] = [171]
    expect(Util.convertByteArrayToHexString(val)).toEqual("AB")
    val = [10]
    expect(Util.convertByteArrayToHexString(val)).toEqual("A")
})
