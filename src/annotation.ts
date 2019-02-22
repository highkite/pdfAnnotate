import { ReferencePointer, PDFDocumentParser, Page, Annotation, Border, Color } from './parser'
import { Util } from './util'
import { Writer } from './writer'

/**
 * The annotation factory provides methods to create annotations. Those are stored temporary
 * and than encoded into PDF code when the PDF document is outputted and for instance downloaded.
 * That
 * */
export class AnnotationFactory {
    private annotations: Annotation[] = []

    private parser: PDFDocumentParser

    constructor(private data: Int8Array) {
        this.data = data
        this.parser = new PDFDocumentParser(this.data)
    }

    /**
     * Returns the number of annotations that will be added to the PDF document
     * */
    getAnnotationCount(): number {
        return this.annotations.length
    }

    /**
     * Load a PDF file referenced by the given 'path'
     * */
    public static loadFile(path: string): Promise<AnnotationFactory> {
        return new Promise<AnnotationFactory>((resolve) => {
            if (typeof window !== 'undefined') { // browser environment
                fetch(path).then((r) => r.blob()).then((data) => {
                    let reader: any = new FileReader()

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
    private generateUniqueIdentifier() {
        return "(pdfAnnotate-" + Util.convertDateToPDFDate(new Date()).slice(3, 17) + "-" + this.annotations.length + ")"
    }

    /**
     * Generates a default border
     * */
    private createDefaultBorder(): Border {
        return {
            vertical_corner_radius: 0,
            horizontal_corner_radius: 0,
            border_width: 1
        }
    }

    /**
     * Writes the made annotations into a bytestream
     * */
    write(): Int8Array {
        if (this.annotations.length === 0)
            return this.data

        let writer: Writer = new Writer(this.data, this.annotations, this.parser)

        return writer.write()
    }

    /**
     * Checks the 'rect' parameter, whether all the entries are of type number and if the the number of entries is correct
     * */
    private checkRect(nr: number, rect: number[]) {
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
    createBaseAnnotation(page: number, rect: number[], contents: string, author: string): Annotation {
        let annot: Annotation = new Annotation()
        annot.type = "/Annot",
            annot.page = page,
            annot.object_id = this.parser.getFreeObjectId(),
            annot.id = this.generateUniqueIdentifier(),
            annot.rect = rect,
            annot.author = author,
            annot.pageReference = this.parser.getPage(page),
            annot.updateDate = Util.convertDateToPDFDate(new Date()),
            annot.contents = contents,
            annot.border = this.createDefaultBorder()

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
    createTextAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }) {
        if (!contents || "" === contents)
            throw Error("No content provided")

        if (!author || "" === author)
            throw Error("No author provided")

        this.checkRect(4, rect)

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color

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
    createTextMarkupAnnotation(page: number, rect: number[], contents: string, author: string, subtype: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []): Annotation {

        if (0 === quadPoints.length)
            quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]]
        else {
            if (quadPoints.length % 8 !== 0)
                throw Error(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`)
        }

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            quadPoints: quadPoints
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
    createHighlightAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []) {
        this.checkRect(4, rect)
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Highlight", color, quadPoints)

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
    createUnderlineAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []) {
        this.checkRect(4, rect)
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Underline", color, quadPoints)

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
    createSquigglyAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []) {
        this.checkRect(4, rect)
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Squiggly", color, quadPoints)

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
    createStrikeOutAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []) {
        this.checkRect(4, rect)
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/StrikeOut", color, quadPoints)

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
    createFreeTextAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect)
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author), {
            textAlignment: "right-justified",
            defaultAppearance: "/Invalid_font 9 Tf"
        })

        annot.type = "/FreeText"

        this.annotations.push(annot)
    }

    createLineAnnotation() {
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
    createSquareCircleAnnotation(page: number, rect: number[], contents: string, author: string, subtype: string, color: Color = { r: 1, g: 1, b: 0 }): Annotation {

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color
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
    createSquareAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect)
        let annot: Annotation = this.createSquareCircleAnnotation(page, rect, contents, author, "/Square", color)

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
    createCircleAnnotation(page: number, rect: number[], contents: string, author: string, color: Color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect)
        let annot: Annotation = this.createSquareCircleAnnotation(page, rect, contents, author, "/Circle", color)

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
    createPolygonPolyLineAnnotation(page: number, rect: number[], contents: string, author: string, vertices: number[], subtype: string, color: Color = { r: 1, g: 1, b: 0 }): Annotation {

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            vertices: vertices
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
    createPolygonAnnotation(page: number, rect: number[], contents: string, author: string, vertices: number[], color: Color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect)
        let annot: Annotation = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/Polygon", color)

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
    createPolyLineAnnotation(page: number, rect: number[], contents: string, author: string, vertices: number[], color: Color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect)
        let annot: Annotation = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/PolyLine", color)

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
    createStampAnnotation(page: number, contents: string, author: string, stampType: string = "Draft", color: Color = { r: 1, g: 1, b: 0 }) {
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, [50, 50, 80, 80], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            stampType: stampType
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
    createCaretAnnotation(page: number, contents: string, author: string, caretSymbol: string = "P", color: Color = { r: 1, g: 1, b: 0 }) {
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page, [], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            caretSymbol: caretSymbol
        })

        annot.type = "/Caret"

        this.annotations.push(annot)
    }

    /**
     * Returns a promise with the resul of all annotations that are part of the document. This will
     * comprise those that are already exists and those that were created using this library
     * */
    getAnnotations(): Promise<Annotation[][]> {
        return new Promise((resolve) => {
            let existingAnnots = this.parser.extractAnnotations()
            for (let newAnnot of this.annotations) {
                existingAnnots[newAnnot.page].push(newAnnot)
            }
            resolve(existingAnnots)
        })
    }

    createInkAnnotation() {
        throw Error("No yet implemented")
    }

    createPopupAnnotation() {
        throw Error("No yet implemented")
    }

    /**
     * Downloads the extended PDF document
     * */
    download(fileName: string = "output.pdf") {
        let a: any = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        let extended_pdf = this.write()
        let blob = new Blob([extended_pdf], { type: "application/pdf" })
        let url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = fileName
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url);
    }
}
