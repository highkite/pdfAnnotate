import { loadFromFile } from './Data2';
import { AnnotationFactory } from '../annotation';
import { CryptoUtil } from '../crypto-util';
import { TextJustification, FreeTextType } from '../annotations/freetext_annotation';
import { LineEndingStyle } from '../annotations/annotation_types';
import { Util } from '../util';
import { XObjectObj } from '../appearance-stream';

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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("533f34dca7ce4b0faa390c3a8ce89c31")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("88f1244c3b125a61ee4f55d83eaec648")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("fcd57e7410c40cc5903af5bcf3e861f5")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cb924478b6e40a4a167696165a033791")
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
test('FreeTextAnnotation_font_standard_not_available', () => {
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
        font: "Helvetica"
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cb924478b6e40a4a167696165a033791")
})

test('FreeTextAnnotation_font_size_change', () => {
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
        font: "Helvetica",
        fontSize: 3
    }
    factory.createFreeTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("ee93e3de9965546d03bcb4122157310d")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cec8ff07992a3dbe04a3af63af45bb53")
})

test('FreeTextAnnotation_appearance_stream_centered', () => {
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
        color: textAnnotColor,
        textJustification: TextJustification.Centered
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cec8ff07992a3dbe04a3af63af45bb53")
})

test('FreeTextAnnotation_appearance_stream_right', () => {
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
        color: textAnnotColor,
        textJustification: TextJustification.Right
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cec8ff07992a3dbe04a3af63af45bb53")
})

test('FreeTextAnnotation_appearance_stream_hello_world', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [30, 30, 80, 80],
        contents: "hello world",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        fontSize: 18
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cec8ff07992a3dbe04a3af63af45bb53")
})

test('FreeTextAnnotation_appearance_stream_font_size', () => {
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
        color: textAnnotColor,
        fontSize: 3
    }
    let ta = factory.createFreeTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("f18e72d1d0d022721137da84e00d982c")
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
