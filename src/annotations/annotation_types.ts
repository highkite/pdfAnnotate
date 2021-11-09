import { Annotation, Page, ReferencePointer, CryptoInterface, AppearanceStreamParser } from '../parser';
import { AppStream } from '../appearance-stream';
import { Util } from '../util';
import { ErrorList, InvalidOpacityError, InvalidRectError, InvalidDateError, InvalidReferencePointerError, ColorOutOfRangeError, InvalidColorError, InvalidIDError, InvalidAnnotationReference, InvalidAppearanceStreamError } from './annotation_errors';
import { WriterUtil } from '../writer-util';

export enum LineEndingStyle {
    Square, Circle, Diamond, OpenArrow, ClosedArrow, Butt, ROpenArrow, RClosedArrow, Slash, None
}

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
    appearanceStream?: AppStream | undefined // /AP
    appearanceStreamSelector?: string | undefined // /AS
    border?: Border | undefined
    color?: Color | undefined // /C
    structParent?: number | undefined // /StructParent
    optionalContent?: OptionalContent | undefined // /OC
    takeAppearanceStreamFrom?: Annotation | string | undefined // use the appearance stream from another annotation
    is_deleted?: boolean // internal flag to determine whether the annotation was deleted
    factory: any // Reference to the factory instance
}

export class BaseAnnotationObj implements BaseAnnotation {
    object_id: ReferencePointer | undefined = undefined// an unused object id
    is_deleted: boolean = false// internal flag to determine whether the annotation was deleted
    additional_objects_to_write: {obj: any, func: any}[] = [] // holds objects, that must be written, since they are used by the annotation

    raw_parameters: number[][] | undefined

    page: number = -1
    pageReference: Page | undefined = undefined// The reference to the page object to which the annotation is added
    type: string = ""
    type_encoded: number[] = []
    rect: number[] = []
    contents: string = ""
    id: string = ""// /NM
    updateDate: string | Date = ""// /M
    annotationFlags: AnnotationFlags | undefined // /F
    border: Border | undefined
    color: Color | undefined // /C

    optionalContent: OptionalContent | undefined // /OC
    structParent: number | undefined // /StructParent
    appearanceStream: AppStream | undefined // /AP
    appearanceStreamSelector: string | undefined // /AS
    takeAppearanceStreamFrom: Annotation | string | undefined = undefined
    factory: any = undefined

    constructor() { }

    /**
     * Creates a default appearance stream for the given annotation type and assigns it to the annotation
     * */
    public createDefaultAppearanceStream() { }

