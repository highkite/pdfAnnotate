import { ReferencePointer, Annotation } from './parser';
import { WriterUtil } from './writer-util';
import { Util } from './util';
import { Operator, ContentStream } from './content-stream';

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
    object_id: ReferencePointer | undefined = undefined
    new_object: boolean = false // indicates to the factory that this object must be created when writing the document
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
        if (!this.N) {
            console.warn("call lookupNContentStream without set content stream value")
            return
        } else if (Util.isReferencePointer(this.N)) {
            this.N = this.annot.factory.parser.extractXObject(this.N as ReferencePointer)
        } else if (this.N instanceof XObjectObj) {
            return // already looked up
        } else {
            throw Error("Could not lookup N content stream")
        }
    }

    /**
     * Helper writer function of the references. Resolves different types
     * */
    private writeAppearanceStreamObj(ap : XObject | OnOffAppearanceStream | ReferencePointer) : number[] {
        let ret : number[] = []

        if (Util.isReferencePointer(ap)) {
            ret = ret.concat(WriterUtil.writeReferencePointer(ap as ReferencePointer, true))
        } else if (ap instanceof XObjectObj) {
            if (!(ap as XObjectObj).object_id) {
                throw Error("No object id specified in XObject")
            }
            ret = ret.concat(WriterUtil.writeReferencePointer((ap as XObjectObj).object_id!, true))
        } else {
            throw Error("Invalid appearance stream object")
        }

        return ret
    }

    /**
     * Writes the appearance stream object
     * */
    writeAppearanceStream() : number[] {
        let ret: number[] = WriterUtil.writeReferencePointer(this.object_id!)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
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
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        if (this.N && (this.N instanceof XObjectObj) && this.N.new_object) {
            ret = ret.concat(this.N.writeXObject())
        }

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
    object_id: ReferencePointer | undefined = undefined
    new_object: boolean = false // indicates to the factory that this object must be created when writing the document
    type: string = "/Form"
    type_encoded: number[] = [47, 70, 111, 114, 109] // = '/Form'
    bBox : number[] = []
    name : string = "/ARM"
    matrix : number[] = [1, 0, 0, 1, 0, 0]
    formType : number = 1
    contentStream : ContentStream[] = []
    resources : any = undefined

    // note that Type is /XObject instead of /Annot in annotation objects
    constructor() { }

    public addOperator(operator : string, parameters: any[] = []) {
        this.contentStream.push(new Operator(operator, parameters))
    }

    public writeXObject() : number[] {
        return []
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

        //xobj.addOperator("1 0 0 RG") // stroke color red
        //xobj.addOperator("2 w") // linewidth 2
        //xobj.addOperator(`${bBox[0]} ${bBox[1]} m`)
        //xobj.addOperator(`${bBox[2]} ${bBox[3]} l`)
    }
}
