import { Util } from './util';
import * as Pako from 'pako'

export class Stream {
    private _ptr: number = 0
    constructor(protected data: Uint8Array) { }

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
        super(Pako.inflate(data))
    }
}

export class StreamObject {
    constructor(private data: Uint8Array) { }

    public streamLength: number = -1
    public stream: Stream | undefined = undefined

    extractStreamData(streamData: Uint8Array, compression: string) {
        if (compression === 'FlateDecode') {
            this.stream = new FlateStream(streamData)
        } else {
            throw Error(`Unsupported stream filter: ${compression} - Only supported filter is FlateDecode (right now)`)
        }
    }

    /**
     * Parses the Cross-Reference-Stream-Object at the given index
     * */
    extract(index: number = 0): Stream | undefined {
        let ptr_object_end = Util.locateSequence(Util.ENDOBJ, this.data, index)

        this.data = this.data.slice(index, ptr_object_end)

        // check if filter is supported
        let filter = Util.extractField(this.data, Util.FILTER)
        if (filter !== "FlateDecode")
            throw Error(`Unsupported stream filter: ${filter} - Only supported filter is FlateDecode`)

        // extract the stream length
        let stream_length = Util.extractField(this.data, Util.LENGTH)
        this.streamLength = stream_length

        // extract the stream
        let ptr_stream_data_start = Util.locateSequence(Util.STREAM, this.data) + Util.STREAM.length
        ptr_stream_data_start = Util.skipDelimiter(this.data, ptr_stream_data_start)

        let ptr_stream_data_end = ptr_stream_data_start + stream_length

        this.extractStreamData(this.data.slice(ptr_stream_data_start, ptr_stream_data_end), filter)

        return this.stream
    }
}
