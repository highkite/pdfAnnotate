import { MarkupAnnotation, MarkupAnnotationObj, LineEndingStyle, Color } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError, InvalidFontError, InvalidFontSizeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { Util } from '../util'
import { AppStream, XObjectObj, GraphicsStateParameter } from '../appearance-stream';
import { Resource } from '../resources';
import { ContentStream, GraphicsObject } from '../content-stream';
import { Font, FontType } from '../fonts';

export enum TextJustification {
    Left, Centered, Right
}

export enum FreeTextType {
    FreeText, FreeTextCallout, FreeTextTypeWriter
}

export interface FreeTextAnnotation extends MarkupAnnotation {
    textJustification?: TextJustification // /Q
    defaultAppearance: ContentStream // /DA
    defaultStyleString?: string // /DS
    calloutLine?: number[] // /CL
    freeTextType?: FreeTextType // /IT
    borderEffect?: any // /BE
    borderStyle?: any // /BS
    differenceRectangle?: number[] // /RD
    lineEndingStyle?: LineEndingStyle // LE
    font : string | Font
    fontSize : number
    textColor: Color | undefined
}

export class FreeTextAnnotationObj extends MarkupAnnotationObj implements FreeTextAnnotation {
    defaultAppearance : ContentStream = new ContentStream() // /DA
    defaultStyleString : string | undefined
    differenceRectangle : number[] = []
    textJustification : TextJustification = TextJustification.Left // /Q
    calloutLine: number[] = []
    freeTextType: FreeTextType = FreeTextType.FreeText
    lineEndingStyle : LineEndingStyle = LineEndingStyle.None
    font : string | Font = "/Helvetica"
    fontSize : number = 18
    resources : Resource | undefined = undefined
    textColor: Color | undefined = undefined

    constructor() {
        super()
        this.type = "/FreeText"
        this.type_encoded = [47, 70, 114, 101, 101, 84, 101, 120, 116] // = '/FreeText'
    }

    private convertJustification(just : TextJustification) : number {
        switch (just) {
            case TextJustification.Left:
                return 0
            case TextJustification.Centered:
                return 1
            case TextJustification.Right:
                return 2
            default:
                return 0
        }
    }

