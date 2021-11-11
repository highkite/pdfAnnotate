import { PDFDocumentParser, Page, Annotation, ContentStreamParser } from '../parser';
import { testDocument, testDocument2 } from './Data';
import { pageObject_string, loadFromFile } from './Data2';
import { MarkupAnnotationObj } from '../annotations/annotation_types';
import { Util } from '../util';
import { Operator, TextObject, MarkedContent, ContentStream } from '../content-stream';

test('extractPDFVersion', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let version = doc.getPDFVersion()

    expect(version.major).toBe(1)
    expect(version.minor).toBe(7)

    doc = new PDFDocumentParser(new Uint8Array(testDocument2))

    version = doc.getPDFVersion()

    expect(version.major).toBe(1)
    expect(version.minor).toBe(4)
})

test('pageExtraction', () => {
    let data = new Uint8Array(pageObject_string)

    let page = new Page(data, (<any>undefined))
    page.extract({ pointer: 0, id: 3, generation: 0, free: false, update: true }, {})

    expect(page.object_id).toBeDefined()
    expect(page.object_id!.obj).toBe(2)
    expect(page.object_id!.generation).toBe(0)

    expect(page.hasAnnotsField).toBeTruthy()
    expect(page.annots.length).toBe(6)
})

test('getFreeObjectId', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let obj_id = doc.getFreeObjectId()

    expect(obj_id.obj).toBe(9)
    expect(obj_id.generation).toBe(0)
    expect(obj_id.reused).toBeFalsy()
})

test('getCatalog', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let catalog = doc.getCatalog()

    let pobj = catalog.getPagesObjectId()

    expect(pobj.obj).toBe(2)
    expect(pobj.generation).toBe(0)
})

test('getPageTree - testDocument', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let pt = doc.getPageTree()

    expect(pt.getPageCount()).toBe(1)
    expect(pt.getPageReferences().length).toBe(1)
    expect(pt.getPageReferences()[0].obj).toBe(3)
    expect(pt.getPageReferences()[0].generation).toBe(0)
})

test('getPageTree - testDocument2', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument2))

    let pt = doc.getPageTree()

    expect(pt.getPageCount()).toBe(14)
    expect(pt.getPageReferences().length).toBe(14)

    // /Pages obj: 40 0
    expect(pt.getPageReferences()[0].obj).toBe(2)
    expect(pt.getPageReferences()[0].generation).toBe(0)

    expect(pt.getPageReferences()[1].obj).toBe(43)
    expect(pt.getPageReferences()[1].generation).toBe(0)

    expect(pt.getPageReferences()[2].obj).toBe(104)
    expect(pt.getPageReferences()[2].generation).toBe(0)

    expect(pt.getPageReferences()[3].obj).toBe(110)
    expect(pt.getPageReferences()[3].generation).toBe(0)

    expect(pt.getPageReferences()[4].obj).toBe(116)
    expect(pt.getPageReferences()[4].generation).toBe(0)

    expect(pt.getPageReferences()[5].obj).toBe(122)
    expect(pt.getPageReferences()[5].generation).toBe(0)

    // /Pages obj: 161 0
    expect(pt.getPageReferences()[6].obj).toBe(156)
    expect(pt.getPageReferences()[6].generation).toBe(0)

    expect(pt.getPageReferences()[7].obj).toBe(193)
    expect(pt.getPageReferences()[7].generation).toBe(0)

    expect(pt.getPageReferences()[8].obj).toBe(196)
    expect(pt.getPageReferences()[8].generation).toBe(0)

    expect(pt.getPageReferences()[9].obj).toBe(202)
    expect(pt.getPageReferences()[9].generation).toBe(0)

    expect(pt.getPageReferences()[10].obj).toBe(217)
    expect(pt.getPageReferences()[10].generation).toBe(0)

    expect(pt.getPageReferences()[11].obj).toBe(787)
    expect(pt.getPageReferences()[11].generation).toBe(0)

    // /Pages obj: 792
    expect(pt.getPageReferences()[12].obj).toBe(790)
    expect(pt.getPageReferences()[12].generation).toBe(0)

    expect(pt.getPageReferences()[13].obj).toBe(966)
    expect(pt.getPageReferences()[13].generation).toBe(0)
})

