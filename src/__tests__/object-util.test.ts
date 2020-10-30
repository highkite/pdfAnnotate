import { ObjectUtil } from '../object-util';
import { Util } from '../util';
import { encode, simpleAnnotationObject, listObject_1, listObject_2, pageObject_string, pageObject_string_3, pageObject_string_4, pageObject_string_5, simplePageObject, simplePageObject_2, simplePageObject_3, simplePageObject_4, simplePageObject_5, simplePageObject_6, simplePageObject_7, simplePageObject_8, simplePageObject_9, simplePageObject_10, simplePageObject_11, simplePageObject_12, catalogObject, annotObject } from './Data2'

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
    expect(Util.convertAsciiToString(res.value["/DA"])).toBe("/Invalid_font 9 Tf")

})

test('extractObject_11', () => {
    let res = ObjectUtil.extractObject(simplePageObject_8, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(Util.convertAsciiToString(res.value["/Type"])).toBe("Some string value")
})

test('extractObject_12', () => {
    let res = ObjectUtil.extractObject(simplePageObject_9, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(Util.convertAsciiToString(res.value["/Type"])).toBe("/Invalid 10 TFa ")
})

test('extractObject_13', () => {
    let res = ObjectUtil.extractObject(simplePageObject_10, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(Util.convertAsciiToString(res.value["/Type"])).toBe("D:20180503095253")
    expect(Util.convertAsciiToString(res.value["/A"])).toBe("something")
    expect(res.value["/Resources"].obj).toBe(9)
    expect(res.value["/Resources"].generation).toBe(0)
})

test('extractObject_14', () => {
    let res = ObjectUtil.extractObject(simplePageObject_11, 0)
    expect(res.id.obj).toBe(2)
    expect(res.id.generation).toBe(0)

    expect(Util.convertAsciiToString(res.value["/Type"])).toBe("D:20180503095253")
    expect(Util.convertAsciiToString(res.value["/A"])).toBe("something")
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

test('extractCatalogObject_1', () => {
    let res = ObjectUtil.extractObject(catalogObject, 0)

    expect(res.value["/Type"]).toBe("/Catalog")
    expect(res.id.obj).toBe(1)
    expect(res.id.generation).toBe(0)
    expect(res.value["/OpenAction"][0].obj).toBe(4)
    expect(res.value["/OpenAction"][0].generation).toBe(0)
    expect(res.value["/OpenAction"][1]).toBe("/XYZ")
    expect(res.value["/OpenAction"][2]).toBe("null")
    expect(res.value["/OpenAction"][3]).toBe("null")
    expect(res.value["/OpenAction"][4]).toBe("null")
})

test('extractAnnot_1', () => {
    let res = ObjectUtil.extractObject(annotObject, 0)

    expect(res.value["/Type"]).toBe("/Annot")
    expect(res.id.obj).toBe(1173)
    expect(res.id.generation).toBe(0)
    expect(res.value["/A"]["/URI"]).toEqual(new Uint8Array(Util.convertHexStringToByteArray("EB345AA632781A90E90781A4A0BF42680D1F1AD67910B293798B0AFFED8407CE12684F21B7F471D96DCE4864CAB970A98E7F911C207A12C6E6900D789BC13AE87E76A9D6B8EDDADE7A53EAA521E6421295EA31305C")))
})

test('extractAnnot_2', () => {
    /*
     * 87 0 obj
     * << /Type /Annot /Subtype /Link
     * /A << /D (cite.Narayanan2017) /S /GoTo >> /BS << /S /S /W 1 >>
     * /Border [ 0 0 1 ] /C [ 0 1 0 ] /H /I
     * /Rect [ 288.237 385.914 295.21 394.701 ] >>
     * */
    let value = "38372030206f626a0a3c3c202f54797065202f416e6e6f74202f53756274797065202f4c696e6b0a2f41203c3c202f442028636974652e4e61726179616e616e3230313729202f53202f476f546f203e3e202f4253203c3c202f53202f53202f572031203e3e0a2f426f72646572205b203020302031205d202f43205b203020312030205d202f48202f490a2f52656374205b203238382e323337203338352e393134203239352e3231203339342e373031205d203e3e0a656e646f626a"
    let res = ObjectUtil.extractObject(new Uint8Array(Util.convertHexStringToByteArray(value)), 0)

    expect(res.value["/Type"]).toBe("/Annot")
    expect(res.value["/Subtype"]).toBe("/Link")
    expect(res.id.obj).toBe(87)
    expect(res.id.generation).toBe(0)
    expect(res.value["/Rect"]).toEqual([ 288.237, 385.914, 295.21, 394.701 ])
})

test('extractObject_17', () => {
    let data = new Uint8Array(Util.convertHexStringToByteArray("332030206f626a2020202020202020202020202020202020202020202020202020202020202020202020202020202020250a3c3c202f54797065202f5061676573202020202020202020202020202020202020202020202020202020202020202020250a2020202f4d65646961426f78205b20302030203835302031313030205d20202020202020202020202020202020202020250a2020202f436f756e74203137202020202020202020202020202020202020202020202020202020202020202020202020250a2020202f4b696473205b2020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202035203020522020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202039203020522020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202031332030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202031372030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202032312030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202032352030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202032392030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202033332030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202033372030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202034312030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202034352030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202034392030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202035332030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202035372030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202036312030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202036352030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202036392030205220202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a2020202020202020205d2020202020202020202020202020202020202020202020202020202020202020202020202020250a3e3e20202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020250a25202020202020202020202020202020202020202020202020202020202020202020202020202020250a656e646f626a"))

    let res = ObjectUtil.extractObject(data, 0)
})

test('extractObject_18', () => {
    let data = encode(`461 0 obj

        %
        <</Count 119/Type/Pages/Kids[462 0 R 463 0 R]>>endobj`)
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

test('extractObject_19', () => {
    let data = encode(`461 0 obj

        %
        %
        <</Count 119
        %
        /Type/Pages
        %
        /Kids[462 0 R 463 0 R]>>endobj`)
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

test('extractObject_20', () => {
    let data = encode(`461 0 obj

        %
        <</Count 119
        %
        /Type/Pages
        %
        /Kids[462 0 R 463 0 R]%
        %
    >>endobj`)
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

test('extractObject_21', () => {
    let data = encode(`461 0 obj

        %
        <</Count 119
        %
        /Type/Pages
        %
        /Kids[462 0 R 463 0 R]%
        %
    >>
    %%
    endobj`)
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

test('extractObject_22', () => {
    let data = new Uint8Array(Util.convertHexStringToByteArray("3c3c2f53697a65203136202f4944205b287a653f91dd788141b6e6752ab0811e832920283d852cf2ec0cd5b4f32c4f5c294d10b61929205d202f526f6f7420313220302052202f50726576203135343839202f496e666f20313320302052203e3e"))
    let obj: any = {}
    ObjectUtil.extractDictKeyRec(data, 2, obj)

    expect(obj["/Size"]).toBe(16)
    expect(obj["/ID"][0]).toEqual(new Uint8Array([ 122, 101, 63, 145, 221, 120, 129, 65, 182, 230, 117, 42, 176, 129, 30, 131 ]))
    expect(obj["/ID"][1]).toEqual(new Uint8Array([ 61, 133, 44, 242, 236, 12, 213, 180, 243, 44, 79, 41, 77, 16, 182, 25 ]))
    expect(obj["/Root"].obj).toBe(12)
    expect(obj["/Root"].generation).toBe(0)
    expect(obj["/Info"].obj).toBe(13)
    expect(obj["/Info"].generation).toBe(0)
    expect(obj["/Prev"]).toBe(15489)
})

test('extractObject_23', () => {
    let data = new Uint8Array(Util.convertHexStringToByteArray("3c3c0d0a092f526f6f742031203020520d0a092f53697a6520350d0a3e3e"))
    let obj: any = {}
    ObjectUtil.extractDictKeyRec(data, 2, obj)

    expect(obj["/Size"]).toBe(5)
    expect(obj["/Root"].obj).toBe(1)
    expect(obj["/Root"].generation).toBe(0)
})

test('extractObject_23_robustness', () => {
    let data = encode(`461 0 obj<</Count 119/Type/Pages/Kids[462 0 R 463 0 R]>>endobj`)
    let res = ObjectUtil.extractObject(data, 4)

    expect(res.id.obj).toBe(461)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Count"]).toBe(119)
    expect(res.value["/Type"]).toBe("/Pages")
    expect(res.value["/Kids"][0].obj).toBe(462)
    expect(res.value["/Kids"][0].generation).toBe(0)
    expect(res.value["/Kids"][1].obj).toBe(463)
    expect(res.value["/Kids"][1].generation).toBe(0)
})

test('extractObject_23_robustness_2', () => {
    let data = encode(`461 0 obj<</Count 119/Type/Pages/Kids[462 0 R 463 0 R]>>endobj`)
    let res = ObjectUtil.extractObject(data, 17)

    expect(res.id.obj).toBe(461)
    expect(res.id.generation).toBe(0)

    expect(res.value["/Count"]).toBe(119)
    expect(res.value["/Type"]).toBe("/Pages")
    expect(res.value["/Kids"][0].obj).toBe(462)
    expect(res.value["/Kids"][0].generation).toBe(0)
    expect(res.value["/Kids"][1].obj).toBe(463)
    expect(res.value["/Kids"][1].generation).toBe(0)
})

test('extractObject_24', () => {
    /**
     * 26 0 27 113 28 140 29 148 30 340 31 413 32 1588 33 1606 34 1635 35 1653 <</DA(/Helv 0 Tf 0 g )/DR<</Encoding<</PDFDocEncoding 31 0 R>>/Font<</Helv 30 0 R/ZaDb 8 0 R>>>>/Fields[29 0 R]>><</IDS 10 0 R/URLS 11 0 R>>[29 0 R]<</AP<</N 20 0 R>>/DA(/Helv 12 Tf 0 g)/F 4/FT/Tx/MK<</BC[0.0 1.0 0.0]/BG[0.666656 0.75 1.0]>>/P 19 0 R/Rect[21.7081 710.72 171.708 732.72]/Subtype/Widget/T(Text2)/Type/Annot/V(tx annotation)>><</BaseFont/Helvetica/Encoding 31 0 R/Name/Helv/Subtype/Type1/Type/Font>><</Differences[24/breve/caron/circumflex/dotaccent/hungarumlaut/ogonek/ring/tilde 39/quotesingle 96/grave 128/bullet/dagger/daggerdbl/ellipsis/emdash/endash/florin/fraction/guilsinglleft/guilsinglright/minus/perthousand/quotedblbase/quotedblleft/quotedblright/quoteleft/quoteright/quotesinglbase/trademark/fi/fl/Lslash/OE/Scaron/Ydieresis/Zcaron/dotlessi/lslash/oe/scaron/zcaron 160/Euro 164/currency 166/brokenbar 168/dieresis/copyright/ordfeminine 172/logicalnot/.notdef/registered/macron/degree/plusminus/twosuperior/threesuperior/acute/mu 183/periodcentered/cedilla/onesuperior/ordmasculine 188/onequarter/onehalf/threequarters 192/Agrave/Aacute/Acircumflex/Atilde/Adieresis/Aring/AE/Ccedilla/Egrave/Eacute/Ecircumflex/Edieresis/Igrave/Iacute/Icircumflex/Idieresis/Eth/Ntilde/Ograve/Oacute/Ocircumflex/Otilde/Odieresis/multiply/Oslash/Ugrave/Uacute/Ucircumflex/Udieresis/Yacute/Thorn/germandbls/agrave/aacute/acircumflex/atilde/adieresis/aring/ae/ccedilla/egrave/eacute/ecircumflex/edieresis/igrave/iacute/icircumflex/idieresis/eth/ntilde/ograve/oacute/ocircumflex/otilde/odieresis/divide/oslash/ugrave/uacute/ucircumflex/udieresis/yacute/thorn/ydieresis]/Type/Encoding>>[/ICCBased 23 0 R]<</CS 35 0 R/S/Transparency>>(9ɫŜ쬅糆4)[/ICCBased 24 0 R]
     * */
    let data = new Uint8Array([50,54,32,48,32,50,55,32,49,49,51,32,50,56,32,49,52,48,32,50,57,32,49,52,56,32,51,48,32,51,52,48,32,51,49,32,52,49,51,32,51,50,32,49,53,56,56,32,51,51,32,49,54,48,54,32,51,52,32,49,54,51,53,32,51,53,32,49,54,53,51,32,60,60,47,68,65,40,47,72,101,108,118,32,48,32,84,102,32,48,32,103,32,41,47,68,82,60,60,47,69,110,99,111,100,105,110,103,60,60,47,80,68,70,68,111,99,69,110,99,111,100,105,110,103,32,51,49,32,48,32,82,62,62,47,70,111,110,116,60,60,47,72,101,108,118,32,51,48,32,48,32,82,47,90,97,68,98,32,56,32,48,32,82,62,62,62,62,47,70,105,101,108,100,115,91,50,57,32,48,32,82,93,62,62,60,60,47,73,68,83,32,49,48,32,48,32,82,47,85,82,76,83,32,49,49,32,48,32,82,62,62,91,50,57,32,48,32,82,93,60,60,47,65,80,60,60,47,78,32,50,48,32,48,32,82,62,62,47,68,65,40,47,72,101,108,118,32,49,50,32,84,102,32,48,32,103,41,47,70,32,52,47,70,84,47,84,120,47,77,75,60,60,47,66,67,91,48,46,48,32,49,46,48,32,48,46,48,93,47,66,71,91,48,46,54,54,54,54,53,54,32,48,46,55,53,32,49,46,48,93,62,62,47,80,32,49,57,32,48,32,82,47,82,101,99,116,91,50,49,46,55,48,56,49,32,55,49,48,46,55,50,32,49,55,49,46,55,48,56,32,55,51,50,46,55,50,93,47,83,117,98,116,121,112,101,47,87,105,100,103,101,116,47,84,40,84,101,120,116,50,41,47,84,121,112,101,47,65,110,110,111,116,47,86,40,116,120,32,97,110,110,111,116,97,116,105,111,110,41,62,62,60,60,47,66,97,115,101,70,111,110,116,47,72,101,108,118,101,116,105,99,97,47,69,110,99,111,100,105,110,103,32,51,49,32,48,32,82,47,78,97,109,101,47,72,101,108,118,47,83,117,98,116,121,112,101,47,84,121,112,101,49,47,84,121,112,101,47,70,111,110,116,62,62,60,60,47,68,105,102,102,101,114,101,110,99,101,115,91,50,52,47,98,114,101,118,101,47,99,97,114,111,110,47,99,105,114,99,117,109,102,108,101,120,47,100,111,116,97,99,99,101,110,116,47,104,117,110,103,97,114,117,109,108,97,117,116,47,111,103,111,110,101,107,47,114,105,110,103,47,116,105,108,100,101,32,51,57,47,113,117,111,116,101,115,105,110,103,108,101,32,57,54,47,103,114,97,118,101,32,49,50,56,47,98,117,108,108,101,116,47,100,97,103,103,101,114,47,100,97,103,103,101,114,100,98,108,47,101,108,108,105,112,115,105,115,47,101,109,100,97,115,104,47,101,110,100,97,115,104,47,102,108,111,114,105,110,47,102,114,97,99,116,105,111,110,47,103,117,105,108,115,105,110,103,108,108,101,102,116,47,103,117,105,108,115,105,110,103,108,114,105,103,104,116,47,109,105,110,117,115,47,112,101,114,116,104,111,117,115,97,110,100,47,113,117,111,116,101,100,98,108,98,97,115,101,47,113,117,111,116,101,100,98,108,108,101,102,116,47,113,117,111,116,101,100,98,108,114,105,103,104,116,47,113,117,111,116,101,108,101,102,116,47,113,117,111,116,101,114,105,103,104,116,47,113,117,111,116,101,115,105,110,103,108,98,97,115,101,47,116,114,97,100,101,109,97,114,107,47,102,105,47,102,108,47,76,115,108,97,115,104,47,79,69,47,83,99,97,114,111,110,47,89,100,105,101,114,101,115,105,115,47,90,99,97,114,111,110,47,100,111,116,108,101,115,115,105,47,108,115,108,97,115,104,47,111,101,47,115,99,97,114,111,110,47,122,99,97,114,111,110,32,49,54,48,47,69,117,114,111,32,49,54,52,47,99,117,114,114,101,110,99,121,32,49,54,54,47,98,114,111,107,101,110,98,97,114,32,49,54,56,47,100,105,101,114,101,115,105,115,47,99,111,112,121,114,105,103,104,116,47,111,114,100,102,101,109,105,110,105,110,101,32,49,55,50,47,108,111,103,105,99,97,108,110,111,116,47,46,110,111,116,100,101,102,47,114,101,103,105,115,116,101,114,101,100,47,109,97,99,114,111,110,47,100,101,103,114,101,101,47,112,108,117,115,109,105,110,117,115,47,116,119,111,115,117,112,101,114,105,111,114,47,116,104,114,101,101,115,117,112,101,114,105,111,114,47,97,99,117,116,101,47,109,117,32,49,56,51,47,112,101,114,105,111,100,99,101,110,116,101,114,101,100,47,99,101,100,105,108,108,97,47,111,110,101,115,117,112,101,114,105,111,114,47,111,114,100,109,97,115,99,117,108,105,110,101,32,49,56,56,47,111,110,101,113,117,97,114,116,101,114,47,111,110,101,104,97,108,102,47,116,104,114,101,101,113,117,97,114,116,101,114,115,32,49,57,50,47,65,103,114,97,118,101,47,65,97,99,117,116,101,47,65,99,105,114,99,117,109,102,108,101,120,47,65,116,105,108,100,101,47,65,100,105,101,114,101,115,105,115,47,65,114,105,110,103,47,65,69,47,67,99,101,100,105,108,108,97,47,69,103,114,97,118,101,47,69,97,99,117,116,101,47,69,99,105,114,99,117,109,102,108,101,120,47,69,100,105,101,114,101,115,105,115,47,73,103,114,97,118,101,47,73,97,99,117,116,101,47,73,99,105,114,99,117,109,102,108,101,120,47,73,100,105,101,114,101,115,105,115,47,69,116,104,47,78,116,105,108,100,101,47,79,103,114,97,118,101,47,79,97,99,117,116,101,47,79,99,105,114,99,117,109,102,108,101,120,47,79,116,105,108,100,101,47,79,100,105,101,114,101,115,105,115,47,109,117,108,116,105,112,108,121,47,79,115,108,97,115,104,47,85,103,114,97,118,101,47,85,97,99,117,116,101,47,85,99,105,114,99,117,109,102,108,101,120,47,85,100,105,101,114,101,115,105,115,47,89,97,99,117,116,101,47,84,104,111,114,110,47,103,101,114,109,97,110,100,98,108,115,47,97,103,114,97,118,101,47,97,97,99,117,116,101,47,97,99,105,114,99,117,109,102,108,101,120,47,97,116,105,108,100,101,47,97,100,105,101,114,101,115,105,115,47,97,114,105,110,103,47,97,101,47,99,99,101,100,105,108,108,97,47,101,103,114,97,118,101,47,101,97,99,117,116,101,47,101,99,105,114,99,117,109,102,108,101,120,47,101,100,105,101,114,101,115,105,115,47,105,103,114,97,118,101,47,105,97,99,117,116,101,47,105,99,105,114,99,117,109,102,108,101,120,47,105,100,105,101,114,101,115,105,115,47,101,116,104,47,110,116,105,108,100,101,47,111,103,114,97,118,101,47,111,97,99,117,116,101,47,111,99,105,114,99,117,109,102,108,101,120,47,111,116,105,108,100,101,47,111,100,105,101,114,101,115,105,115,47,100,105,118,105,100,101,47,111,115,108,97,115,104,47,117,103,114,97,118,101,47,117,97,99,117,116,101,47,117,99,105,114,99,117,109,102,108,101,120,47,117,100,105,101,114,101,115,105,115,47,121,97,99,117,116,101,47,116,104,111,114,110,47,121,100,105,101,114,101,115,105,115,93,47,84,121,112,101,47,69,110,99,111,100,105,110,103,62,62,91,47,73,67,67,66,97,115,101,100,32,50,51,32,48,32,82,93,60,60,47,67,83,32,51,53,32,48,32,82,47,83,47,84,114,97,110,115,112,97,114,101,110,99,121,62,62,40,6,57,145,169,127,201,43,197,220,236,236,69,231,179,70,52,41,91,47,73,67,67,66,97,115,101,100,32,50,52,32,48,32,82,93])

    let value = {}
    expect(() => {ObjectUtil.extractDictValueRec(data, 212, value)}).toThrow()
})
