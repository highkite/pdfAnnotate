import { RC4CryptoEngine } from '../crypto'
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