test('getPage', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let pg = doc.getPage(0)

    expect(pg.hasAnnotsField).toBeTruthy()

    expect(pg.object_id).toBeDefined()
    expect(pg.object_id && pg.object_id.obj).toBe(3)
    expect(pg.object_id && pg.object_id.generation).toBe(0)

    expect(pg.annots.length).toBe(2)

    expect(pg.annots[0].obj).toBe(6)
    expect(pg.annots[0].generation).toBe(0)

    expect(pg.annots[1].obj).toBe(8)
    expect(pg.annots[1].generation).toBe(0)
})

test('extractAnnotations', () => {
    let doc = new PDFDocumentParser(new Uint8Array(testDocument))

    let annots = doc.extractAnnotations(undefined!)

    expect(annots[0].length).toBe(2)

    doc = new PDFDocumentParser(new Uint8Array(testDocument2))

    annots = doc.extractAnnotations(undefined!)

    expect(annots[0].length).toBe(0)
})

test('ParseRC4EncryptedRevision3V2Standard', () => {
    /**
     * Encrypted PDF
     * /V 2
     * /R 3
     * /Length 128
     * /Filter /Standard
     *
     * ==> RC4 128 bit = 16 byte key length
     * */
    let doc = new PDFDocumentParser(new Uint8Array(loadFromFile("./test_documents/test17.pdf")), "", "123")
    let annotations = doc.extractAnnotations(undefined!)[0]
    expect(annotations[0].object_id!.obj).toBe(7)
    expect(annotations[0].object_id!.generation).toBe(0)
    expect(annotations[0].type).toBe('/Highlight')
    expect(annotations[0].page).toBe(0)
    expect(annotations[0].rect).toEqual([69.697, 47.4148, 96.4646, 58.2598])
    expect(annotations[0].border).toEqual([0, 0, 1])
    expect(annotations[0].color).toEqual([1, 1, 0])
    expect(annotations[0].updateDate).toBe("D:20190101153417")

    expect(annotations[1].object_id!.obj).toBe(8)
    expect(annotations[1].object_id!.generation).toBe(0)
    expect(annotations[1].type).toBe('/Text')
    expect(annotations[1].page).toBe(0)
    expect(annotations[1].rect).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])
    expect(annotations[1].border).toEqual([0, 0, 1])
    expect(annotations[1].color).toEqual([1, 1, 0])
    expect(annotations[1].updateDate).toBe("D:20190101154225")
    expect(annotations[1].contents).toBe("Pop up note")
    expect((annotations[1] as MarkupAnnotationObj).author).toBe("highway")
})

test('parseDocument_test18.pdf', () => {
    let doc = new PDFDocumentParser(new Uint8Array(loadFromFile("./test_documents/test18.pdf")), "123", "")
    let annotations = doc.extractAnnotations(undefined!)
    console.log(annotations)
})

