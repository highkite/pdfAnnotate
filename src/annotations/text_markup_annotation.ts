import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { ErrorList, InvalidRectError, InvalidAnnotationTypeError, InvalidQuadPointError } from './annotation_errors';

export interface TextMarkupAnnotation extends MarkupAnnotation {
    quadPoints: number[] // specifies how the annotation goes arround the text
}

export class TextMarkupAnnotationObj extends MarkupAnnotationObj implements TextMarkupAnnotation {
    quadPoints: number[] = []

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (errorList.length === 1 && errorList[0] instanceof InvalidRectError) {
            if(this.quadPoints && this.quadPoints.length > 0) {
                this.rect = this.extractRectFromQuadPoints(this.quadPoints)
                errorList = this.checkRect(4, this.rect)
            }
        }

        if (!this.quadPoints || this.quadPoints.length === 0) {
            let rect = this.rect
            this.quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]]
        }


        errorList = errorList.concat(this.checkQuadPoints(this.quadPoints))

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }

    /**
     * Extracts the rectangular hull from a quadPoint definition
     * */
    private extractRectFromQuadPoints(quadPoints: number[]): number[] {
        let x_values = quadPoints.filter((element, index) => index % 2 === 0)
        let y_values = quadPoints.filter((element, index) => index % 2 !== 0)

        return [Math.min(...x_values), Math.min(...y_values), Math.max(...x_values), Math.max(...y_values)]
    }

    /**
     * Checks the 'quadPoints' parameter
     * */
    private checkQuadPoints(quadPoints: number[]) : ErrorList {
        let errorList : ErrorList = []
        if (quadPoints.length % 8 !== 0)
            errorList.push(new InvalidQuadPointError(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`))

        quadPoints.forEach((a) => {
            if ('number' !== typeof a)
                errorList.push(new InvalidQuadPointError("Quadpoint " + quadPoints + " has invalid entry: " + a))
        })

        return errorList
    }
}

export class HighlightAnnotationObj extends TextMarkupAnnotationObj {

    constructor() {
        super()
        this.type = "/Highlight"
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Highlight") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}
