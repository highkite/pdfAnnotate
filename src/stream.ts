import { Util } from './util'
import { ObjectUtil } from './object-util';
import { XRef } from './document-history';
import { ReferencePointer, CryptoInterface } from './parser';
import * as Pako from 'pako'

export interface FilterParameters {
    predictor: number
    columns: number
    encoding?: number | undefined
}

export class Stream {
    private _ptr: number = 0
    constructor(protected data: Uint8Array) { }

    getData(): Uint8Array {
        return this.data
    }

    /**
     * Returns the data encoded
     * */
    encode(): Uint8Array {
        throw Error("abstract method")
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
    /**
     * rawData : if true, the provided data is not compressed yet.
     * */
    constructor(protected data: Uint8Array, private decodeParameters: FilterParameters | undefined = undefined, private rawData : boolean = false, private cryptoInterface : CryptoInterface | undefined = undefined, private object_id : ReferencePointer | undefined = undefined) {
        super(data)

        if (this.data.length > 0 && !rawData) {
            this.data = Pako.inflate(data)
        }

        if (decodeParameters && !rawData) {
            this.data = this.applyDecoding(this.data, decodeParameters)
        }
    }

    /**
     * Returns the data encoded
     * */
    encode(): Uint8Array {
        if (!this.data || this.data.length === 0)
            return new Uint8Array()

        let int_data : Uint8Array = this.data

        if (this.decodeParameters && this.rawData) {
            int_data = this.applyEncoding(int_data, this.decodeParameters)
        }

        let compressed_data = Pako.deflate(int_data)

        if (this.cryptoInterface && this.object_id) {
            return this.cryptoInterface.encrypt(compressed_data, this.object_id)
        }

        return compressed_data
    }

    private applyEncoding(data: Uint8Array, decodeParameters: FilterParameters): Uint8Array {
        if (decodeParameters.predictor >= 10) {
            return this.encodePNGFilter(data, decodeParameters)
        } else if (decodeParameters.predictor === 2) {
            throw Error("Unsupported filter -- file feature request")
        }

        return data
    }

    private applyDecoding(data: Uint8Array, decodeParameters: FilterParameters): Uint8Array {
        if (decodeParameters.predictor >= 10) {
            return this.decodePNGFilter(data, decodeParameters)
        } else if (decodeParameters.predictor === 2) {
            throw Error("Unsupported filter -- file feature request")
        }

        return data
    }

    /**
     * Applies PNG filter for encoding the data stream
     * */
    public encodePNGFilter(data: Uint8Array, decodeParameters: FilterParameters): Uint8Array {
        if (data.length % (decodeParameters.columns) !== 0)
            throw Error("Invalid decode parameters")

        if ((typeof decodeParameters.encoding == 'undefined') || decodeParameters.encoding < 0 || decodeParameters.encoding > 4)
            throw Error("Invalid PNG filter encoding")

        let total_columns = decodeParameters.columns

        let encoded_data: number[] = []

        let encoding: number = 0
        let offset: number = 0
        let index_upper_value: number = 0
        let upper_value: number = 0
        let left_value: number = 0
        let left_upper_value: number = 0
        for (let i = 0; i < data.length; ++i) {
            if (i % total_columns === 0) {
                encoded_data.push(decodeParameters.encoding)
            }

            switch(decodeParameters.encoding) {
                case 0:
                    encoded_data.push(data[i])
                    break
                case 1:
                    offset = Math.floor(i / total_columns) * total_columns
                    encoded_data.push(((i % total_columns) === 0) ? data[(i % total_columns) + offset] : (data[(i % total_columns) + offset] - data[(i % total_columns) + offset - 1]) % 256)
                    break
                case 2:
                    index_upper_value = i - total_columns
                    upper_value = (index_upper_value < 0) ? 0 : data[index_upper_value]
                    encoded_data.push((data[i] - upper_value) % 256)
                    break
                case 3:
                    index_upper_value = i - total_columns
                    upper_value = (index_upper_value < 0) ? 0 : data[index_upper_value]
                    left_value = ((i % total_columns) - 1 < 0) ? 0 : data[i - 1]
                    encoded_data.push((data[i] - Math.floor((upper_value + left_value) / 2)) % 256)
                    break
                case 4: // Paeth -- uses three neighbouring bytes (left, upper and upper left) to compute a linear function
                    index_upper_value = i - total_columns
                    upper_value = (index_upper_value < 0) ? 0 : data[index_upper_value]
                    left_value = ((i % total_columns) - 1 < 0) ? 0 : data[i - 1]
                    left_upper_value = (index_upper_value - 1 < 0) ? 0 : data[index_upper_value - 1]
                    encoded_data.push((data[i] - this.paethPredictor(left_value, upper_value, left_upper_value)) % 256)
                    break
                default:
                    throw Error("Invalid PNG filter encoding")

            }
        }

        return new Uint8Array(encoded_data)
    }

    /**
     * Applies PNG Filter for decoding the data stream
     * */
    public decodePNGFilter(data: Uint8Array, decodeParameters: FilterParameters): Uint8Array {
        if (data.length % (decodeParameters.columns + 1) !== 0)
            throw Error("Invalid decode parameters")

        let total_columns = decodeParameters.columns + 1

        let unfiltered_data: number[] = []

        let encoding: number = 0
        for (let i = 0; i < data.length; ++i) {
            let left_value: number = 0
            let upper_value: number = 0
            let index_upper_value: number = 0
            let left_upper_value: number = 0
            if (i % total_columns === 0) {
                encoding = data[i]
            } else {
                switch (encoding) {
                    case 0: // no encoding
                        unfiltered_data.push(data[i])
                        break
                    case 1: // Sub filter -- the difference of the current pixel and the pixel before
                        // add the left already decoded pixel and 0 at the start of a row
                        left_value = ((i % total_columns) - 2 < 0) ? 0 : unfiltered_data[((i - 2) % decodeParameters.columns) + Math.floor(i / total_columns) * (decodeParameters.columns - 1)]
                        unfiltered_data.push((data[i] + left_value) % 256)
                        break
                    case 2: // Up filter -- the difference of the current prixel and the pixel above
                        index_upper_value = i - (total_columns + Math.floor(i / total_columns))
                        upper_value = (index_upper_value < 0) ? 0 : unfiltered_data[index_upper_value]
                        unfiltered_data.push((data[i] + upper_value) % 256)
                        break
                    case 3: // Average filter -- considers the average of the upper and the left pixel
                        index_upper_value = i - (total_columns + Math.floor(i / total_columns))
                        upper_value = (index_upper_value < 0) ? 0 : unfiltered_data[index_upper_value]
                        left_value = ((i % total_columns) - 2 < 0) ? 0 : unfiltered_data[((i - 2) % decodeParameters.columns) + Math.floor(i / total_columns) * (decodeParameters.columns - 1)]
                        unfiltered_data.push((data[i] + Math.floor((upper_value + left_value) / 2)) % 256)
                        break
                    case 4: // Paeth -- uses three neighbouring bytes (left, upper and upper left) to compute a linear function
                        index_upper_value = i - (total_columns + Math.floor(i / total_columns))
                        upper_value = (index_upper_value < 0) ? 0 : unfiltered_data[index_upper_value]
                        left_value = ((i % total_columns) - 2 < 0) ? 0 : unfiltered_data[((i - 2) % decodeParameters.columns) + Math.floor(i / total_columns) * (decodeParameters.columns - 1)]
                        left_upper_value = (index_upper_value - 1 < 0) ? 0 : unfiltered_data[index_upper_value - 1]
                        unfiltered_data.push((data[i] + this.paethPredictor(left_value, upper_value, left_upper_value)) % 256)
                        break
                }
            }
        }

        return new Uint8Array(unfiltered_data)
    }

    /**
     * Computes the path predictor of the given bytes
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
