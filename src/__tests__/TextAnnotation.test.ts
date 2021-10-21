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
    //let state = getState()

    //if (state) {
    //    val.state = state
    //}

    //let statemodel = getStateModel()

    //if (statemodel) {
    //    val.stateModel = statemodel
    //}
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
