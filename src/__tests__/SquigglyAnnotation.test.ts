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

test('SquigglyAnnotation', () => {
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
    factory.createSquigglyAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("0ded150cd959a21408c77b7eebbfd25c")
})

test('SquigglyAnnotation_opacity', () => {
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
    factory.createSquigglyAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b66f214ed8283331ebfa3f08ec3e836d")
})

test('SquigglyAnnotation_color', () => {
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
    factory.createSquigglyAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("dedf82cc0a630833aa6034da4a6410cd")
})

test('SquigglyAnnotation_QuadPoints', () => {
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
    factory.createSquigglyAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("65bfc7631d2188d38e62ff6005b3a96c")
})

test('SquigglyAnnotation_appearance_stream', () => {
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
    let ta = factory.createSquigglyAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7f27e5817195764d4cbbbc14fc5eb802")
})

test('SquigglyAnnotation_appearance_stream_opacity', () => {
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
    let ta = factory.createSquigglyAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7d8258dbe28c731514bfb8fed6138418")
})

test('SquigglyAnnotation_appearance_stream_QuadPoints', () => {
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
    let ta = factory.createSquigglyAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("5d8d679e83704c923f029760eee16ae5")
})
