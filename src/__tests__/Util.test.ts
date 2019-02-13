import { Util } from '../util';

test('locateSequence', () => {
        let sequence = [40]
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(-1)

        sequence = [101, 40]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(-1)

        sequence = [47, 84]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(0)

        sequence = [47,84,121,112,101,32,80,97,103,101,115]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(0)

        sequence = [80,97,103,101,115]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(6)

        sequence = [47,84]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 4)).toBe(-1)

        sequence = [80, 97, 103, 101, 115, 120]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 4)).toBe(-1)
})

test('locateSequence with closed flag', () => {
        let sequence = [112]
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 0, true)).toBe(-1)

        sequence = [84, 121, 112, 101]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 0, true)).toBe(1)
})

test('locateDelimiter', () => {
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateDelimiter(data, 0)).toBe(4)

        expect(Util.locateDelimiter(data, 6)).toBe(10)

        data = new Int8Array([47, 84])
        expect(Util.locateDelimiter(data, 0)).toBe(1)
})

test('locateDelimiterReversed', () => {
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateDelimiterReversed(data, 1)).toBe(0)

        expect(Util.locateDelimiterReversed(data, 10)).toBe(4)
})

test('locateSequenceReversed', () => {
        let sequence = [40]
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequenceReversed(sequence, data)).toBe(-1)

        sequence = [101, 40]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(-1)

        sequence = [47, 84]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(0)

        sequence = [47,84,121,112,101,32,80,97,103,101,115]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(0)

        sequence = [80,97,103,101,115]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data)).toBe(6)

        sequence = [47,84]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 4)).toBe(-1)

        sequence = [80, 97, 103, 101, 115, 120]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequence(sequence, data, 4)).toBe(-1)
})

test('locateSequenceReversed with closed flag', () => {
        let sequence = [112]
        let data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequenceReversed(sequence, data, data.length - 1, true)).toBe(-1)

        sequence = [80, 97, 103]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
        expect(Util.locateSequenceReversed(sequence, data, data.length - 1, true)).toBe(6)

        sequence = [47, 84, 121, 112]
        data = new Int8Array([47,84,121,112,101,32,80,97,103,101,115])
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
        let data = new Int8Array([49])
        expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

        data = new Int8Array([50, 51])
        expect(Util.extractNumber(data, 0, data.length - 1)).toBe(23)

        data = new Int8Array([53, 51, 49, 55])
        expect(Util.extractNumber(data, 0, data.length - 1)).toBe(5317)

        // check with preceding delimiters
        data = new Int8Array([32, 49])
        expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

        data = new Int8Array([32, 13, 10, 49])
        expect(Util.extractNumber(data, 0, data.length - 1)).toBe(1)

        data = new Int8Array([32, 13, 10, 49])
        expect(Util.extractNumber(data, 0)).toBe(1)

        data = new Int8Array([32, 13, 10, 49, 32])
        expect(Util.extractNumber(data, 0)).toBe(1)

        // test float values
        data = new Int8Array([50, 46, 53])
        expect(Util.extractNumber(data, 0)).toBe(2.5)

        data = new Int8Array([50, 48, 46, 53, 56, 54, 54])
        expect(Util.extractNumber(data, 0)).toBe(20.5866)

        data = new Int8Array([32, 13, 10])
        expect(() => Util.extractNumber(data, 0)).toThrow(Error)
})

test('extractString', () => {
        let data = new Int8Array([40, 97, 98, 99, 41])
        expect(Util.extractString(data, 0)).toEqual('abc')

        data = new Int8Array([32, 10, 13, 40, 97, 98, 99, 41])
        expect(Util.extractString(data, 0)).toEqual('abc')
})

test('extractArray', () => {
        let data = new Int8Array([91, 49, 32, 50, 32, 51, 32, 93]) // number array
        expect(Util.extractArray(data, 0)).toEqual([1, 2, 3])

        data = new Int8Array([91, 54, 32, 48, 32, 82, 32, 56, 32, 48, 32, 82, 32, 93]) // reference pointer array
        expect(Util.extractArray(data, 0)[0].obj).toEqual(6)
        expect(Util.extractArray(data, 0)[0].generation).toEqual(0)

        expect(Util.extractArray(data, 0)[1].obj).toEqual(8)
        expect(Util.extractArray(data, 0)[1].generation).toEqual(0)
})

test('extractOptionValue', () => {
        let data = new Int8Array([47, 72, 105, 103, 104, 108, 105, 103, 104, 116])
        expect(Util.extractOptionValue(data, 0)).toEqual('Highlight')
})

