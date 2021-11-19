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

    drawFillCircle(x_1 : number, y_1 : number, x_2 : number, y_2 : number, linewidth : number = 2) : GraphicsObject {
        x_1 += linewidth
        y_1 += linewidth
        x_2 -= linewidth
        y_2 -= linewidth
        let rect_width : number = Math.abs(x_2 - x_1)
        let rect_height : number = Math.abs(y_2 - y_1)
        this.addOperator("w", [linewidth])
        this.addOperator("m", [x_1 + rect_width / 2, y_1])
        this.addOperator("c", [x_1 + rect_width / 2, y_1, x_2, y_1, x_2, y_1 + rect_height / 2])
        this.addOperator("c", [x_2, y_1 + rect_height / 2, x_2, y_2, x_1 + rect_width / 2, y_2])
        this.addOperator("c", [x_1 + rect_width / 2, y_2, x_1, y_2, x_1, y_1 + rect_height / 2])
        this.addOperator("c", [x_1, y_1 + rect_height / 2, x_1, y_1, x_1 + rect_width / 2, y_1])
        this.addOperator("B")
        return this
    }

    fillCircle(x_1 : number, y_1 : number, x_2 : number, y_2 : number) : GraphicsObject {
        let rect_width : number = Math.abs(x_2 - x_1)
        let rect_height : number = Math.abs(y_2 - y_1)
        this.addOperator("m", [x_1 + rect_width / 2, y_1])
        this.addOperator("v", [x_2, y_1, x_2, y_1 + rect_height / 2])
        this.addOperator("v", [x_2, y_2, x_1 + rect_width / 2, y_2])
        this.addOperator("v", [x_1, y_2, x_1, y_1 + rect_height / 2])
        this.addOperator("v", [x_1, y_1, x_1 + rect_width / 2, y_1])
        this.addOperator("f")
        return this
    }

    /**
     * Draws a circle (or an oval) where the rectangle defined by the coordinates represents the bounding box
     * */
    drawCircle(x_1 : number, y_1 : number, x_2 : number, y_2 : number, linewidth : number = 2) : GraphicsObject {
        x_1 += linewidth
        y_1 += linewidth
        x_2 -= linewidth
        y_2 -= linewidth
        let rect_width : number = Math.abs(x_2 - x_1)
        let rect_height : number = Math.abs(y_2 - y_1)
        this.addOperator("w", [linewidth])
        this.addOperator("m", [x_1 + rect_width / 2, y_1])
        this.addOperator("v", [x_2, y_1, x_2, y_1 + rect_height / 2])
        this.addOperator("v", [x_2, y_2, x_1 + rect_width / 2, y_2])
        this.addOperator("v", [x_1, y_2, x_1, y_1 + rect_height / 2])
        this.addOperator("v", [x_1, y_1, x_1 + rect_width / 2, y_1])
        this.addOperator("s")
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

    drawFillPolygon(points: number[], linewidth: number = 2) : GraphicsObject {
        if(points.length <= 2)
            return this

        if(points.length % 2 !== 0)
            throw Error("Number of points must be even")

        this.addOperator("w", [linewidth])
        this.addOperator("m", [points[0], points[1]])

        for(let i = 2; i < points.length; i+=2) {
            this.addOperator("l", [points[i], points[i+1]])
        }
        this.addOperator("B")

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
    public static readonly SINGLE_CHAR_WIDTH = 10

    constructor() {
        super("BT")
    }

    /**
     * Places text relative from the last given position or Tm object (origin) with + x_rel, + y_rel location
     * */
    setTextRelative(text: string, x_rel : number | number[] | undefined = undefined, y_rel : number | undefined = undefined) {
        if (text === "")
            return this

        if (x_rel && Array.isArray(x_rel)) {
            y_rel = (x_rel as number[])[1]
            x_rel = (x_rel as number[])[0]
        } else if (x_rel && typeof x_rel === 'number' && (!y_rel || typeof y_rel === 'number')) {
            throw Error("Invalid number of positioning elements. Must be x and y coordinate")
        }

        text = text.trim()

        if (text.charAt(0) !== "(" || text.charAt(text.length -1) !== ")") {
            text = `(${text})`
        }

        if (typeof x_rel !== 'undefined' && typeof y_rel !== 'undefined') {
            this.addOperator("Td", [x_rel, y_rel])
        }
        this.addOperator("Tj", [text])
    }

    /**
     * Places text absolut at the current position or if provided at the x, y coordinates
     *
     * Uses a '1 0 0 1 x y Tm' for placing. So this method cannot be used for scaling.
     * */
    setText(text: string, x : number | number[] | undefined = undefined, y : number | undefined = undefined) : TextObject {
        if (text === "")
            return this

        if (x && Array.isArray(x) && x.length >= 2) {
            y = (x as number[])[1]
            x = (x as number[])[0]
        } else if (x && typeof x === 'number' && (!y || typeof y === 'number')) {
            throw Error("Invalid number of positioning elements. Must be x and y coordinate")
        }

        text = text.trim()

        if (text.charAt(0) !== "(" || text.charAt(text.length -1) !== ")") {
            text = `(${text})`
        }

        if (typeof x !== 'undefined' && typeof y !== 'undefined') {
            this.addOperator("Tm", [1, 0, 0, 1, x, y])
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
        let rect_height : number = Math.abs(rect[3] - rect[1])

        let calc_just = (textwidth : number) => {
            if (justification === TextJustification.Centered) {
                return rect_width / 2 - textwidth / 2 + rect[0]
            } else if (justification === TextJustification.Right) {
                return  rect_width + rect[0] - textwidth
            } else {
                return rect[0]
            }
        }


        // If text fits into the rectangle
        // just place the text
        if (rect_width < TextObject.SINGLE_CHAR_WIDTH) { // if provided rectangle is too small to present a single letter just write it but warn
            console.warn(`Overfull hbox ${rect_width} is below minimal threshold of ${TextObject.SINGLE_CHAR_WIDTH}`)
            this.setText(text, [calc_just(font.calculateTextDimensions(text, textSize)[0]), rect_height - textSize * 1.2 + rect[1]])
            return this
        } else {
            let positions : {start : number, end : number, width : number}[] = font.proposeLinebreaks(text, textSize, rect_width)
            let last_pos : number = calc_just(positions[0].width)

            this.setText(text.substring(positions[0].start, positions[0].end + 1), [last_pos, rect_height - textSize * 1.2 + rect[1]])

            for(let i = 1; i < positions.length; ++i) {
                let x_pos = calc_just(positions[i].width)
                this.setTextRelative(text.substring(positions[i].start, positions[i].end + 1), [x_pos - last_pos, -textSize])
                last_pos = x_pos
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
