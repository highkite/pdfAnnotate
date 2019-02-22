import { testDocument, testDocument2 } from './Data'
import { AnnotationFactory } from '../annotation'
import { Writer } from '../writer'

test('write testDocument', () => {
    let data = new Int8Array(testDocument)
    let fac: AnnotationFactory = new AnnotationFactory(data)

    //fac.createTextAnnotation(0, [50, 50], "Test123", "Max")
    fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

    fac.write()
})

test('write testDocument2', () => {
    let data = new Int8Array(testDocument2)
    let fac: AnnotationFactory = new AnnotationFactory(data)

    fac.createTextAnnotation(0, [50, 50, 80, 80], "Test123", "Max")
    fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

    fac.write()
})

test('getAnnotations', () => {
    let data = new Int8Array(testDocument)
    let fac: AnnotationFactory = new AnnotationFactory(data)

    fac.deleteAnnotation('okular-{4e2e238d-7f4f-4b99-ac92-6def305d4796}').then((toDelete) => {
        fac.deleteAnnotation('okular-{551f1c1c-224d-4982-b5ce-3494483bf8d3}').then((toDelete) => {
            fac.save()
        })
    })
})
