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

test('PolyLineAnnotation', () => {
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
    factory.createPolyLineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("f8a838fe46e0623d643ad80942201a41")
})

test('PolyLineAnnotation_line_color', () => {
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
    factory.createPolyLineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("c2d8a03ab3524e8c9efa8f23661c6398")
})

test('PolyLineAnnotation_appearance_stream', () => {
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
    let ta = factory.createPolyLineAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("eba1503435da21e55b8e317019a9397e")
})

test('PolyLineAnnotation_appearance_stream_color', () => {
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
    factory.createPolyLineAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("87e4e5f87b02aa8835b627f83c223a35")
})
