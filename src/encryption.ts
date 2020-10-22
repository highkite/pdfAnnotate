import { Util } from './util'
import { Md5 } from 'ts-md5/dist/md5';
import * as crypto from "crypto-js";

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

        console.log(new Md5().appendByteArray(password).end())

        return password
    }

    convertInt32ArrayToUint8Array(a : Int32Array) : Uint8Array {
        let ret_val : Uint8Array = new Uint8Array(a.length * 4)

        for(let i = 0; i < a.length; ++i) {
            for(let j = 0; j < 4; ++j) {
                ret_val[i * 4 + j] = (a[i] >> 8 * (4 - j - 1)) & 0xFF
            }
        }

        return ret_val
    }

    convertUint8ArrayToInt32Array(a : Uint8Array) : Int32Array {
        let ret_val : Int32Array = new Int32Array(Math.ceil(a.length / 4))

        let i = 0
        for(; i < a.length - 3; i += 4) {
            ret_val[i/4] = (a[i] << 24) + (a[i + 1] << 16) + (a[i + 2] << 8) + a[i + 3]
        }

        ret_val[i/4] = 0
        while(i < a.length) {
            ret_val[Math.floor(i/4)] += (a[i] << 8 * (a.length - i))
            ++i
        }

        return ret_val
    }

    computeOwnerPassword(password : string | Uint8Array) : Uint8Array {
        /**
         * THIS WORKS FOR THE ENCRYPITON AS CREATED IN test17.pdf where only the ownerpassword is set to "123" and the user password is left empty
         * */
        password = "123"
        if (typeof password === "string") {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        password = this.padPasswortString(password)
        console.log(password.join(' '))
        console.log(Util.convertByteArrayToHexString(password))
        let password_as_Int32Array = this.convertUint8ArrayToInt32Array(password)
        console.log(password_as_Int32Array.join(' '))
        console.log("DOUBLE CHECK")
        console.log(this.convertInt32ArrayToUint8Array(password_as_Int32Array).join(' '))
        let password_as_wordarray = crypto.lib.WordArray.create(Array.from(password_as_Int32Array), password.length)
        console.log(password_as_wordarray)
        console.log(crypto.enc.Hex.parse(Util.convertByteArrayToHexString(password)))

        console.log(">>>> CHECK MD5")
        console.log("Empty String is " + crypto.MD5("") + " but should be \"d41d8cd98f00b204e9800998ecf8427e\"")
        console.log("\"abc\" String is " + crypto.MD5("abc") + " but should be \"900150983cd24fb0d6963f7d28e17f72\"")

        console.log("TEST WordArray as parameter:")
        let abc_ascii = Util.convertStringToAscii("abc")
        console.log(abc_ascii)
        let abc_int32 = this.convertUint8ArrayToInt32Array(new Uint8Array(abc_ascii))
        console.log(abc_int32)
        let abc_word_array = crypto.lib.WordArray.create(Array.from(abc_int32),3)
        console.log(abc_word_array)
        console.log("\"abc\" word array is " + crypto.MD5(abc_word_array) + " but should be \"900150983cd24fb0d6963f7d28e17f72\"")
        console.log(crypto.enc.Utf8.parse("abc"))
        console.log(">>>> END CHECK MD5")

        let h = crypto.MD5(password_as_wordarray)

        for (let i = 0; i < 50; ++i) {
            h = crypto.MD5(h)
        }

        console.log("HASHING FINISHED")
        console.log(h)

        let h_as_byte_array = this.convertInt32ArrayToUint8Array(new Int32Array(h.words))
        console.log("HASH AS BYTE ARRAY:")
        console.log(h_as_byte_array)

        let f_xorbytes = (_byte_array : Uint8Array, _k : number) =>  {
            let _ret_val : number[] = []
            for (let i = 0; i < _byte_array.length; ++i){
                console.log("-- " + _byte_array[i] + " ^ " + _k + " = " + (_byte_array[i] ^ _k))
                _ret_val.push(_byte_array[i] ^ _k)
            }

            return crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(new Uint8Array(_ret_val))), _ret_val.length)
        }

        //let x = password_as_wordarray
        let pre_x = this.padPasswortString(new Uint8Array(Util.convertStringToAscii("")))
        let x = crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(pre_x)), pre_x.length)

        for (let i = 0; i <= 19; ++i) {
            x = crypto.RC4.encrypt(x, f_xorbytes(h_as_byte_array, i)).ciphertext
        }

        let owner : string = "63981688733872DEC7983D3C6EB1F412CC535EA2DAA2AB171E2BBC4E36B21887"
        console.log("OWNER: " + owner)
        console.log(Util.convertHexStringToByteArray(owner).join(' '))
        console.log("=========================================================")
        console.log("28 1036 76fe 04d5 6580 9632 2d74 5ba2 9376 74a8 7cfa 5aa3 c846 31c6 bcb8 5c28 b6ed 1429")
        let val = [0x10, 0x36, 0x76, 0xfe, 0x04, 0xd5, 0x65, 0x80, 0x96, 0x32, 0x2d, 0x74]
        console.log(Util.convertAsciiToString(new Uint8Array(val)))
        console.log("RESULT:")
        console.log(x.toString(crypto.enc.Hex))
        console.log(owner)
        return password
    }

    computeOwnerPassword_2(password : string | Uint8Array) : Uint8Array {
        if (typeof password === "string") {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        password = this.padPasswortString(password)
        //crypto.MD5(password)
        //
        console.log("<<<<<<<<<<<<<<<<<<<<<")
        var hex_string = "0123456789abcdef"
        console.log("Hex_string: " + hex_string)
        console.log("Byte array: ")
        let byte_array = Util.convertHexStringToByteArray(hex_string)
        console.log(byte_array)
        console.log("Int32Array: ")
        console.log(this.convertUint8ArrayToInt32Array(new Uint8Array(byte_array)))
        console.log("<<<<<<<<<<<<<<<<<<<<<")

        let h = new Md5().appendByteArray(password).end()

        for (let i = 0; i < 50; ++i) {
            h = new Md5().appendAsciiStr(h as string).end()
        }

        console.log(h)
        let rc4_key = Util.convertHexStringToByteArray(h as string)
        console.log(rc4_key.join(' '))

        let xorbytes = function(arr : number[], k : number) {
            let ret_val : number[] = []
            for( let i = 0; i < arr.length; ++i) {
                ret_val.push(arr[i] ^ k)
            }

            return ret_val
        }

        let x = crypto.lib.WordArray.create(Array.from(password))

        for (let i = 0; i < 20; ++i) {
            x = crypto.RC4.encrypt(x, crypto.lib.WordArray.create(xorbytes(rc4_key, i))).ciphertext
        }

        console.log(x)

        let owner : string = "63981688733872DEC7983D3C6EB1F412CC535EA2DAA2AB171E2BBC4E36B21887"
        console.log("OWNER: " + owner)
        console.log(Util.convertHexStringToByteArray(owner).join(' '))

        //let _key = crypto.lib.WordArray.create(Util.convertHexStringToByteArray("0123456789abcdef"))
        //let _input = crypto.lib.WordArray.create(Util.convertHexStringToByteArray("0123456789abcdef"))
        //
        // #################
        //
        // This is a working encryption using crypto js that conforms to ARC4 as in the unit test of pdfjs
        // https://github.com/mozilla/pdf.js/blob/7edc5cb79fe829d45fed85e2b4b6d8594522cc10/test/unit/crypto_spec.js#L112
        console.log('------------------------------- _key')
        let _key = crypto.enc.Hex.parse("0123456789abcdef")
        _key = crypto.lib.WordArray.create([19088743, -1985229329])
        console.log(_key)
        console.log('----')
        console.log(this.convertInt32ArrayToUint8Array(new Int32Array([19088743, -1985229329])))
        console.log(Util.convertHexStringToByteArray("0123456789abcdef").join(' '))
        console.log('------------------------------- _key')

        let _input = crypto.enc.Hex.parse("0123456789abcdef")
        console.log("CORRECT:")
        console.log(crypto.RC4.encrypt(_key, _input).ciphertext.toString(crypto.enc.Hex))


        return password
    }

    //    computeOwnerPassword(password : string | Uint8Array) : Uint8Array {
    //        if (typeof password === "string") {
    //            password = new Uint8Array(Util.convertStringToAscii(password))
    //        }
    //
    //        password = this.padPasswortString(password)
    //
    //        console.log(password.join(' '))
    //
    //        // TODO!! IF REVISION >= 3
    //        let hash = new Md5().appendByteArray(password).end(true)
    //        console.log(new Md5().appendByteArray(password).end())
    //        console.log(Array.from(hash as Int32Array).join(' '))
    //        console.log(hash)
    //        console.log(this.convertInt32ArrayToUint8Array(hash as Int32Array).join(' '))
    //        for (let i = 0; i < 49; ++i) {
    //            hash = new Md5().appendByteArray(this.convertInt32ArrayToUint8Array(hash as Int32Array)).end(true)
    //        }
    //
    //        // /Length is 40 so we use the entire 16 bytes ????
    //        let rc4_encryption_key = this.convertInt32ArrayToUint8Array(hash as Int32Array)
    //
    //        console.log(rc4_encryption_key.join(' '))
    //
    //        let encrypted = crypto.RC4.encrypt(Util.convertUnicodeToString(password), Util.convertUnicodeToString(rc4_encryption_key)).toString()
    //
    //        console.log(encrypted)
    //
    //        for (let i = 0; i < 19; ++i) {
    //            let new_key = rc4_encryption_key
    //            for (let j = 0; j < new_key.length; ++j) {
    //                new_key[j] ^= j
    //            }
    //            encrypted = crypto.RC4.encrypt(encrypted, Util.convertUnicodeToString(new_key)).toString()
    //        }
    //
    //        console.log(encrypted)
    //
    //        return password
    //    }

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

    getRC4Key() : any {
        console.log("###########################################")
        console.log("getRC4Key")
        let userpwd = Encryption.PADDING_STRING
        userpwd = Array.from(this.padPasswortString(new Uint8Array(Util.convertStringToAscii("123"))))
        console.log("userpwd: " + userpwd.join(" "))
        let o_entry = [0x10, 0x36, 0x76, 0xfe, 0x04, 0xd5, 0x65, 0x80, 0x96, 0x32, 0x2d, 0x74, 0x5b, 0xa2, 0x93, 0x76, 0x74, 0xa8, 0x7c, 0xfa, 0x5a, 0xa3, 0xc8, 0x46, 0x31, 0xc6, 0xbc, 0xb8, 0x5c, 0x28, 0xb6, 0xed, 0x14]
        console.log("o_entry: " + o_entry.join(" "))
        console.log("o_entry Length: " + o_entry.length)
        console.log(Util.convertHexStringToByteArray("103676fe04d5658096322d745ba2937674a87cfa5aa3c84631c6bcb828b6ed14").join(" "))
        let P_2 = this.convertInt32ArrayToUint8Array(new Int32Array([-3904]))
        let P = new Uint8Array([128, 0, 15, 64])
        //P = new Uint8Array([64, 15, 0, 128])
        P = P_2.reverse()
        console.log("P: " + P.join(" "))
        let id_str : string = "59523cb0e70e03cd47937869d5490bf8"
        let file_id : number[] = Util.convertHexStringToByteArray(id_str)
        console.log("file_id: " + file_id.join(" "))

        let stuff = new Uint8Array(userpwd.length + o_entry.length + P.length + file_id.length)
        stuff.set(userpwd, 0)
        stuff.set(o_entry, userpwd.length)
        stuff.set(P, userpwd.length + o_entry.length)
        stuff.set(file_id, userpwd.length + o_entry.length + P.length)

        console.log("aggregated: " + stuff.join(" "))

        let stuff_word_array = crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(stuff)), stuff.length)

        let h = crypto.MD5(stuff_word_array)

        for (let i = 0; i < 50; ++i) {
            h = crypto.MD5(h)
        }

        return this.convertInt32ArrayToUint8Array(new Int32Array(h.words))
    }

    computeUserPassword(password : string | Uint8Array) : Uint8Array {
        if (typeof password === "string") {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        let userpwd_string = "28BF4E5E4E758A4164004E56FFFA01082E2E00B6D0683E802F0CA9FE6453697A"
        let userpwd =  Util.convertHexStringToByteArray(userpwd_string)
        let userpwd_int32 = this.convertUint8ArrayToInt32Array(new Uint8Array(userpwd))

        let new_val_word_array = crypto.lib.WordArray.create(Array.from(userpwd_int32), userpwd.length)

        console.log(crypto.MD5(new_val_word_array).toString())
        console.log("===========================================")
        console.log(crypto.MD5(crypto.enc.Hex.parse(userpwd_string)).toString())

        let qa = function(ba : number[]) {
            var wa : number[] = [],
                i;
            for (i = 0; i < ba.length; i++) {
                wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
            }

            return crypto.lib.WordArray.create(wa, ba.length);
        }

        console.log("===========================================")
        console.log(crypto.MD5(qa(userpwd)).toString())

        return password
    }

    computeUserPassword_3(password:string, _o_entry : string, permission : number, file_id_string : string) : Uint8Array {

        let id_str_array : number[] = Util.convertHexStringToByteArray(file_id_string)

        let userpwd = Encryption.PADDING_STRING

        let new_val : Uint8Array = new Uint8Array(userpwd.length + id_str_array.length)
        new_val.set(userpwd, 0)
        new_val.set(id_str_array, userpwd.length)

        let new_val_int32 = this.convertUint8ArrayToInt32Array(new_val)
        let new_val_word_array = crypto.lib.WordArray.create(Array.from(new_val_int32), new_val.length)

        let x = crypto.MD5(new_val_word_array)

        let rc4key = this.getRC4Key_2(password, _o_entry, permission, file_id_string)

        let f_xorbytes = (_byte_array : Uint8Array, _k : number) =>  {
            let _ret_val : number[] = []
            for (let i = 0; i < _byte_array.length; ++i){
                _ret_val.push(_byte_array[i] ^ _k)
            }

            return crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(new Uint8Array(_ret_val))), _ret_val.length)
        }

        for(let i = 0; i < 20; ++i) {
            x = crypto.RC4.encrypt(x, f_xorbytes(rc4key, i)).ciphertext
        }

        console.log("-----------------------------------------")
        console.log(x.toString(crypto.enc.Hex))
        console.log("6db3 2764 85b3 6a74 4087 7d6f a911 d11a")

        return new Uint8Array()
    }

    computeUserPassword_2(password : string | Uint8Array) : Uint8Array {
        if (typeof password === "string") {
            password = new Uint8Array(Util.convertStringToAscii(password))
        }

        let userpwd = Encryption.PADDING_STRING
        let userpwd_string = "28BF4E5E4E758A4164004E56FFFA01082E2E00B6D0683E802F0CA9FE6453697A"
        console.log("Userpwd: " + userpwd.join(" "))
        console.log("Userpwd from string: " + Util.convertHexStringToByteArray(userpwd_string).join(" "))
        let id_str : string = "59523cb0e70e03cd47937869d5490bf8"
        let id_str_array : number[] = Util.convertHexStringToByteArray(id_str)
        console.log("file_id: " + id_str_array.join(" "))

        let new_val : Uint8Array = new Uint8Array(userpwd.length + id_str_array.length)
        new_val.set(userpwd, 0)
        new_val.set(id_str_array, userpwd.length)
        console.log("Merged: " + new_val.join(" "))

        let new_val_int32 = this.convertUint8ArrayToInt32Array(new_val)

        console.log("int32 array: " + new_val_int32.join(" "))
        console.log("Double check: " + this.convertInt32ArrayToUint8Array(new_val_int32).join(" "))

        let new_val_word_array = crypto.lib.WordArray.create(Array.from(new_val_int32), new_val.length)
        console.log(new_val_word_array)
        console.log("Merged from string as byte array: " + Util.convertHexStringToByteArray(userpwd_string + id_str).join(" "))

        console.log("---- ALTERNATE WORD ARRAY")
        let new_val_word_array_2 = crypto.enc.Hex.parse(userpwd_string + id_str)
        console.log(new_val_word_array_2)

        // new_val_word_array = new_val_word_array_2

        let x = crypto.MD5(new_val_word_array)

        console.log("COMPUTE HASH")
        console.log(x)

        let rc4key = this.getRC4Key()

        console.log("RC4KEY: " + rc4key.join(" "))

        let f_xorbytes = (_byte_array : Uint8Array, _k : number) =>  {
            let _ret_val : number[] = []
            for (let i = 0; i < _byte_array.length; ++i){
                _ret_val.push(_byte_array[i] ^ _k)
            }

            return crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(new Uint8Array(_ret_val))), _ret_val.length)
        }

        for(let i = 0; i < 20; ++i) {
            x = crypto.RC4.encrypt(x, f_xorbytes(rc4key, i)).ciphertext
        }

        console.log("-----------------------------------------")
        console.log(x.toString(crypto.enc.Hex))
        console.log("6db3 2764 85b3 6a74 4087 7d6f a911 d11a")

        return password
    }

    getRC4Key_2(password : string, _o_entry : string, permission : number, file_id_string : string) : any {
        let userpwd = Array.from(this.padPasswortString(new Uint8Array(Util.convertStringToAscii(password))))
        console.log(Util.convertByteArrayToHexString(userpwd))
        let o_entry = Util.convertHexStringToByteArray(_o_entry)
        console.log(Util.convertByteArrayToHexString(o_entry))
        console.log("Length: " + o_entry.length)
        let P = this.convertInt32ArrayToUint8Array(new Int32Array([permission])).reverse()
        console.log(P)

        let file_id : number[] = Util.convertHexStringToByteArray(file_id_string)

        let stuff = new Uint8Array(userpwd.length + o_entry.length + P.length + file_id.length)
        stuff.set(userpwd, 0)
        stuff.set(o_entry, userpwd.length)
        stuff.set(P, userpwd.length + o_entry.length)
        stuff.set(file_id, userpwd.length + o_entry.length + P.length)

        let stuff_word_array = crypto.lib.WordArray.create(Array.from(this.convertUint8ArrayToInt32Array(stuff)), stuff.length)

        let h = crypto.MD5(stuff_word_array)

        for (let i = 0; i < 50; ++i) {
            h = crypto.MD5(h)
        }

        return this.convertInt32ArrayToUint8Array(new Int32Array(h.words))

    }
}
