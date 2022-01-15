import { PDFDocumentParser, Page, Annotation, ContentStreamParser } from '../parser';
import { AnnotationFactory } from '../annotation';
import { pageObject_string, loadFromFile } from './Data2';
import { CryptoUtil } from '../crypto-util';
import { MarkupAnnotationObj } from '../annotations/annotation_types';

// @ts-ignore
const { window } = global

beforeAll(() => {
    // @ts-ignore
    delete global.window
})

afterAll(() => {
    // @ts-ignore
    global.window = window
})

test('encryptionTest17', () => {
    /**
     * Encrypted PDF
     * /V 2
     * /R 3
     * /Length 128
     * /Filter /Standard
     *
     * ==> RC4 128 bit = 16 byte key length
     * */
    let factory = new AnnotationFactory(new Uint8Array(loadFromFile("./test_documents/test17.pdf")), "", "123")
    factory.getAnnotations().then(vals => {
        let annotations = vals[0]
        //let annotations = factory.extractAnnotations(undefined!)[0]
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

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        open: false,
        opacity: 1,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("776c1529e6029153d3958d9dd1d68f48")
})

test('encryptionTest18', () => {
    let factory = new AnnotationFactory(new Uint8Array(loadFromFile("./test_documents/test18.pdf")), "123", "")
    factory.getAnnotations().then(vals => {
        let annotations = vals[0]

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

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        open: false,
        opacity: 1,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b5813cf6be156f22e513f38957de3553")
})