test('parseContentStream_1', () => {
    /**
     *
     *   /Tx BMC
     *    q
     *   1.000000 0.000000 0.000000 1.000000 0.000000 0.000000 cm
     *   0 0 0 rg
     *   BT
     *   1 0 0 1 214.613 780.328 Tm
     *   /Helvetica_0 18 Tf
     *   (a) Tj
     *   9.99 0 Td
     *   (n) Tj
     *   9.99 0 Td
     *   (n) Tj
     *   9.99 0 Td
     *   (o) Tj
     *   9.99 0 Td
     *   (ta) Tj
     *   14.994 0 Td
     *   (ti) Tj
     *   8.982 0 Td
     *   (o) Tj
     *   9.99 0 Td
     *   (n) Tj
     *   9.99 0 Td
     *   ( te) Tj
     *   19.998 0 Td
     *   (st) Tj
     *   ET
     *   Q
     *   EMC
     * */
    let data = new Uint8Array([ 47, 84, 120, 32, 66, 77, 67, 10, 32, 113, 10, 49, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 49, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 48, 46, 48, 48, 48, 48, 48, 48, 32, 99, 109, 10, 48, 32, 48, 32, 48, 32, 114, 103, 10, 66, 84, 10, 49, 32, 48, 32, 48, 32, 49, 32, 50, 49, 52, 46, 54, 49, 51, 32, 55, 56, 48, 46, 51, 50, 56, 32, 84, 109, 10, 47, 72, 101, 108, 118, 101, 116, 105, 99, 97, 95, 48, 32, 49, 56, 32, 84, 102, 10, 40, 97, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 111, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 116, 97, 41, 32, 84, 106, 10, 49, 52, 46, 57, 57, 52, 32, 48, 32, 84, 100, 10, 40, 116, 105, 41, 32, 84, 106, 10, 56, 46, 57, 56, 50, 32, 48, 32, 84, 100, 10, 40, 111, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 110, 41, 32, 84, 106, 10, 57, 46, 57, 57, 32, 48, 32, 84, 100, 10, 40, 32, 116, 101, 41, 32, 84, 106, 10, 49, 57, 46, 57, 57, 56, 32, 48, 32, 84, 100, 10, 40, 115, 116, 41, 32, 84, 106, 10, 69, 84, 10, 81, 10, 69, 77, 67, 10])
    let content_stream : ContentStream = ContentStreamParser.extract(data)

    expect(content_stream.operators[0] instanceof MarkedContent).toBeTruthy()
    expect(content_stream.operators[0].name).toBe("BMC")
    expect(content_stream.operators[0].parameters.length).toBe(1)
    expect(content_stream.operators[0].parameters[0]).toBe("/Tx")
    expect(content_stream.operators[0].operators.length).toBe(5)

    expect(content_stream.operators[0].operators[0].name).toBe("q")
    expect(content_stream.operators[0].operators[0].parameters.length).toBe(0)

    expect(content_stream.operators[0].operators[1].name).toBe("cm")
    expect(content_stream.operators[0].operators[1].parameters.length).toBe(6)
    expect(content_stream.operators[0].operators[1].parameters[0]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[1]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[2]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[3]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[4]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[5]).toBe(0)

    expect(content_stream.operators[0].operators[2].name).toBe("rg")
    expect(content_stream.operators[0].operators[2].parameters.length).toBe(3)
    expect(content_stream.operators[0].operators[2].parameters[0]).toBe(0)
    expect(content_stream.operators[0].operators[2].parameters[1]).toBe(0)
    expect(content_stream.operators[0].operators[2].parameters[2]).toBe(0)

    expect(content_stream.operators[0].operators[3] instanceof TextObject).toBeTruthy()
    expect(content_stream.operators[0].operators[3].operators.length).toBe(21)

    expect(content_stream.operators[0].operators[4].name).toBe("Q")
})

test('parseContentStream_2', () => {
    /**
     *
     * /F1 1 Tf
     *   24 0 0 24 260 600 Tm
     *   (Hello World)Tj
     * */
    let data = new Uint8Array([
        10,  47,  70,  49,  32,  49,  32, 84, 102,  10,
        50,  52,  32,  48,  32,  48,  32, 50,  52,  32,
        50,  54,  48,  32,  54,  48,  48, 32,  84, 109,
        10,  40,  72, 101, 108, 108, 111, 32,  87, 111,
        114, 108, 100,  41,  84, 106,  10
    ])

    let content_stream : ContentStream = ContentStreamParser.extract(data)

    expect(content_stream.operators[0].name).toBe("Tf")
    expect(content_stream.operators[0].parameters[0]).toBe("/F1")
    expect(content_stream.operators[0].parameters[1]).toBe(1)

    expect(content_stream.operators[1].name).toBe("Tm")
    expect(content_stream.operators[1].parameters[0]).toBe(24)
    expect(content_stream.operators[1].parameters[1]).toBe(0)
    expect(content_stream.operators[1].parameters[2]).toBe(0)
    expect(content_stream.operators[1].parameters[3]).toBe(24)
    expect(content_stream.operators[1].parameters[4]).toBe(260)
    expect(content_stream.operators[1].parameters[5]).toBe(600)

    expect(content_stream.operators[2].name).toBe("Tj")
    expect(content_stream.operators[2].parameters[0]).toBe("Hello World")
})

