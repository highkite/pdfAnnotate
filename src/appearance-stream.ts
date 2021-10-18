import { ReferencePointer, Annotation } from './parser';
import { WriterUtil } from './writer-util';
import { Util } from './util';

export interface Resources {
}

export interface OnOffAppearanceStream {
    on: XObject
    off: XObject
}

export interface AppearanceStream {
    N: XObject | OnOffAppearanceStream | ReferencePointer | undefined
    R?: XObject | OnOffAppearanceStream | ReferencePointer | undefined
    D?: XObject | OnOffAppearanceStream | ReferencePointer | undefined
}

export class AppStream implements AppearanceStream {
    N: XObject | OnOffAppearanceStream | ReferencePointer | undefined = undefined
    R: XObject | OnOffAppearanceStream | ReferencePointer | undefined = undefined
    D: XObject | OnOffAppearanceStream | ReferencePointer | undefined = undefined

    annot: Annotation // Annotation the appearance stream belongs to

    constructor(annot : Annotation) {
        this.annot = annot
    }

    /**
     * Lookups the N content stream. If it is only provided by a reference pointer it will parse
     * the corresponding Xobject
     * */
    lookupNContentStream() {
        console.log("Lookup N content stream")
    }

    writeAppearanceStreamObj(ap : XObject | OnOffAppearanceStream | ReferencePointer) : number[] {
        let ret : number[] = []

        if (Util.isReferencePointer(ap)) {
            ret = ret.concat(WriterUtil.writeReferencePointer(ap as ReferencePointer, true))
        } else {
            throw Error("Invalid appearance stream object")
        }

        return ret
    }

    /**
     * Writes the appearance stream
     * */
    writeAppearanceStream() : number[] {
        let ret : number[] = []

        ret = ret.concat(WriterUtil.DICT_START)

        if (this.N) {
            ret = ret.concat(WriterUtil.AP_N)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.writeAppearanceStreamObj(this.N))
            ret.push(WriterUtil.SPACE)
        }

        if (this.R) {
            ret = ret.concat(WriterUtil.AP_R)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.writeAppearanceStreamObj(this.R))
            ret.push(WriterUtil.SPACE)
        }

        if (this.D) {
            ret = ret.concat(WriterUtil.AP_D)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.writeAppearanceStreamObj(this.D))
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.DICT_END)

        return ret
    }
}

export interface XObject {
    type?: string // /Subtype
    formType?: number | undefined // /FormType
    bBox: number[] // /BBox
    matrix?: number[] | undefined // /Matrix
    resources?: Resources | undefined // /Resources
    group?: undefined // /Group
    ref?: undefined // /Ref
    metaData?: undefined // /Metadata
    pieceInfo?: undefined // /PieceInfo
    lastModified?: string | Date // /LastModified
    structParent?: number | undefined // /StructParent
    structParents?: number | undefined // /StructParents
    opi?: undefined // /OPI
    oc?: undefined // /OC
    name: string // /Name
}

export class XObjectObj implements XObject {
    type: string = "/Form"
    type_encoded: number[] = [47, 70, 111, 114, 109] // = '/Form'
    bBox : number[] = []
    name : string = "/ARM"
    matrix : number[] = [1, 0, 0, 1, 0, 0]
    formType : number = 1
    contentStream : string[] = []

    // note that Type is /XObject instead of /Annot in annotation objects
    constructor() { }

    public addOperator(operator : string) {
        this.contentStream.push(operator)
    }
}

export class DefaultFreeTextAppearanceStream extends AppStream {
    constructor(annot: Annotation) {
        super(annot)

        this.N = new XObjectObj()
    }
}

export class DefaultUnderlineAppearanceStream extends AppStream {
    constructor(annot: Annotation, bBox : number[]) {
        super(annot)

        let xobj = new XObjectObj()
        this.N = xobj
        xobj.bBox = bBox

        xobj.addOperator("1 0 0 RG") // stroke color red
        xobj.addOperator("2 w") // linewidth 2
        xobj.addOperator(`${bBox[0]} ${bBox[1]} m`)
        xobj.addOperator(`${bBox[2]} ${bBox[3]} l`)
    }
}
