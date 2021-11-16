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
    expect(res.start_index).toBe(0)
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode(' hello'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.start_index).toBe(1)
    expect(res.end_index).toBe(5)

    res = Util.readNextWord(encode('b hello'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("b")
    expect(res.start_index).toBe(0)
    expect(res.end_index).toBe(0)
})

test('readNextWordWithComment', () => {
    let res = Util.readNextWord(encode('hello%comment stuff'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.start_index).toBe(0)
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode('hello% comment stuff'), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.start_index).toBe(0)
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode(`%some comment
hello`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.start_index).toBe(14)
    expect(res.end_index).toBe(18)

    res = Util.readNextWord(encode(` %some comment
hello`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.start_index).toBe(15)
    expect(res.end_index).toBe(19)

    res = Util.readNextWord(encode(`
%some comment
hello`), 0)
    expect(res.start_index).toBe(15)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")

    res = Util.readNextWord(encode(`hello %other comment`), 0)
    expect(res.start_index).toBe(0)
    expect(Util.convertAsciiToString(res.result)).toBe("hello")
    expect(res.end_index).toBe(4)

    res = Util.readNextWord(encode('b hello%coment'), 0)
    expect(res.start_index).toBe(0)
    expect(Util.convertAsciiToString(res.result)).toBe("b")
    expect(res.end_index).toBe(0)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), 0)
    expect(res.start_index).toBe(0)
    expect(Util.convertAsciiToString(res.result)).toBe("/Type")
    expect(res.end_index).toBe(4)

    let old_res_index = res.end_index
    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), old_res_index + 1)
    expect(res.start_index).toBe(6)
    expect(Util.convertAsciiToString(res.result)).toBe("/Page")
    expect(res.end_index).toBe(10)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), res.end_index + 1)
    expect(res.start_index).toBe(44)
    expect(Util.convertAsciiToString(res.result)).toBe("/Contents")
    expect(res.end_index).toBe(52)

    res = Util.readNextWord(encode(`/Type /Page% comment directly after a value
/Contents`), res.end_index + 1)
    expect(res.start_index).toBe(53)
    expect(res.result).toBeUndefined()
    expect(res.end_index).toBe(52)

    res = Util.readNextWord(encode(`% comment directly after a value
    %
/Contents`), 0)
    expect(Util.convertAsciiToString(res.result)).toBe("/Contents")
    expect(res.start_index).toBe(39)
    expect(res.end_index).toBe(47)
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
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(0)
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(0)

    data = new Uint8Array([50, 51])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(0)
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(23)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(1)

    data = new Uint8Array([53, 51, 49, 55])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(0)
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(5317)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(3)

    // check with preceding delimiters
    data = new Uint8Array([32, 49])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(1)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(3)
    expect(Util.extractNumber(data, 0, data.length - 1).result).toBe(1)
    expect(Util.extractNumber(data, 0, data.length - 1).end_index).toBe(3)

    data = new Uint8Array([32, 13, 10, 49])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(3)
    expect(Util.extractNumber(data, 0).result).toBe(1)
    expect(Util.extractNumber(data, 0).end_index).toBe(3)

    data = new Uint8Array([32, 13, 10, 49, 32])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(3)
    expect(Util.extractNumber(data, 0).result).toBe(1)
    expect(Util.extractNumber(data, 0).end_index).toBe(3)

    // test float values
    data = new Uint8Array([50, 46, 53])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(0)
    expect(Util.extractNumber(data, 0).result).toBe(2.5)
    expect(Util.extractNumber(data, 0).end_index).toBe(2)

    data = new Uint8Array([50, 48, 46, 53, 56, 54, 54])
    expect(Util.extractNumber(data, 0, data.length - 1).start_index).toBe(0)
    expect(Util.extractNumber(data, 0).result).toBe(20.5866)
    expect(Util.extractNumber(data, 0).end_index).toBe(6)

    data = new Uint8Array([32, 13, 10])
    expect(() => Util.extractNumber(data, 0).result).toThrow(Error)
})

