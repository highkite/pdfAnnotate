import { DocumentHistory, CrossReferenceStreamObject, CrossReferenceTable } from '../document-history';
import { crossReferenceStreamObject_string, xrefTable, encode } from './Data2'
import { crossReferenceStreamObjectWithStreamSection } from './Data3';
import { test_9_cross_reference_stream_object } from './Data4';
import { testDocument } from './Data';
import { Util } from '../util';

test('extractCrossReferenceStreamObjectWithStreamSection', () => {
    let crs = new CrossReferenceStreamObject(new Uint8Array(crossReferenceStreamObjectWithStreamSection))
    crs.extract({ pointer: 0, id: 3, generation: 0, free: false, update: true })

    expect(crs.trailer.size).toBe(626)
    expect(crs.trailer.prev!).toBeUndefined()
    expect(crs.trailer.root!.generation).toBe(0)
    expect(crs.trailer.root!.obj).toBe(1)
    expect(crs.streamLength).toBe(1644)
    expect(crs.index[0]).toBe(0)
    expect(crs.index[1]).toBe(625)
    expect(crs.w[0]).toBe(1)
    expect(crs.w[1]).toBe(3)
    expect(crs.w[2]).toBe(0)

})

test('extractCrossReferenceStreamObjectWithStreamSection_2', () => {
    let crs = new CrossReferenceStreamObject(new Uint8Array(test_9_cross_reference_stream_object))
    crs.extract({ pointer: 0, id: 3, generation: 0, free: false, update: true })

    expect(crs.trailer.size).toBe(3681)
    expect(crs.trailer.prev!).toBeUndefined()
    expect(crs.trailer.root!.generation).toBe(0)
    expect(crs.trailer.root!.obj).toBe(3678)
    expect(crs.streamLength).toBe(8605)
    expect(crs.index[0]).toBe(0)
    expect(crs.index[1]).toBe(3681)
    expect(crs.w[0]).toBe(1)
    expect(crs.w[1]).toBe(3)
    expect(crs.w[2]).toBe(1)

})

test('extractDocumentEntry', () => {
    let hist = new DocumentHistory(new Uint8Array(testDocument))

    hist.extractDocumentHistory()

    let us = hist.updates[0]

    expect(us.prev).toBe(1150)
    expect(us.root!.generation).toBe(0)
    expect(us.root!.obj).toBe(1)
    expect(us.size).toBe(9)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(7)
    expect(us.refs[1].pointer).toBe(1321)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(8)
    expect(us.refs[2].pointer).toBe(1352)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()
})

test('extractCrossReferenceTable', () => {
    let hist = new DocumentHistory(new Uint8Array(testDocument))

    hist.extractDocumentHistory()

    expect(hist.updates.length).toBe(3)

    let us = hist.updates[0]

    expect(us.prev).toBe(1150)
    expect(us.root!.generation).toBe(0)
    expect(us.root!.obj).toBe(1)
    expect(us.size).toBe(9)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(7)
    expect(us.refs[1].pointer).toBe(1321)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(8)
    expect(us.refs[2].pointer).toBe(1352)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    us = hist.updates[1]

    expect(us.prev).toBe(492)
    expect(us.root!.generation).toBe(0)
    expect(us.root!.obj).toBe(1)
    expect(us.size).toBe(8)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(3)
    expect(us.refs[1].pointer).toBe(678)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(6)
    expect(us.refs[2].pointer).toBe(792)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    expect(us.refs[3].id).toBe(7)
    expect(us.refs[3].pointer).toBe(1125)
    expect(us.refs[3].generation).toBe(0)
    expect(us.refs[3].free).toBeFalsy()
    expect(us.refs[3].update).toBeTruthy()

    us = hist.updates[2]

    expect(us.prev).toBeUndefined()
    expect(us.root!.generation).toBe(0)
    expect(us.root!.obj).toBe(1)
    expect(us.size).toBe(6)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(0)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(1)
    expect(us.refs[1].pointer).toBe(10)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(2)
    expect(us.refs[2].pointer).toBe(79)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    expect(us.refs[3].id).toBe(3)
    expect(us.refs[3].pointer).toBe(173)
    expect(us.refs[3].generation).toBe(0)
    expect(us.refs[3].free).toBeFalsy()
    expect(us.refs[3].update).toBeTruthy()

    expect(us.refs[4].id).toBe(4)
    expect(us.refs[4].pointer).toBe(301)
    expect(us.refs[4].generation).toBe(0)
    expect(us.refs[4].free).toBeFalsy()
    expect(us.refs[4].update).toBeTruthy()

    expect(us.refs[5].id).toBe(5)
    expect(us.refs[5].pointer).toBe(380)
    expect(us.refs[5].generation).toBe(0)
    expect(us.refs[5].free).toBeFalsy()
    expect(us.refs[5].update).toBeTruthy()
})

