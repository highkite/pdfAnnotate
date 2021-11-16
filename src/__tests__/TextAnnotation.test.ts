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

test('TextAnnotation', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = undefined

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
        icon: icon,
        opacity: 1,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("df9e346e9f85265d4e4a0a92a396440f")
})

test('TextAnnotation_opacity', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = undefined

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
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("fd363ba8f483c3c5c7aa8e5a9b7bd9f8")
})

test('TextAnnotation_open', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = undefined

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("afed8285fb48058932dca92da8e0a3a2")
})

test('TextAnnotation_icon_comment', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Comment

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("afed8285fb48058932dca92da8e0a3a2")
})

test('TextAnnotation_icon_key', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Key

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("a51e009f300c1ba7ae226d212f11a0e6")
})

test('TextAnnotation_icon_note', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Note

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("3c3867876b19d930eeb681c0df876fdb")
})

test('TextAnnotation_icon_help', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Help

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("df5350c54dae07fff94f991460da40a9")
})

test('TextAnnotation_icon_new_paragraph', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.NewParagraph

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("c683ada1aedb592eb4c42b211333ccbd")
})

test('TextAnnotation_icon_paragraph', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Paragraph

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("9500ca028ac33ea17df1cce8c1f6de93")
})

test('TextAnnotation_icon_insert', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = AnnotationIcon.Insert

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("7c06c4891396bea4e8ff20017e39e5a2")
})

test('TextAnnotation_state_model_marked', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = undefined

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        stateModel: AnnotationStateModel.Marked,
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("afed8285fb48058932dca92da8e0a3a2")
})

test('TextAnnotation_state_model_reviewed', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:0, b:0}
    let icon = undefined

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        stateModel: AnnotationStateModel.Review,
        richtextString: "A very rich text string"
    }
    factory.createTextAnnotation(val)

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("d865f0518a6aa5b15d0292038af28f24")
})

test('TextAnnotation_appearance_stream', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}
    let icon = AnnotationIcon.Note

    let val = {
        page: 0,
        rect: [50, 50, 70, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        color: textAnnotColor,
        id: "test-id-123",
        icon: icon,
        subject: "A subject",
        richtextString: "A very rich text string"
    }
    let ta = factory.createTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("8f2052c05db06ee2e9a6d7f93239b497")
})

test('TextAnnotation_appearance_stream_help', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}
    let icon = AnnotationIcon.Help

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 1,
        subject: "A subject",
        stateModel: AnnotationStateModel.Review,
        richtextString: "A very rich text string"
    }
    let ta = factory.createTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("4744cc80a23d7342b7748397bc430d1e")
})


test('TextAnnotation_appearance_stream_opacity', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test.pdf"))
    let factory = new AnnotationFactory(data)

    let textAnnotColor = {r:1, g:1, b:0}
    let icon = AnnotationIcon.Help

    let val = {
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Test123",
        author: "John",
        updateDate: new Date(2021, 1, 1),
        creationDate: new Date(2021, 1, 1),
        id: "test-id-123",
        color: textAnnotColor,
        open: true,
        icon: icon,
        opacity: 0.5,
        subject: "A subject",
        stateModel: AnnotationStateModel.Review,
        richtextString: "A very rich text string"
    }
    let ta = factory.createTextAnnotation(val)
    ta.createDefaultAppearanceStream()

    expect(CryptoUtil.MD5Hex(factory.write())).toBe("2321171769448158021526b37c48f591")
})
//    factory.save("test123.pdf")
