import { PDFDocumentParser } from '../parser';
import { testDocument, testDocument2 } from './Data';

test('getFreeObjectId', () => {
        let doc = new PDFDocumentParser(new Int8Array(testDocument))

        let obj_id = doc.getFreeObjectId()

        expect(obj_id.obj).toBe(9)
        expect(obj_id.generation).toBe(0)
        expect(obj_id.reused).toBeFalsy()
})

test('getCatalog', () => {
        let doc = new PDFDocumentParser(new Int8Array(testDocument))

        let catalog = doc.getCatalog()

        let pobj = catalog.getPagesObjectId()

        expect(pobj.obj).toBe(2)
        expect(pobj.generation).toBe(0)
})

test('getPageTree - testDocument', () => {
        let doc = new PDFDocumentParser(new Int8Array(testDocument))

        let pt = doc.getPageTree()

        expect(pt.getPageCount()).toBe(1)
        expect(pt.getPageReferences().length).toBe(1)
        expect(pt.getPageReferences()[0].obj).toBe(3)
        expect(pt.getPageReferences()[0].generation).toBe(0)
})

test('getPageTree - testDocument2', () => {
        let doc = new PDFDocumentParser(new Int8Array(testDocument2))

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

test('getPage',  () => {
        let doc = new PDFDocumentParser(new Int8Array(testDocument))

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
