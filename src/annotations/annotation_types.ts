import { Page, ReferencePointer } from '../parser';
import { Util } from '../util';

export interface Color {
    r: number
    g: number
    b: number
}

export enum BorderStyles {
    Solid, Dashed, Beveled, Inset, Underline
}

export interface Border {
    horizontal_corner_radius?: number
    vertical_corner_radius?: number
    border_width?: number
    dash_pattern?: number[]
    border_style?: BorderStyles
    cloudy?: boolean
    cloud_intensity?: number
}

export interface AnnotationFlags {
    invisible?: boolean
    hidden?: boolean
    print?: boolean
    noZoom?: boolean
    noRotate?: boolean
    noView?: boolean
    readOnly?: boolean
    locked?: boolean
    toggleNoView?: boolean
    lockedContents?: boolean
}

export interface AppearanceStream {
}

export interface OptionalContent {
}

export interface BaseAnnotation {
    page: number
    pageReference: Page | undefined // The reference to the page object to which the annotation is added
    object_id: ReferencePointer | undefined // an unused object id
    type?: string
    rect: number[]
    contents?: string | undefined
    id: string // /NM
    updateDate: string | Date// /M
    annotationFlags?: AnnotationFlags | undefined // /F
    appearanceStream?: AppearanceStream | undefined // /AP
    appearanceStreamSelector?: string | undefined // /AS
    border?: Border | undefined
    color?: Color | undefined // /C
    structParent?: number | undefined // /StructParent
    optionalContent?: OptionalContent | undefined // /OC
    is_deleted?: boolean // internal flag to determine whether the annotation was deleted
}

export class BaseAnnotationObj implements BaseAnnotation {
    page: number = -1
    pageReference: Page | undefined = undefined// The reference to the page object to which the annotation is added
    object_id: ReferencePointer | undefined = undefined// an unused object id
    type?: string = ""
    rect: number[] = []
    contents: string | undefined
    id: string = ""// /NM
    updateDate: string | Date = ""// /M
    annotationFlags: AnnotationFlags | undefined // /F
    appearanceStream: AppearanceStream | undefined // /AP
    appearanceStreamSelector: string | undefined // /AS
    border: Border | undefined
    color: Color | undefined // /C
    structParent: number | undefined // /StructParent
    optionalContent: OptionalContent | undefined // /OC
    is_deleted: boolean = false// internal flag to determine whether the annotation was deleted

    constructor() { }

    public encodeAnnotationFlags() : number {
        if (!this.annotationFlags) {
            return 0
        }

        let val = 0

        if (this.annotationFlags.invisible) {
            val |= 1
        }
        if (this.annotationFlags.hidden) {
            val |= 2
        }
        if (this.annotationFlags.print) {
            val |= 4
        }
        if (this.annotationFlags.noZoom) {
            val |= 8
        }
        if (this.annotationFlags.noRotate) {
            val |= 16
        }
        if (this.annotationFlags.noView) {
            val |= 32
        }
        if (this.annotationFlags.readOnly) {
            val |= 64
        }
        if (this.annotationFlags.locked) {
            val |= 128
        }
        if (this.annotationFlags.toggleNoView) {
            val |= 256
        }
        if (this.annotationFlags.lockedContents) {
            val |= 512
        }

        return val
    }

    public validate() : void {
        this.checkRect(4, this.rect)

        this.checkReferencePointer(this.object_id)

        if(!this.pageReference || typeof this.pageReference !== 'object') {
            throw Error("Inalid page reference")
        }

        if (typeof this.updateDate === 'object') {
            this.updateDate = this.checkDate(this.updateDate)
        }

        if (this.color && (!this.color.r || !this.color.g || !this.color.b)) {
            throw Error("Invalid color definition")
        } else if (this.color) {
            if (this.color.r > 255 || this.color.r < 0) {
                throw Error("Invalid red value")
            }
            if (this.color.g > 255 || this.color.g < 0) {
                throw Error("Invalid green value")
            }
            if (this.color.b > 255 || this.color.b < 0) {
                throw Error("Invalid blue value")
            }
        }

        if (!this.id || this.id === "") {
            throw Error("Invalid ID provided")
        }
    }

    protected checkReferencePointer(ptr : ReferencePointer | undefined) {
        if(ptr && ptr.obj >= 0 && ptr.generation >= 0) {
            return
        }

        throw Error("Invalid reference pointer")
    }

    protected checkDate(date : string | Date) : string {
        try {
            return Util.convertDateToPDFDate(date as Date)
        } catch (e) {
            throw Error("Invalid update date provided")
        }
    }

    protected checkRect(nr: number, rect: number[]) {
        if (!Array.isArray(rect)) {
            throw Error("invalid rect parameter")
        }

        if (rect.length !== nr)
            throw Error("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries")

        rect.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Rect " + rect + " has invalid entry: " + a)
        })
    }
}

export enum ReplyTypes {
    Reply, Group
}

export interface InReplyTo {}

export interface MarkupAnnotation extends BaseAnnotation {
    author?: string // /T
    opacity?: number // /CA
    richtextString?: string // /RC
    creationDate?: string | Date // /CreationDate
    inReplyTo?: InReplyTo // /IRT
    subject?: string // /Subj
    replyType?: ReplyTypes // /RT
    intent?: string // /IT
}

export class MarkupAnnotationObj extends BaseAnnotationObj implements MarkupAnnotation {
    author: string = ""
    opacity?: number = 1// /CA
    creationDate?: string | Date // /CreationDate
    subject : string = ""
    richtextString?: string

    constructor() {
        super()
    }

    public validate() : void {
        super.validate()

        if (this.opacity) {
            try {
                this.opacity = +this.opacity
            } catch (e) {
                throw e
            }

            if (this.opacity < 0 || this.opacity > 255) {
                throw Error("Invalid opacity value")
            }

            if (this.creationDate && typeof this.creationDate === 'object') {
                this.creationDate = this.checkDate(this.creationDate)
            }
        }
    }
}
