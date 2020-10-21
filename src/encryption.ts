import { Util } from './util'

export class Encryption {
    public static PADDING_STRING : number[] = [
        0x28,
        0xBF,
        0x4E,
        0x5E,
        0x4E,
        0x75,
        0x8A,
        0x41,
        0x64,
        0x00,
        0x4E,
        0x56,
        0xFF,
        0xFA,
        0x01,
        0x08,
        0x2E,
        0x2E,
        0x00,
        0xB6,
        0xD0,
        0x68,
        0x3E,
        0x80,
        0x2F,
        0x0C,
        0xA9,
        0xFE,
        0x64,
        0x53,
        0x69,
        0x7A]


    computeEncryptionKey(password : string | Uint8Array) : Uint8Array {
        if (typeof password === "string") {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        password = this.padPasswortString(password)

        return password
    }

    padPasswortString(password : Uint8Array) : Uint8Array {
        let ret_val = new Uint8Array(32)
        ret_val.set(password.slice(0, 32))

        if (password.length < 32) {
            ret_val.set(Encryption.PADDING_STRING.slice(0, 32 - password.length), password.length)
        }

        // final check
        if (ret_val.length !== 32) {
            throw Error("Invalid password length: " + password.length + " but must be 32")
        }
        return ret_val
    }
}
