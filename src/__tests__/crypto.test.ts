import { RC4CryptoEngine, RC4_40_BIT } from '../crypto'
import { Util } from '../util'

test('testRC4CryptoEngine', () => {
    let engine = new RC4CryptoEngine({
        version : 2,
        revision : 3,
        filter : "/Standard",
        user_pwd_c : undefined,
        owner_pwd_c : new Uint8Array(Util.convertHexStringToByteArray("103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14")),
        length : 128,
        permissions : -3904,

        user_pwd: "",
        owner_pwd: "123"
    }, [new Uint8Array(Util.convertHexStringToByteArray("59523cb0e70e03cd47937869d5490bf8"))])

    let encryption_key = engine.computeEncryptionKey()
    expect(encryption_key).toEqual(new Uint8Array([26, 57, 1, 140, 231, 60, 202, 50, 87, 216, 84, 158, 107, 24, 14, 149]))

    let user_pwd = engine.computeUserPassword()
    expect(Util.convertByteArrayToHexString(user_pwd)).toBe("6DB3276485B36A7440877D6FA911D11A")
})

test('testRC4_40BitCryptoEngine', () => {
    let engine = new RC4CryptoEngine({
        version : 1,
        revision : 2,
        filter : "/Standard",
        user_pwd_c : new Uint8Array(Util.convertHexStringToByteArray("f892e657be3f677a91a5e1c11631d9df9323c8a8d281a5599d2ae83aa50b3511")),
        owner_pwd_c : new Uint8Array(Util.convertHexStringToByteArray("83016a0b91ea6d50cc9ba60d02eaf3f2afb428736e66b5ff6420da9707a1f61b")),
        length : 40,
        permissions : -60,

        user_pwd: "",
        owner_pwd: ""
    }, [new Uint8Array(Util.convertHexStringToByteArray("45373634384138442d443739302d343842462d384337332d383043424336364343383541"))], RC4_40_BIT)

    let encryption_key = engine.computeEncryptionKey()
    expect(encryption_key).toEqual(new Uint8Array([254, 240, 217, 161, 128]))

    let user_pwd = engine.computeUserPassword()
    expect(Util.convertByteArrayToHexString(user_pwd)).toBe("F892E657BE3F677A91A5E1C11631D9DF9323C8A8D281A5599D2AE83AA50B3511")
})