test('extractField', () => {
        let data = new Int8Array([56, 32, 48, 32, 111, 98, 106, 32, 60, 60, 47, 84, 121, 112, 101, 32, 47, 65, 110, 110, 111, 116, 32, 47, 82, 101, 99, 116, 32, 91, 55, 55, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 51, 46, 55, 57, 51, 49, 57, 48, 52, 49, 54, 49, 32, 56, 51, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 57, 46, 55, 56, 53, 54, 50, 52, 50, 49, 49, 57, 32, 93, 32, 47, 83, 117, 98, 116, 121, 112, 101, 32, 47, 84, 101, 120, 116, 32, 47, 77, 32, 40, 68, 58, 50, 48, 49, 57, 48, 49, 48, 49, 49, 53, 52, 50, 50, 53, 41, 32, 47, 84, 32, 40, 239, 191, 189, 239, 191, 189, 104, 105, 103, 104, 119, 97, 121, 41, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 40, 239, 191, 189, 239, 191, 189, 80, 111, 112, 32, 117, 112, 32, 110, 111, 116, 101, 41, 32, 47, 78, 77, 32, 40, 111, 107, 117, 108, 97, 114, 45, 123, 53, 53, 49, 102, 49, 99, 49, 99, 45, 50, 50, 52, 100, 45, 52, 57, 56, 50, 45, 98, 53, 99, 101, 45, 51, 52, 57, 52, 52, 56, 51, 98, 102, 56, 100, 51, 125, 41, 32, 47, 70, 32, 52, 32, 47, 67, 32, 91, 49, 32, 49, 32, 48, 32, 93, 32, 47, 67, 65, 32, 49, 32, 47, 66, 111, 114, 100, 101, 114, 32, 91, 48, 32, 48, 32, 49, 32, 93, 32, 47, 80, 32, 51, 32, 48, 32, 82, 32, 62, 62, 32, 101, 110, 100, 111, 98, 10])

        expect(Util.extractField(data, Util.RECT)).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])
        expect(Util.extractField(data, Util.M)).toEqual("D:20190101154225")
        expect(Util.extractField(data, Util.T)).toEqual("￯﾿ﾽ￯﾿ﾽhighway")
        expect(Util.extractField(data, Util.CONTENTS)).toEqual("￯﾿ﾽ￯﾿ﾽPop up note")
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
})

test('extractNumbersArray', () => {
        let data = new Int8Array([91, 49, 32, 50, 32, 51, 32, 93])
        expect(Util.extractNumbersArray(data, 0)).toEqual([1, 2, 3])

        data = new Int8Array([91, 55, 55, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 51, 46, 55, 57, 51, 49, 57, 48, 52, 49, 54, 49, 32, 56, 51, 46, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 32, 56, 57, 46, 55, 56, 53, 54, 50, 52, 50, 49, 49, 57, 32, 93])
        expect(Util.extractNumbersArray(data, 0)).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])
})

test('extractObjectId', () => {
        let data = new Int8Array([55, 32, 48, 32, 111, 98, 106])
        expect(Util.extractObjectId(data, 0).obj).toEqual(7)
        expect(Util.extractObjectId(data, 0).generation).toEqual(0)
})

test('extractReference', () => {
        let data = new Int8Array([50, 32, 51, 32, 82])
        expect(Util.extractReference(data, 0)).toEqual(new Int8Array([50, 32, 51]))

        data = new Int8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
        expect(Util.extractReference(data, 0)).toEqual(new Int8Array([50, 32, 51]))

        expect(Util.extractReference(data, 6)).toEqual(new Int8Array([52, 48, 32, 53]))

        data = new Int8Array([32, 50, 32, 51, 32, 82])
        expect(Util.extractReference(data, 0)).toEqual(new Int8Array([50, 32, 51]))

        data = new Int8Array([32, 13, 50, 32, 51, 32, 82])
        expect(Util.extractReference(data, 0)).toEqual(new Int8Array([50, 32, 51]))
})

test('extractReferenceTyped', () => {
        let data = new Int8Array([50, 32, 51, 32, 82])
        expect(Util.extractReferenceTyped(data, 0).obj).toEqual(2)
        expect(Util.extractReferenceTyped(data, 0).generation).toEqual(3)

        data = new Int8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
        expect(Util.extractReferenceTyped(data, 0).obj).toEqual(2)
        expect(Util.extractReferenceTyped(data, 0).generation).toEqual(3)

        expect(Util.extractReferenceTyped(data, 6).obj).toEqual(40)
        expect(Util.extractReferenceTyped(data, 6).generation).toEqual(5)
})

test('extractArraySequence', () => {
        let data = new Int8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
        let solution = new Int8Array([50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82])
        expect(Util.extractArraySequence(data, 0)).toEqual(solution)
        expect(Util.extractArraySequence(data, 5)).toEqual(solution)
        expect(Util.extractArraySequence(data, 13)).toEqual(solution)
})

test('skipDelimiter', () => {
        let data = new Int8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
        expect(Util.skipDelimiter(data, 0)).toEqual(0)

        data = new Int8Array([91, 50, 32, 51, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
        expect(Util.skipDelimiter(data, 2)).toEqual(3)

        data = new Int8Array([91, 50, 32, 13, 32, 82, 32, 52, 48, 32, 53, 32, 82, 93])
        expect(Util.skipDelimiter(data, 2)).toEqual(5)

        data = new Int8Array([91, 50, 32, 13, 32])
        expect(Util.skipDelimiter(data, 4)).toEqual(5)
})
