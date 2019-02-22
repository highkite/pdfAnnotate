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
        let annot = new parser_1.Annotation();
        annot.type = "/Annot",
            annot.page = page,
            annot.object_id = this.parser.getFreeObjectId(),
            annot.id = this.generateUniqueIdentifier(),
            annot.rect = rect,
            annot.author = author,
            annot.pageReference = this.parser.getPage(page),
            annot.updateDate = util_1.Util.convertDateToPDFDate(new Date()),
            annot.contents = contents,
            annot.border = this.createDefaultBorder();
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
    createTextMarkupAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        if (0 === quadPoints.length)
            quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]];
        else {
            if (quadPoints.length % 8 !== 0)
                throw Error(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`);
        }
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            quadPoints: quadPoints
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
    createHighlightAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Highlight", color, quadPoints);
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
    createUnderlineAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Underline", color, quadPoints);
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
    createSquigglyAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Squiggly", color, quadPoints);
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
    createStrikeOutAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/StrikeOut", color, quadPoints);
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
            textAlignment: "right-justified",
            defaultAppearance: "/Invalid_font 9 Tf"
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
    createSquareAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
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
    createCircleAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
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
    /**
     * Returns a promise with the resul of all annotations that are part of the document. This will
     * comprise those that are already exists and those that were created using this library
     * */
    getAnnotations() {
        return new Promise((resolve) => {
            let existingAnnots = this.parser.extractAnnotations();
            for (let newAnnot of this.annotations) {
                existingAnnots[newAnnot.page].push(newAnnot);
            }
            resolve(existingAnnots);
        });
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
class Annotation {
    constructor(data = new Int8Array([])) {
        this.data = data;
        this.page = -1; // the target page of the annotation
        this.type = ""; // the sub type of the array (Text, Highlight, ...)
        this.object_id = null; // an unused object id
        this.id = ""; // unique annation identifier
        this.rect = []; // the location of the annotation
        this.author = ""; // the author of the annotation
        this.pageReference = null; // The reference to the page object to which the annotation is added
        this.updateDate = ""; // The date when the annotation was created or updated
        this.border = null; // define the border
        this.color = null; // the color set
    }
    /**
     * Extract the annotation object (partially)
     * */
    extract(ptr) {
        // restrict the data array to the partition that actually contains the annotation data
        let obj_end_ptr = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, ptr, true);
        this.data = this.data.slice(ptr, obj_end_ptr);
        this.object_id = util_1.Util.extractObjectId(this.data, 0);
        this.type = "/" + util_1.Util.extractField(this.data, util_1.Util.SUBTYPE);
        this.rect = util_1.Util.extractField(this.data, util_1.Util.RECT);
        this.pageReference = util_1.Util.extractField(this.data, util_1.Util.P);
        this.updateDate = util_1.Util.extractField(this.data, util_1.Util.M);
        this.border = util_1.Util.extractField(this.data, util_1.Util.BORDER);
        this.color = util_1.Util.extractField(this.data, util_1.Util.C);
        this.author = util_1.Util.extractField(this.data, util_1.Util.T);
        this.id = util_1.Util.extractField(this.data, util_1.Util.NM);
        this.contents = util_1.Util.extractField(this.data, util_1.Util.CONTENTS);
        this.quadPoints = util_1.Util.extractField(this.data, util_1.Util.QUADPOINTS);
        this.inkList = util_1.Util.extractField(this.data, util_1.Util.INKLIST);
    }
}
exports.Annotation = Annotation;
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
        let ptr_pages_key = util_1.Util.locateSequence(util_1.Util.PAGES, this.data, ptr, true) + util_1.Util.PAGES.length;
        this.pagesObjectId = util_1.Util.extractReferenceTyped(this.data, ptr_pages_key);
    }
    getPagesObjectId() {
        return this.pagesObjectId;
    }
}
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
        ptr = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, ptr, true);
        let _data = this.data.slice(xref.pointer, ptr);
        return (-1 !== util_1.Util.locateSequence(util_1.Util.PAGE, _data, 0, true));
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
                let kids_index = util_1.Util.locateSequence(util_1.Util.KIDS, this.data, ptr, true) + util_1.Util.KIDS.length;
                let array_data = util_1.Util.extractArraySequence(this.data, kids_index + 1);
                let refs = util_1.Util.extractReferencesFromArraySequence(array_data);
                this.extractPageReferences(refs);
            }
        }
    }
    /**
     * Extract the object data at the given pointer
     * */
    extract(ptr) {
        let key_index = util_1.Util.locateSequence(util_1.Util.COUNT, this.data, ptr, true) + util_1.Util.COUNT.length;
        // The complete page count is specified in the top level pagetree
        this.pageCount = util_1.Util.extractNumber(this.data, key_index);
        // it is possible that an object of type /Pages references again to objects of types /Pages so we must
        // apply a recursive evaluation
        let kids_index = util_1.Util.locateSequence(util_1.Util.KIDS, this.data, ptr, true) + util_1.Util.KIDS.length;
        let array_data = util_1.Util.extractArraySequence(this.data, kids_index + 1);
        this.pageReferences = [];
        let refs = util_1.Util.extractReferencesFromArraySequence(array_data);
        this.extractPageReferences(refs);
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
        let refs = util_1.Util.extractReferencesFromArraySequence(array_sequence);
        this.annots = refs;
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
        let end_ptr = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, ptr, true);
        let _data = this.data.slice(ptr, end_ptr);
        let annots_ptr = util_1.Util.locateSequence(util_1.Util.ANNOTS, _data, 0, true);
        if (-1 !== annots_ptr) {
            this.hasAnnotsField = true;
            annots_ptr += util_1.Util.ANNOTS.length + 1;
            annots_ptr = util_1.Util.skipDelimiter(_data, annots_ptr);
            if (_data[annots_ptr] === util_1.Util.ARRAY_START[0]) {
                let array_sequence = util_1.Util.extractArraySequence(_data, annots_ptr);
                let refs = util_1.Util.extractReferencesFromArraySequence(array_sequence);
                this.annots = refs;
            }
            else {
                this.annotsPointer = util_1.Util.extractReferenceTyped(_data, annots_ptr);
                this.extractAnnotationArray();
            }
        }
    }
}
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
    /**
     * Returns the annotations that exist in the document
     * */
    extractAnnotations() {
        let annots = [];
        let pt = this.getPageTree();
        let obj_table = this.documentHistory.createObjectLookupTable();
        let pageCount = pt.getPageCount();
        for (let i = 0; i < pageCount; ++i) {
            let page = this.getPage(i);
            let annotationReferences = page.annots;
            let pageAnnots = [];
            for (let refPtr of annotationReferences) {
                let a = new Annotation(this.data);
                a.extract(obj_table[refPtr.obj].pointer);
                a.page = i;
                pageAnnots.push(a);
            }
            annots.push(pageAnnots);
        }
        return annots;
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
     * Search the sequence in data starting at the offset
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
     * Search the sequence in data starting at the offset in reverse direction
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
     * array or a pointer within the array. If it is a nested array the pointer must mark the beginning
     * of the suberarray. Otherwise only the subarray is extracted
     * */
    static extractArraySequence(data, index) {
        let array_start = this.locateSequenceReversed(Util.ARRAY_START, data, index);
        if (-1 === array_start)
            array_start = index;
        let root_list = { ptr: array_start, lst: [] };
        let start_pointer = [root_list];
        for (let i = array_start + 1; i < data.length && start_pointer.length > 0;) {
            if (data[i] === Util.ARRAY_START[0]) {
                let _n = { ptr: i, lst: [] };
                start_pointer[start_pointer.length - 1].ptr = -1; // mark list as collection of other lists
                start_pointer.push(_n);
            }
            if (data[i] === Util.ARRAY_END[0]) {
                let sp = start_pointer.pop();
                if (undefined === sp) {
                    throw Error(`Missing start pointer ${JSON.stringify(sp)}`);
                }
                if (sp.ptr !== -1) {
                    let as_toAdd = data.slice(sp.ptr + 1, i);
                    if (start_pointer.length > 0) {
                        start_pointer[start_pointer.length - 1].lst.push(as_toAdd);
                    }
                    else {
                        return as_toAdd;
                    }
                }
                else if (sp.ptr === -1 && start_pointer.length > 0) {
                    start_pointer[start_pointer.length - 1].lst.push(sp.lst);
                }
            }
            i = Util.skipDelimiter(data, i + 1);
        }
        return root_list.lst;
    }
    static extractReferenceArrayRec(arraySeq) {
        if (arraySeq instanceof Int8Array) {
            return Util.extractReferencesFromArraySequence(arraySeq);
        }
        else {
            let nbr = [];
            for (let array_sequence of arraySeq) {
                nbr.push(Util.extractReferenceArrayRec(array_sequence));
            }
            return nbr;
        }
    }
    /**
     * Extracts the references in an array
     * */
    static extractReferenceArray(data, index) {
        let array_sequences = Util.extractArraySequence(data, index);
        return this.extractReferenceArrayRec(array_sequences);
    }
    static extractNumbersArrayRec(arraySeq) {
        if (arraySeq instanceof Int8Array) {
            let nbrs = [];
            let i = 0;
            while (i < arraySeq.length) {
                nbrs.push(Util.extractNumber(arraySeq, i));
                i = Util.locateDelimiter(arraySeq, i + 1) + 1;
                i = Util.skipDelimiter(arraySeq, i + 1);
            }
            return nbrs;
        }
        else {
            let nbr = [];
            for (let array_sequence of arraySeq) {
                nbr.push(this.extractNumbersArrayRec(array_sequence));
            }
            return nbr;
        }
    }
    /**
     * Extracts the numbers in an array
     * e.g.  [69.697 47.4148 96.4646 58.2598 ]
     * */
    static extractNumbersArray(data, index) {
        let array_sequences = Util.extractArraySequence(data, index);
        return this.extractNumbersArrayRec(array_sequences);
    }
    /**
     * Extract an object identifier
     * <ID> <GEN> obj
     * */
    static extractObjectId(data, index) {
        index = Util.skipDelimiter(data, index);
        let end_obj_ptr = Util.locateDelimiter(data, index + 1);
        let obj = Util.extractNumber(data, index, end_obj_ptr);
        let start_gen_ptr = Util.skipDelimiter(data, end_obj_ptr + 1);
        let end_gen_ptr = Util.locateDelimiter(data, start_gen_ptr + 1);
        let gen = Util.extractNumber(data, start_gen_ptr, end_gen_ptr);
        return { obj: obj, generation: gen };
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
     * Extracts array of numbers and arrays of references
     *
     * Mark that this function does not support arrays that contain different types, so either
     * it returns an array of references or an array of numbers. However the function supports
     * arbitrarily nesting of arrays.
     * */
    static extractArray(data, index) {
        for (let i = 0; i < data.length; ++i) {
            if (data[i] === Util.R[0]) { // 'R' -- we know it is an array of references
                return Util.extractReferenceArray(data, index);
            }
        }
        return Util.extractNumbersArray(data, index);
    }
    /**
     * Extratcs the string
     * */
    static extractString(data, index) {
        let string_start = Util.locateSequence(Util.STRING_START, data, 0);
        let string_end = Util.locateSequence(Util.STRING_END, data, 0);
        data = data.slice(string_start + 1, string_end);
        return Util.convertUnicodeToString(data);
    }
    /**
     * Returns the value of an option
     * /<option>
     *
     * so for instance for /Highlight it would return 'Highlight'
     *
     * The index must point to the "/"
     * */
    static extractOptionValue(data, index = 0) {
        if (data[index] !== 47)
            throw Error("misplaced option value pointer");
        let end = Util.locateDelimiter(data, index);
        return Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1)));
    }
    /**
     * Extracts the value of the given field.
     * */
    static extractField(data, field, ptr = 0) {
        // only check the fields of one object
        let start_obj_ptr = Util.locateSequence(Util.OBJ, data, ptr, true);
        let end_obj_ptr = Util.locateSequence(Util.ENDOBJ, data, start_obj_ptr, true);
        data = data.slice(start_obj_ptr, end_obj_ptr);
        let field_ptr = Util.locateSequence(field, data, 0, true);
        if (field_ptr === -1)
            return undefined;
        field_ptr += field.length;
        let field_value_end_ptr = Util.locateSequence([47], data, field_ptr); // '/' = 47
        if (field_value_end_ptr === field_ptr + 1) {
            return Util.extractOptionValue(data, field_value_end_ptr);
        }
        field_ptr = Util.skipDelimiter(data, field_ptr);
        let value_data = data.slice(field_ptr, field_value_end_ptr);
        for (let i = 0; i < value_data.length; ++i) {
            if (value_data[i] === Util.ARRAY_START[0] || value_data[i] === Util.ARRAY_END[0]) {
                // handle array
                return Util.extractArray(value_data, 0);
            }
            else if (value_data[i] === Util.STRING_START[0] || value_data[i] === Util.STRING_END[0]) {
                // handle string
                return Util.extractString(value_data, 0);
            }
            else if (value_data[i] === Util.R[0]) { // R
                // handle Reference
                return Util.extractReferenceTyped(value_data, 0);
            }
        }
        return Util.extractNumber(value_data, 0);
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
            throw Error(`Could not parse number at position ${start}`);
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
    /**
     * Converts a unicode sequence into a string
     * */
    static convertUnicodeToString(val) {
        if (val instanceof Int8Array)
            val = new Uint8Array(val);
        if (val[0] === 254 && val[1] === 255) {
            val = val.slice(2, val.length);
            let uintToString = (uintArray) => {
                let ret = "";
                for (let i = 0; i < uintArray.length - 1; i += 2) {
                    ret += String.fromCharCode((uintArray[i] << 8) | uintArray[i + 1] & 0xFF);
                }
                return ret;
            };
            let ret = uintToString(val);
            return ret;
        }
        // handle utf-8 compression
        let Utf8ArrayToStr = (array) => {
            let ret = "";
            let i = 0;
            while (i < array.length) {
                let char1 = array[i++];
                let char2;
                switch (char1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // one byte
                        ret += String.fromCharCode(char1);
                        break;
                    case 12:
                    case 13:
                        // two byte sequence
                        char2 = array[i++];
                        ret += String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F));
                        break;
                    case 14:
                        // three byte sequence
                        char2 = array[i++];
                        let char3 = array[i++];
                        ret += String.fromCharCode(((char1 & 0x0F) << 12) |
                            ((char2 & 0x3F) << 6) |
                            ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return ret;
        };
        let ret = Utf8ArrayToStr(Array.from(val));
        return ret;
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
Util._TYPE = [47, 84, 121, 112, 101]; // '/Type'
Util.OBJ = [111, 98, 106]; // 'obj'
Util.ENDOBJ = [101, 110, 100, 111, 98, 106]; // 'endobj'
Util.ARRAY_START = [91]; // '['
Util.ARRAY_END = [93]; // ']'
Util.STRING_START = [40]; // '('
Util.STRING_END = [41]; // ')'
Util.R = [82]; // 'R'
Util.ANNOT = [47, 65, 110, 110, 111, 116]; // '/Annot'
Util.ANNOTS = [47, 65, 110, 110, 111, 116, 115]; // '/Annot'
Util.DICT_START = [60, 60]; // '['
Util.DICT_END = [62, 62]; // ']'
Util.SUBTYPE = [47, 83, 117, 98, 116, 121, 112, 101]; // '/Subtype'
Util.PAGES = [47, 80, 97, 103, 101, 115]; // /Pages
Util.PAGE = [47, 80, 97, 103, 101];
Util.KIDS = [47, 75, 105, 100, 115];
Util.COUNT = [47, 67, 111, 117, 110, 116];
Util.RECT = [47, 82, 101, 99, 116];
Util.M = [47, 77]; // '/M'
Util.T = [47, 84]; // '/T'
Util.F = [47, 70]; // '/F'
Util.C = [47, 67]; // '/C'
Util.CA = [47, 67, 65]; // '/CA'
Util.NM = [47, 78, 77]; // '/NM'
Util.P = [47, 80]; // '/P'
Util.CONTENTS = [47, 67, 111, 110, 116, 101, 110, 116, 115]; // '/Contents'
Util.BORDER = [47, 66, 111, 114, 100, 101, 114]; // '/Border'
Util.QUADPOINTS = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115]; // '/QuadPoints'
Util.INKLIST = [47, 73, 110, 107, 76, 105, 115, 116]; // '/InkList'
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
        if (!page)
            throw Error("Missing page reference");
        if (!page.object_id)
            throw Error("Page without object id");
        let references = page.annots;
        references = references.concat(annots.map((x) => {
            if (!x.object_id)
                throw Error("Annotation with object_id null");
            return x.object_id;
        }));
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
        if (!annot.object_id)
            throw Error("No object_id");
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
        if (annot.defaultAppearance) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.DEFAULT_APPEARANCE);
            ret.push(Writer.SPACE);
            ret.push(Writer.BRACKET_START);
            ret = ret.concat(util_1.Util.convertStringToAscii(annot.defaultAppearance));
            ret.push(Writer.BRACKET_END);
            ret.push(Writer.SPACE);
        }
        if (!annot.pageReference)
            throw Error("No page reference");
        if (annot.pageReference.object_id) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.PAGE_REFERENCE);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeReferencePointer(annot.pageReference.object_id, true));
            ret.push(Writer.SPACE);
        }
        if (annot.quadPoints) {
            ret = ret.concat(Writer.QUADPOINTS);
            ret.push(Writer.SPACE);
            ret = ret.concat(this.writeNumberArray(annot.quadPoints));
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
Writer.DEFAULT_APPEARANCE = [47, 68, 65]; // = '/DA'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJC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LFFBQVEsR0FBRyxLQUFLO1FBQ3BCLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzlCLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUs7UUFDbEQsSUFBSSxHQUFHLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHO1FBQzlDLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztRQUNsRCxJQUFJLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU87UUFDdEQsSUFBSSxPQUFPLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPO1FBQ3RELE9BQU8sUUFBUSxHQUFHLEdBQUc7SUFDekIsQ0FBQztJQUVEOztTQUVLO0lBQ0Us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QUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUNoRSxlQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsTUFBTTtBQUN0QyxhQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsTUFBTTtBQUNwQyxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtBQUN2RSxVQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFNBQVM7QUFDdkQsU0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN2QyxTQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hDLFVBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzlDLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDdkMsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsT0FB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QUMsRUFBQyxZQUFZO0FBQ3BELFlBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtBQUUzRCxTQUFFLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDLFVBQVU7QUFDdkMsUUFBQyxHQUFXLEVBQUU7QUE5Q2hDLHdCQThsQkMiLCJmaWxlIjoicGRmQW5ub3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInBkZkFubm90YXRlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBkZkFubm90YXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBkZkFubm90YXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSwgQW5ub3RhdGlvbiwgQm9yZGVyLCBDb2xvciB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IFdyaXRlciB9IGZyb20gJy4vd3JpdGVyJ1xuXG4vKipcbiAqIFRoZSBhbm5vdGF0aW9uIGZhY3RvcnkgcHJvdmlkZXMgbWV0aG9kcyB0byBjcmVhdGUgYW5ub3RhdGlvbnMuIFRob3NlIGFyZSBzdG9yZWQgdGVtcG9yYXJ5XG4gKiBhbmQgdGhhbiBlbmNvZGVkIGludG8gUERGIGNvZGUgd2hlbiB0aGUgUERGIGRvY3VtZW50IGlzIG91dHB1dHRlZCBhbmQgZm9yIGluc3RhbmNlIGRvd25sb2FkZWQuXG4gKiBUaGF0XG4gKiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMucGFyc2VyID0gbmV3IFBERkRvY3VtZW50UGFyc2VyKHRoaXMuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYW5ub3RhdGlvbnMgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGdldEFubm90YXRpb25Db3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGEgUERGIGZpbGUgcmVmZXJlbmNlZCBieSB0aGUgZ2l2ZW4gJ3BhdGgnXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEFubm90YXRpb25GYWN0b3J5PigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IC8vIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICBmZXRjaChwYXRoKS50aGVuKChyKSA9PiByLmJsb2IoKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyOiBhbnkgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEFubm90YXRpb25GYWN0b3J5KHJlYWRlci5yZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSB7IC8vIG5vZGUgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vdCB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbnN1cHBvcnRlZCBlbnZpcm9ubWVudFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZGVudGlmaWVyIG5lY2Vzc2FyeSBmb3IgY3JlYXRpbmcgdGhlIGFubm90YXRpb25cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gXCIocGRmQW5ub3RhdGUtXCIgKyBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLnNsaWNlKDMsIDE3KSArIFwiLVwiICsgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggKyBcIilcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGRlZmF1bHQgYm9yZGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNyZWF0ZURlZmF1bHRCb3JkZXIoKTogQm9yZGVyIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXM6IDAsXG4gICAgICAgICAgICBob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXM6IDAsXG4gICAgICAgICAgICBib3JkZXJfd2lkdGg6IDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgbWFkZSBhbm5vdGF0aW9ucyBpbnRvIGEgYnl0ZXN0cmVhbVxuICAgICAqICovXG4gICAgd3JpdGUoKTogSW50OEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuXG4gICAgICAgIGxldCB3cml0ZXI6IFdyaXRlciA9IG5ldyBXcml0ZXIodGhpcy5kYXRhLCB0aGlzLmFubm90YXRpb25zLCB0aGlzLnBhcnNlcilcblxuICAgICAgICByZXR1cm4gd3JpdGVyLndyaXRlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlICdyZWN0JyBwYXJhbWV0ZXIsIHdoZXRoZXIgYWxsIHRoZSBlbnRyaWVzIGFyZSBvZiB0eXBlIG51bWJlciBhbmQgaWYgdGhlIHRoZSBudW1iZXIgb2YgZW50cmllcyBpcyBjb3JyZWN0XG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUmVjdChucjogbnVtYmVyLCByZWN0OiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocmVjdC5sZW5ndGggIT09IG5yKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWN0IGhhcyBpbnZhbGlkIG51bWJlciBvZiBlbnRyaWVzOiBcIiArIHJlY3QgKyBcIiBoYXMgXCIgKyByZWN0Lmxlbmd0aCArIFwiIGVudHJpZXMsIGJ1dCBzaG91bGQgaGF2ZSBcIiArIG5yICsgXCIgZW50cmllc1wiKVxuXG4gICAgICAgIHJlY3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgXCIgKyByZWN0ICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmFzZSBhbm5vdGF0aW9uIHRoYXQgbWVhbiB0aGUgcmF3IG9iamVjdCBvZiBhbm5vdGF0aW9uIG9yIHRob3NlIHBhcnRzIHRoYXQgYXJlIGFsbCBleGlzdGluZ1xuICAgICAqIGFuZCBlcXVhbGx5IHNldCBpbiBhbGwgdHlwZXMgb2YgYW5ub3RhdGlvbnNcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nKTogQW5ub3RhdGlvbiB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKClcbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0Fubm90XCIsXG4gICAgICAgICAgICBhbm5vdC5wYWdlID0gcGFnZSxcbiAgICAgICAgICAgIGFubm90Lm9iamVjdF9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpLFxuICAgICAgICAgICAgYW5ub3QuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgYW5ub3QucmVjdCA9IHJlY3QsXG4gICAgICAgICAgICBhbm5vdC5hdXRob3IgPSBhdXRob3IsXG4gICAgICAgICAgICBhbm5vdC5wYWdlUmVmZXJlbmNlID0gdGhpcy5wYXJzZXIuZ2V0UGFnZShwYWdlKSxcbiAgICAgICAgICAgIGFubm90LnVwZGF0ZURhdGUgPSBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBjb250ZW50cyxcbiAgICAgICAgICAgIGFubm90LmJvcmRlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEJvcmRlcigpXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgaWYgKCFjb250ZW50cyB8fCBcIlwiID09PSBjb250ZW50cylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gY29udGVudCBwcm92aWRlZFwiKVxuXG4gICAgICAgIGlmICghYXV0aG9yIHx8IFwiXCIgPT09IGF1dGhvcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gYXV0aG9yIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcblxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9UZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgbWFya3VwIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGlmICgwID09PSBxdWFkUG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHF1YWRQb2ludHMgPSBbcmVjdFswXSwgcmVjdFszXSwgcmVjdFsyXSwgcmVjdFszXSwgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFsxXV1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocXVhZFBvaW50cy5sZW5ndGggJSA4ICE9PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBRdWFkcG9pbnRzIGFycmF5IGhhcyBsZW5ndGggJHtxdWFkUG9pbnRzLmxlbmd0aH0gYnV0IG11c3QgYmUgYSBtdWx0aXBsZSBvZiA4YClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHF1YWRQb2ludHM6IHF1YWRQb2ludHNcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBoaWdobGlnaHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVIaWdobGlnaHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL0hpZ2hsaWdodFwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiB1bmRlcmxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVVbmRlcmxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1VuZGVybGluZVwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNxdWlnZ2xlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1aWdnbHlBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1NxdWlnZ2x5XCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RyaWtlIG91dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVN0cmlrZU91dEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3RyaWtlT3V0XCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZnJlZSB0ZXh0IGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlRnJlZVRleHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcInJpZ2h0LWp1c3RpZmllZFwiLFxuICAgICAgICAgICAgZGVmYXVsdEFwcGVhcmFuY2U6IFwiL0ludmFsaWRfZm9udCA5IFRmXCJcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvRnJlZVRleHRcIlxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICBjcmVhdGVMaW5lQW5ub3RhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNlIGFubm90YXRpb24gb2JqZWN0IG9mIGEgY2lyY2xlIGFuZCBzcXVhcmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBzdWJ0eXBlOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KTogQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IHN1YnR5cGVcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzcXVhcmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTcXVhcmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3F1YXJlXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY2lyY2xlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlQ2lyY2xlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL0NpcmNsZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzZSBvYmplY3Qgb2YgYSBwb2x5Z29uIG9yIHBvbHlsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiB2ZXJ0aWNlcyA6IHRoZSB2ZXJ0aWNlcyBkZWZpbmluZyB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIG9iamVjdFxuICAgICAqIHN1YnR5cDogUG9seWdvbiBvciBQb2x5TGluZVxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICB2ZXJ0aWNlczogdmVydGljZXNcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb2x5Z29uIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiB2ZXJ0aWNlcyA6IHRoZSB2ZXJ0aWNlcyBkZWZpbmluZyB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIG9iamVjdFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVQb2x5Z29uQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgdmVydGljZXMsIFwiL1BvbHlnb25cIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvbHlsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiB2ZXJ0aWNlcyA6IHRoZSB2ZXJ0aWNlcyBkZWZpbmluZyB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIG9iamVjdFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVQb2x5TGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5TGluZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0YW1wIGFubm90YXRpb24uIFRoZXJlIGV4aXN0cyBhIG51bWJlciBvZiBwcmVkaWZpbmVkIHN0YW1wcyB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byBQREYgZG9jdW1lbnRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3RhbXBUeXBlIDogdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RhbXBBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN0YW1wVHlwZTogc3RyaW5nID0gXCJEcmFmdFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFs1MCwgNTAsIDgwLCA4MF0sIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBzdGFtcFR5cGU6IHN0YW1wVHlwZVxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9TdGFtcFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB2aXN1YWwgc3ltYm9sIHRoYXQgaW5kY2F0ZXMgdGhlIGV4aXN0YW5jZSBvZiB0ZXh0IGVkaXRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY2FyZXRTeW1ib2wgOiBOb25lIG9yIFAsIHdpdGggUCBmb3IgdXNpbmcgdGhlIHBhcmFncmFwaCBzeW1ib2wgYXMgY2FyZXRcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlQ2FyZXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNhcmV0U3ltYm9sOiBzdHJpbmcgPSBcIlBcIiwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCBbXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNhcmV0U3ltYm9sOiBjYXJldFN5bWJvbFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9DYXJldFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlc3VsIG9mIGFsbCBhbm5vdGF0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gVGhpcyB3aWxsXG4gICAgICogY29tcHJpc2UgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBleGlzdHMgYW5kIHRob3NlIHRoYXQgd2VyZSBjcmVhdGVkIHVzaW5nIHRoaXMgbGlicmFyeVxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbnMoKTogUHJvbWlzZTxBbm5vdGF0aW9uW11bXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0Fubm90cyA9IHRoaXMucGFyc2VyLmV4dHJhY3RBbm5vdGF0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdBbm5vdCBvZiB0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbm5vdHNbbmV3QW5ub3QucGFnZV0ucHVzaChuZXdBbm5vdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZXhpc3RpbmdBbm5vdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlSW5rQW5ub3RhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICB9XG5cbiAgICBjcmVhdGVQb3B1cEFubm90YXRpb24oKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG93bmxvYWRzIHRoZSBleHRlbmRlZCBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICBsZXQgYTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICBsZXQgZXh0ZW5kZWRfcGRmID0gdGhpcy53cml0ZSgpXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2V4dGVuZGVkX3BkZl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgYS5ocmVmID0gdXJsXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgYS5yZW1vdmUoKVxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBYUmVmIHtcbiAgICAgICAgaWQgOiBudW1iZXJcbiAgICAgICAgcG9pbnRlciA6IG51bWJlclxuICAgICAgICBnZW5lcmF0aW9uIDogbnVtYmVyXG4gICAgICAgIGZyZWUgOiBib29sZWFuXG4gICAgICAgIHVwZGF0ZSA6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFN1YlNlY3Rpb25IZWFkZXIge1xuICAgICAgICBpZCA6IG51bWJlclxuICAgICAgICBjb3VudCA6IG51bWJlclxuICAgICAgICBlbmRfcHRyIDogbnVtYmVyIC8vIHBvaW50cyB0byB0aGUgZW5kIG9mIHRoZSBzdWIgc2VjdGlvbiBoZWFkZXJcbn1cblxuaW50ZXJmYWNlIFRyYWlsZXIge1xuICAgICAgICBzaXplIDogbnVtYmVyXG4gICAgICAgIHJvb3QgOiBSZWZlcmVuY2VQb2ludGVyXG4gICAgICAgIHByZXY/IDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TG9va3VwVGFibGUge1xuICAgICAgICBbaWQgOiBudW1iZXJdIDogWFJlZlxufVxuXG4vKipcbiAqIEhvbGRzIHRoZSBjb21wbGV0ZSBpbmZvcm1hdGlvbiBvZiBvbmUgdXBkYXRlIHNlY3Rpb24uIFRoYXQgY29tcHJpc2VzOlxuICogLSB0aGUgYm9keSB1cGRhdGVcbiAqIC0gdGhlIGNyb3NzaXN0ZSByZWZlcmVuY2UgdGFibGVcbiAqIC0gdGhlIHRyYWlsZXJcbiAqICovXG5leHBvcnQgY2xhc3MgVXBkYXRlU2VjdGlvbiB7XG4gICAgICAgIHB1YmxpYyByZWZzIDogWFJlZltdID0gW11cblxuICAgICAgICBwdWJsaWMgc3RhcnRfcG9pbnRlciA6IG51bWJlciA9IC0xXG5cbiAgICAgICAgcHVibGljIHRyYWlsZXIgOiBUcmFpbGVyID0geyBzaXplIDogLTEsIHJvb3QgOiB7b2JqIDogLTEsIGdlbmVyYXRpb246IC0xfX1cblxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTSVpFIDogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyAvU2l6ZVxuICAgICAgICBwcml2YXRlIHN0YXRpYyBST09UIDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyAvUm9vdFxuICAgICAgICBwcml2YXRlIHN0YXRpYyBQUkVWIDogbnVtYmVyW10gPSBbNDcsIDgwLCAxMTQsIDEwMSwgMTE4XSAvLyAvUHJldlxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTVEFSVFhSRUYgOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdXG5cbiAgICAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgZGF0YSA6IEludDhBcnJheSkgeyB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB3aXRoIHRoZSBnaXZlbiBpZFxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRSZWZlcmVuY2UgKGlkIDogbnVtYmVyKSA6IFhSZWYgIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgdGhpcy5yZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmLmlkID09PSBpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgaGVhZGVyIG9mIGEgc3ViIHNlY3Rpb24uIEZvciBpbnN0YW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiAwIDEgLy8gPC0tXG4gICAgICAgICAqIC4uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTbyB0aGUgb2JlamN0IGlkIDAgYW5kIHRoZSBudW1iZXIgb2Ygc3ViIHNlY3Rpb24gZW50cmllcyAxXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyIChpbmRleCA6IG51bWJlcikgOiBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICAgICAgICBsZXQgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICAgICAgICAgIGxldCBvYmpfaWQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyKVxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyICsgMSlcblxuICAgICAgICAgICAgICAgIGxldCBwdHJfcmVmX2NvdW50ID0gcHRyXG5cbiAgICAgICAgICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2VfY291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfcmVmX2NvdW50LCBwdHIpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZCA6IG9ial9pZCwgY291bnQgOiByZWZlcmVuY2VfY291bnQsIGVuZF9wdHIgOiAgcHRyfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIG9mIGEgc3ViIHNlY3Rpb24uIFRoZSBpbmRleCBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mXG4gICAgICAgICAqIHRoZSBmaXJzdCByZWZlcmVuY2UgYW5kIGNvdW50IHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiByZWZlcmVuY2VzIHRoYXQgYXJlXG4gICAgICAgICAqIGNvbnRhaW5lZCBpbiB0aGUgc3Vic2VjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZpcnN0X29iamVjdF9pZCBpcyB0aGUgaWQgcHJvdmlkZWQgaW4gdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxuICAgICAgICAgKlxuICAgICAgICAgKiBCeSBkZWZpbml0aW9uIG9mIHRoZSBQREYgc3RhbmRhcmQgb25lIGVudHJ5IGlzIDIwIGJ5dGVzIGxvbmdcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdFJlZmVyZW5jZXMgKCBpbmRleCA6IG51bWJlciwgY291bnQgOiBudW1iZXIsIGZpcnN0X29iamVjdF9pZCA6IG51bWJlcikgOiBYUmVmW10ge1xuICAgICAgICAgICAgICAgIGxldCBfcmVmcyA6IFhSZWZbXSA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2ksIGluZGV4ICs9IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHRyX2VuZF9wb2ludGVyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyX2VuZF9wb2ludGVyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHRyX2dlbl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9lbmRfcG9pbnRlciArIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdHJfZ2VuX2VuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydClcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRpb24gPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0LCBwdHJfZ2VuX2VuZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB0cl9mbGFnID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9lbmQgKyAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNGcmVlID0gdGhpcy5kYXRhW3B0cl9mbGFnXSA9PT0gMTAyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGZpcnN0X29iamVjdF9pZCArIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXIgOiBwb2ludGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uIDogZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJlZSA6IGlzRnJlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIDogIWlzRnJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZnNcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgdHJhaWxlciBvZiB0aGUgc3Vic2VjdGlvbiB0aGF0IG1lYW5zIHRoZSBwYXJ0IHN0YXRpbmcgd2l0aCB0aGUgJ3RyYWlsZXInIGtleXdvcmQgYW5kXG4gICAgICAgICAqIGluIHBhcnRpY3VsYXIgdGhlIHRyYWlsZXIgZGljdGlvbmFyeVxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0VHJhaWxlciAoaW5kZXggOiBudW1iZXIpIDogVHJhaWxlciB7XG4gICAgICAgICAgICAgICAgbGV0IGVuZF90cmFpbGVyX2luZGV4IDogbnVtYmVyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoaW5kZXgsIGVuZF90cmFpbGVyX2luZGV4KVxuICAgICAgICAgICAgICAgIGluZGV4ID0gMFxuXG4gICAgICAgICAgICAgICAgbGV0IHB0cl9zdGFydF9zaXplID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlNJWkUsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlNJWkUubGVuZ3RoXG4gICAgICAgICAgICAgICAgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG4gICAgICAgICAgICAgICAgbGV0IHNpemUgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUk9PVCwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFVwZGF0ZVNlY3Rpb24uUk9PVC5sZW5ndGhcbiAgICAgICAgICAgICAgICBwdHJfc3RhcnRfcm9vdCA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG4gICAgICAgICAgICAgICAgbGV0IHJvb3RfcmVmZXJlbmNlID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUFJFViwgX2RhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICAgICAgICAgIGxldCBwcmV2ID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKC0xICE9IHB0cl9zdGFydF9wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdHJfc3RhcnRfcHJldiA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3ByZXYgKyBVcGRhdGVTZWN0aW9uLlBSRVYubGVuZ3RoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICByb290IDogcm9vdF9yZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2IDogcHJldlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzZXMgdGhlIFVwZGF0ZSBzZWN0aW9uIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0IChpbmRleCA6IG51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfcG9pbnRlciA9IGluZGV4XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRfcHRyID0gaW5kZXggKyA1IC8vICsgbGVuZ3RoKHhyZWYpICsgYmxhbmtcbiAgICAgICAgICAgICAgICBzdGFydF9wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBzdGFydF9wdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgZmlyc3RfaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgICAgICAgICAvLyB0aGUgZmlyc3QgaGVhZGVyIG11c3QgYmUgMCB0byBlc3RhYmxpc2ggdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdF9oZWFkZXIuaWQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yIChcIkZpcnN0IG9iamVjdCBpZCBub3QgMFwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBmaXJzdF9oZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IGZpcnN0IHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQodGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGZpcnN0X2hlYWRlci5jb3VudCwgZmlyc3RfaGVhZGVyLmlkKSlcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgcmVtYWluaW5nIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBmaXJzdF9oZWFkZXIuY291bnQgKiAyMFxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZGF0YVtzdGFydF9wdHJdICE9PSAxMTYpIHsgLy8gMTE2ID0gJ3QnIHN0YXJ0IG9mIHRoZSB3b3JkIHRyYWlsZXIgdGhhdCBjb25jbHVkZXMgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2Ugc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoc3RhcnRfcHRyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBoZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2VzID0gdGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGhlYWRlci5jb3VudCwgaGVhZGVyLmlkKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHJlZmVyZW5jZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGhlYWRlci5jb3VudCAqIDIwXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFpbGVyID0gdGhpcy5leHRyYWN0VHJhaWxlcihzdGFydF9wdHIpXG4gICAgICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjb21wbGV0ZSBQREYgZG9jdW1lbnQgaGlzdG9yeSBhbmQgdGhlcmVmb3JlIGhvbGRzIHRoZVxuICogdXBkYXRlZCBib2R5IHBhcnRzLCB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZXMgYW5kIHRoZSBkb2N1bWVudCB0cmFpbGVyc1xuICogKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudEhpc3Rvcnkge1xuICAgICAgICBwdWJsaWMgdXBkYXRlcyA6IFVwZGF0ZVNlY3Rpb25bXSA9IFtdXG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU1RBUlRYUkVGIDogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG5cbiAgICAgICAgcHVibGljIHRyYWlsZXJTaXplIDogbnVtYmVyID0gLTFcblxuICAgICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRhIDogSW50OEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSB1cGRhdGUgc2VjdGlvbiBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdFVwZGF0ZVNlY3Rpb24gKGluZGV4IDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZVNlY3Rpb24gPSBuZXcgVXBkYXRlU2VjdGlvbih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VjdGlvbi5leHRyYWN0KGluZGV4KVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVzLnB1c2godXBkYXRlU2VjdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgbGFzdCB1cGRhdGUgc2VjdGlvbiBvZiBhIGRvY3VtZW50ICh0aGF0IG1lYW5zXG4gICAgICAgICAqIHRoZSBtb3N0IHJlY2VudCB1cGRhdGUgbG9jYXRpbmcgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZSlcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdERvY3VtZW50RW50cnkgKCkge1xuICAgICAgICAgICAgICAgIGxldCBwdHIgPSB0aGlzLmRhdGEubGVuZ3RoIC0gMVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0cl9zdGFydHhyZWYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoRG9jdW1lbnRIaXN0b3J5LlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgOVxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX3N0YXJ0eHJlZilcblxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24ocHRyKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBlbnRpcmUgdXBkYXRlIHNlY3Rpb25zXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3REb2N1bWVudEhpc3RvcnkgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdERvY3VtZW50RW50cnkoKVxuXG4gICAgICAgICAgICAgICAgbGV0IHVzID0gdGhpcy51cGRhdGVzWzBdXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodXMudHJhaWxlci5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RVcGRhdGVTZWN0aW9uKHVzLnRyYWlsZXIucHJldilcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzID0gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudHJhaWxlclNpemUgPSB0aGlzLmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXIuc2l6ZVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByaW1hcmlseSBmb3IgY2xhcmlmaWNhdGlvbi4gVGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIG1vc3QgcmVjZW50LiBXZSBwYXJzZWQgYmFja3dhcmRzLlxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRSZWNlbnRVcGRhdGUgKCkgOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzWzBdXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnkgcnVubmluZyB0aHJvdWdoIHRoZSBQRGYgaGlzdG9yeSB3ZSBjYW4gZm9yIGV2ZXJ5IG9iamVjdCBpZCBkZXRlcm1pbmUgdGhlIHBvaW50ZXIgYWRkcmVzcyB0byB0aGUgbW9zdCByZWNlbnQgdmVyc2lvbiwgYW5kXG4gICAgICAgICAqIHdoZXRoZXIgdGhlIG9iamVjdCBpZCBpcyBzdGlsbCBpbiB1c2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTbyB0aGUgb2JqZWN0IGxvb2t1cCB0YWJsZSBoYXMgYW4gZW50cnkgZm9yIGV2ZXJ5IGV4aXN0aW5nIG9iamVjdCBpZCwgYSBwb2ludGVyIHRvIHRoZSB0aGUgbW9zdCByZWNlbnQgb2JqZWN0IGRlZmluaXRpb24sIGFzIGxvbmdcbiAgICAgICAgICogYXMgdGhlIG9iamVjdCBleGlzdHMsIG9yIGFuIGFjY29yZGluZyBpbmRpY2F0aW9uIG90aGVyd2lzZS5cbiAgICAgICAgICogKi9cbiAgICAgICAgY3JlYXRlT2JqZWN0TG9va3VwVGFibGUgKCkgOiBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9ialRhYmxlIDoge1tpZCA6IG51bWJlcl0gOiBYUmVmfSA9IHt9XG5cbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgIGxldCBvYmpfY291bnQgPSB1cGRhdGUudHJhaWxlci5zaXplXG5cbiAgICAgICAgICAgICAgICBsZXQgaSA9IDFcbiAgICAgICAgICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9ialRhYmxlLmhhc093blByb3BlcnR5KHJlZi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlID0gdGhpcy51cGRhdGVzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICArK2lcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqVGFibGVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0IGlkLiBJdCBwcmltYXJpbHkgdHJpZXMgdG8gcmV1c2UgYW4gZXhpc3RpbmcgaWQsIGJ1dCBpZiBubyBzdWNoIGV4aXN0cyBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIG5ldyBvbmVcbiAgICAgICAgICogKi9cbiAgICAgICAgZ2V0RnJlZU9iamVjdElkKCkgOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgIGxldCBmcmVlX2hlYWRlciA9IHVwZGF0ZS5nZXRSZWZlcmVuY2UoMClcblxuICAgICAgICAgICAgICAgIGlmICghZnJlZV9oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1vc3QgcmVjZW50IGNyb3Nzc2l0ZSByZWZlcmVuY2UgaGFzIG5vIGhlYWRlciBmb3IgdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1wiKVxuXG4gICAgICAgICAgICAgICAgaWYgKDEgPT09IGZyZWVfaGVhZGVyLnBvaW50ZXIgfHwgMCA9PT0gZnJlZV9oZWFkZXIucG9pbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSB0aGlzLnRyYWlsZXJTaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRyYWlsZXIgc2l6ZSBub3Qgc2V0XCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG9iaiA6IHRoaXMudHJhaWxlclNpemUrKywgZ2VuZXJhdGlvbiA6IDAsIHJldXNlZCA6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge29iaiA6IGZyZWVfaGVhZGVyLnBvaW50ZXIsIGdlbmVyYXRpb24gOiB0aGlzLmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClbZnJlZV9oZWFkZXIuaWRdLmdlbmVyYXRpb24sIHJldXNlZCA6IHRydWV9XG4gICAgICAgIH1cbn1cbiIsImV4cG9ydCB7IFBERkRvY3VtZW50UGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyBBbm5vdGF0aW9uRmFjdG9yeSB9IGZyb20gJy4vYW5ub3RhdGlvbic7XG5cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgRG9jdW1lbnRIaXN0b3J5LCBPYmplY3RMb29rdXBUYWJsZSB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSc7XG5cbi8qKlxuICogTm90ZSB0aGF0IHRoaXMgcGFyc2VyIGRvZXMgbm90IHBhcnNlcyB0aGUgUERGIGZpbGUgY29tcGxldGVseS4gSXQgbG9va3VwcyB0aG9zZVxuICogcGFydHMgdGhhdCBhcmUgaW1wb3J0YW50IGZvciB0aGUgY3JlYXRpb24gb2YgYW5ub3RhdGlvbnMuIEZvciBtb3JlIGluZm9ybWF0aW9uXG4gKiBwbGVhc2UgcmVhZCB0aGUgUkVBRE1FLlxuICogKi9cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvciB7XG4gICAgICAgIHIgOiBudW1iZXJcbiAgICAgICAgZyA6IG51bWJlclxuICAgICAgICBiIDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzIDogbnVtYmVyXG4gICAgICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMgOiBudW1iZXJcbiAgICAgICAgYm9yZGVyX3dpZHRoIDogbnVtYmVyXG4gICAgICAgIGRhc2hfcGF0dGVyPyA6IG51bWJlcltdXG59XG5cbi8qKlxuICogUmVmZXJlbmNlcyBpbiBQREYgZG9jdW1lbnMgYXJlICBvZiB0aGUgZm9ybVxuICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAqXG4gKiBUaGlzIGhvbGRzIHN1Y2ggYSByZWZlcmVuY2VcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICBvYmogOiBudW1iZXJcbiAgICAgICAgZ2VuZXJhdGlvbiA6IG51bWJlclxuICAgICAgICByZXVzZWQ/IDogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XG4gICAgICAgIHBhZ2UgOiBudW1iZXIgPSAtMS8vIHRoZSB0YXJnZXQgcGFnZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICB0eXBlIDogc3RyaW5nID0gXCJcIi8vIHRoZSBzdWIgdHlwZSBvZiB0aGUgYXJyYXkgKFRleHQsIEhpZ2hsaWdodCwgLi4uKVxuICAgICAgICBvYmplY3RfaWQgOiBSZWZlcmVuY2VQb2ludGVyIHwgbnVsbCA9IG51bGwvLyBhbiB1bnVzZWQgb2JqZWN0IGlkXG4gICAgICAgIGlkIDogc3RyaW5nID0gXCJcIi8vIHVuaXF1ZSBhbm5hdGlvbiBpZGVudGlmaWVyXG4gICAgICAgIHJlY3QgOiBudW1iZXJbXSA9IFtdLy8gdGhlIGxvY2F0aW9uIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIGF1dGhvciA6IHN0cmluZyA9IFwiXCIvLyB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIHBhZ2VSZWZlcmVuY2UgOiBQYWdlIHwgbnVsbCA9IG51bGwvLyBUaGUgcmVmZXJlbmNlIHRvIHRoZSBwYWdlIG9iamVjdCB0byB3aGljaCB0aGUgYW5ub3RhdGlvbiBpcyBhZGRlZFxuICAgICAgICB1cGRhdGVEYXRlIDogc3RyaW5nID0gXCJcIi8vIFRoZSBkYXRlIHdoZW4gdGhlIGFubm90YXRpb24gd2FzIGNyZWF0ZWQgb3IgdXBkYXRlZFxuICAgICAgICBjb250ZW50cz8gOiBzdHJpbmcgLy8gVGV4dCB0aGF0IHNoYWxsIGJlIGRpc3BsYXllZCBmb3IgdGhlIGFubm90YXRpb25cbiAgICAgICAgYW5ub3RhdGlvbl9mbGFnPyA6IG51bWJlciAvLyBTZWUgUERGIHNwY2VjaWZpY2F0aW9uICdBbm5vdGF0aW9uIEZsYWcnXG4gICAgICAgIGFwcGVhcmFuY2VfZGljdGlvbmFyeT8gOiBhbnkgLy8gY29udHJvbCB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAgICBhcHBlYXJhbmNlX3N0YXRlPyA6IGFueSAvLyBjaGFuZ2UgdGhlIGFwcGVhcmFuY2UgYWNjb3JkaW5nIHRvIHN0YXRlc1xuICAgICAgICBib3JkZXI/IDogQm9yZGVyIHwgbnVsbCA9IG51bGwvLyBkZWZpbmUgdGhlIGJvcmRlclxuICAgICAgICBjb2xvcj8gOiBDb2xvciB8IG51bGwgPSBudWxsLy8gdGhlIGNvbG9yIHNldFxuICAgICAgICBvcGFjaXR5PyA6IG51bWJlciAvLyB0aGUgb3BhY2l0eSB2YWx1ZSAoQ0EgY2FsbGVkIGluIHRoZSBQREYgc3BlYylcbiAgICAgICAgcmljaHRleHQ/IDogc3RyaW5nIC8vIHJpY2ggdGV4dCBzdHJpbmcgZGlzcGxheWVkIGluIHRoZSBwb3B1cCB3aW5kb3cgd2hlbiB0aGUgYW5ub3RhdGlvbiBpcyBvcGVuZWRcbiAgICAgICAgaW5pdGlhbGx5T3Blbj8gOiBib29sZWFuIC8vIGZsYWcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgYW5ub3RhdGlvbiBzaGFsbCBpbml0aWFsbHkgYmUgb3BlblxuICAgICAgICBpY29uTmFtZT8gOiBzdHJpbmcgLy8gbmFtZSBvZiB0aGUgdXNlZCBpY29uXG4gICAgICAgIGFubm90YXRpb25TdGF0ZT8gOiBzdHJpbmcgLy8gdGhlIHN0YXRlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICAgIHN0YXRlTW9kZWw/IDogc3RyaW5nXG4gICAgICAgIGRlZmF1bHRBcHBlYXJhbmNlPyA6IHN0cmluZyAvLyBkZWZhdWx0IGFwcGVhcmFuY2Ugc3RyaW5nXG4gICAgICAgIHRleHRBbGlnbm1lbnQ/IDogc3RyaW5nIC8vIGxlZnQtanVzdGlmaWVkLCBjZW50ZXJlZCwgcmlnaHQtanVzdGlmaWVkXG4gICAgICAgIHJpY2hUZXh0U3RyaW5nPyA6IHN0cmluZyAvLyBnZW5lcmF0ZXMgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICAgICAgY2FsbG91dExpbmU/IDogbnVtYmVyW10gLy8gY2FsbCBvdXQgbGluZVxuICAgICAgICBpbnRlbnQ/IDogc3RyaW5nIC8vIGEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGludGVudDogRnJlZVRleHQsIEZyZWVUZXh0Q2FsbG91dCwgRnJlZVRleHRUeXBlV3JpdGVyXG4gICAgICAgIGJvcmRlckVmZmVjdD8gOiBhbnlcbiAgICAgICAgcmQ/IDogYW55IC8vID9cbiAgICAgICAgYm9yZGVyU3R5bGU/IDogYW55IC8vIGJvcmRlciBzdHlsZVxuICAgICAgICBsaW5lRW5kaW5nPyA6IHN0cmluZyAvLyB0aGUgbGluZSBlbmRpbmcgdHlwZSBvZiB0aGUgY2FsbG91dCBsaW5lXG4gICAgICAgIHN0YW1wVHlwZT8gOiBzdHJpbmcgLy8gdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgICAgY2FyZXRTeW1ib2w/IDogc3RyaW5nIC8vIENhbiBiZSBQIHRvIHVzZSBhIHBhcmFncmFwaCBzeW1ib2wgZm9yIHRoZSBjYXJldCBvciBOb25lXG4gICAgICAgIHF1YWRQb2ludHM/IDogbnVtYmVyW10gLy8gc3BlY2lmaWVzIGhvdyB0aGUgYW5ub3RhdGlvbiBnb2VzIGFycm91bmQgdGhlIHRleHRcbiAgICAgICAgaW5rTGlzdD8gOiBudW1iZXJbXVxuICAgICAgICBib3JkZXJfc3R5bGU/IDogYW55XG4gICAgICAgIGNvbG9yX3NwYWNlPyA6IG51bWJlcltdXG4gICAgICAgIGJvcmRlcl9lZmZlY3Q/IDogYW55XG4gICAgICAgIHZlcnRpY2VzPyA6IG51bWJlcltdXG4gICAgICAgIGxpbmVfZW5kaW5nPyA6IHN0cmluZ1tdXG4gICAgICAgIGludGVyaW9yX2NvbG9yPyA6IG51bWJlcltdXG4gICAgICAgIG1lYXN1cmU/IDogYW55XG5cblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXkgPSBuZXcgSW50OEFycmF5KFtdKSkge31cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdCB0aGUgYW5ub3RhdGlvbiBvYmplY3QgKHBhcnRpYWxseSlcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdCAocHRyIDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzdHJpY3QgdGhlIGRhdGEgYXJyYXkgdG8gdGhlIHBhcnRpdGlvbiB0aGF0IGFjdHVhbGx5IGNvbnRhaW5zIHRoZSBhbm5vdGF0aW9uIGRhdGFcbiAgICAgICAgICAgICAgICBsZXQgb2JqX2VuZF9wdHIgOiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIG9ial9lbmRfcHRyKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RfaWQgPSBVdGlsLmV4dHJhY3RPYmplY3RJZCh0aGlzLmRhdGEsIDApXG5cbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBcIi9cIiArIFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5TVUJUWVBFKVxuICAgICAgICAgICAgICAgIHRoaXMucmVjdCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5SRUNUKVxuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZSA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5QKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZSA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5NKVxuICAgICAgICAgICAgICAgIHRoaXMuYm9yZGVyID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkJPUkRFUilcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkMpXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRob3IgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuVClcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLk5NKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudHMgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQ09OVEVOVFMpXG4gICAgICAgICAgICAgICAgdGhpcy5xdWFkUG9pbnRzID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlFVQURQT0lOVFMpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmtMaXN0ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLklOS0xJU1QpXG4gICAgICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBDYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIENhdGFsb2dPYmplY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRhIDogSW50OEFycmF5KSB7IH1cblxuICAgICAgICBwcml2YXRlIHBhZ2VzT2JqZWN0SWQgOiBSZWZlcmVuY2VQb2ludGVyID0ge29iaiA6IC0xLCBnZW5lcmF0aW9uIDogLTEgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0IHRoZSBjYXRhbG9nIG9iamVjdCBmcm9tIHRoZSBkYXRhIGF0IHRoZSBnaXZlbiBwdHJcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdCAocHRyIDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHB0cl9wYWdlc19rZXkgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRVMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuUEFHRVMubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzT2JqZWN0SWQgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZCh0aGlzLmRhdGEsIHB0cl9wYWdlc19rZXkpXG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYWdlc09iamVjdElkICgpIDogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNPYmplY3RJZFxuICAgICAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgUGFnZVRyZWUgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZVRyZWUge1xuXG4gICAgICAgIHByaXZhdGUgaWQgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIHByaXZhdGUgZ2VuZXJhdGlvbiA6IG51bWJlciA9IC0xXG5cbiAgICAgICAgcHJpdmF0ZSBwYWdlQ291bnQgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIHByaXZhdGUgcGFnZVJlZmVyZW5jZXMgOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGUgOiBPYmplY3RMb29rdXBUYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkcyB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGFuZCByZXR1cm4gdHJ1ZSwgaWYgdGhlIG9iamVjdCB0eXBlIGlzIC9QYWdlXG4gICAgICAgICAqICovXG4gICAgICAgIGlzUGFnZSAocmVmZXJlbmNlIDogUmVmZXJlbmNlUG9pbnRlcikgOiBib29sZWFuIHtcbiAgICAgICAgICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICAgICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoeHJlZi5wb2ludGVyLCBwdHIpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKC0xICE9PSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRSwgX2RhdGEsIDAsIHRydWUpKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBraWRzIHJlZmVyZW5jZXMgcmVjdXJzaXZlbHkuXG4gICAgICAgICAqIEZvciBldmVyeSBraWQgaXQgY2hlY2tzIGlmIHRoZSByZWZlcmVuY2VkIG9iamVjdCB0eXBlIGlzOlxuICAgICAgICAgKiAtIGEgL1BhZ2VzIG9iamVjdCB0aGVuIGl0IHJlY3Vyc2l2ZWx5IGxvb2t1cHMgaXRzIGNoaWxkcmVuXG4gICAgICAgICAqIC0gYSAvUGFnZSBvYmplY3QgdGhlbiBpdCBhZGRzIHRoZSByZWZlcmVuY2VzXG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RQYWdlUmVmZXJlbmNlcyAocmVmZXJlbmNlcyA6IFJlZmVyZW5jZVBvaW50ZXJbXSkge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGFnZShyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBoYW5kbGUgYXJyYXkgLS0gcmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgcmVmZXJlbmNlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4cmVmID0gdGhpcy5vYmplY3RMb29rdXBUYWJsZVtyZWZlcmVuY2Uub2JqXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHRyID0geHJlZi5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheV9kYXRhID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIGtpZHNfaW5kZXggKyAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdCB0aGUgb2JqZWN0IGRhdGEgYXQgdGhlIGdpdmVuIHBvaW50ZXJcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdCAocHRyIDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleV9pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5DT1VOVCwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5DT1VOVC5sZW5ndGhcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb21wbGV0ZSBwYWdlIGNvdW50IGlzIHNwZWNpZmllZCBpbiB0aGUgdG9wIGxldmVsIHBhZ2V0cmVlXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBrZXlfaW5kZXgpXG5cbiAgICAgICAgICAgICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0aGF0IGFuIG9iamVjdCBvZiB0eXBlIC9QYWdlcyByZWZlcmVuY2VzIGFnYWluIHRvIG9iamVjdHMgb2YgdHlwZXMgL1BhZ2VzIHNvIHdlIG11c3RcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBhIHJlY3Vyc2l2ZSBldmFsdWF0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VSZWZlcmVuY2VzID0gW11cblxuICAgICAgICAgICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZzKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYWdlcyB0aGUgcGFnZSB0cmVlIGNvbXByaXNlc1xuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRQYWdlQ291bnQgKCkgOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VDb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3RzXG4gICAgICAgICAqICovXG4gICAgICAgIGdldFBhZ2VSZWZlcmVuY2VzICgpIDogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlUmVmZXJlbmNlc1xuICAgICAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgICAgIHB1YmxpYyBvYmplY3RfaWQgOiBSZWZlcmVuY2VQb2ludGVyIHwgdW5kZWZpbmVkIC8vIFRoZSBvYmplY3QgaWQgYW5kIGdlbmVyYXRpb24gb2YgdGhlIG9iamVjdFxuXG4gICAgICAgIHB1YmxpYyBhbm5vdHMgOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgIHB1YmxpYyBoYXNBbm5vdHNGaWVsZCA6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICAgIHB1YmxpYyBhbm5vdHNQb2ludGVyIDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXksIHByaXZhdGUgZG9jdW1lbnRIaXN0b3J5IDogRG9jdW1lbnRIaXN0b3J5KSB7fVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBpbiB0aGUgbGlua2VkIGFubm90YXRpb25zIGFycmF5XG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RBbm5vdGF0aW9uQXJyYXkgKCkge1xuICAgICAgICAgICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYW5ub3RzUG9pbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQW5ub3RhdGlvbnMgcG9pbnRlciBub3Qgc2V0XCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmX2Fubm90X3RhYmxlID0gb2JqX3RhYmxlW3RoaXMuYW5ub3RzUG9pbnRlci5vYmpdXG5cbiAgICAgICAgICAgICAgICBpZiAocmVmX2Fubm90X3RhYmxlLmdlbmVyYXRpb24gIT09IHRoaXMuYW5ub3RzUG9pbnRlci5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWZlcmVuY2UgYW5ub3RhdGlvbiB0YWJsZSBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHJlZl9hbm5vdF90YWJsZS5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuT0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLk9CSi5sZW5ndGhcblxuICAgICAgICAgICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICAgICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9zZXF1ZW5jZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzID0gcmVmc1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBwYWdlIG9iamVjdCBzdGFydGluZyBhdCBwb3NpdGlvbiBwdHJcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdCAocHRyIDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0X2lkIDogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaWRfcHRyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGVuZF9pZF9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGlkX3B0ciArIDEpICsgMVxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RfZ2VuIDogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgZW5kX2lkX3B0cilcblxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0X2lkID0geyBvYmogOiBvYmplY3RfaWQsIGdlbmVyYXRpb24gOiBvYmplY3RfZ2VuIH1cblxuICAgICAgICAgICAgICAgIGxldCBlbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UocHRyLCBlbmRfcHRyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGFubm90c19wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBfZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gYW5ub3RzX3B0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNBbm5vdHNGaWVsZCA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RzX3B0ciArPSBVdGlsLkFOTk9UUy5sZW5ndGggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdHNfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGFbYW5ub3RzX3B0cl0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZShfZGF0YSwgYW5ub3RzX3B0cilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9zZXF1ZW5jZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90cyA9IHJlZnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzUG9pbnRlciA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEFubm90YXRpb25BcnJheSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cbi8qKlxuICogUGFyc2VzIHRoZSByZWxldmFudCBwYXJ0cyBvZiB0aGUgUERGIGRvY3VtZW50IGFuZCBwcm92aWRlcyBmdW5jdGlvbmFsaXR5IHRvIGV4dHJhY3QgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBmb3JcbiAqIGFkZGluZyBhbm5vdGF0aW9uc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQREZEb2N1bWVudFBhcnNlciB7XG5cbiAgICAgICAgcHVibGljIGRvY3VtZW50SGlzdG9yeSA6IERvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkobmV3IEludDhBcnJheShbXSkpXG5cbiAgICAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgZGF0YSA6IEludDhBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcblxuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeSh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudEhpc3RvcnkuZXh0cmFjdERvY3VtZW50SGlzdG9yeSgpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGZyZWUgb2JqZWN0IGlkLiBJdCBmaXJzdCBjaGVja3Mgd2V0aGVyIHRoZXJlIGNhbiBiZSBhbiBmcmVlZCBvYmplY3QgaWQgcmV1c2VkLiBJZiB0aGF0IGlzIG5vdCB0aGUgY2FzZVxuICAgICAgICAgKiBpdCBjcmVhdGVzIGEgbmV3IG9uZVxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRGcmVlT2JqZWN0SWQgKCkgOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEhpc3RvcnkuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBjYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGZpbGVcbiAgICAgICAgICogKi9cbiAgICAgICAgZ2V0Q2F0YWxvZyAoKSA6IENhdGFsb2dPYmplY3Qge1xuICAgICAgICAgICAgICAgIGxldCByb290X29iaiA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXIucm9vdFxuICAgICAgICAgICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgICAgICAgICBsZXQgY2F0YWxvZ19wdHIgPSBvYmpfdGFibGVbcm9vdF9vYmoub2JqXS5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSBuZXcgQ2F0YWxvZ09iamVjdCh0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgY2F0YWxvZ19vYmplY3QuZXh0cmFjdChjYXRhbG9nX3B0cilcblxuICAgICAgICAgICAgICAgIHJldHVybiBjYXRhbG9nX29iamVjdFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHRyZWUgb2JqZWN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRQYWdlVHJlZSAoKSA6IFBhZ2VUcmVlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqX3RhYmxlIDogT2JqZWN0TG9va3VwVGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSB0aGlzLmdldENhdGFsb2coKVxuXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VzX2lkID0gY2F0YWxvZ19vYmplY3QuZ2V0UGFnZXNPYmplY3RJZCgpXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VzX3JlZiA9IG9ial90YWJsZVtwYWdlc19pZC5vYmpdXG5cbiAgICAgICAgICAgICAgICBpZiAocGFnZXNfcmVmLmdlbmVyYXRpb24gIT09IHBhZ2VzX2lkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2VzIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VUcmVlID0gbmV3IFBhZ2VUcmVlKHRoaXMuZGF0YSwgb2JqX3RhYmxlKVxuICAgICAgICAgICAgICAgIHBhZ2VUcmVlLmV4dHJhY3QocGFnZXNfcmVmLnBvaW50ZXIpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZVRyZWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB3aXRoIHRoZSBnaXZlbiBwYWdlTnVtYmVyXG4gICAgICAgICAqICovXG4gICAgICAgIGdldFBhZ2UgKHBhZ2VOdW1iZXIgOiBudW1iZXIpIDogUGFnZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VUcmVlID0gdGhpcy5nZXRQYWdlVHJlZSgpXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VJZCA9IHBhZ2VUcmVlLmdldFBhZ2VSZWZlcmVuY2VzKClbcGFnZU51bWJlcl1cblxuICAgICAgICAgICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgICAgICAgICBpZiAob2JqX3RhYmxlW3BhZ2VJZC5vYmpdLmdlbmVyYXRpb24gIT09IHBhZ2VJZC5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IG9ial9wdHIgPSBvYmpfdGFibGVbcGFnZUlkLm9ial0ucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLmRhdGEsIHRoaXMuZG9jdW1lbnRIaXN0b3J5KVxuICAgICAgICAgICAgICAgIHBhZ2UuZXh0cmFjdChvYmpfcHRyKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBhbm5vdGF0aW9ucyB0aGF0IGV4aXN0IGluIHRoZSBkb2N1bWVudFxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0QW5ub3RhdGlvbnMgKCkgOiBBbm5vdGF0aW9uW11bXSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90cyA6IEFubm90YXRpb25bXVtdID0gW11cbiAgICAgICAgICAgICAgICBsZXQgcHQgOiBQYWdlVHJlZSA9IHRoaXMuZ2V0UGFnZVRyZWUoKVxuICAgICAgICAgICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZUNvdW50IDogbnVtYmVyID0gcHQuZ2V0UGFnZUNvdW50KClcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWdlIDogUGFnZSA9IHRoaXMuZ2V0UGFnZShpKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5ub3RhdGlvblJlZmVyZW5jZXMgOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZUFubm90cyA6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJlZlB0ciBvZiBhbm5vdGF0aW9uUmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBBbm5vdGF0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5leHRyYWN0KG9ial90YWJsZVtyZWZQdHIub2JqXS5wb2ludGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnBhZ2UgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHMucHVzaChhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RzLnB1c2gocGFnZUFubm90cylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RzXG4gICAgICAgIH1cblxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBtZXRob2RzIHRvIG5hdmlnYXRlIHRocm91Z2ggdGhlIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgVXRpbCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFRZUEU6IHN0cmluZyA9IFwiL1R5cGUgXCJcbiAgICBwdWJsaWMgc3RhdGljIFNQQUNFOiBudW1iZXIgPSAzMlxuICAgIHB1YmxpYyBzdGF0aWMgX1RZUEU6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMV0gLy8gJy9UeXBlJ1xuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdIC8vICdvYmonXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl0gLy8gJ2VuZG9iaidcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXJbXSA9IFs5MV0gLy8gJ1snXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlcltdID0gWzkzXSAvLyAnXSdcbiAgICBwdWJsaWMgc3RhdGljIFNUUklOR19TVEFSVDogbnVtYmVyW10gPSBbNDBdIC8vICcoJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX0VORDogbnVtYmVyW10gPSBbNDFdIC8vICcpJ1xuICAgIHB1YmxpYyBzdGF0aWMgUjogbnVtYmVyW10gPSBbODJdIC8vICdSJ1xuICAgIHB1YmxpYyBzdGF0aWMgQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XSAvLyAnL0Fubm90J1xuICAgIHB1YmxpYyBzdGF0aWMgQU5OT1RTOiBudW1iZXJbXSA9IFs0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNiwgMTE1XSAvLyAnL0Fubm90J1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXSAvLyAnWydcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfRU5EOiBudW1iZXJbXSA9IFs2MiwgNjJdIC8vICddJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdIC8vICcvU3VidHlwZSdcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VTOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMSwgMTE1XSAvLyAvUGFnZXNcbiAgICBwdWJsaWMgc3RhdGljIFBBR0U6IG51bWJlcltdID0gWzQ3LCA4MCwgOTcsIDEwMywgMTAxXVxuICAgIHB1YmxpYyBzdGF0aWMgS0lEUzogbnVtYmVyW10gPSBbNDcsIDc1LCAxMDUsIDEwMCwgMTE1XVxuICAgIHB1YmxpYyBzdGF0aWMgQ09VTlQ6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTcsIDExMCwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBNOiBudW1iZXJbXSA9IFs0NywgNzddIC8vICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIFQ6IG51bWJlcltdID0gWzQ3LCA4NF0gLy8gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgRjogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyAnL0YnXG4gICAgcHVibGljIHN0YXRpYyBDOiBudW1iZXJbXSA9IFs0NywgNjddIC8vICcvQydcbiAgICBwdWJsaWMgc3RhdGljIENBOiBudW1iZXJbXSA9IFs0NywgNjcsIDY1XSAvLyAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgTk06IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXJbXSA9IFs0NywgODBdIC8vICcvUCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gJy9Db250ZW50cydcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gJy9Cb3JkZXInXG4gICAgcHVibGljIHN0YXRpYyBRVUFEUE9JTlRTOiBudW1iZXJbXSA9IFs0NywgODEsIDExNywgOTcsIDEwMCwgODAsIDExMSwgMTA1LCAxMTAsIDExNiwgMTE1XSAvLyAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gJy9JbmtMaXN0J1xuXG4gICAgLyoqXG4gICAgICogQXNzdW1lcyB0aGF0IGF0IHBvc2l0aW9uIGluZGV4IGlzIGEgZGVsaW1pdGVyIGFuZCB0aGFuIHJ1bnMgYXMgbG9uZyBmb3J3YXJkIHVudGlsIGl0IGZpbmRzXG4gICAgICogYW5vdGhlciBkZWxpbWl0ZXIgb3IgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBza2lwRGVsaW1pdGVyKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBkYXRhLmxlbmd0aCAmJiB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaW5kZXhdKSkrK2luZGV4XG5cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIGFzY2lpIHZhbHVlc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0U3RyaW5nVG9Bc2NpaSh0b0NvbnZlcnQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGFzY2lpczogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Db252ZXJ0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhc2NpaXMucHVzaCgrdG9Db252ZXJ0LmNoYXJDb2RlQXQoaSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNjaWlzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlbGltaXRlcih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgfHwgdmFsdWUgPT09IDEzIHx8IHZhbHVlID09PSAzMlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0aGUgc2VxdWVuY2UgaW4gZGF0YSBzdGFydGluZyBhdCB0aGUgb2Zmc2V0XG4gICAgICpcbiAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHN1Y2VlZGluZyBjaGFyIGFmdGVyIHRoZSBzZXF1ZW5jZSBpcyBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kXG4gICAgICogb2YgdGhlIHdob2xlIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZShzZXF1ZW5jZTogbnVtYmVyW10sIGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwLCBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gb2Zmc2V0XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBzZXF1ZW5jZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGRhdGEubGVuZ3RoID09IGkgKyAxIHx8IHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAtIChzZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytqXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBzdGFydFxuICAgICAqIG9mIHRoZSB3aG9sZSBkYXRhIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZVJldmVyc2VkKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogSW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSwgY2xvc2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IG9mZnNldFxuXG4gICAgICAgIGZvciAobGV0IGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGkgLSAxIDwgMCB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAtLWpcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGJlZm9yZSB0aGUgbmV4dCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlcihkYXRhOiBJbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBkYXRhLmxlbmd0aCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKSsrb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEpOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0ID4gMCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKS0tb2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGFycmF5IGRhdGEgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmRleC4gVGhlIGluZGV4IGNhbiBtYXJrIHRoZSBzdGFydCBvZiB0aGVcbiAgICAgKiBhcnJheSBvciBhIHBvaW50ZXIgd2l0aGluIHRoZSBhcnJheS4gSWYgaXQgaXMgYSBuZXN0ZWQgYXJyYXkgdGhlIHBvaW50ZXIgbXVzdCBtYXJrIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiB0aGUgc3ViZXJhcnJheS4gT3RoZXJ3aXNlIG9ubHkgdGhlIHN1YmFycmF5IGlzIGV4dHJhY3RlZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgYXJyYXlfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5BUlJBWV9TVEFSVCwgZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgaWYgKC0xID09PSBhcnJheV9zdGFydClcbiAgICAgICAgICAgIGFycmF5X3N0YXJ0ID0gaW5kZXhcblxuICAgICAgICBsZXQgcm9vdF9saXN0ID0geyBwdHI6IGFycmF5X3N0YXJ0LCBsc3Q6IFtdIH1cbiAgICAgICAgbGV0IHN0YXJ0X3BvaW50ZXI6IGFueVtdID0gW3Jvb3RfbGlzdF1cblxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXlfc3RhcnQgKyAxOyBpIDwgZGF0YS5sZW5ndGggJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwOykge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX24gPSB7IHB0cjogaSwgbHN0OiBbXSB9XG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLnB0ciA9IC0xIC8vIG1hcmsgbGlzdCBhcyBjb2xsZWN0aW9uIG9mIG90aGVyIGxpc3RzXG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlci5wdXNoKF9uKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBzdGFydF9wb2ludGVyLnBvcCgpXG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBzcCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgTWlzc2luZyBzdGFydCBwb2ludGVyICR7SlNPTi5zdHJpbmdpZnkoc3ApfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNwLnB0ciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzX3RvQWRkID0gZGF0YS5zbGljZShzcC5wdHIgKyAxLCBpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyW3N0YXJ0X3BvaW50ZXIubGVuZ3RoIC0gMV0ubHN0LnB1c2goYXNfdG9BZGQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNfdG9BZGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3AucHRyID09PSAtMSAmJiBzdGFydF9wb2ludGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKHNwLmxzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaSArIDEpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm9vdF9saXN0LmxzdFxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheVNlcTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGFycmF5U2VxIGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5U2VxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5icjogYW55ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2goVXRpbC5leHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2UpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBpbiBhbiBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlQXJyYXkoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgICAgICAgICAgbGV0IG5icnM6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheVNlcS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuYnJzLnB1c2goVXRpbC5leHRyYWN0TnVtYmVyKGFycmF5U2VxLCBpKSlcblxuICAgICAgICAgICAgICAgIGkgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihhcnJheVNlcSwgaSArIDEpICsgMVxuICAgICAgICAgICAgICAgIGkgPSBVdGlsLnNraXBEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5icjogYW55ID0gW11cblxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaCh0aGlzLmV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2UpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgbnVtYmVycyBpbiBhbiBhcnJheVxuICAgICAqIGUuZy4gIFs2OS42OTcgNDcuNDE0OCA5Ni40NjQ2IDU4LjI1OTggXVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0TnVtYmVyc0FycmF5KGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZXMgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2VzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYW4gb2JqZWN0IGlkZW50aWZpZXJcbiAgICAgKiA8SUQ+IDxHRU4+IG9ialxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T2JqZWN0SWQoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICBsZXQgb2JqID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIGluZGV4LCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBJbnQ4QXJyYXkge1xuICAgICAgICBpbmRleCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBpbmRleClcbiAgICAgICAgbGV0IHJfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkoXCIgUlwiKSwgZGF0YSwgaW5kZXgsIHRydWUpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgsIHJfaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSBhcyB0eXBlZCBvYmplY3RcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZVR5cGVkKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuXG4gICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZGVsX2luZGV4ID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXIocmVmX2RhdGEsIDApXG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCAwLCBkZWxfaW5kZXgpXG4gICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBpZCwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAqIDxvYmpOdW1iZXI+IDxnZW5lcmF0aW9uPiBvYmpcbiAgICAgKiA8PFxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICAvVHlwZSAvPHR5cGU+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA+PlxuICAgICAqXG4gICAgICogQXBwcm9hY2g6IFdlIGlkZW50aWZ5IGFuIGluZGV4IHdpdGhpbiB0aGUgb2JqZWN0IGRlZmluaXRvbiBzZWFyY2ggdGhlIHVuaXF1ZWx5IGlkZW50aWZ5YWJsZSBlbmQgb2YgdGhlIG9iamVjdCBkZWZpbml0aW9uXG4gICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0QnlUeXBlKGRhdGE6IEludDhBcnJheSwgX3R5cGU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBzZWFyY2hTZXF1ZW5jZSA9IHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkodGhpcy5UWVBFICsgX3R5cGUpXG5cbiAgICAgICAgbGV0IG9ial9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2Uoc2VhcmNoU2VxdWVuY2UsIGRhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgbGV0IG9ial9lbmQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpICsgNlxuXG4gICAgICAgIGxldCBvYmpfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5PQkosIGRhdGEsIG9ial9pbmRleCwgdHJ1ZSlcblxuICAgICAgICBsZXQgZ2VuZXJhdGlvbiA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgb2JqX3N0YXJ0IC0gMSlcblxuICAgICAgICBsZXQgb2JqX2lkID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhLCBnZW5lcmF0aW9uIC0gMSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShvYmpfaWQsIG9ial9lbmQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgYXJyYXkgb2YgbnVtYmVycyBhbmQgYXJyYXlzIG9mIHJlZmVyZW5jZXNcbiAgICAgKlxuICAgICAqIE1hcmsgdGhhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IHN1cHBvcnQgYXJyYXlzIHRoYXQgY29udGFpbiBkaWZmZXJlbnQgdHlwZXMsIHNvIGVpdGhlclxuICAgICAqIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlcyBvciBhbiBhcnJheSBvZiBudW1iZXJzLiBIb3dldmVyIHRoZSBmdW5jdGlvbiBzdXBwb3J0c1xuICAgICAqIGFyYml0cmFyaWx5IG5lc3Rpbmcgb2YgYXJyYXlzLlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXkoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vICdSJyAtLSB3ZSBrbm93IGl0IGlzIGFuIGFycmF5IG9mIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0UmVmZXJlbmNlQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyc0FycmF5KGRhdGEsIGluZGV4KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhdGNzIHRoZSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFN0cmluZyhkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgMClcbiAgICAgICAgbGV0IHN0cmluZ19lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX0VORCwgZGF0YSwgMClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvcHRpb25cbiAgICAgKiAvPG9wdGlvbj5cbiAgICAgKlxuICAgICAqIHNvIGZvciBpbnN0YW5jZSBmb3IgL0hpZ2hsaWdodCBpdCB3b3VsZCByZXR1cm4gJ0hpZ2hsaWdodCdcbiAgICAgKlxuICAgICAqIFRoZSBpbmRleCBtdXN0IHBvaW50IHRvIHRoZSBcIi9cIlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T3B0aW9uVmFsdWUoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGRhdGFbaW5kZXhdICE9PSA0NylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibWlzcGxhY2VkIG9wdGlvbiB2YWx1ZSBwb2ludGVyXCIpXG5cbiAgICAgICAgbGV0IGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRBc2NpaVRvU3RyaW5nKEFycmF5LmZyb20oZGF0YS5zbGljZShpbmRleCArIDEsIGVuZCArIDEpKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGZpZWxkLlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0RmllbGQoZGF0YTogSW50OEFycmF5LCBmaWVsZDogbnVtYmVyW10sIHB0cjogbnVtYmVyID0gMCk6IGFueSB7XG4gICAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpZWxkcyBvZiBvbmUgb2JqZWN0XG4gICAgICAgIGxldCBzdGFydF9vYmpfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLk9CSiwgZGF0YSwgcHRyLCB0cnVlKVxuICAgICAgICBsZXQgZW5kX29ial9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBzdGFydF9vYmpfcHRyLCB0cnVlKVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0YXJ0X29ial9wdHIsIGVuZF9vYmpfcHRyKVxuXG4gICAgICAgIGxldCBmaWVsZF9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKGZpZWxkLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGlmIChmaWVsZF9wdHIgPT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgICAgIGZpZWxkX3B0ciArPSBmaWVsZC5sZW5ndGhcblxuICAgICAgICBsZXQgZmllbGRfdmFsdWVfZW5kX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoWzQ3XSwgZGF0YSwgZmllbGRfcHRyKSAvLyAnLycgPSA0N1xuXG4gICAgICAgIGlmIChmaWVsZF92YWx1ZV9lbmRfcHRyID09PSBmaWVsZF9wdHIgKyAxKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0T3B0aW9uVmFsdWUoZGF0YSwgZmllbGRfdmFsdWVfZW5kX3B0cilcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgbGV0IHZhbHVlX2RhdGEgPSBkYXRhLnNsaWNlKGZpZWxkX3B0ciwgZmllbGRfdmFsdWVfZW5kX3B0cilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlX2RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZV9kYXRhW2ldID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdIHx8IHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGFycmF5XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdEFycmF5KHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuU1RSSU5HX1NUQVJUWzBdIHx8IHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuU1RSSU5HX0VORFswXSkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0U3RyaW5nKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuUlswXSkgeyAvLyBSXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZCh2YWx1ZV9kYXRhLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdE51bWJlcih2YWx1ZV9kYXRhLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYXNjaWkgZW5jb2RlZCBudW1iZXIgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3ROdW1iZXIoZGF0YTogSW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuXG4gICAgICAgIGlmICgtMSA9PSBlbmQpIHtcbiAgICAgICAgICAgIGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0cl9pZCA9IFwiXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHN0cl9pZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFbaV0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXCJcIiA9PT0gc3RyX2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IHBhcnNlIG51bWJlciBhdCBwb3NpdGlvbiAke3N0YXJ0fWApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gK3N0cl9pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGFzIGFyZ3VtZW50IGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kIHJldHVybnMgdGhvc2UgdHlwZWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9zZXF1ZW5jZTogSW50OEFycmF5KTogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgbGV0IHJlZnM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIHdoaWxlIChpIDwgYXJyYXlfc2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICByZWZzLnB1c2goVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoYXJyYXlfc2VxdWVuY2UsIGkpKVxuICAgICAgICAgICAgaSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5SLCBhcnJheV9zZXF1ZW5jZSwgaSwgdHJ1ZSkgKyAyXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBkYXRlIGludG8gUERGIGZvcm1hdHRpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydERhdGVUb1BERkRhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkYXRlX3N0ciA9IFwiKEQ6XCJcbiAgICAgICAgZGF0ZV9zdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgIGxldCBtb250aDogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgIGRhdGVfc3RyICs9IChtb250aC5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBtb250aFxuICAgICAgICBsZXQgZGF5OiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChkYXkubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgZGF5XG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGhvdXJzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGhvdXJzXG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChtaW51dGVzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1pbnV0ZXNcbiAgICAgICAgbGV0IHNlY29uZHM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldFNlY29uZHMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKHNlY29uZHMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgc2Vjb25kc1xuICAgICAgICByZXR1cm4gZGF0ZV9zdHIgKyBcIilcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdW5pY29kZSBzZXF1ZW5jZSBpbnRvIGEgc3RyaW5nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRVbmljb2RlVG9TdHJpbmcodmFsOiBJbnQ4QXJyYXkgfCBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEludDhBcnJheSlcbiAgICAgICAgICAgIHZhbCA9IG5ldyBVaW50OEFycmF5KHZhbClcblxuICAgICAgICBpZiAodmFsWzBdID09PSAyNTQgJiYgdmFsWzFdID09PSAyNTUpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgyLCB2YWwubGVuZ3RoKVxuXG4gICAgICAgICAgICBsZXQgdWludFRvU3RyaW5nID0gKHVpbnRBcnJheTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpbnRBcnJheS5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHVpbnRBcnJheVtpXSA8PCA4KSB8IHVpbnRBcnJheVtpICsgMV0gJiAweEZGKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJldCA9IHVpbnRUb1N0cmluZyh2YWwpXG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdXRmLTggY29tcHJlc3Npb25cbiAgICAgICAgbGV0IFV0ZjhBcnJheVRvU3RyID0gKGFycmF5OiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcjEgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyMSA+PiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiBjYXNlIDI6IGNhc2UgMzogY2FzZSA0OiBjYXNlIDU6IGNhc2UgNjogY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lIGJ5dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDFGKSA8PCA2KSB8IChjaGFyMiAmIDB4M0YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocmVlIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIzID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjaGFyMSAmIDB4MEYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMiAmIDB4M0YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGNoYXIzICYgMHgzRikgPDwgMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldCA9IFV0ZjhBcnJheVRvU3RyKEFycmF5LmZyb20odmFsKSlcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEFzY2lpVG9TdHJpbmcodmFsOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IFwiXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEgbnVtYmVyIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGl0cyBjaGFyIHJlcHJlc2VudGF0aW9uc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkobmJyOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFN0cmluZyhuYnIpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSdcblxuLyoqXG4gKiBDcmVhdHMgdGhlIGJ5dGUgYXJyYXkgdGhhdCBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFdyaXRlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIE46IG51bWJlciA9IDExMFxuICAgIHB1YmxpYyBzdGF0aWMgRjogbnVtYmVyID0gMTAyXG5cbiAgICBwdWJsaWMgc3RhdGljIFNQQUNFOiBudW1iZXIgPSAzMlxuICAgIHB1YmxpYyBzdGF0aWMgQ1I6IG51bWJlciA9IDEzXG4gICAgcHVibGljIHN0YXRpYyBMRjogbnVtYmVyID0gMTBcbiAgICBwdWJsaWMgc3RhdGljIFI6IG51bWJlciA9IDgyXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlciA9IDkxXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlciA9IDkzXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdXG4gICAgcHVibGljIHN0YXRpYyBESUNUX0VORDogbnVtYmVyW10gPSBbNjIsIDYyXVxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRV9BTk5PVDogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxLCBXcml0ZXIuU1BBQ0UsIDQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBTVUJUWVBFOiBudW1iZXJbXSA9IFs0NywgODMsIDExNywgOTgsIDExNiwgMTIxLCAxMTIsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIFVQREFURV9EQVRFOiBudW1iZXJbXSA9IFs0NywgNzddIC8vID0gJy9NJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVVUSE9SOiBudW1iZXJbXSA9IFs0NywgODRdIC8vID0gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVOVFM6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTAsIDExNiwgMTAxLCAxMTAsIDExNiwgMTE1XSAvLyA9ICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCUkFDS0VUX1NUQVJUOiBudW1iZXIgPSA0MFxuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9FTkQ6IG51bWJlciA9IDQxXG4gICAgcHVibGljIHN0YXRpYyBGTEFHOiBudW1iZXJbXSA9IFs0NywgNzBdIC8vID0gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgSUQ6IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vID0gJy9OTSdcbiAgICBwdWJsaWMgc3RhdGljIENPTE9SOiBudW1iZXJbXSA9IFs0NywgNjddIC8vID0gJy9DJ1xuICAgIHB1YmxpYyBzdGF0aWMgT1BBQ0lUWTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gPSAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgQk9SREVSOiBudW1iZXJbXSA9IFs0NywgNjYsIDExMSwgMTE0LCAxMDAsIDEwMSwgMTE0XSAvLyA9ICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRV9SRUZFUkVOQ0U6IG51bWJlcltdID0gWzQ3LCA4MF0gLy8gPSAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQUEVBUkFOQ0U6IG51bWJlcltdID0gWzQ3LCA2OCwgNjVdIC8vID0gJy9EQSdcblxuICAgIHB1YmxpYyBzdGF0aWMgVFJBSUxFUjogbnVtYmVyW10gPSBbMTE2LCAxMTQsIDk3LCAxMDUsIDEwOCwgMTAxLCAxMTRdIC8vID0gJ3RyYWlsZXInXG4gICAgcHVibGljIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vID0gJy9TaXplJ1xuICAgIHB1YmxpYyBzdGF0aWMgUk9PVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyA9ICcvUm9vdCdcbiAgICBwdWJsaWMgc3RhdGljIFBSRVY6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gPScvUHJldidcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJUWFJFRjogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG4gICAgcHVibGljIHN0YXRpYyBFT0Y6IG51bWJlcltdID0gWzM3LCAzNywgNjksIDc5LCA3MF0gLy8gPSAnJSVFT0YnXG5cbiAgICBwdWJsaWMgc3RhdGljIFhSRUY6IG51bWJlcltdID0gWzEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAneHJlZidcblxuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBWRVJUSUNFUzogbnVtYmVyW10gPSBbNDcsIDg2LCAxMDEsIDExNCwgMTE2LCAxMDUsIDk5LCAxMDEsIDExNV0gLy8gPSAnL1ZlcnRpY2VzJ1xuICAgIHB1YmxpYyBzdGF0aWMgTkFNRTogbnVtYmVyW10gPSBbNDcsIDc4LCA5NywgMTA5LCAxMDFdIC8vID0gJy9OYW1lJ1xuICAgIHB1YmxpYyBzdGF0aWMgRFJBRlQ6IG51bWJlcltdID0gWzQ3LCA2OCwgMTE0LCA5NywgMTAyLCAxMTZdIC8vID0gJy9EcmFmdCdcblxuICAgIHB1YmxpYyBzdGF0aWMgU1k6IG51bWJlcltdID0gWzQ3LCA4MywgMTIxXSAvLyA9ICcvU3knXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXIgPSA4MFxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAqICovXG4gICAgcHJpdmF0ZSB4cmVmczogWFJlZltdID0gW11cblxuICAgIC8qKlxuICAgICAqIGRhdGEgOiBUaGUgZGF0YSByZXByZXNlbnRpbmcgdGhlIG9yaWdpbmFsIFBERiBkb2N1bWVudFxuICAgICAqIGFhbm5vdGF0aW9ucyA6IFRoZSBhbm5vdGF0aW9ucyB0byBhZGQgdG8gdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSwgcHJpdmF0ZSBhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdLCBwcml2YXRlIHBhcnNlcjogUERGRG9jdW1lbnRQYXJzZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBhbm5vdGF0aW9ucyBwYWdld2lzZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IHNpbmNlIHRoZSBhbm5vdGF0aW9uIGFycmF5cyBvZiB0aGUgc2l0ZXMgbXVzdCBiZSBleHRlbmRlZFxuICAgICAqIGFuZCBpdCBtYWtlcyBzZW5zZSB0byBkbyB0aGlzIHVwZGF0ZSBpbiBvbmUgc3RlcC5cbiAgICAgKiAqL1xuICAgIHNvcnRQYWdlV2lzZShhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdKTogeyBbaXRlbTogbnVtYmVyXTogQW5ub3RhdGlvbltdIH0ge1xuICAgICAgICBsZXQgcGFnZUFubm90czogeyBbaXRlbTogbnVtYmVyXTogQW5ub3RhdGlvbltdIH0gPSB7fVxuXG4gICAgICAgIGZvciAobGV0IGFubm90IG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIXBhZ2VBbm5vdHNbYW5ub3QucGFnZV0pXG4gICAgICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXSA9IFtdXG5cbiAgICAgICAgICAgIHBhZ2VBbm5vdHNbYW5ub3QucGFnZV0ucHVzaChhbm5vdClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlQW5ub3RzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcmVmZXJlbmNlIHBvaW50ZXJcbiAgICAgKlxuICAgICAqIDxvYmpfaWQ+IDxnZW5lcmF0aW9uPiBSXG4gICAgICpcbiAgICAgKiBUaGUgJ1InIGFuZCB0aGUgcHJlY2VkaW5nIHNwYWNlIGlzIG9ubHkgd3JpdHRlbiBpbiBjYXNlICdyZWZlcmVuY2VkJyBpcyB0cnVlXG4gICAgICogKi9cbiAgICB3cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmOiBSZWZlcmVuY2VQb2ludGVyLCByZWZlcmVuY2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocmVmLm9iailcblxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShyZWYuZ2VuZXJhdGlvbikpXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXQgcmV0dXJucyB0aGUgb2JqZWN0IGV4dGVuZGVkIHdpdGggdGhlIC9Bbm5vdCBlbnRyeS5cbiAgICAgKlxuICAgICAqIHB0ciA6IFBvaW50ZXIgdG8gdGhlIHBhZ2Ugb2JqZWN0XG4gICAgICogYW5ub3RfYXJyYXlfcmVmZXJlbmNlIDogVGhlIHJlZmVyZW5jZSB0byB0aGUgYW5ub3RhdGlvbiBhcnJheVxuICAgICAqICovXG4gICAgYWRhcHRQYWdlT2JqZWN0KHBhZ2U6IFBhZ2UsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cbiAgICAgICAgbGV0IGxvb2t1cFRhYmxlID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgcGFnZV9wdHI6IFhSZWYgPSBsb29rdXBUYWJsZVtwYWdlLm9iamVjdF9pZC5vYmpdXG5cbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHBhZ2VfcHRyLnBvaW50ZXIsIHRydWUpXG5cbiAgICAgICAgbGV0IG9iamVjdF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHBhZ2VfcHRyLnBvaW50ZXIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHB0cl9kaWN0X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5ESUNUX0VORCwgb2JqZWN0X2RhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgcmV0ID0gQXJyYXkuZnJvbShvYmplY3RfZGF0YS5zbGljZSgwLCBwdHJfZGljdF9lbmQpKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3RfYXJyYXlfcmVmZXJlbmNlLCB0cnVlKSlcbiAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKG9iamVjdF9kYXRhLnNsaWNlKHB0cl9kaWN0X2VuZCwgb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgYW5ub3RhdGlvbnMgb2YgPj5vbmU8PCBwYWdlIGFuZCBkZXJpdmVzIHRoZSBhbm5vdGF0aW9ucyBhcnJheSBmcm9tIGl0LlxuICAgICAqIFRoZXJlYnkgaXQgYWxzbyBjb25zaWRlcnMgdGhlIHBvdGVudGlhbGx5IGV4aXN0aW5nIGFubm90YXRpb24gYXJyYXkuXG4gICAgICogKi9cbiAgICB3cml0ZUFubm90QXJyYXkoYW5ub3RzOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10sIHBhZ2VSZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIsIHBhZ2VEYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBhbm5vdHNbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF4Lm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb24gd2l0aCBvYmplY3RfaWQgbnVsbFwiKVxuXG4gICAgICAgICAgICByZXR1cm4geC5vYmplY3RfaWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgbGV0IHBhZ2VfZGF0YTogbnVtYmVyW10gPSBbXVxuICAgICAgICBpZiAoIXJlZkFycmF5X2lkKSB7XG4gICAgICAgICAgICByZWZBcnJheV9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpXG4gICAgICAgICAgICBwYWdlX2RhdGEgPSB0aGlzLmFkYXB0UGFnZU9iamVjdChwYWdlLCByZWZBcnJheV9pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gdGhpcy53cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmQXJyYXlfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9TVEFSVClcblxuXG4gICAgICAgIGZvciAobGV0IGFuIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW4sIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiByZWZBcnJheV9pZCwgZGF0YTogcmV0LCBwYWdlUmVmZXJlbmNlOiBwYWdlLm9iamVjdF9pZCwgcGFnZURhdGE6IHBhZ2VfZGF0YSB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdWJ0eXBlIHRvIGl0cyBieXRlIHJlcHJlc2VudGF0aW9uXG4gICAgICogKi9cbiAgICBjb252ZXJ0U3VidHlwZShzdDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICBzd2l0Y2ggKHN0KSB7XG4gICAgICAgICAgICBjYXNlICdUZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJy9UZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL1RleHQnXG4gICAgICAgICAgICBjYXNlICdIaWdobGlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnL0hpZ2hsaWdodCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzIsIDEwNSwgMTAzLCAxMDQsIDEwOCwgMTA1LCAxMDMsIDEwNCwgMTE2XSAvLyA9ICcvSGlnaGxpZ2h0J1xuICAgICAgICAgICAgY2FzZSAnVW5kZXJsaW5lJzpcbiAgICAgICAgICAgIGNhc2UgJy9VbmRlcmxpbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg1LCAxMTAsIDEwMCwgMTAxLCAxMTQsIDEwOCwgMTA1LCAxMTAsIDEwMV0gLy8gPSAnL1VuZGVybGluZSdcbiAgICAgICAgICAgIGNhc2UgJ1NxdWlnZ2x5JzpcbiAgICAgICAgICAgIGNhc2UgJy9TcXVpZ2dseSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExMywgMTE3LCAxMDUsIDEwMywgMTAzLCAxMDgsIDEyMV0gLy8gPSAnL1NxdWlnZ2x5J1xuICAgICAgICAgICAgY2FzZSAnU3RyaWtlT3V0JzpcbiAgICAgICAgICAgIGNhc2UgJy9TdHJpa2VPdXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTYsIDExNCwgMTA1LCAxMDcsIDEwMSwgNzksIDExNywgMTE2XSAvLyA9ICcvU3RyaWtlT3V0J1xuICAgICAgICAgICAgY2FzZSAnU3F1YXJlJzpcbiAgICAgICAgICAgIGNhc2UgJy9TcXVhcmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgOTcsIDExNCwgMTAxXSAvLyA9ICcvU3F1YXJlJ1xuICAgICAgICAgICAgY2FzZSAnQ2lyY2xlJzpcbiAgICAgICAgICAgIGNhc2UgJy9DaXJjbGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDY3LCAxMDUsIDExNCwgOTksIDEwOCwgMTAxXSAvLyA9ICcvQ2lyY2xlJ1xuICAgICAgICAgICAgY2FzZSAnRnJlZVRleHQnOlxuICAgICAgICAgICAgY2FzZSAnL0ZyZWVUZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MCwgMTE0LCAxMDEsIDEwMSwgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9GcmVlVGV4dCdcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgY2FzZSAnL1BvbHlnb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCAxMDMsIDExMSwgMTEwXSAvLyA9ICcvUG9seWdvbidcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlMaW5lJzpcbiAgICAgICAgICAgIGNhc2UgJy9Qb2x5TGluZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODAsIDExMSwgMTA4LCAxMjEsIDc2LCAxMDUsIDExMCwgMTAxXSAvLyAnL1BvbHlMaW5lXG4gICAgICAgICAgICBjYXNlICdTdGFtcCc6XG4gICAgICAgICAgICBjYXNlICcvU3RhbXAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTYsIDk3LCAxMDksIDExMl0gLy8gPSAnL1N0YW1wJ1xuICAgICAgICAgICAgY2FzZSAnQ2FyZXQnOlxuICAgICAgICAgICAgY2FzZSAnL0NhcmV0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgOTcsIDExNCwgMTAxLCAxMTZdIC8vID0gJy9DYXJldCdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIGphdmFzY3JpcHQgbnVtYmVyIGFycmF5IHRvIGEgUERGIG51bWJlciBhcnJheVxuICAgICAqICovXG4gICAgd3JpdGVOdW1iZXJBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW1dyaXRlci5BUlJBWV9TVEFSVF1cblxuICAgICAgICBmb3IgKGxldCBpIG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGkpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIGFubm90YXRpb24gb2JqZWN0XG4gICAgICogKi9cbiAgICB3cml0ZUFubm90YXRpb25PYmplY3QoYW5ub3Q6IEFubm90YXRpb24pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGlmICghYW5ub3QuYXV0aG9yIHx8IFwiXCIgPT09IGFubm90LmF1dGhvcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gYXV0aG9yIHByb3ZpZGVkXCIpXG5cbiAgICAgICAgaWYgKCFhbm5vdC5jb250ZW50cyB8fCBcIlwiID09PSBhbm5vdC5jb250ZW50cylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gY29udGVudCBwcm92aWRlZFwiKVxuXG4gICAgICAgIGlmICghYW5ub3Qub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBvYmplY3RfaWRcIilcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IHRoaXMud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90Lm9iamVjdF9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVFlQRV9BTk5PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5yZWN0ICYmIGFubm90LnJlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUkVDVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZU51bWJlckFycmF5KGFubm90LnJlY3QpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1VCVFlQRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMuY29udmVydFN1YnR5cGUoYW5ub3QudHlwZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5VUERBVEVfREFURSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QudXBkYXRlRGF0ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5BVVRIT1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5hdXRob3IpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QuY29udGVudHMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkNPTlRFTlRTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuY29udGVudHMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSUQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmlkKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5hbm5vdGF0aW9uX2ZsYWcpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkZMQUcpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGFubm90LmFubm90YXRpb25fZmxhZykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5yID4gMSkgYW5ub3QuY29sb3IuciAvPSAyNTVcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5nID4gMSkgYW5ub3QuY29sb3IuZyAvPSAyNTVcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5iID4gMSkgYW5ub3QuY29sb3IuYiAvPSAyNTVcblxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09MT1IpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuY29sb3IuciwgYW5ub3QuY29sb3IuZywgYW5ub3QuY29sb3IuYl0pKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgb3BhY2l0eSA9IGFubm90Lm9wYWNpdHlcbiAgICAgICAgaWYgKG9wYWNpdHkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9QQUNJVFkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KG9wYWNpdHkpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmJvcmRlcikge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQk9SREVSKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmJvcmRlci5ob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci52ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIuYm9yZGVyX3dpZHRoXSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuZGVmYXVsdEFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRFRkFVTFRfQVBQRUFSQU5DRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmRlZmF1bHRBcHBlYXJhbmNlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5ub3QucGFnZVJlZmVyZW5jZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlBBR0VfUkVGRVJFTkNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5wYWdlUmVmZXJlbmNlLm9iamVjdF9pZCwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QucXVhZFBvaW50cykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUVVBRFBPSU5UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZU51bWJlckFycmF5KGFubm90LnF1YWRQb2ludHMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnZlcnRpY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5WRVJUSUNFUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy53cml0ZU51bWJlckFycmF5KGFubm90LnZlcnRpY2VzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5zdGFtcFR5cGUpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk5BTUUpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5EUkFGVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5jYXJldFN5bWJvbCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1kpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuUClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiBhbm5vdC5vYmplY3RfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYWxsIHRoZSBjcm9zcyBzaXRlIHJlZmVyZW5jZSB0YWJsZSBlbnRyaWVzIGFuZCBleHRyYWN0cyB0aGUgY29uc2VjdXRpdmUgc2VxdWVuY2VzXG4gICAgICogKi9cbiAgICBjb21wdXRlWHJlZlNlcXVlbmNlcygpOiBYUmVmW11bXSB7XG4gICAgICAgIGxldCBzZXFzOiBYUmVmW11bXSA9IFtdXG5cbiAgICAgICAgbGV0IG9yZGVyZWRfeHJlZnMgPSB0aGlzLnhyZWZzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2VxOiBYUmVmW10gPSBbb3JkZXJlZF94cmVmc1swXV1cbiAgICAgICAgbGV0IGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzWzBdLmlkXG4gICAgICAgIHNlcXMucHVzaChzZXEpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3JkZXJlZF94cmVmcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyZWRfeHJlZnNbaV0uaWQgPT09IGxhc3RfaWQgKyAxKSB7XG4gICAgICAgICAgICAgICAgc2VxLnB1c2gob3JkZXJlZF94cmVmc1tpXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VxID0gW29yZGVyZWRfeHJlZnNbaV1dXG4gICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzW2ldLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vxc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcHJlY2VkaW5nIHplcm9zICgwKSBpbiBmcm9udCBvZiB0aGUgJ3ZhbHVlJyB0byBtYXRjaCB0aGUgbGVuZ3RoXG4gICAgICogKi9cbiAgICBwYWQobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQucHVzaCg0OClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodmFsdWUpKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAqICovXG4gICAgd3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyLlhSRUZcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgLy8gd3JpdGUgZnJlZSBvYmplY3QgaGVhZFxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS5yZWZzWzBdXG4gICAgICAgIHRoaXMueHJlZnMucHVzaChoZWFkKVxuXG4gICAgICAgIGxldCBvcmRlcmVkX3NlcXVlbmNlcyA9IHRoaXMuY29tcHV0ZVhyZWZTZXF1ZW5jZXMoKVxuXG4gICAgICAgIGZvciAobGV0IHNlcXVlbmNlIG9mIG9yZGVyZWRfc2VxdWVuY2VzKSB7XG4gICAgICAgICAgICBoZWFkID0gc2VxdWVuY2VbMF1cbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaGVhZC5pZCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHNlcXVlbmNlLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3JldDogbnVtYmVyW10gPSBbXVxuICAgICAgICAgICAgICAgIF9yZXQgPSBfcmV0LmNvbmNhdCh0aGlzLnBhZCgxMCwgc2VxdWVuY2VbaV0ucG9pbnRlcikpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQodGhpcy5wYWQoNSwgc2VxdWVuY2VbaV0uZ2VuZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS5mcmVlKVxuICAgICAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkYpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2VbaV0udXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLk4pXG5cbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgICAgICBpZiAoX3JldC5sZW5ndGggPCAyMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJYUmVmIGVudHJ5IDwgMjAgYnl0ZXNcIilcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoX3JldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIHRyYWlsZXJcbiAgICAgKiAqL1xuICAgIHdyaXRlVHJhaWxlcihwb3NYcmVmOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyLlRSQUlMRVJcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU0laRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS50cmFpbGVyU2l6ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBsZXQgdHJhaWxlciA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlJPT1QpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLndyaXRlUmVmZXJlbmNlUG9pbnRlcih0cmFpbGVyLnJvb3QsIHRydWUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUFJFVilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS5zdGFydF9wb2ludGVyKSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNUQVJUWFJFRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShwb3NYcmVmKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVPRilcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBhbm5hdGlvbnMgYXQgdGhlIGVuZCBvZiB0aGUgUERGIGJ5dGUgcmVwcmVzZW50YXRpb24gYW5kIHJldHVybnNcbiAgICAgKiB0aGUgYnl0ZSBhcnJheVxuICAgICAqICovXG4gICAgd3JpdGUoKTogSW50OEFycmF5IHtcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkID0gdGhpcy5zb3J0UGFnZVdpc2UodGhpcy5hbm5vdGF0aW9ucylcblxuICAgICAgICBsZXQgcHRyOiBudW1iZXIgPSB0aGlzLmRhdGEubGVuZ3RoXG5cbiAgICAgICAgbGV0IG5ld19kYXRhOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkKSB7XG4gICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IHBhZ2VXaXNlU29ydGVkW2tleV1cblxuICAgICAgICAgICAgbGV0IGFubm90X2FycmF5ID0gdGhpcy53cml0ZUFubm90QXJyYXkocGFnZUFubm90cylcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2Uub2JqLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2UuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBwYWdlQW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90X29iaiA9IHRoaXMud3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90KVxuICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhbm5vdF9vYmoucHRyLm9iaixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBhbm5vdF9vYmoucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3Rfb2JqLmRhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X29iai5kYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNydGFibGUgPSB0aGlzLndyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy53cml0ZVRyYWlsZXIocHRyKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdCh0cmFpbGVyKVxuXG4gICAgICAgIGxldCBuZXdfZGF0YV9hcnJheSA9IG5ldyBJbnQ4QXJyYXkobmV3X2RhdGEpXG5cbiAgICAgICAgbGV0IHJldF9hcnJheSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5kYXRhLmxlbmd0aCArIG5ld19kYXRhX2FycmF5Lmxlbmd0aClcbiAgICAgICAgcmV0X2FycmF5LnNldCh0aGlzLmRhdGEpXG4gICAgICAgIHJldF9hcnJheS5zZXQobmV3X2RhdGEsIHRoaXMuZGF0YS5sZW5ndGgpXG5cbiAgICAgICAgcmV0dXJuIHJldF9hcnJheVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=