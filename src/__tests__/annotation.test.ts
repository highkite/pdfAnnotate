import { ParameterParser, AnnotationFactory } from '../annotation';
import { testDocument } from './Data'
import { AnnotationIcon } from '../annotations/text_annotation';

test('testParseParameters', () => {
    let params : any = [0, [50, 50, 80, 80], "Test123", "John"]
    let res = ParameterParser.parseParameters(params)

    expect(res.page).toBe(0)
    expect(res.rect).toEqual([50, 50, 80, 80])
    expect(res.contents).toBe("Test123")
    expect(res.author).toBe("John")

    let lineColor = {r: 1, g: 1, b: 0}
    let fillColor = {r: 1, g: 1, b: 0}
    params = [0, [60, 60, 80, 80], "Test123", "John", lineColor, fillColor]
    res = ParameterParser.parseParameters(params)
    expect(res.page).toBe(0)
    expect(res.rect).toEqual([60, 60, 80, 80])
    expect(res.contents).toBe("Test123")
    expect(res.author).toBe("John")
    expect(res.color).toEqual(lineColor)
    expect(res.fill).toEqual(fillColor)

    params = [0, [80, 80, 120, 120], "Test123", "John", [80, 80, 100, 100, 110, 80, 120, 120], {r: 0, g: 1, b: 0}]
    res = ParameterParser.parseParameters(params)
    expect(res.page).toBe(0)
    expect(res.rect).toEqual([80, 80, 120, 120])
    expect(res.contents).toBe("Test123")
    expect(res.author).toBe("John")
    expect(res.color).toEqual({r: 0, g: 1, b: 0})
    expect(res.vertices).toEqual([80, 80, 100, 100, 110, 80, 120, 120])

    params = [0, [0, 0, 200, 200], "Test123", "John", [[0, 0, 10, 10, 20, 0, 30, 10]]]
    res = ParameterParser.parseParameters(params)
    expect(res.page).toBe(0)
    expect(res.rect).toEqual([0, 0, 200, 200])
    expect(res.contents).toBe("Test123")
    expect(res.author).toBe("John")
    expect(res.inkList).toEqual([[0, 0, 10, 10, 20, 0, 30, 10]])

    params = [0, [], "Test123", "John", {r: 1, g: 1, b: 0}, [100, 130, 150, 130, 100, 100, 150, 100 /*rectangle one*/, 150, 180, 200, 180, 150, 150, 200, 150 /*rectangle two*/]]
    res = ParameterParser.parseParameters(params)
    expect(res.page).toBe(0)
    expect(res.rect).toEqual([])
    expect(res.contents).toBe("Test123")
    expect(res.author).toBe("John")
    expect(res.color).toEqual({r: 1, g: 1, b: 0})
    expect(res.quadPoints).toEqual([100, 130, 150, 130, 100, 100, 150, 100 /*rectangle one*/, 150, 180, 200, 180, 150, 150, 200, 150 /*rectangle two*/])
})
test('deleteAnnotation',async ()=>{
    let data = new Uint8Array(testDocument)
    let factory = new AnnotationFactory(data)
    factory.createTextAnnotation({
        page: 0,
        rect: [50, 50, 80, 80],
        contents: "Pop up note",
        author: "Max",
        color: {r: 128, g: 128, b: 128},
        open: false,
        icon: AnnotationIcon.Help,
        opacity: 0.5
        })
    let annotations=await factory.getAnnotations()
    await factory.deleteAnnotation(annotations[0][2].id)
    expect(factory.getAnnotationCount()).toEqual(0)
    
})
