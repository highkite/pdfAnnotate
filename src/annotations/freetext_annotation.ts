import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { Util } from '../util'

export enum TextJustification {
    Left, Centered, Right
}

export enum FreeTextType {
    FreeText, FreeTextCallout, FreeTextTypeWriter
}

export enum LineEndingStyle {
    Square, Circle, Diamond, OpenArrow, ClosedArrow, Butt, ROpenArrow, RClosedArrow, Slash, None
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
        switch (just){
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
}
