import { ReferencePointer } from './parser';

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

    constructor() { }

    /**
     * Writes the appearance stream
     * */
    writeAppearanceStream() : number[] {
        console.log("Write appearance stream")
        return []
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
    name : string = ""

    // note that Type is /XObject instead of /Annot in annotation objects
    constructor() { }
}
