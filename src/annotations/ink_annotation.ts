import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';

export interface InkAnnotation extends MarkupAnnotation {
    inkList: number[][] // /InkList
    borderStyle?: any // /BS
}

export class InkAnnotationObj extends MarkupAnnotationObj implements InkAnnotation {
    inkList: number[][] = []

    constructor() {
        super()
        this.type = "/Ink"
        this.type_encoded = [47, 73, 110, 107] // = '/Ink'
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        if (this.inkList && this.inkList.length > 0) {
            ret = ret.concat(WriterUtil.INKLIST)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNestedNumberArray(this.inkList))
            ret.push(WriterUtil.SPACE)
        }

        return ret
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Ink") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if ('number' === typeof this.inkList[0]) {
            this.inkList = [this.inkList] as any
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}
