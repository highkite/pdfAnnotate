import { Util } from './util';
import { DocumentHistory, ObjectLookupTable } from './document-history';

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
        obj : number
        generation : number
        reused? : boolean | undefined
}

/**
 * Represents the Catalog object of the PDF document
 * */
export class CatalogObject {
        constructor (private data : Int8Array) { }

        private static PAGES : number[] = [47, 80, 97, 103, 101, 115] // /Pages

        private pagesObjectId : ReferencePointer = {obj : -1, generation : -1 }

        /**
         * Extract the catalog object from the data at the given ptr
         * */
        extract (ptr : number) {
                let ptr_pages_key = Util.locateSequence(CatalogObject.PAGES, this.data, ptr, true) + CatalogObject.PAGES.length

                this.pagesObjectId = Util.extractReferenceTyped(this.data, ptr_pages_key)
        }

        getPagesObjectId () : ReferencePointer {
                return this.pagesObjectId
        }
}

/**
 * Represents the PageTree object of the PDF document
 * */
export class PageTree {
        public static COUNT : number[] = [47, 67, 111, 117, 110, 116]
        public static KIDS : number[] = [47, 75, 105, 100, 115]
        public static TYPE : number[] = [47, 84, 121, 112, 101]
        public static ENDOBJ : number[] = [101, 110, 100, 111, 98, 106]
        public static PAGE : number[] = [47, 80, 97, 103, 101]

        private id : number = -1

        private generation : number = -1

        private pageCount : number = -1

        private pageReferences : ReferencePointer[] = []

        constructor (private data : Int8Array, private objectLookupTable : ObjectLookupTable) {
                this.data = new Int8Array(data)
        }

        /**
         * Reads the provided reference and return true, if the object type is /Page
         * */
        isPage (reference : ReferencePointer) : boolean {
                let xref = this.objectLookupTable[reference.obj]

                if (xref.generation !== reference.generation)
                        throw Error("Page object out of date")

                let ptr = xref.pointer

                ptr = Util.locateSequence(PageTree.ENDOBJ, this.data, ptr, true)

                let _data = this.data.slice(xref.pointer, ptr)

                return (-1 !== Util.locateSequence(PageTree.PAGE, _data, 0, true))
        }

        /**
         * Extracts the kids references recursively.
         * For every kid it checks if the referenced object type is:
         * - a /Pages object then it recursively lookups its children
         * - a /Page object then it adds the references
         * */
        extractPageReferences (references : ReferencePointer[]) {

                for (let reference of references) {
                        if (this.isPage(reference)) {
                                this.pageReferences.push(reference)
                        } else { // handle array -- recursively call the function with the reference array
                                let xref = this.objectLookupTable[reference.obj]

                                if (xref.generation !== reference.generation)
                                        throw Error("Page object out of date")

                                let ptr = xref.pointer

                                let kids_index = Util.locateSequence(PageTree.KIDS, this.data, ptr, true) + PageTree.KIDS.length

                                let array_data = Util.extractArraySequence(this.data, kids_index + 1)

                                this.extractPageReferences(Util.extractReferencesFromArraySequence(array_data))
                        }
                }
        }

        /**
         * Extract the object data at the given pointer
         * */
        extract (ptr : number) {
                let key_index = Util.locateSequence(PageTree.COUNT, this.data, ptr, true) + PageTree.COUNT.length

                // The complete page count is specified in the top level pagetree
                this.pageCount = Util.extractNumber(this.data, key_index)

                // it is possible that an object of type /Pages references again to objects of types /Pages so we must
                // apply a recursive evaluation
                let kids_index = Util.locateSequence(PageTree.KIDS, this.data, ptr, true) + PageTree.KIDS.length

                let array_data = Util.extractArraySequence(this.data, kids_index + 1)

                this.pageReferences = []

                this.extractPageReferences(Util.extractReferencesFromArraySequence(array_data))
        }

        /**
         * Returns the number of pages the page tree comprises
         * */
        getPageCount () : number {
                return this.pageCount
        }

        /**
         * Returns the reference to the page objects
         * */
        getPageReferences () : ReferencePointer[] {
                return this.pageReferences
        }
}

/**
 * Represents a page object in the PDF document
 * */
export class Page {
        private static ENDOBJ : number[] = [101, 110, 100, 111, 98, 106]
        private static ANNOTS : number[] = [47, 65, 110, 110, 111, 116, 115]

        public object_id : ReferencePointer | undefined // The object id and generation of the object

        public annots : ReferencePointer[] = []

        public hasAnnotsField : boolean = false

        public annotsPointer : ReferencePointer | undefined

        constructor (private data : Int8Array, private documentHistory : DocumentHistory) {}

        /**
         * Extracts the references in the linked annotations array
         * */
        extractAnnotationArray () {
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

                this.annots = Util.extractReferencesFromArraySequence(array_sequence)
        }

        /**
         * Extracts the page object starting at position ptr
         * */
        extract (ptr : number) {
                let id_ptr = Util.skipDelimiter(this.data, ptr)
                let object_id : number = Util.extractNumber(this.data, id_ptr)

                let end_id_ptr = Util.locateDelimiter(this.data, id_ptr + 1) + 1
                let object_gen : number = Util.extractNumber(this.data, end_id_ptr)

                this.object_id = { obj : object_id, generation : object_gen }

                let end_ptr = Util.locateSequence(Page.ENDOBJ, this.data, ptr, true)

                let _data = this.data.slice(ptr, end_ptr)

                let annots_ptr = Util.locateSequence(Page.ANNOTS, _data, 0, true)

                if (-1 !== annots_ptr) {
                        this.hasAnnotsField = true

                        annots_ptr += Page.ANNOTS.length + 1
                        annots_ptr = Util.skipDelimiter(_data, annots_ptr)

                        if (_data[annots_ptr] === Util.ARRAY_START[0]) {
                                let array_sequence = Util.extractArraySequence(_data, annots_ptr)

                                this.annots = Util.extractReferencesFromArraySequence(array_sequence)
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

        public documentHistory : DocumentHistory = new DocumentHistory(new Int8Array([]))

        constructor (private data : Int8Array) {
                this.data = new Int8Array(data)

                this.documentHistory = new DocumentHistory(this.data)
                this.documentHistory.extractDocumentHistory()
        }

        /**
         * Returns a free object id. It first checks wether there can be an freed object id reused. If that is not the case
         * it creates a new one
         * */
        getFreeObjectId () : ReferencePointer {
                return this.documentHistory.getFreeObjectId()
        }

        /**
         * Returns the catalog object of the PDF file
         * */
        getCatalog () : CatalogObject {
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
        getPageTree () : PageTree {
                let obj_table : ObjectLookupTable = this.documentHistory.createObjectLookupTable()

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
        getPage (pageNumber : number) : Page {
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

}
