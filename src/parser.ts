import { Util, PDFVersion } from './util';
import { AnnotationFactory } from './annotation';
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
import { ContentStream, Operator, TextObject, MarkedContent } from './content-stream';
import { AppearanceStream, AppStream, XObject, XObjectObj, OnOffAppearanceStream } from './appearance-stream';
import { Font, FontManager, FontType } from './fonts';
import { Resource, ResourceDef } from './resources';

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
 * Parses the content stream of an XObject.
 * */
export class ContentStreamParser {
    public static TEXT_OBJECT_START: string = "BT"
    public static TEXT_OBJECT_END: string = "ET"
    public static MARKED_CONTENT_START: string = "BMC"
    public static MARKED_CONTENT_END: string = "EMC"

    public static extract(data: Uint8Array) : ContentStream {
        let ret_val : ContentStream = new ContentStream()
        let grouping_object : any[] = [ret_val]

        let index = 0
        let parameters : (number | string | ReferencePointer)[] = []
        while( index < data.length) {
            let word = Util.readNextWord(data, index)

            let skipped_index = Util.skipSymbol(data, Util.SPACE, word.end_index + 1) // make it robust against traling spaces

            if ((data[skipped_index] === Util.LF || data[skipped_index] === Util.COMMENT_START[0]) && word.result !== "") {
                let op_name = Util.convertUnicodeToString(word.result)

                if (op_name === ContentStreamParser.TEXT_OBJECT_START) {
                    grouping_object.push([parameters])
                } else if (op_name === ContentStreamParser.TEXT_OBJECT_END) {
                    let new_ops = grouping_object.pop()
                    let to = new TextObject()
                    to.parameters = [...new_ops[0]]
                    to.operators = new_ops.slice(1)
                    if (Array.isArray(grouping_object[grouping_object.length - 1])) {
                        grouping_object[grouping_object.length - 1].push(to)
                    } else {
                        grouping_object[grouping_object.length - 1].addOperator(to)
                    }
                } else if (op_name === ContentStreamParser.MARKED_CONTENT_START) {
                    grouping_object.push([parameters])
                } else if (op_name === ContentStreamParser.MARKED_CONTENT_END) {
                    let new_ops = grouping_object.pop()
                    let to = new MarkedContent()
                    to.parameters = [...new_ops[0]]
                    to.operators = new_ops.slice(1)
                    if (Array.isArray(grouping_object[grouping_object.length - 1])) {
                        grouping_object[grouping_object.length - 1].push(to)
                    } else {
                        grouping_object[grouping_object.length - 1].addOperator(to)
                    }
                } else {
                    if (grouping_object[grouping_object.length - 1] instanceof ContentStream) {
                        grouping_object[grouping_object.length - 1].addOperator(new Operator(op_name, [...parameters]))
                    } else {
                        grouping_object[grouping_object.length - 1].push(new Operator(op_name, [...parameters]))
                    }
                }

                parameters = []
                index = word.end_index + 1
            } else {
                if (!word.result) {
                    index = word.end_index + 1
                } else if (word.result[0] === Util.LITERAL_STRING_START[0]) {
                    let res = Util.extractString(data, word.start_index)
                    parameters.push(Util.convertUnicodeToString(res.result))
                    index = res.end_index + 1
                } else if (word.result[0] === Util.HEX_STRING_START[0]) {
                    let res = Util.extractHexString(data, word.start_index)
                    parameters.push(res.result)
                    index = res.end_index + 1
                } else if (word.result[0] === 47) {
                    let res = Util.extractOptionValue(data, word.start_index)
                    parameters.push("/" + res.result)
                    index = res.end_index + 1
                } else if (word.result[0] === Util.R[0]) {
                    let ref_ptr = {obj: (parameters[parameters.length - 2] as number), generation: (parameters[parameters.length - 1] as number)}
                    parameters = parameters.slice(0, parameters.length - 2)
                    parameters.push(ref_ptr)
                    index = word.end_index + 1
                } else { // number
                    let res = Util.extractNumber(data, word.start_index)
                    parameters.push(res.result)
                    index = res.end_index + 1
                }
            }

        }

        return ret_val
    }
}

export class XObjectParser {
    public static extract(data: Uint8Array, xref: XRef, objectLookupTable: ObjectLookupTable, cryptoInterface : CryptoInterface) : XObject {
        let res = ObjectUtil.extractObject(data, xref, objectLookupTable)

        if (res.value["/Type"] !== "/XObject" || res.value["/Subtype"] !== "/Form") {
            throw Error(`Xref {xref} is no valid XObject`)
        }

        let ret_obj = new XObjectObj()


        if (res.value["/Name"])
            ret_obj.name = res.value["/Name"]

        if (res.value["/Matrix"])
            ret_obj.matrix = res.value["/Matrix"]

        if (res.value["/FormType"])
            ret_obj.formType = res.value["/FormType"]

        if (res.value["/BBox"])
            ret_obj.bBox = res.value["/BBox"]

        if (res.value["/Resources"])
            ret_obj.resources = res.value["/Resources"]

        // parse content stream
        if (res.stream && res.stream.data && res.stream.data.length > 0) {
            ret_obj.contentStream = ContentStreamParser.extract(res.stream.data)
        }

        return ret_obj
    }
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