test('extractString', () => {
    let data = new Uint8Array([40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0).start_index).toBe(0)
    expect(Util.extractString(data, 0).result).toEqual(new Uint8Array([97, 98, 99]))
    expect(Util.extractString(data, 0).end_index).toEqual(4)

    data = new Uint8Array([32, 10, 13, 40, 97, 98, 99, 41])
    expect(Util.extractString(data, 0).start_index).toBe(3)
    expect(Util.extractString(data, 0).result).toEqual(new Uint8Array([97, 98, 99]))
    expect(Util.extractString(data, 0).end_index).toEqual(7)

    data = new Uint8Array([32, 10, 13, 40, 97, 98, 99, 41, 32])
    expect(Util.extractString(data, 0).start_index).toBe(3)
    expect(Util.extractString(data, 0).result).toEqual(new Uint8Array([97, 98, 99]))
    expect(Util.extractString(data, 0).end_index).toEqual(7)

    data = new Uint8Array(Util.convertHexStringToByteArray("286db3276485b36a7440877d6fa911d11a0000000000000000000000000000000029"))
    expect(Util.extractString(data, 0).start_index).toBe(0)
    expect(Util.extractString(data, 0).result).toEqual(new Uint8Array([109, 179, 39, 100, 133, 179, 106, 116, 64, 135, 125, 111, 169, 17, 209, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
    expect(Util.extractString(data, 0).end_index).toEqual(33)
})

test('extractString_escaped', () => {
    let data = new Uint8Array([40, 97, 98, 99, 92, 41, 88, 99, 41])
    expect(Util.extractString(data, 0).start_index).toBe(0)
    expect(Util.extractString(data, 0).result).toEqual(new Uint8Array([97, 98, 99, 41, 88, 99]))
    expect(Util.extractString(data, 0).end_index).toEqual(8)
})

test('extractHexString', () => {
    let data = encode(`<ab>`)
    expect(Util.extractHexString(data, 0).start_index).toBe(0)
    expect(Util.extractHexString(data, 0).result).toEqual(new Uint8Array([171]))
    expect(Util.extractHexString(data, 0).end_index).toEqual(3)

    data = encode(`<abc>`)
    expect(Util.extractHexString(data, 0).start_index).toBe(0)
    expect(Util.extractHexString(data, 0).result).toEqual(new Uint8Array([171, 12]))
    expect(Util.extractHexString(data, 0).end_index).toEqual(4)

    data = encode(` <abc> `)
    expect(Util.extractHexString(data, 0).start_index).toBe(1)
    expect(Util.extractHexString(data, 0).result).toEqual(new Uint8Array([171, 12]))
    expect(Util.extractHexString(data, 0).end_index).toEqual(5)
})

test('extractOptionValue', () => {
    let data = new Uint8Array([47, 72, 105, 103, 104, 108, 105, 103, 104, 116])
    expect(Util.extractOptionValue(data, 0).start_index).toBe(0)
    expect(Util.extractOptionValue(data, 0).result).toEqual('Highlight')
    expect(Util.extractOptionValue(data, 0).end_index).toEqual(9)

    data = encode(`/Highlight % bla bla`)
    expect(Util.extractOptionValue(data, 0).start_index).toBe(0)
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
    expect(Util.extractReferenceTyped(data, 0).start_index).toBe(0)
    expect(Util.extractReferenceTyped(data, 0).result.obj).toEqual(2)
    expect(Util.extractReferenceTyped(data, 0).result.generation).toEqual(3)
    expect(Util.extractReferenceTyped(data, 0).end_index).toEqual(4)

    data = new Uint8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
    expect(Util.extractReferenceTyped(data, 0).start_index).toBe(0)
    expect(Util.extractReferenceTyped(data, 0).result.obj).toEqual(2)
    expect(Util.extractReferenceTyped(data, 0).result.generation).toEqual(3)
    expect(Util.extractReferenceTyped(data, 0).end_index).toEqual(4)

    expect(Util.extractReferenceTyped(data, 6).start_index).toBe(6)
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
    val = "0a0b0c"
    expect(Util.convertHexStringToByteArray(val)).toEqual([10, 11, 12])
    val = "0a0b000c"
    expect(Util.convertHexStringToByteArray(val)).toEqual([10, 11, 0, 12])
    val = "0a0b00000c"
    expect(Util.convertHexStringToByteArray(val)).toEqual([10, 11, 0, 0, 12])
    let val_as_byte_array : number[] = [97, 98]
    expect(Util.convertHexStringToByteArray(val_as_byte_array)).toEqual([171])
    val_as_byte_array = [53, 57, 53, 50, 51, 99, 98, 48, 101, 55, 48, 101, 48, 51, 99, 100, 52, 55, 57, 51, 55, 56, 54, 57, 100, 53, 52, 57, 48, 98, 102, 56]
    expect(Util.convertHexStringToByteArray(val_as_byte_array)).toEqual([89, 82, 60, 176, 231, 14, 3, 205, 71, 147, 120, 105, 213, 73, 11, 248])
})

test('convertByteArrayToHexString', () => {
    let val : number[] = [171]
    expect(Util.convertByteArrayToHexString(val)).toEqual("AB")
    val = [10]
    expect(Util.convertByteArrayToHexString(val)).toEqual("A")
})

test('convertUint8ArrayToInt32Array', () => {
    let val : number[] = [0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([0]))

    val = [20]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([335544320]))

    val = [30]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([503316480]))

    val = [256]
    expect(() => {Util.convertUint8ArrayToInt32Array(val)}).toThrow(Error)

    val = [0, 0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([0]))

    val = [10, 0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([167772160]))

    val = [10, 0, 0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([167772160]))

    val = [10, 0, 0, 0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([167772160]))

    val = [20, 10, 0, 0, 0]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([336199680, 0]))

    val = [10, 0, 0, 0, 10]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([167772160, 167772160]))

    val = [0, 0, 0, 10]
    expect(Util.convertUint8ArrayToInt32Array(val)).toEqual(new Int32Array([10]))
})

