import { ObjectUtil } from '../object-util';
import { Util } from '../util';
import { encode, simpleAnnotationObject, listObject_1, listObject_2, pageObject_string, pageObject_string_3, pageObject_string_4, pageObject_string_5, simplePageObject, simplePageObject_2, simplePageObject_3, simplePageObject_4, simplePageObject_5, simplePageObject_6, simplePageObject_7, simplePageObject_8, simplePageObject_9, simplePageObject_10, simplePageObject_11, simplePageObject_12 } from './Data2'

test('extractObject_1', () => {
    let res = ObjectUtil.extractObject(simplePageObject, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
})

test('extractObject_2', () => {
    let res = ObjectUtil.extractObject(simplePageObject_2, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 612, 792])
})

test('extractObject_comment_1', () => {
    let res = ObjectUtil.extractObject(simplePageObject_3, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
})

test('extractObject_comment_2', () => {
    let res = ObjectUtil.extractObject(simplePageObject_4, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
})

test('extractObject_comment_3', () => {
    let res = ObjectUtil.extractObject(simplePageObject_5, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
})

test('extractObject_comment_4', () => {
    let res = ObjectUtil.extractObject(simplePageObject_6, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
})

test('extractObject_3', () => {
    let res = ObjectUtil.extractObject(pageObject_string, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res.value["/Parent"].obj).toBe(23)
    expect(res.value["/Parent"].generation).toBe(0)

    expect(res.value["/Annots"][0].obj).toBe(3)
    expect(res.value["/Annots"][0].generation).toBe(0)
    expect(res.value["/Annots"][1].obj).toBe(4)
    expect(res.value["/Annots"][1].generation).toBe(0)
    expect(res.value["/Annots"][2].obj).toBe(5)
    expect(res.value["/Annots"][2].generation).toBe(0)
    expect(res.value["/Annots"][3].obj).toBe(6)
    expect(res.value["/Annots"][3].generation).toBe(0)
    expect(res.value["/Annots"][4].obj).toBe(7)
    expect(res.value["/Annots"][4].generation).toBe(0)
    expect(res.value["/Annots"][5].obj).toBe(8)
    expect(res.value["/Annots"][5].generation).toBe(0)
})

test('extractObject_4', () => {
    let res = ObjectUtil.extractObject(pageObject_string_3, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(18)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(2)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(3)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res.value["/Parent"].obj).toBe(1)
    expect(res.value["/Parent"].generation).toBe(0)

    expect(res.value["/Group"]["/Type"]).toBe("/Group")
    expect(res.value["/Group"]["/S"]).toBe("/Transparency")
    expect(res.value["/Group"]["/CS"]).toBe("/DeviceRGB")
})

test('extractObject_5', () => {
    let res = ObjectUtil.extractObject(pageObject_string_4, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(22)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Parent"].obj).toBe(11)
    expect(res.value["/Parent"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 486, 720])
    expect(res.value["/Contents"].obj).toBe(97)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/StructParents"]).toBe(0)
    expect(res.value["/Annots"].length).toBe(22)

    expect(res.value["/Resources"]["/ExtGState"]["/G0"].obj).toBe(63)
    expect(res.value["/Resources"]["/ExtGState"]["/G1"].obj).toBe(64)
    expect(res.value["/Resources"]["/ExtGState"]["/G2"].obj).toBe(65)

    expect(res.value["/Resources"]["/ExtGState"]["/G0"].generation).toBe(0)
    expect(res.value["/Resources"]["/ExtGState"]["/G1"].generation).toBe(0)
    expect(res.value["/Resources"]["/ExtGState"]["/G2"].generation).toBe(0)

    expect(res.value["/Resources"]["/XObject"]["/X0"].obj).toBe(66)
    expect(res.value["/Resources"]["/XObject"]["/X1"].obj).toBe(67)
    expect(res.value["/Resources"]["/XObject"]["/X2"].obj).toBe(68)
    expect(res.value["/Resources"]["/XObject"]["/X3"].obj).toBe(69)
    expect(res.value["/Resources"]["/XObject"]["/X4"].obj).toBe(70)

    expect(res.value["/Resources"]["/XObject"]["/X0"].generation).toBe(0)
    expect(res.value["/Resources"]["/XObject"]["/X1"].generation).toBe(0)
    expect(res.value["/Resources"]["/XObject"]["/X2"].generation).toBe(0)
    expect(res.value["/Resources"]["/XObject"]["/X3"].generation).toBe(0)
    expect(res.value["/Resources"]["/XObject"]["/X4"].generation).toBe(0)

    expect(res.value["/Resources"]["/Font"]["/F0"].obj).toBe(71)
    expect(res.value["/Resources"]["/Font"]["/F1"].obj).toBe(72)
    expect(res.value["/Resources"]["/Font"]["/F2"].obj).toBe(73)
    expect(res.value["/Resources"]["/Font"]["/F3"].obj).toBe(74)

    expect(res.value["/Resources"]["/Font"]["/F0"].generation).toBe(0)
    expect(res.value["/Resources"]["/Font"]["/F1"].generation).toBe(0)
    expect(res.value["/Resources"]["/Font"]["/F2"].generation).toBe(0)
    expect(res.value["/Resources"]["/Font"]["/F3"].generation).toBe(0)

})

test('extractObject_6', () => {
    let res = ObjectUtil.extractObject(simplePageObject_7, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(10)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 612, 792])
})

test('extractObject_7', () => {
    let res = ObjectUtil.extractObject(pageObject_string_5, 0)

    expect(res.value["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(18)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Resources"].obj).toBe(2)
    expect(res.value["/Resources"].generation).toBe(0)
    expect(res.value["/Contents"].obj).toBe(3)
    expect(res.value["/Contents"].generation).toBe(0)
    expect(res.value["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res.value["/Parent"].obj).toBe(1)
    expect(res.value["/Parent"].generation).toBe(0)

    expect(res.value["/Group"]["/Type"]).toBe("/Group")
    expect(res.value["/Group"]["/S"]).toBe("/Transparency")
    expect(res.value["/Group"]["/CS"]).toBe("/DeviceRGB")
})

test('extractObject_8', () => {
    let res = ObjectUtil.extractObject(listObject_1, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(res.value[0].obj).toBe(1)
    expect(res.value[0].generation).toBe(0)

    expect(res.value[1].obj).toBe(2)
    expect(res.value[1].generation).toBe(0)
})

test('extractObject_9', () => {
    let res = ObjectUtil.extractObject(listObject_2, 0)
    expect(res.id.obj).toBe(110)
    expect(res.id.generation).toBe(0)

    expect(res.value.length).toBe(12)
})

test('extractObject_10', () => {
    let res = ObjectUtil.extractObject(simpleAnnotationObject, 0)
    expect(res.id.obj).toBe(111)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Type"]).toBe("/Annot")
    expect(res.value["/Subtype"]).toBe("/FreeText")
    expect(res.value["/Rect"]).toEqual([523.827324, 393.722208, 597.420936, 407.233728])
    expect(res.value["/DA"]).toBe("/Invalid_font 9 Tf")

})

test('extractObject_11', () => {
    let res = ObjectUtil.extractObject(simplePageObject_8, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Type"]).toBe("Some string value")
})

test('extractObject_12', () => {
    let res = ObjectUtil.extractObject(simplePageObject_9, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Type"]).toBe("/Invalid 10 TFa ")
})

test('extractObject_13', () => {
    let res = ObjectUtil.extractObject(simplePageObject_10, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Type"]).toBe("D:20180503095253")
    expect(res.value["/A"]).toBe("something")
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
})

test('extractObject_14', () => {
    let res = ObjectUtil.extractObject(simplePageObject_11, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Type"]).toBe("D:20180503095253")
    expect(res.value["/A"]).toBe("something")
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
})

test('extractObject_15', () => {
    let res = ObjectUtil.extractObject(simplePageObject_12, 0)
    expect(res.id.obj).toBe(14)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Subtype"]).toBe("/Link")
    expect(res.value["/Rect"]).toEqual([69.75, 689.48, 525.05, 715.01])
    expect(res.value["/BS"]["/W"]).toBe(0)
    expect(res.value["/F"]).toBe(4)
    expect(res.value["/Dest"][0].obj).toBe(15)
    expect(res.value["/Dest"][0].generation).toBe(0)
    expect(res.value["/Dest"][1]).toBe("/XYZ")
    expect(res.value["/Dest"][2]).toBe(69)
    expect(res.value["/Dest"][3]).toBe(756)
    expect(res.value["/Dest"][4]).toBe(0)
    expect(res.value["/StructParent"]).toBe(1)
})

test('extractObject_16', () => {
    let data = encode(`461 0 obj<</Count 119/Type/Pages/Kids[462 0 R 463 0 R]>>endobj`)
    let res = ObjectUtil.extractObject(data, 0)

    expect(res.id.obj).toBe(461)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Count"]).toBe(119)
    expect(res.value["/Type"]).toBe("/Pages")
    expect(res.value["/Kids"][0].obj).toBe(462)
    expect(res.value["/Kids"][0].generation).toBe(0)
    expect(res.value["/Kids"][1].obj).toBe(463)
    expect(res.value["/Kids"][1].generation).toBe(0)
})
