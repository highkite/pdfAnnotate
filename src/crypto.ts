import { Util } from './util';
import {ReferencePointer} from './parser'
import { CryptoUtil } from './crypto-util';

export const RC4_40_BIT : boolean = true;

export interface CryptoConfiguration {
    version : number | undefined // /V parameter
    revision : number | undefined // /R revision number
    filter : string | undefined // The selected filter
    user_pwd_c : Uint8Array | undefined // /U The user password hash
    owner_pwd_c : Uint8Array | undefined // /O The owner password hash
    length : number | undefined // /Length value
    permissions : number | undefined // /P permissions

    user_pwd: string // the user password
    owner_pwd: string // the owner password
}

export interface CryptoEngine {
    encrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array;
    decrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array;

    isUserPasswordCorrect() : boolean;
    isOwnerPasswordCorrect() : boolean;
}

export class IdentityEngine implements CryptoEngine {
    encrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        return data
    }

    decrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        return data
    }

    isUserPasswordCorrect() : boolean {
        return true
    }

    isOwnerPasswordCorrect() : boolean {
        return true
    }
}

export class RC4CryptoEngine implements CryptoEngine {
    private encryptionKey : Uint8Array | undefined = undefined
    private computed_user_password : Uint8Array | undefined = undefined
    private computed_owner_password : Uint8Array | undefined = undefined

    constructor(private cryptoConfiguration: CryptoConfiguration, private file_id : Uint8Array[] | undefined, private rc4_40_bit : boolean = false) { }

    encrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        if (!reference)
            throw Error("Undefined reference pointer of encrypted object")

        let encryptionKey = this.computeEncryptionKey()

        let adapted_key = new Uint8Array(encryptionKey.length + 5)
        adapted_key.set(encryptionKey, 0)
        let obj = CryptoUtil.convertNumberToLittleEndianByteArray(reference.obj)
        adapted_key.set(obj.slice(0, 3), encryptionKey.length)
        let gen = CryptoUtil.convertNumberToLittleEndianByteArray(reference.generation)
        adapted_key.set(gen.slice(0, 2), encryptionKey.length + 3)

        let key_hash = CryptoUtil.MD5AsByteArray(adapted_key)

        let encrypted = CryptoUtil.RC4(data, key_hash.slice(0, Math.min(encryptionKey.length + 5, 16)))