test('parseContentStream_3', () => {
    // BT
    //     /F1 24 Tf
    //     1 0 0 1 100 150 Tm
    //     (Big Text)Tj
    //
    //     /F1 12 Tf
    //     1 0 0 1 100 100 Tm
    //     (Small Text)Tj
    // ET

    let data = new Uint8Array([
        10,  66,  84,  10,  32,  32,  32, 32,  47,  70,  49,  32,
        50,  52,  32,  84, 102,  10,  32, 32,  32,  32,  49,  32,
        48,  32,  48,  32,  49,  32,  49, 48,  48,  32,  49,  53,
        48,  32,  84, 109,  10,  32,  32, 32,  32,  40,  66, 105,
        103,  32,  84, 101, 120, 116,  41, 84, 106,  10,  10,  32,
        32,  32,  32,  47,  70,  49,  32, 49,  50,  32,  84, 102,
        10,  32,  32,  32,  32,  49,  32, 48,  32,  48,  32,  49,
        32,  49,  48,  48,  32,  49,  48, 48,  32,  84, 109,  10,
        32,  32,  32,  32,  40,  83, 109, 97, 108, 108,  32,  84,
        101, 120, 116,  41,  84, 106,  10, 69,  84,  10
    ])
    let content_stream : ContentStream = ContentStreamParser.extract(data)

    expect(content_stream.operators[0] instanceof TextObject).toBeTruthy()
    expect(content_stream.operators[0].operators.length).toBe(6)
    expect(content_stream.operators[0].operators[0].name).toBe("Tf")
    expect(content_stream.operators[0].operators[0].parameters[0]).toBe("/F1")
    expect(content_stream.operators[0].operators[0].parameters[1]).toBe(24)

    expect(content_stream.operators[0].operators[1].name).toBe("Tm")
    expect(content_stream.operators[0].operators[1].parameters[0]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[1]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[2]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[3]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[4]).toBe(100)
    expect(content_stream.operators[0].operators[1].parameters[5]).toBe(150)

    expect(content_stream.operators[0].operators[2].name).toBe("Tj")
    expect(content_stream.operators[0].operators[2].parameters[0]).toBe("Big Text")

    expect(content_stream.operators[0].operators[3].name).toBe("Tf")
    expect(content_stream.operators[0].operators[3].parameters[0]).toBe("/F1")
    expect(content_stream.operators[0].operators[3].parameters[1]).toBe(12)

    expect(content_stream.operators[0].operators[4].name).toBe("Tm")
    expect(content_stream.operators[0].operators[4].parameters[0]).toBe(1)
    expect(content_stream.operators[0].operators[4].parameters[1]).toBe(0)
    expect(content_stream.operators[0].operators[4].parameters[2]).toBe(0)
    expect(content_stream.operators[0].operators[4].parameters[3]).toBe(1)
    expect(content_stream.operators[0].operators[4].parameters[4]).toBe(100)
    expect(content_stream.operators[0].operators[4].parameters[5]).toBe(100)

    expect(content_stream.operators[0].operators[5].name).toBe("Tj")
    expect(content_stream.operators[0].operators[5].parameters[0]).toBe("Small Text")
})

