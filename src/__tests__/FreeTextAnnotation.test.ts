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

/**
 * Choose times-roman font which is a standard font available in test.pdf
 * */
test('FreeTextAnnotation_font_standard_available', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = undefined

    let val = {
        page: 0,
        rect: [30, 30, 50, 50],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        font: "Times-Roman"
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7ee05ab6fde7d10d112abef9092ab029")
})

/**
 * Choose times-roman font which is a standard font available in test.pdf
 * */
test('FreeTextAnnotation_font_standard_available_slash', () => {
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
        textColor: {r: 1, g: 0, b:0},
        font: "/Times-Roman"
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("af5faae7900e225ffc95c661d50ed278")
})

/**
 * Choose times-roman font which is a standard font available in test.pdf
 * */
test('FreeTextAnnotation_font_standard_available_name_selected', () => {
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
        lineEndingStyle: LineEndingStyle.RClosedArrow,
        font: "/F1"
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b6254b558755543f0bc6c6774211a1fc")
})

/**
 * Choose a font that was fetched with getFonts() method
 * */
test('FreeTextAnnotation_font_obj_available', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    factory.getFonts().then((fonts) => {

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
            lineEndingStyle: LineEndingStyle.RClosedArrow,
            font: fonts[0]
        }
        factory.createFreeTextAnnotation(val)

        expect(CryptoUtil.MD5Hex(factory.write())).toBe("b6254b558755543f0bc6c6774211a1fc")
    }).catch(console.log)
})

/**
 * Choose Helvetica font which is a standard font NOT available in test.pdf
 * */
test.only('FreeTextAnnotation_font_standard_not_available', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    debugger;
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
        lineEndingStyle: LineEndingStyle.RClosedArrow,
        font: "Helvetica"
    }
    factory.createFreeTextAnnotation(val)
    factory.save("test123.pdf")

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b6254b558755543f0bc6c6774211a1fc")
})

test('FreeTextAnnotation_font_size_change', () => {
    fail("Not yet implemented")
})

test('FreeTextAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [30, 30, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("6547edef60d260d7df278817dcb9aec2")
})

test('FreeTextAnnotation_appearance_stream_long_text', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [30, 30, 200, 80],
        contents: "Beware of bugs in the above code; I have only proved it correct, not tried it.-- Donald E. Knuth",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    factory.save("test123.pdf")

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("eb5e713b6d2be5c96e9e7279bcf36ad8")
})
