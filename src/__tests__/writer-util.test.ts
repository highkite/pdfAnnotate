import { WriterUtil } from '../writer-util'
import { Page, ReferencePointer } from '../parser'
import { Util } from '../util'
import { pageObject_string, pageObject_string_2, pageObject_string_3, pageObject_string_4, decode } from './Data2'

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
/Annots 44 20 R 
>> endobj`)
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

test('replaceAnnotsFieldInPageObject_3', () => {
    let data = pageObject_string_3
    let page = new Page(data, undefined!)
    page.extract(0)
    expect(decode(WriterUtil.replaceAnnotsFieldInPageObject(data, page, 0, { obj: 44, generation: 20 })).trim()).toEqual(`18 0 obj
<< /Type /Page
   /Parent 1 0 R
   /MediaBox [ 0 0 612 792 ]
   /Contents 3 0 R
   /Group <<
      /Type /Group
      /S /Transparency
      /CS /DeviceRGB
   >>
   /Resources 2 0 R
/Annots 44 20 R >>
endobj`)
})

test('replaceAnnotsFieldInPageObject_4', () => {
    let data = pageObject_string_4
    let page = new Page(data, undefined!)
    page.extract(0)
    expect(decode(WriterUtil.replaceAnnotsFieldInPageObject(data, page, 0, { obj: 44, generation: 20 })).trim()).toEqual(`22 0 obj
<<
/Type /Page
/Resources <<
/ExtGState <<
/G0 63 0 R
/G1 64 0 R
/G2 65 0 R
>>
/XObject <<
/X0 66 0 R
/X1 67 0 R
/X2 68 0 R
/X3 69 0 R
/X4 70 0 R
>>
/Font <<
/F0 71 0 R
/F1 72 0 R
/F2 73 0 R
/F3 74 0 R
>>
>>
/MediaBox [0 0 486 720]
/Annots 44 20 R 
/Contents 97 0 R
/StructParents 0
/Parent 11 0 R
>>
endobj`)
})