    private convertFreeTextType(ft : FreeTextType) : number[] {
        switch (ft) {
            case FreeTextType.FreeText:
                return Util.convertStringToAscii("/FreeText")
            case FreeTextType.FreeTextCallout:
                return Util.convertStringToAscii("/FreeTextCallout")
            case FreeTextType.FreeTextTypeWriter:
                return Util.convertStringToAscii("/FreeTextTypeWriter")
            default:
                return Util.convertStringToAscii("/FreeText")
        }
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        debugger;
        let font : Font = this.factory.parser.fontManager.getFont(this.font)

        if(!font) {
            console.warn(`Could not find font ${this.font}`)
            font = this.factory.parser.fontManager.addFont(this.font)
        }

        if (!this.resources) {
            this.resources = new Resource()
        }

        if(!font.name) {
            throw Error("Selected font has no name")
        }

        this.resources.addFontDef({name: font.name, refPtr: font.object_id})

        if (this.defaultAppearance.isEmpty()) {
            if (this.textColor) {
                this.defaultAppearance.addOperator("rg", [this.textColor.r, this.textColor.g, this.textColor.b])
            }
            this.defaultAppearance.addOperator("Tf", [font.name, this.fontSize])
        }

        if(!this.defaultStyleString || ""  === this.defaultStyleString) {
            if (font.fontType === FontType.Type1) {
                if(!font.baseFont) {
                    throw Error("Type 1 font has no defined baseFont")
                }

                let font_family : string = font.baseFont!.substring(1)
                this.defaultStyleString = `font:${this.fontSize}pt "${font_family}";`
                if (this.color) {
                    this.defaultStyleString += `color:${Util.colorToHex(this.color)};`
                }
            } else {
                this.defaultStyleString = undefined
            }
        }

        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.DEFAULT_APPEARANCE)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(this.defaultAppearance.writeContentStream(true))
        ret.push(WriterUtil.BRACKET_END)
        ret.push(WriterUtil.SPACE)

        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.TEXT_JUSTIFICATION)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(Util.convertNumberToCharArray(this.convertJustification(this.textJustification)))
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.IT)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(this.convertFreeTextType(this.freeTextType))
        ret.push(WriterUtil.SPACE)

        if (this.calloutLine.length > 0) {
            ret = ret.concat(WriterUtil.CALLOUT_LINE)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(this.calloutLine))
            ret.push(WriterUtil.SPACE)
        }

        if (this.lineEndingStyle !== LineEndingStyle.None) {
            ret = ret.concat(WriterUtil.LINE_ENDING)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.convertLineEndingStyle(this.lineEndingStyle))
            ret.push(WriterUtil.SPACE)
        }

        if (this.defaultStyleString && this.defaultStyleString !== "") {
            ret = ret.concat(WriterUtil.DEFAULT_STYLE_STRING)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.BRACKET_START)
            ret = ret.concat(Util.convertStringToAscii(this.defaultStyleString))
            ret.push(WriterUtil.BRACKET_END)
            ret.push(WriterUtil.SPACE)
        }

        if (this.differenceRectangle && this.differenceRectangle.length > 0) {
            ret = ret.concat(WriterUtil.DIFFERENCE_RECTANGLE)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(this.differenceRectangle))
            ret.push(WriterUtil.SPACE)
        }

        if (this.resources) {
            ret = ret.concat(WriterUtil.RESOURCES)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.resources.writeResource())
            ret.push(WriterUtil.SPACE)
        }

        // 1. get current font and font name
        // 2. get font size
        // 3. get color
        // 4. write DA string
        // 5. write DS string
        // 6. add resources dictionary to annotation object for the used font name in DA
        // 7. If no font was set and Helvetica default font is not yet defined in the document it must be
        // created and added to the document

        return ret
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/FreeText") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        errorList = errorList.concat(this.checkColor(this.textColor))

        if (this.calloutLine && this.calloutLine.length > 0 && this.freeTextType !== FreeTextType.FreeTextCallout) {
            console.log("Warning: Callout line only relevant for free text type: 'Callout'")
        }

        if (this.fontSize < 0) {
            errorList.push(new InvalidFontSizeError("A font size < 0 is not allowed"))
        }

        if (typeof this.font === 'string' || this.font instanceof Font) {
            if (typeof this.font === 'string') {
                if (!this.font.startsWith("/")) {
                    this.font = `/${this.font}`
                }
            }

            if(!this.factory.parser.getFonts().isRegisteredFont(this.font)) {
                errorList.push(new InvalidFontError("Only fonts registered in the PDF and standard fonts are allowed"))
            }
        } else {
            errorList.push(new InvalidFontError("Only fonts registered in the PDF and standard fonts are allowed"))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }

    public createDefaultAppearanceStream() {
        this.appearanceStream = new AppStream(this)
        this.appearanceStream.new_object = true
        let xobj = new XObjectObj()
        xobj.object_id = this.factory.parser.getFreeObjectId()
        xobj.new_object = true
        xobj.bBox = this.rect
        xobj.matrix = [1, 0, 0, 1, -this.rect[0], -this.rect[1]]
        let cs  = new ContentStream()
        xobj.contentStream = cs
        let cmo = cs.addMarkedContentObject(["/Tx"])
        let go = cmo.addGraphicObject()
        go.setLineColor()
        let to = go.addTextObject()
        to.addOperator("Tm", [1, 0, 0, 1, this.rect[0], this.rect[1]])

        // 1. get used font
        // 2. get name and define font and name in resources of xobj
        // 3. if font is not yet defined in the document and not already defined by another annotation or so create and add it to the document
        // 4. set the font
        to.setFont()
        to.setText(this.contents, [0, 0])

        // 1) determine text width with the font
        // 2) determine line breaks
        // 3) write the text in a way that it automatically implements linebreak at spaces.
        // 4) allow user to disable this feature and just write text (overflowing the defined rect dimensions)

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob: any) => ob.writeXObject())})
    }
}
