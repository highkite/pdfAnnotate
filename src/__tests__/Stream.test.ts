import { Stream } from '../stream';

test('getNBytesAsNumber', () => {
    let data = new Uint8Array([15, 14, 200, 120])
    let str = new Stream(data)

    expect(str.getNBytesAsNumber()).toBe(15)
    expect(str.peekNBytesAsNumber(1, 1)).toBe(14)
    expect(str.peekNBytesAsNumber(1, 2)).toBe(200)
    expect(str.peekNBytesAsNumber(1, 3)).toBe(120)

    expect(str.peekNBytesAsNumber(2, 0)).toBe(3854)
    expect(str.peekNBytesAsNumber(2, 2)).toBe(51320)
    expect(str.peekNBytesAsNumber(3, 1)).toBe(968824)

    expect(str.getNBytesAsNumber()).toBe(14)
    expect(str.getNBytesAsNumber(2)).toBe(51320)
})

test('getNBytesAsNumber_2', () => {
    let data = new Uint8Array([15, 14, 200, 120, 1, 0, 0, 5])
    let str = new Stream(data)

    expect(str.getNBytesAsNumber(1)).toBe(15)
    expect(str.getNBytesAsNumber(3)).toBe(968824)

    expect(str.getNBytesAsNumber(1)).toBe(1)
    expect(str.getNBytesAsNumber(3)).toBe(5)
})
