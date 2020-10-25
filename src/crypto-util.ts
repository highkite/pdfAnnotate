import { Util } from './util';
import * as crypto from "crypto-js";

export class CryptoUtil {
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

    /**
     * Transforms a uint8array into a crypto-js word array
     * */
    public static convertToWordArray(arr : Uint8Array) : crypto.lib.WordArray {
        let new_val_int32 = Util.convertUint8ArrayToInt32Array(arr)
        return crypto.lib.WordArray.create(Array.from(new_val_int32), arr.length)
    }

    /**
     * Returns the MD5 hash
     * */
    public static MD5(data : crypto.lib.WordArray | Uint8Array) : crypto.lib.WordArray {
        if (data instanceof Uint8Array) {
            data = CryptoUtil.convertToWordArray(data)
        }

        return crypto.MD5(data)
    }

    /**
     * Returns the MD5 hash as hex string
     * */
    public static MD5Hex(data : crypto.lib.WordArray | Uint8Array) : string {
        return CryptoUtil.MD5(data).toString(crypto.enc.Hex)
    }

    /**
     * Returns the RC4 encrypted data
     * */
    public static RC4(data : crypto.lib.WordArray | Uint8Array, key : crypto.lib.WordArray | Uint8Array) : crypto.lib.WordArray {
        if (data instanceof Uint8Array) {
            data = CryptoUtil.convertToWordArray(data)
        }

        if (key instanceof Uint8Array) {
            key = CryptoUtil.convertToWordArray(key)
        }

        return crypto.RC4.encrypt(data, key).ciphertext
    }

    /**
     * Returns the RC4 encrypted data as hex string
     * */
    public static RC4Hex(data : crypto.lib.WordArray | Uint8Array, key : crypto.lib.WordArray | Uint8Array) : string {
        return CryptoUtil.RC4(data, key).toString(crypto.enc.Hex)
    }

    /**
     * Pads the provided password string
     * */
    public static padPasswortString(password : Uint8Array | string) : Uint8Array {
        if (typeof password === 'string') {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        let ret_val = new Uint8Array(32)
        ret_val.set(password.slice(0, 32))

        if (password.length < 32) {
            ret_val.set(CryptoUtil.PADDING_STRING.slice(0, 32 - password.length), password.length)
        }

        return ret_val
    }
}
