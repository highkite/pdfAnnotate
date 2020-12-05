import { Util } from './util';
import * as crypto from "crypto-js";

export type WordArray = crypto.lib.WordArray

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
    public static convertToWordArray(arr : Uint8Array) : WordArray {
        let new_val_int32 = Util.convertUint8ArrayToInt32Array(arr)
        return crypto.lib.WordArray.create(Array.from(new_val_int32), arr.length)
    }

    /**
     * Converts a given word array into a uint8 array
     * */
    public static convertWordArrayToByteArray(arr : WordArray) : Uint8Array {
        return Util.convertInt32ArrayToUint8Array(arr.words)
    }

    /**
     * Converts a number into a little endian byte array
     * */
    public static convertNumberToLittleEndianByteArray(nbr : number) : Uint8Array {
        return Util.convertInt32ArrayToUint8Array(new Int32Array([nbr])).reverse()
    }

    /**
     * Returns the MD5 hash
     * */
    public static MD5(data : WordArray | Uint8Array) : WordArray {
        if (data instanceof Uint8Array) {
            data = CryptoUtil.convertToWordArray(data)
        }

        return crypto.MD5(data)
    }

    /**
     * Returns the MD5 hash as byte array
     * */
    public static MD5AsByteArray(data : WordArray | Uint8Array) : Uint8Array {
        if (data instanceof Uint8Array) {
            data = CryptoUtil.convertToWordArray(data)
        }

        return CryptoUtil.convertWordArrayToByteArray(crypto.MD5(data))
    }

    /**
     * Returns the MD5 hash as hex string
     * */
    public static MD5Hex(data : WordArray | Uint8Array) : string {
        return CryptoUtil.MD5(data).toString(crypto.enc.Hex)
    }

    /**
     * Returns the RC4 encrypted data
     * */
    public static RC4(data : WordArray | Uint8Array, key : WordArray | Uint8Array) : WordArray {
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
    public static RC4Hex(data : WordArray | Uint8Array, key : WordArray | Uint8Array) : string {
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

    /**
     * Xors every byte of the provided _byte_array with the value _k
     * */
    public static xorBytes(_byte_array : Uint8Array, _k : number) : WordArray {
        let _ret_val : number[] = []
        for (let i = 0; i < _byte_array.length; ++i){
            _ret_val.push(_byte_array[i] ^ _k)
        }

        return CryptoUtil.convertToWordArray(new Uint8Array(_ret_val))
    }
}
