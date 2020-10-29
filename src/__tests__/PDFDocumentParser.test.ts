import { PDFDocumentParser, Page, Annotation } from '../parser';
import { testDocument, testDocument2 } from './Data';
import { pageObject_string, loadFromFile } from './Data2';
import { Util } from '../util';

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

    let annots = doc.extractAnnotations()

    expect(annots[0].length).toBe(2)

    doc = new PDFDocumentParser(new Uint8Array(testDocument2))

    annots = doc.extractAnnotations()

    expect(annots[0].length).toBe(0)
})

test('AnnotationExtract', () => {
    let data = new Uint8Array([49, 48, 57, 32, 48, 32, 111, 98, 106, 32, 60, 60, 47, 84, 121, 112, 101, 32, 47, 65, 110, 110, 111, 116, 32, 47, 82, 101, 99, 116, 32, 91, 53, 49, 56, 46, 54, 49, 54, 55, 53, 54, 32, 51, 56, 54, 46, 55, 55, 50, 52, 48, 56, 32, 53, 51, 55, 46, 48, 53, 51, 50, 53, 54, 32, 51, 56, 57, 46, 53, 56, 48, 56, 52, 32, 93, 32, 47, 83, 117, 98, 116, 121, 112, 101, 32, 47, 73, 110, 107, 32, 47, 73, 110, 107, 76, 105, 115, 116, 32, 91, 91, 53, 49, 57, 46, 48, 49, 55, 54, 49, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 49, 57, 46, 52, 49, 56, 52, 55, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 48, 46, 54, 50, 49, 48, 53, 54, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 49, 46, 52, 50, 50, 49, 54, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 50, 46, 50, 50, 51, 56, 56, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 51, 46, 48, 50, 53, 54, 48, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 51, 46, 56, 50, 55, 51, 50, 52, 32, 51, 56, 56, 46, 55, 55, 55, 55, 53, 50, 32, 53, 50, 53, 46, 48, 50, 57, 50, 57, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 53, 46, 56, 51, 49, 48, 49, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 54, 46, 54, 51, 50, 55, 51, 50, 32, 51, 56, 56, 46, 51, 55, 55, 32, 53, 50, 55, 46, 52, 51, 52, 52, 53, 50, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 55, 46, 56, 51, 52, 55, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 56, 46, 54, 51, 54, 52, 50, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 50, 57, 46, 48, 51, 55, 50, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 50, 57, 46, 52, 51, 56, 49, 52, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 50, 57, 46, 56, 51, 57, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 48, 46, 50, 51, 57, 56, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 48, 52, 48, 57, 54, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 52, 52, 49, 56, 50, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 49, 46, 56, 52, 50, 54, 56, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 50, 52, 51, 53, 52, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 54, 52, 52, 52, 48, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 50, 46, 54, 52, 52, 52, 48, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 48, 52, 53, 50, 54, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 52, 52, 54, 49, 50, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 51, 46, 56, 52, 54, 57, 56, 56, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 52, 46, 50, 52, 55, 56, 52, 56, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 52, 46, 54, 52, 56, 48, 57, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 48, 52, 56, 57, 53, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 52, 52, 57, 56, 49, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 56, 53, 48, 54, 55, 54, 32, 51, 56, 55, 46, 53, 55, 52, 55, 48, 52, 32, 53, 51, 53, 46, 56, 53, 48, 54, 55, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 53, 51, 54, 46, 50, 53, 49, 53, 51, 54, 32, 51, 56, 55, 46, 57, 55, 53, 52, 53, 54, 32, 93, 32, 93, 32, 47, 77, 32, 40, 68, 58, 50, 48, 49, 56, 48, 53, 48, 51, 48, 57, 53, 50, 50, 54, 41, 32, 47, 84, 32, 40, 112, 101, 116, 101, 114, 41, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 40, 112, 97, 114, 107, 101, 114, 41, 32, 47, 78, 77, 32, 40, 111, 107, 117, 108, 97, 114, 45, 123, 98, 99, 99, 51, 53, 48, 98, 98, 45, 50, 48, 49, 54, 45, 52, 102, 102, 57, 45, 57, 102, 54, 97, 45, 102, 53, 57, 97, 99, 98, 97, 51, 55, 55, 52, 50, 125, 41, 32, 47, 70, 32, 52, 32, 47, 67, 32, 91, 48, 32, 49, 32, 48, 32, 93, 32, 47, 67, 65, 32, 49, 32, 47, 66, 111, 114, 100, 101, 114, 32, 91, 48, 32, 48, 32, 50, 32, 93, 32, 47, 80, 32, 50, 32, 48, 32, 82, 32, 62, 62, 32, 101, 110, 100, 111, 98, 106, 10])
    let annot = new Annotation(new Uint8Array(data))
    //console.log(JSON.stringify(annot, null, 2))
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
    let annotations = doc.extractAnnotations()[0]
    expect(annotations[0].object_id!.obj).toBe(7)
    expect(annotations[0].object_id!.generation).toBe(0)
    expect(annotations[0].type).toBe('/Highlight')
    expect(annotations[0].page).toBe(0)
    expect(annotations[0].rect).toEqual([69.697, 47.4148, 96.4646, 58.2598])
    expect(annotations[0].border).toEqual([0, 0, 1])
    expect(annotations[0].color).toEqual([1, 1, 0])
    expect(annotations[0].updateDate).toBe("D:20190101153417")
    expect(annotations[0].quadPoints).toEqual([69.9398, 58.1418, 96.5932, 58.1418, 69.9398, 47.3526, 96.5932, 47.3526])

    expect(annotations[1].object_id!.obj).toBe(8)
    expect(annotations[1].object_id!.generation).toBe(0)
    expect(annotations[1].type).toBe('/Text')
    expect(annotations[1].page).toBe(0)
    expect(annotations[1].rect).toEqual([77.7777777778, 83.7931904161, 83.7777777778, 89.7856242119])
    expect(annotations[1].border).toEqual([0, 0, 1])
    expect(annotations[1].color).toEqual([1, 1, 0])
    expect(annotations[1].updateDate).toBe("D:20190101154225")
    expect(annotations[1].contents).toBe("Pop up note")
    expect(annotations[1].author).toBe("highway")
    expect(Util.convertStringToAscii(annotations[1].id)).toEqual([111, 107, 117, 108, 97, 114, 45, 123, 53, 53, 49, 102, 49, 99, 49, 99, 45, 50, 50, 52, 100, 45, 52, 57, 56, 50, 45, 98, 53, 99, 101, 45, 51, 52, 83, 52, 52, 56, 51, 98, 102, 56, 100, 51, 125, 65, 127, 116])
})

test('parseDocument_test10.pdf', () => {
    let doc = new PDFDocumentParser(new Uint8Array(loadFromFile("./test_documents/pdfs/S2.pdf")))
    let annotations = doc.extractAnnotations()
    console.log(annotations)
})
