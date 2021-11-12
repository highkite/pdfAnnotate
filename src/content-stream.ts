import { ReferencePointer } from './parser';
import { Util } from './util';
import { WriterUtil } from './writer-util';
import { Color } from './annotations/annotation_types';
import { Font } from './fonts';
import { TextJustification } from './annotations/freetext_annotation';

export class Operator {
    operators: Operator[] = []
    constructor(public name : string = "", public parameters : (number | string | ReferencePointer)[] = []) { }

    /**
     * Transforms operator to byte array
     * */
    toByteArray(noLineFeed : boolean = false) : number[] {
        let ret: number[] = []

        for(let op of this.operators) {
            for(let param of op.parameters) {
                ret = ret.concat(Util.convertStringToAscii(`${param}`))
                ret.push(Util.SPACE)
            }

            if (op instanceof MarkedContent) {
                ret = ret.concat(WriterUtil.BMC)
                if(!noLineFeed) {
                    ret.push(Util.LF)
                } else {
                    ret.push(Util.SPACE)
                }
                ret = ret.concat(op.toByteArray())
                ret = ret.concat(WriterUtil.EMC)
            } else if (op instanceof GraphicsObject) {
                ret.push(WriterUtil.q)
                if(!noLineFeed) {
                    ret.push(Util.LF)
                } else {
                    ret.push(Util.SPACE)
                }
                ret = ret.concat(op.toByteArray())
                ret.push(WriterUtil.Q)
            } else if (op instanceof TextObject) {
                ret = ret.concat(WriterUtil.BT)
                if(!noLineFeed) {
                    ret.push(Util.LF)
                } else {
                    ret.push(Util.SPACE)
                }
                ret = ret.concat(op.toByteArray())
                ret = ret.concat(WriterUtil.ET)
            } else {
                ret = ret.concat(Util.convertStringToAscii(op.name))
                if(!noLineFeed) {
                    ret.push(Util.LF)
                } else {
                    ret.push(Util.SPACE)
                }
            }
        }

        if (ret[ret.length - 1] !== Util.LF) {
            if(!noLineFeed) {
                ret.push(Util.LF)
            } else {
                ret.push(Util.SPACE)
            }
        }

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

    fillPolygon(points: number[]) : GraphicsObject {
        if(points.length <= 2)
            return this

        if(points.length % 2 !== 0)
            throw Error("Number of points must be even")

        this.addOperator("m", [points[0], points[1]])

        for(let i = 2; i < points.length; i+=2) {
            this.addOperator("l", [points[i], points[i+1]])
        }
        this.addOperator("f")

        return this
    }

    drawLine(x_1 : number, y_1 : number, x_2 : number, y_2 : number, linewidth: number = 2) : GraphicsObject {
        this.addOperator("w", [linewidth])
        this.addOperator("m", [x_1, y_1])
        this.addOperator("l", [x_2, y_2])
        this.addOperator("S")

        return this
    }

    setLineColor(color : Color | undefined = undefined) : GraphicsObject {
        if (!color)
            color = {r: 0, g: 0, b: 0}

        color = Util.colorToRange01(color)
        this.addOperator("RG", [color.r, color.g, color.b])
        return this
    }

    setFillColor(color : Color | undefined = undefined) : GraphicsObject {
        if (!color)
            color = {r: 0, g: 0, b: 0}

        color = Util.colorToRange01(color)
        this.addOperator("rg", [color.r, color.g, color.b])
        return this
    }
}

export class TextObject extends Operator {
    constructor() {
        super("BT")
    }

    setText(text: string, pos : number[] | undefined = undefined) : TextObject {
        if (text === "")
            return this

        text = text.trim()

        if (text.charAt(0) !== "(" || text.charAt(text.length -1) !== ")") {
            text = `(${text})`
        }

        if (pos) {
            if (pos.length !== 2) {
                throw Error("Invalid number of positioning elements. Must be x and y coordinate")
            }

            this.addOperator("Td", pos)
        }
        this.addOperator("Tj", [text])

        return this
    }

    /**
     * Places a text in the rectangle defined by 'rect'. It applies text justification.
     *
     * It applies line breaks. It first tries linebreaking at spaces between words and if that is not possible it will break between letters
     * */
    formatText(text: string, font : Font, textSize : number, rect : number[], justification : TextJustification | undefined = undefined) : TextObject {
        let rect_width : number = Math.abs(rect[2] - rect[0])
        let prop_lb = font.proposeLinebreaks(text, textSize, rect_width)
        let threshold = 100

        // If text fits into the rectangle
        // just place the text
        if (prop_lb.dimensions[0] <= rect_width) {
            this.setText(text, [rect[0], rect[1]])
            return this
        } else if (rect_width < threshold ) { // if provided rectangle is too small to present a single letter just write it but warn
            console.warn(`Overull hbox ${rect_width} is below minimal threshold of ${threshold}`)
            this.setText(text, [rect[0], rect[1]])
            return this
        } else { // we need to apply line breaks
            let last_pos = 0, y_offset = 0
            for(let pos of prop_lb.positions) {
                this.setText(text.substring(last_pos, pos), [0, y_offset])
                y_offset += textSize
                last_pos = pos
            }
        }

        return this
    }

    setFont(font: string = "/F1", fontSize: number = 14) : TextObject {
        this.addOperator("Tf", [font, fontSize])

        return this
    }


    setColor(color : Color | undefined = undefined) : TextObject {
        if (!color)
            color = {r: 0, g: 0, b: 0}

        color = Util.colorToRange01(color)
        this.addOperator("rg", [color.r, color.g, color.b])
        return this
    }
}

export class ContentStream extends Operator {

    /**
     * True, if the content stream is empty
     * */
    isEmpty() : boolean {
        return this.operators.length === 0
    }

    /**
     * Outputs the content stream as byte sequence
     * */
    writeContentStream(noLineFeed : boolean = false) : number[] {
        return this.toByteArray(noLineFeed)
    }
}
