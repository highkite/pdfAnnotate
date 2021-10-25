import { ReferencePointer } from './parser';
import { Util } from './util';
import { WriterUtil } from './writer-util';
import { Color } from './annotations/annotation_types';

export class Operator {
    operators: Operator[] = []
    constructor(public name : string = "", public parameters : (number | string | ReferencePointer)[] = []) { }

    /**
     * Transforms operator to byte array
     * */
    toByteArray() : number[] {
        let ret: number[] = []

        for(let op of this.operators) {
            for(let param of op.parameters) {
                ret = ret.concat(Util.convertStringToAscii(`${param}`))
                ret.push(Util.SPACE)
            }

            if (op instanceof MarkedContent) {
                ret = ret.concat(WriterUtil.BMC)
                ret.push(Util.LF)
                ret = ret.concat(op.toByteArray())
                ret = ret.concat(WriterUtil.EMC)
            } else if (op instanceof GraphicsObject) {
                ret.push(WriterUtil.q)
                ret.push(Util.LF)
                ret = ret.concat(op.toByteArray())
                ret.push(WriterUtil.Q)
            } else if (op instanceof TextObject) {
                ret = ret.concat(WriterUtil.BT)
                ret.push(Util.LF)
                ret = ret.concat(op.toByteArray())
                ret = ret.concat(WriterUtil.ET)
            } else {
                ret = ret.concat(Util.convertStringToAscii(op.name))
                ret.push(Util.LF)
            }
        }

        if (ret[ret.length - 1] !== Util.LF)
            ret.push(Util.LF)

        return ret
    }

    /**
     * Adds the provided operator
     * */
    addOperator(arg: string | Operator, params : any[] = []) {
        if (arg instanceof Operator) {
            this.operators.push(arg)
        } else {
            this.operators.push(new Operator(arg, params))
        }
    }

    /**
     * Add marked content object to stream
     * */
    addMarkedContentObject(params: any[] = []) {
        let mco = new MarkedContent(params)
        this.operators.push(mco)

        return mco
    }

    /**
     * Add a graphic state to the content stream
     * */
    addGraphicObject() {
        let go = new GraphicsObject()
        this.operators.push(go)

        return go
    }

    /**
     * Add a text objct to the content stream
     * */
    addTextObject() {
        let to = new TextObject()
        this.operators.push(to)

        return to
    }
}

export class MarkedContent extends Operator {
    constructor(params: any[] = []) {
        super("BMC", params)
    }
}

export class GraphicsObject extends Operator {
    drawFillRect(x_1 : number, y_1 : number, x_2 : number, y_2 : number, cornerRadius : number | undefined = undefined, linewidth : number = 2) : GraphicsObject {
        this.addOperator("w", [linewidth])

        if (cornerRadius && (2 * cornerRadius > Math.abs(x_1 - x_2) || 2 * cornerRadius > Math.abs(y_1 - y_2))) {
            throw Error("Invalid corner radius. Must be small than two times the linewidth")
        }

        if (cornerRadius) {
            this.addOperator("m", [x_1, y_1 + cornerRadius])
            this.addOperator("l", [x_1, y_2 - cornerRadius])
            this.addOperator("c", [x_1, y_2, x_1, y_2, x_1 + cornerRadius, y_2])
            this.addOperator("l", [x_2 - cornerRadius, y_2])
            this.addOperator("c", [x_2, y_2, x_2, y_2, x_2, y_2 - cornerRadius])
            this.addOperator("l", [x_2, y_1 + cornerRadius])
            this.addOperator("c", [x_2, y_1, x_2, y_1, x_2 - cornerRadius, y_1])
            this.addOperator("l", [x_1 + cornerRadius, y_1])
            this.addOperator("c", [x_1, y_1, x_1, y_1, x_1, y_1 + cornerRadius])
        } else {
            this.addOperator("m", [x_1, y_1])
            this.addOperator("l", [x_2, y_1])
            this.addOperator("l", [x_2, y_2])
            this.addOperator("l", [x_1, y_2])
            this.addOperator("l", [x_1, y_1])
        }
        this.addOperator("B")
        return this
    }