    public writeAnnotationPreamble() : number[] {
        let ret: number[] = WriterUtil.writeReferencePointer(this.object_id!)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret = ret.concat(WriterUtil.DICT_START)

        ret = ret.concat(WriterUtil.TYPE_ANNOT)
        ret.push(WriterUtil.SPACE)

        return ret
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = []

        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.PAGE_REFERENCE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.writeReferencePointer(this.pageReference!.object_id!, true))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.SUBTYPE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(this.type_encoded)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.RECT)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.writeNumberArray(this.rect))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.CONTENTS)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.contents)), this.object_id))))
        ret.push(WriterUtil.BRACKET_END)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.ID)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.id)), this.object_id))))
        ret.push(WriterUtil.BRACKET_END)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.UPDATE_DATE)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.updateDate as string)), this.object_id))))
        ret.push(WriterUtil.BRACKET_END)
        ret.push(WriterUtil.SPACE)

        if (this.appearanceStream) {
            ret = ret.concat(WriterUtil.AP)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.appearanceStream.writeAppearanceStream())
            ret.push(WriterUtil.SPACE)
        }

        if (this.annotationFlags) {
            let flags_value : number = this.encodeAnnotationFlags()
            ret = ret.concat(WriterUtil.FLAG)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(flags_value))
            ret.push(WriterUtil.SPACE)
        }

        if (this.border) {
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.BORDER)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([this.border.horizontal_corner_radius || 0, this.border.vertical_corner_radius || 0, this.border.border_width || 1]))
            ret.push(WriterUtil.SPACE)
        }


        if (this.color) {
            this.color = Util.colorToRange01(this.color)

            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.COLOR)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([this.color.r, this.color.g, this.color.b]))
            ret.push(WriterUtil.SPACE)
        }

        if (this.raw_parameters && this.raw_parameters.length > 0) {
            for(let i of this.raw_parameters) {
                ret.push(WriterUtil.SPACE)
                ret = ret.concat(i)
                ret.push(WriterUtil.SPACE)
            }
        }

        return ret
    }

    protected convertLineEndingStyle(lne : LineEndingStyle) : number[] {
        switch(lne) {
            case LineEndingStyle.Square:
                return Util.convertStringToAscii("/Square")
            case LineEndingStyle.Circle:
                return Util.convertStringToAscii("/Circle")
            case LineEndingStyle.Diamond:
                return Util.convertStringToAscii("/Diamond")
            case LineEndingStyle.OpenArrow:
                return Util.convertStringToAscii("/OpenArrow")
            case LineEndingStyle.ClosedArrow:
                return Util.convertStringToAscii("/ClosedArrow")
            case LineEndingStyle.Butt:
                return Util.convertStringToAscii("/Butt")
            case LineEndingStyle.ROpenArrow:
                return Util.convertStringToAscii("/ROpenArrow")
            case LineEndingStyle.RClosedArrow:
                return Util.convertStringToAscii("/RClosedArrow")
            case LineEndingStyle.Slash:
                return Util.convertStringToAscii("/Slash")
            default:
                return Util.convertStringToAscii("/None")
        }

    }

    public writeAnnotationPostamble() : number[] {
        let ret : number[] = [...WriterUtil.DICT_END]
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return ret
    }

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

        // Check referenced appearance streams
        if (this.takeAppearanceStreamFrom) {
            if (typeof this.takeAppearanceStreamFrom === 'string') { // lookup appearance stream
                let res : Annotation[] = []
                this.factory._getAnnotations().forEach((annots : any) => {
                    res = annots.filter((value : any) => value.id === this.takeAppearanceStreamFrom)
                })

                if (res.length === 0 || res.length > 1) {
                    errorList.push(new InvalidAnnotationReference("The provided string referencing the annotation to take the appearance stream from is not valid."))
                }

                if (!res[0].appearanceStream) {
                    errorList.push(new InvalidAppearanceStreamError("The referenced annotation has no specified appearance stream."))
                }

                this.appearanceStream = res[0].appearanceStream
            } else if (this.takeAppearanceStreamFrom instanceof BaseAnnotationObj) {
                this.appearanceStream = this.takeAppearanceStreamFrom.appearanceStream
            }
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

        if (!color) {
            return errorList
        }

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

    /**
     * Extracts the information of the raw annotation obj that is provided by the PDF document parser
     * */
    public extract(annot_obj : any, page : any, cryptoInterface : CryptoInterface) {
        this.pageReference = page
        this.type = annot_obj["/Subtype"]
        this.rect = annot_obj["/Rect"]

        if (annot_obj["/M"])
            this.updateDate = Util.convertUnicodeToString(cryptoInterface.decrypt(annot_obj["/M"], this.object_id))

        if (annot_obj["/Border"])
            this.border = annot_obj["/Border"]

        if (annot_obj["/C"])
            this.color = annot_obj["/C"]

        if (annot_obj["/NM"])
            this.id = Util.convertUnicodeToString(cryptoInterface.decrypt(annot_obj["/NM"], this.object_id))

        if (annot_obj["/Contents"])
            this.contents = Util.convertUnicodeToString(cryptoInterface.decrypt(annot_obj["/Contents"], this.object_id))

        if (annot_obj["/AP"])
            this.appearanceStream = AppearanceStreamParser.parse(this, annot_obj["/AP"])
    }
}

/**
 * A helper class that is only used if a parsed annotation type cannot be identified and translated into a supported annotation type
 * */
export class RawAnnotationObj extends BaseAnnotationObj {
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

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        ret = ret.concat(WriterUtil.AUTHOR)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.author)), this.object_id))))
        ret.push(WriterUtil.BRACKET_END)
        ret.push(WriterUtil.SPACE)

        if (this.opacity) {
            ret = ret.concat(WriterUtil.OPACITY)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.opacity))
            ret.push(WriterUtil.SPACE)
        }

        if (this.creationDate) {
            ret = ret.concat(WriterUtil.CREATION_DATE)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.BRACKET_START)
            ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.creationDate as string)), this.object_id))))
            ret.push(WriterUtil.BRACKET_END)
            ret.push(WriterUtil.SPACE)
        }

        if (this.subject !== "") {
            ret = ret.concat(WriterUtil.SUBJ)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.BRACKET_START)
            ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.subject)), this.object_id))))
            ret.push(WriterUtil.BRACKET_END)
            ret.push(WriterUtil.SPACE)
        }

        if (this.richtextString) {
            ret = ret.concat(WriterUtil.RC)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.BRACKET_START)
            ret = ret.concat(Array.from(Util.escapeString(cryptoInterface.encrypt(new Uint8Array(Util.convertStringToAscii(this.richtextString!)), this.object_id))))
            ret.push(WriterUtil.BRACKET_END)
            ret.push(WriterUtil.SPACE)
        }

        return ret
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

    public extract(annot_obj : any, page : any, cryptoInterface : CryptoInterface) {
        super.extract(annot_obj, page, cryptoInterface)

        if (annot_obj["/T"])
            this.author = Util.convertUnicodeToString(cryptoInterface.decrypt(annot_obj["/T"], this.object_id))
    }
}
