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

test('CircleAnnotation', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("054d12d982428bada01974879db1adf4")
})

test('CircleAnnotation_oval', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 80, 100],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("75d47c704c377e481f0b9a769d373f03")
})

test('CircleAnnotation_line_color', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("2e1dd5232130da6dad3aa4dd52eb9503")
})

test('CircleAnnotation_fill_color', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("4c240e3237389186d72031c6d11f1f0f")
})

test('CircleAnnotation_appearance_stream', () => {
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
    let ta = factory.createCircleAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("38a0721e3023fc6d1a6f8b8a52561c30")
})

test('CircleAnnotation_appearance_stream_oval', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let val = {
        page: 0,
        rect: [50, 50, 80, 100],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123"
    }
    let ta = factory.createCircleAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("1efacb2a6c6f157fa6d25a3a87680b41")
})

test('CircleAnnotation_appearance_stream_color', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("9b686e0ae27c3a45f71399b188bcd6da")
})

test('CircleAnnotation_appearance_stream_border_only', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("f69791a41f344a5dbad2059e6f558638")
})

test('CircleAnnotation_appearance_stream_opacity', () => {
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
    factory.createCircleAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("e4370574046a301bc67b03d99f209885")
})
