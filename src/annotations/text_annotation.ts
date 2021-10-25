import { MarkupAnnotation, MarkupAnnotationObj } from './annotation_types';
import { CryptoInterface } from '../parser';
import { ErrorList, InvalidAnnotationTypeError, InvalidStateError } from './annotation_errors';
import { WriterUtil } from '../writer-util';
import { Util } from '../util'
import { AppStream, XObjectObj } from '../appearance-stream';

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
        this.type_encoded = [47, 84, 101, 120, 116] // = '/Text'
        // demanded by PDF specification (p. 394 - 12.5.6.4 Text Annotations)
        this.annotationFlags = {noZoom: true, noRotate: true}
    }

    public createDefaultAppearanceStream() {
        this.appearanceStream = new AppStream(this)
        this.appearanceStream.new_object = true
        let xobj = new XObjectObj()
        xobj.bBox = [0, 0, 100, 100]
        xobj.matrix = [1, 0, 0, 1, 0, 0]
        xobj.object_id = this.factory.parser.getFreeObjectId()
        xobj.new_object = true
        xobj.addOperator("BMC", ["/Tx"])
        xobj.addOperator("q")
        xobj.addOperator("cm", [1, 0, 0, 1, 0, 0])
        xobj.addOperator("rg", [1, 0, 0])
        xobj.addOperator("RG", [0, 0, 0])
        xobj.addOperator("w", [2])
        xobj.addOperator("j", [1])
        xobj.addOperator("m", [1, 1])
        xobj.addOperator("l", [99, 1])
        xobj.addOperator("l", [99, 99])
        xobj.addOperator("l", [1, 99])
        xobj.addOperator("l", [1, 1])
        xobj.addOperator("B")


        //xobj.addOperator("BT")
        //xobj.addOperator("Tm", [1, 0, 0, 1, 0, 0])
        //xobj.addOperator("Tf", ["/F1", 18])
        //xobj.addOperator("Tj", [`(${this.richtextString})`])
        //xobj.addOperator("ET")
        xobj.addOperator("Q")
        xobj.addOperator("EMC")
        this.appearanceStream.N = xobj
    }

    convertAnnotationIcon(icon : AnnotationIcon) : number[] {
        switch(icon) {
            case AnnotationIcon.Comment:
                return [47, 67, 111, 109, 109, 101, 110, 116] // = '/Comment'
            case AnnotationIcon.Key:
                return [47, 75, 101, 121] // = '/Key'
            case AnnotationIcon.Note:
                return [47, 78, 111, 116, 101] // = '/Note'
            case AnnotationIcon.Help:
                return [47, 72, 101, 108, 112] // = '/Help'
            case AnnotationIcon.NewParagraph:
                return [47, 78, 101, 119, 80, 97, 114, 97, 103, 114, 97, 112, 104] // = '/NewParagraph'
            case AnnotationIcon.Paragraph:
                return [47, 80, 97, 114, 97, 103, 114, 97, 112, 104] // = '/Paragraph'
            case AnnotationIcon.Insert:
                return [47, 73, 110, 115, 101, 114, 116] // = '/Insert'
        }

        return []
    }

    convertState(state : AnnotationState) : number[] {
        switch(state) {
            case AnnotationState.Marked:
                return Util.convertStringToAscii("/Marked")
            case AnnotationState.Unmarked:
                return Util.convertStringToAscii("/Unmarked")
            case AnnotationState.Accepted:
                return Util.convertStringToAscii("/Accepted")
            case AnnotationState.Rejected:
                return Util.convertStringToAscii("/Rejected")
            case AnnotationState.Cancelled:
                return Util.convertStringToAscii("/Cancelled")
            case AnnotationState.Completed:
                return Util.convertStringToAscii("/Completed")
            case AnnotationState.None:
                return Util.convertStringToAscii("/None")
        }
        return []
    }

    convertStateModel(stateModel : AnnotationStateModel) : number[] {
        switch(stateModel) {
            case AnnotationStateModel.Marked:
                return Util.convertStringToAscii("/Marked")
            case AnnotationStateModel.Review:
                return Util.convertStringToAscii("/Review")
        }

        return []
    }


    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        let ret : number[] = super.writeAnnotationObject(cryptoInterface)

        if (this.open) {
            ret = ret.concat(WriterUtil.OPEN)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.TRUE)
            ret.push(WriterUtil.SPACE)
        }

        if (this.icon) {
            ret = ret.concat(WriterUtil.NAME)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.convertAnnotationIcon(this.icon))
            ret.push(WriterUtil.SPACE)
        }

        if (this.state) {
            ret = ret.concat(WriterUtil.STATE)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.convertState(this.state))
            ret.push(WriterUtil.SPACE)
        }

        if (this.stateModel) {
            ret = ret.concat(WriterUtil.STATEMODEL)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.convertStateModel(this.stateModel))
            ret.push(WriterUtil.SPACE)
        }

        return ret
    }

    public validate(enact : boolean = true) : ErrorList {
        let errorList : ErrorList = super.validate(false)

        if (this.type !== "/Text") {
            errorList.push(new InvalidAnnotationTypeError(`Invalid annotation type ${this.type}`))
        }

        if (this.state && !this.stateModel) {
            errorList.push(new InvalidStateError("You need to specify a state model, when specifying a state"))
        }

        if (this.stateModel && !this.state) {
            if (this.stateModel.valueOf() === AnnotationStateModel.Marked) {
                this.state = AnnotationState.Unmarked
            } else if (this.stateModel.valueOf() === AnnotationStateModel.Review) {
                this.state = AnnotationState.None
            } else {
                errorList.push(new InvalidStateError("Invalid state model selected"))
            }
        }

        if (this.state && this.stateModel) {
            if (this.stateModel.valueOf() === AnnotationStateModel.Marked) {
                if (this.state.valueOf() !== AnnotationState.Marked && this.state.valueOf() !== AnnotationState.Unmarked) {
                    errorList.push(new InvalidStateError("Invalid annotation state for state model 'Marked' only 'Marked' and 'Unmarked' are legal values"))
                }
            } else if (this.stateModel.valueOf() === AnnotationStateModel.Review) {
                if (this.state.valueOf() !== AnnotationState.Accepted && this.state.valueOf() !== AnnotationState.Rejected &&
                    this.state.valueOf() !== AnnotationState.Cancelled && this.state.valueOf() !== AnnotationState.Completed &&
                    this.state.valueOf() !== AnnotationState.None) {
                    errorList.push(new InvalidStateError("Invalid annotation state for state model 'Review' only 'Accepted', 'Rejected', 'Cancelled', 'Completed' and 'None' are legal values"))
                }
            } else {
                errorList.push(new InvalidStateError("Invalid state model selected"))
            }
        }

        if (enact) {
            for(let error of errorList) {
                throw error
            }
        }

        return errorList
    }
}
