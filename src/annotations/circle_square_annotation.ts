import { MarkupAnnotation, MarkupAnnotationObj, Color } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';

export interface CircleSquareAnnotation extends MarkupAnnotation {
    borderStyle?: any // /BS
    fill?: Color // /IC
    borderEffect? : any // /BE
    differenceRectangle?: number[] // /RD
}

export class CircleSquareAnnotationObj extends MarkupAnnotationObj implements CircleSquareAnnotation {
    fill : Color | undefined
    differenceRectangle : number[] = []

    constructor() {
        super()
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        if (this.fill) {
            let fill : Color = this.fill
            if (fill.r > 1) fill.r /= 255
            if (fill.g > 1) fill.g /= 255
            if (fill.b > 1) fill.b /= 255

            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.FILL)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray([fill.r, fill.g, fill.b]))
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

        if (this.fill) {
            errorList = errorList.concat(this.checkColor(this.fill))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}

export class CircleAnnotationObj extends CircleSquareAnnotationObj {

    constructor() {
        super()
        this.type = "/Circle"
        this.type_encoded = [47, 67, 105, 114, 99, 108, 101] // = '/Circle'
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Circle") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}

export class SquareAnnotationObj extends CircleSquareAnnotationObj {

    constructor() {
        super()
        this.type = "/Square"
        this.type_encoded =  [47, 83, 113, 117, 97, 114, 101] // = '/Square'
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Square") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}
