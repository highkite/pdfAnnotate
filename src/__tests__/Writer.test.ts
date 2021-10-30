import { testDocument, testDocument2 } from './Data'
import { AnnotationFactory } from '../annotation'
import { Writer } from '../writer'
import { save, decode, loadFromFile } from './Data2'

test('write testDocument', () => {
    let data = new Uint8Array(testDocument)
    let fac: AnnotationFactory = new AnnotationFactory(data)

    //fac.createTextAnnotation(0, [50, 50], "Test123", "Max")
    fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

    fac.write()
})

test('write testDocument2', () => {
    let data = new Uint8Array(testDocument2)
    let fac: AnnotationFactory = new AnnotationFactory(data)

    fac.createTextAnnotation(0, [50, 50, 80, 80], "Test123", "Max")
    fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

    fac.write()
})

//test('writeTestDocument3', () => {
//    let data = loadFromFile('./test_documents/test18.pdf')
//    let fac: AnnotationFactory = new AnnotationFactory(data, "123")
//
//    fac.createTextAnnotation(0, [50, 50, 80, 80], "Test123", "Max")
//    fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")
//
//    fac.write()
//    let output_data = fac.write()
//
//    let fac2: AnnotationFactory = new AnnotationFactory(output_data, "123")
//
//    fac2.getAnnotations().then((annots) => {
//        console.log(annots)
//    })
//})

//test('getAnnotations', () => {
//    let data = new Uint8Array(testDocument)
//    let fac: AnnotationFactory = new AnnotationFactory(data)
//
//    fac.deleteAnnotation('okular-{4e2e238d-7f4f-4b99-ac92-6def305d4796}').then((toDelete) => {
//        fac.deleteAnnotation('okular-{551f1c1c-224d-4982-b5ce-3494483bf8d3}').then((toDelete) => {
//            fac.save()
//        })
//    })
//})

//test('MISC', () => {
//    let data = loadFromFile('./test_documents/test11.pdf')
//    let fac: AnnotationFactory = new AnnotationFactory(data)
//    // look for the red annotation!
//    fac.createHighlightAnnotation(0, [50, 50, 80, 80], "Test123", "Max", { r: 100, g: 16, b: 0 })
//    fac.getAnnotations().then((annots) => {
//        //console.log(annots)
//    })
//    let data2 = fac.write()
//    save('output.pdf', data2)
//
//    //let data = loadFromFile('./test6.pdf')
//    //let fac: AnnotationFactory = new AnnotationFactory(data)
//    //fac.createTextAnnotation(0, [50, 50, 80, 80], "Test123", "Max")
//    //let data2 = fac.write()
//    //save('output.pdf', data2)
//
//    //let fac2: AnnotationFactory = new AnnotationFactory(data2)
//    //console.log("here")
//    //fac2.getAnnotations().then((annots) => {
//    //    console.log("######################################################")
//    //    expect(annots).toEqual("abc")
//    //})
//})
