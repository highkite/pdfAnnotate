import { Util } from './util'
import { ObjectUtil } from './object-util';
import { XRef } from './document-history';
import * as Pako from 'pako'

export class Stream {
    private _ptr: number = 0
    constructor(protected data: Uint8Array) { }

    getData(): Uint8Array {
        return this.data
    }

    getLength(): number {
        return this.data.length
    }

    peekNBytes(n: number = 1, ptr: number = 0): Uint8Array {
        return this.data.slice(ptr, ptr + n)
    }

    peekNBytesAsNumber(n: number = 1, ptr: number = 0): number {
        let res: number = 0

        for (let i = 0; i < n; ++i) {
            res += (this.data[i + ptr] << 8 * (n - i - 1))
        }

        return res
    }

    /**
     * reads the next 'n' bytes of position 'ptr' and returns its content as a number
     * */
    getNBytesAsNumber(n: number = 1): number {
        let res: number = this.peekNBytesAsNumber(n, this._ptr)

        this._ptr += n

        return res
    }

    /**
     * Skips spaces and than adds as many bytes to the number until another space is reached
     * */
    getNumber(): number {
        let nbr = Util.extractNumber(this.data, this._ptr)
        this._ptr = nbr.end_index

        return nbr.result

    }
}

export class FlateStream extends Stream {
    constructor(protected data: Uint8Array) {
        super(data)
        this.data = Pako.inflate(data)
    }
}