    public static parse(annot: Annotation, to_parse : any) : AppStream {
        if (!to_parse["/N"]) {
            throw Error("/N flag is required in appearance stream")
        }

        let appStream : AppStream = new AppStream(annot)

        appStream.N = AppearanceStreamParser.parseAppearanceStream("/N", to_parse)

        if (to_parse["/R"]) {
            appStream.R = AppearanceStreamParser.parseAppearanceStream("/R", to_parse)
        }

        if (to_parse["/D"]) {
            appStream.D = AppearanceStreamParser.parseAppearanceStream("/D", to_parse)
        }


        return appStream
    }
}

/**
 * Parses a font object
 * */
export class FontParser {
    /**
     * Extract the font dictionary
     * */
    public static extract(data: Uint8Array, xref: XRef, objectLookupTable: ObjectLookupTable, name : string) : Font {
        let res = ObjectUtil.extractObject(data, xref, objectLookupTable)
        let ftype : FontType | undefined = FontType.Type1

        switch (res.value["/Subtype"]) {
            case "/Type0":
                ftype = FontType.Type0
                break
            case "/Type1":
                ftype = FontType.Type1
                break
            case "/Type3":
                ftype = FontType.Type3
                break
            case "/MMType1":
                ftype = FontType.MMType1
                break
            case "/TrueType":
                ftype = FontType.TrueType
                break
            case "/CIDFontType0":
                ftype = FontType.CIDFontType0
                break
            case "/CIDFontType2":
                ftype = FontType.CIDFontType2
                break
            default:
                ftype = undefined
        }

        let font = new Font(ftype, name, res.value["/BaseFont"])

        return font
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
    public static extract(factory: AnnotationFactory, data: Uint8Array, xref: XRef, page: Page, objectLookupTable: ObjectLookupTable, cryptoInterface : CryptoInterface) : Annotation {
        let annot_obj = ObjectUtil.extractObject(data, xref, objectLookupTable)

        annot_obj = annot_obj.value

        let ret_obj : Annotation

        switch(annot_obj["/Subtype"]) {
            case "/Circle":
                ret_obj = new CircleAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Square":
                ret_obj = new SquareAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/FreeText":
                ret_obj = new FreeTextAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Ink":
                ret_obj = new InkAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/PolyLine":
                ret_obj = new PolyLineAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Polygon":
                ret_obj = new PolygonAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Text":
                ret_obj = new TextAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Highlight":
                ret_obj = new HighlightAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Underline":
                ret_obj = new UnderlineAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/Squiggly":
                ret_obj = new SquigglyAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            case "/StrikeOut":
                ret_obj = new StrikeOutAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
                break
            default:
                ret_obj = new RawAnnotationObj()
                ret_obj.object_id = {obj: xref.id, generation: xref.generation}
                ret_obj.extract(annot_obj, page, cryptoInterface)
        }

        ret_obj.factory = factory;

        return ret_obj
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

    /**
     * References to page objects
     * */
    private pageReferences: ReferencePointer[] = []

    /**
     * References to pages objects
     * */
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

    /**
     * Returns the references to the pages objects
     * */
    getPagesReferences(): ReferencePointer[] {
        return this.visitedPages
    }
}

/**
 * Represent a pages object in the PDF document
 * */
export class Pages {
    public object_id: ReferencePointer | undefined // The object id and generation of the object

    /**
     * Holds the resource dictionary that might be associated with the object
     * */
    public resources : Resource | undefined = undefined

    constructor(private data: Uint8Array, private documentHistory: DocumentHistory) {
        this.data = data
    }

    /**
     * Extracts the page object starting at position ptr
     * */
    extract(xref: XRef, objectLookupTable: ObjectLookupTable) {
        let page_obj = ObjectUtil.extractObject(this.data, xref, objectLookupTable)

        this.object_id = page_obj.id

        let resources = page_obj.value["/Resources"]

        if (resources) {
            this.resources = new Resource()
            this.resources.associatedWith = this.object_id
            this.resources.extract(resources)
        }
    }
}

/**
 * Represents a page object in the PDF document
 * */
export class Page {
    public object_id: ReferencePointer | undefined // The object id and generation of the object

    /**
     * Holds the resource dictionary that might be associated with the object
     * */
    public resources : Resource | undefined = undefined

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

        let resources = page_obj.value["/Resources"]

        if (resources) {
            this.resources = new Resource()
            this.resources.associatedWith = this.object_id
            this.resources.extract(resources)
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

class ObjectCache {
    private cache : {[key: string] : any} = {}

    constructor() {
    }

    public set(key : ReferencePointer, value: any) {
        this.cache[`${key.obj}_${key.generation}`] = value
    }

    public get(key : ReferencePointer, otherwise : any = undefined) : any {
        return this.cache[`${key.obj}_${key.generation}`] || otherwise
    }

    public has(key : ReferencePointer) : boolean {
        return typeof this.cache[`${key.obj}_${key.generation}`] !== 'undefined'
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

    private objectCache: ObjectCache = new ObjectCache()

    private cryptoInterface: CryptoInterface = new CryptoInterface()

    private fontManager: FontManager | undefined = undefined

    /**
     * Parses a PDF document and allows access to the cross reference table and individual PDF objects.
     *
     * Note that this class heavily relies on caching to prevent expensive lookup operations.
     * */
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
        }
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
    getPage(pageNumber: number | ReferencePointer): Page {
        let pageId : ReferencePointer | undefined = undefined

        if (typeof pageNumber === 'number') {
            let pageTree = this.getPageTree()
            pageId = pageTree.getPageReferences()[pageNumber]
        } else if (Util.isReferencePointer(pageNumber)) {
            pageId = pageNumber
        }

        if (!pageId)
            throw Error("Could not determine reference pointer from page number")

        if(this.objectCache.has(pageId)) {
            let cached : any = this.objectCache.get(pageId)

            if (!(cached instanceof Page))
                throw Error("Invalid cached Page object")

            return cached
        }

        let obj_table = this.documentHistory.createObjectLookupTable()

        let obj_ptr = obj_table[pageId.obj]

        let page = new Page(this.data, this.documentHistory)
        page.extract(obj_ptr, obj_table)

        this.objectCache.set(pageId, page)
        return page
    }

    /**
     * Returns the pages object with the given reference pointer
     * */
    getPages(refPtr: ReferencePointer) : Pages {
        if(this.objectCache.has(refPtr)) {
            let cached : any = this.objectCache.get(refPtr)

            if (!(cached instanceof Pages))
                throw Error("Invalid cached Pages object")

            return cached
        }

        let obj_table = this.documentHistory.createObjectLookupTable()

        let obj_ptr = obj_table[refPtr.obj]

        let page = new Pages(this.data, this.documentHistory)
        page.extract(obj_ptr, obj_table)

        this.objectCache.set(refPtr, page)
        return page
    }

    /**
     * Returns the annotations that exist in the document
     * */
    extractAnnotations(factory: AnnotationFactory): Annotation[][] {
        let annots: Annotation[][] = []
        let pt: PageTree = this.getPageTree()
        let obj_table = this.documentHistory.createObjectLookupTable()

        let pageCount: number = pt.getPageCount()

        for (let i = 0; i < pageCount; ++i) {
            let page: Page = this.getPage(i)

            let annotationReferences: ReferencePointer[] = page.annots

            let pageAnnots: Annotation[] = []

            for (let refPtr of annotationReferences) {
                let a = AnnotationParser.extract(factory, this.data, obj_table[refPtr.obj], page, obj_table, this.cryptoInterface)
                a.page = i
                pageAnnots.push(a)
            }
            annots.push(pageAnnots)
        }

        return annots
    }

    /**
     * Extracts the fonts, hat are available in the document and setups the font manager
     * */
    extractFonts() {
        let pageTree = this.getPageTree()
        let pageReferences = pageTree.getPageReferences()
        let obj_table = this.documentHistory.createObjectLookupTable()


        if (!this.fontManager) {
            throw Error("FontManager not set")
        }

        for (let reference of pageReferences) {
            let page: Page = this.getPage(reference)
            if (page.resources) {
                for (let resDef of page.resources.font) {
                    if (!resDef.refPtr) {
                        throw Error("Reference pointer not set in resource definition")
                    }

                    if (!this.fontManager.hasFont(resDef.refPtr)) {
                        let font = FontParser.extract(this.data, obj_table[resDef.refPtr.obj], obj_table, resDef.name)
                        font.object_id = resDef.refPtr
                        this.fontManager.addFont(font)
                    }
                }
            }
        }

        let pagesReferences = pageTree.getPagesReferences()

        for (let reference of pagesReferences) {
            let pages : Pages = this.getPages(reference)
            if (pages.resources) {
                for (let resDef of pages.resources.font) {
                    if (!resDef.refPtr) {
                        throw Error("Reference pointer not set in resource definition")
                    }

                    if (!this.fontManager.hasFont(resDef.refPtr)) {
                        let font = FontParser.extract(this.data, obj_table[resDef.refPtr.obj], obj_table, resDef.name)
                        font.object_id = resDef.refPtr
                        this.fontManager.addFont(font)
                    }
                }
            }
        }
    }

    /**
     * Returns the font manager, that manages the available fonts in the document
     * */
    getFonts() : FontManager {
        if(this.fontManager)
            return this.fontManager

        this.fontManager = new FontManager(this)
        this.extractFonts()
        return this.fontManager
    }

    /**
     * Extracts the XObject with the provided reference pointer
     * */
    extractXObject(p : ReferencePointer): XObject {
        let obj_table = this.documentHistory.createObjectLookupTable()
        return XObjectParser.extract(this.data, obj_table[p.obj], obj_table, this.cryptoInterface)
    }

}
