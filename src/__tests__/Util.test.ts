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

test('extractField', () => {
    //8 0 obj <</Type /Annot /Rect [77.7777777778 83.7931904161 83.7777777778 89.7856242119 ] /Subtype /Text /M (D:20190101154225) /T (ï¿½ï¿½highway) /Contents (ï¿½ï¿½Pop up note) /NM (okular-{551f1c1c-224d-4982-b5ce-3494483bf8d3}) /F 4 /C [1 1 0 ] /CA 1 /Border [0 0 1 ] /P 3 0 R >> endobj
    let data = new Uint8Array([56, 32, 48, 32, 111, 98, 106, 32, 60, 60, 47, 84, 121, 112, 101, 32, 47, 65, 110, 110, 111, 116, 32, 47, 82, 101, 99, 116, 32, 91, 55, 55, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 51, 46, 55, 57, 51, 49, 57, 48, 52, 49, 54, 49, 32, 56, 51, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 57, 46, 55, 56, 53, 54, 50, 52, 50, 49, 49, 57, 32, 93, 32, 47, 83, 117, 98, 116, 121, 112, 101, 32, 47, 84, 101, 120, 116, 32, 47, 77, 32, 40, 68, 58, 50, 48, 49, 57, 48, 49, 48, 49, 49, 53, 52, 50, 50, 53, 41, 32, 47, 84, 32, 40, 239, 191, 189, 239, 191, 189, 104, 105, 103, 104, 119, 97, 121, 41, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 40, 239, 191, 189, 239, 191, 189, 80, 111, 112, 32, 117, 112, 32, 110, 111, 116, 101, 41, 32, 47, 78, 77, 32, 40, 111, 107, 117, 108, 97, 114, 45, 123, 53, 53, 49, 102, 49, 99, 49, 99, 45, 50, 50, 52, 100, 45, 52, 57, 56, 50, 45, 98, 53, 99, 101, 45, 51, 52, 57, 52, 52, 56, 51, 98, 102, 56, 100, 51, 125, 41, 32, 47, 70, 32, 52, 32, 47, 67, 32, 91, 49, 32, 49, 32, 48, 32, 93, 32, 47, 67, 65, 32, 49, 32, 47, 66, 111, 114, 100, 101, 114, 32, 91, 48, 32, 48, 32, 49, 32, 93, 32, 47, 80, 32, 51, 32, 48, 32, 82, 32, 62, 62, 32, 101, 110, 100, 111, 98, 10])

    expect(Util.extractField(data, Util.RECT)).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])
    expect(Util.extractField(data, Util.M)).toEqual("D:20190101154225")
    expect(Util.extractField(data, Util.T)).toEqual("��highway")
    expect(Util.extractField(data, Util.CONTENTS)).toEqual("��Pop up note")
    expect(Util.extractField(data, Util.NM)).toEqual("okular-{551f1c1c-224d-4982-b5ce-3494483bf8d3}")
    expect(Util.extractField(data, Util.F)).toEqual(4)
    expect(Util.extractField(data, Util.C)).toEqual([1, 1, 0])
    expect(Util.extractField(data, Util.CA)).toEqual(1)
    expect(Util.extractField(data, Util.BORDER)).toEqual([0, 0, 1])
    let p = Util.extractField(data, Util.P)
    expect(p.obj).toEqual(3)
    expect(p.generation).toEqual(0)

    expect(Util.extractField(data, Util.SUBTYPE)).toEqual('Text')
    expect(Util.extractField(data, Util._TYPE)).toEqual('Annot')

    // Test return value when asking for a non-existing field
    expect(Util.extractField(data, Util.QUADPOINTS)).toBeUndefined()

    data = new Uint8Array([49, 48, 57, 32, 48, 32, 111, 98, 106, 32, 60, 60, 47, 84, 121, 112, 101, 32, 47, 65, 110, 110, 111, 116, 32, 47, 82, 101, 99, 116, 32, 91, 53, 49, 56, 46, 54, 49, 54, 55, 53, 54, 32, 51, 56, 54, 46, 55, 55, 50, 52, 48, 56, 32, 53, 51, 55, 46, 48, 53, 51, 50, 53, 54, 32, 51, 56, 57, 46, 53, 56, 48, 56, 52, 32, 93, 32, 47, 83, 117, 98, 116, 121, 112, 101, 32, 47, 73, 110, 107, 32, 47, 73, 110, 107, 76, 105, 115, 116, 32, 91, 91, 53, 49, 57, 46, 48, 49, 55, 54, 49, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 49, 57, 46, 52, 49, 56, 52, 55, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 48, 46, 54, 50, 49, 48, 53, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 49, 46, 52, 50, 50, 49, 54, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 50, 46, 50, 50, 51, 56, 56, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 51, 46, 48, 50, 53, 54, 48, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 51, 46, 56, 50, 55, 51, 50, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 53, 46, 48, 50, 57, 50, 57, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 53, 46, 56, 51, 49, 48, 49, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 54, 46, 54, 51, 50, 55, 51, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 55, 46, 52, 51, 52, 52, 53, 50, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 55, 46, 56, 51, 52, 55, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 56, 46, 54, 51, 54, 52, 50, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 57, 46, 48, 51, 55, 50, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 50, 57, 46, 52, 51, 56, 49, 52, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 50, 57, 46, 56, 51, 57, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 48, 46, 50, 51, 57, 56, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 48, 52, 48, 57, 54, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 52, 52, 49, 56, 50, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 56, 52, 50, 54, 56, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 50, 52, 51, 53, 52, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 54, 52, 52, 52, 48, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 54, 52, 52, 52, 48, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 48, 52, 53, 50, 54, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 52, 52, 54, 49, 50, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 56, 52, 54, 57, 56, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 52, 46, 50, 52, 55, 56, 52, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 52, 46, 54, 52, 56, 48, 57, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 48, 52, 56, 57, 53, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 52, 52, 57, 56, 49, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 56, 53, 48, 54, 55, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 56, 53, 48, 54, 55, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 54, 46, 50, 53, 49, 53, 51, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93, 32, 47, 77, 32, 40, 68, 58, 50, 48, 49, 56, 48, 53, 48, 51, 48, 57, 53, 50, 50, 54, 41, 32, 47, 84, 32, 40, 112, 101, 116, 101, 114, 41, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 40, 112, 97, 114, 107, 101, 114, 41, 32, 47, 78, 77, 32, 40, 111, 107, 117, 108, 97, 114, 45, 123, 98, 99, 99, 51, 53, 48, 98, 98, 45, 50, 48, 49, 54, 45, 52, 102, 102, 57, 45, 57, 102, 54, 97, 45, 102, 53, 57, 97, 99, 98, 97, 51, 55, 55, 52, 50, 125, 41, 32, 47, 70, 32, 52, 32, 47, 67, 32, 91, 48, 32, 49, 32, 48, 32, 93, 32, 47, 67, 65, 32, 49, 32, 47, 66, 111, 114, 100, 101, 114, 32, 91, 48, 32, 48, 32, 50, 32, 93, 32, 47, 80, 32, 50, 32, 48, 32, 82, 32, 62, 62, 32, 101, 110, 100, 111, 98, 106, 10])


    let solution = [[519.017616, 388.777752, 519.418476, 388.777752, 520.621056, 388.777752, 521.422164, 388.777752, 522.223884, 388.777752, 523.025604, 388.777752, 523.827324, 388.777752, 525.029292, 388.377, 525.831012, 388.377, 526.632732, 388.377, 527.434452, 387.975456, 527.8347, 387.975456, 528.63642, 387.975456, 529.03728, 387.574704, 529.43814, 387.574704, 529.839, 387.574704, 530.23986, 387.574704, 531.040968, 387.574704, 531.441828, 387.574704, 531.842688, 387.574704, 532.243548, 387.574704, 532.644408, 387.574704, 532.644408, 387.975456, 533.045268, 387.975456, 533.446128, 387.975456, 533.846988, 387.975456, 534.247848, 387.574704, 534.648096, 387.574704, 535.048956, 387.574704, 535.449816, 387.574704, 535.850676, 387.574704, 535.850676, 387.975456, 536.251536, 387.975456]]
    expect(Util.extractField(data, Util.INKLIST)).toEqual(solution)
})

