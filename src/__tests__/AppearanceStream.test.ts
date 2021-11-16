import { loadFromFile } from './Data2';
import { AnnotationFactory } from '../annotation';
import { CryptoUtil } from '../crypto-util';
import { ContentStream } from '../content-stream';

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

test('takeAppearanceStreamFrom', () => {
    let data = new Uint8Array(loadFromFile("./test_documents/test3.pdf"))
    let factory = new AnnotationFactory(data)
    factory.getAnnotations().then((annots : any[]) => {
        let annotWithAppStream = annots[0][17]

        let fta = factory.createFreeTextAnnotation({
            page: 0,
            rect: [30, 30, 50, 50],
            contents: "Test123",
            updateDate: new Date(2021, 1, 1),
            id: "test-id-123",
            author: "John",
            takeAppearanceStreamFrom: annotWithAppStream
        })

        expect(CryptoUtil.MD5Hex(factory.write())).toBe("cfd954d86f69eb742ceddb95f41e4b73")
    }).catch((err) => {
        fail(err)
    })
})

test('content-stream', () => {
    let cs: ContentStream = new ContentStream()
    cs.addOperator("BMC", ["/Tx"])

    expect(cs.writeContentStream()).toEqual([47, 84, 120, 32, 66, 77, 67, 10])
})

test('content-stream_2', () => {
    let cs: ContentStream = new ContentStream()
    let op = cs.addMarkedContentObject(["/Tx"])
    let op2 = op.addGraphicObject()
    op2.addOperator("cm", [1, 0, 0, 1, 0, 0])

    expect(cs.writeContentStream()).toEqual([47, 84, 120, 32, 66, 77, 67, 10, 113, 10, 49, 32, 48, 32, 48, 32, 49, 32, 48, 32, 48, 32, 99, 109, 10, 81, 10, 69, 77, 67, 10])
})
