import { ReferencePointer, PDFDocumentParser, Page, Annotation } from './parser'
import { Border, Color, BaseAnnotation } from './annotations/annotation_types';
import { TextAnnotationObj } from './annotations/text_annotation';
import { HighlightAnnotationObj } from './annotations/text_markup_annotation';
import { Util } from './util'
import { Writer } from './writer'

export class ParameterParser {
    /**
     * Parses and checks the parameter. This is for backward compatibility and to support arbitrary annotation parameters
     * */
    static parseParameters(values : any[]) {
        if (values.length === 0) {
            throw Error("No parameters provided")
        }

        let i = 0
        if (typeof values[i] === 'number') {
            let ret_val : any = {}
            ret_val.page = values[i++]
            ret_val.rect = values[i++]

            ret_val.contents = values[i++]
            if(typeof ret_val.contents !== 'string') {
                throw Error("Invalid contents parameter")
            }

            ret_val.author = values[i++]
            if(typeof ret_val.author !== 'string') {
                throw Error("Invalid author parameter")
            }

            if (i >= values.length) return ret_val

            if ("r" in values[i] && "g" in values[i] && "b" in values[i]) {
                ret_val.color = values[i++]
            } else if (Array.isArray(values[i]) && values[i].length > 0 && typeof values[i][0] === 'number') {
                ret_val.vertices = values[i++]
            } else if (Array.isArray(values[i]) && values[i].length > 0 && Array.isArray(values[i][0])) {
                ret_val.inkList = values[i++]
            } else {
                throw Error("Invalid parameter provided - is neither color, nor quadpoints array or an inklist")
            }

            if (i >= values.length) return ret_val

            if ("r" in values[i] && "g" in values[i] && "b" in values[i]) {
                if (ret_val.color) {
                    ret_val.fill = values[i++]
                } else {
                    ret_val.color = values[i++]
                }
            } else if (Array.isArray(values[i]) && values[i].length > 0 && typeof values[i][0] === 'number') {
                ret_val.quadPoints = values[i++]
            } else if (typeof values[i] === 'object'){
                ret_val.config = true
                ret_val = (<any>Object).assign(ret_val, values[i++])
            } else {
                throw Error("Invalid parameter provided")
            }

            if (i >= values.length) return ret_val

            if (!ret_val.config && typeof values[i] === 'object') {
                ret_val = (<any>Object).assign(ret_val, values[i++])
            } else {
                throw Error("Invalid configuration provided")
            }

            return ret_val
        } else if (typeof values[i] === 'object') {
            return values[0]
        } else {
            throw Error("Invalid configuration object")
        }
    }
}

/**
 * The annotation factory provides methods to create annotations. Those are stored temporarily
 * and than encoded into PDF code when the PDF document is written.
 * */
export class AnnotationFactory {
    private annotations: Annotation[] = []

    private toDelete: Annotation[] = []

    private parser: PDFDocumentParser