test('extractField-INKLIST', () => {
    let data = new Uint8Array([49, 48, 57, 32, 48, 32, 111, 98, 106, 32, 60, 60, 47, 84, 121, 112, 101, 32, 47, 65, 110, 110, 111, 116, 32, 47, 82, 101, 99, 116, 32, 91, 53, 49, 56, 46, 54, 49, 54, 55, 53, 54, 32, 51, 56, 54, 46, 55, 55, 50, 52, 48, 56, 32, 53, 51, 55, 46, 48, 53, 51, 50, 53, 54, 32, 51, 56, 57, 46, 53, 56, 48, 56, 52, 32, 93, 32, 47, 83, 117, 98, 116, 121, 112, 101, 32, 47, 73, 110, 107, 32, 47, 73, 110, 107, 76, 105, 115, 116, 32, 91, 91, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93, 32, 47, 77, 32, 40, 68, 58, 50, 48, 49, 56, 48, 53, 48, 51, 48, 57, 53, 50, 50, 54, 41, 32, 47, 84, 32, 40, 112, 101, 116, 101, 114, 41, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 40, 112, 97, 114, 107, 101, 114, 41, 32, 47, 78, 77, 32, 40, 111, 107, 117, 108, 97, 114, 45, 123, 98, 99, 99, 51, 53, 48, 98, 98, 45, 50, 48, 49, 54, 45, 52, 102, 102, 57, 45, 57, 102, 54, 97, 45, 102, 53, 57, 97, 99, 98, 97, 51, 55, 55, 52, 50, 125, 41, 32, 47, 70, 32, 52, 32, 47, 67, 32, 91, 48, 32, 49, 32, 48, 32, 93, 32, 47, 67, 65, 32, 49, 32, 47, 66, 111, 114, 100, 101, 114, 32, 91, 48, 32, 48, 32, 50, 32, 93, 32, 47, 80, 32, 50, 32, 48, 32, 82, 32, 62, 62, 32, 101, 110, 100, 111, 98, 106, 10])

    expect(Util.extractField(data, Util.INKLIST)).toEqual([[387.975456]])
})

