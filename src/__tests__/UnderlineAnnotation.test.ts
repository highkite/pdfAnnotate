import { loadFromFile } from './Data2';
import { AnnotationFactory } from '../annotation';
import { CryptoUtil } from '../crypto-util';
import { AnnotationIcon, AnnotationStateModel } from '../annotations/text_annotation';
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

test('UnderlineAnnotation', () => {
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
    factory.createUnderlineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("75c2d2a701de338da18c51b0cf36b195")
})

test('UnderlineAnnotation_opacity', () => {
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
    factory.createUnderlineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("9adc072785be9b6c65981821be513cc7")
})

test('UnderlineAnnotation_color', () => {
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
    factory.createUnderlineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("62c17e970ad43e156a075c0d45cdaafb")
})

test('UnderlineAnnotation_QuadPoints', () => {
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
    factory.createUnderlineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("074b7f2e8296cc8e89161654fa00dee0")
})

test('UnderlineAnnotation_appearance_stream', () => {
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
    let ta = factory.createUnderlineAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("cfaada6450e5715a9f02ab5763fde365")
})

test('UnderlineAnnotation_appearance_stream_opacity', () => {
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
    let ta = factory.createUnderlineAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("3dc39d3fd6cce0e21b7428e4a0cb0ca7")
})

test('UnderlineAnnotation_appearance_stream_QuadPoints', () => {
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
    let ta = factory.createUnderlineAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("e61d82d4630128d6e24ff6465cb79747")
})
