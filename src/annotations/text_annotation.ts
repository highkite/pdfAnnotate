import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';

export enum AnnotationIcon {
    Comment, Key, Note, Help, NewParagraph, Paragraph, Insert
}

export enum AnnotationStateModel {
    Marked, Review
}

export enum AnnotationState {
    Marked, Unmarked, Accepted, Rejected, Cancelled, Completed, None
}

export interface TextAnnotation extends MarkupAnnotation {
    open: boolean
    icon: AnnotationIcon
    state: AnnotationState | undefined
    stateModel? : AnnotationStateModel
}

export class TextAnnotationObj extends MarkupAnnotationObj implements TextAnnotation {
    open: boolean = false
    icon: AnnotationIcon = AnnotationIcon.Note
    state: AnnotationState | undefined = undefined
    stateModel? : AnnotationStateModel

    constructor() {
        super()
        this.type = "/Text"
        // demanded by PDF specification (p. 394 - 12.5.6.4 Text Annotations)
        this.annotationFlags = {noZoom: true, noRotate: true}
    }

    public validate() : void {
        super.validate()

        if (this.type !== "/Text") {
            throw Error("Invalid text annotation type")
        }

        if (this.state && !this.stateModel) {
            throw Error("You need to specify a state model, when specifying a state")
        }

        if (this.stateModel && !this.state) {
            if (this.stateModel.valueOf() === AnnotationStateModel.Marked) {
                this.state = AnnotationState.Unmarked
            } else if (this.stateModel.valueOf() === AnnotationStateModel.Review) {
                this.state = AnnotationState.None
            } else {
                throw Error("Invalid state model selected")
            }
        }

        if (this.state && this.stateModel) {
            if (this.stateModel.valueOf() === AnnotationStateModel.Marked) {
                if (this.state.valueOf() !== AnnotationState.Marked && this.state.valueOf() !== AnnotationState.Unmarked) {
                    throw Error("Invalid annotation state for state model 'Marked' only 'Marked' and 'Unmarked' are legal values")
                }
            } else if (this.stateModel.valueOf() === AnnotationStateModel.Review) {
                if (this.state.valueOf() !== AnnotationState.Accepted && this.state.valueOf() !== AnnotationState.Rejected &&
                    this.state.valueOf() !== AnnotationState.Cancelled && this.state.valueOf() !== AnnotationState.Completed &&
                    this.state.valueOf() !== AnnotationState.None) {
                    throw Error("Invalid annotation state for state model 'Review' only 'Accepted', 'Rejected', 'Cancelled', 'Completed' and 'None' are legal values")
                }
            } else {
                throw Error("Invalid state model selected")
            }
        }
    }
}
