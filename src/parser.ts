import { Util, PDFVersion } from './util';
import { ObjectUtil } from './object-util';
import { DocumentHistory, ObjectLookupTable, XRef } from './document-history';
import { CryptoEngine, IdentityEngine, CryptoConfiguration, RC4CryptoEngine, RC4_40_BIT} from './crypto';
import { BaseAnnotationObj, RawAnnotationObj, AnnotationFlags, Border, Color } from './annotations/annotation_types';
import { TextAnnotationObj } from './annotations/text_annotation';
import { HighlightAnnotationObj, StrikeOutAnnotationObj, UnderlineAnnotationObj, SquigglyAnnotationObj } from './annotations/text_markup_annotation';
import { FreeTextAnnotationObj } from './annotations/freetext_annotation';
import { SquareAnnotationObj, CircleAnnotationObj } from './annotations/circle_square_annotation';
import { PolygonAnnotationObj, PolyLineAnnotationObj } from './annotations/polygon_polyline_annotation';
import { InkAnnotationObj } from './annotations/ink_annotation';
import { AppearanceStream, XObject, XObjectObj, OnOffAppearanceStream } from './appearance-stream';

/**
 * Note that this parser does not parses the PDF file completely. It lookups those
 * parts that are important for the creation of annotations. For more information
 * please read the README.
 * */


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

/**
 * Parses the appearance stream object. But if it is a reference it will not resolve the object and just provide
 * the reference.
 * */
export class AppearanceStreamParser {
    private static parseXObject(to_parse : any) : XObject {
        return new XObjectObj()
    }

    private static parseAppearanceStream(key: string, to_parse : any) : XObject | OnOffAppearanceStream | ReferencePointer {
        if(Util.isReferencePointer(to_parse[key])) {
            return to_parse[key]
        } else if (to_parse[key]["/Off"] && to_parse[key]["/ON"]) {
            if (Util.isReferencePointer(to_parse[key]["/Off"])) {
                return to_parse[key]["/Off"]
            } else {
                return AppearanceStreamParser.parseXObject(to_parse[key]["/Off"])
            }

            if (Util.isReferencePointer(to_parse[key]["/On"])) {
                return to_parse[key]["/On"]
            } else {
                return AppearanceStreamParser.parseXObject(to_parse[key]["/On"])
            }
        } else {
            return AppearanceStreamParser.parseXObject(to_parse[key])
        }
    }

    public static parse(to_parse : any) : AppearanceStream {
        if (!to_parse["/N"]) {
            throw Error("/N flag is required in appearance stream")
        }

        let appStream : AppearanceStream = {"N": AppearanceStreamParser.parseAppearanceStream("/N", to_parse)}

        if (to_parse["/R"]) {
            appStream["R"] = AppearanceStreamParser.parseAppearanceStream("/R", to_parse)
        }

        if (to_parse["/D"]) {
            appStream["D"] = AppearanceStreamParser.parseAppearanceStream("/D", to_parse)
        }


        return appStream
    }
}

export type Annotation = RawAnnotationObj | TextAnnotationObj | HighlightAnnotationObj | FreeTextAnnotationObj | SquareAnnotationObj | CircleAnnotationObj | PolygonAnnotationObj | PolyLineAnnotationObj | InkAnnotationObj

/**
 * Parses an annotation from the document and translates this into the pdfAnnotate datastructure
 * */
export class AnnotationParser {

    /**
     * Extract the annotation object it also assigns the raw data, i.e., potentially unknown/ additional attributes
     * */
    public static extract(data: Uint8Array, xref: XRef, page: Page, objectLookupTable: ObjectLookupTable) : Annotation {
        let annot_obj = ObjectUtil.extractObject(data, xref, objectLookupTable)

        annot_obj = annot_obj.value

        let ret_obj : Annotation

        switch(annot_obj["/Subtype"]) {
            case "/Circle":
                ret_obj = new CircleAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Square":
                ret_obj = new SquareAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/FreeText":
                ret_obj = new FreeTextAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Ink":
                ret_obj = new InkAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/PolyLine":
                ret_obj = new PolyLineAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Polygon":
                ret_obj = new PolygonAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Text":
                ret_obj = new TextAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Highlight":
                ret_obj = new HighlightAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Underline":
                ret_obj = new UnderlineAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/Squiggly":
                ret_obj = new SquigglyAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            case "/StrikeOut":
                ret_obj = new StrikeOutAnnotationObj()
                ret_obj.extract(annot_obj)
                break
            default:
                ret_obj = new RawAnnotationObj()
                ret_obj.extract(annot_obj)
        }

        return ret_obj
    }
}

export class __Annotation {
    page: number = -1// the target page of the annotation
    type: string = ""// the sub type of the array (Text, Highlight, ...)
    object_id: ReferencePointer | undefined = undefined// an unused object id
    id: string = ""// unique annation identifier
    rect: number[] = []// the location of the annotation
    author: string = ""// the author of the annotation
    pageReference: Page | undefined = undefined// The reference to the page object to which the annotation is added
    updateDate: string = ""// The date when the annotation was created or updated
    contents?: string // Text that shall be displayed for the annotation
    annotationFlags?: AnnotationFlags// See PDF spcecification 'Annotation Flag'
    appearance_dictionary?: any // control the appearance of the annotation
    appearanceStream? : AppearanceStream | undefined
    appearance_state?: any // change the appearance according to states
    border?: Border | undefined = undefined// define the border
    color?: Color | undefined = undefined// the color set
    fill?: Color | undefined = undefined// the fill color set
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

