import { Util } from './util'
import { ObjectUtil } from './object-util';
import * as Pako from 'pako'

export class Stream {
    private _ptr: number = 0
    constructor(protected data: Uint8Array) { }

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
}

export class FlateStream extends Stream {
    constructor(protected data: Uint8Array) {
        super(data)
        this.data = Pako.inflate(data)
    }
}

export class StreamObject {
    constructor(private data: Uint8Array) { }

    public streamLength: number = -1
    public stream: Stream | undefined = undefined

    extractStreamData(streamData: Uint8Array, compression: string) {
        if (compression === '/FlateDecode') {
            this.stream = new FlateStream(streamData)
        } else {
            throw Error(`Unsupported stream filter: ${compression} - Only supported filter is FlateDecode (right now)`)
        }
    }

    /**
     * Parses the Stream-Object at the given index
     * */
    extract(index: number = 0): Stream | undefined {
        let sobj = ObjectUtil.extractObject(this.data, index).value

        // check if filter is supported
        if (!sobj["/Filter"] || sobj["/Filter"] !== "/FlateDecode")
            throw Error(`Unsupported stream filter: ${sobj["/Filter"]} - Only supported filter is FlateDecode`)

        // extract the stream length
        this.streamLength = sobj["/Length"]

        // extract the stream
        let ptr_stream_data_start = Util.locateSequence(Util.STREAM, this.data) + Util.STREAM.length
        ptr_stream_data_start = Util.skipDelimiter(this.data, ptr_stream_data_start)

        let ptr_stream_data_end = ptr_stream_data_start + this.streamLength

        this.extractStreamData(this.data.slice(ptr_stream_data_start, ptr_stream_data_end), sobj["/Filter"])

        return this.stream
    }
}
