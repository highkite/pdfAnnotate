import { CryptoUtil } from '../crypto-util'
import { Util } from '../util'

test('testMD5', () => {
    let val = new Uint8Array(Util.convertStringToAscii(""))
    expect(CryptoUtil.MD5Hex(val)).toBe("d41d8cd98f00b204e9800998ecf8427e")

    val = new Uint8Array(Util.convertStringToAscii("abc"))
    expect(CryptoUtil.MD5Hex(val)).toBe("900150983cd24fb0d6963f7d28e17f72")
})

test('RC4Encryption', () => {
    let data = new Uint8Array(Util.convertHexStringToByteArray("0123456789abcdef"))
    let key = new Uint8Array(Util.convertHexStringToByteArray("0123456789abcdef"))

    expect(CryptoUtil.RC4Hex(data, key)).toBe("75b7878099e0c596")

    data = new Uint8Array(Util.convertHexStringToByteArray("75b7878099e0c596"))
    key = new Uint8Array(Util.convertHexStringToByteArray("0123456789abcdef"))

    expect(CryptoUtil.RC4Hex(data, key)).toBe("0123456789abcdef")

    data = new Uint8Array(Util.convertHexStringToByteArray("0000000000000000"))
    key = new Uint8Array(Util.convertHexStringToByteArray("0123456789abcdef"))

    expect(CryptoUtil.RC4Hex(data, key)).toBe("7494c2e7104b0879")

    data = new Uint8Array(Util.convertHexStringToByteArray("0000000000000000"))
    key = new Uint8Array(Util.convertHexStringToByteArray("0000000000000000"))

    expect(CryptoUtil.RC4Hex(data, key)).toBe("de188941a3375d3a")
    //<key> <data>
    //
    let _key = "0123456789abcdef"
    let _data = "010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "10101010101010101010101010101010101010101010101010101010101010101010" +
        "101010101010101010101"
    let expected =  "7595c3e6114a09780c4ad452338e1ffd9a1be9498f813d76" +
        "533449b6778dcad8c78a8d2ba9ac66085d0e53d59c26c2d1c490c1ebbe0ce66d1b6b" +
        "1b13b6b919b847c25a91447a95e75e4ef16779cde8bf0a95850e32af9689444fd377" +
        "108f98fdcbd4e726567500990bcc7e0ca3c4aaa304a387d20f3b8fbbcd42a1bd311d" +
        "7a4303dda5ab078896ae80c18b0af66dff319616eb784e495ad2ce90d7f772a81747" +
        "b65f62093b1e0db9e5ba532fafec47508323e671327df9444432cb7367cec82f5d44" +
        "c0d00b67d650a075cd4b70dedd77eb9b10231b6b5b741347396d62897421d43df9b4" +
        "2e446e358e9c11a9b2184ecbef0cd8e7a877ef968f1390ec9b3d35a5585cb009290e" +
        "2fcde7b5ec66d9084be44055a619d9dd7fc3166f9487f7cb272912426445998514c1" +
        "5d53a18c864ce3a2b7555793988126520eacf2e3066e230c91bee4dd5304f5fd0405" +
        "b35bd99c73135d3d9bc335ee049ef69b3867bf2d7bd1eaa595d8bfc0066ff8d31509" +
        "eb0c6caa006c807a623ef84c3d33c195d23ee320c40de0558157c822d4b8c569d849" +
        "aed59d4e0fd7f379586b4b7ff684ed6a189f7486d49b9c4bad9ba24b96abf924372c" +
        "8a8fffb10d55354900a77a3db5f205e1b99fcd8660863a159ad4abe40fa48934163d" +
        "dde542a6585540fd683cbfd8c00f12129a284deacc4cdefe58be7137541c047126c8" +
        "d49e2755ab181ab7e940b0c0"

    data = new Uint8Array(Util.convertHexStringToByteArray(_data))
    key = new Uint8Array(Util.convertHexStringToByteArray(_key))

    expect(CryptoUtil.RC4Hex(data, key)).toBe(expected)
})

test('testPadding', () => {
    let pwd = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35])
    let pwd_cut = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])
    expect(CryptoUtil.padPasswortString(pwd).length).toEqual(32)
    expect(CryptoUtil.padPasswortString(pwd)).toEqual(pwd_cut)
})

test('testPadding_2', () => {
    let pwd = new Uint8Array([1, 2, 3, 4, 5, 6])
    let pwd_padded = new Uint8Array([1,2,3,4,5,6,40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12])

    expect(CryptoUtil.padPasswortString(pwd).length).toEqual(32)
    expect(CryptoUtil.padPasswortString(pwd)).toEqual(pwd_padded)
})

test('testPadding_3', () => {
    let pwd = new Uint8Array([])
    let pwd_padded = new Uint8Array([40, 191, 78, 94, 78, 117, 138, 65, 100, 0, 78, 86, 255, 250, 1, 8, 46, 46, 0, 182, 208, 104, 62, 128, 47, 12, 169, 254, 100, 83, 105, 122])

    expect(CryptoUtil.padPasswortString(pwd).length).toEqual(32)
    expect(CryptoUtil.padPasswortString(pwd)).toEqual(pwd_padded)
})
