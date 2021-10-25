import { ReferencePointer } from './parser';
import { Util } from './util';

export type ContentStream = Operator

export class Operator {
    operators: Operator[] = []
    constructor(public name : string = "", public parameters : (number | string | ReferencePointer)[] = []) { }

    toByteArray() : number[] {
        let ret: number[] = []

        for(let op of this.parameters) {
            ret = ret.concat(Util.convertStringToAscii(`${op}`))
            ret.push(Util.SPACE)
        }

        ret = ret.concat(Util.convertStringToAscii(this.name))

        ret.push(Util.LF)

        return ret
    }
}

export class MarkedContent extends Operator {
    constructor() {
        super("BMC")
    }
}

export class TextObject extends Operator {
    constructor() {
        super("BT")
    }
}