test('convertInt32ArrayToUint8Array', () => {
    let val : number[] = [0]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([0, 0, 0, 0]))

    val = [10]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([0, 0, 0, 10]))

    val = [2560]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([0, 0, 10, 0]))

    val = [655360]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([0, 10, 0, 0]))

    val = [167772160]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([10, 0, 0, 0]))

    val = [336199680, 0]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([20, 10, 0, 0, 0, 0, 0, 0]))

    val = [336199680, 10]
    expect(Util.convertInt32ArrayToUint8Array(val)).toEqual(new Uint8Array([20, 10, 0, 0, 0, 0, 0, 10]))
})

test('escapeString', () => {
    let val : number[] = [97, 98, 99, 100] //abcd
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 98, 99, 100]))

    val = [97, 98, 99, 92, 100] // abc\d
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 98, 99, 92, 92, 100])) //abc\\d

    val = [97, 40, 98, 99, 92, 100] //a(bc\d
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 99, 92, 92, 100])) //a\(bc\\d

    val = [97, 40, 41, 98, 99, 92, 100] //a()bc\d
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 92, 41, 98, 99, 92, 92, 100]))//b\(\)bc\\d

    val = [97, 40, 98, 9, 99, 92, 100] //a(b\tc\d -- escape TAB
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 92, 116, 99, 92, 92, 100])) //a\(b\tc\\d

    val = [97, 40, 98, 9, 10, 99, 92, 100] //a(b\t\nc\d -- escape TAB & LINE FEED
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 92, 116, 92, 110, 99, 92, 92, 100])) //a\(b\t\nc\\d

    val = [97, 40, 98, 9, 10, 13, 99, 92, 100] //a(b\t\n\rc\d -- escape TAB & LINE FEED & CARRIAGE RETURN
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 99, 92, 92, 100])) //a\(b\t\n\rc\\d

    val = [97, 40, 98, 9, 10, 13, 8, 99, 92, 100] //a(\t\n\r\bbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 92, 98, 99, 92, 92, 100])) //a\(\t\n\r\bbc\\d

    val = [97, 40, 98, 9, 10, 13, 8, 12, 99, 92, 100] //a(\t\n\r\b\fbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE & FORM FEED
    expect(Util.escapeString(val)).toEqual(new Uint8Array([97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 92, 98, 92, 102, 99, 92, 92, 100])) //a\(\t\n\r\bbc\\d
})