    public writeAnnotationPreamble() : number[] {
        throw Error("Error")
    }

    public writeAnnotationPostamble() : number[] {
        throw Error("Error")
    }

    public writeAnnotationObject(cryptoInterface : CryptoInterface) : number[] {
        throw Error("Error")
    }

    public encodeAnnotationFlags() : number {
        if (!this.annotationFlags) {
            return 0
        }

        let val = 0

        if (this.annotationFlags.invisible) {
            val |= 1
        }
        if (this.annotationFlags.hidden) {
            val |= 2
        }
        if (this.annotationFlags.print) {
            val |= 4
        }
        if (this.annotationFlags.noZoom) {
            val |= 8
        }
        if (this.annotationFlags.noRotate) {
            val |= 16
        }
        if (this.annotationFlags.noView) {
            val |= 32
        }
        if (this.annotationFlags.readOnly) {
            val |= 64
        }
        if (this.annotationFlags.locked) {
            val |= 128
        }
        if (this.annotationFlags.toggleNoView) {
            val |= 256
        }
        if (this.annotationFlags.lockedContents) {
            val |= 512
        }

        return val
    }


    constructor(private data: Uint8Array = new Uint8Array([]), private cryptoInterface : CryptoInterface = new CryptoInterface()) {
        this.data = data
    }

    /**
     * Extract the annotation object (partially)
     * */
    extract(xref: XRef, page: Page, objectLookupTable: ObjectLookupTable) {
        let annot_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable)

        this.object_id = annot_obj.id

        annot_obj = annot_obj.value


        this.type = annot_obj["/Subtype"]
        this.rect = annot_obj["/Rect"]
        this.pageReference = page

        if (annot_obj["/M"])
            this.updateDate = Util.convertUnicodeToString(this.cryptoInterface.decrypt(annot_obj["/M"], this.object_id))

        if (annot_obj["/Border"])
            this.border = annot_obj["/Border"]

        if (annot_obj["/C"])
            this.color = annot_obj["/C"]

        if (annot_obj["/T"])
            this.author = Util.convertUnicodeToString(this.cryptoInterface.decrypt(annot_obj["/T"], this.object_id))

        if (annot_obj["/NM"])
            this.id = Util.convertUnicodeToString(this.cryptoInterface.decrypt(annot_obj["/NM"], this.object_id))

        if (annot_obj["/Contents"])
            this.contents = Util.convertUnicodeToString(this.cryptoInterface.decrypt(annot_obj["/Contents"], this.object_id))

        if (annot_obj["/QuadPoints"])
            this.quadPoints = annot_obj["/QuadPoints"]

        if (annot_obj["/Inklist"])
            this.inkList = annot_obj["/Inklist"]

        if (annot_obj["/AP"])
            this.appearanceStream = AppearanceStreamParser.parse(annot_obj["/AP"])
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
        this.data = data

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

    private visitedPages: ReferencePointer[] = []

    constructor(private data: Uint8Array, private objectLookupTable: ObjectLookupTable) {
        this.data = data
    }

    /**
     * Extracts the kids references recursively.
     * For every kid it checks if the referenced object type is:
     * - a /Pages object then it recursively lookups its children
     * - a /Page object then it adds the references
     * */
    extractPageReferences(references: ReferencePointer[]) {
        for (let reference of references) {

            if(this.visitedPages.some(el => el.obj === reference.obj &&
                el.generation === reference.generation)) {
                continue
            }

            let xref = this.objectLookupTable[reference.obj]

            let kid_page_obj = ObjectUtil.extractObject(this.data, xref, this.objectLookupTable).value

            if (kid_page_obj["/Type"] === "/Page") {
                this.pageReferences.push(reference)
            } else if (kid_page_obj["/Type"] === "/Pages") {
                this.visitedPages.push(reference)
                this.extractPageReferences(kid_page_obj["/Kids"])
            } else {
                throw Error(`Invalid object type ${kid_page_obj["/Type"]}`)
            }

        }
    }

    /**
     * Extract the object data at the given pointer
     * */
    extract(xref: XRef, objectLookupTable: ObjectLookupTable) {
        let page_tree_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable).value

        if (!page_tree_obj["/Kids"])
            throw Error(`Could not find index of /Kids in /Pages object`)

        let refs = page_tree_obj["/Kids"]

        this.pageReferences = []

        this.extractPageReferences(refs)

        this.pageCount = this.pageReferences.length
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
        this.data = data
    }

    /**
     * Extracts the references in the linked annotations array
     * */
    extractAnnotationArray() {
        let obj_table = this.documentHistory.createObjectLookupTable()

        if (!this.annotsPointer)
            throw Error("Annotations pointer not set")

        let ref_annot_table = obj_table[this.annotsPointer.obj]

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
                this.annots = annots.filter((x : any) => x !== 'null')
            } else {
                this.annotsPointer = annots

                this.extractAnnotationArray()
            }
        }
    }
}

