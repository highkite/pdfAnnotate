import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';

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
    defaultAppearance : string = "" // /DA
    textJustification : TextJustification = TextJustification.Left // /Q
    calloutLine: number[] = []
    freeTextType: FreeTextType = FreeTextType.FreeText
    lineEndingStyle : LineEndingStyle = LineEndingStyle.None

    constructor() {
        super()
        this.type = "/FreeText"
        this.type_encoded = [47, 70, 114, 101, 101, 84, 101, 120, 116] // = '/FreeText'
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
