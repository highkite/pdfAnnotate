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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("2362469e826451a906304dd1e2b6de2b")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("1fb3b10a51b258e89324d79f84c9a2ae")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("aa0d5cbdc84466bf77f30697461ce01e")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("370b10eb7e3af868948654a9042d75e0")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("370b10eb7e3af868948654a9042d75e0")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7ee1ce66e312a44a89cbf46d8bc9578c")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b359c5cc2b00b8b77d5fbd8c43bcc8c1")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("8899313ae2f103c4f55f56bdfb64b7d2")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("0ad320120fd24cb887513cb334feafa3")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("e04728bae33153e60a54d798224db4e9")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("2e43c2988ad3bc4e480efaf8cacb83a4")
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

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("26c923aef91b3cde0a99410b33279522")
})
