import { Util, PDFVersion } from './util';
import { ObjectUtil } from './object-util'
import { DocumentHistory, ObjectLookupTable, XRef } from './document-history';

/**
 * Note that this parser does not parses the PDF file completely. It lookups those
 * parts that are important for the creation of annotations. For more information
 * please read the README.
 * */

export interface Color {
    r: number
    g: number
    b: number
}

export interface Border {
    horizontal_corner_radius: number
    vertical_corner_radius: number
    border_width: number
    dash_patter?: number[]
}

/**
 * References in PDF documens are  of the form
 * <obj_id> <generation> R
 *
 * This holds such a reference
 * */
export interface ReferencePointer {
    obj: number
    generation: number
    reused?: boolean | undefined
}

export class Annotation {
    page: number = -1// the target page of the annotation
    type: string = ""// the sub type of the array (Text, Highlight, ...)
    object_id: ReferencePointer | null = null// an unused object id
    id: string = ""// unique annation identifier
    rect: number[] = []// the location of the annotation
    author: string = ""// the author of the annotation
    pageReference: Page | null = null// The reference to the page object to which the annotation is added
    updateDate: string = ""// The date when the annotation was created or updated
    contents?: string // Text that shall be displayed for the annotation
    annotation_flag?: number // See PDF spcecification 'Annotation Flag'
    appearance_dictionary?: any // control the appearance of the annotation
    appearance_state?: any // change the appearance according to states
    border?: Border | null = null// define the border
    color?: Color | null = null// the color set
    opacity?: number // the opacity value (CA called in the PDF spec)
    richtext?: string // rich text string displayed in the popup window when the annotation is opened
    initiallyOpen?: boolean // flag to describe whether the annotation shall initially be open
    iconName?: string // name of the used icon
    annotationState?: string // the state of the annotation
    stateModel?: string
    defaultAppearance?: string // default appearance string
    textAlignment?: string // left-justified, centered, right-justified
    richTextString?: string // generates the appearance of the annotation
    calloutLine?: number[] // call out line
    intent?: string // a string describing the intent: FreeText, FreeTextCallout, FreeTextTypeWriter
    borderEffect?: any
    rd?: any // ?
    borderStyle?: any // border style
    lineEnding?: string // the line ending type of the callout line
    stampType?: string // the name of the used stamp type. Can be: [Approved, Experimental, NotApproved, AsIs, Expired, NotForPublicRelease, Confidential, Final, Sold, Departmental, ForComment, TopSecret, Draft, ForPublicRelease]
    caretSymbol?: string // Can be P to use a paragraph symbol for the caret or None
    quadPoints?: number[] // specifies how the annotation goes arround the text
    inkList?: number[][]
    border_style?: any
    color_space?: number[]
    border_effect?: any
    vertices?: number[]
    line_ending?: string[]
    interior_color?: number[]
    measure?: any
    is_deleted?: boolean


    constructor(private data: Uint8Array = new Uint8Array([])) {
        this.data = new Uint8Array(data)
    }

    /**
     * Extract the annotation object (partially)
     * */
    extract(xref: XRef, page: Page, objectLookupTable: ObjectLookupTable) {
        let annot_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable)

        this.object_id = annot_obj.id

        annot_obj = annot_obj.value

        this.type = annot_obj["/Type"]
        this.rect = annot_obj["/Rect"]
        this.pageReference = page
        this.updateDate = annot_obj["/M"]
        this.border = annot_obj["/Border"]
        this.color = annot_obj["/C"]
        this.author = annot_obj["/T"]
        this.author = annot_obj["/NM"]
        this.contents = annot_obj["/Contents"]
        this.quadPoints = annot_obj["/Quadpoints"]
        this.inkList = annot_obj["/Inklist"]
    }
}

/**
 * Represents the Catalog object of the PDF document
 * */
export class CatalogObject {
    /**
     * Extracts the data representing the object.
     * */
    constructor(private data: Uint8Array, private xref: XRef, private objectLookupTable: ObjectLookupTable) {
        this.data = new Uint8Array(data)

        let page_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable).value

        if (page_obj["/Type"] !== "/Catalog")
            throw Error(`Invalid catalog object at position ${xref.pointer}`)

