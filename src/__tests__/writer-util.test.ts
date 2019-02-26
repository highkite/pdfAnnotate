import { WriterUtil } from '../writer-util'
import { Page, ReferencePointer } from '../parser'
import { pageObject_string, pageObject_string_2, decode } from './Data2'

test('writeReferencePointer', () => {
    let refPtr: ReferencePointer = { obj: 1, generation: 2 }

    expect(WriterUtil.writeReferencePointer(refPtr, false)).toEqual([49, 32, 50])

    expect(WriterUtil.writeReferencePointer(refPtr, true)).toEqual([49, 32, 50, 32, 82])
})

test('pad', () => {
    expect(WriterUtil.pad(5, "12")).toEqual([48, 48, 48, 49, 50])
})

test('replaceAnnotsFieldInPageObject_1', () => {
    let data = pageObject_string
    let page = new Page(data, undefined!)
    page.extract(0)
    expect(decode(WriterUtil.replaceAnnotsFieldInPageObject(data, page, 0, { obj: 44, generation: 20 })).trim()).toEqual(`2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R
/Annots 44 20 R >> endobj`)
})

test('replaceAnnotsFieldInPageObject_2', () => {
    let data = pageObject_string_2
    let page = new Page(data, undefined!)
    page.extract(0)
    expect(decode(WriterUtil.replaceAnnotsFieldInPageObject(data, page, 0, { obj: 44, generation: 20 })).trim()).toEqual(`2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R /Annots 44 20 R >> endobj`)
})
