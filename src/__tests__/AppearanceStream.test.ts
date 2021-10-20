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

        expect(CryptoUtil.MD5Hex(factory.write())).toBe("6552a95af8bb210823b201ac4389d0cf")
    }).catch(console.log)
})