        this.pagesObjectId = page_obj["/Pages"]

    }

    private pagesObjectId: ReferencePointer = { obj: -1, generation: -1 }

    getPagesObjectId(): ReferencePointer {
        return this.pagesObjectId
    }
}

/**
 * Represents the PageTree object of the PDF document
 * This is the object with /Type /Pages
 * */
export class PageTree {

    private pageCount: number = -1

    private pageReferences: ReferencePointer[] = []

    constructor(private data: Uint8Array, private objectLookupTable: ObjectLookupTable) {
        this.data = new Uint8Array(data)
    }

    /**
     * Reads the provided reference and return true, if the object type is /Page
     * */
    isPage(reference: ReferencePointer): boolean {
        let xref = this.objectLookupTable[reference.obj]

        if (xref.generation !== reference.generation)
            throw Error("Page object out of date")

        let ptr = xref.pointer

        ptr = Util.locateSequence(Util.ENDOBJ, this.data, ptr, true)

        let _data = this.data.slice(xref.pointer, ptr)

        return (-1 !== Util.locateSequence(Util.PAGE, _data, 0, true))
    }

    /**
     * Extracts the kids references recursively.
     * For every kid it checks if the referenced object type is:
     * - a /Pages object then it recursively lookups its children
     * - a /Page object then it adds the references
     * */
    extractPageReferences(references: ReferencePointer[]) {

        for (let reference of references) {
            if (this.isPage(reference)) {
                this.pageReferences.push(reference)
            } else { // handle array -- recursively call the function with the reference array
                let xref = this.objectLookupTable[reference.obj]

                if (xref.generation !== reference.generation)
                    throw Error("Page object out of date")

                let kid_page_obj = ObjectUtil.extractObject(this.data, xref, this.objectLookupTable).value

                this.extractPageReferences(kid_page_obj["/Kids"])
            }
        }
    }

    /**
     * Extract the object data at the given pointer
     * */
    extract(xref: XRef, objectLookupTable: ObjectLookupTable) {
        let page_tree_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable).value
        this.pageCount = page_tree_obj["/Count"]

        if (!page_tree_obj["/Kids"])
            throw Error(`Could not find index of /Kids in /Pages object`)

        let refs = page_tree_obj["/Kids"]

        this.pageReferences = []

        this.extractPageReferences(refs)
    }

    /**
     * Returns the number of pages the page tree comprises
     * */
    getPageCount(): number {
        return this.pageCount
    }

    /**
     * Returns the reference to the page objects
     * */
    getPageReferences(): ReferencePointer[] {
        return this.pageReferences
    }
}

/**
 * Represents a page object in the PDF document
 * */
export class Page {
    public object_id: ReferencePointer | undefined // The object id and generation of the object

    public annots: ReferencePointer[] = []

    public hasAnnotsField: boolean = false

    public annotsPointer: ReferencePointer | undefined

    constructor(private data: Uint8Array, private documentHistory: DocumentHistory) {
        this.data = new Uint8Array(data)
    }

    /**
     * Extracts the references in the linked annotations array
     * */
    extractAnnotationArray() {
        let obj_table = this.documentHistory.createObjectLookupTable()

        if (!this.annotsPointer)
            throw Error("Annotations pointer not set")

        let ref_annot_table = obj_table[this.annotsPointer.obj]

        if (ref_annot_table.generation !== this.annotsPointer.generation)
            throw Error("Reference annotation table out of date")

        let annotations_obj = ObjectUtil.extractObject(this.data, ref_annot_table, obj_table)

        this.annots = annotations_obj.value
    }

    /**
     * Extracts the page object starting at position ptr
     * */
    extract(xref: XRef, objectLookupTable: ObjectLookupTable) {

        let page_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable)

        this.object_id = page_obj.id

        let annots = page_obj.value["/Annots"]

        if (annots) {
            this.hasAnnotsField = true

            if (Array.isArray(annots)) {
                this.annots = annots
            } else {
                this.annotsPointer = annots

                this.extractAnnotationArray()
            }
        }
    }
}

/**
 * Parses the relevant parts of the PDF document and provides functionality to extract the necessary information for
 * adding annotations
 * */
export class PDFDocumentParser {

