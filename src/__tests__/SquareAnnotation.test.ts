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

test('SquareAnnotation', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("f29f7d0b1f7ea80a8ec743f95c7e6f59")
})

test('SquareAnnotation_line_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("a4cdf78c0ff2d7c6b4d087bf443e4cda")
})

test('SquareAnnotation_fill_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        fill: color
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("83c88fa17cd5f2e250d460c6a767b9a2")
})

test('SquareAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    let ta = factory.createSquareAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("35921ca0e30d79198f1fb7f09e206705")
})

test('SquareAnnotation_appearance_stream_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}
    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
        fill: color
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("af7e6f95f72524de5c62e2d590a70e40")
})

test('SquareAnnotation_appearance_stream_border_only', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("df7d928affb1bef79d5196e6631eb652")
})

test('SquareAnnotation_appearance_stream_opacity', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}
    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        opacity: 0.5,
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
        fill: color
    }
    factory.createSquareAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("8ce8aeba63f8fd46e3317d78f93c5b0c")
})
