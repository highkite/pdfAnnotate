(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfAnnotate", [], factory);
	else if(typeof exports === 'object')
		exports["pdfAnnotate"] = factory();
	else
		root["pdfAnnotate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/annotation.ts":
/*!***************************!*\
  !*** ./src/annotation.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const writer_1 = __webpack_require__(/*! ./writer */ "./src/writer.ts");
/**
 * The annotation factory provides methods to create annotations. Those are stored temporary
 * and than encoded into PDF code when the PDF document is outputted and for instance downloaded.
 * That
 * */
class AnnotationFactory {
    constructor(data) {
        this.data = data;
        this.annotations = [];
        this.data = data;
        this.parser = new parser_1.PDFDocumentParser(this.data);
    }
    /**
     * Returns the number of annotations that will be added to the PDF document
     * */
    getAnnotationCount() {
        return this.annotations.length;
    }
    /**
     * Load a PDF file referenced by the given 'path'
     * */
    static loadFile(path) {
        return new Promise((resolve) => {
            if (typeof window !== 'undefined') { // browser environment
                fetch(path).then((r) => r.blob()).then((data) => {
                    let reader = new FileReader();
                    reader.onload = () => {
                        resolve(new AnnotationFactory(reader.result));
                    };
                    reader.readAsArrayBuffer(data);
                });
            }
            else if (typeof process === 'object') { // node environment
                throw Error("Not yet implemented");
            }
            else {
                throw Error("Unsupported environment");
            }
        });
    }
    /**
     * Generates a unique identifier necessary for creating the annotation
     * */
    generateUniqueIdentifier() {
        return "(pdfAnnotate-" + util_1.Util.convertDateToPDFDate(new Date()).slice(3, 17) + "-" + this.annotations.length + ")";
    }
    /**
     * Generates a default border
     * */
    createDefaultBorder() {
        return {
            vertical_corner_radius: 0,
            horizontal_corner_radius: 0,
            border_width: 1
        };
    }
    /**
     * Writes the made annotations into a bytestream
     * */
    write() {
        if (this.annotations.length === 0)
            return this.data;
        let writer = new writer_1.Writer(this.data, this.annotations, this.parser);
        return writer.write();
    }
    /**
     * Checks the 'rect' parameter, whether all the entries are of type number and if the the number of entries is correct
     * */
    checkRect(nr, rect) {
        if (rect.length !== nr)
            throw Error("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries");
        rect.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Rect " + rect + " has invalid entry: " + a);
        });
    }
    /**
     * Creates a base annotation that mean the raw object of annotation or those parts that are all existing
     * and equally set in all types of annotations
     * */
    createBaseAnnotation(page, rect, contents, author) {
        let annot = {
            type: "/Annot",
            page: page,
            object_id: this.parser.getFreeObjectId(),
            id: this.generateUniqueIdentifier(),
            rect: rect,
            author: author,
            pageReference: this.parser.getPage(page),
            updateDate: util_1.Util.convertDateToPDFDate(new Date()),
            contents: contents,
            border: this.createDefaultBorder()
        };
        return annot;
    }
    /**
     * Creates a text annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createTextAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        if (!contents || "" === contents)
            throw Error("No content provided");
        if (!author || "" === author)
            throw Error("No author provided");
        this.checkRect(4, rect);
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color
        });
        annot.type = "/Text";
        this.annotations.push(annot);
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
    createTextMarkupAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }) {
        let quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]];
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            QuadPoints: quadPoints
        });
        annot.type = subtype;
        return annot;
    }
    /**
     * Creates a highlight annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createHighlightAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Highlight", color);
        this.annotations.push(annot);
    }
    /**
     * Creates an underline annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createUnderlineAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Underline", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a squiggle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquigglyAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Squiggly", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a strike out annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createStrikeOutAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/StrikeOut", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a free text annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createFreeTextAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            textAlignment: "right-justified"
        });
        annot.type = "/FreeText";
        this.annotations.push(annot);
    }
    createLineAnnotation() {
        throw Error("No yet implemented");
    }
    /**
     * Creates the base annotation object of a circle and square annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareCircleAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color
        });
        annot.type = subtype;
        return annot;
    }
    /**
     * Creates a square annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createSquareCircleAnnotation(page, rect, contents, author, "/Square", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a circle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createCircleAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createSquareCircleAnnotation(page, rect, contents, author, "/Circle", color);
        this.annotations.push(annot);
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
    createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, subtype, color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            vertices: vertices
        });
        annot.type = subtype;
        return annot;
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
    createPolygonAnnotation(page, rect, contents, author, vertices, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/Polygon", color);
        this.annotations.push(annot);
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
    createPolyLineAnnotation(page, rect, contents, author, vertices, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/PolyLine", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a stamp annotation. There exists a number of predifined stamps that can be attached to PDF documents.
     * page : the number of the PDF document page, where the annotation must be attached
     * contents : the content of the annotation
     * author : the author of the annotation
     * stampType : the name of the used stamp type. Can be: [Approved, Experimental, NotApproved, AsIs, Expired, NotForPublicRelease, Confidential, Final, Sold, Departmental, ForComment, TopSecret, Draft, ForPublicRelease]
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createStampAnnotation(page, contents, author, stampType = "Draft", color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, [50, 50, 80, 80], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            stampType: stampType
        });
        annot.type = "/Stamp";
        this.annotations.push(annot);
    }
    /**
     * Creates a visual symbol that indcates the existance of text edits.
     * page : the number of the PDF document page, where the annotation must be attached
     * contents : the content of the annotation
     * author : the author of the annotation
     * caretSymbol : None or P, with P for using the paragraph symbol as caret
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createCaretAnnotation(page, contents, author, caretSymbol = "P", color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, [], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            caretSymbol: caretSymbol
        });
        annot.type = "/Caret";
        this.annotations.push(annot);
    }
    createInkAnnotation() {
        throw Error("No yet implemented");
    }
    createPopupAnnotation() {
        throw Error("No yet implemented");
    }
    /**
     * Downloads the extended PDF document
     * */
    download(fileName = "output.pdf") {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let extended_pdf = this.write();
        console.log(extended_pdf);
        let blob = new Blob([extended_pdf], { type: "application/pdf" });
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    }
}
exports.AnnotationFactory = AnnotationFactory;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/document-history.ts":
/*!*********************************!*\
  !*** ./src/document-history.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
/**
 * Holds the complete information of one update section. That comprises:
 * - the body update
 * - the crossiste reference table
 * - the trailer
 * */
class UpdateSection {
    constructor(data) {
        this.data = data;
        this.refs = [];
        this.start_pointer = -1;
        this.trailer = { size: -1, root: { obj: -1, generation: -1 } };
    }
    /**
     * Returns the reference with the given id
     * */
    getReference(id) {
        for (let ref of this.refs) {
            if (ref.id === id)
                return ref;
        }
        return undefined;
    }
    /**
     * Extracts the header of a sub section. For instance
     *
     * 0 1 // <--
     * ...
     *
     * So the obejct id 0 and the number of sub section entries 1
     * */
    extractSubSectionHeader(index) {
        let ptr = util_1.Util.locateDelimiter(this.data, index);
        let obj_id = util_1.Util.extractNumber(this.data, index, ptr);
        ptr = util_1.Util.skipDelimiter(this.data, ptr + 1);
        let ptr_ref_count = ptr;
        ptr = util_1.Util.locateDelimiter(this.data, ptr);
        let reference_count = util_1.Util.extractNumber(this.data, ptr_ref_count, ptr);
        return { id: obj_id, count: reference_count, end_ptr: ptr };
    }
    /**
     * Extracts the references of a sub section. The index points to the start of
     * the first reference and count represents the number of references that are
     * contained in the subsection.
     *
     * The first_object_id is the id provided in the sub section header
     *
     * By definition of the PDF standard one entry is 20 bytes long
     * */
    extractReferences(index, count, first_object_id) {
        let _refs = [];
        for (let i = 0; i < count; ++i, index += 20) {
            let ptr_end_pointer = util_1.Util.locateDelimiter(this.data, index);
            let pointer = util_1.Util.extractNumber(this.data, index, ptr_end_pointer);
            let ptr_gen_start = util_1.Util.skipDelimiter(this.data, ptr_end_pointer + 1);
            let ptr_gen_end = util_1.Util.locateDelimiter(this.data, ptr_gen_start);
            let generation = util_1.Util.extractNumber(this.data, ptr_gen_start, ptr_gen_end);
            let ptr_flag = util_1.Util.skipDelimiter(this.data, ptr_gen_end + 1);
            let isFree = this.data[ptr_flag] === 102;
            _refs.push({
                id: first_object_id + i,
                pointer: pointer,
                generation: generation,
                free: isFree,
                update: !isFree
            });
        }
        return _refs;
    }
    /**
     * Extracts the trailer of the subsection that means the part stating with the 'trailer' keyword and
     * in particular the trailer dictionary
     * */
    extractTrailer(index) {
        let end_trailer_index = util_1.Util.locateSequence(UpdateSection.STARTXREF, this.data, index, true);
        let _data = this.data.slice(index, end_trailer_index);
        index = 0;
        let ptr_start_size = util_1.Util.locateSequence(UpdateSection.SIZE, _data, index, true) + UpdateSection.SIZE.length;
        ptr_start_size = util_1.Util.skipDelimiter(_data, ptr_start_size);
        let size = util_1.Util.extractNumber(_data, ptr_start_size);
        let ptr_start_root = util_1.Util.locateSequence(UpdateSection.ROOT, _data, index, true) + UpdateSection.ROOT.length;
        ptr_start_root = util_1.Util.skipDelimiter(_data, ptr_start_root);
        let root_reference = util_1.Util.extractReferenceTyped(_data, ptr_start_root);
        let ptr_start_prev = util_1.Util.locateSequence(UpdateSection.PREV, _data, index, true);
        let prev = undefined;
        if (-1 != ptr_start_prev) {
            ptr_start_prev = util_1.Util.skipDelimiter(_data, ptr_start_prev + UpdateSection.PREV.length);
            prev = util_1.Util.extractNumber(_data, ptr_start_prev);
        }
        return {
            size: size,
            root: root_reference,
            prev: prev
        };
    }
    /**
     * Parses the Update section at the given index
     * */
    extract(index) {
        this.start_pointer = index;
        let start_ptr = index + 5; // + length(xref) + blank
        start_ptr = util_1.Util.skipDelimiter(this.data, start_ptr);
        let first_header = this.extractSubSectionHeader(start_ptr);
        // the first header must be 0 to establish the linked list of free objects
        if (first_header.id !== 0) {
            throw Error("First object id not 0");
        }
        let ref_start = util_1.Util.skipDelimiter(this.data, first_header.end_ptr + 1);
        // extract first reference
        this.refs = this.refs.concat(this.extractReferences(ref_start, first_header.count, first_header.id));
        // extract remaining references
        start_ptr = ref_start + first_header.count * 20;
        while (this.data[start_ptr] !== 116) { // 116 = 't' start of the word trailer that concludes the crosssite reference section
            let header = this.extractSubSectionHeader(start_ptr);
            ref_start = util_1.Util.skipDelimiter(this.data, header.end_ptr + 1);
            let references = this.extractReferences(ref_start, header.count, header.id);
            this.refs = this.refs.concat(references);
            start_ptr = ref_start + header.count * 20;
        }
        this.trailer = this.extractTrailer(start_ptr);
    }
}
UpdateSection.SIZE = [47, 83, 105, 122, 101]; // /Size
UpdateSection.ROOT = [47, 82, 111, 111, 116]; // /Root
UpdateSection.PREV = [47, 80, 114, 101, 118]; // /Prev
UpdateSection.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102];
exports.UpdateSection = UpdateSection;
/**
 * Represents the complete PDF document history and therefore holds the
 * updated body parts, the crosssite references and the document trailers
 * */
class DocumentHistory {
    constructor(data) {
        this.data = data;
        this.updates = [];
        this.trailerSize = -1;
        this.data = new Int8Array(data);
    }
    /**
     * Extracts the update section starting at the given index
     * */
    extractUpdateSection(index) {
        let updateSection = new UpdateSection(this.data);
        updateSection.extract(index);
        this.updates.push(updateSection);
    }
    /**
     * Extracts the last update section of a document (that means
     * the most recent update locating at the end of the file)
     * */
    extractDocumentEntry() {
        let ptr = this.data.length - 1;
        let ptr_startxref = util_1.Util.locateSequenceReversed(DocumentHistory.STARTXREF, this.data, ptr, true) + 9;
        ptr = util_1.Util.extractNumber(this.data, ptr_startxref);
        this.extractUpdateSection(ptr);
    }
    /**
     * Extracts the entire update sections
     * */
    extractDocumentHistory() {
        this.extractDocumentEntry();
        let us = this.updates[0];
        while (us.trailer.prev) {
            this.extractUpdateSection(us.trailer.prev);
            us = this.updates[this.updates.length - 1];
        }
        this.trailerSize = this.getRecentUpdate().trailer.size;
    }
    /**
     * Primarily for clarification. The first element is the most recent. We parsed backwards.
     * */
    getRecentUpdate() {
        return this.updates[0];
    }
    /**
     * By running through the PDf history we can for every object id determine the pointer address to the most recent version, and
     * whether the object id is still in used.
     *
     * So the object lookup table has an entry for every existing object id, a pointer to the the most recent object definition, as long
     * as the object exists, or an according indication otherwise.
     * */
    createObjectLookupTable() {
        let objTable = {};
        let update = this.getRecentUpdate();
        let obj_count = update.trailer.size;
        let i = 1;
        while (Object.keys(objTable).length < obj_count) {
            let refs = update.refs;
            for (let ref of refs) {
                if (!objTable.hasOwnProperty(ref.id)) {
                    objTable[ref.id] = ref;
                }
            }
            update = this.updates[i];
            ++i;
        }
        return objTable;
    }
    /**
     * Returns the new object id. It primarily tries to reuse an existing id, but if no such exists it will return a
     * new one
     * */
    getFreeObjectId() {
        let update = this.getRecentUpdate();
        let free_header = update.getReference(0);
        if (!free_header)
            throw Error("Most recent crosssite reference has no header for the linked list of free objects");
        if (1 === free_header.pointer || 0 === free_header.pointer) {
            if (-1 === this.trailerSize)
                throw Error("Trailer size not set");
            return { obj: this.trailerSize++, generation: 0, reused: false };
        }
        return { obj: free_header.pointer, generation: this.createObjectLookupTable()[free_header.id].generation, reused: true };
    }
}
DocumentHistory.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102]; // = 'startxref'
exports.DocumentHistory = DocumentHistory;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
exports.PDFDocumentParser = parser_1.PDFDocumentParser;
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
exports.Util = util_1.Util;
var annotation_1 = __webpack_require__(/*! ./annotation */ "./src/annotation.ts");
exports.AnnotationFactory = annotation_1.AnnotationFactory;


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const document_history_1 = __webpack_require__(/*! ./document-history */ "./src/document-history.ts");
/**
 * Represents the Catalog object of the PDF document
 * */
class CatalogObject {
    constructor(data) {
        this.data = data;
        this.pagesObjectId = { obj: -1, generation: -1 };
    }
    /**
     * Extract the catalog object from the data at the given ptr
     * */
    extract(ptr) {
        let ptr_pages_key = util_1.Util.locateSequence(CatalogObject.PAGES, this.data, ptr, true) + CatalogObject.PAGES.length;
        this.pagesObjectId = util_1.Util.extractReferenceTyped(this.data, ptr_pages_key);
    }
    getPagesObjectId() {
        return this.pagesObjectId;
    }
}
CatalogObject.PAGES = [47, 80, 97, 103, 101, 115]; // /Pages
exports.CatalogObject = CatalogObject;
/**
 * Represents the PageTree object of the PDF document
 * */
