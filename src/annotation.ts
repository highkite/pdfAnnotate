import { ReferencePointer, PDFDocumentParser, Page } from './parser'
import { Util } from './util'
import { Writer } from './writer'

export interface Color {
        r : number
        g : number
        b : number
}

export interface Border {
        horizontal_corner_radius : number
        vertical_corner_radius : number
        border_width : number
        dash_patter? : number[]
}

export interface Annotation {
        page : number // the target page of the annotation
        type : string // the sub type of the array (Text, Highlight, ...)
        object_id : ReferencePointer // an unused object id
        id : string // unique annation identifier
        rect : number[] // the location of the annotation
        author : string // the author of the annotation
        pageReference : Page // The reference to the page object to which the annotation is added
        updateDate : string // The date when the annotation was created or updated
        contents? : string // Text that shall be displayed for the annotation
        annotation_flag? : number // See PDF spcecification 'Annotation Flag'
        appearance_dictionary? : any // control the appearance of the annotation
        appearance_state? : any // change the appearance according to states
        border? : Border // define the border
        color? : Color // the color set

}

export interface MarkupAnnotation extends Annotation {
        opacity? : number // the opacity value (CA called in the PDF spec)
        richtext? : string // rich text string displayed in the popup window when the annotation is opened
}

export interface TextAnnotation extends MarkupAnnotation {
        initiallyOpen? : boolean // flag to describe whether the annotation shall initially be open
        iconName? : string // name of the used icon
        annotationState? : string // the state of the annotation
        stateModel? : string
}

export interface FreeTextAnnotation extends MarkupAnnotation {
        defaultAppearance? : string // default appearance string
        textAlignment? : string // left-justified, centered, right-justified
        richTextString? : string // generates the appearance of the annotation
        calloutLine? : number[] // call out line
        intent? : string // a string describing the intent: FreeText, FreeTextCallout, FreeTextTypeWriter
        borderEffect? : any
        rd? : any // ?
        borderStyle? : any // border style
        lineEnding? : string // the line ending type of the callout line
}

export interface PopupAnnotation extends Annotation {
}

export interface LineAnnotation extends MarkupAnnotation {
}

export interface StampAnnotation extends MarkupAnnotation {
        stampType : string // the name of the used stamp type. Can be: [Approved, Experimental, NotApproved, AsIs, Expired, NotForPublicRelease, Confidential, Final, Sold, Departmental, ForComment, TopSecret, Draft, ForPublicRelease]
}

export interface CaretAnnotation extends MarkupAnnotation {
        caretSymbol : string // Can be P to use a paragraph symbol for the caret or None
}

export interface InkAnnotation extends MarkupAnnotation {
}

export interface TextMarkupAnnotation extends MarkupAnnotation {
        QuadPoints : number[] // specifies how the annotation goes arround the text
}

export interface HighlightAnnotation extends TextMarkupAnnotation { }
export interface UnderlineAnnotation extends TextMarkupAnnotation { }
export interface SquigglyAnnotation extends TextMarkupAnnotation { }
export interface StrikeOutAnnotation extends TextMarkupAnnotation { }

export interface SquareCircleAnnotation extends MarkupAnnotation { // subtype square or circle
        border_style? : any
        color_space? : number[]
        border_effect? : any
        rd? : number[]
}

export interface SquareAnnotation extends SquareCircleAnnotation { }
export interface CircleAnnotation extends SquareCircleAnnotation { }

export interface PolygonPolyLineAnnotation extends MarkupAnnotation { // subtype polygon or polyline
        vertices : number[]
        line_ending? : string[]
        border_style? : any
        interior_color? : number[]
        border_effect? : any
        intent? : string
        measure? : any
}

/**
 * The annotation factory provides methods to create annotations. Those are stored temporary
 * and than encoded into PDF code when the PDF document is outputted and for instance downloaded.
 * That
 * */
export class AnnotationFactory {
        private annotations : Annotation[] = []

        private parser : PDFDocumentParser

        constructor (private data : Int8Array) {
                this.data = data
                this.parser = new PDFDocumentParser(this.data)
        }

        /**
         * Returns the number of annotations that will be added to the PDF document
         * */
        getAnnotationCount () : number {
                return this.annotations.length
        }

