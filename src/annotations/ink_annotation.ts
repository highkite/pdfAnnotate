import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { ErrorList, InvalidAnnotationTypeError } from './annotation_errors';
import { CryptoInterface } from '../parser';
import { WriterUtil } from '../writer-util';
import { AppStream, XObjectObj, GraphicsStateParameter } from '../appearance-stream';
import { Resource } from '../resources';
import { ContentStream, GraphicsObject } from '../content-stream';

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
        go.setLineColor({r: 0, g: 0, b:0}).setFillColor(this.color)
        for (let inkl of this.inkList) {
            go.drawPolygon(inkl)
        }

        this.appearanceStream.N = xobj
        this.additional_objects_to_write.push({obj: xobj, func: ((ob : any, cryptoInterface : CryptoInterface) => ob.writeXObject(cryptoInterface))})
    }
}