class PageTree {
    constructor(data, objectLookupTable) {
        this.data = data;
        this.objectLookupTable = objectLookupTable;
        this.id = -1;
        this.generation = -1;
        this.pageCount = -1;
        this.pageReferences = [];
        this.data = new Int8Array(data);
    }
    /**
     * Reads the provided reference and return true, if the object type is /Page
     * */
    isPage(reference) {
        let xref = this.objectLookupTable[reference.obj];
        if (xref.generation !== reference.generation)
            throw Error("Page object out of date");
        let ptr = xref.pointer;
        ptr = util_1.Util.locateSequence(PageTree.ENDOBJ, this.data, ptr, true);
        let _data = this.data.slice(xref.pointer, ptr);
        return (-1 !== util_1.Util.locateSequence(PageTree.PAGE, _data, 0, true));
    }
    /**
     * Extracts the kids references recursively.
     * For every kid it checks if the referenced object type is:
     * - a /Pages object then it recursively lookups its children
     * - a /Page object then it adds the references
     * */
    extractPageReferences(references) {
        for (let reference of references) {
            if (this.isPage(reference)) {
                this.pageReferences.push(reference);
            }
            else { // handle array -- recursively call the function with the reference array
                let xref = this.objectLookupTable[reference.obj];
                if (xref.generation !== reference.generation)
                    throw Error("Page object out of date");
                let ptr = xref.pointer;
                let kids_index = util_1.Util.locateSequence(PageTree.KIDS, this.data, ptr, true) + PageTree.KIDS.length;
                let array_data = util_1.Util.extractArraySequence(this.data, kids_index + 1);
                this.extractPageReferences(util_1.Util.extractReferencesFromArraySequence(array_data));
            }
        }
    }
    /**
     * Extract the object data at the given pointer
     * */
    extract(ptr) {
        let key_index = util_1.Util.locateSequence(PageTree.COUNT, this.data, ptr, true) + PageTree.COUNT.length;
        // The complete page count is specified in the top level pagetree
        this.pageCount = util_1.Util.extractNumber(this.data, key_index);
        // it is possible that an object of type /Pages references again to objects of types /Pages so we must
        // apply a recursive evaluation
        let kids_index = util_1.Util.locateSequence(PageTree.KIDS, this.data, ptr, true) + PageTree.KIDS.length;
        let array_data = util_1.Util.extractArraySequence(this.data, kids_index + 1);
        this.pageReferences = [];
        this.extractPageReferences(util_1.Util.extractReferencesFromArraySequence(array_data));
    }
    /**
     * Returns the number of pages the page tree comprises
     * */
    getPageCount() {
        return this.pageCount;
    }
    /**
     * Returns the reference to the page objects
     * */
    getPageReferences() {
        return this.pageReferences;
    }
}
PageTree.COUNT = [47, 67, 111, 117, 110, 116];
PageTree.KIDS = [47, 75, 105, 100, 115];
PageTree.TYPE = [47, 84, 121, 112, 101];
PageTree.ENDOBJ = [101, 110, 100, 111, 98, 106];
PageTree.PAGE = [47, 80, 97, 103, 101];
exports.PageTree = PageTree;
/**
 * Represents a page object in the PDF document
 * */
class Page {
    constructor(data, documentHistory) {
        this.data = data;
        this.documentHistory = documentHistory;
        this.annots = [];
        this.hasAnnotsField = false;
    }
    /**
     * Extracts the references in the linked annotations array
     * */
    extractAnnotationArray() {
        let obj_table = this.documentHistory.createObjectLookupTable();
        if (!this.annotsPointer)
            throw Error("Annotations pointer not set");
        let ref_annot_table = obj_table[this.annotsPointer.obj];
        if (ref_annot_table.generation !== this.annotsPointer.generation)
            throw Error("Reference annotation table out of date");
        let ptr = ref_annot_table.pointer;
        ptr = util_1.Util.locateSequence(util_1.Util.OBJ, this.data, ptr, true) + util_1.Util.OBJ.length;
        ptr = util_1.Util.skipDelimiter(this.data, ptr);
        let array_sequence = util_1.Util.extractArraySequence(this.data, ptr);
        this.annots = util_1.Util.extractReferencesFromArraySequence(array_sequence);
    }
    /**
     * Extracts the page object starting at position ptr
     * */
    extract(ptr) {
        let id_ptr = util_1.Util.skipDelimiter(this.data, ptr);
        let object_id = util_1.Util.extractNumber(this.data, id_ptr);
        let end_id_ptr = util_1.Util.locateDelimiter(this.data, id_ptr + 1) + 1;
        let object_gen = util_1.Util.extractNumber(this.data, end_id_ptr);
        this.object_id = { obj: object_id, generation: object_gen };
        let end_ptr = util_1.Util.locateSequence(Page.ENDOBJ, this.data, ptr, true);
        let _data = this.data.slice(ptr, end_ptr);
        let annots_ptr = util_1.Util.locateSequence(Page.ANNOTS, _data, 0, true);
        if (-1 !== annots_ptr) {
            this.hasAnnotsField = true;
            annots_ptr += Page.ANNOTS.length + 1;
            annots_ptr = util_1.Util.skipDelimiter(_data, annots_ptr);
            if (_data[annots_ptr] === util_1.Util.ARRAY_START[0]) {
                let array_sequence = util_1.Util.extractArraySequence(_data, annots_ptr);
                this.annots = util_1.Util.extractReferencesFromArraySequence(array_sequence);
            }
            else {
                this.annotsPointer = util_1.Util.extractReferenceTyped(_data, annots_ptr);
                this.extractAnnotationArray();
            }
        }
    }
}
Page.ENDOBJ = [101, 110, 100, 111, 98, 106];
Page.ANNOTS = [47, 65, 110, 110, 111, 116, 115];
exports.Page = Page;
/**
 * Parses the relevant parts of the PDF document and provides functionality to extract the necessary information for
 * adding annotations
 * */
class PDFDocumentParser {
    constructor(data) {
        this.data = data;
        this.documentHistory = new document_history_1.DocumentHistory(new Int8Array([]));
        this.data = new Int8Array(data);
        this.documentHistory = new document_history_1.DocumentHistory(this.data);
        this.documentHistory.extractDocumentHistory();
    }
    /**
     * Returns a free object id. It first checks wether there can be an freed object id reused. If that is not the case
     * it creates a new one
     * */
    getFreeObjectId() {
        return this.documentHistory.getFreeObjectId();
    }
    /**
     * Returns the catalog object of the PDF file
     * */
    getCatalog() {
        let root_obj = this.documentHistory.getRecentUpdate().trailer.root;
        let obj_table = this.documentHistory.createObjectLookupTable();
        let catalog_ptr = obj_table[root_obj.obj].pointer;
        let catalog_object = new CatalogObject(this.data);
        catalog_object.extract(catalog_ptr);
        return catalog_object;
    }
    /**
     * Returns the latest version of the page tree object of the document
     * */
    getPageTree() {
        let obj_table = this.documentHistory.createObjectLookupTable();
        let catalog_object = this.getCatalog();
        let pages_id = catalog_object.getPagesObjectId();
        let pages_ref = obj_table[pages_id.obj];
        if (pages_ref.generation !== pages_id.generation)
            throw Error("Pages object out of date");
        let pageTree = new PageTree(this.data, obj_table);
        pageTree.extract(pages_ref.pointer);
        return pageTree;
    }
    /**
     * Returns the latest version of the page with the given pageNumber
     * */
    getPage(pageNumber) {
        let pageTree = this.getPageTree();
        let pageId = pageTree.getPageReferences()[pageNumber];
        let obj_table = this.documentHistory.createObjectLookupTable();
        if (obj_table[pageId.obj].generation !== pageId.generation)
            throw Error("Page object out of date");
        let obj_ptr = obj_table[pageId.obj].pointer;
        let page = new Page(this.data, this.documentHistory);
        page.extract(obj_ptr);
        return page;
    }
}
exports.PDFDocumentParser = PDFDocumentParser;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
class Util {
    /**
     * Assumes that at position index is a delimiter and than runs as long forward until it finds
     * another delimiter or reaches the end of the document
     * */
    static skipDelimiter(data, index = 0) {
        while (index < data.length && this.isDelimiter(data[index]))
            ++index;
        return index;
    }
    /**
     * Transforms a string into an array of the corresponding ascii values
     * */
    static convertStringToAscii(toConvert) {
        let asciis = [];
        for (let i = 0; i < toConvert.length; ++i) {
            asciis.push(+toConvert.charCodeAt(i));
        }
        return asciis;
    }
    static isDelimiter(value) {
        return value === 10 || value === 13 || value === 32;
    }
    /**
     * Search the seuqence in data starting at the offset
     *
     * Set the 'closed' flag to check if the suceeding char after the sequence is a line feed (10), a carriage return (13), the end
     * of the whole sequence or a space (32)
     * */
    static locateSequence(sequence, data, offset = 0, closed = false) {
        let i = offset;
        for (let j = 0; i < data.length; ++i) {
            if (data[i] == sequence[j]) {
                if (j == sequence.length - 1) {
                    if (!closed || data.length == i + 1 || this.isDelimiter(data[i + 1])) {
                        return i - (sequence.length - 1);
                    }
                    else {
                        j = -1;
                    }
                }
                ++j;
            }
            else {
                j = 0;
            }
        }
        return -1;
    }
    /**
     * Search the seuqence in data starting at the offset in reverse direction
     *
     * Set the 'closed' flag to check if the preceding char before the sequence is a line feed (10), a carriage return (13), the start
     * of the whole data sequence or a space (32)
     * */
    static locateSequenceReversed(sequence, data, offset = data.length - 1, closed = false) {
        let i = offset;
        for (let j = sequence.length - 1; i >= 0; --i) {
            if (data[i] == sequence[j]) {
                if (j == 0) {
                    if (!closed || i - 1 < 0 || this.isDelimiter(data[i - 1])) {
                        return i;
                    }
                    else {
                        j = sequence.length;
                    }
                }
                --j;
            }
            else {
                j = sequence.length - 1;
            }
        }
        return -1;
    }
    /**
     * Locates the index before the next delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
     * or a space (32)
     * */
    static locateDelimiter(data, offset = 0) {
        while (offset < data.length && !this.isDelimiter(data[offset]))
            ++offset;
        return offset - 1;
    }
    /**
     * Locates the index after the last delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
     * or a space (32)
     * */
    static locateDelimiterReversed(data, offset = data.length - 1) {
        while (offset > 0 && !this.isDelimiter(data[offset]))
            --offset;
        if (offset <= 0)
            return offset;
        return offset - 1;
    }
    /**
     * Extracts the array data at the position of the index. The index can mark the start of the
     * array or a pointer within the array
     * */
    static extractArraySequence(data, index) {
        let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index);
        let end_array = this.locateSequence(Util.ARRAY_END, data, index);
        let nested_array_start = this.locateSequence(Util.ARRAY_START, data, array_start + 1);
        if (nested_array_start != -1 && nested_array_start < end_array) {
            throw new Error("Nested arrays");
        }
        return data.slice(array_start + 1, end_array);
    }
    /**
     * Extract the reference starting at position 'index'
     * */
    static extractReference(data, index) {
        index = Util.skipDelimiter(data, index);
        let r_index = this.locateSequence(this.convertStringToAscii(" R"), data, index, true);
        return data.slice(index, r_index);
    }
    /**
     * Returns a reference as typed object
     * */
    static extractReferenceTyped(data, index) {
        let ref_data = this.extractReference(data, index);
        let del_index = this.locateDelimiter(ref_data, 0);
        let id = this.extractNumber(ref_data, 0, del_index);
        let gen = this.extractNumber(ref_data, del_index + 2);
        return { obj: id, generation: gen };
    }
    /**
     * Objects in PDF files are defined as
     * <objNumber> <generation> obj
     * <<
     *      ...
     *      /Type /<type>
     *      ...
     * >>
     *
     * Approach: We identify an index within the object definiton search the uniquely identifyable end of the object definition
     * than the uniquely identifiable start. We than extract the generation and the object id
     * */
    static getObjectByType(data, _type, offset = 0) {
        let searchSequence = this.convertStringToAscii(this.TYPE + _type);
        let obj_index = this.locateSequence(searchSequence, data, 0, true);
        let obj_end = this.locateSequence(Util.ENDOBJ, data, obj_index, true) + 6;
        let obj_start = this.locateSequenceReversed(Util.OBJ, data, obj_index, true);
        let generation = this.locateDelimiterReversed(data, obj_start - 1);
        let obj_id = this.locateDelimiterReversed(data, generation - 1);
        return data.slice(obj_id, obj_end);
    }
    /**
     * Parses the ascii encoded number of the PDF file
     * */
    static extractNumber(data, start, end = -1) {
        start = Util.skipDelimiter(data, start);
        if (-1 == end) {
            end = Util.locateDelimiter(data, start);
        }
        let str_id = "";
        for (let i = start; i <= end; ++i) {
            str_id += String.fromCharCode(data[i]);
        }
        if ("" === str_id) {
            throw Error("Could not parse number at position " + start);
        }
        return +str_id;
    }
    /**
     * Takes as argument an array of references and returns those typed
     * */
    static extractReferencesFromArraySequence(array_sequence) {
        let refs = [];
        let i = 0;
        while (i < array_sequence.length) {
            refs.push(Util.extractReferenceTyped(array_sequence, i));
            i = Util.locateSequence(Util.R, array_sequence, i, true) + 2;
        }
        return refs;
    }
    /**
     * Converts the given date into PDF formatting
     * */
    static convertDateToPDFDate(date) {
        let date_str = "(D:";
        date_str += date.getFullYear();
        let month = String(date.getMonth() + 1);
        date_str += (month.length == 1 ? "0" : "") + month;
        let day = String(date.getDate());
        date_str += (day.length == 1 ? "0" : "") + day;
        let hours = String(date.getHours());
        date_str += (hours.length == 1 ? "0" : "") + hours;
        let minutes = String(date.getMinutes());
        date_str += (minutes.length == 1 ? "0" : "") + minutes;
        let seconds = String(date.getSeconds());
        date_str += (seconds.length == 1 ? "0" : "") + seconds;
        return date_str + ")";
    }
    static convertAsciiToString(val) {
        let ret = "";
        for (let i = 0; i < val.length; ++i) {
            ret += String.fromCharCode(val[i]);
        }
        return ret;
    }
    /**
     * takes a number and returns an array of its char representations
     * */
    static convertNumberToCharArray(nbr) {
        return Util.convertStringToAscii(String(nbr));
    }
}
Util.TYPE = "/Type ";
Util.SPACE = 32;
Util.OBJ = [111, 98, 106]; // 'obj'
Util.ENDOBJ = [101, 110, 100, 111, 98, 106]; // 'endobj'
Util.ARRAY_START = [91]; // '['
Util.ARRAY_END = [93]; // ']'
Util.R = [82]; // 'R'
Util.ANNOT = [47, 65, 110, 110, 111, 116]; // '/Annot'
Util.ANNOTS = [47, 65, 110, 110, 111, 116, 115]; // '/Annot'
Util.DICT_START = [60, 60]; // '['
Util.DICT_END = [62, 62]; // ']'
exports.Util = Util;


/***/ }),

/***/ "./src/writer.ts":
/*!***********************!*\
  !*** ./src/writer.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
/**
 * Creats the byte array that must be attached to the end of the document
 * */