    private version: PDFVersion | undefined = undefined

    public documentHistory: DocumentHistory = new DocumentHistory(new Uint8Array([]))

    private catalogObject: CatalogObject | undefined = undefined

    private pageTree: PageTree | undefined = undefined

    constructor(private data: Uint8Array) {
        this.data = new Uint8Array(data)

        this.documentHistory = new DocumentHistory(this.data)
        this.documentHistory.extractDocumentHistory()
    }

    /**
     * Returns the major and minor version of the pdf document
     * */
    getPDFVersion(): PDFVersion {
        if (this.version)
            return this.version

        this.version = Util.extractVersion(this.data, 0)

        return this.version
    }

    /**
     * Returns a free object id. It first checks wether there can be an freed object id reused. If that is not the case
     * it creates a new one
     * */
    getFreeObjectId(): ReferencePointer {
        return this.documentHistory.getFreeObjectId()
    }

    /**
     * Returns the catalog object of the PDF file
     * */
    getCatalog(): CatalogObject {
        let recent_update = this.documentHistory.getRecentUpdate()
        if (recent_update.root) {
            let root_obj = recent_update.root
            console.log(`fetch catalog from : ${JSON.stringify(root_obj)}`)

            let obj_table = this.documentHistory.createObjectLookupTable()

            return new CatalogObject(this.data, obj_table[root_obj.obj], obj_table)
        } else { // If we do not know the catalogue object we need to look it up
            // In cross reference stream objects no /ROOT field is required, however often it is provided anyway
            // otherwise run this routine, but buffer the catalog object
            if (this.catalogObject)
                return this.catalogObject

            throw Error("Does not work for compressed data")

            //let obj_table = this.documentHistory.createObjectLookupTable()

            //for (let i = 1; i < recent_update.size; ++i) {
            //    let _type = Util.extractField(this.data, Util._TYPE, obj_table[i].pointer)

            //    if (Util.areArraysEqual(_type, Util.CATALOG)) {
            //        this.catalogObject = new CatalogObject(this.data, obj_table[i])

            //        if (this.catalogObject)
            //            return this.catalogObject
            //    }
            //}
        }

        throw Error("Could not identify catalog object")
    }

    /**
     * Returns the latest version of the page tree object of the document
     * */
    getPageTree(): PageTree {
        if (this.pageTree)
            return this.pageTree
        let obj_table: ObjectLookupTable = this.documentHistory.createObjectLookupTable()

        let catalog_object = this.getCatalog()

        let pages_id = catalog_object.getPagesObjectId()
        let pages_ref = obj_table[pages_id.obj]

        if (pages_ref.generation !== pages_id.generation)
            throw Error("Pages object out of date")

        let pageTree = new PageTree(this.data, obj_table)
        pageTree.extract(pages_ref, obj_table)

        this.pageTree = pageTree

        return pageTree
    }

    /**
     * Returns the latest version of the page with the given pageNumber
     * */
    getPage(pageNumber: number): Page {
        let pageTree = this.getPageTree()
        let pageId = pageTree.getPageReferences()[pageNumber]

        let obj_table = this.documentHistory.createObjectLookupTable()

        if (obj_table[pageId.obj].generation !== pageId.generation)
            throw Error("Page object out of date")

        let obj_ptr = obj_table[pageId.obj]

        let page = new Page(this.data, this.documentHistory)
        page.extract(obj_ptr, obj_table)

        return page
    }

    /**
     * Returns the annotations that exist in the document
     * */
    extractAnnotations(): Annotation[][] {
        let annots: Annotation[][] = []
        let pt: PageTree = this.getPageTree()
        let obj_table = this.documentHistory.createObjectLookupTable()

        let pageCount: number = pt.getPageCount()

        for (let i = 0; i < pageCount; ++i) {
            let page: Page = this.getPage(i)

            let annotationReferences: ReferencePointer[] = page.annots

            let pageAnnots: Annotation[] = []

            for (let refPtr of annotationReferences) {
                let a = new Annotation(this.data)
                a.extract(obj_table[refPtr.obj], page, obj_table)
                a.page = i
                pageAnnots.push(a)
            }
            annots.push(pageAnnots)
        }

        return annots
    }

}
