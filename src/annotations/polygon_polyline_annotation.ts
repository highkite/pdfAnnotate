import { MarkupAnnotation, MarkupAnnotationObj, Color, LineEndingStyle } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError, InvalidVerticesError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { AppStream, XObjectObj, GraphicsStateParameter } from '../appearance-stream';
import { Resource } from '../resources';
import { ContentStream, GraphicsObject } from '../content-stream';

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
    lineEndingStyles? : LineEndingStyle[] // /LE
}

export class PolyLineAnnotationObj extends PolygonPolyLineAnnotationObj implements PolyLineAnnotation {
    lineEndingStyles : LineEndingStyle[] = []

    constructor() {
        super()
        this.type = "/PolyLine"
        this.type_encoded = [47, 80, 111, 108, 121, 76, 105, 110, 101] // '/PolyLine
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        if (this.lineEndingStyles && this.lineEndingStyles.length >= 2) {
            ret = ret.concat(WriterUtil.LINE_ENDING)
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.ARRAY_START)
            ret = ret.concat(this.convertLineEndingStyle(this.lineEndingStyles[0]))
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.convertLineEndingStyle(this.lineEndingStyles[1]))
            ret.push(WriterUtil.SPACE)
            ret.push(WriterUtil.ARRAY_END)
            ret.push(WriterUtil.SPACE)
        }

        return ret
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

        if (this.opacity !== 1) {
            go.addOperator("gs", ["/GParameters"])

            let gsp = new GraphicsStateParameter(this.factory.parser.getFreeObjectId())
            gsp.CA = gsp.ca = this.opacity
            this.additional_objects_to_write.push({obj: gsp, func: ((ob: any) => ob.writeGStateParameter())})
            let res = new Resource()
            res.addGStateDef({name: "/GParameters", refPtr: gsp.object_id})
            xobj.resources = res
        }

        go.setLineColor({r: 0, g: 0, b:0}).setFillColor(this.color).drawPolygon(this.vertices)

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob : any, cryptoInterface : CryptoInterface) => ob.writeXObject(cryptoInterface))})
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

        if (this.opacity !== 1) {
            go.addOperator("gs", ["/GParameters"])

            let gsp = new GraphicsStateParameter(this.factory.parser.getFreeObjectId())
            gsp.CA = gsp.ca = this.opacity
            this.additional_objects_to_write.push({obj: gsp, func: ((ob: any) => ob.writeGStateParameter())})
            let res = new Resource()
            res.addGStateDef({name: "/GParameters", refPtr: gsp.object_id})
            xobj.resources = res
        }

        go.setLineColor({r: 0, g: 0, b:0}).setFillColor(this.color).drawFillPolygon(this.vertices)

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob : any, cryptoInterface : CryptoInterface) => ob.writeXObject(cryptoInterface))})
    }
}
