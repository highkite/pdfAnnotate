import { Page, ReferencePointer } from '../parser';
import { Util } from '../util';
import { ErrorList, InvalidOpacityError, InvalidRectError, InvalidDateError, InvalidReferencePointerError, ColorOutOfRangeError, InvalidColorError, InvalidIDError } from './annotation_errors';

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
    type: string = ""
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

    /**
     * If enact is true, the error will be thrown directly, otherwise the errors are collected
     * and returned as error list.
     * */
    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = this.checkRect(4, this.rect)

        errorList = errorList.concat(this.checkReferencePointer(this.object_id))

        if(!this.pageReference || typeof this.pageReference !== 'object') {
            errorList.push(new InvalidReferencePointerError("Inalid page reference"))
        }

        let res = this.checkDate(this.updateDate)
        if (res[1]) {
            this.updateDate = res[1]
        }
        errorList = errorList.concat(res[0])

        errorList = errorList.concat(this.checkColor(this.color))

        if (!this.id || this.id === "") {
            errorList.push(new InvalidIDError("Invalid ID provided"))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }

    protected checkColor(color : Color | undefined) : ErrorList {
        let errorList : ErrorList = []

        if (!(color && "r" in color && "g" in color && "b" in color)) {
            errorList.push(new InvalidColorError("Not {r: <r>, g: <g>, b: <b>}"))
        }

        if (color!.r > 255 || color!.r < 0) {
            errorList.push(new ColorOutOfRangeError("Red value out of range"))
        }

        if (color!.g > 255 || color!.g < 0) {
            errorList.push(new ColorOutOfRangeError("Green value out of range"))
        }

        if(color!.b > 255 && color!.b < 0) {
            errorList.push(new ColorOutOfRangeError("Blue value out of range"))
        }

        return errorList
    }

    protected checkReferencePointer(ptr : ReferencePointer | undefined) : ErrorList {
        let errorList : ErrorList = []
        if(!(ptr && "obj" in ptr && ptr.obj >= 0 && "generation" in ptr && ptr.generation >= 0)) {
            errorList.push(new InvalidReferencePointerError("Invalid reference pointer"))
        }

        return errorList
    }

    protected checkDate(date : string | Date) : [ErrorList, string | undefined] {
        if (typeof date === 'string') {
            return [[], date]
        }
        let errorList : ErrorList = []
        let ret_val : string | undefined = undefined
        try {
            ret_val = Util.convertDateToPDFDate(date as Date)
        } catch (e) {
            errorList.push(new InvalidDateError("Invalid update date provided"))
        }

        return [errorList, ret_val]
    }

    protected checkRect(nr: number, rect: number[]) : ErrorList {
        let errorList : ErrorList = []
        if (!Array.isArray(rect)) {
            errorList.push(new InvalidRectError("invalid rect parameter"))
        }

        if (rect.length !== nr) {
            errorList.push(new InvalidRectError("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries"))
        }

        rect.forEach((a) => {
            if ('number' !== typeof a) {
                errorList.push(new InvalidRectError("Rect " + rect + " has invalid entry: " + a))
            }
        })

        return errorList
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

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.opacity) {
            try {
                this.opacity = +this.opacity
            } catch (e) {
                errorList.push(new InvalidOpacityError("Opacity no numerical value"))
            }

            if (this.opacity < 0 || this.opacity > 255) {
                errorList.push(new InvalidOpacityError("Opacity out of range"))
            }
        }

        if (this.creationDate) {
            let res = this.checkDate(this.creationDate)
            this.creationDate = res[1]

            errorList = errorList.concat(res[0])
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}
