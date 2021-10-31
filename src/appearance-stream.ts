import { ReferencePointer, Annotation } from './parser';
import { WriterUtil } from './writer-util';
import { Util } from './util';
import { Operator, ContentStream } from './content-stream';
import { FlateStream } from './stream';

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
        let ret: number[] = []
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

export interface ResourceDef {
    name: string
    refPtr?: ReferencePointer | undefined
}

export class Resource {
    object_id: ReferencePointer | undefined = undefined
    new_object: boolean = false // indicates to the factory that this object must be created when writing the document

    extGState: ResourceDef[] = []
    colorSpace: ResourceDef[] = []
    pattern: ResourceDef[] = []
    shading: ResourceDef[] = []
    xObject: ResourceDef[] = []
    font: ResourceDef[] = []
    procSet: ResourceDef[] = []
    properties: ResourceDef[] = []

    constructor() {}

    private writeDictAttribute(defs: ResourceDef[]) : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.DICT_START)
        ret_val.push(WriterUtil.SPACE)

        for(let def of defs) {
            def.name = def.name.trim()

            if (def.name.charAt(0) !== "/")
                def.name = `/${def.name}`

            ret_val = ret_val.concat(Util.convertStringToAscii(def.name))
            ret_val.push(WriterUtil.SPACE)

            if(!def.refPtr)
                throw Error("Missing reference pointer in resource definition")

            ret_val = ret_val.concat(WriterUtil.writeReferencePointer(def.refPtr))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.DICT_END)
        return ret_val
    }

    private writeArrayAttribute(defs: ResourceDef[]) : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.ARRAY_START)

        for(let def of defs) {
            def.name = def.name.trim()

            if (def.name.charAt(0) !== "/")
                def.name = `/${def.name}`

            ret_val = ret_val.concat(Util.convertStringToAscii(def.name))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.ARRAY_END)

        return ret_val
    }

    public writeResource() : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.DICT_START)
        ret_val.push(WriterUtil.SPACE)

        if (this.extGState.length > 0) {
            ret_val = ret_val.concat(WriterUtil.EXTGSTATE)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.extGState))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.colorSpace.length > 0) {
            ret_val = ret_val.concat(WriterUtil.COLORSPACE)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.colorSpace))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.pattern.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PATTERN)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.pattern))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.shading.length > 0) {
            ret_val = ret_val.concat(WriterUtil.SHADING)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.shading))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.xObject.length > 0) {
            ret_val = ret_val.concat(WriterUtil.XOBJECT)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.xObject))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.font.length > 0) {
            ret_val = ret_val.concat(WriterUtil.FONT)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.font))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.procSet.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PROCSET)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeArrayAttribute(this.procSet))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.properties.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PROPERTIES)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.properties))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.DICT_END)
        return ret_val
    }
}

export class XObjectObj implements XObject {
    object_id: ReferencePointer | undefined = undefined
    new_object: boolean = false // indicates to the factory that this object must be created when writing the document
    type: string = "/Form"
    type_encoded: number[] = WriterUtil.SUBTYPE // = '/Form'
    bBox : number[] = []
    name : string = "/ARM"
    matrix : number[] = [1, 0, 0, 1, 0, 0]
    formType : number = 1
    contentStream : ContentStream | undefined = undefined
    resources : Resource | undefined = undefined

    // note that Type is /XObject instead of /Annot in annotation objects
    constructor() { }

    /**
     * Adds a content stream operator
     * */
    public addOperator(operator : string, parameters: any[] = []) {
        if (!this.contentStream)
            this.contentStream = new ContentStream()

        this.contentStream.addOperator(operator, parameters)
    }

    public writeXObject() : number[] {
        if(!this.object_id)
            throw Error("object_id of XObject not set")

        let ret: number[] = []

        ret = ret.concat(WriterUtil.TYPE_XOBJECT)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.SUBTYPE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.FORM)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.FORMTYPE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.formType))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.BBOX)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.writeNumberArray(this.bBox))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.NAME)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertStringToAscii(this.name))
        ret.push(WriterUtil.SPACE)

        if (this.resources) {
            ret = ret.concat(WriterUtil.RESOURCES)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.resources.writeResource())
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.MATRIX)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.writeNumberArray(this.matrix))
        ret.push(WriterUtil.SPACE)

        let stream_data: number[] = (this.contentStream) ? this.contentStream.writeContentStream() : []

        return WriterUtil.writeStreamObject(this.object_id, ret, new FlateStream(new Uint8Array(stream_data), undefined, true))
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
