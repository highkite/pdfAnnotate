import { Util } from './util';
import { DocumentHistory, ObjectLookupTable } from './document-history';

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


    constructor(private data: Int8Array = new Int8Array([])) { }

    /**
     * Extract the annotation object (partially)
     * */
    extract(ptr: number) {
        // restrict the data array to the partition that actually contains the annotation data
        let obj_end_ptr: number = Util.locateSequence(Util.ENDOBJ, this.data, ptr, true)

        this.data = this.data.slice(ptr, obj_end_ptr)

        this.object_id = Util.extractObjectId(this.data, 0)

        this.type = "/" + Util.extractField(this.data, Util.SUBTYPE)
        this.rect = Util.extractField(this.data, Util.RECT)
        this.pageReference = Util.extractField(this.data, Util.P)
        this.updateDate = Util.extractField(this.data, Util.M)
        this.border = Util.extractField(this.data, Util.BORDER)
        this.color = Util.extractField(this.data, Util.C)
        this.author = Util.extractField(this.data, Util.T)
        this.id = Util.extractField(this.data, Util.NM)
        this.contents = Util.extractField(this.data, Util.CONTENTS)
        this.quadPoints = Util.extractField(this.data, Util.QUADPOINTS)
        this.inkList = Util.extractField(this.data, Util.INKLIST)
    }
}

/**
 * Represents the Catalog object of the PDF document
 * */
export class CatalogObject {
    constructor(private data: Int8Array) { }

    private pagesObjectId: ReferencePointer = { obj: -1, generation: -1 }

    /**
     * Extract the catalog object from the data at the given ptr
     * */
    extract(ptr: number) {
        let ptr_pages_key = Util.locateSequence(Util.PAGES, this.data, ptr, true) + Util.PAGES.length

        this.pagesObjectId = Util.extractReferenceTyped(this.data, ptr_pages_key)
    }

    getPagesObjectId(): ReferencePointer {
        return this.pagesObjectId
    }
}

/**
 * Represents the PageTree object of the PDF document
 * */
export class PageTree {

    private id: number = -1

    private generation: number = -1

    private pageCount: number = -1

    private pageReferences: ReferencePointer[] = []

    constructor(private data: Int8Array, private objectLookupTable: ObjectLookupTable) {
        this.data = new Int8Array(data)
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

                let ptr = xref.pointer

                let kids_index = Util.locateSequence(Util.KIDS, this.data, ptr, true) + Util.KIDS.length

                let array_data = Util.extractArraySequence(this.data, kids_index + 1)

                let refs = Util.extractReferencesFromArraySequence(array_data)

                this.extractPageReferences(refs)
            }
        }
    }

    /**
     * Extract the object data at the given pointer
     * */
    extract(ptr: number) {
        let key_index = Util.locateSequence(Util.COUNT, this.data, ptr, true) + Util.COUNT.length

        // The complete page count is specified in the top level pagetree
        this.pageCount = Util.extractNumber(this.data, key_index)

        // it is possible that an object of type /Pages references again to objects of types /Pages so we must
        // apply a recursive evaluation
        let kids_index = Util.locateSequence(Util.KIDS, this.data, ptr, true) + Util.KIDS.length

        let array_data = Util.extractArraySequence(this.data, kids_index + 1)

        this.pageReferences = []

        let refs = Util.extractReferencesFromArraySequence(array_data)

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

    constructor(private data: Int8Array, private documentHistory: DocumentHistory) { }

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

        let ptr = ref_annot_table.pointer

        ptr = Util.locateSequence(Util.OBJ, this.data, ptr, true) + Util.OBJ.length

        ptr = Util.skipDelimiter(this.data, ptr)

        let array_sequence = Util.extractArraySequence(this.data, ptr)

        let refs = Util.extractReferencesFromArraySequence(array_sequence)

        this.annots = refs
    }

    /**
     * Extracts the page object starting at position ptr
     * */
    extract(ptr: number) {
        let id_ptr = Util.skipDelimiter(this.data, ptr)
        let object_id: number = Util.extractNumber(this.data, id_ptr)

        let end_id_ptr = Util.locateDelimiter(this.data, id_ptr + 1) + 1
        let object_gen: number = Util.extractNumber(this.data, end_id_ptr)

        this.object_id = { obj: object_id, generation: object_gen }

        let end_ptr = Util.locateSequence(Util.ENDOBJ, this.data, ptr, true)

        let _data = this.data.slice(ptr, end_ptr)

        let annots_ptr = Util.locateSequence(Util.ANNOTS, _data, 0, true)

        if (-1 !== annots_ptr) {
            this.hasAnnotsField = true

            annots_ptr += Util.ANNOTS.length + 1
            annots_ptr = Util.skipDelimiter(_data, annots_ptr)

            if (_data[annots_ptr] === Util.ARRAY_START[0]) {
                let array_sequence = Util.extractArraySequence(_data, annots_ptr)

                let refs = Util.extractReferencesFromArraySequence(array_sequence)

                this.annots = refs
            } else {
                this.annotsPointer = Util.extractReferenceTyped(_data, annots_ptr)

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

    public documentHistory: DocumentHistory = new DocumentHistory(new Int8Array([]))

    constructor(private data: Int8Array) {
        this.data = new Int8Array(data)

        this.documentHistory = new DocumentHistory(this.data)
        this.documentHistory.extractDocumentHistory()
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
        let root_obj = this.documentHistory.getRecentUpdate().trailer.root
        let obj_table = this.documentHistory.createObjectLookupTable()

        let catalog_ptr = obj_table[root_obj.obj].pointer

        let catalog_object = new CatalogObject(this.data)
        catalog_object.extract(catalog_ptr)

        return catalog_object
    }

    /**
     * Returns the latest version of the page tree object of the document
     * */
    getPageTree(): PageTree {
        let obj_table: ObjectLookupTable = this.documentHistory.createObjectLookupTable()

        let catalog_object = this.getCatalog()

        let pages_id = catalog_object.getPagesObjectId()
        let pages_ref = obj_table[pages_id.obj]

        if (pages_ref.generation !== pages_id.generation)
            throw Error("Pages object out of date")

        let pageTree = new PageTree(this.data, obj_table)
        pageTree.extract(pages_ref.pointer)

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

        let obj_ptr = obj_table[pageId.obj].pointer

        let page = new Page(this.data, this.documentHistory)
        page.extract(obj_ptr)

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
                a.extract(obj_table[refPtr.obj].pointer)
                a.page = i
                pageAnnots.push(a)
            }
            annots.push(pageAnnots)
        }

        return annots
    }

}