        /**
         * Load a PDF file referenced by the given 'path'
         * */
        public static loadFile( path : string ) : Promise<AnnotationFactory> {
                return new Promise<AnnotationFactory>( (resolve) => {
                        if (typeof window !== 'undefined') { // browser environment
                                fetch(path).then( (r) => r.blob() ).then( (data) => {
                                        let reader : any = new FileReader()

                                        reader.onload = () => {
                                                resolve(new AnnotationFactory(reader.result))
                                        }

                                        reader.readAsArrayBuffer(data)
                                })
                        } else if (typeof process === 'object') { // node environment
                                throw Error("Not yet implemented")
                        } else {
                                throw Error("Unsupported environment")
                        }
                })
        }

        /**
         * Generates a unique identifier necessary for creating the annotation
         * */
        private generateUniqueIdentifier () {
                return "(pdfAnnotate-" + Util.convertDateToPDFDate(new Date()).slice(3,17) + "-" + this.annotations.length + ")"
        }

        /**
         * Generates a default border
         * */
        private createDefaultBorder () : Border {
                return {
                        vertical_corner_radius : 0,
                        horizontal_corner_radius : 0,
                        border_width : 1
                }
        }

        /**
         * Writes the made annotations into a bytestream
         * */
        write () : Int8Array {
                if (this.annotations.length === 0)
                        return this.data

                let writer : Writer = new Writer(this.data, this.annotations, this.parser)

                return writer.write()
        }

        /**
         * Checks the 'rect' parameter, whether all the entries are of type number and if the the number of entries is correct
         * */
        private checkRect (nr : number, rect : number[]) {
                if (rect.length !== nr)
                        throw Error("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries")

                rect.forEach((a) => {
                        if ('number' !== typeof a)
                                throw Error("Rect " + rect + " has invalid entry: " + a)
                })
        }

        /**
         * Creates a base annotation that mean the raw object of annotation or those parts that are all existing
         * and equally set in all types of annotations
         * */
        createBaseAnnotation (page : number, rect : number[], contents : string, author : string) : Annotation {
                let annot : Annotation = {
                        type : "/Annot",
                        page : page,
                        object_id : this.parser.getFreeObjectId(),
                        id : this.generateUniqueIdentifier(),
                        rect : rect,
                        author : author,
                        pageReference : this.parser.getPage(page),
                        updateDate : Util.convertDateToPDFDate(new Date()),
                        contents : contents,
                        border : this.createDefaultBorder()
                }

                return annot
        }

