import { Encryption } from '../encryption'
import { Util } from '../util'

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

test('testComputeUserPassword', () => {
    let encryption = new Encryption()
    encryption.computeUserPassword_3("", "103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14", -3904, "59523cb0e70e03cd47937869d5490bf8")
    //encryption.computeUserPassword_3("", "5c74bb5c6688f5eeb18f87b82246a416c481a0877462a4cb401676f49569404c7a5c6e", -3904, "1b26722268299ae2ac3f8d84472c1536")
})

test('testDecrypt', () => {
    let encryption = new Encryption()
    let encrypted_value = new Uint8Array([0x9f, 0x83, 0x5b, 0x81, 0xbd, 0x50, 0xe4, 0x7c, 0x11, 0xa7, 0x86, 0x16, 0x86, 0x47, 0x1c, 0xe6])
    let object_number = 8
    let generation_number = 0

    let decryption_key = encryption.getRC4Key_2("", "103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14", -3904, "59523cb0e70e03cd47937869d5490bf8")

    encryption.decrypt(encrypted_value, object_number, generation_number, decryption_key)
})

test('testDecrypt_2', () => {
    let encryption = new Encryption()
    let value_str = "b4d21cdded1bf93614a3864583161fb006bfe4736659e0a351b1812d8f570687b88e5c620bb3b8c5fb6fb7556fc0" // okular ID
    value_str = "254669e18c06d43d21b6b756b2052ef32be3d65c280200d4ff" // Pop Up Note
    console.log("-- " + value_str.length)
    let encrypted_value = new Uint8Array(Util.convertHexStringToByteArray(value_str))
    console.log("encrypted_value.length : " +  encrypted_value.length)
    let object_number = 8
    let generation_number = 0

    let decryption_key = encryption.getRC4Key_2("", "103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14", -3904, "59523cb0e70e03cd47937869d5490bf8")

    encryption.decrypt(encrypted_value, object_number, generation_number, decryption_key)
    //let res = "feff0050006f00700020007500700020006e006f00740065"
    //let decrypted_value = new Uint8Array(Util.convertHexStringToByteArray(res))
    //encryption.decrypt(decrypted_value, object_number, generation_number, decryption_key)
    //console.log(encrypted_value.join(" "))
})

test('testDecrypt_3', () => {
    let encryption = new Encryption()
    let value_str = "254669e18c06d43d21b6b756b2052ef32be3d65c280200d4ff" // Pop Up Note
    let encrypted_value = new Uint8Array(Util.convertHexStringToByteArray(value_str))
    let object_number = 8
    let generation_number = 0

    let decryption_key = encryption.getRC4Key_2("", "103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14", -3904, "59523cb0e70e03cd47937869d5490bf8")
    encryption.decrypt_2(encrypted_value, object_number, generation_number, decryption_key)
})

test('testDecrypt_4', () => {
    let encryption = new Encryption()

    // encryption.testEncryption( <KEY> , <DATA>)

    encryption.testEncryption("0123456789abcdef", "0123456789abcdef")
    console.log("MUST BE: 75b7878099e0c596")
    encryption.testEncryption("0123456789abcdef", "0000000000000000")
    console.log("MUST BE: 7494c2e7104b0879")
    encryption.testEncryption("0000000000000000", "0000000000000000")
    console.log("MUST BE: de188941a3375d3a")
    let key = "0123456789abcdef"
    let input = "010101010101010101010101010101010101010101010101010" +
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
    let res = encryption.testEncryption(key, input)
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
    console.log("MUST BE: " + (res === expected))
})
