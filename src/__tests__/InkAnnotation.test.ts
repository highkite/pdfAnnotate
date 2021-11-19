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

test('InkAnnotation', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        inkList: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    factory.createInkAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7e9c948b40e6d43481c8f0c6133dc860")
})

test('InkAnnotation_line_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        inkList: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color
    }
    factory.createInkAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("b752aa76903d2fd34fe41cc5fccc4631")
})

test('InkAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        inkList: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    let ta = factory.createInkAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7726f5fab7cdfc7dcacb07413dca3621")
})

test('InkAnnotation_appearance_stream_color', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let color = {r:1, g:0, b:0}
    let color2 = {r:1, g:1, b:0}

    let val = {
        page: 0,
        rect: [50, 50, 150, 150],
        inkList: [80, 80, 90, 70, 120, 120, 110, 130],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: color2,
        fill: color
    }
    factory.createInkAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("bc151fd7a35a69cfa9125d2356e77d0a")
})
