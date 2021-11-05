import { MarkupAnnotation, MarkupAnnotationObj, LineEndingStyle } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { Util } from '../util'
import { AppStream, XObjectObj, Resource, GraphicsStateParameter } from '../appearance-stream';
import { ContentStream, GraphicsObject } from '../content-stream';

export enum TextJustification {
    Left, Centered, Right
}

export enum FreeTextType {
    FreeText, FreeTextCallout, FreeTextTypeWriter
}

export interface FreeTextAnnotation extends MarkupAnnotation {
    textJustification?: TextJustification // /Q
    defaultAppearance: string // /DA
    defaultStyleString?: string // /DS
    calloutLine?: number[] // /CL
    freeTextType?: FreeTextType // /IT
    borderEffect?: any // /BE
    borderStyle?: any // /BS
    differenceRectangle?: number[] // /RD
    lineEndingStyle?: LineEndingStyle // LE
}

export class FreeTextAnnotationObj extends MarkupAnnotationObj implements FreeTextAnnotation {
    defaultAppearance : string = "/Invalid_font 9 Tf" // /DA
    defaultStyleString : string | undefined
    differenceRectangle : number[] = []
    textJustification : TextJustification = TextJustification.Left // /Q
    calloutLine: number[] = []
    freeTextType: FreeTextType = FreeTextType.FreeText
    lineEndingStyle : LineEndingStyle = LineEndingStyle.None

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

        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.DEFAULT_APPEARANCE)
        ret.push(WriterUtil.SPACE)
        ret.push(WriterUtil.BRACKET_START)
        ret = ret.concat(Util.convertStringToAscii(this.defaultAppearance))
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

        return ret
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/FreeText") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if (this.calloutLine && this.calloutLine.length > 0 && this.freeTextType !== FreeTextType.FreeTextCallout) {
            console.log("Warning: Callout line only relevant for free text type: 'Callout'")
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
        //xobj.bBox = [0, 0, 160, 100]
        xobj.bBox = this.rect
        xobj.matrix = [1, 0, 0, 1, -this.rect[0], -this.rect[1]]
        let cs  = new ContentStream()
        xobj.contentStream = cs
        let cmo = cs.addMarkedContentObject(["/Tx"])
        let go = cmo.addGraphicObject()
        go.setLineColor()
        let to = go.addTextObject()
        to.addOperator("Tm", [1, 0, 0, 1, this.rect[0], this.rect[1]])
        to.setFont()
        to.setText(this.contents, [0, 0])
        //xobj.bBox[2] = 14 * this.contents.length
        //xobj.bBox[3] = 14
        //this.rect[2] = this.rect[0] + 14 * this.contents.length
        //xobj.bBox = [...this.rect]
        //
        // 1) determine text width
        // 2) determine line breaks

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob: any) => ob.writeXObject())})
    }
}
