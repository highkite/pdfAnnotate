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

test('PolygonAnnotation', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("fb9ea692dd977cf59d5fa0181670f712")
})

test('PolygonAnnotation_line_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("888d1ef8005b4bf76ba7ab270d0e31a7")
})

test('PolygonAnnotation_fill_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        fill: color
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("5f233321323b07c869d7adab664f8a9b")
})

test('PolygonAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    let ta = factory.createPolygonAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("e8726d2938b56f5fd2a2ebec080747c5")
})

test('PolygonAnnotation_appearance_stream_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}
    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
        fill: color
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("264731d9b8ad40eef3ab70a7b8867323")
})

test('PolygonAnnotation_appearance_stream_border_only', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("ba59934c28dceb295db838de8326df9d")
})

test('PolygonAnnotation_appearance_stream_opacity', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}
    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        vertices: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        opacity: 0.5,
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
        fill: color
    }
    factory.createPolygonAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("6ff070a2f00ebffaaf88c303015dffa2")
})
