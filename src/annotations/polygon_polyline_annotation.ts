import { MarkupAnnotation, MarkupAnnotationObj, Color, LineEndingStyle } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError, InvalidVerticesError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';

export enum PolygonPolyLineIntent {
    PolygonCloud, PolyLineDimension, PolygonDimension
}

export interface PolygonPolyLineAnnotation extends MarkupAnnotation {
    vertices: number[]
    borderStyle? : any
    fill?: Color
    intent?: PolygonPolyLineIntent
    measure? : any
}

export class PolygonPolyLineAnnotationObj extends MarkupAnnotationObj implements PolygonPolyLineAnnotation {
    fill : Color | undefined
    vertices: number[] = []

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

        ret = ret.concat(WriterUtil.VERTICES)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.writeNumberArray(this.vertices))
        ret.push(WriterUtil.SPACE)


        return ret
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.fill) {
            errorList = errorList.concat(this.checkColor(this.fill))
        }

        if (!this.vertices || this.vertices.length == 0) {
            errorList.push(new InvalidVerticesError("No vertices provided"))
        }

        if (this.vertices.length % 2 !== 0) {
            errorList.push(new InvalidVerticesError("number of vertices must be an even number"))
        }


        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}

export interface PolyLineAnnotation extends PolygonPolyLineAnnotation {
    lineEndingStyles? : LineEndingStyle[]
}

export class PolyLineAnnotationObj extends PolygonPolyLineAnnotationObj implements PolyLineAnnotation {

    constructor() {
        super()
        this.type = "/PolyLine"
        this.type_encoded = [47, 80, 111, 108, 121, 76, 105, 110, 101] // '/PolyLine
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/PolyLine") {
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

export interface PolygonAnnotation extends PolygonPolyLineAnnotation {
    borderEffect?: any
}

export class PolygonAnnotationObj extends PolygonPolyLineAnnotationObj implements PolygonAnnotation {

    constructor() {
        super()
        this.type = "/Polygon"
        this.type_encoded = [47, 80, 111, 108, 121, 103, 111, 110] // = '/Polygon
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Polygon") {
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
