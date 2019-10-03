import { Page } from '../parser';
import { DocumentHistory } from './DocumentHistory.mock';

test('testPageExtraction', () => {
    //3 0 obj
    //<</Type/Page/Parent 2 0 R/Resources<</Font<</F1 5 0 R/F2 12 0 R/F3 18 0 R>>/ExtGState<</GS10 10 0 R/GS11 11 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI] >>/Annots[ 14 0 R 16 0 R] /MediaBox[ 0 0 595.32 841.92] /Contents 4 0 R/Group<</Type/Group/S/Transparency/CS/DeviceRGB>>/Tabs/S/StructParents 0>>
    //endobj
    let data = new Uint8Array([51, 32, 48, 32, 111, 98, 106, 10, 60, 60, 47, 84, 121, 112, 101, 47, 80, 97, 103, 101, 47, 80, 97, 114, 101, 110, 116, 32, 50, 32, 48, 32, 82, 47, 82, 101, 115, 111, 117, 114, 99, 101, 115, 60, 60, 47, 70, 111, 110, 116, 60, 60, 47, 70, 49, 32, 53, 32, 48, 32, 82, 47, 70, 50, 32, 49, 50, 32, 48, 32, 82, 47, 70, 51, 32, 49, 56, 32, 48, 32, 82, 62, 62, 47, 69, 120, 116, 71, 83, 116, 97, 116, 101, 60, 60, 47, 71, 83, 49, 48, 32, 49, 48, 32, 48, 32, 82, 47, 71, 83, 49, 49, 32, 49, 49, 32, 48, 32, 82, 62, 62, 47, 80, 114, 111, 99, 83, 101, 116, 91, 47, 80, 68, 70, 47, 84, 101, 120, 116, 47, 73, 109, 97, 103, 101, 66, 47, 73, 109, 97, 103, 101, 67, 47, 73, 109, 97, 103, 101, 73, 93, 32, 62, 62, 47, 65, 110, 110, 111, 116, 115, 91, 32, 49, 52, 32, 48, 32, 82, 32, 49, 54, 32, 48, 32, 82, 93, 32, 47, 77, 101, 100, 105, 97, 66, 111, 120, 91, 32, 48, 32, 48, 32, 53, 57, 53, 46, 51, 50, 32, 56, 52, 49, 46, 57, 50, 93, 32, 47, 67, 111, 110, 116, 101, 110, 116, 115, 32, 52, 32, 48, 32, 82, 47, 71, 114, 111, 117, 112, 60, 60, 47, 84, 121, 112, 101, 47, 71, 114, 111, 117, 112, 47, 83, 47, 84, 114, 97, 110, 115, 112, 97, 114, 101, 110, 99, 121, 47, 67, 83, 47, 68, 101, 118, 105, 99, 101, 82, 71, 66, 62, 62, 47, 84, 97, 98, 115, 47, 83, 47, 83, 116, 114, 117, 99, 116, 80, 97, 114, 101, 110, 116, 115, 32, 48, 62, 62, 10, 101, 110, 100, 111, 98, 106, 10])

    let docHist = new DocumentHistory()

    let page = new Page(data, <any>docHist!)
    page.extract({ pointer: 0, id: 3, generation: 0, free: false, update: true }, {})
    expect(page.object_id!.obj).toBe(3)
    expect(page.object_id!.generation).toBe(0)
    expect(page.hasAnnotsField).toBeTruthy()
    expect(page.annots[0].obj).toBe(14)
    expect(page.annots[0].generation).toBe(0)
    expect(page.annots[1].obj).toBe(16)
    expect(page.annots[1].generation).toBe(0)

})
