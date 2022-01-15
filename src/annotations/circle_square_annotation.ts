import { MarkupAnnotation, MarkupAnnotationObj, Color } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { AppStream, XObjectObj, GraphicsStateParameter } from '../appearance-stream';
import { Resource } from '../resources';
import { ContentStream, GraphicsObject } from '../content-stream';

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

        go.setLineColor({r: 0, g: 0, b:0}).setFillColor(this.color).drawFillCircle(this.rect[0], this.rect[1], this.rect[2], this.rect[3])

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob : any, cryptoInterface : CryptoInterface) => ob.writeXObject(cryptoInterface))})
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
            this.additional_objects_to_write.push({obj: gsp, func: ((ob: any, cryptoInterface : CryptoInterface) => ob.writeGStateParameter(cryptoInterface))})
            let res = new Resource()
            res.addGStateDef({name: "/GParameters", refPtr: gsp.object_id})
            xobj.resources = res
        }

        go.setLineColor({r: 0, g: 0, b:0}).setFillColor(this.color).drawFillRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3])

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob : any, cryptoInterface : CryptoInterface) => ob.writeXObject(cryptoInterface))})
    }
}