class Writer {
    /**
     * data : The data representing the original PDF document
     * aannotations : The annotations to add to the document
     * */
    constructor(data, annotations, parser) {
        this.data = data;
        this.annotations = annotations;
        this.parser = parser;
        /**
         * Holds the crossite reference table
         * */
        this.xrefs = [];
        this.data = new Int8Array(data);
    }
    /**
     * Sorts the annotations pagewise.
     *
     * This is necessary since the annotation arrays of the sites must be extended
     * and it makes sense to do this update in one step.
     * */
    sortPageWise(annotations) {
        let pageAnnots = {};
        for (let annot of annotations) {
            if (!pageAnnots[annot.page])
                pageAnnots[annot.page] = [];
            pageAnnots[annot.page].push(annot);
        }
        return pageAnnots;
    }
    /**
     * Writes a reference pointer
     *
     * <obj_id> <generation> R
     *
     * The 'R' and the preceding space is only written in case 'referenced' is true
     * */
    writeReferencePointer(ref, referenced = false) {
        let ret = util_1.Util.convertNumberToCharArray(ref.obj);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(ref.generation));
        if (referenced) {
            ret.push(Writer.SPACE);
            ret.push(Writer.R);
        }
        return ret;
    }
    /**
     * It returns the object extended with the /Annot entry.
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    adaptPageObject(page, annot_array_reference) {
        if (!page.object_id)
            throw Error("Page without object id");
        let ret = [];
        let lookupTable = this.parser.documentHistory.createObjectLookupTable();
        let page_ptr = lookupTable[page.object_id.obj];
        let ptr_objend = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, page_ptr.pointer, true);
        let object_data = this.data.slice(page_ptr.pointer, ptr_objend + util_1.Util.ENDOBJ.length);
        let ptr_dict_end = util_1.Util.locateSequence(util_1.Util.DICT_END, object_data, 0, true);
        ret = Array.from(object_data.slice(0, ptr_dict_end));
        ret = ret.concat(util_1.Util.ANNOTS);
        ret.push(util_1.Util.SPACE);
        ret = ret.concat(this.writeReferencePointer(annot_array_reference, true));
        ret.push(util_1.Util.SPACE);
        ret = ret.concat(Array.from(object_data.slice(ptr_dict_end, object_data.length)));
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return ret;
    }
    /**
     * Takes the annotations of >>one<< page and derives the annotations array from it.
     * Thereby it also considers the potentially existing annotation array.
     * */
    writeAnnotArray(annots) {
        let page = annots[0].pageReference;
        if (!page.object_id)
            throw Error("Page without object id");
        let references = page.annots;
        references = references.concat(annots.map((x) => { return x.object_id; }));
        let refArray_id = page.annotsPointer;
        let page_data = [];
        if (!refArray_id) {
            refArray_id = this.parser.getFreeObjectId();
            page_data = this.adaptPageObject(page, refArray_id);
        }
        let ret = this.writeReferencePointer(refArray_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret.push(Writer.ARRAY_START);
        for (let an of references) {
            ret = ret.concat(this.writeReferencePointer(an, true));
            ret.push(Writer.SPACE);
        }
        ret.push(Writer.ARRAY_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: refArray_id, data: ret, pageReference: page.object_id, pageData: page_data };
    }
    /**
     * Converts a subtype to its byte representation
     * */
    convertSubtype(st) {
        switch (st) {
            case 'Text':
            case '/Text':
                return [47, 84, 101, 120, 116]; // = '/Text'
            case 'Highlight':
            case '/Highlight':
                return [47, 72, 105, 103, 104, 108, 105, 103, 104, 116]; // = '/Highlight'
            case 'Underline':
            case '/Underline':
                return [47, 85, 110, 100, 101, 114, 108, 105, 110, 101]; // = '/Underline'
            case 'Squiggly':
            case '/Squiggly':
                return [47, 83, 113, 117, 105, 103, 103, 108, 121]; // = '/Squiggly'
            case 'StrikeOut':
            case '/StrikeOut':
                return [47, 83, 116, 114, 105, 107, 101, 79, 117, 116]; // = '/StrikeOut'
            case 'Square':
            case '/Square':
                return [47, 83, 113, 117, 97, 114, 101]; // = '/Square'
            case 'Circle':
            case '/Circle':
                return [47, 67, 105, 114, 99, 108, 101]; // = '/Circle'
            case 'FreeText':
            case '/FreeText':
                return [47, 70, 114, 101, 101, 84, 101, 120, 116]; // = '/FreeText'
            case 'Polygon':
            case '/Polygon':
                return [47, 80, 111, 108, 121, 103, 111, 110]; // = '/Polygon'
            case 'PolyLine':
            case '/PolyLine':
                return [47, 80, 111, 108, 121, 76, 105, 110, 101]; // '/PolyLine
            case 'Stamp':
            case '/Stamp':
                return [47, 83, 116, 97, 109, 112]; // = '/Stamp'
            case 'Caret':
            case '/Caret':
                return [47, 67, 97, 114, 101, 116]; // = '/Caret'
        }
        return [];
    }
    /**
     * Writes a javascript number array to a PDF number array
     * */
    writeNumberArray(array) {
        let ret = [Writer.ARRAY_START];
        for (let i of array) {
            ret = ret.concat(util_1.Util.convertNumberToCharArray(i));
            ret.push(Writer.SPACE);
        }
        ret.push(Writer.ARRAY_END);
        return ret;
    }
    /**
     * Writes an annotation object
     * */
    writeAnnotationObject(annot) {
        if (!annot.author || "" === annot.author)
            throw Error("No author provided");
        if (!annot.contents || "" === annot.contents)
            throw Error("No content provided");
        let ret = this.writeReferencePointer(annot.object_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.DICT_START);
        ret = ret.concat(Writer.TYPE_ANNOT);
        ret.push(Writer.SPACE);
        if (annot.rect && annot.rect.length > 0) {
            ret = ret.concat(Writer.RECT);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray(annot.rect));
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.SUBTYPE);
        ret.push(Writer.SPACE);
        ret = ret.concat(this.convertSubtype(annot.type));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.UPDATE_DATE);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.updateDate));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.AUTHOR);
        ret.push(Writer.SPACE);
        ret.push(Writer.BRACKET_START);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.author));
        ret.push(Writer.BRACKET_END);
        ret.push(Writer.SPACE);
        if (annot.contents) {
            ret = ret.concat(Writer.CONTENTS);
            ret.push(Writer.SPACE);
            ret.push(Writer.BRACKET_START);
            ret = ret.concat(util_1.Util.convertStringToAscii(annot.contents));
            ret.push(Writer.BRACKET_END);
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.ID);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.id));
        ret.push(Writer.SPACE);
        if (annot.annotation_flag) {
            ret = ret.concat(Writer.FLAG);
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(annot.annotation_flag));
            ret.push(Writer.SPACE);
        }
        if (annot.color) {
            if (annot.color.r > 1)
                annot.color.r /= 255;
            if (annot.color.g > 1)
                annot.color.g /= 255;
            if (annot.color.b > 1)
                annot.color.b /= 255;
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.COLOR);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray([annot.color.r, annot.color.g, annot.color.b]));
            ret.push(Writer.SPACE);
        }
        let opacity = annot.opacity;
        if (opacity) {
            ret = ret.concat(Writer.OPACITY);
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(opacity));
            ret.push(Writer.SPACE);
        }
        if (annot.border) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.BORDER);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray([annot.border.horizontal_corner_radius, annot.border.vertical_corner_radius, annot.border.border_width]));
            ret.push(Writer.SPACE);
        }
        if (annot.pageReference.object_id) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.PAGE_REFERENCE);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeReferencePointer(annot.pageReference.object_id, true));
            ret.push(Writer.SPACE);
        }
        if (annot.QuadPoints) {
            ret = ret.concat(Writer.QUADPOINTS);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray(annot.QuadPoints));
            ret.push(Writer.SPACE);
        }
        if (annot.vertices) {
            ret = ret.concat(Writer.VERTICES);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray(annot.vertices));
            ret.push(Writer.SPACE);
        }
        if (annot.stampType) {
            ret = ret.concat(Writer.NAME);
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.DRAFT);
            ret.push(Writer.SPACE);
        }
        if (annot.caretSymbol) {
            ret = ret.concat(Writer.SY);
            ret.push(Writer.SPACE);
            ret.push(Writer.P);
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.DICT_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: annot.object_id, data: ret };
    }
    /**
     * Takes all the cross site reference table entries and extracts the consecutive sequences
     * */
    computeXrefSequences() {
        let seqs = [];
        let ordered_xrefs = this.xrefs.sort((a, b) => {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
        let seq = [ordered_xrefs[0]];
        let last_id = ordered_xrefs[0].id;
        seqs.push(seq);
        for (let i = 1; i < ordered_xrefs.length; ++i) {
            if (ordered_xrefs[i].id === last_id + 1) {
                seq.push(ordered_xrefs[i]);
            }
            else {
                seq = [ordered_xrefs[i]];
                seqs.push(seq);
            }
            last_id = ordered_xrefs[i].id;
        }
        return seqs;
    }
    /**
     * Adds preceding zeros (0) in front of the 'value' to match the length
     * */
    pad(length, value) {
        value = String(value);
        let ret = [];
        for (let i = 0; i < length - value.length; ++i) {
            ret.push(48);
        }
        ret = ret.concat(util_1.Util.convertNumberToCharArray(value));
        return ret;
    }
    /**
     * Writes the crossite reference table
     * */
    writeCrossSiteReferenceTable() {
        let ret = Writer.XREF;
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        // write free object head
        let head = this.parser.documentHistory.getRecentUpdate().refs[0];
        this.xrefs.push(head);
        let ordered_sequences = this.computeXrefSequences();
        for (let sequence of ordered_sequences) {
            head = sequence[0];
            ret = ret.concat(util_1.Util.convertNumberToCharArray(head.id));
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(sequence.length));
            ret.push(Writer.CR);
            ret.push(Writer.LF);
            for (let i = 0; i < sequence.length; ++i) {
                let _ret = [];
                _ret = _ret.concat(this.pad(10, sequence[i].pointer));
                _ret.push(Writer.SPACE);
                _ret = _ret.concat(this.pad(5, sequence[i].generation));
                _ret.push(Writer.SPACE);
                if (sequence[i].free)
                    _ret.push(Writer.F);
                if (sequence[i].update)
                    _ret.push(Writer.N);
                _ret.push(Writer.CR);
                _ret.push(Writer.LF);
                if (_ret.length < 20)
                    throw Error("XRef entry < 20 bytes");
                ret = ret.concat(_ret);
            }
        }
        return ret;
    }
    /**
     * Writes the trailer
     * */
    writeTrailer(posXref) {
        let ret = Writer.TRAILER;
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.DICT_START);
        ret = ret.concat(Writer.SIZE);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(this.parser.documentHistory.trailerSize));
        ret.push(Writer.SPACE);
        let trailer = this.parser.documentHistory.getRecentUpdate().trailer;
        ret = ret.concat(Writer.ROOT);
        ret.push(Writer.SPACE);
        ret = ret.concat(this.writeReferencePointer(trailer.root, true));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.PREV);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(this.parser.documentHistory.getRecentUpdate().start_pointer));
        ret = ret.concat(Writer.DICT_END);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.STARTXREF);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(posXref));
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.EOF);
        return ret;
    }
    /**
     * Writes the annations at the end of the PDF byte representation and returns
     * the byte array
     * */
    write() {
        let pageWiseSorted = this.sortPageWise(this.annotations);
        let ptr = this.data.length;
        let new_data = [];
        for (let key in pageWiseSorted) {
            let pageAnnots = pageWiseSorted[key];
            let annot_array = this.writeAnnotArray(pageAnnots);
            this.xrefs.push({
                id: annot_array.ptr.obj,
                pointer: ptr,
                generation: annot_array.ptr.generation,
                free: false,
                update: true
            });
            new_data = new_data.concat(annot_array.data);
            ptr += annot_array.data.length;
            // add adapted page object if it exists
            if (annot_array.pageData.length > 0) {
                this.xrefs.push({
                    id: annot_array.pageReference.obj,
                    pointer: ptr,
                    generation: annot_array.pageReference.generation,
                    free: false,
                    update: true
                });
                new_data = new_data.concat(annot_array.pageData);
                ptr += annot_array.pageData.length;
            }
            for (let annot of pageAnnots) {
                let annot_obj = this.writeAnnotationObject(annot);
                this.xrefs.push({
                    id: annot_obj.ptr.obj,
                    pointer: ptr,
                    generation: annot_obj.ptr.generation,
                    free: false,
                    update: true
                });
                new_data = new_data.concat(annot_obj.data);
                ptr += annot_obj.data.length;
            }
        }
        let crtable = this.writeCrossSiteReferenceTable();
        new_data = new_data.concat(crtable);
        let trailer = this.writeTrailer(ptr);
        new_data = new_data.concat(trailer);
        console.log(util_1.Util.convertAsciiToString(new_data));
        let new_data_array = new Int8Array(new_data);
        let ret_array = new Int8Array(this.data.length + new_data_array.length);
        ret_array.set(this.data);
        ret_array.set(new_data, this.data.length);
        return ret_array;
    }
}
Writer.N = 110;
Writer.F = 102;
Writer.SPACE = 32;
Writer.CR = 13;
Writer.LF = 10;
Writer.R = 82;
Writer.OBJ = [111, 98, 106];
Writer.ENDOBJ = [101, 110, 100, 111, 98, 106];
Writer.ARRAY_START = 91;
Writer.ARRAY_END = 93;
Writer.DICT_START = [60, 60];
Writer.DICT_END = [62, 62];
Writer.TYPE_ANNOT = [47, 84, 121, 112, 101, Writer.SPACE, 47, 65, 110, 110, 111, 116];
Writer.RECT = [47, 82, 101, 99, 116];
Writer.SUBTYPE = [47, 83, 117, 98, 116, 121, 112, 101];
Writer.UPDATE_DATE = [47, 77]; // = '/M'
Writer.AUTHOR = [47, 84]; // = '/T'
Writer.CONTENTS = [47, 67, 111, 110, 116, 101, 110, 116, 115]; // = '/Contents'
Writer.BRACKET_START = 40;
Writer.BRACKET_END = 41;
Writer.FLAG = [47, 70]; // = '/F'
Writer.ID = [47, 78, 77]; // = '/NM'
Writer.COLOR = [47, 67]; // = '/C'
Writer.OPACITY = [47, 67, 65]; // = '/CA'
Writer.BORDER = [47, 66, 111, 114, 100, 101, 114]; // = '/Border'
Writer.PAGE_REFERENCE = [47, 80]; // = '/P'
Writer.TRAILER = [116, 114, 97, 105, 108, 101, 114]; // = 'trailer'
Writer.SIZE = [47, 83, 105, 122, 101]; // = '/Size'
Writer.ROOT = [47, 82, 111, 111, 116]; // = '/Root'
Writer.PREV = [47, 80, 114, 101, 118]; // ='/Prev'
Writer.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102]; // = 'startxref'
Writer.EOF = [37, 37, 69, 79, 70]; // = '%%EOF'
Writer.XREF = [120, 114, 101, 102]; // = 'xref'
Writer.QUADPOINTS = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115]; // = '/QuadPoints'
Writer.VERTICES = [47, 86, 101, 114, 116, 105, 99, 101, 115]; // = '/Vertices'
Writer.NAME = [47, 78, 97, 109, 101]; // = '/Name'
Writer.DRAFT = [47, 68, 114, 97, 102, 116]; // = '/Draft'
Writer.SY = [47, 83, 121]; // = '/Sy'
Writer.P = 80;
exports.Writer = Writer;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJC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Q0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUV0QixJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDbkIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFN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RUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGdCQUFnQjtBQUNqRixXQUFJLEdBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtBQUNyRCxZQUFLLEdBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGFBQWE7QUFFNUQsU0FBRSxHQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxVQUFVO0FBQ3hDLFFBQUMsR0FBWSxFQUFFO0FBN0NyQyx3QkF1a0JDIiwiZmlsZSI6InBkZkFubm90YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwZGZBbm5vdGF0ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciwgUERGRG9jdW1lbnRQYXJzZXIsIFBhZ2UgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBXcml0ZXIgfSBmcm9tICcuL3dyaXRlcidcblxuZXhwb3J0IGludGVyZmFjZSBDb2xvciB7XG4gICAgICAgIHIgOiBudW1iZXJcbiAgICAgICAgZyA6IG51bWJlclxuICAgICAgICBiIDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzIDogbnVtYmVyXG4gICAgICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMgOiBudW1iZXJcbiAgICAgICAgYm9yZGVyX3dpZHRoIDogbnVtYmVyXG4gICAgICAgIGRhc2hfcGF0dGVyPyA6IG51bWJlcltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvbiB7XG4gICAgICAgIHBhZ2UgOiBudW1iZXIgLy8gdGhlIHRhcmdldCBwYWdlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIHR5cGUgOiBzdHJpbmcgLy8gdGhlIHN1YiB0eXBlIG9mIHRoZSBhcnJheSAoVGV4dCwgSGlnaGxpZ2h0LCAuLi4pXG4gICAgICAgIG9iamVjdF9pZCA6IFJlZmVyZW5jZVBvaW50ZXIgLy8gYW4gdW51c2VkIG9iamVjdCBpZFxuICAgICAgICBpZCA6IHN0cmluZyAvLyB1bmlxdWUgYW5uYXRpb24gaWRlbnRpZmllclxuICAgICAgICByZWN0IDogbnVtYmVyW10gLy8gdGhlIGxvY2F0aW9uIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIGF1dGhvciA6IHN0cmluZyAvLyB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIHBhZ2VSZWZlcmVuY2UgOiBQYWdlIC8vIFRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0IHRvIHdoaWNoIHRoZSBhbm5vdGF0aW9uIGlzIGFkZGVkXG4gICAgICAgIHVwZGF0ZURhdGUgOiBzdHJpbmcgLy8gVGhlIGRhdGUgd2hlbiB0aGUgYW5ub3RhdGlvbiB3YXMgY3JlYXRlZCBvciB1cGRhdGVkXG4gICAgICAgIGNvbnRlbnRzPyA6IHN0cmluZyAvLyBUZXh0IHRoYXQgc2hhbGwgYmUgZGlzcGxheWVkIGZvciB0aGUgYW5ub3RhdGlvblxuICAgICAgICBhbm5vdGF0aW9uX2ZsYWc/IDogbnVtYmVyIC8vIFNlZSBQREYgc3BjZWNpZmljYXRpb24gJ0Fubm90YXRpb24gRmxhZydcbiAgICAgICAgYXBwZWFyYW5jZV9kaWN0aW9uYXJ5PyA6IGFueSAvLyBjb250cm9sIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIGFwcGVhcmFuY2Vfc3RhdGU/IDogYW55IC8vIGNoYW5nZSB0aGUgYXBwZWFyYW5jZSBhY2NvcmRpbmcgdG8gc3RhdGVzXG4gICAgICAgIGJvcmRlcj8gOiBCb3JkZXIgLy8gZGVmaW5lIHRoZSBib3JkZXJcbiAgICAgICAgY29sb3I/IDogQ29sb3IgLy8gdGhlIGNvbG9yIHNldFxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya3VwQW5ub3RhdGlvbiBleHRlbmRzIEFubm90YXRpb24ge1xuICAgICAgICBvcGFjaXR5PyA6IG51bWJlciAvLyB0aGUgb3BhY2l0eSB2YWx1ZSAoQ0EgY2FsbGVkIGluIHRoZSBQREYgc3BlYylcbiAgICAgICAgcmljaHRleHQ/IDogc3RyaW5nIC8vIHJpY2ggdGV4dCBzdHJpbmcgZGlzcGxheWVkIGluIHRoZSBwb3B1cCB3aW5kb3cgd2hlbiB0aGUgYW5ub3RhdGlvbiBpcyBvcGVuZWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0QW5ub3RhdGlvbiBleHRlbmRzIE1hcmt1cEFubm90YXRpb24ge1xuICAgICAgICBpbml0aWFsbHlPcGVuPyA6IGJvb2xlYW4gLy8gZmxhZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBhbm5vdGF0aW9uIHNoYWxsIGluaXRpYWxseSBiZSBvcGVuXG4gICAgICAgIGljb25OYW1lPyA6IHN0cmluZyAvLyBuYW1lIG9mIHRoZSB1c2VkIGljb25cbiAgICAgICAgYW5ub3RhdGlvblN0YXRlPyA6IHN0cmluZyAvLyB0aGUgc3RhdGUgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgc3RhdGVNb2RlbD8gOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGcmVlVGV4dEFubm90YXRpb24gZXh0ZW5kcyBNYXJrdXBBbm5vdGF0aW9uIHtcbiAgICAgICAgZGVmYXVsdEFwcGVhcmFuY2U/IDogc3RyaW5nIC8vIGRlZmF1bHQgYXBwZWFyYW5jZSBzdHJpbmdcbiAgICAgICAgdGV4dEFsaWdubWVudD8gOiBzdHJpbmcgLy8gbGVmdC1qdXN0aWZpZWQsIGNlbnRlcmVkLCByaWdodC1qdXN0aWZpZWRcbiAgICAgICAgcmljaFRleHRTdHJpbmc/IDogc3RyaW5nIC8vIGdlbmVyYXRlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICBjYWxsb3V0TGluZT8gOiBudW1iZXJbXSAvLyBjYWxsIG91dCBsaW5lXG4gICAgICAgIGludGVudD8gOiBzdHJpbmcgLy8gYSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgaW50ZW50OiBGcmVlVGV4dCwgRnJlZVRleHRDYWxsb3V0LCBGcmVlVGV4dFR5cGVXcml0ZXJcbiAgICAgICAgYm9yZGVyRWZmZWN0PyA6IGFueVxuICAgICAgICByZD8gOiBhbnkgLy8gP1xuICAgICAgICBib3JkZXJTdHlsZT8gOiBhbnkgLy8gYm9yZGVyIHN0eWxlXG4gICAgICAgIGxpbmVFbmRpbmc/IDogc3RyaW5nIC8vIHRoZSBsaW5lIGVuZGluZyB0eXBlIG9mIHRoZSBjYWxsb3V0IGxpbmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3B1cEFubm90YXRpb24gZXh0ZW5kcyBBbm5vdGF0aW9uIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQW5ub3RhdGlvbiBleHRlbmRzIE1hcmt1cEFubm90YXRpb24ge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW1wQW5ub3RhdGlvbiBleHRlbmRzIE1hcmt1cEFubm90YXRpb24ge1xuICAgICAgICBzdGFtcFR5cGUgOiBzdHJpbmcgLy8gdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJldEFubm90YXRpb24gZXh0ZW5kcyBNYXJrdXBBbm5vdGF0aW9uIHtcbiAgICAgICAgY2FyZXRTeW1ib2wgOiBzdHJpbmcgLy8gQ2FuIGJlIFAgdG8gdXNlIGEgcGFyYWdyYXBoIHN5bWJvbCBmb3IgdGhlIGNhcmV0IG9yIE5vbmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmtBbm5vdGF0aW9uIGV4dGVuZHMgTWFya3VwQW5ub3RhdGlvbiB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dE1hcmt1cEFubm90YXRpb24gZXh0ZW5kcyBNYXJrdXBBbm5vdGF0aW9uIHtcbiAgICAgICAgUXVhZFBvaW50cyA6IG51bWJlcltdIC8vIHNwZWNpZmllcyBob3cgdGhlIGFubm90YXRpb24gZ29lcyBhcnJvdW5kIHRoZSB0ZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlnaGxpZ2h0QW5ub3RhdGlvbiBleHRlbmRzIFRleHRNYXJrdXBBbm5vdGF0aW9uIHsgfVxuZXhwb3J0IGludGVyZmFjZSBVbmRlcmxpbmVBbm5vdGF0aW9uIGV4dGVuZHMgVGV4dE1hcmt1cEFubm90YXRpb24geyB9XG5leHBvcnQgaW50ZXJmYWNlIFNxdWlnZ2x5QW5ub3RhdGlvbiBleHRlbmRzIFRleHRNYXJrdXBBbm5vdGF0aW9uIHsgfVxuZXhwb3J0IGludGVyZmFjZSBTdHJpa2VPdXRBbm5vdGF0aW9uIGV4dGVuZHMgVGV4dE1hcmt1cEFubm90YXRpb24geyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbiBleHRlbmRzIE1hcmt1cEFubm90YXRpb24geyAvLyBzdWJ0eXBlIHNxdWFyZSBvciBjaXJjbGVcbiAgICAgICAgYm9yZGVyX3N0eWxlPyA6IGFueVxuICAgICAgICBjb2xvcl9zcGFjZT8gOiBudW1iZXJbXVxuICAgICAgICBib3JkZXJfZWZmZWN0PyA6IGFueVxuICAgICAgICByZD8gOiBudW1iZXJbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNxdWFyZUFubm90YXRpb24gZXh0ZW5kcyBTcXVhcmVDaXJjbGVBbm5vdGF0aW9uIHsgfVxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVBbm5vdGF0aW9uIGV4dGVuZHMgU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbiB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uIGV4dGVuZHMgTWFya3VwQW5ub3RhdGlvbiB7IC8vIHN1YnR5cGUgcG9seWdvbiBvciBwb2x5bGluZVxuICAgICAgICB2ZXJ0aWNlcyA6IG51bWJlcltdXG4gICAgICAgIGxpbmVfZW5kaW5nPyA6IHN0cmluZ1tdXG4gICAgICAgIGJvcmRlcl9zdHlsZT8gOiBhbnlcbiAgICAgICAgaW50ZXJpb3JfY29sb3I/IDogbnVtYmVyW11cbiAgICAgICAgYm9yZGVyX2VmZmVjdD8gOiBhbnlcbiAgICAgICAgaW50ZW50PyA6IHN0cmluZ1xuICAgICAgICBtZWFzdXJlPyA6IGFueVxufVxuXG4vKipcbiAqIFRoZSBhbm5vdGF0aW9uIGZhY3RvcnkgcHJvdmlkZXMgbWV0aG9kcyB0byBjcmVhdGUgYW5ub3RhdGlvbnMuIFRob3NlIGFyZSBzdG9yZWQgdGVtcG9yYXJ5XG4gKiBhbmQgdGhhbiBlbmNvZGVkIGludG8gUERGIGNvZGUgd2hlbiB0aGUgUERGIGRvY3VtZW50IGlzIG91dHB1dHRlZCBhbmQgZm9yIGluc3RhbmNlIGRvd25sb2FkZWQuXG4gKiBUaGF0XG4gKiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25GYWN0b3J5IHtcbiAgICAgICAgcHJpdmF0ZSBhbm5vdGF0aW9ucyA6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICAgICAgcHJpdmF0ZSBwYXJzZXIgOiBQREZEb2N1bWVudFBhcnNlclxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgUERGRG9jdW1lbnRQYXJzZXIodGhpcy5kYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhbm5vdGF0aW9ucyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFBERiBkb2N1bWVudFxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRBbm5vdGF0aW9uQ291bnQgKCkgOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgYSBQREYgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBnaXZlbiAncGF0aCdcbiAgICAgICAgICogKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZSggcGF0aCA6IHN0cmluZyApIDogUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4oIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChwYXRoKS50aGVuKCAocikgPT4gci5ibG9iKCkgKS50aGVuKCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgOiBhbnkgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQW5ub3RhdGlvbkZhY3RvcnkocmVhZGVyLnJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgeyAvLyBub2RlIGVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbnN1cHBvcnRlZCBlbnZpcm9ubWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkZW50aWZpZXIgbmVjZXNzYXJ5IGZvciBjcmVhdGluZyB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiAqL1xuICAgICAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSWRlbnRpZmllciAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiKHBkZkFubm90YXRlLVwiICsgVXRpbC5jb252ZXJ0RGF0ZVRvUERGRGF0ZShuZXcgRGF0ZSgpKS5zbGljZSgzLDE3KSArIFwiLVwiICsgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggKyBcIilcIlxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyBhIGRlZmF1bHQgYm9yZGVyXG4gICAgICAgICAqICovXG4gICAgICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEJvcmRlciAoKSA6IEJvcmRlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcl93aWR0aCA6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIHRoZSBtYWRlIGFubm90YXRpb25zIGludG8gYSBieXRlc3RyZWFtXG4gICAgICAgICAqICovXG4gICAgICAgIHdyaXRlICgpIDogSW50OEFycmF5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICAgICAgICAgICAgICBsZXQgd3JpdGVyIDogV3JpdGVyID0gbmV3IFdyaXRlcih0aGlzLmRhdGEsIHRoaXMuYW5ub3RhdGlvbnMsIHRoaXMucGFyc2VyKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyaXRlci53cml0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIHRoZSAncmVjdCcgcGFyYW1ldGVyLCB3aGV0aGVyIGFsbCB0aGUgZW50cmllcyBhcmUgb2YgdHlwZSBudW1iZXIgYW5kIGlmIHRoZSB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaXMgY29ycmVjdFxuICAgICAgICAgKiAqL1xuICAgICAgICBwcml2YXRlIGNoZWNrUmVjdCAobnIgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSkge1xuICAgICAgICAgICAgICAgIGlmIChyZWN0Lmxlbmd0aCAhPT0gbnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgaGFzIGludmFsaWQgbnVtYmVyIG9mIGVudHJpZXM6IFwiICsgcmVjdCArIFwiIGhhcyBcIiArIHJlY3QubGVuZ3RoICsgXCIgZW50cmllcywgYnV0IHNob3VsZCBoYXZlIFwiICsgbnIgKyBcIiBlbnRyaWVzXCIpXG5cbiAgICAgICAgICAgICAgICByZWN0LmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVjdCBcIiArIHJlY3QgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGJhc2UgYW5ub3RhdGlvbiB0aGF0IG1lYW4gdGhlIHJhdyBvYmplY3Qgb2YgYW5ub3RhdGlvbiBvciB0aG9zZSBwYXJ0cyB0aGF0IGFyZSBhbGwgZXhpc3RpbmdcbiAgICAgICAgICogYW5kIGVxdWFsbHkgc2V0IGluIGFsbCB0eXBlcyBvZiBhbm5vdGF0aW9uc1xuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVCYXNlQW5ub3RhdGlvbiAocGFnZSA6IG51bWJlciwgcmVjdCA6IG51bWJlcltdLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nKSA6IEFubm90YXRpb24ge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA6IEFubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlIDogXCIvQW5ub3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0X2lkIDogdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0IDogcmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvciA6IGF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VSZWZlcmVuY2UgOiB0aGlzLnBhcnNlci5nZXRQYWdlKHBhZ2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0ZSA6IFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA6IGNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogdGhpcy5jcmVhdGVEZWZhdWx0Qm9yZGVyKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgdGV4dCBhbm5vdGF0aW9uXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVUZXh0QW5ub3RhdGlvbiAocGFnZSA6IG51bWJlciwgcmVjdCA6IG51bWJlcltdLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBjb2xvciA6IENvbG9yID0geyByIDogMSwgZyA6IDEsIGIgOiAwfSkge1xuICAgICAgICAgICAgICAgIGlmICghY29udGVudHMgfHwgXCJcIiA9PT0gY29udGVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIGNvbnRlbnQgcHJvdmlkZWRcIilcblxuICAgICAgICAgICAgICAgIGlmICghYXV0aG9yIHx8IFwiXCIgPT09IGF1dGhvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gYXV0aG9yIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuXG4gICAgICAgICAgICAgICAgbGV0IGFubm90IDogVGV4dEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxseU9wZW4gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnIDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBjb2xvclxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYW5ub3QudHlwZSA9IFwiL1RleHRcIlxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSB0ZXh0IG1hcmt1cCBhbm5vdGF0aW9uXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbiAocGFnZSA6IG51bWJlciwgcmVjdCA6IG51bWJlcltdLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBzdWJ0eXBlIDogc3RyaW5nLCBjb2xvciA6IENvbG9yID0geyByIDogMSwgZyA6IDEsIGIgOiAwfSkgOiBUZXh0TWFya3VwQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcXVhZFBvaW50cyA6IG51bWJlcltdID0gW3JlY3RbMF0sIHJlY3RbM10sIHJlY3RbMl0sIHJlY3RbM10sIHJlY3RbMF0sIHJlY3RbMV0sIHJlY3RbMl0sIHJlY3RbMV1dXG5cbiAgICAgICAgICAgICAgICBsZXQgYW5ub3QgOiBUZXh0TWFya3VwQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvcikse1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsbHlPcGVuIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWcgOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1YWRQb2ludHMgOiBxdWFkUG9pbnRzXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgaGlnaGxpZ2h0IGFubm90YXRpb25cbiAgICAgICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICAgICAqICovXG4gICAgICAgIGNyZWF0ZUhpZ2hsaWdodEFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvSGlnaGxpZ2h0XCIsIGNvbG9yKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gdW5kZXJsaW5lIGFubm90YXRpb25cbiAgICAgICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICAgICAqICovXG4gICAgICAgIGNyZWF0ZVVuZGVybGluZUFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvVW5kZXJsaW5lXCIsIGNvbG9yKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBzcXVpZ2dsZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVTcXVpZ2dseUFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3F1aWdnbHlcIiwgY29sb3IpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHN0cmlrZSBvdXQgYW5ub3RhdGlvblxuICAgICAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlU3RyaWtlT3V0QW5ub3RhdGlvbiAocGFnZSA6IG51bWJlciwgcmVjdCA6IG51bWJlcltdLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBjb2xvciA6IENvbG9yID0geyByIDogMSwgZyA6IDEsIGIgOiAwfSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgICAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TdHJpa2VPdXRcIiwgY29sb3IpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGZyZWUgdGV4dCBhbm5vdGF0aW9uXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVGcmVlVGV4dEFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA6IEZyZWVUZXh0QW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvcikse1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudCA6IFwicmlnaHQtanVzdGlmaWVkXCJcblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhbm5vdC50eXBlID0gXCIvRnJlZVRleHRcIlxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlTGluZUFubm90YXRpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyB0aGUgYmFzZSBhbm5vdGF0aW9uIG9iamVjdCBvZiBhIGNpcmNsZSBhbmQgc3F1YXJlIGFubm90YXRpb25cbiAgICAgICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICAgICAqICovXG4gICAgICAgIGNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgc3VidHlwZSA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIDogU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW5ub3QgOiBTcXVhcmVDaXJjbGVBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSx7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxseU9wZW4gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25fZmxhZyA6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGNvbG9yXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBzcXVhcmUgYW5ub3RhdGlvblxuICAgICAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlU3F1YXJlQW5ub3RhdGlvbiAocGFnZSA6IG51bWJlciwgcmVjdCA6IG51bWJlcltdLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBzdWJ0eXBlIDogc3RyaW5nLCBjb2xvciA6IENvbG9yID0geyByIDogMSwgZyA6IDEsIGIgOiAwfSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgICAgICAgICAgbGV0IGFubm90IDogU3F1YXJlQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVhcmVcIiwgY29sb3IpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVDaXJjbGVBbm5vdGF0aW9uIChwYWdlIDogbnVtYmVyLCByZWN0IDogbnVtYmVyW10sIGNvbnRlbnRzIDogc3RyaW5nLCBhdXRob3IgOiBzdHJpbmcsIHN1YnR5cGUgOiBzdHJpbmcsIGNvbG9yIDogQ29sb3IgPSB7IHIgOiAxLCBnIDogMSwgYiA6IDB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgICAgICAgICBsZXQgYW5ub3QgOiBTcXVhcmVBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL0NpcmNsZVwiLCBjb2xvcilcblxuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIHRoZSBiYXNlIG9iamVjdCBvZiBhIHBvbHlnb24gb3IgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgICAgICogc3VidHlwOiBQb2x5Z29uIG9yIFBvbHlMaW5lXG4gICAgICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICAgICAqICovXG4gICAgICAgIGNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgdmVydGljZXMgOiBudW1iZXJbXSwgc3VidHlwZSA6IHN0cmluZywgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIDogUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW5ub3QgOiBQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSx7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxseU9wZW4gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25fZmxhZyA6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgOiB2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFubm90XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHBvbHlnb24gYW5ub3RhdGlvblxuICAgICAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlUG9seWdvbkFubm90YXRpb24gKHBhZ2UgOiBudW1iZXIsIHJlY3QgOiBudW1iZXJbXSwgY29udGVudHMgOiBzdHJpbmcsIGF1dGhvciA6IHN0cmluZywgdmVydGljZXMgOiBudW1iZXJbXSwgY29sb3IgOiBDb2xvciA9IHsgciA6IDEsIGcgOiAxLCBiIDogMH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA6IFBvbHlnb25Qb2x5TGluZUFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgdmVydGljZXMsIFwiL1BvbHlnb25cIiwgY29sb3IpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlUG9seUxpbmVBbm5vdGF0aW9uIChwYWdlIDogbnVtYmVyLCByZWN0IDogbnVtYmVyW10sIGNvbnRlbnRzIDogc3RyaW5nLCBhdXRob3IgOiBzdHJpbmcsIHZlcnRpY2VzIDogbnVtYmVyW10sIGNvbG9yIDogQ29sb3IgPSB7IHIgOiAxLCBnIDogMSwgYiA6IDB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgICAgICAgICBsZXQgYW5ub3QgOiBQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5TGluZVwiLCBjb2xvcilcblxuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgc3RhbXAgYW5ub3RhdGlvbi4gVGhlcmUgZXhpc3RzIGEgbnVtYmVyIG9mIHByZWRpZmluZWQgc3RhbXBzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIFBERiBkb2N1bWVudHMuXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogc3RhbXBUeXBlIDogdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlU3RhbXBBbm5vdGF0aW9uIChwYWdlIDogbnVtYmVyLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBzdGFtcFR5cGUgOiBzdHJpbmcgPSBcIkRyYWZ0XCIsIGNvbG9yIDogQ29sb3IgPSB7IHIgOiAxLCBnIDogMSwgYiA6IDB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90IDogU3RhbXBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCBbNTAsIDUwLCA4MCwgODBdLCBjb250ZW50cywgYXV0aG9yKSx7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxseU9wZW4gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25fZmxhZyA6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhbXBUeXBlIDogc3RhbXBUeXBlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFubm90LnR5cGUgPSBcIi9TdGFtcFwiXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHZpc3VhbCBzeW1ib2wgdGhhdCBpbmRjYXRlcyB0aGUgZXhpc3RhbmNlIG9mIHRleHQgZWRpdHMuXG4gICAgICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgICogY2FyZXRTeW1ib2wgOiBOb25lIG9yIFAsIHdpdGggUCBmb3IgdXNpbmcgdGhlIHBhcmFncmFwaCBzeW1ib2wgYXMgY2FyZXRcbiAgICAgICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlQ2FyZXRBbm5vdGF0aW9uIChwYWdlIDogbnVtYmVyLCBjb250ZW50cyA6IHN0cmluZywgYXV0aG9yIDogc3RyaW5nLCBjYXJldFN5bWJvbCA6IHN0cmluZyA9IFwiUFwiLCBjb2xvciA6IENvbG9yID0geyByIDogMSwgZyA6IDEsIGIgOiAwfSkge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdCA6IENhcmV0QW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgW10sIGNvbnRlbnRzLCBhdXRob3IpLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGx5T3BlbiA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnIDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFN5bWJvbCA6IGNhcmV0U3ltYm9sXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFubm90LnR5cGUgPSBcIi9DYXJldFwiXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVJbmtBbm5vdGF0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlUG9wdXBBbm5vdGF0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERvd25sb2FkcyB0aGUgZXh0ZW5kZWQgUERGIGRvY3VtZW50XG4gICAgICAgICAqICovXG4gICAgICAgIGRvd25sb2FkIChmaWxlTmFtZSA6IHN0cmluZyA9IFwib3V0cHV0LnBkZlwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGEgOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICAgICAgICAgIGxldCBleHRlbmRlZF9wZGYgPSB0aGlzLndyaXRlKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleHRlbmRlZF9wZGYpXG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbZXh0ZW5kZWRfcGRmXSwge3R5cGU6IFwiYXBwbGljYXRpb24vcGRmXCJ9KVxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybFxuICAgICAgICAgICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICAgICAgICAgIGEuY2xpY2soKVxuICAgICAgICAgICAgICAgIGEucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWZlcmVuY2VQb2ludGVyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWFJlZiB7XG4gICAgICAgIGlkIDogbnVtYmVyXG4gICAgICAgIHBvaW50ZXIgOiBudW1iZXJcbiAgICAgICAgZ2VuZXJhdGlvbiA6IG51bWJlclxuICAgICAgICBmcmVlIDogYm9vbGVhblxuICAgICAgICB1cGRhdGUgOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgaWQgOiBudW1iZXJcbiAgICAgICAgY291bnQgOiBudW1iZXJcbiAgICAgICAgZW5kX3B0ciA6IG51bWJlciAvLyBwb2ludHMgdG8gdGhlIGVuZCBvZiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG59XG5cbmludGVyZmFjZSBUcmFpbGVyIHtcbiAgICAgICAgc2l6ZSA6IG51bWJlclxuICAgICAgICByb290IDogUmVmZXJlbmNlUG9pbnRlclxuICAgICAgICBwcmV2PyA6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgW2lkIDogbnVtYmVyXSA6IFhSZWZcbn1cblxuLyoqXG4gKiBIb2xkcyB0aGUgY29tcGxldGUgaW5mb3JtYXRpb24gb2Ygb25lIHVwZGF0ZSBzZWN0aW9uLiBUaGF0IGNvbXByaXNlczpcbiAqIC0gdGhlIGJvZHkgdXBkYXRlXG4gKiAtIHRoZSBjcm9zc2lzdGUgcmVmZXJlbmNlIHRhYmxlXG4gKiAtIHRoZSB0cmFpbGVyXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlY3Rpb24ge1xuICAgICAgICBwdWJsaWMgcmVmcyA6IFhSZWZbXSA9IFtdXG5cbiAgICAgICAgcHVibGljIHN0YXJ0X3BvaW50ZXIgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIHB1YmxpYyB0cmFpbGVyIDogVHJhaWxlciA9IHsgc2l6ZSA6IC0xLCByb290IDoge29iaiA6IC0xLCBnZW5lcmF0aW9uOiAtMX19XG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU0laRSA6IG51bWJlcltdID0gWzQ3LCA4MywgMTA1LCAxMjIsIDEwMV0gLy8gL1NpemVcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgUk9PVCA6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gL1Jvb3RcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgUFJFViA6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gL1ByZXZcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU1RBUlRYUkVGIDogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXVxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXkpIHsgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugd2l0aCB0aGUgZ2l2ZW4gaWRcbiAgICAgICAgICogKi9cbiAgICAgICAgZ2V0UmVmZXJlbmNlIChpZCA6IG51bWJlcikgOiBYUmVmICB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmVmIG9mIHRoaXMucmVmcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZi5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGhlYWRlciBvZiBhIHN1YiBzZWN0aW9uLiBGb3IgaW5zdGFuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogMCAxIC8vIDwtLVxuICAgICAgICAgKiAuLi5cbiAgICAgICAgICpcbiAgICAgICAgICogU28gdGhlIG9iZWpjdCBpZCAwIGFuZCB0aGUgbnVtYmVyIG9mIHN1YiBzZWN0aW9uIGVudHJpZXMgMVxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0U3ViU2VjdGlvbkhlYWRlciAoaW5kZXggOiBudW1iZXIpIDogU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqX2lkID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaW5kZXgsIHB0cilcblxuICAgICAgICAgICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0ciArIDEpXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX3JlZl9jb3VudCA9IHB0clxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlX2NvdW50ID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX3JlZl9jb3VudCwgcHRyKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQgOiBvYmpfaWQsIGNvdW50IDogcmVmZXJlbmNlX2NvdW50LCBlbmRfcHRyIDogIHB0cn1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBvZiBhIHN1YiBzZWN0aW9uLiBUaGUgaW5kZXggcG9pbnRzIHRvIHRoZSBzdGFydCBvZlxuICAgICAgICAgKiB0aGUgZmlyc3QgcmVmZXJlbmNlIGFuZCBjb3VudCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgcmVmZXJlbmNlcyB0aGF0IGFyZVxuICAgICAgICAgKiBjb250YWluZWQgaW4gdGhlIHN1YnNlY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBmaXJzdF9vYmplY3RfaWQgaXMgdGhlIGlkIHByb3ZpZGVkIGluIHRoZSBzdWIgc2VjdGlvbiBoZWFkZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmaW5pdGlvbiBvZiB0aGUgUERGIHN0YW5kYXJkIG9uZSBlbnRyeSBpcyAyMCBieXRlcyBsb25nXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RSZWZlcmVuY2VzICggaW5kZXggOiBudW1iZXIsIGNvdW50IDogbnVtYmVyLCBmaXJzdF9vYmplY3RfaWQgOiBudW1iZXIpIDogWFJlZltdIHtcbiAgICAgICAgICAgICAgICBsZXQgX3JlZnMgOiBYUmVmW10gPSBbXVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpLCBpbmRleCArPSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB0cl9lbmRfcG9pbnRlciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaW5kZXgsIHB0cl9lbmRfcG9pbnRlcilcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB0cl9nZW5fc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZW5kX3BvaW50ZXIgKyAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHRyX2dlbl9lbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0aW9uID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydCwgcHRyX2dlbl9lbmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdHJfZmxhZyA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9nZW5fZW5kICsgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRnJlZSA9IHRoaXMuZGF0YVtwdHJfZmxhZ10gPT09IDEwMlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBmaXJzdF9vYmplY3RfaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyIDogcG9pbnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbiA6IGdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWUgOiBpc0ZyZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA6ICFpc0ZyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWZzXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIHRyYWlsZXIgb2YgdGhlIHN1YnNlY3Rpb24gdGhhdCBtZWFucyB0aGUgcGFydCBzdGF0aW5nIHdpdGggdGhlICd0cmFpbGVyJyBrZXl3b3JkIGFuZFxuICAgICAgICAgKiBpbiBwYXJ0aWN1bGFyIHRoZSB0cmFpbGVyIGRpY3Rpb25hcnlcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdFRyYWlsZXIgKGluZGV4IDogbnVtYmVyKSA6IFRyYWlsZXIge1xuICAgICAgICAgICAgICAgIGxldCBlbmRfdHJhaWxlcl9pbmRleCA6IG51bWJlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgaW5kZXgsIHRydWUpXG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKGluZGV4LCBlbmRfdHJhaWxlcl9pbmRleClcbiAgICAgICAgICAgICAgICBpbmRleCA9IDBcblxuICAgICAgICAgICAgICAgIGxldCBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5TSVpFLCBfZGF0YSwgaW5kZXgsIHRydWUpICsgVXBkYXRlU2VjdGlvbi5TSVpFLmxlbmd0aFxuICAgICAgICAgICAgICAgIHB0cl9zdGFydF9zaXplID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSlcblxuICAgICAgICAgICAgICAgIGxldCBzaXplID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSlcblxuXG4gICAgICAgICAgICAgICAgbGV0IHB0cl9zdGFydF9yb290ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlJPT1QsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlJPT1QubGVuZ3RoXG4gICAgICAgICAgICAgICAgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuICAgICAgICAgICAgICAgIGxldCByb290X3JlZmVyZW5jZSA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKF9kYXRhLCBwdHJfc3RhcnRfcm9vdClcblxuXG4gICAgICAgICAgICAgICAgbGV0IHB0cl9zdGFydF9wcmV2ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlBSRVYsIF9kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBsZXQgcHJldiA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmICgtMSAhPSBwdHJfc3RhcnRfcHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2ICsgVXBkYXRlU2VjdGlvbi5QUkVWLmxlbmd0aClcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA9IFV0aWwuZXh0cmFjdE51bWJlcihfZGF0YSwgcHRyX3N0YXJ0X3ByZXYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdCA6IHJvb3RfcmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA6IHByZXZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2VzIHRoZSBVcGRhdGUgc2VjdGlvbiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdCAoaW5kZXggOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3BvaW50ZXIgPSBpbmRleFxuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0X3B0ciA9IGluZGV4ICsgNSAvLyArIGxlbmd0aCh4cmVmKSArIGJsYW5rXG4gICAgICAgICAgICAgICAgc3RhcnRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgc3RhcnRfcHRyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0X2hlYWRlciA9IHRoaXMuZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoc3RhcnRfcHRyKVxuXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGhlYWRlciBtdXN0IGJlIDAgdG8gZXN0YWJsaXNoIHRoZSBsaW5rZWQgbGlzdCBvZiBmcmVlIG9iamVjdHNcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RfaGVhZGVyLmlkICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciAoXCJGaXJzdCBvYmplY3QgaWQgbm90IDBcIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgZmlyc3RfaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCBmaXJzdCByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBmaXJzdF9oZWFkZXIuY291bnQsIGZpcnN0X2hlYWRlci5pZCkpXG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHJlbWFpbmluZyByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgZmlyc3RfaGVhZGVyLmNvdW50ICogMjBcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmRhdGFbc3RhcnRfcHRyXSAhPT0gMTE2KSB7IC8vIDExNiA9ICd0JyBzdGFydCBvZiB0aGUgd29yZCB0cmFpbGVyIHRoYXQgY29uY2x1ZGVzIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlcyA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBoZWFkZXIuY291bnQsIGhlYWRlci5pZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdChyZWZlcmVuY2VzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBoZWFkZXIuY291bnQgKiAyMFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudHJhaWxlciA9IHRoaXMuZXh0cmFjdFRyYWlsZXIoc3RhcnRfcHRyKVxuICAgICAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29tcGxldGUgUERGIGRvY3VtZW50IGhpc3RvcnkgYW5kIHRoZXJlZm9yZSBob2xkcyB0aGVcbiAqIHVwZGF0ZWQgYm9keSBwYXJ0cywgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2VzIGFuZCB0aGUgZG9jdW1lbnQgdHJhaWxlcnNcbiAqICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRIaXN0b3J5IHtcbiAgICAgICAgcHVibGljIHVwZGF0ZXMgOiBVcGRhdGVTZWN0aW9uW10gPSBbXVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNUQVJUWFJFRiA6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuXG4gICAgICAgIHB1YmxpYyB0cmFpbGVyU2l6ZSA6IG51bWJlciA9IC0xXG5cbiAgICAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgZGF0YSA6IEludDhBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgdXBkYXRlIHNlY3Rpb24gc3RhcnRpbmcgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RVcGRhdGVTZWN0aW9uIChpbmRleCA6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVTZWN0aW9uID0gbmV3IFVwZGF0ZVNlY3Rpb24odGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlY3Rpb24uZXh0cmFjdChpbmRleClcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlcy5wdXNoKHVwZGF0ZVNlY3Rpb24pXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGxhc3QgdXBkYXRlIHNlY3Rpb24gb2YgYSBkb2N1bWVudCAodGhhdCBtZWFuc1xuICAgICAgICAgKiB0aGUgbW9zdCByZWNlbnQgdXBkYXRlIGxvY2F0aW5nIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUpXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3REb2N1bWVudEVudHJ5ICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHRyID0gdGhpcy5kYXRhLmxlbmd0aCAtIDFcblxuICAgICAgICAgICAgICAgIGxldCBwdHJfc3RhcnR4cmVmID0gVXRpbC5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKERvY3VtZW50SGlzdG9yeS5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIDlcblxuICAgICAgICAgICAgICAgIHB0ciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9zdGFydHhyZWYpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RVcGRhdGVTZWN0aW9uKHB0cilcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgZW50aXJlIHVwZGF0ZSBzZWN0aW9uc1xuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0RG9jdW1lbnRIaXN0b3J5ICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3REb2N1bWVudEVudHJ5KClcblxuICAgICAgICAgICAgICAgIGxldCB1cyA9IHRoaXMudXBkYXRlc1swXVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHVzLnRyYWlsZXIucHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0VXBkYXRlU2VjdGlvbih1cy50cmFpbGVyLnByZXYpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cyA9IHRoaXMudXBkYXRlc1t0aGlzLnVwZGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWlsZXJTaXplID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnNpemVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmltYXJpbHkgZm9yIGNsYXJpZmljYXRpb24uIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBtb3N0IHJlY2VudC4gV2UgcGFyc2VkIGJhY2t3YXJkcy5cbiAgICAgICAgICogKi9cbiAgICAgICAgZ2V0UmVjZW50VXBkYXRlICgpIDogVXBkYXRlU2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1swXVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5IHJ1bm5pbmcgdGhyb3VnaCB0aGUgUERmIGhpc3Rvcnkgd2UgY2FuIGZvciBldmVyeSBvYmplY3QgaWQgZGV0ZXJtaW5lIHRoZSBwb2ludGVyIGFkZHJlc3MgdG8gdGhlIG1vc3QgcmVjZW50IHZlcnNpb24sIGFuZFxuICAgICAgICAgKiB3aGV0aGVyIHRoZSBvYmplY3QgaWQgaXMgc3RpbGwgaW4gdXNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogU28gdGhlIG9iamVjdCBsb29rdXAgdGFibGUgaGFzIGFuIGVudHJ5IGZvciBldmVyeSBleGlzdGluZyBvYmplY3QgaWQsIGEgcG9pbnRlciB0byB0aGUgdGhlIG1vc3QgcmVjZW50IG9iamVjdCBkZWZpbml0aW9uLCBhcyBsb25nXG4gICAgICAgICAqIGFzIHRoZSBvYmplY3QgZXhpc3RzLCBvciBhbiBhY2NvcmRpbmcgaW5kaWNhdGlvbiBvdGhlcndpc2UuXG4gICAgICAgICAqICovXG4gICAgICAgIGNyZWF0ZU9iamVjdExvb2t1cFRhYmxlICgpIDogT2JqZWN0TG9va3VwVGFibGUge1xuICAgICAgICAgICAgICAgIGxldCBvYmpUYWJsZSA6IHtbaWQgOiBudW1iZXJdIDogWFJlZn0gPSB7fVxuXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICBsZXQgb2JqX2NvdW50ID0gdXBkYXRlLnRyYWlsZXIuc2l6ZVxuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAxXG4gICAgICAgICAgICAgICAgd2hpbGUgKE9iamVjdC5rZXlzKG9ialRhYmxlKS5sZW5ndGggPCBvYmpfY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWZzID0gdXBkYXRlLnJlZnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmpUYWJsZS5oYXNPd25Qcm9wZXJ0eShyZWYuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqVGFibGVbcmVmLmlkXSA9IHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRoaXMudXBkYXRlc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKytpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICAgKiBuZXcgb25lXG4gICAgICAgICAqICovXG4gICAgICAgIGdldEZyZWVPYmplY3RJZCgpIDogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICBsZXQgZnJlZV9oZWFkZXIgPSB1cGRhdGUuZ2V0UmVmZXJlbmNlKDApXG5cbiAgICAgICAgICAgICAgICBpZiAoIWZyZWVfaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNb3N0IHJlY2VudCBjcm9zc3NpdGUgcmVmZXJlbmNlIGhhcyBubyBoZWFkZXIgZm9yIHRoZSBsaW5rZWQgbGlzdCBvZiBmcmVlIG9iamVjdHNcIilcblxuICAgICAgICAgICAgICAgIGlmICgxID09PSBmcmVlX2hlYWRlci5wb2ludGVyIHx8IDAgPT09IGZyZWVfaGVhZGVyLnBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gdGhpcy50cmFpbGVyU2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJUcmFpbGVyIHNpemUgbm90IHNldFwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb24gOiAwLCByZXVzZWQgOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtvYmogOiBmcmVlX2hlYWRlci5wb2ludGVyLCBnZW5lcmF0aW9uIDogdGhpcy5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpW2ZyZWVfaGVhZGVyLmlkXS5nZW5lcmF0aW9uLCByZXVzZWQgOiB0cnVlfVxuICAgICAgICB9XG59XG4iLCJleHBvcnQgeyBQREZEb2N1bWVudFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgQW5ub3RhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IERvY3VtZW50SGlzdG9yeSwgT2JqZWN0TG9va3VwVGFibGUgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknO1xuXG4vKipcbiAqIE5vdGUgdGhhdCB0aGlzIHBhcnNlciBkb2VzIG5vdCBwYXJzZXMgdGhlIFBERiBmaWxlIGNvbXBsZXRlbHkuIEl0IGxvb2t1cHMgdGhvc2VcbiAqIHBhcnRzIHRoYXQgYXJlIGltcG9ydGFudCBmb3IgdGhlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zLiBGb3IgbW9yZSBpbmZvcm1hdGlvblxuICogcGxlYXNlIHJlYWQgdGhlIFJFQURNRS5cbiAqICovXG5cbi8qKlxuICogUmVmZXJlbmNlcyBpbiBQREYgZG9jdW1lbnMgYXJlICBvZiB0aGUgZm9ybVxuICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAqXG4gKiBUaGlzIGhvbGRzIHN1Y2ggYSByZWZlcmVuY2VcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICBvYmogOiBudW1iZXJcbiAgICAgICAgZ2VuZXJhdGlvbiA6IG51bWJlclxuICAgICAgICByZXVzZWQ/IDogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIENhdGFsb2cgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ09iamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXkpIHsgfVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFBBR0VTIDogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDEsIDExNV0gLy8gL1BhZ2VzXG5cbiAgICAgICAgcHJpdmF0ZSBwYWdlc09iamVjdElkIDogUmVmZXJlbmNlUG9pbnRlciA9IHtvYmogOiAtMSwgZ2VuZXJhdGlvbiA6IC0xIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdCB0aGUgY2F0YWxvZyBvYmplY3QgZnJvbSB0aGUgZGF0YSBhdCB0aGUgZ2l2ZW4gcHRyXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3QgKHB0ciA6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGxldCBwdHJfcGFnZXNfa2V5ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShDYXRhbG9nT2JqZWN0LlBBR0VTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBDYXRhbG9nT2JqZWN0LlBBR0VTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlc09iamVjdElkID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQodGhpcy5kYXRhLCBwdHJfcGFnZXNfa2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFnZXNPYmplY3RJZCAoKSA6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VzT2JqZWN0SWRcbiAgICAgICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFBhZ2VUcmVlIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VUcmVlIHtcbiAgICAgICAgcHVibGljIHN0YXRpYyBDT1VOVCA6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTcsIDExMCwgMTE2XVxuICAgICAgICBwdWJsaWMgc3RhdGljIEtJRFMgOiBudW1iZXJbXSA9IFs0NywgNzUsIDEwNSwgMTAwLCAxMTVdXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVFlQRSA6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMV1cbiAgICAgICAgcHVibGljIHN0YXRpYyBFTkRPQkogOiBudW1iZXJbXSA9IFsxMDEsIDExMCwgMTAwLCAxMTEsIDk4LCAxMDZdXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUEFHRSA6IG51bWJlcltdID0gWzQ3LCA4MCwgOTcsIDEwMywgMTAxXVxuXG4gICAgICAgIHByaXZhdGUgaWQgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIHByaXZhdGUgZ2VuZXJhdGlvbiA6IG51bWJlciA9IC0xXG5cbiAgICAgICAgcHJpdmF0ZSBwYWdlQ291bnQgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIHByaXZhdGUgcGFnZVJlZmVyZW5jZXMgOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGUgOiBPYmplY3RMb29rdXBUYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGFuZCByZXR1cm4gdHJ1ZSwgaWYgdGhlIG9iamVjdCB0eXBlIGlzIC9QYWdlXG4gICAgICAgICAqICovXG4gICAgICAgIGlzUGFnZSAocmVmZXJlbmNlIDogUmVmZXJlbmNlUG9pbnRlcikgOiBib29sZWFuIHtcbiAgICAgICAgICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICAgICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShQYWdlVHJlZS5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHhyZWYucG9pbnRlciwgcHRyKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICgtMSAhPT0gVXRpbC5sb2NhdGVTZXF1ZW5jZShQYWdlVHJlZS5QQUdFLCBfZGF0YSwgMCwgdHJ1ZSkpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGtpZHMgcmVmZXJlbmNlcyByZWN1cnNpdmVseS5cbiAgICAgICAgICogRm9yIGV2ZXJ5IGtpZCBpdCBjaGVja3MgaWYgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IHR5cGUgaXM6XG4gICAgICAgICAqIC0gYSAvUGFnZXMgb2JqZWN0IHRoZW4gaXQgcmVjdXJzaXZlbHkgbG9va3VwcyBpdHMgY2hpbGRyZW5cbiAgICAgICAgICogLSBhIC9QYWdlIG9iamVjdCB0aGVuIGl0IGFkZHMgdGhlIHJlZmVyZW5jZXNcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdFBhZ2VSZWZlcmVuY2VzIChyZWZlcmVuY2VzIDogUmVmZXJlbmNlUG9pbnRlcltdKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCByZWZlcmVuY2Ugb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQYWdlKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGhhbmRsZSBhcnJheSAtLSByZWN1cnNpdmVseSBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhyZWYuZ2VuZXJhdGlvbiAhPT0gcmVmZXJlbmNlLmdlbmVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdHIgPSB4cmVmLnBvaW50ZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2lkc19pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoUGFnZVRyZWUuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgUGFnZVRyZWUuS0lEUy5sZW5ndGhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXlfZGF0YSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBraWRzX2luZGV4ICsgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3QgdGhlIG9iamVjdCBkYXRhIGF0IHRoZSBnaXZlbiBwb2ludGVyXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3QgKHB0ciA6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGxldCBrZXlfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFBhZ2VUcmVlLkNPVU5ULCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBQYWdlVHJlZS5DT1VOVC5sZW5ndGhcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb21wbGV0ZSBwYWdlIGNvdW50IGlzIHNwZWNpZmllZCBpbiB0aGUgdG9wIGxldmVsIHBhZ2V0cmVlXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBrZXlfaW5kZXgpXG5cbiAgICAgICAgICAgICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0aGF0IGFuIG9iamVjdCBvZiB0eXBlIC9QYWdlcyByZWZlcmVuY2VzIGFnYWluIHRvIG9iamVjdHMgb2YgdHlwZXMgL1BhZ2VzIHNvIHdlIG11c3RcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBhIHJlY3Vyc2l2ZSBldmFsdWF0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFBhZ2VUcmVlLktJRFMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFBhZ2VUcmVlLktJRFMubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlfZGF0YSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBraWRzX2luZGV4ICsgMSlcblxuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMgPSBbXVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMoVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYWdlcyB0aGUgcGFnZSB0cmVlIGNvbXByaXNlc1xuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRQYWdlQ291bnQgKCkgOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VDb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3RzXG4gICAgICAgICAqICovXG4gICAgICAgIGdldFBhZ2VSZWZlcmVuY2VzICgpIDogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlUmVmZXJlbmNlc1xuICAgICAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIEVORE9CSiA6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl1cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgQU5OT1RTIDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTYsIDExNV1cblxuICAgICAgICBwdWJsaWMgb2JqZWN0X2lkIDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZCAvLyBUaGUgb2JqZWN0IGlkIGFuZCBnZW5lcmF0aW9uIG9mIHRoZSBvYmplY3RcblxuICAgICAgICBwdWJsaWMgYW5ub3RzIDogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgICAgICBwdWJsaWMgaGFzQW5ub3RzRmllbGQgOiBib29sZWFuID0gZmFsc2VcblxuICAgICAgICBwdWJsaWMgYW5ub3RzUG9pbnRlciA6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWRcblxuICAgICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRhIDogSW50OEFycmF5LCBwcml2YXRlIGRvY3VtZW50SGlzdG9yeSA6IERvY3VtZW50SGlzdG9yeSkge31cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgaW4gdGhlIGxpbmtlZCBhbm5vdGF0aW9ucyBhcnJheVxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0QW5ub3RhdGlvbkFycmF5ICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFubm90c1BvaW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb25zIHBvaW50ZXIgbm90IHNldFwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZl9hbm5vdF90YWJsZSA9IG9ial90YWJsZVt0aGlzLmFubm90c1BvaW50ZXIub2JqXVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlZl9hbm5vdF90YWJsZS5nZW5lcmF0aW9uICE9PSB0aGlzLmFubm90c1BvaW50ZXIuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVmZXJlbmNlIGFubm90YXRpb24gdGFibGUgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICAgICAgICAgIGxldCBwdHIgPSByZWZfYW5ub3RfdGFibGUucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLk9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5PQkoubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdHMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2UpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIHBhZ2Ugb2JqZWN0IHN0YXJ0aW5nIGF0IHBvc2l0aW9uIHB0clxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0IChwdHIgOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RfaWQgOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpZF9wdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgZW5kX2lkX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaWRfcHRyICsgMSkgKyAxXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdF9nZW4gOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBlbmRfaWRfcHRyKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RfaWQgPSB7IG9iaiA6IG9iamVjdF9pZCwgZ2VuZXJhdGlvbiA6IG9iamVjdF9nZW4gfVxuXG4gICAgICAgICAgICAgICAgbGV0IGVuZF9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFBhZ2UuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIGVuZF9wdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgYW5ub3RzX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoUGFnZS5BTk5PVFMsIF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgaWYgKC0xICE9PSBhbm5vdHNfcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0Fubm90c0ZpZWxkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdHNfcHRyICs9IFBhZ2UuQU5OT1RTLmxlbmd0aCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90c19wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIGFubm90c19wdHIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGF0YVthbm5vdHNfcHRyXSA9PT0gVXRpbC5BUlJBWV9TVEFSVFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdHNQb2ludGVyID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoX2RhdGEsIGFubm90c19wdHIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0QW5ub3RhdGlvbkFycmF5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIHJlbGV2YW50IHBhcnRzIG9mIHRoZSBQREYgZG9jdW1lbnQgYW5kIHByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdG8gZXh0cmFjdCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGZvclxuICogYWRkaW5nIGFubm90YXRpb25zXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBERkRvY3VtZW50UGFyc2VyIHtcblxuICAgICAgICBwdWJsaWMgZG9jdW1lbnRIaXN0b3J5IDogRG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeShuZXcgSW50OEFycmF5KFtdKSlcblxuICAgICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRhIDogSW50OEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudEhpc3RvcnkgPSBuZXcgRG9jdW1lbnRIaXN0b3J5KHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeS5leHRyYWN0RG9jdW1lbnRIaXN0b3J5KClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgZnJlZSBvYmplY3QgaWQuIEl0IGZpcnN0IGNoZWNrcyB3ZXRoZXIgdGhlcmUgY2FuIGJlIGFuIGZyZWVkIG9iamVjdCBpZCByZXVzZWQuIElmIHRoYXQgaXMgbm90IHRoZSBjYXNlXG4gICAgICAgICAqIGl0IGNyZWF0ZXMgYSBuZXcgb25lXG4gICAgICAgICAqICovXG4gICAgICAgIGdldEZyZWVPYmplY3RJZCAoKSA6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50SGlzdG9yeS5nZXRGcmVlT2JqZWN0SWQoKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGNhdGFsb2cgb2JqZWN0IG9mIHRoZSBQREYgZmlsZVxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRDYXRhbG9nICgpIDogQ2F0YWxvZ09iamVjdCB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb3Rfb2JqID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlci5yb290XG4gICAgICAgICAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICAgICAgICAgIGxldCBjYXRhbG9nX3B0ciA9IG9ial90YWJsZVtyb290X29iai5vYmpdLnBvaW50ZXJcblxuICAgICAgICAgICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IG5ldyBDYXRhbG9nT2JqZWN0KHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICBjYXRhbG9nX29iamVjdC5leHRyYWN0KGNhdGFsb2dfcHRyKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGFsb2dfb2JqZWN0XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHBhZ2UgdHJlZSBvYmplY3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgICAqICovXG4gICAgICAgIGdldFBhZ2VUcmVlICgpIDogUGFnZVRyZWUge1xuICAgICAgICAgICAgICAgIGxldCBvYmpfdGFibGUgOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICAgICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IHRoaXMuZ2V0Q2F0YWxvZygpXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZXNfaWQgPSBjYXRhbG9nX29iamVjdC5nZXRQYWdlc09iamVjdElkKClcbiAgICAgICAgICAgICAgICBsZXQgcGFnZXNfcmVmID0gb2JqX3RhYmxlW3BhZ2VzX2lkLm9ial1cblxuICAgICAgICAgICAgICAgIGlmIChwYWdlc19yZWYuZ2VuZXJhdGlvbiAhPT0gcGFnZXNfaWQuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZXMgb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZVRyZWUgPSBuZXcgUGFnZVRyZWUodGhpcy5kYXRhLCBvYmpfdGFibGUpXG4gICAgICAgICAgICAgICAgcGFnZVRyZWUuZXh0cmFjdChwYWdlc19yZWYucG9pbnRlcilcblxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlVHJlZVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHdpdGggdGhlIGdpdmVuIHBhZ2VOdW1iZXJcbiAgICAgICAgICogKi9cbiAgICAgICAgZ2V0UGFnZSAocGFnZU51bWJlciA6IG51bWJlcikgOiBQYWdlIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUlkID0gcGFnZVRyZWUuZ2V0UGFnZVJlZmVyZW5jZXMoKVtwYWdlTnVtYmVyXVxuXG4gICAgICAgICAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICAgICAgICAgIGlmIChvYmpfdGFibGVbcGFnZUlkLm9ial0uZ2VuZXJhdGlvbiAhPT0gcGFnZUlkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqX3B0ciA9IG9ial90YWJsZVtwYWdlSWQub2JqXS5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IG5ldyBQYWdlKHRoaXMuZGF0YSwgdGhpcy5kb2N1bWVudEhpc3RvcnkpXG4gICAgICAgICAgICAgICAgcGFnZS5leHRyYWN0KG9ial9wdHIpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZVxuICAgICAgICB9XG5cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBieXRlIGFycmF5IHJlcHJlc2VudGluZyB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFV0aWwge1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVFlQRSA6IHN0cmluZyA9IFwiL1R5cGUgXCJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTUEFDRSA6IG51bWJlcj0gMzJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPQkogOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdIC8vICdvYmonXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRU5ET0JKIDogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XSAvLyAnZW5kb2JqJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUIDogbnVtYmVyW10gPSBbOTFdIC8vICdbJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORCA6IG51bWJlcltdID0gWzkzXSAvLyAnXSdcbiAgICAgICAgcHVibGljIHN0YXRpYyBSIDogbnVtYmVyW10gPSBbODJdIC8vICdSJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIEFOTk9UIDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTZdIC8vICcvQW5ub3QnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQU5OT1RTIDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTYsIDExNV0gLy8gJy9Bbm5vdCdcbiAgICAgICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUIDogbnVtYmVyW10gPSBbNjAsIDYwXSAvLyAnWydcbiAgICAgICAgcHVibGljIHN0YXRpYyBESUNUX0VORCA6IG51bWJlcltdID0gWzYyLCA2Ml0gLy8gJ10nXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzc3VtZXMgdGhhdCBhdCBwb3NpdGlvbiBpbmRleCBpcyBhIGRlbGltaXRlciBhbmQgdGhhbiBydW5zIGFzIGxvbmcgZm9yd2FyZCB1bnRpbCBpdCBmaW5kc1xuICAgICAgICAgKiBhbm90aGVyIGRlbGltaXRlciBvciByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgICAqICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2tpcERlbGltaXRlcihkYXRhIDogSW50OEFycmF5LCBpbmRleCA6IG51bWJlciA9IDApIDogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBkYXRhLmxlbmd0aCAmJiB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaW5kZXhdKSkgKytpbmRleFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhbnNmb3JtcyBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIGFzY2lpIHZhbHVlc1xuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRTdHJpbmdUb0FzY2lpICh0b0NvbnZlcnQgOiBzdHJpbmcpIDogbnVtYmVyW10ge1xuICAgICAgICAgICAgICAgIGxldCBhc2NpaXMgOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvQ29udmVydC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNjaWlzLnB1c2goK3RvQ29udmVydC5jaGFyQ29kZUF0KGkpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBhc2NpaXNcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNEZWxpbWl0ZXIodmFsdWUgOiBudW1iZXIpIDogYm9vbGVhbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAxMCB8fCB2YWx1ZSA9PT0gMTMgfHwgdmFsdWUgPT09IDMyXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VhcmNoIHRoZSBzZXVxZW5jZSBpbiBkYXRhIHN0YXJ0aW5nIGF0IHRoZSBvZmZzZXRcbiAgICAgICAgICpcbiAgICAgICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBzdWNlZWRpbmcgY2hhciBhZnRlciB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZFxuICAgICAgICAgKiBvZiB0aGUgd2hvbGUgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICAgICAqICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlU2VxdWVuY2Uoc2VxdWVuY2UgOiBudW1iZXJbXSwgZGF0YSA6IEludDhBcnJheSwgb2Zmc2V0IDogbnVtYmVyID0gMCwgY2xvc2VkIDogYm9vbGVhbiA9IGZhbHNlKSA6IG51bWJlciB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBvZmZzZXRcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IHNlcXVlbmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCB8fCBkYXRhLmxlbmd0aCA9PSBpICsgMSB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgLSAoc2VxdWVuY2UubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsralxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWFyY2ggdGhlIHNldXFlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHByZWNlZGluZyBjaGFyIGJlZm9yZSB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIHN0YXJ0XG4gICAgICAgICAqIG9mIHRoZSB3aG9sZSBkYXRhIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoc2VxdWVuY2UgOiBudW1iZXJbXSwgZGF0YSA6IEludDhBcnJheSwgb2Zmc2V0IDogbnVtYmVyID0gZGF0YS5sZW5ndGggLSAxLCBjbG9zZWQgOiBib29sZWFuID0gZmFsc2UpIDogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IG9mZnNldFxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDE7IGkgPj0wOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighY2xvc2VkIHx8IGkgLSAxIDwgMCB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWpcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9jYXRlcyB0aGUgaW5kZXggYmVmb3JlIHRoZSBuZXh0IGRlbGltaXRlci4gRGVsaW1pdGVycyBjYW4gYmUgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZCBvZiB0aGUgd2hvbGUgc2VxdWVuY2VcbiAgICAgICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICAgICAqICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlRGVsaW1pdGVyKGRhdGEgOiBJbnQ4QXJyYXksIG9mZnNldCA6IG51bWJlciA9IDApIDogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICB3aGlsZShvZmZzZXQgPCBkYXRhLmxlbmd0aCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKSArK29mZnNldFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEgOiBJbnQ4QXJyYXksIG9mZnNldCA6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSkgOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHdoaWxlKG9mZnNldCA+IDAgJiYgIXRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtvZmZzZXRdKSkgLS1vZmZzZXRcblxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXRcblxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGFycmF5IGRhdGEgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmRleC4gVGhlIGluZGV4IGNhbiBtYXJrIHRoZSBzdGFydCBvZiB0aGVcbiAgICAgICAgICogYXJyYXkgb3IgYSBwb2ludGVyIHdpdGhpbiB0aGUgYXJyYXlcbiAgICAgICAgICogKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhIDogSW50OEFycmF5LCBpbmRleCA6IG51bWJlcikgOiBJbnQ4QXJyYXkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheV9zdGFydCA9IHRoaXMubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLkFSUkFZX1NUQVJULCBkYXRhLCBpbmRleClcblxuICAgICAgICAgICAgICAgIGxldCBlbmRfYXJyYXkgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQVJSQVlfRU5ELCBkYXRhLCBpbmRleClcblxuICAgICAgICAgICAgICAgIGxldCBuZXN0ZWRfYXJyYXlfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQVJSQVlfU1RBUlQsIGRhdGEsIGFycmF5X3N0YXJ0ICsgMSlcblxuICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRfYXJyYXlfc3RhcnQgIT0gLTEgJiYgbmVzdGVkX2FycmF5X3N0YXJ0IDwgZW5kX2FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXN0ZWQgYXJyYXlzXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoYXJyYXlfc3RhcnQgKyAxLCBlbmRfYXJyYXkpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgICAgICogKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlKGRhdGEgOiBJbnQ4QXJyYXksIGluZGV4IDogbnVtYmVyKSA6IEludDhBcnJheSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgbGV0IHJfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkoXCIgUlwiKSwgZGF0YSwgaW5kZXgsIHRydWUpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCwgcl9pbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIGFzIHR5cGVkIG9iamVjdFxuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VUeXBlZChkYXRhIDogSW50OEFycmF5LCBpbmRleCA6IG51bWJlcikgOiBSZWZlcmVuY2VQb2ludGVyIHtcblxuICAgICAgICAgICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICAgICAgICAgIGxldCBkZWxfaW5kZXggPSB0aGlzLmxvY2F0ZURlbGltaXRlcihyZWZfZGF0YSwgMClcblxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZXh0cmFjdE51bWJlcihyZWZfZGF0YSwgMCwgZGVsX2luZGV4KVxuICAgICAgICAgICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge29iajogaWQsIGdlbmVyYXRpb246IGdlbn1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAgICAgKiA8b2JqTnVtYmVyPiA8Z2VuZXJhdGlvbj4gb2JqXG4gICAgICAgICAqIDw8XG4gICAgICAgICAqICAgICAgLi4uXG4gICAgICAgICAqICAgICAgL1R5cGUgLzx0eXBlPlxuICAgICAgICAgKiAgICAgIC4uLlxuICAgICAgICAgKiA+PlxuICAgICAgICAgKlxuICAgICAgICAgKiBBcHByb2FjaDogV2UgaWRlbnRpZnkgYW4gaW5kZXggd2l0aGluIHRoZSBvYmplY3QgZGVmaW5pdG9uIHNlYXJjaCB0aGUgdW5pcXVlbHkgaWRlbnRpZnlhYmxlIGVuZCBvZiB0aGUgb2JqZWN0IGRlZmluaXRpb25cbiAgICAgICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgICAgICogKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3RCeVR5cGUgKGRhdGEgOiBJbnQ4QXJyYXksIF90eXBlIDogc3RyaW5nLCBvZmZzZXQgOiBudW1iZXIgPSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaFNlcXVlbmNlID0gdGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaSh0aGlzLlRZUEUgKyBfdHlwZSlcblxuICAgICAgICAgICAgICAgIGxldCBvYmpfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHNlYXJjaFNlcXVlbmNlLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgbGV0IG9ial9lbmQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpICsgNlxuXG4gICAgICAgICAgICAgICAgbGV0IG9ial9zdGFydCA9IHRoaXMubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLk9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRpb24gPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIG9ial9zdGFydCAtIDEpXG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqX2lkID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhLCBnZW5lcmF0aW9uIC0gMSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnNsaWNlKG9ial9pZCwgb2JqX2VuZClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgdGhlIGFzY2lpIGVuY29kZWQgbnVtYmVyIG9mIHRoZSBQREYgZmlsZVxuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3ROdW1iZXIoZGF0YSA6IEludDhBcnJheSwgc3RhcnQgOiBudW1iZXIsIGVuZCA6IG51bWJlciA9IC0xKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgc3RhcnQpXG5cbiAgICAgICAgICAgICAgICBpZiAoLTEgPT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBzdGFydClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RyX2lkID0gXCJcIlxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSBzdHJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ291bGQgbm90IHBhcnNlIG51bWJlciBhdCBwb3NpdGlvbiBcIiArIHN0YXJ0KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiArc3RyX2lkXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFrZXMgYXMgYXJndW1lbnQgYW4gYXJyYXkgb2YgcmVmZXJlbmNlcyBhbmQgcmV0dXJucyB0aG9zZSB0eXBlZFxuICAgICAgICAgKiAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UgKGFycmF5X3NlcXVlbmNlIDogSW50OEFycmF5KSA6IFJlZmVyZW5jZVBvaW50ZXJbXSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlZnMgOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheV9zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnMucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChhcnJheV9zZXF1ZW5jZSwgaSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlIsIGFycmF5X3NlcXVlbmNlLCBpLCB0cnVlKSArIDJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmc1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBkYXRlIGludG8gUERGIGZvcm1hdHRpbmdcbiAgICAgICAgICogKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGF0ZVRvUERGRGF0ZSAoZGF0ZSA6IERhdGUpIDogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZV9zdHIgPSBcIihEOlwiXG4gICAgICAgICAgICAgICAgZGF0ZV9zdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoIDogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAgICAgZGF0ZV9zdHIgKz0gKG1vbnRoLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1vbnRoXG4gICAgICAgICAgICAgICAgbGV0IGRheSA6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgICAgICBkYXRlX3N0ciArPSAoZGF5Lmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGRheVxuICAgICAgICAgICAgICAgIGxldCBob3VycyA6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAgICAgZGF0ZV9zdHIgKz0gKGhvdXJzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGhvdXJzXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgZGF0ZV9zdHIgKz0gKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbWludXRlc1xuICAgICAgICAgICAgICAgIGxldCBzZWNvbmRzIDogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKVxuICAgICAgICAgICAgICAgIGRhdGVfc3RyICs9IChzZWNvbmRzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIHNlY29uZHNcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZV9zdHIgKyBcIilcIlxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBjb252ZXJ0QXNjaWlUb1N0cmluZyAodmFsIDogbnVtYmVyW10pIDogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0IDogc3RyaW5nID0gXCJcIlxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZhbFtpXSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogdGFrZXMgYSBudW1iZXIgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgaXRzIGNoYXIgcmVwcmVzZW50YXRpb25zXG4gICAgICAgICAqICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29udmVydE51bWJlclRvQ2hhckFycmF5IChuYnIgOiBudW1iZXIgfCBzdHJpbmcpIDogbnVtYmVyW10ge1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFN0cmluZyhuYnIpKVxuICAgICAgICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgQ2FyZXRBbm5vdGF0aW9uLCBBbm5vdGF0aW9uLCBNYXJrdXBBbm5vdGF0aW9uLCBUZXh0TWFya3VwQW5ub3RhdGlvbiwgUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbiwgU3RhbXBBbm5vdGF0aW9uIH0gZnJvbSAnLi9hbm5vdGF0aW9uJ1xuaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciwgUERGRG9jdW1lbnRQYXJzZXIsIFBhZ2UgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFhSZWYgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknXG5cbi8qKlxuICogQ3JlYXRzIHRoZSBieXRlIGFycmF5IHRoYXQgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBXcml0ZXIge1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTiA6IG51bWJlciA9IDExMFxuICAgICAgICBwdWJsaWMgc3RhdGljIEYgOiBudW1iZXIgPSAxMDJcblxuICAgICAgICBwdWJsaWMgc3RhdGljIFNQQUNFIDogbnVtYmVyID0gMzJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDUiA6IG51bWJlciA9IDEzXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTEYgOiBudW1iZXIgPSAxMFxuICAgICAgICBwdWJsaWMgc3RhdGljIFIgOiBudW1iZXIgPSA4MlxuICAgICAgICBwdWJsaWMgc3RhdGljIE9CSiA6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl1cbiAgICAgICAgcHVibGljIHN0YXRpYyBFTkRPQkogOiBudW1iZXJbXSA9IFsxMDEsIDExMCwgMTAwLCAxMTEsIDk4LCAxMDZdXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQgOiBudW1iZXIgPSA5MVxuICAgICAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORCA6IG51bWJlciA9IDkzXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVCA6IG51bWJlcltdID0gWzYwLCA2MF1cbiAgICAgICAgcHVibGljIHN0YXRpYyBESUNUX0VORCA6IG51bWJlcltdID0gWzYyLCA2Ml1cbiAgICAgICAgcHVibGljIHN0YXRpYyBUWVBFX0FOTk9UIDogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxLCBXcml0ZXIuU1BBQ0UsIDQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XVxuICAgICAgICBwdWJsaWMgc3RhdGljIFJFQ1QgOiBudW1iZXJbXSA9IFs0NywgODIsIDEwMSwgOTksIDExNl1cbiAgICAgICAgcHVibGljIHN0YXRpYyBTVUJUWVBFOiBudW1iZXJbXSA9IFs0NywgODMsIDExNywgOTgsIDExNiwgMTIxLCAxMTIsIDEwMV1cbiAgICAgICAgcHVibGljIHN0YXRpYyBVUERBVEVfREFURSA6IG51bWJlcltdID0gWzQ3LCA3N10gLy8gPSAnL00nXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQVVUSE9SIDogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyA9ICcvVCdcbiAgICAgICAgcHVibGljIHN0YXRpYyBDT05URU5UUyA6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTAsIDExNiwgMTAxLCAxMTAsIDExNiwgMTE1XSAvLyA9ICcvQ29udGVudHMnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9TVEFSVCA6IG51bWJlciA9IDQwXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9FTkQgOiBudW1iZXIgPSA0MVxuICAgICAgICBwdWJsaWMgc3RhdGljIEZMQUcgOiBudW1iZXJbXSA9IFs0NywgNzBdIC8vID0gJy9GJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIElEIDogbnVtYmVyW10gPSBbNDcsIDc4LCA3N10gLy8gPSAnL05NJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIENPTE9SIDogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyA9ICcvQydcbiAgICAgICAgcHVibGljIHN0YXRpYyBPUEFDSVRZIDogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gPSAnL0NBJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIEJPUkRFUiA6IG51bWJlcltdID0gWzQ3LCA2NiwgMTExLCAxMTQsIDEwMCwgMTAxLCAxMTRdIC8vID0gJy9Cb3JkZXInXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUEFHRV9SRUZFUkVOQ0UgOiBudW1iZXJbXSA9IFs0NywgODBdIC8vID0gJy9QJ1xuXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVFJBSUxFUiA6IG51bWJlcltdID0gWzExNiwgMTE0LCA5NywgMTA1LCAxMDgsIDEwMSwgMTE0XSAvLyA9ICd0cmFpbGVyJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIFNJWkUgOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vID0gJy9TaXplJ1xuICAgICAgICBwdWJsaWMgc3RhdGljIFJPT1QgOiBudW1iZXJbXSA9IFs0NywgODIsIDExMSwgMTExLCAxMTZdIC8vID0gJy9Sb290J1xuICAgICAgICBwdWJsaWMgc3RhdGljIFBSRVYgOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vID0nL1ByZXYnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU1RBUlRYUkVGIDogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRU9GIDogbnVtYmVyW10gPSBbMzcsIDM3LCA2OSwgNzksIDcwXSAvLyA9ICclJUVPRidcblxuICAgICAgICBwdWJsaWMgc3RhdGljIFhSRUYgOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBRVUFEUE9JTlRTIDogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL1F1YWRQb2ludHMnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVkVSVElDRVMgOiBudW1iZXJbXSA9IFs0NywgODYsIDEwMSwgMTE0LCAxMTYsIDEwNSwgOTksIDEwMSwgMTE1XSAvLyA9ICcvVmVydGljZXMnXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTkFNRSA6IG51bWJlcltdID0gWzQ3LCA3OCwgOTcsIDEwOSwgMTAxXSAvLyA9ICcvTmFtZSdcbiAgICAgICAgcHVibGljIHN0YXRpYyBEUkFGVCA6IG51bWJlcltdID0gWzQ3LCA2OCwgMTE0LCA5NywgMTAyLCAxMTZdIC8vID0gJy9EcmFmdCdcblxuICAgICAgICBwdWJsaWMgc3RhdGljIFNZIDogbnVtYmVyW10gPSBbNDcsIDgzLCAxMjFdIC8vID0gJy9TeSdcbiAgICAgICAgcHVibGljIHN0YXRpYyBQIDogbnVtYmVyID0gODBcblxuICAgICAgICAvKipcbiAgICAgICAgICogSG9sZHMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAgICAgKiAqL1xuICAgICAgICBwcml2YXRlIHhyZWZzIDogWFJlZltdID0gW11cblxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YSA6IFRoZSBkYXRhIHJlcHJlc2VudGluZyB0aGUgb3JpZ2luYWwgUERGIGRvY3VtZW50XG4gICAgICAgICAqIGFhbm5vdGF0aW9ucyA6IFRoZSBhbm5vdGF0aW9ucyB0byBhZGQgdG8gdGhlIGRvY3VtZW50XG4gICAgICAgICAqICovXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXksIHByaXZhdGUgYW5ub3RhdGlvbnMgOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgcGFyc2VyIDogUERGRG9jdW1lbnRQYXJzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgSW50OEFycmF5KGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU29ydHMgdGhlIGFubm90YXRpb25zIHBhZ2V3aXNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBzaW5jZSB0aGUgYW5ub3RhdGlvbiBhcnJheXMgb2YgdGhlIHNpdGVzIG11c3QgYmUgZXh0ZW5kZWRcbiAgICAgICAgICogYW5kIGl0IG1ha2VzIHNlbnNlIHRvIGRvIHRoaXMgdXBkYXRlIGluIG9uZSBzdGVwLlxuICAgICAgICAgKiAqL1xuICAgICAgICBzb3J0UGFnZVdpc2UgKGFubm90YXRpb25zIDogQW5ub3RhdGlvbltdKSA6IHtbaXRlbSA6IG51bWJlcl0gOiBBbm5vdGF0aW9uW119IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUFubm90cyA6IHtbaXRlbSA6IG51bWJlcl0gOiBBbm5vdGF0aW9uW119ID0ge31cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGFubm90IG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2VBbm5vdHNbYW5ub3QucGFnZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHNbYW5ub3QucGFnZV0gPSBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VBbm5vdHNcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgYSByZWZlcmVuY2UgcG9pbnRlclxuICAgICAgICAgKlxuICAgICAgICAgKiA8b2JqX2lkPiA8Z2VuZXJhdGlvbj4gUlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgJ1InIGFuZCB0aGUgcHJlY2VkaW5nIHNwYWNlIGlzIG9ubHkgd3JpdHRlbiBpbiBjYXNlICdyZWZlcmVuY2VkJyBpcyB0cnVlXG4gICAgICAgICAqICovXG4gICAgICAgIHdyaXRlUmVmZXJlbmNlUG9pbnRlciAocmVmIDogUmVmZXJlbmNlUG9pbnRlciwgcmVmZXJlbmNlZCA6IGJvb2xlYW4gPSBmYWxzZSkgOiBudW1iZXJbXSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA6IG51bWJlcltdID0gVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocmVmLm9iailcblxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocmVmLmdlbmVyYXRpb24pKVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0IHJldHVybnMgdGhlIG9iamVjdCBleHRlbmRlZCB3aXRoIHRoZSAvQW5ub3QgZW50cnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIHB0ciA6IFBvaW50ZXIgdG8gdGhlIHBhZ2Ugb2JqZWN0XG4gICAgICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgICAgICogKi9cbiAgICAgICAgYWRhcHRQYWdlT2JqZWN0IChwYWdlIDogUGFnZSwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlIDogUmVmZXJlbmNlUG9pbnRlcikgOiBudW1iZXJbXSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJldCA6IG51bWJlcltdID0gW11cbiAgICAgICAgICAgICAgICBsZXQgbG9va3VwVGFibGUgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VfcHRyIDogWFJlZiA9IGxvb2t1cFRhYmxlW3BhZ2Uub2JqZWN0X2lkLm9ial1cblxuICAgICAgICAgICAgICAgIGxldCBwdHJfb2JqZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwYWdlX3B0ci5wb2ludGVyLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHBhZ2VfcHRyLnBvaW50ZXIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX2RpY3RfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkRJQ1RfRU5ELCBvYmplY3RfZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIHJldCA9IEFycmF5LmZyb20ob2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2RpY3RfZW5kKSlcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90X2FycmF5X3JlZmVyZW5jZSwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KEFycmF5LmZyb20ob2JqZWN0X2RhdGEuc2xpY2UocHRyX2RpY3RfZW5kLCBvYmplY3RfZGF0YS5sZW5ndGgpKSlcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIHRoZSBhbm5vdGF0aW9ucyBvZiA+Pm9uZTw8IHBhZ2UgYW5kIGRlcml2ZXMgdGhlIGFubm90YXRpb25zIGFycmF5IGZyb20gaXQuXG4gICAgICAgICAqIFRoZXJlYnkgaXQgYWxzbyBjb25zaWRlcnMgdGhlIHBvdGVudGlhbGx5IGV4aXN0aW5nIGFubm90YXRpb24gYXJyYXkuXG4gICAgICAgICAqICovXG4gICAgICAgIHdyaXRlQW5ub3RBcnJheSAoYW5ub3RzIDogQW5ub3RhdGlvbltdKSA6IHsgcHRyIDogUmVmZXJlbmNlUG9pbnRlciwgZGF0YSA6IG51bWJlcltdLCBwYWdlUmVmZXJlbmNlIDogUmVmZXJlbmNlUG9pbnRlciwgcGFnZURhdGEgOiBudW1iZXJbXSB9IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IGFubm90c1swXS5wYWdlUmVmZXJlbmNlXG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmZXJlbmNlcyA6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4geyByZXR1cm4geC5vYmplY3RfaWQgfSApKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZkFycmF5X2lkID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZV9kYXRhIDogbnVtYmVyW10gPSBbXVxuICAgICAgICAgICAgICAgIGlmICghcmVmQXJyYXlfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkFycmF5X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfZGF0YSA9IHRoaXMuYWRhcHRQYWdlT2JqZWN0KHBhZ2UsIHJlZkFycmF5X2lkKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCByZXQgOiBudW1iZXJbXSA9IHRoaXMud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9TVEFSVClcblxuXG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIHJldHVybiB7cHRyIDogcmVmQXJyYXlfaWQsIGRhdGEgOiByZXQsIHBhZ2VSZWZlcmVuY2UgOiBwYWdlLm9iamVjdF9pZCwgcGFnZURhdGEgOiBwYWdlX2RhdGF9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgYSBzdWJ0eXBlIHRvIGl0cyBieXRlIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAqICovXG4gICAgICAgIGNvbnZlcnRTdWJ0eXBlICggc3QgOiBzdHJpbmcgKSA6IG51bWJlcltdIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9UZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9UZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9IaWdobGlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MiwgMTA1LCAxMDMsIDEwNCwgMTA4LCAxMDUsIDEwMywgMTA0LCAxMTZdIC8vID0gJy9IaWdobGlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdVbmRlcmxpbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnL1VuZGVybGluZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg1LCAxMTAsIDEwMCwgMTAxLCAxMTQsIDEwOCwgMTA1LCAxMTAsIDEwMV0gLy8gPSAnL1VuZGVybGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NxdWlnZ2x5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9TcXVpZ2dseSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgMTA1LCAxMDMsIDEwMywgMTA4LCAxMjFdIC8vID0gJy9TcXVpZ2dseSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0cmlrZU91dCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvU3RyaWtlT3V0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgMTE0LCAxMDUsIDEwNywgMTAxLCA3OSwgMTE3LCAxMTZdIC8vID0gJy9TdHJpa2VPdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTcXVhcmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnL1NxdWFyZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgOTcsIDExNCwgMTAxXSAvLyA9ICcvU3F1YXJlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2lyY2xlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9DaXJjbGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgMTA1LCAxMTQsIDk5LCAxMDgsIDEwMV0gLy8gPSAnL0NpcmNsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZyZWVUZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9GcmVlVGV4dCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcwLCAxMTQsIDEwMSwgMTAxLCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL0ZyZWVUZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvUG9seWdvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCAxMDMsIDExMSwgMTEwXSAvLyA9ICcvUG9seWdvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BvbHlMaW5lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy9Qb2x5TGluZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCA3NiwgMTA1LCAxMTAsIDEwMV0gLy8gJy9Qb2x5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3RhbXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnL1N0YW1wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgOTcsIDEwOSwgMTEyXSAvLyA9ICcvU3RhbXAnXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdDYXJldCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvQ2FyZXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgOTcsIDExNCwgMTAxLCAxMTZdIC8vID0gJy9DYXJldCdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgYSBqYXZhc2NyaXB0IG51bWJlciBhcnJheSB0byBhIFBERiBudW1iZXIgYXJyYXlcbiAgICAgICAgICogKi9cbiAgICAgICAgd3JpdGVOdW1iZXJBcnJheSAoYXJyYXkgOiBudW1iZXJbXSkgOiBudW1iZXJbXSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA6IG51bWJlcltdID0gW1dyaXRlci5BUlJBWV9TVEFSVF1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgYW4gYW5ub3RhdGlvbiBvYmplY3RcbiAgICAgICAgICogKi9cbiAgICAgICAgd3JpdGVBbm5vdGF0aW9uT2JqZWN0IChhbm5vdCA6IEFubm90YXRpb24gKSA6IHsgcHRyIDogUmVmZXJlbmNlUG9pbnRlciwgZGF0YSA6IG51bWJlcltdIH0ge1xuICAgICAgICAgICAgICAgIGlmICghYW5ub3QuYXV0aG9yIHx8IFwiXCIgPT09IGFubm90LmF1dGhvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gYXV0aG9yIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAoIWFubm90LmNvbnRlbnRzIHx8IFwiXCIgPT09IGFubm90LmNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBjb250ZW50IHByb3ZpZGVkXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmV0IDogbnVtYmVyW10gPSB0aGlzLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9TVEFSVClcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5UWVBFX0FOTk9UKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIGlmIChhbm5vdC5yZWN0ICYmIGFubm90LnJlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUkVDVClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZU51bWJlckFycmF5KGFubm90LnJlY3QpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNVQlRZUEUpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy5jb252ZXJ0U3VidHlwZShhbm5vdC50eXBlKSlcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5VUERBVEVfREFURSlcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LnVwZGF0ZURhdGUpKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkFVVEhPUilcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmF1dGhvcikpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIGlmIChhbm5vdC5jb250ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09OVEVOVFMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5jb250ZW50cykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSUQpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5pZCkpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgICAgICAgICAgaWYgKGFubm90LmFubm90YXRpb25fZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRkxBRylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5yID4gMSkgYW5ub3QuY29sb3IuciAvPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5nID4gMSkgYW5ub3QuY29sb3IuZyAvPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5iID4gMSkgYW5ub3QuY29sb3IuYiAvPSAyNTVcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09MT1IpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuY29sb3IuciwgYW5ub3QuY29sb3IuZywgYW5ub3QuY29sb3IuYl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAoPE1hcmt1cEFubm90YXRpb24+YW5ub3QpLm9wYWNpdHlcbiAgICAgICAgICAgICAgICBpZiAob3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT1BBQ0lUWSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkob3BhY2l0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFubm90LmJvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQk9SREVSKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmJvcmRlci5ob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci52ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIuYm9yZGVyX3dpZHRoXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QQUdFX1JFRkVSRU5DRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQsIHRydWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgoPFRleHRNYXJrdXBBbm5vdGF0aW9uPmFubm90KS5RdWFkUG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5RVUFEUE9JTlRTKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlTnVtYmVyQXJyYXkoKDxUZXh0TWFya3VwQW5ub3RhdGlvbj5hbm5vdCkuUXVhZFBvaW50cykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCg8UG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbj5hbm5vdCkudmVydGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlZFUlRJQ0VTKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlTnVtYmVyQXJyYXkoKDxQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uPmFubm90KS52ZXJ0aWNlcykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCg8U3RhbXBBbm5vdGF0aW9uPmFubm90KS5zdGFtcFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk5BTUUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5EUkFGVClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKDxDYXJldEFubm90YXRpb24+YW5ub3QpLmNhcmV0U3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TWSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5QKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIHJldHVybiB7cHRyIDogYW5ub3Qub2JqZWN0X2lkLCBkYXRhIDogcmV0fVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIGFsbCB0aGUgY3Jvc3Mgc2l0ZSByZWZlcmVuY2UgdGFibGUgZW50cmllcyBhbmQgZXh0cmFjdHMgdGhlIGNvbnNlY3V0aXZlIHNlcXVlbmNlc1xuICAgICAgICAgKiAqL1xuICAgICAgICBjb21wdXRlWHJlZlNlcXVlbmNlcygpIDogWFJlZltdW10ge1xuICAgICAgICAgICAgICAgIGxldCBzZXFzIDogWFJlZltdW10gPSBbXVxuXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyZWRfeHJlZnMgPSB0aGlzLnhyZWZzLnNvcnQoKGEsYikgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5pZCA+IGIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgc2VxIDogWFJlZltdID0gW29yZGVyZWRfeHJlZnNbMF1dXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzWzBdLmlkXG4gICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9yZGVyZWRfeHJlZnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3JkZXJlZF94cmVmc1tpXS5pZCA9PT0gbGFzdF9pZCArIDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcS5wdXNoKG9yZGVyZWRfeHJlZnNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXEgPSBbb3JkZXJlZF94cmVmc1tpXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzW2ldLmlkXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHByZWNlZGluZyB6ZXJvcyAoMCkgaW4gZnJvbnQgb2YgdGhlICd2YWx1ZScgdG8gbWF0Y2ggdGhlIGxlbmd0aFxuICAgICAgICAgKiAqL1xuICAgICAgICBwYWQobGVuZ3RoIDogbnVtYmVyLCB2YWx1ZSA6IHN0cmluZyB8IG51bWJlcikgOiBudW1iZXJbXSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmV0IDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goNDgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh2YWx1ZSkpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGVzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgICAgICogKi9cbiAgICAgICAgd3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSAoKSA6IG51bWJlcltdIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0IDogbnVtYmVyW10gPSBXcml0ZXIuWFJFRlxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgICAgICAvLyB3cml0ZSBmcmVlIG9iamVjdCBoZWFkXG4gICAgICAgICAgICAgICAgbGV0IGhlYWQgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkucmVmc1swXVxuICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaChoZWFkKVxuXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyZWRfc2VxdWVuY2VzID0gdGhpcy5jb21wdXRlWHJlZlNlcXVlbmNlcygpXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZXF1ZW5jZSBvZiBvcmRlcmVkX3NlcXVlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZCA9IHNlcXVlbmNlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGhlYWQuaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShzZXF1ZW5jZS5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfcmV0IDogbnVtYmVyW10gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQodGhpcy5wYWQoMTAsIHNlcXVlbmNlW2ldLnBvaW50ZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQodGhpcy5wYWQoNSwgc2VxdWVuY2VbaV0uZ2VuZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLmZyZWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5GKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS51cGRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5OKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9yZXQubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJYUmVmIGVudHJ5IDwgMjAgYnl0ZXNcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KF9yZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlcyB0aGUgdHJhaWxlclxuICAgICAgICAgKiAqL1xuICAgICAgICB3cml0ZVRyYWlsZXIgKHBvc1hyZWYgOiBudW1iZXIpIDogbnVtYmVyW10ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgOiBudW1iZXJbXSA9IFdyaXRlci5UUkFJTEVSXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU0laRSlcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkudHJhaWxlclNpemUpKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXJcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ST09UKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMud3JpdGVSZWZlcmVuY2VQb2ludGVyKHRyYWlsZXIucm9vdCwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUFJFVilcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkuc3RhcnRfcG9pbnRlcikpXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNUQVJUWFJFRilcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShwb3NYcmVmKSlcbiAgICAgICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVPRilcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZXMgdGhlIGFubmF0aW9ucyBhdCB0aGUgZW5kIG9mIHRoZSBQREYgYnl0ZSByZXByZXNlbnRhdGlvbiBhbmQgcmV0dXJuc1xuICAgICAgICAgKiB0aGUgYnl0ZSBhcnJheVxuICAgICAgICAgKiAqL1xuICAgICAgICB3cml0ZSAoKSA6IEludDhBcnJheSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkID0gdGhpcy5zb3J0UGFnZVdpc2UodGhpcy5hbm5vdGF0aW9ucylcblxuICAgICAgICAgICAgICAgIGxldCBwdHIgOiBudW1iZXIgPSB0aGlzLmRhdGEubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3X2RhdGEgOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzID0gcGFnZVdpc2VTb3J0ZWRba2V5XVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5ub3RfYXJyYXkgPSB0aGlzLndyaXRlQW5ub3RBcnJheShwYWdlQW5ub3RzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBhbm5vdF9hcnJheS5wdHIub2JqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyIDogcHRyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uIDogYW5ub3RfYXJyYXkucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBhbm5vdF9hcnJheS5wYWdlUmVmZXJlbmNlLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyIDogcHRyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb24gOiBhbm5vdF9hcnJheS5wYWdlUmVmZXJlbmNlLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgcGFnZUFubm90cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5ub3Rfb2JqID0gdGhpcy53cml0ZUFubm90YXRpb25PYmplY3QoYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBhbm5vdF9vYmoucHRyLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyIDogcHRyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb24gOiBhbm5vdF9vYmoucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9vYmouZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHRyICs9IGFubm90X29iai5kYXRhLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBjcnRhYmxlID0gdGhpcy53cml0ZUNyb3NzU2l0ZVJlZmVyZW5jZVRhYmxlKClcbiAgICAgICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgICAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLndyaXRlVHJhaWxlcihwdHIpXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQodHJhaWxlcilcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcobmV3X2RhdGEpKVxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld19kYXRhX2FycmF5ID0gbmV3IEludDhBcnJheShuZXdfZGF0YSlcblxuICAgICAgICAgICAgICAgIGxldCByZXRfYXJyYXkgPSBuZXcgSW50OEFycmF5KHRoaXMuZGF0YS5sZW5ndGggKyBuZXdfZGF0YV9hcnJheS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0X2FycmF5LnNldCh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgcmV0X2FycmF5LnNldChuZXdfZGF0YSwgdGhpcy5kYXRhLmxlbmd0aClcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRfYXJyYXlcbiAgICAgICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==