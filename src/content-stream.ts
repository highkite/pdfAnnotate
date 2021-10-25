import { ReferencePointer } from './parser';
import { Util } from './util';
import { WriterUtil } from './writer-util';

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
            }
        }

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

export class GraphicsObject extends Operator { }

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