test('extractField-WITHOUTSPACES', () => {
    // data:
    //2 0 obj
    //<</Type/Pages/Count 3/Kids[ 3 0 R 15 0 R 17 0 R] >>
    //endobj
    let data = new Uint8Array([50, 32, 48, 32, 111, 98, 106, 10, 60, 60, 47, 84, 121, 112, 101, 47, 80, 97, 103, 101, 115, 47, 67, 111, 117, 110, 116, 32, 51, 47, 75, 105, 100, 115, 91, 32, 51, 32, 48, 32, 82, 32, 49, 53, 32, 48, 32, 82, 32, 49, 55, 32, 48, 32, 82, 93, 32, 62, 62, 10, 101, 110, 100, 111, 98, 106, 10])

    expect(Util.extractField(data, Util.COUNT)).toEqual(3)
    expect(Util.extractField(data, Util._TYPE)).toEqual("Pages")
    let kids = Util.extractField(data, Util.KIDS)
    expect(kids[0]).toEqual({ generation: 0, obj: 3 })
    expect(kids[1]).toEqual({ generation: 0, obj: 15 })
    expect(kids[2]).toEqual({ generation: 0, obj: 17 })

    // lookup non existing field
    expect(Util.extractField(data, Util.ANNOTS)).toBeUndefined()

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