    constructor(private data: Uint8Array, private userPassword: string = "", private ownerPassword : string = "") {
        this.data = data
        this.parser = new PDFDocumentParser(this.data, this.userPassword, this.ownerPassword)
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
    public static loadFile(path: string, userPassword: string = "", ownerPassword : string = ""): Promise<AnnotationFactory> {
        return new Promise<AnnotationFactory>((resolve) => {
            if (typeof window !== 'undefined') { // browser environment
                fetch(path).then((r) => r.blob()).then((data) => {
                    let reader: any = new FileReader()

                    reader.onload = () => {
                        resolve(new AnnotationFactory(reader.result, userPassword, ownerPassword))
                    }

                    reader.readAsArrayBuffer(data)
                })
            } else if (typeof process === 'object') { // node environment
                let fs = require('fs')
                let data = fs.readFileSync(path)

                resolve(new AnnotationFactory(data, userPassword, ownerPassword))
            } else {
                throw Error("Unsupported environment")
            }
        })
    }

    /**
     * Generates a unique identifier necessary for creating the annotation
     * */
    private generateUniqueIdentifier() {
        return "pdfAnnotate-" + Util.convertDateToPDFDate(new Date()).slice(3, 17) + "-" + this.annotations.length
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
     * Writes the created annotations into a bytestream
     * */
    write(): Uint8Array {
        if (this.annotations.length === 0 && this.toDelete.length === 0)
            return this.data

        let writer: Writer = new Writer(this.data, this.annotations, this.toDelete, this.parser)

        return writer.write()
    }

    /**
     * Checks the 'rect' parameter, whether all the entries are of type number and if the the number of entries is correct
     * */
    private checkRect(nr: number, rect: number[]) {
        if (!Array.isArray(rect)) {
            throw Error("invalid rect parameter")
        }

        if (rect.length !== nr)
            throw Error("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries")

        rect.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Rect " + rect + " has invalid entry: " + a)
        })
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
    private checkQuadPoints(quadPoints: number[]) {
        if (quadPoints.length % 8 !== 0)
            throw Error(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`)

        quadPoints.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Quadpoint " + quadPoints + " has invalid entry: " + a)
        })
    }

    /**
     * Creates a base annotation that means the raw object of annotation or those parts that exist
     * in equal form in all types of annotations
     * */
    createBaseAnnotation(page : number): BaseAnnotation {
        if (page < 0) {
            throw Error(`Invalid page number: ${page}`)
        }

        let annot: BaseAnnotation = {
            object_id: this.parser.getFreeObjectId(),
            id: this.generateUniqueIdentifier(),
            pageReference: this.parser.getPage(page),
            updateDate: Util.convertDateToPDFDate(new Date()),
            border: this.createDefaultBorder(),
            page: page, rect: []
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
     * options : dictionary containing additional configuration values, see documentation
     * */
    createTextAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)

        let annot : TextAnnotationObj = new TextAnnotationObj()
        annot = (<any>Object).assign(annot, this.createBaseAnnotation(params.page))
        annot = (<any>Object).assign(annot, params)

        annot.validate()

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
     * quadPoints : regions to mark with the highlight
     * */
    createTextMarkupAnnotation(page: number, rect: number[], contents: string = "", author: string = "", subtype: string, color: Color = { r: 1, g: 1, b: 0 }, quadPoints: number[] = []): Annotation {

        if (0 === quadPoints.length)
            quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]]
        else {
            this.checkQuadPoints(quadPoints)
        }

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page), {
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
     * quadPoints : regions to mark with the highlight
     * */
    createHighlightAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)

        let annot : HighlightAnnotationObj = new HighlightAnnotationObj()
        annot = (<any>Object).assign(annot, this.createBaseAnnotation(params.page))
        annot = (<any>Object).assign(annot, params)

        annot.validate()

        this.annotations.push(annot)
        //this.checkQuadPoints(params.quadPoints)

        //if (params.rect.length === 0 && params.quadPoints.length > 0) {
        //    params.rect = this.extractRectFromQuadPoints(params.quadPoints)
        //}
        //this.checkRect(4, params.rect)

        //let annot = this.createTextMarkupAnnotation(params.page, params.rect, params.contents, params.author, "/Highlight", params.color, params.quadPoints)

        //this.annotations.push(annot)
    }

    /**
     * Creates an underline annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * quadPoints : regions to mark with the highlight
     * */
    createUnderlineAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkQuadPoints(params.quadPoints)

        if (params.rect.length === 0 && params.quadPoints.length > 0) {
            params.rect = this.extractRectFromQuadPoints(params.quadPoints)
        }
        this.checkRect(4, params.rect)
        let annot = this.createTextMarkupAnnotation(params.page, params.rect, params.contents, params.author, "/Underline", params.color, params.quadPoints)

        this.annotations.push(annot)
    }

    /**
     * Creates a squiggle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * quadPoints : regions to mark with the highlight
     * */
    createSquigglyAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkQuadPoints(params.quadPoints)

        if (params.rect.length === 0 && params.quadPoints.length > 0) {
            params.rect = this.extractRectFromQuadPoints(params.quadPoints)
        }
        this.checkRect(4, params.rect)
        let annot = this.createTextMarkupAnnotation(params.page, params.rect, params.contents, params.author, "/Squiggly", params.color, params.quadPoints)

        this.annotations.push(annot)
    }

    /**
     * Creates a strike out annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * quadPoints : regions to mark with the highlight
     * */
    createStrikeOutAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkQuadPoints(params.quadPoints)

        if (params.rect.length === 0 && params.quadPoints.length > 0) {
            params.rect = this.extractRectFromQuadPoints(params.quadPoints)
        }
        this.checkRect(4, params.rect)
        let annot = this.createTextMarkupAnnotation(params.page, params.rect, params.contents, params.author, "/StrikeOut", params.color, params.quadPoints)

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
    createFreeTextAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkRect(4, params.rect)
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(params.page), {
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
     * fill : the filling color of  the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareCircleAnnotation(page: number, rect: number[], contents: string = "", author: string = "", subtype: string, color: Color = { r: 1, g: 1, b: 0 }, fill: Color = { r: 1, g: 1, b: 0 }): Annotation {

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            fill: fill
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
     * fill : the filling color of  the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkRect(4, params.rect)
        let annot: Annotation = this.createSquareCircleAnnotation(params.page, params.rect, params.contents, params.author, "/Square", params.color, params.fill)

        this.annotations.push(annot)
    }

    /**
     * Creates a circle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * fill : the filling color of  the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createCircleAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkRect(4, params.rect)
        let annot: Annotation = this.createSquareCircleAnnotation(params.page, params.rect, params.contents, params.author, "/Circle", params.color, params.fill)

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
    createPolygonPolyLineAnnotation(page: number, rect: number[], contents: string = "", author: string = "", vertices: number[], subtype: string, color: Color = { r: 1, g: 1, b: 0 }): Annotation {

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(page), {
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
    createPolygonAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkRect(4, params.rect)
        let annot: Annotation = this.createPolygonPolyLineAnnotation(params.page, params.rect, params.contents, params.author, params.vertices, "/Polygon", params.color)

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
    createPolyLineAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        this.checkRect(4, params.rect)
        let annot: Annotation = this.createPolygonPolyLineAnnotation(params.page, params.rect, params.contents, params.author, params.vertices, "/PolyLine", params.color)

        this.annotations.push(annot)
    }

    /**
     * Creates an ink annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * inkList : a list of list containing the points for drawing the lines
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createInkAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)

        if (params.inkList.length === 0)
            throw Error("InkList is empty")

        let _inkList: any = []
        if ('number' === typeof params.inkList[0]) {
            _inkList = [params.inkList]
        } else {
            _inkList = params.inkList
        }

        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(params.page), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: params.color,
            inkList: _inkList
        })

        annot.type = "/Ink"

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
    createStampAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(params.page), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: params.color,
            stampType: params.stampType
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
    createCaretAnnotation(...values : any[]) {
        let params = ParameterParser.parseParameters(values)
        let annot: Annotation = (<any>Object).assign(this.createBaseAnnotation(params.page), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: params.color,
            caretSymbol: params.caretSymbol
        })

        annot.type = "/Caret"

        this.annotations.push(annot)
    }

    /**
     * Deletes the annotation with the given id or the given reference object
     * */
    deleteAnnotation(id: any): Promise<any> {
        return new Promise((resolve) => {

            // delete if it was just created but is not in the pdf document
            for (let i = 0; i < this.annotations.length; ++i) {
                if ('string' === typeof id && this.annotations[i].id === id) {
                    this.annotations = this.annotations.slice(i, 1)
                    resolve(this.toDelete)
                    return
                } else if (id.obj && this.annotations[i].object_id && id.obj === (<any>this.annotations[i].object_id).obj && id.generation && id.generation === (<any>this.annotations[i].object_id).generation) {
                    this.annotations = this.annotations.slice(i, 1)
                    resolve(this.toDelete)
                    return
                }
            }

            this.getAnnotations().then((annots) => {
                for (let _annots of annots) {
                    for (let annot of _annots) {
                        if ('string' === typeof id && annot.id === id) {
                            this.toDelete.push(annot)
                            resolve(this.toDelete)
                            return
                        } else if (id.obj && annot.object_id && id.obj === annot.object_id.obj && id.generation && id.generation === annot.object_id.generation) {
                            this.toDelete.push(annot)
                            resolve(this.toDelete)
                            return
                        }
                    }
                }
            })

        })
    }

    /**
     * Returns a promise with all the annotations that are part of the document. This
     * comprises annotations, that are already part of the parsed document and those that were created using this library and
     * not yet appended to the document.
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

    createPopupAnnotation() {
        throw Error("No yet implemented")
    }

    /**
     * Downloads the adapted PDF document
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

    /**
     * Saves the adapted PDF document in a nodejs environment and downloads it in a browser environment.
     * */
    save(fileName: string = "output.pdf") {
        if (typeof window !== 'undefined') { // browser environment
            this.download(fileName)
        } else if (typeof process === 'object') { // node environment
            const fs = require('fs')
            let data = this.write()
            fs.writeFile(fileName, Buffer.from(new Uint8Array(data)), (err: any) => {
                if (err) {
                    throw Error(err);
                }
            })
        } else {
            throw Error("Unsupported environment")
        }
    }
}
