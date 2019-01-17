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

        data = new Int8Array([32, 13, 10])
        expect(() => Util.extractNumber(data, 0)).toThrow(Error)
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
