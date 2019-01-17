import { testDocument, testDocument2 } from './Data'
import { AnnotationFactory } from '../annotation'
import { Writer } from '../writer'

test('write testDocument', () => {
        let data = new Int8Array(testDocument)
        let fac : AnnotationFactory = new AnnotationFactory(data)

        //fac.createTextAnnotation(0, [50, 50], "Test123", "Max")
        fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

        fac.write()
})

test('write testDocument2', () => {
        let data = new Int8Array(testDocument2)
        let fac : AnnotationFactory = new AnnotationFactory(data)

        fac.createTextAnnotation(0, [50, 50, 80, 80], "Test123", "Max")
        fac.createHighlightAnnotation(0, [50, 50, 100, 100], "Test1234", "Max")

        fac.write()
})
