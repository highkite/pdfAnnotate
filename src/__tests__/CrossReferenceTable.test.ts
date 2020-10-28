import { CrossReferenceTable } from '../document-history';

test('extractSubSectionHeader', () => {
    let data = new Uint8Array([48, 32, 49]) // 0 1
    let us = new CrossReferenceTable(data)

    let header = us.extractSubSectionHeader(0)

    expect(header.count).toBe(1)
    expect(header.id).toBe(0)
    expect(header.end_ptr).toBe(2)
})


test('extractSubSectionHeader', () => {
    let data = new Uint8Array([48, 32, 49, 13]) // 0 1\n
    let us = new CrossReferenceTable(data)

    let header = us.extractSubSectionHeader(0)

    expect(header.count).toBe(1)
    expect(header.id).toBe(0)
    expect(header.end_ptr).toBe(2)
})

test('extractSubSectionHeader', () => {
    let data = new Uint8Array([50, 53, 48, 32, 56, 57, 32]) // "250 89 "
    let us = new CrossReferenceTable(data)

    let header = us.extractSubSectionHeader(0)

    expect(header.count).toBe(89)
    expect(header.id).toBe(250)
    expect(header.end_ptr).toBe(5)
})

test('extractReferences', () => {
    /*
     * 0000001321 00000 n
     * 0000001352 00000 n
     * */
    let data = new Uint8Array([48, 48, 48, 48, 48, 48, 49, 51, 50, 49, 32, 48, 48, 48, 48, 48, 32, 110, 32, 48, 48, 48, 48, 48, 48, 49, 51, 53, 50, 32, 48, 48, 48, 48, 48, 32, 110])
    let us = new CrossReferenceTable(data)

    let references = us.extractReferences(0, 2, 7)

    expect(references.refs[0].free).toBeFalsy()
    expect(references.refs[0].update).toBeTruthy()
    expect(references.refs[0].id).toBe(7)
    expect(references.refs[0].pointer).toBe(1321)
    expect(references.refs[0].generation).toBe(0)

    expect(references.refs[1].free).toBeFalsy()
    expect(references.refs[1].update).toBeTruthy()
    expect(references.refs[1].id).toBe(8)
    expect(references.refs[1].pointer).toBe(1352)
    expect(references.refs[1].generation).toBe(0)
})


test('extractReferences', () => {
    /*
     * 0000001321 00000 n
     * 0000001352 00000 n
     * */
    let data = new Uint8Array([48, 48, 48, 48, 48, 48, 49, 51, 50, 49, 32, 48, 48, 48, 48, 48, 32, 110, 10, 48, 48, 48, 48, 48, 48, 49, 51, 53, 50, 32, 48, 48, 48, 48, 48, 32, 110])
    let us = new CrossReferenceTable(data)

    let references = us.extractReferences(0, 2, 7)

    expect(references.refs[0].free).toBeFalsy()
    expect(references.refs[0].update).toBeTruthy()
    expect(references.refs[0].id).toBe(7)
    expect(references.refs[0].pointer).toBe(1321)
    expect(references.refs[0].generation).toBe(0)

    expect(references.refs[1].free).toBeFalsy()
    expect(references.refs[1].update).toBeTruthy()
    expect(references.refs[1].id).toBe(8)
    expect(references.refs[1].pointer).toBe(1352)
    expect(references.refs[1].generation).toBe(0)
})

test('extractTrailer', () => {
    /*
     * trailer
     * <</Size 9 /Root 1 0 R /Prev 1150 >>
     * startxref
     * 1648
     * %%EOF
     * */
    let data = new Uint8Array([116, 114, 97, 105, 108, 101, 114, 10, 60, 60, 47, 83, 105, 122, 101, 32, 57, 32, 47, 82, 111, 111, 116, 32, 49, 32, 48, 32, 82, 32, 47, 80, 114, 101, 118, 32, 49, 49, 53, 48, 32, 62, 62, 10, 115, 116, 97, 114, 116, 120, 114, 101, 102, 10, 49, 54, 52, 56, 10, 37, 37, 69, 79, 70])
    let us = new CrossReferenceTable(data)

    let trailer = us.extractTrailer(0)

    expect(trailer.size).toBe(9)
    expect(trailer.prev).toBe(1150)
    expect(trailer.root.obj).toBe(1)
    expect(trailer.root.generation).toBe(0)
})
