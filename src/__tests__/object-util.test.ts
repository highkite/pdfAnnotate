import { ObjectUtil } from '../object-util';
import { pageObject_string, pageObject_string_3, pageObject_string_4, pageObject_string_5, simplePageObject, simplePageObject_2, simplePageObject_3, simplePageObject_4, simplePageObject_5, simplePageObject_6, simplePageObject_7 } from './Data2'

test('extractObject_1', () => {
    let res = ObjectUtil.extractObject(simplePageObject, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
})

test('extractObject_2', () => {
    let res = ObjectUtil.extractObject(simplePageObject_2, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 612, 792])
})

test('extractObject_comment_1', () => {
    let res = ObjectUtil.extractObject(simplePageObject_3, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
})

test('extractObject_comment_2', () => {
    let res = ObjectUtil.extractObject(simplePageObject_4, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
})

test('extractObject_comment_3', () => {
    let res = ObjectUtil.extractObject(simplePageObject_5, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
})

test('extractObject_comment_4', () => {
    let res = ObjectUtil.extractObject(simplePageObject_6, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
})

test('extractObject_3', () => {
    let res = ObjectUtil.extractObject(pageObject_string, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res["/Parent"].obj).toBe(23)
    expect(res["/Parent"].generation).toBe(0)

    expect(res["/Annots"][0].obj).toBe(3)
    expect(res["/Annots"][0].generation).toBe(0)
    expect(res["/Annots"][1].obj).toBe(4)
    expect(res["/Annots"][1].generation).toBe(0)
    expect(res["/Annots"][2].obj).toBe(5)
    expect(res["/Annots"][2].generation).toBe(0)
    expect(res["/Annots"][3].obj).toBe(6)
    expect(res["/Annots"][3].generation).toBe(0)
    expect(res["/Annots"][4].obj).toBe(7)
    expect(res["/Annots"][4].generation).toBe(0)
    expect(res["/Annots"][5].obj).toBe(8)
    expect(res["/Annots"][5].generation).toBe(0)
})

test('extractObject_4', () => {
    let res = ObjectUtil.extractObject(pageObject_string_3, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(18)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(2)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(3)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res["/Parent"].obj).toBe(1)
    expect(res["/Parent"].generation).toBe(0)

    expect(res["/Group"]["/Type"]).toBe("/Group")
    expect(res["/Group"]["/S"]).toBe("/Transparency")
    expect(res["/Group"]["/CS"]).toBe("/DeviceRGB")
})

test('extractObject_5', () => {
    let res = ObjectUtil.extractObject(pageObject_string_4, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(22)
    expect(res.id.generation).toBe(0)
    expect(res["/Parent"].obj).toBe(11)
    expect(res["/Parent"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 486, 720])
    expect(res["/Contents"].obj).toBe(97)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/StructParents"]).toBe(0)
    expect(res["/Annots"].length).toBe(22)

    expect(res["/Resources"]["/ExtGState"]["/G0"].obj).toBe(63)
    expect(res["/Resources"]["/ExtGState"]["/G1"].obj).toBe(64)
    expect(res["/Resources"]["/ExtGState"]["/G2"].obj).toBe(65)

    expect(res["/Resources"]["/ExtGState"]["/G0"].generation).toBe(0)
    expect(res["/Resources"]["/ExtGState"]["/G1"].generation).toBe(0)
    expect(res["/Resources"]["/ExtGState"]["/G2"].generation).toBe(0)

    expect(res["/Resources"]["/XObject"]["/X0"].obj).toBe(66)
    expect(res["/Resources"]["/XObject"]["/X1"].obj).toBe(67)
    expect(res["/Resources"]["/XObject"]["/X2"].obj).toBe(68)
    expect(res["/Resources"]["/XObject"]["/X3"].obj).toBe(69)
    expect(res["/Resources"]["/XObject"]["/X4"].obj).toBe(70)

    expect(res["/Resources"]["/XObject"]["/X0"].generation).toBe(0)
    expect(res["/Resources"]["/XObject"]["/X1"].generation).toBe(0)
    expect(res["/Resources"]["/XObject"]["/X2"].generation).toBe(0)
    expect(res["/Resources"]["/XObject"]["/X3"].generation).toBe(0)
    expect(res["/Resources"]["/XObject"]["/X4"].generation).toBe(0)

    expect(res["/Resources"]["/Font"]["/F0"].obj).toBe(71)
    expect(res["/Resources"]["/Font"]["/F1"].obj).toBe(72)
    expect(res["/Resources"]["/Font"]["/F2"].obj).toBe(73)
    expect(res["/Resources"]["/Font"]["/F3"].obj).toBe(74)

    expect(res["/Resources"]["/Font"]["/F0"].generation).toBe(0)
    expect(res["/Resources"]["/Font"]["/F1"].generation).toBe(0)
    expect(res["/Resources"]["/Font"]["/F2"].generation).toBe(0)
    expect(res["/Resources"]["/Font"]["/F3"].generation).toBe(0)

})

test('extractObject_6', () => {
    let res = ObjectUtil.extractObject(simplePageObject_7, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(9)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(10)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 612, 792])
})

test('extractObject_7', () => {
    let res = ObjectUtil.extractObject(pageObject_string_5, 0)

    expect(res["/Type"]).toBe("/Page")
    expect(res.id.obj).toBe(18)
    expect(res.id.generation).toBe(0)
    expect(res["/Resources"].obj).toBe(2)
    expect(res["/Resources"].generation).toBe(0)
    expect(res["/Contents"].obj).toBe(3)
    expect(res["/Contents"].generation).toBe(0)
    expect(res["/MediaBox"]).toEqual([0, 0, 612, 792])
    expect(res["/Parent"].obj).toBe(1)
    expect(res["/Parent"].generation).toBe(0)

    expect(res["/Group"]["/Type"]).toBe("/Group")
    expect(res["/Group"]["/S"]).toBe("/Transparency")
    expect(res["/Group"]["/CS"]).toBe("/DeviceRGB")
})