        return CryptoUtil.convertWordArrayToByteArray(encrypted)
    }

    decrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        return this.encrypt(data, reference)
    }

    /**
     * Computes the RC4 encryption key
     * */
    computeEncryptionKey() : Uint8Array {
        if (this.encryptionKey)
            return this.encryptionKey

        let userpwd = CryptoUtil.padPasswortString(this.cryptoConfiguration.user_pwd)

        if(!this.cryptoConfiguration.owner_pwd_c)
            throw Error("Invalid /O value (owner password)")

        let oValue : Uint8Array = this.cryptoConfiguration.owner_pwd_c

        if (oValue.length !== 32)
            throw Error(`Invalid length of owner value. Is ${oValue.length} but must be 32.`)

        if (!this.cryptoConfiguration.permissions)
            throw Error("Permissions not set")

        let permissions = CryptoUtil.convertNumberToLittleEndianByteArray(this.cryptoConfiguration.permissions)

        if (!this.file_id || this.file_id.length === 0)
            throw Error("File ID not set")

        let keylength = 40
        if (this.cryptoConfiguration.length)
            keylength = this.cryptoConfiguration.length

        let file_id : Uint8Array = this.file_id[0]

        let stuff = new Uint8Array(userpwd.length + oValue.length + permissions.length + file_id.length)
        stuff.set(userpwd, 0)
        stuff.set(oValue, userpwd.length)
        stuff.set(permissions, userpwd.length + oValue.length)
        stuff.set(file_id, userpwd.length + oValue.length + permissions.length)

        let h = CryptoUtil.MD5AsByteArray(stuff)
        keylength = keylength >> 3

        if (this.cryptoConfiguration.revision && this.cryptoConfiguration.revision >= 3) {
            for (let i = 0; i < 50; ++i) {
                h = CryptoUtil.MD5AsByteArray(h.slice(0, keylength))
            }
        }

        if (this.rc4_40_bit) {
            this.encryptionKey = h.slice(0, 5)
        } else {
            this.encryptionKey = h
        }

        return this.encryptionKey
    }

    /**
     * Derives the user password (/U) value
     * */
    computeUserPassword() : Uint8Array {
        if (this.computed_user_password)
            return this.computed_user_password

        if (this.cryptoConfiguration.revision && this.cryptoConfiguration.revision >= 3) {
            return this.computeUserPasswordRevision3OrGreater()
        } else if (this.cryptoConfiguration.revision === 2) {
            return this.computeUserPasswordRevision2()
        }

        return new Uint8Array([])
    }

    /**
     * Computes the user password for security handlers of revision 2
     * */
    computeUserPasswordRevision2() : Uint8Array {
        let padding_str : Uint8Array = new Uint8Array(CryptoUtil.PADDING_STRING)
        let enc_key = this.computeEncryptionKey()

        let x = CryptoUtil.RC4(padding_str, enc_key)

        this.computed_user_password = CryptoUtil.convertWordArrayToByteArray(x)

        return this.computed_user_password
    }

    /**
     * Computes the user password for security handlers of revision 3 or higher
     * */
    computeUserPasswordRevision3OrGreater() : Uint8Array {
        if (!this.file_id)
            throw Error("No file id")

        let id_str_array : Uint8Array = this.file_id[0]

        let new_val : Uint8Array = new Uint8Array(CryptoUtil.PADDING_STRING.length + id_str_array.length)
        new_val.set(CryptoUtil.PADDING_STRING, 0)
        new_val.set(id_str_array, CryptoUtil.PADDING_STRING.length)

        let x = CryptoUtil.MD5(new_val)

        let enc_key = this.computeEncryptionKey()

        for(let i = 0; i < 20; ++i) {
            x = CryptoUtil.RC4(x, CryptoUtil.xorBytes(enc_key, i))
        }

        this.computed_user_password = CryptoUtil.convertWordArrayToByteArray(x)

        return this.computed_user_password
    }

    /**
     * Derives the owner password (/O) value
     **/
    computeOwnerPassword() : Uint8Array {
        if (this.computed_owner_password)
            return this.computed_owner_password

        let pwd_string = this.cryptoConfiguration.owner_pwd

        // if no owner password is set, but a user password use this
        if (!this.cryptoConfiguration.owner_pwd || this.cryptoConfiguration.owner_pwd === "")
            pwd_string = this.cryptoConfiguration.user_pwd

        let ownerpwd = CryptoUtil.padPasswortString(pwd_string)

        let h = CryptoUtil.MD5(ownerpwd)

        let count : number = 1
        if (this.cryptoConfiguration.revision && this.cryptoConfiguration.revision >= 3) {
            count = 20

            for (let i = 0; i < 50; ++i) {
                h = CryptoUtil.MD5(h)
            }
        }

        let length = 128

        if (this.cryptoConfiguration.length)
            length = this.cryptoConfiguration.length

        let enc_key = CryptoUtil.convertWordArrayToByteArray(h).slice(0, length / 8)

        let userpwd = CryptoUtil.padPasswortString(this.cryptoConfiguration.user_pwd)


        let x  = CryptoUtil.convertToWordArray(userpwd)

        for(let i = 0; i < count; ++i) {
            x = CryptoUtil.RC4(x, CryptoUtil.xorBytes(enc_key, i))
        }

        this.computed_owner_password = CryptoUtil.convertWordArrayToByteArray(x)

        return this.computed_owner_password
    }

    /**
     * Returns true if the provided password corresponds to the defined /U value
     * */
    isUserPasswordCorrect() : boolean {
        let user_pwd = this.computeUserPassword()

        if(!this.cryptoConfiguration.user_pwd_c)
            throw Error("Invalid /U value (user password)")

        if (this.cryptoConfiguration.revision && this.cryptoConfiguration.revision >= 3) {
            return Util.areArraysEqual(user_pwd, this.cryptoConfiguration.user_pwd_c.slice(0,16))
        } else {
            return Util.areArraysEqual(user_pwd, this.cryptoConfiguration.user_pwd_c)
        }
    }

    /**
     * Returns true if the provided password corresponds to the defined /O value
     * */
    isOwnerPasswordCorrect() : boolean {
        let owner_pwd = this.computeOwnerPassword()

        if(!this.cryptoConfiguration.owner_pwd_c)
            throw Error("Invalid /O value (owner password)")

        return Util.areArraysEqual(owner_pwd, this.cryptoConfiguration.owner_pwd_c)
    }
}
