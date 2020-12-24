class BaseError {
    constructor() {
        Error.apply(this, arguments as any)
    }
}

BaseError.prototype = new Error()

export class InvalidAnnotationTypeError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidOpacityError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidColorError extends BaseError {
    constructor(public message : string) { super() }
}

export class ColorOutOfRangeError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidReferencePointerError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidDateError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidRectError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidIDError extends BaseError {
    constructor(public message : string) { super() }
}

export class InvalidStateError extends BaseError {
    constructor(public message : string) { super() }
}

export type ErrorList = (BaseError | Error | ColorOutOfRangeError | InvalidReferencePointerError | InvalidDateError | InvalidRectError | InvalidIDError | InvalidColorError | InvalidOpacityError | InvalidAnnotationTypeError | InvalidStateError)[]