        /**
         * Creates a text annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createTextAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                if (!contents || "" === contents)
                        throw Error("No content provided")

                if (!author || "" === author)
                        throw Error("No author provided")

                this.checkRect(4, rect)

                let annot : TextAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author),{
                                opacity : 1,
                                initiallyOpen : false,
                                annotation_flag : 4,
                                color : color

                        })

                annot.type = "/Text"

                this.annotations.push(annot)
        }

        /**
         * Creates a text markup annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * subtype : the subtype of the Textmarkup annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createTextMarkupAnnotation (page : number, rect : number[], contents : string, author : string, subtype : string, color : Color = { r : 1, g : 1, b : 0}) : TextMarkupAnnotation {

                let quadPoints : number[] = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]]

                let annot : TextMarkupAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author),{
                        opacity : 1,
                        initiallyOpen : false,
                        annotation_flag : 4,
                        color : color,
                        QuadPoints : quadPoints
                })

                annot.type = subtype

                return annot
        }

        /**
         * Creates a highlight annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createHighlightAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Highlight", color)

                this.annotations.push(annot)
        }

        /**
         * Creates an underline annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createUnderlineAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Underline", color)

                this.annotations.push(annot)
        }

        /**
         * Creates a squiggle annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createSquigglyAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Squiggly", color)

                this.annotations.push(annot)
        }

        /**
         * Creates a strike out annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createStrikeOutAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/StrikeOut", color)

                this.annotations.push(annot)
        }

        /**
         * Creates a free text annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createFreeTextAnnotation (page : number, rect : number[], contents : string, author : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot : FreeTextAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author),{
                        textAlignment : "right-justified"

                })

                annot.type = "/FreeText"

                this.annotations.push(annot)
        }

        createLineAnnotation () {
                throw Error("No yet implemented")
        }

        /**
         * Creates the base annotation object of a circle and square annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createSquareCircleAnnotation (page : number, rect : number[], contents : string, author : string, subtype : string, color : Color = { r : 1, g : 1, b : 0}) : SquareCircleAnnotation {

                let annot : SquareCircleAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author),{
                        opacity : 1,
                        initiallyOpen : false,
                        annotation_flag : 4,
                        color : color
                })

                annot.type = subtype

                return annot
        }


        /**
         * Creates a square annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createSquareAnnotation (page : number, rect : number[], contents : string, author : string, subtype : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot : SquareAnnotation = this.createSquareCircleAnnotation(page, rect, contents, author, "/Square", color)

                this.annotations.push(annot)
        }

        /**
         * Creates a circle annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createCircleAnnotation (page : number, rect : number[], contents : string, author : string, subtype : string, color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot : SquareAnnotation = this.createSquareCircleAnnotation(page, rect, contents, author, "/Circle", color)

                this.annotations.push(annot)
        }

        /**
         * Creates the base object of a polygon or polyline annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * vertices : the vertices defining the arrangement of the object
         * subtyp: Polygon or PolyLine
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createPolygonPolyLineAnnotation (page : number, rect : number[], contents : string, author : string, vertices : number[], subtype : string, color : Color = { r : 1, g : 1, b : 0}) : PolygonPolyLineAnnotation {

                let annot : PolygonPolyLineAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author),{
                        opacity : 1,
                        initiallyOpen : false,
                        annotation_flag : 4,
                        color : color,
                        vertices : vertices
                })

                annot.type = subtype

                return annot
        }

        /**
         * Creates a polygon annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * vertices : the vertices defining the arrangement of the object
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createPolygonAnnotation (page : number, rect : number[], contents : string, author : string, vertices : number[], color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot : PolygonPolyLineAnnotation = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/Polygon", color)

                this.annotations.push(annot)
        }


        /**
         * Creates a polyline annotation
         * page : the number of the PDF document page, where the annotation must be attached
         * rect : the position of the annotation on the page
         * contents : the content of the annotation
         * author : the author of the annotation
         * vertices : the vertices defining the arrangement of the object
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createPolyLineAnnotation (page : number, rect : number[], contents : string, author : string, vertices : number[], color : Color = { r : 1, g : 1, b : 0}) {
                this.checkRect(4, rect)
                let annot : PolygonPolyLineAnnotation = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/PolyLine", color)

                this.annotations.push(annot)
        }

        /**
         * Creates a stamp annotation. There exists a number of predifined stamps that can be attached to PDF documents.
         * page : the number of the PDF document page, where the annotation must be attached
         * contents : the content of the annotation
         * author : the author of the annotation
         * stampType : the name of the used stamp type. Can be: [Approved, Experimental, NotApproved, AsIs, Expired, NotForPublicRelease, Confidential, Final, Sold, Departmental, ForComment, TopSecret, Draft, ForPublicRelease]
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createStampAnnotation (page : number, contents : string, author : string, stampType : string = "Draft", color : Color = { r : 1, g : 1, b : 0}) {
                let annot : StampAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, [50, 50, 80, 80], contents, author),{
                        opacity : 1,
                        initiallyOpen : false,
                        annotation_flag : 4,
                        color : color,
                        stampType : stampType
                })

                annot.type = "/Stamp"

                this.annotations.push(annot)
        }

        /**
         * Creates a visual symbol that indcates the existance of text edits.
         * page : the number of the PDF document page, where the annotation must be attached
         * contents : the content of the annotation
         * author : the author of the annotation
         * caretSymbol : None or P, with P for using the paragraph symbol as caret
         * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
         * */
        createCaretAnnotation (page : number, contents : string, author : string, caretSymbol : string = "P", color : Color = { r : 1, g : 1, b : 0}) {
                let annot : CaretAnnotation = (<any>Object).assign(this.createBaseAnnotation(page, [], contents, author),{
                        opacity : 1,
                        initiallyOpen : false,
                        annotation_flag : 4,
                        color : color,
                        caretSymbol : caretSymbol
                })

                annot.type = "/Caret"

                this.annotations.push(annot)
        }

        createInkAnnotation () {
                throw Error("No yet implemented")
        }

        createPopupAnnotation () {
                throw Error("No yet implemented")
        }

        /**
         * Downloads the extended PDF document
         * */
        download (fileName : string = "output.pdf") {
                let a : any = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";

                let extended_pdf = this.write()
                let blob = new Blob([extended_pdf], {type: "application/pdf"})
                let url = window.URL.createObjectURL(blob)
                a.href = url
                a.download = fileName
                a.click()
                a.remove()
                window.URL.revokeObjectURL(url);
        }
}
