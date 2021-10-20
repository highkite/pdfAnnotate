import { ReferencePointer } from './parser';

export type ContentStream = Operator

export class Operator {
    operators: Operator[] = []
    constructor(public name : string = "", public parameters : (number | string | ReferencePointer)[] = []) { }
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
