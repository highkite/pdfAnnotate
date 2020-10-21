import { Encryption } from '../encryption'

test('testPadding', () => {
    let pwd = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35])
    let pwd_cut = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])
    let encryption = new Encryption()

    expect(encryption.padPasswortString(pwd).length).toEqual(32)
    expect(encryption.padPasswortString(pwd)).toEqual(pwd_cut)
})

test('testPadding_2', () => {
    let pwd = new Uint8Array([1, 2, 3, 4, 5, 6])
    let pwd_padded = new Uint8Array([1,2,3,4,5,6,40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12])
    let encryption = new Encryption()

    expect(encryption.padPasswortString(pwd).length).toEqual(32)
    expect(encryption.padPasswortString(pwd)).toEqual(pwd_padded)
})

test('testPadding_3', () => {
    let pwd = new Uint8Array([])
    let pwd_padded = new Uint8Array([40, 191, 78, 94, 78, 117, 138, 65, 100, 0, 78, 86, 255, 250, 1, 8, 46, 46, 0, 182, 208, 104, 62, 128, 47, 12, 169, 254, 100, 83, 105, 122])
    let encryption = new Encryption()

    expect(encryption.padPasswortString(pwd).length).toEqual(32)
    expect(encryption.padPasswortString(pwd)).toEqual(pwd_padded)
})

test('testComputeEncryptionKey', () => {
    let encryption = new Encryption()
    encryption.computeEncryptionKey("")
})

test('testComputeOwnerPassword', () => {
    let encryption = new Encryption()
    encryption.computeOwnerPassword("")
})
