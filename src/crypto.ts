import { Util } from './util';
import { CryptoUtil } from './crypto-util';

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
    encrypt() : void;
    decrypt() : void;

    isUserPasswordCorrect() : boolean;
    isOwnerPasswordCorrect() : boolean;
}

export class RC4CryptoEngine implements CryptoEngine {
    private encryptionKey : Uint8Array | undefined = undefined
    private computed_user_password : Uint8Array | undefined = undefined

    constructor(private cryptoConfiguration: CryptoConfiguration, private file_id : Uint8Array[] | undefined) {
    }

    encrypt() : void {
    }

    decrypt() : void {
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

        if (!this.cryptoConfiguration.permissions)
            throw Error("Permissions not set")

        let permissions = Util.convertInt32ArrayToUint8Array([this.cryptoConfiguration.permissions]).reverse()

        if (!this.file_id || this.file_id.length === 0)
            throw Error("File ID not set")

        let file_id : Uint8Array = this.file_id[0]


        let stuff = new Uint8Array(userpwd.length + oValue.length + permissions.length + file_id.length)
        stuff.set(userpwd, 0)
        stuff.set(oValue, userpwd.length)
        stuff.set(permissions, userpwd.length + oValue.length)
        stuff.set(file_id, userpwd.length + oValue.length + permissions.length)

        let h = CryptoUtil.MD5(stuff)

        for (let i = 0; i < 50; ++i) {
            h = CryptoUtil.MD5(h)
        }

        this.encryptionKey = Util.convertInt32ArrayToUint8Array(new Int32Array(h.words))

        return this.encryptionKey
    }

    /**
     * Derives the user password (/U) value
     * */
    computeUserPassword() : Uint8Array {
        if (this.computed_user_password)
            return this.computed_user_password

        if (!this.file_id)
            throw Error("No file id")

        let id_str_array : Uint8Array = this.file_id[0]

        let new_val : Uint8Array = new Uint8Array(CryptoUtil.PADDING_STRING.length + id_str_array.length)
        new_val.set(CryptoUtil.PADDING_STRING, 0)
        new_val.set(id_str_array, CryptoUtil.PADDING_STRING.length)

        console.log(new_val.join(" "))
        console.log("id_str_array: " + id_str_array.join(" "))

        let x = CryptoUtil.MD5(new_val)

        let enc_key = this.computeEncryptionKey()

        for(let i = 0; i < 20; ++i) {
            x = CryptoUtil.RC4(x, CryptoUtil.xorBytes(enc_key, i))
        }

        this.computed_user_password = Util.convertInt32ArrayToUint8Array(new Int32Array(x.words))

        return this.computed_user_password
    }

    /**
     * Derives the owner password (/O) value
     **/
    computeOwnerPassword() : void {
    }

    /**
     * Returns true if the provided password corresponds to the defined /U value
     * */
    isUserPasswordCorrect() : boolean {
        let user_pwd = this.computeUserPassword()

        if(!this.cryptoConfiguration.user_pwd_c)
            throw Error("Invalid /U value (owner password)")

        console.log("---------------------------")
        console.log("Computed user password: " + user_pwd.join(" "))
        console.log("/U: " + this.cryptoConfiguration.user_pwd_c.join(" "))

        return Util.areArraysEqual(user_pwd, this.cryptoConfiguration.user_pwd_c)
    }

    /**
     * Returns true if the provided password corresponds to the defined /O value
     * */
    isOwnerPasswordCorrect() : boolean {
        return false
    }
}