    fillRect(x_1 : number, y_1 : number, x_2 : number, y_2 : number, cornerRadius : number | undefined = undefined) : GraphicsObject {
        if (cornerRadius && (2 * cornerRadius > Math.abs(x_1 - x_2) || 2 * cornerRadius > Math.abs(y_1 - y_2))) {
            throw Error("Invalid corner radius. Must be small than two times the linewidth")
        }

        if (cornerRadius) {
            this.addOperator("m", [x_1, y_1 + cornerRadius])
            this.addOperator("l", [x_1, y_2 - cornerRadius])
            this.addOperator("c", [x_1, y_2, x_1, y_2, x_1 + cornerRadius, y_2])
            this.addOperator("l", [x_2 - cornerRadius, y_2])
            this.addOperator("c", [x_2, y_2, x_2, y_2, x_2, y_2 - cornerRadius])
            this.addOperator("l", [x_2, y_1 + cornerRadius])
            this.addOperator("c", [x_2, y_1, x_2, y_1, x_2 - cornerRadius, y_1])
            this.addOperator("l", [x_1 + cornerRadius, y_1])
            this.addOperator("c", [x_1, y_1, x_1, y_1, x_1, y_1 + cornerRadius])
        } else {
            this.addOperator("m", [x_1, y_1])
            this.addOperator("l", [x_2, y_1])
            this.addOperator("l", [x_2, y_2])
            this.addOperator("l", [x_1, y_2])
            this.addOperator("l", [x_1, y_1])
        }
        this.addOperator("f")
        return this
    }

    drawRect(x_1 : number, y_1 : number, x_2 : number, y_2 : number, cornerRadius : number | undefined = undefined, linewidth : number = 2) : GraphicsObject {
        this.addOperator("w", [linewidth])

        if (cornerRadius && (2 * cornerRadius > Math.abs(x_1 - x_2) || 2 * cornerRadius > Math.abs(y_1 - y_2))) {
            throw Error("Invalid corner radius. Must be small than two times the linewidth")
        }

        if (cornerRadius) {
            this.addOperator("m", [x_1, y_1 + cornerRadius])
            this.addOperator("l", [x_1, y_2 - cornerRadius])
            this.addOperator("c", [x_1, y_2, x_1, y_2, x_1 + cornerRadius, y_2])
            this.addOperator("l", [x_2 - cornerRadius, y_2])
            this.addOperator("c", [x_2, y_2, x_2, y_2, x_2, y_2 - cornerRadius])
            this.addOperator("l", [x_2, y_1 + cornerRadius])
            this.addOperator("c", [x_2, y_1, x_2, y_1, x_2 - cornerRadius, y_1])
            this.addOperator("l", [x_1 + cornerRadius, y_1])
            this.addOperator("c", [x_1, y_1, x_1, y_1, x_1, y_1 + cornerRadius])
        } else {
            this.addOperator("m", [x_1, y_1])
            this.addOperator("l", [x_2, y_1])
            this.addOperator("l", [x_2, y_2])
            this.addOperator("l", [x_1, y_2])
            this.addOperator("l", [x_1, y_1])
        }
        this.addOperator("s")
        return this
    }

    drawPolygon(points: number[], linewidth: number = 2) : GraphicsObject {
        if(points.length <= 2)
            return this

        if(points.length % 2 !== 0)
            throw Error("Number of points must be even")

        this.addOperator("w", [linewidth])
        this.addOperator("m", [points[0], points[1]])

        for(let i = 2; i < points.length; i+=2) {
            this.addOperator("l", [points[i], points[i+1]])
        }
        this.addOperator("S")

        return this
    }

    drawLine(x_1 : number, y_1 : number, x_2 : number, y_2 : number, linewidth: number = 2) : GraphicsObject {
        this.addOperator("w", [linewidth])
        this.addOperator("m", [x_1, y_1])
        this.addOperator("l", [x_2, y_2])
        this.addOperator("S")

        return this
    }

    setLineColor(color : Color | undefined) : GraphicsObject {
        if (!color)
            color = {r: 0, g: 0, b: 0}

        if (color.r > 1) color.r /= 255
        if (color.g > 1) color.g /= 255
        if (color.b > 1) color.b /= 255
        this.addOperator("RG", [color.r, color.g, color.b])
        return this
    }

    setFillColor(color : Color | undefined) : GraphicsObject {
        if (!color)
            color = {r: 0, g: 0, b: 0}

        if (color.r > 1) color.r /= 255
        if (color.g > 1) color.g /= 255
        if (color.b > 1) color.b /= 255
        this.addOperator("rg", [color.r, color.g, color.b])
        return this
    }
}

export class TextObject extends Operator {
    constructor() {
        super("BT")
    }
}

export class ContentStream extends Operator {

    /**
     * Outputs the content stream as byte sequence
     * */
    writeContentStream() : number[] {
        return this.toByteArray()
    }
}
