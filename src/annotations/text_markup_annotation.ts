import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';

export interface TextMarkupAnnotation extends MarkupAnnotation {
    quadPoints: number[] // specifies how the annotation goes arround the text
}

export class TextMarkupAnnotationObj extends MarkupAnnotationObj implements TextMarkupAnnotation {
    quadPoints: number[] = []
}

export class HighlightAnnotationObj extends TextMarkupAnnotationObj {

    constructor() {
        super()
        this.type = "/Highlight"
    }
}
