import { loadFromFile } from './Data2';
import { AnnotationFactory } from '../annotation';
import { CryptoUtil } from '../crypto-util';

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

test('HighlightAnnotation', () => {
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
        color: textAnnotColor,
        open: false,
        opacity: 1,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createHighlightAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("262192c4b82b6e2d8f70477b9d099ce7")
})

test('HighlightAnnotation_opacity', () => {
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
        color: textAnnotColor,
        open: false,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createHighlightAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("39e5ee7e879e14c93cc4b6ef80baf27b")
})

test('HighlightAnnotation_color', () => {
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
        open: false,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createHighlightAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("44bc2bf8675ab797dd549f1f449b7da8")
})

test('HighlightAnnotation_QuadPoints', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        quadPoints: [50, 50, 60, 50, 50, 60, 60, 60, 65, 65, 75, 65, 65, 75, 75, 75],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: false,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createHighlightAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("f100ea840490457474cc8e76c54cdb4d")
})

test('HighlightAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 70, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        color: textAnnotColor,
        id: "test-id-123",
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    let ta = factory.createHighlightAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("a5f0c90cf340c743007feb6999f3550b")
})

test('HighlightAnnotation_appearance_stream_opacity', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 70, 80],
        contents: "Test123",
        author: "John",
        opacity: 0.5,
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        color: textAnnotColor,
        id: "test-id-123",
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    let ta = factory.createHighlightAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("05bae5264c7ae30a195aad01c1d513ca")
})

test('HighlightAnnotation_appearance_stream_QuadPoints', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 70, 80],
        quadPoints: [50, 50, 60, 50, 50, 60, 60, 60, 65, 65, 75, 65, 65, 75, 75, 75],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        color: textAnnotColor,
        id: "test-id-123",
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    let ta = factory.createHighlightAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("e1db7315ced5ff7b16093458ff80afaa")
})