test('parseContentStream_4', () => {
    // BT
    //     /F1 48 Tf
    //     1 0 0 1 10 700 Tm  % some random comment
    //     (1)Tj
    //     % some random comment
    //     0 -50 Td
    //     (2)Tj
    //     50 50 Td
    //     (3)Tj % some other random comment
    //     0 -50 Td
    //     (4)Tj
    // ET
    let data = new Uint8Array([
        10,  66,  84,  10,  32,  32,  32,  32,  47,  70,  49,  32,
        52,  56,  32,  84, 102,  10,  32,  32,  32,  32,  49,  32,
        48,  32,  48,  32,  49,  32,  49,  48,  32,  55,  48,  48,
        32,  84, 109,  32,  32,  37,  32, 115, 111, 109, 101,  32,
        114,  97, 110, 100, 111, 109,  32,  99, 111, 109, 109, 101,
        110, 116,  10,  32,  32,  32,  32,  40,  49,  41,  84, 106,
        10,  32,  32,  32,  32,  37,  32, 115, 111, 109, 101,  32,
        114,  97, 110, 100, 111, 109,  32,  99, 111, 109, 109, 101,
        110, 116,  10,  32,  32,  32,  32,  48,  32,  45,  53,  48,
        32,  84, 100,  10,  32,  32,  32,  32,  40,  50,  41,  84,
        106,  10,  32,  32,  32,  32,  53,  48,  32,  53,  48,  32,
        84, 100,  10,  32,  32,  32,  32,  40,  51,  41,  84, 106,
        32,  37,  32, 115, 111, 109, 101,  32, 111, 116, 104, 101,
        114,  32, 114,  97, 110, 100, 111, 109,  32,  99, 111, 109,
        109, 101, 110, 116,  10,  32,  32,  32,  32,  48,  32,  45,
        53,  48,  32,  84, 100,  10,  32,  32,  32,  32,  40,  52,
        41,  84, 106,  10,  69,  84,  10
    ])

    let content_stream : ContentStream = ContentStreamParser.extract(data)
    expect(content_stream.operators[0] instanceof TextObject).toBeTruthy()
    expect(content_stream.operators[0].operators.length).toBe(9)

    expect(content_stream.operators[0].operators[0].name).toBe("Tf")
    expect(content_stream.operators[0].operators[0].parameters[0]).toBe("/F1")
    expect(content_stream.operators[0].operators[0].parameters[1]).toBe(48)

    expect(content_stream.operators[0].operators[1].name).toBe("Tm")
    expect(content_stream.operators[0].operators[1].parameters[0]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[1]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[2]).toBe(0)
    expect(content_stream.operators[0].operators[1].parameters[3]).toBe(1)
    expect(content_stream.operators[0].operators[1].parameters[4]).toBe(10)
    expect(content_stream.operators[0].operators[1].parameters[5]).toBe(700)

    expect(content_stream.operators[0].operators[2].name).toBe("Tj")
    expect(content_stream.operators[0].operators[2].parameters[0]).toBe("1")

    expect(content_stream.operators[0].operators[3].name).toBe("Td")
    expect(content_stream.operators[0].operators[3].parameters[0]).toBe(0)
    expect(content_stream.operators[0].operators[3].parameters[1]).toBe(-50)

    expect(content_stream.operators[0].operators[4].name).toBe("Tj")
    expect(content_stream.operators[0].operators[4].parameters[0]).toBe("2")

    expect(content_stream.operators[0].operators[5].name).toBe("Td")
    expect(content_stream.operators[0].operators[5].parameters[0]).toBe(50)
    expect(content_stream.operators[0].operators[5].parameters[1]).toBe(50)

    expect(content_stream.operators[0].operators[6].name).toBe("Tj")
    expect(content_stream.operators[0].operators[6].parameters[0]).toBe("3")

    expect(content_stream.operators[0].operators[7].name).toBe("Td")
    expect(content_stream.operators[0].operators[7].parameters[0]).toBe(0)
    expect(content_stream.operators[0].operators[7].parameters[1]).toBe(-50)

    expect(content_stream.operators[0].operators[8].name).toBe("Tj")
    expect(content_stream.operators[0].operators[8].parameters[0]).toBe("4")
})

test('getFonts', () => {
    let doc = new PDFDocumentParser(new Uint8Array(loadFromFile("./test_documents/test.pdf")))
    let fontManager = doc.getFonts()

    expect(fontManager.fonts[0].object_id!.obj).toBe(4)
    expect(fontManager.fonts[0].object_id!.generation).toBe(0)
    expect(fontManager.fonts[0].fontType).toBe(1)
    expect(fontManager.fonts[0].name).toBe("/F1")
    expect(fontManager.fonts[0].baseFont).toBe("/Times-Roman")
    expect(fontManager.fonts[0].firstChar).toBe(32)
    expect(fontManager.fonts[0].lastChar).toBe(251)
    expect(fontManager.fonts[0].widths!.length).toBe(315)
})
