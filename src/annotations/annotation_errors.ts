export class InvalidAnnotationTypeError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidAnnotationTypeError"
    }
}

export class InvalidOpacityError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidOpacityError"
    }
}

export class InvalidColorError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidColorError"
    }
}

export class ColorOutOfRangeError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "ColorOutOfRangeError"
    }
}

export class InvalidReferencePointerError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidReferencePointerError"
    }
}

export class InvalidDateError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidDateError"
    }
}

export class InvalidRectError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidRectError"
    }
}

export class InvalidIDError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidIDError"
    }
}

export class InvalidStateError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidStateError"
    }
}

export class InvalidQuadPointError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidQuadPointError"
    }
}

export class InvalidVerticesError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidVerticesError"
    }
}

export class InvalidAnnotationReference extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidAnnotationError"
    }
}

export class InvalidAppearanceStreamError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidAppearanceStreamError"
    }
}

export class InvalidFontSizeError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidFontSizeError"
    }
}

export class InvalidFontError extends Error {
    constructor(public message : string) {
        super(message)
        this.name = "InvalidFontError"
    }
}

export type ErrorList = (Error | ColorOutOfRangeError | InvalidReferencePointerError | InvalidDateError | InvalidRectError | InvalidIDError | InvalidColorError | InvalidOpacityError | InvalidAnnotationTypeError | InvalidStateError | InvalidQuadPointError | InvalidVerticesError | InvalidAnnotationReference | InvalidAppearanceStreamError | InvalidFontSizeError | InvalidFontError )[]
