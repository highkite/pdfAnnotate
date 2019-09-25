import { DocumentHistory } from '../document-history';
import { testDocument } from './Data';

test('extractDocumentEntry', () => {
    let hist = new DocumentHistory(new Uint8Array(testDocument))

    hist.extractDocumentEntry()

    let us = hist.updates[0]

    expect(us.trailer.prev).toBe(1150)
    expect(us.trailer.root.generation).toBe(0)
    expect(us.trailer.root.obj).toBe(1)
    expect(us.trailer.size).toBe(9)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(7)
    expect(us.refs[1].pointer).toBe(1321)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(8)
    expect(us.refs[2].pointer).toBe(1352)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()
})

test('extractDocumentHistory', () => {
    let hist = new DocumentHistory(new Uint8Array(testDocument))

    hist.extractDocumentHistory()

    expect(hist.updates.length).toBe(3)

    let us = hist.updates[0]

    expect(us.trailer.prev).toBe(1150)
    expect(us.trailer.root.generation).toBe(0)
    expect(us.trailer.root.obj).toBe(1)
    expect(us.trailer.size).toBe(9)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(7)
    expect(us.refs[1].pointer).toBe(1321)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(8)
    expect(us.refs[2].pointer).toBe(1352)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    us = hist.updates[1]

    expect(us.trailer.prev).toBe(492)
    expect(us.trailer.root.generation).toBe(0)
    expect(us.trailer.root.obj).toBe(1)
    expect(us.trailer.size).toBe(8)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(1)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(3)
    expect(us.refs[1].pointer).toBe(678)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(6)
    expect(us.refs[2].pointer).toBe(792)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    expect(us.refs[3].id).toBe(7)
    expect(us.refs[3].pointer).toBe(1125)
    expect(us.refs[3].generation).toBe(0)
    expect(us.refs[3].free).toBeFalsy()
    expect(us.refs[3].update).toBeTruthy()

    us = hist.updates[2]

    expect(us.trailer.prev).toBeUndefined()
    expect(us.trailer.root.generation).toBe(0)
    expect(us.trailer.root.obj).toBe(1)
    expect(us.trailer.size).toBe(6)

    expect(us.refs[0].id).toBe(0)
    expect(us.refs[0].pointer).toBe(0)
    expect(us.refs[0].generation).toBe(65535)
    expect(us.refs[0].free).toBeTruthy()
    expect(us.refs[0].update).toBeFalsy()

    expect(us.refs[1].id).toBe(1)
    expect(us.refs[1].pointer).toBe(10)
    expect(us.refs[1].generation).toBe(0)
    expect(us.refs[1].free).toBeFalsy()
    expect(us.refs[1].update).toBeTruthy()

    expect(us.refs[2].id).toBe(2)
    expect(us.refs[2].pointer).toBe(79)
    expect(us.refs[2].generation).toBe(0)
    expect(us.refs[2].free).toBeFalsy()
    expect(us.refs[2].update).toBeTruthy()

    expect(us.refs[3].id).toBe(3)
    expect(us.refs[3].pointer).toBe(173)
    expect(us.refs[3].generation).toBe(0)
    expect(us.refs[3].free).toBeFalsy()
    expect(us.refs[3].update).toBeTruthy()

    expect(us.refs[4].id).toBe(4)
    expect(us.refs[4].pointer).toBe(301)
    expect(us.refs[4].generation).toBe(0)
    expect(us.refs[4].free).toBeFalsy()
    expect(us.refs[4].update).toBeTruthy()

    expect(us.refs[5].id).toBe(5)
    expect(us.refs[5].pointer).toBe(380)
    expect(us.refs[5].generation).toBe(0)
    expect(us.refs[5].free).toBeFalsy()
    expect(us.refs[5].update).toBeTruthy()
})