test('extractCrossReferenceTable_2', () => {
    let hist = new DocumentHistory(new Uint8Array(xrefTable))

    hist.extractDocumentHistory()
    expect(hist.updates[0].refs.map(x => x.id)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(hist.updates[0].refs.map(x => x.pointer)).toEqual([0, 15, 66, 149, 798, 293, 367, 464, 828, 1125])
    expect(hist.updates[0].refs.map(x => x.generation)).toEqual([65535, 0,0,0,0,0,0,0,0,0])
    expect(hist.updates[0].refs.map(x => x.free)).toEqual([true, false, false, false, false, false, false, false, false, false ])
    expect(hist.updates[0].refs.map(x => x.update)).toEqual([false, true, true, true, true, true, true, true, true, true])
    expect(hist.updates[0].is_encrypted).toBeTruthy()
    expect(hist.updates[0].encrypt!.obj).toBe(9)
    expect(hist.updates[0].encrypt!.generation).toBe(0)
    expect(hist.updates[0].id![0]).toEqual(new Uint8Array([89, 82, 60, 176, 231, 14, 3, 205, 71, 147, 120, 105, 213, 73, 11, 248]))
    expect(hist.updates[0].id![1]).toEqual(new Uint8Array([138, 100, 40, 199, 132, 113, 74, 100, 213, 90, 172, 167, 169, 224, 139, 160]))
})

test('extractCrossReferenceTable_3', () => {
    let data = encode(`xref\r
0 10\r
0000000000 65535 f
0000000015 00000 n
0000000066 00000 n
0000000149 00000 n
0000000798 00000 n
0000000293 00000 n
0000000367 00000 n
0000000464 00000 n
0000000828 00000 n
0000001125 00000 n
trailer

<<
/ID [<59523cb0e70e03cd47937869d5490bf8><8a6428c784714a64d55aaca7a9e08ba0>]
/Encrypt 9 0 R
/Root 1 0 R
/Size 10
>>
startxref
0
        %%EOF`)
    let hist = new DocumentHistory(new Uint8Array(data))

    hist.extractDocumentHistory()
    expect(hist.updates[0].refs.map(x => x.id)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(hist.updates[0].refs.map(x => x.pointer)).toEqual([0, 15, 66, 149, 798, 293, 367, 464, 828, 1125])
    expect(hist.updates[0].refs.map(x => x.generation)).toEqual([65535, 0,0,0,0,0,0,0,0,0])
    expect(hist.updates[0].refs.map(x => x.free)).toEqual([true, false, false, false, false, false, false, false, false, false ])
    expect(hist.updates[0].refs.map(x => x.update)).toEqual([false, true, true, true, true, true, true, true, true, true])
    expect(hist.updates[0].is_encrypted).toBeTruthy()
    expect(hist.updates[0].encrypt!.obj).toBe(9)
    expect(hist.updates[0].encrypt!.generation).toBe(0)
    expect(hist.updates[0].id![0]).toEqual(new Uint8Array([89, 82, 60, 176, 231, 14, 3, 205, 71, 147, 120, 105, 213, 73, 11, 248]))
    expect(hist.updates[0].id![1]).toEqual(new Uint8Array([138, 100, 40, 199, 132, 113, 74, 100, 213, 90, 172, 167, 169, 224, 139, 160]))
})

test('extractCrossReferenceTable_4', () => {
    let data = encode(`xref\r
0 10\r
0000000000 65535 f
0000000015 00000 n
% This is actually an illegal comment
0000000066 00000 n
0000000149 00000 n
0000000798 00000 n
0000000293 00000 n
0000000367 00000 n
0000000464 00000 n
0000000828 00000 n
0000001125 00000 n
trailer

<<
/ID [<59523cb0e70e03cd47937869d5490bf8><8a6428c784714a64d55aaca7a9e08ba0>]
/Encrypt 9 0 R
/Root 1 0 R
/Size 10
>>
startxref
0
    %%EOF`)
    let hist = new DocumentHistory(new Uint8Array(data))

    hist.extractDocumentHistory()
    expect(hist.updates[0].refs.map(x => x.id)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(hist.updates[0].refs.map(x => x.pointer)).toEqual([0, 15, 66, 149, 798, 293, 367, 464, 828, 1125])
    expect(hist.updates[0].refs.map(x => x.generation)).toEqual([65535, 0,0,0,0,0,0,0,0,0])
    expect(hist.updates[0].refs.map(x => x.free)).toEqual([true, false, false, false, false, false, false, false, false, false ])
    expect(hist.updates[0].refs.map(x => x.update)).toEqual([false, true, true, true, true, true, true, true, true, true])
    expect(hist.updates[0].is_encrypted).toBeTruthy()
    expect(hist.updates[0].encrypt!.obj).toBe(9)
    expect(hist.updates[0].encrypt!.generation).toBe(0)
    expect(hist.updates[0].id![0]).toEqual(new Uint8Array([89, 82, 60, 176, 231, 14, 3, 205, 71, 147, 120, 105, 213, 73, 11, 248]))
    expect(hist.updates[0].id![1]).toEqual(new Uint8Array([138, 100, 40, 199, 132, 113, 74, 100, 213, 90, 172, 167, 169, 224, 139, 160]))
})

test('extractCrossReferenceTable_5', () => {
    let data = encode(`xref\r
0 1\r
0000000001 65535 f\r
7 2\r
0000001321 00000 n\r
0000001352 00000 n\r
trailer\r
<</Size 9 /Root 1 0 R>>
startxref
0
%%EOF`)
    let hist = new DocumentHistory(new Uint8Array(data))

    hist.extractDocumentHistory()
    expect(hist.updates[0].refs.map(x => x.id)).toEqual([0, 7, 8])
    expect(hist.updates[0].refs.map(x => x.pointer)).toEqual([1, 1321, 1352])
    expect(hist.updates[0].refs.map(x => x.generation)).toEqual([65535, 0,0])
    expect(hist.updates[0].refs.map(x => x.free)).toEqual([true, false, false])
    expect(hist.updates[0].refs.map(x => x.update)).toEqual([false, true, true])
})

test('extractCrossReferenceTable_6', () => {
    let data = encode(`xref
0 0
trailer
<</Size 25 /Root 1 0 R>>
startxref
0
%%EOF`)
    let hist = new DocumentHistory(new Uint8Array(data))

    hist.extractDocumentHistory()
})

test('extractCrossReferenceTable_7', () => {
    let data = encode(`xref\r
0 1\r
0000000001 65535 f\r
7 2\r
0000001321 00000 n\r
0000001352 00000 n\r
trailer\r
<</Size 9 /Root 1 0 R>>
startxref
11
%%EOF`)
    let hist = new DocumentHistory(new Uint8Array(data))

    hist.extractDocumentHistory()
    expect(hist.updates[0].refs.map(x => x.id)).toEqual([0, 7, 8])
    expect(hist.updates[0].refs.map(x => x.pointer)).toEqual([1, 1321, 1352])
    expect(hist.updates[0].refs.map(x => x.generation)).toEqual([65535, 0,0])
    expect(hist.updates[0].refs.map(x => x.free)).toEqual([true, false, false])
    expect(hist.updates[0].refs.map(x => x.update)).toEqual([false, true, true])
})

test('extractSubSectionHeader', () => {
    let crt = new CrossReferenceTable(new Uint8Array(encode("0 10")))
    let res = crt.extractSubSectionHeader(0)

    expect(res.id).toBe(0)
    expect(res.count).toBe(10)
    expect(res.end_ptr).toBe(3)
})

test('extractReferences', () => {
    let crt = new CrossReferenceTable(new Uint8Array(encode("0000000001 65535 f")))
    let res = crt.extractReferences(0, 1, 0)
    expect(res.end_index).toBe(17)
    expect(res.refs[0].id).toBe(0)
    expect(res.refs[0].pointer).toBe(1)
    expect(res.refs[0].generation).toBe(65535)
    expect(res.refs[0].free).toBeTruthy()
    expect(res.refs[0].update).toBeFalsy()


    crt = new CrossReferenceTable(new Uint8Array(encode("0000001321 00000 n")))
    res = crt.extractReferences(0, 1, 7)
    expect(res.end_index).toBe(17)
    expect(res.refs[0].id).toBe(7)
    expect(res.refs[0].pointer).toBe(1321)
    expect(res.refs[0].generation).toBe(0)
    expect(res.refs[0].free).toBeFalsy()
    expect(res.refs[0].update).toBeTruthy()

    crt = new CrossReferenceTable(new Uint8Array(encode("0000001321 00000 n\n0000001352 00000 n")))
    res = crt.extractReferences(0, 2, 7)
    expect(res.end_index).toBe(36)
    expect(res.refs[0].id).toBe(7)
    expect(res.refs[0].pointer).toBe(1321)
    expect(res.refs[0].generation).toBe(0)
    expect(res.refs[0].free).toBeFalsy()
    expect(res.refs[0].update).toBeTruthy()
    expect(res.refs[1].id).toBe(8)
    expect(res.refs[1].pointer).toBe(1352)
    expect(res.refs[1].generation).toBe(0)
    expect(res.refs[1].free).toBeFalsy()
    expect(res.refs[1].update).toBeTruthy()
})

test('extractReferences_2', () => {
    /** data =
     *  0000000000 65535 f
     *  0000000015 00000 n
     *  0000000066 00000 n
     *  0000000149 00000 n
     *  0000000798 00000 n
     *  0000000293 00000 n
     *  0000000367 00000 n
     *  0000000464 00000 n
     *  0000000828 00000 n
     *  0000001125 00000 n
     * */
    let data = new Uint8Array(Util.convertHexStringToByteArray("303030303030303030302036353533352066200a30303030303030303135203030303030206e200a30303030303030303636203030303030206e200a30303030303030313439203030303030206e200a30303030303030373938203030303030206e200a30303030303030323933203030303030206e200a30303030303030333637203030303030206e200a30303030303030343634203030303030206e200a30303030303030383238203030303030206e200a30303030303031313235203030303030206e200a747261696c65720a0a3c3c0a2f4944205b3c35393532336362306537306530336364343739333738363964353439306266383e3c38613634323863373834373134613634643535616163613761396530386261303e5d0a2f456e63727970742039203020520a2f526f6f742031203020520a2f53697a652031300a3e3e0a7374617274787265660a300a2525454f460a"))

    let crt = new CrossReferenceTable(data)
    let res = crt.extractReferences(0, 10, 0)
    expect(res.refs.map(x => x.id)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(res.refs.map(x => x.pointer)).toEqual([0, 15, 66, 149, 798, 293, 367, 464, 828, 1125])
    expect(res.refs.map(x => x.generation)).toEqual([65535, 0,0,0,0,0,0,0,0,0])
    expect(res.refs.map(x => x.free)).toEqual([true, false, false, false, false, false, false, false, false, false ])
    expect(res.refs.map(x => x.update)).toEqual([false, true, true, true, true, true, true, true, true, true])
})

test('extractReferences_3', () => {
    let data = new Uint8Array(Util.convertHexStringToByteArray("787265660a302037330a303030303030303030302036353533352066200a30303030303030313030203030303030206e200a30303030303031313030203030303030206e200a30303030303031343030203030303030206e200a30303030303035373030203030303030206e200a30303030303036303030203030303030206e200a30303030303036353030203030303030206e200a30303030303037303030203030303030206e200a30303030303037353030203030303030206e200a30303030303234353030203030303030206e200a30303030303235303030203030303030206e200a30303030303235353030203030303030206e200a30303030303236303030203030303030206e200a30303030303433303030203030303030206e200a30303030303433353030203030303030206e200a30303030303434303030203030303030206e200a30303030303434353030203030303030206e200a30303030303631353030203030303030206e200a30303030303632303030203030303030206e200a30303030303632353030203030303030206e200a30303030303633303030203030303030206e200a30303030303830303030203030303030206e200a30303030303830353030203030303030206e200a30303030303831303030203030303030206e200a30303030303831353030203030303030206e200a30303030303938353030203030303030206e200a30303030303939303030203030303030206e200a30303030303939353030203030303030206e200a30303030313030303030203030303030206e200a30303030313137303030203030303030206e200a30303030313137353030203030303030206e200a30303030313138303030203030303030206e200a30303030313138353030203030303030206e200a30303030313335353030203030303030206e200a30303030313336303030203030303030206e200a30303030313336353030203030303030206e200a30303030313337303030203030303030206e200a30303030313534303030203030303030206e200a30303030313534353030203030303030206e200a30303030313535303030203030303030206e200a30303030313535353030203030303030206e200a30303030313732353030203030303030206e200a30303030313733303030203030303030206e200a30303030313733353030203030303030206e200a30303030313734303030203030303030206e200a30303030313931303030203030303030206e200a30303030313931353030203030303030206e200a30303030313932303030203030303030206e200a30303030313932353030203030303030206e200a30303030323039353030203030303030206e200a30303030323130303030203030303030206e200a30303030323130353030203030303030206e200a30303030323131303030203030303030206e200a30303030323238303030203030303030206e200a30303030323238353030203030303030206e200a30303030323239303030203030303030206e200a30303030323239353030203030303030206e200a30303030323436353030203030303030206e200a30303030323437303030203030303030206e200a30303030323437353030203030303030206e200a30303030323438303030203030303030206e200a30303030323635303030203030303030206e200a30303030323635353030203030303030206e200a30303030323636303030203030303030206e200a30303030323636353030203030303030206e200a30303030323833353030203030303030206e200a30303030323834303030203030303030206e200a30303030323834353030203030303030206e200a30303030323835303030203030303030206e200a30303030333032303030203030303030206e200a30303030333032353030203030303030206e200a30303030333033303030203030303030206e200a30303030333033353030203030303030206e200a0a747261696c65720a3c3c0a202020202f53697a652037330a202020202f526f6f742032203020520a202020202f496e666f2031203020520a3e3e0a7374617274787265660a300a2525454f460a"))

    let crt = new CrossReferenceTable(data)
    crt.extract(0)
    expect(crt.refs.map(x => x.id)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72])
})