test('unescapeString', () => {
    let val : number[] = [97, 98, 99, 100]
    expect(Util.unescapeString(val)).toEqual(new Uint8Array([97, 98, 99, 100]))

    val = [97, 98, 99, 92, 92, 100]
    expect(Util.unescapeString(val)).toEqual(new Uint8Array([97, 98, 99, 92, 100]))

    val = [97, 98, 99, 92, 92, 92, 100]
    expect(Util.unescapeString(val)).toEqual(new Uint8Array([97, 98, 99, 92, 100]))

    val = [97, 92, 40, 98, 99, 92, 92, 100]
    expect(Util.unescapeString(val)).toEqual(new Uint8Array([97, 40, 98, 99, 92, 100]))

    val = [97, 92, 40, 92, 41, 98, 99, 92, 92, 100]
    expect(Util.unescapeString(val)).toEqual(new Uint8Array([97, 40, 41, 98, 99, 92, 100]))

    let res = [97, 40, 98, 9, 99, 92, 100] //a(b\tc\d -- escape TAB
    val = [97, 92, 40, 98, 92, 116, 99, 92, 92, 100] //a(b\tc\d -- escape TAB
    expect(Util.unescapeString(val)).toEqual(new Uint8Array(res)) //a\(b\tc\\d

    res = [97, 40, 98, 9, 10, 99, 92, 100] //a(b\t\nc\d -- escape TAB & LINE FEED
    val = [97, 92, 40, 98, 92, 116, 92, 110, 99, 92, 92, 100] //a(b\t\nc\d -- escape TAB & LINE FEED
    expect(Util.unescapeString(val)).toEqual(new Uint8Array(res)) //a\(b\t\nc\\d

    res = [97, 40, 98, 9, 10, 13, 99, 92, 100] //a(b\t\n\rc\d -- escape TAB & LINE FEED & CARRIAGE RETURN
    val = [97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 99, 92, 92, 100] //a(b\t\n\rc\d -- escape TAB & LINE FEED & CARRIAGE RETURN
    expect(Util.unescapeString(val)).toEqual(new Uint8Array(res)) //a\(b\t\n\rc\\d

    res = [97, 40, 98, 9, 10, 13, 8, 99, 92, 100] //a(\t\n\r\bbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE
    val = [97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 92, 98, 99, 92, 92, 100] //a(\t\n\r\bbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE
    expect(Util.unescapeString(val)).toEqual(new Uint8Array(res)) //a\(\t\n\r\bbc\\d

    res = [97, 40, 98, 9, 10, 13, 12, 8, 99, 92, 100] //a(\t\n\r\bbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE
    val = [97, 92, 40, 98, 92, 116, 92, 110, 92, 114, 92, 102, 92, 98, 99, 92, 92, 100] //a(\t\n\r\bbc\d -- escape TAB & LINE FEED & CARRIAGE RETURN & BACKSPACE
    expect(Util.unescapeString(val)).toEqual(new Uint8Array(res)) //a\(\t\n\r\bbc\\d
})

test('skipSpaces', () => {
    let val : number[] = [10, 13, 9, 32, 97]
    expect(Util.skipSpaces(val, 0)).toBe(4)
})

test('colorToRange255', () => {
    let c = Util.colorToRange255({r: 0.235, g: 0.250, b: 0.905})
    expect(c.r).toBe(60)
    expect(c.g).toBe(64)
    expect(c.b).toBe(231)

    c = Util.colorToRange255({r: 0.380, g: 0.905, b: 0.235})
    expect(c.r).toBe(97)
    expect(c.g).toBe(231)
    expect(c.b).toBe(60)

    c = Util.colorToRange255({r: 0, g: 0, b: 0})
    expect(c.r).toBe(0)
    expect(c.g).toBe(0)
    expect(c.b).toBe(0)

    c = Util.colorToRange255({r: 1, g: 1, b: 1})
    expect(c.r).toBe(255)
    expect(c.g).toBe(255)
    expect(c.b).toBe(255)

    c = Util.colorToRange255({r: 97, g:231, b: 60})
    expect(c.r).toBe(97)
    expect(c.g).toBe(231)
    expect(c.b).toBe(60)
})

test('colorToRange01', () => {
    let c = Util.colorToRange01({r: 60, g:64, b: 231})
    expect(c.r).toBe(0.235)
    expect(c.g).toBe(0.251)
    expect(c.b).toBe(0.906)

    c = Util.colorToRange01({r: 97, g:231, b: 60})
    expect(c.r).toBe(0.380)
    expect(c.g).toBe(0.906)
    expect(c.b).toBe(0.235)

    c = Util.colorToRange01({r: 0, g: 0, b: 0})
    expect(c.r).toBe(0)
    expect(c.g).toBe(0)
    expect(c.b).toBe(0)

    c = Util.colorToRange01({r: 255, g:255, b: 255})
    expect(c.r).toBe(1)
    expect(c.g).toBe(1)
    expect(c.b).toBe(1)

    c = Util.colorToRange01({r: 0.380, g: 0.905, b: 0.235})
    expect(c.r).toBe(0.380)
    expect(c.g).toBe(0.905)
    expect(c.b).toBe(0.235)
})

test('colorToHex', () => {
    expect(Util.colorToHex({r: 205, g: 92, b: 92})).toBe("#CD5C5C")
    expect(Util.colorToHex({r: 240, g: 128, b: 128})).toBe("#F08080")
    expect(Util.colorToHex({r: 250, g: 128, b: 114})).toBe("#FA8072")
    expect(Util.colorToHex({r: 233, g: 150, b: 122})).toBe("#E9967A")
    expect(Util.colorToHex({r: 255, g: 160, b: 122})).toBe("#FFA07A")

    expect(Util.colorToHex({r: 0.380, g: 0.905, b: 0.235})).toBe("#61E73C")
})

test('convertStringToHexString', () => {
    expect(Util.convertAsciiToString(Util.convertStringToHexString("A B"))).toBe("<412042>")
    expect(Util.convertAsciiToString(Util.convertStringToHexString("Test123"))).toBe("<54657374313233>")
})
