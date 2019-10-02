import { Util } from './util'
import { ObjectUtil } from './object-util';
import { XRef } from './document-history';
import * as Pako from 'pako'

export interface DecodeParameters {
    predictor: number
    columns: number
}

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
     * Reads the next byte from the stream
     * */
    getByte(): number {
        return this.data[this._ptr++]
    }

    /**
     * Skips spaces and than adds as many bytes to the number until another space is reached
     * */
    getNumber(): number {
        let nbr = Util.extractNumber(this.data, this._ptr)
        this._ptr = nbr.end_index + 1

        return nbr.result

    }
}

export class FlateStream extends Stream {
    constructor(protected data: Uint8Array, private decodeParameters: DecodeParameters | undefined = undefined) {
        super(data)
        this.data = Pako.inflate(data)

        if (decodeParameters)
            this.data = this.applyFilter(this.data, decodeParameters)
    }

    private applyFilter(data: Uint8Array, decodeParameters: DecodeParameters): Uint8Array {
        if (decodeParameters.predictor >= 10) {
            return this.applyPNGFilter(data, decodeParameters)
        } else if (decodeParameters.predictor === 2) {
            throw Error("Unsupported filter -- file feature request")
        }

        return data
    }

    private applyPNGFilter(data: Uint8Array, decodeParameters: DecodeParameters): Uint8Array {
        if (data.length % (decodeParameters.columns + 1) !== 0)
            throw Error("Invalid decode parameters")


        let encoding: number = 0
        for (let i = 0; i < data.length; i += decodeParameters.columns + 1) {
            if (i % (decodeParameters.columns + 1) === 0) {
                encoding = data[i]
            } else {
                switch (encoding) {
                    case 0: // no encoding
                        break
                    case 1: // Sub fitler -- the difference of the current pixel and the pxiel before
                        // add the left already decoded pixel and 0 at the start of a row
                        if ((i - 1) % (decodeParameters.columns + 1) !== 0)
                            data[i] = (data[i] + data[i - 1]) % 256
                        break
                    case 2: // Up filter -- the difference of the current prixel and the pixel above
                        let index: number = i - (decodeParameters.columns + 1)
                        if (index >= 0) {
                            data[i] = (data[i] + data[index]) % 256
                        }
                        break
                    case 3: // Average filter -- considers the average of the upper and the left pixel
                        let value_upper = (i - (decodeParameters.columns + 1)) > 0 ? data[i - (decodeParameters.columns + 1)] : 0
                        let left_value = ((i - 1) % (decodeParameters.columns + 1) === 0) ? 0 : data[i - 1]
                        data[i] = (data[i] + Math.floor((value_upper + left_value) / 2)) % 256
                        break
                    case 4: // Paeth -- uses three neighbouring bytes (left, upper and upper left) to compute a linear function
                        value_upper = (i - (decodeParameters.columns + 1)) > 0 ? data[i - (decodeParameters.columns + 1)] : 0
                        let value_upper_left = (i - (decodeParameters.columns + 1) - 1) > 0 ? data[i - (decodeParameters.columns + 1) - 1] : 0
                        left_value = ((i - 1) % (decodeParameters.columns + 1) === 0) ? 0 : data[i - 1]
                        data[i] = (data[i] + this.paethPredictor(left_value, value_upper, value_upper_left)) % 256
                        break
                }
            }
        }

        return data
    }

    /**
     * Computes the path predictor of the given byets
     * */
    private paethPredictor(left_byte: number, upper_byte: number, upper_left_byte: number): number {
        let p = left_byte + upper_byte - upper_left_byte
        let pa = Math.abs(p - left_byte)
        let pb = Math.abs(p - upper_byte)
        let pc = Math.abs(p - upper_left_byte)

        if (pa <= pb && pa <= pc) {
            return left_byte
        } else if (pb <= pc) {
            return upper_byte
        } else {
            return upper_left_byte
        }

    }
}