/**
 * Provides a configured interface to handle the encryption and decryption of PDFs
 * */
export class CryptoInterface {
    cryptoConfiguration : CryptoConfiguration = {version: undefined, revision: undefined, filter: undefined, user_pwd : "", owner_pwd : "", length: undefined, permissions: undefined, owner_pwd_c: undefined, user_pwd_c: undefined}

    cryptoEngine : CryptoEngine = new IdentityEngine()

    constructor(private data?: Uint8Array, private documentHistory?: DocumentHistory, private ref_ptr?: XRef, user_pwd?: string, owner_pwd?: string) {
        this.data = data
        this.documentHistory = documentHistory
        this.cryptoConfiguration.user_pwd = user_pwd ? user_pwd : ""
        this.cryptoConfiguration.owner_pwd = owner_pwd ? owner_pwd : ""

        if (this.ref_ptr && this.documentHistory) {
            this.extractEncryptionDictionary(this.ref_ptr)

            // setup crypto-engine

            if (this.cryptoConfiguration.version === 1) {
                this.cryptoEngine = new RC4CryptoEngine(this.cryptoConfiguration, this.documentHistory.getRecentUpdate().id, RC4_40_BIT)
            } else if(this.cryptoConfiguration.version === 2) {
                this.cryptoEngine = new RC4CryptoEngine(this.cryptoConfiguration, this.documentHistory.getRecentUpdate().id)
            } else if(this.cryptoConfiguration.version === 4) {
                console.log("Some fancy AES encryption")
            } else {
                throw Error(`Unsupported Encryption ${this.cryptoConfiguration.version}`)
            }
        }
    }

    /**
     * Returns the reference pointer
     * */
    getEncryptionDictReference() : ReferencePointer | undefined {
        if(!this.ref_ptr)
            return undefined

        return {obj : this.ref_ptr.id, generation : this.ref_ptr.generation}
    }

    encrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        return this.cryptoEngine.encrypt(data, reference)
    }

    decrypt(data : Uint8Array, reference : ReferencePointer | undefined) : Uint8Array {
        return this.cryptoEngine.decrypt(data, reference)
    }

    isUserPasswordCorrect() : boolean {
        if (!this.cryptoEngine) {
            throw Error("Crypto engine not configured")
        }

        return this.cryptoEngine.isUserPasswordCorrect()
    }

    isOwnerPasswordCorrect() : boolean {
        if (!this.cryptoEngine) {
            throw Error("Crypto engine not configured")
        }

        return this.cryptoEngine.isOwnerPasswordCorrect()
    }

    /**
     * Extracts the enrcyption dictionary
     * */
    extractEncryptionDictionary(ptr : XRef) {
        if(!this.documentHistory) {
            throw Error("Documenthistory not configured")
        }

        if(!this.data) {
            throw Error("Data not configured")
        }

        let obj_table = this.documentHistory.createObjectLookupTable()
        let page_obj = ObjectUtil.extractObject(this.data, ptr, obj_table)

        this.cryptoConfiguration.version = page_obj.value["/V"]
        this.cryptoConfiguration.revision = page_obj.value["/R"]
        this.cryptoConfiguration.filter = page_obj.value["/Filter"]
        this.cryptoConfiguration.user_pwd_c = page_obj.value["/U"]
        this.cryptoConfiguration.owner_pwd_c = page_obj.value["/O"]
        this.cryptoConfiguration.length = page_obj.value["/Length"]
        this.cryptoConfiguration.permissions = page_obj.value["/P"]
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

    private cryptoInterface: CryptoInterface = new CryptoInterface()

    constructor(private data: Uint8Array, userpwd : string = "", ownerpwd : string = "") {
        this.data = new Uint8Array(data)

        this.documentHistory = new DocumentHistory(this.data)
        this.documentHistory.extractDocumentHistory()

        if (this.documentHistory.isEncrypted()) {
            // extract encryption dictionary
            let obj_table = this.documentHistory.createObjectLookupTable()

            let enc_obj = this.documentHistory.getRecentUpdate().encrypt

            if(!enc_obj)
                throw Error("Invalid encryption indication")

            let enc_obj_ptr = obj_table[enc_obj.obj]

            this.cryptoInterface = new CryptoInterface(this.data, this.documentHistory, enc_obj_ptr, userpwd, ownerpwd)

            // verify keys
            if(!this.cryptoInterface.isUserPasswordCorrect()) {
                if(!this.cryptoInterface.isOwnerPasswordCorrect()) {
                    throw Error("No valid user credentials")
                }
            }

        }
    }

    /**
     * Returns the crypto interface
     * */
    getCryptoInterface(): CryptoInterface {
        return this.cryptoInterface
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
                let a = AnnotationParser.extract(this.data, obj_table[refPtr.obj], page, obj_table)
                a.page = i
                pageAnnots.push(a)
            }
            annots.push(pageAnnots)
        }

        return annots
    }

}
