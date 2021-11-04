import { loadFromFile } from './Data2';
import { AnnotationFactory } from '../annotation';
import { CryptoUtil } from '../crypto-util';
import { TextJustification, FreeTextType } from '../annotations/freetext_annotation';
import { LineEndingStyle } from '../annotations/annotation_types';

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

test('FreeTextAnnotation', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("0dd4fb94c5588de0f3c92ca49c3cdbeb")
})

test('FreeTextAnnotation_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("2f1b132bcac43e29fd9d20eb09a0ed42")
})

test('FreeTextAnnotation_text_justification', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        textJustification: TextJustification.Centered
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("96ed5ffab06f1ec7a648bb7280b25c6d")
})

test('FreeTextAnnotation_callout_line', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [30, 30, 50, 50],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        freeTextType: FreeTextType.FreeTextCallout,
        calloutLine: [20, 20, 40, 40],
        lineEndingStyle: LineEndingStyle.RClosedArrow
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("eb5e713b6d2be5c96e9e7279bcf36ad8")
})
