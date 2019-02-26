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
        this.toDelete = [];
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
        if (this.annotations.length === 0 && this.toDelete.length === 0)
            return this.data;
        let writer = new writer_1.Writer(this.data, this.annotations, this.toDelete, this.parser);
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
     * Extracts the rectangular hull from a quadPoint definition
     * */
    extractRectFromQuadPoints(quadPoints) {
        let x_values = quadPoints.filter((element, index) => index % 2 === 0);
        let y_values = quadPoints.filter((element, index) => index % 2 !== 0);
        return [Math.min(...x_values), Math.min(...y_values), Math.max(...x_values), Math.max(...y_values)];
    }
    /**
     * Checks the 'quadPoints' parameter
     * */
    checkQuadPoints(quadPoints) {
        if (quadPoints.length % 8 !== 0)
            throw Error(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`);
        quadPoints.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Quadpoint " + quadPoints + " has invalid entry: " + a);
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
        if (!contents)
            contents = "";
        if (!author)
            author = "";
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
            this.checkQuadPoints(quadPoints);
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
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
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
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
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
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
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
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
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
     * Creates an ink annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * inkList : a list of list containing the points for drawing the lines
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createInkAnnotation(page, rect, contents, author, inkList, color = { r: 0, g: 1, b: 0 }) {
        if (inkList.length === 0)
            throw Error("InkList is empty");
        let _inkList = [];
        if ('number' === typeof inkList[0]) {
            _inkList = [inkList];
        }
        else {
            _inkList = inkList;
        }
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            inkList: _inkList
        });
        annot.type = "/Ink";
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
     * Deletes the annotation with the given id or the given reference object
     * */
    deleteAnnotation(id) {
        return new Promise((resolve) => {
            // delete if it was just created but is not in the pdf document
            for (let i = 0; i < this.annotations.length; ++i) {
                if ('string' === typeof id && this.annotations[i].id === id) {
                    this.annotations = this.annotations.slice(i, 1);
                    resolve(this.toDelete);
                    return;
                }
                else if (id.obj && this.annotations[i].object_id && id.obj === this.annotations[i].object_id.obj && id.generation && id.generation === this.annotations[i].object_id.generation) {
                    this.annotations = this.annotations.slice(i, 1);
                    resolve(this.toDelete);
                    return;
                }
            }
            this.getAnnotations().then((annots) => {
                for (let _annots of annots) {
                    for (let annot of _annots) {
                        if ('string' === typeof id && annot.id === id) {
                            this.toDelete.push(annot);
                            resolve(this.toDelete);
                            return;
                        }
                        else if (id.obj && annot.object_id && id.obj === annot.object_id.obj && id.generation && id.generation === annot.object_id.generation) {
                            this.toDelete.push(annot);
                            resolve(this.toDelete);
                            return;
                        }
                    }
                }
            });
        });
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
    createPopupAnnotation() {
        throw Error("No yet implemented");
    }
    /**
     * Downloads the adapted PDF document
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
    /**
     * Saves the adapted PDF document in a nodejs environment
     * */
    // see https://github.com/angular/angular-cli/issues/9827
    // why is it so reprehensible to create libraries for both environments (browser and nodejs)? Those guys at angular might know.
    //
    // uncomment it if you want to use it.
    save(fileName = "output.pdf") {
        //     if (typeof process === 'undefined' && (<any>process).release.name !== 'node') {
        //         console.error('Use download() in a browser environment')
        //         return
        //     }
        //     const fs = require('fs')
        //     let data = this.write()
        //     fs.writeFile(fileName, Buffer.from(new Uint8Array(data)), (err: any) => {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log(`The file was written to: ${fileName}`);
        //     })
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
    extract(ptr, page) {
        // restrict the data array to the partition that actually contains the annotation data
        let obj_end_ptr = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, ptr, true);
        this.data = this.data.slice(ptr, obj_end_ptr);
        this.object_id = util_1.Util.extractObjectId(this.data, 0);
        this.type = "/" + util_1.Util.extractField(this.data, util_1.Util.SUBTYPE);
        this.rect = util_1.Util.extractField(this.data, util_1.Util.RECT);
        this.pageReference = page;
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
                a.extract(obj_table[refPtr.obj].pointer, page);
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
Util.CR = 13;
Util.LF = 10;
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
Util.DICT_START = [60, 60]; // '<<'
Util.DICT_END = [62, 62]; // '>>'
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

/***/ "./src/writer-util.ts":
/*!****************************!*\
  !*** ./src/writer-util.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
class WriterUtil {
    /**
     * Writes a reference pointer
     *
     * <obj_id> <generation> R
     *
     * The 'R' and the preceding space is only written in case 'referenced' is true
     * */
    static writeReferencePointer(ref, referenced = false) {
        let ret = util_1.Util.convertNumberToCharArray(ref.obj);
        ret.push(util_1.Util.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(ref.generation));
        if (referenced) {
            ret.push(util_1.Util.SPACE);
            ret.push(...util_1.Util.R);
        }
        return ret;
    }
    /**
     * Adds preceding zeros (0) in front of the 'value' to match the length
     * */
    static pad(length, value) {
        value = String(value);
        let ret = [];
        for (let i = 0; i < length - value.length; ++i) {
            ret.push(48);
        }
        ret = ret.concat(util_1.Util.convertNumberToCharArray(value));
        return ret;
    }
    /**
     * Writes a nested number array
     * */
    static writeNestedNumberArray(array) {
        let ret = util_1.Util.ARRAY_START;
        for (let subArray of array) {
            ret = ret.concat(WriterUtil.writeNumberArray(subArray));
            ret.push(util_1.Util.SPACE);
        }
        ret.push(...util_1.Util.ARRAY_END);
        return ret;
    }
    /**
     * Writes a javascript number array to a PDF number array
     * */
    static writeNumberArray(array) {
        let ret = util_1.Util.ARRAY_START;
        for (let i of array) {
            ret = ret.concat(util_1.Util.convertNumberToCharArray(i));
            ret.push(util_1.Util.SPACE);
        }
        ret.push(...util_1.Util.ARRAY_END);
        return ret;
    }
    /**
     * Replaces the /Annots field in an page object
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    static replaceAnnotsFieldInPageObject(data, page, page_ptr, annot_array_reference) {
        let ptr_objend = util_1.Util.locateSequence(util_1.Util.ENDOBJ, data, page_ptr, true);
        let complete_page_object_data = data.slice(page_ptr, ptr_objend + util_1.Util.ENDOBJ.length);
        let ret = [];
        if (page.hasAnnotsField) {
            // in this case the page object directly contains an array of references and
            // does not point to an array array object -- we replace the array of references with a pointer
            // to the reference array
            let ptr_annots = util_1.Util.locateSequence(util_1.Util.ANNOTS, complete_page_object_data, 0, true);
            ret = Array.from(complete_page_object_data.slice(0, ptr_annots + util_1.Util.ANNOTS.length));
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true));
            ret.push(util_1.Util.SPACE);
            let ptr_annots_array_end = util_1.Util.locateSequence(util_1.Util.ARRAY_END, complete_page_object_data, ptr_annots, true) + util_1.Util.ARRAY_END.length;
            ptr_annots_array_end = util_1.Util.skipDelimiter(complete_page_object_data, ptr_annots_array_end);
            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_annots_array_end, complete_page_object_data.length)));
        }
        else {
            let ptr_dict_end = util_1.Util.locateSequence(util_1.Util.DICT_END, complete_page_object_data, 0, true);
            ret = Array.from(complete_page_object_data.slice(0, ptr_dict_end));
            ret = ret.concat(util_1.Util.ANNOTS);
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true));
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_dict_end, complete_page_object_data.length)));
        }
        ret.push(util_1.Util.CR);
        ret.push(util_1.Util.LF);
        return ret;
    }
}
exports.WriterUtil = WriterUtil;


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
const writer_util_1 = __webpack_require__(/*! ./writer-util */ "./src/writer-util.ts");
/**
 * Creats the byte array that must be attached to the end of the document
 * */
class Writer {
    /**
     * data : The data representing the original PDF document
     * aannotations : The annotations to add to the document
     * */
    constructor(data, annotations, toDelete, parser) {
        this.data = data;
        this.annotations = annotations;
        this.toDelete = toDelete;
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
     * It returns the page object either extended by a /Annots field, if this did not exist yet or with the annots field replaced by a rerference pointer
     * to an array if the page object contains the list of annotations directly
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
        return writer_util_1.WriterUtil.replaceAnnotsFieldInPageObject(this.data, page, page_ptr.pointer, annot_array_reference);
    }
    /**
     * Takes the annotations of >>one<< page and derives the annotations array from it.
     * Thereby it also considers the potentially existing annotation array.
     *
     * toDelete := contains those annotations that must be deleted. It removes them from the reference array
     * and marks them as removed
     * */
    writeAnnotArray(annots, toDelete) {
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
        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a) => {
            let toDel = toDelete.find((t) => t.object_id.obj === a.obj && t.object_id.generation === a.generation);
            if (toDel) {
                toDel.is_deleted = true;
                return false;
            }
            return true;
        });
        let refArray_id = page.annotsPointer;
        let page_data = [];
        if (!refArray_id) {
            refArray_id = this.parser.getFreeObjectId();
            page_data = this.adaptPageObject(page, refArray_id);
        }
        let ret = writer_util_1.WriterUtil.writeReferencePointer(refArray_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret.push(Writer.ARRAY_START);
        for (let an of references) {
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(an, true));
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
            case 'Ink':
            case '/Ink':
                return [47, 73, 110, 107]; // = '/Ink'
        }
        return [];
    }
    /**
     * Writes an annotation object
     * */
    writeAnnotationObject(annot) {
        if (!annot.author)
            annot.author = "";
        if (!annot.contents)
            annot.contents = "";
        if (!annot.object_id)
            throw Error("No object_id");
        let ret = writer_util_1.WriterUtil.writeReferencePointer(annot.object_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.DICT_START);
        ret = ret.concat(Writer.TYPE_ANNOT);
        ret.push(Writer.SPACE);
        if (annot.rect && annot.rect.length > 0) {
            ret = ret.concat(Writer.RECT);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.rect));
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
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray([annot.color.r, annot.color.g, annot.color.b]));
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
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray([annot.border.horizontal_corner_radius, annot.border.vertical_corner_radius, annot.border.border_width]));
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
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(annot.pageReference.object_id, true));
            ret.push(Writer.SPACE);
        }
        if (annot.quadPoints) {
            ret = ret.concat(Writer.QUADPOINTS);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.quadPoints));
            ret.push(Writer.SPACE);
        }
        if (annot.vertices) {
            ret = ret.concat(Writer.VERTICES);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.vertices));
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
        if (annot.inkList) {
            ret = ret.concat(Writer.INKLIST);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNestedNumberArray(annot.inkList));
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
     * Constructs the pointers of the linked list that contains the ids of freed objects
     * */
    applyObjectFreeing(refs) {
        // write free object head
        let head = this.parser.documentHistory.getRecentUpdate().refs[0];
        let last_freed_object_id = head.id;
        let freed_objs = refs.filter(r => r.free);
        freed_objs = freed_objs.sort((a, b) => {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
        let lastobj = undefined;
        for (let obj of freed_objs) {
            if (!lastobj) {
                // set first object as list header
                head.pointer = obj.id;
            }
            if (lastobj) {
                lastobj.pointer = obj.id;
            }
            lastobj = obj;
        }
        if (freed_objs.length > 0)
            freed_objs[freed_objs.length - 1].pointer = last_freed_object_id;
        refs.push(head);
        return refs;
    }
    /**
     * Writes the crossite reference table
     * */
    writeCrossSiteReferenceTable() {
        let ret = Writer.XREF;
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        this.xrefs = this.applyObjectFreeing(this.xrefs);
        let ordered_sequences = this.computeXrefSequences();
        for (let sequence of ordered_sequences) {
            let head = sequence[0];
            ret = ret.concat(util_1.Util.convertNumberToCharArray(head.id));
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(sequence.length));
            ret.push(Writer.CR);
            ret.push(Writer.LF);
            for (let i = 0; i < sequence.length; ++i) {
                let _ret = [];
                _ret = _ret.concat(writer_util_1.WriterUtil.pad(10, sequence[i].pointer));
                _ret.push(Writer.SPACE);
                _ret = _ret.concat(writer_util_1.WriterUtil.pad(5, sequence[i].generation));
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
        ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(trailer.root, true));
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
            // write the array referencing to annotations of a certain page
            // it also removes references of annotations that must be deleted
            let annot_array = this.writeAnnotArray(pageAnnots, this.toDelete);
            this.xrefs.push({
                id: annot_array.ptr.obj,
                pointer: ptr,
                generation: annot_array.ptr.generation,
                free: false,
                update: true
            });
            new_data = new_data.concat(annot_array.data);
            ptr += annot_array.data.length;
            // add adapted page object if it exists -- In the case the page had no annotation yet there exists
            // no such array referring to its annotations. A pointer to such an array array must be added to the
            // page object. If this was done the `pageData` paramater is set and contains the adapted page object
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
            // writes the actual annotation object
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
        // take all annotations that are not deleted yet
        let _toDelete = this.toDelete.filter((t) => !t.is_deleted);
        let pageWiseSortedToDelete = this.sortPageWise(_toDelete);
        // adapt the remaining annotation reference tables
        for (let key in pageWiseSortedToDelete) {
            let del_data = this.updatePageAnnotationReferenceArray(pageWiseSortedToDelete[key]);
            this.xrefs.push({
                id: del_data.ptr.obj,
                pointer: ptr,
                generation: del_data.ptr.generation,
                free: false,
                update: true
            });
            new_data = new_data.concat(del_data.data);
            ptr += del_data.data.length;
        }
        // at this point all references to annotation objects in pages should be removed and we can free
        // the annotation object ids
        for (let toDel of this.toDelete) {
            if (!toDel.object_id)
                continue;
            this.xrefs.push({
                id: toDel.object_id.obj,
                pointer: -1,
                generation: toDel.object_id.generation + 1,
                free: true,
                update: false
            });
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
    /**
     * Removes the given annotation
     * */
    updatePageAnnotationReferenceArray(toDelete) {
        let page = toDelete[0].pageReference;
        if (!page)
            throw Error("Missing page reference");
        if (!page.object_id) {
            throw Error("Page without object id");
        }
        let references = page.annots;
        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a) => {
            let toDel = toDelete.find((t) => t.object_id.obj === a.obj && t.object_id.generation === a.generation);
            if (toDel) {
                toDel.is_deleted = true;
                return false;
            }
            return true;
        });
        let refArray_id = page.annotsPointer;
        let ret = writer_util_1.WriterUtil.writeReferencePointer(refArray_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret.push(Writer.ARRAY_START);
        for (let an of references) {
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(an, true));
            ret.push(Writer.SPACE);
        }
        ret.push(Writer.ARRAY_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: refArray_id, data: ret };
    }
}
Writer.N = 110;
Writer.F = 102;
Writer.SPACE = 32;
Writer.CR = 13;
Writer.LF = 10;
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
Writer.INKLIST = [47, 73, 110, 107, 76, 105, 115, 116]; // = '/InkList'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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Q0FBQyxJQUFVO1FBQ3pDLElBQUksUUFBUSxHQUFHLEtBQUs7UUFDcEIsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztRQUNsRCxJQUFJLEdBQUcsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7UUFDOUMsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLO1FBQ2xELElBQUksT0FBTyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0MsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTztRQUN0RCxJQUFJLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU87UUFDdEQsT0FBTyxRQUFRLEdBQUcsR0FBRztJQUN6QixDQUFDO0lBRUQ7O1NBRUs7SUFDRSxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBMkI7UUFDNUQsSUFBSSxHQUFHLFlBQVksU0FBUztZQUN4QixHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO1FBRTdCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2xDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDO1lBRTlCLElBQUksWUFBWSxHQUFHLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUU7Z0JBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlDLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUM1RTtnQkFFRCxPQUFPLEdBQUc7WUFDZCxDQUFDO1lBRUQsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUMzQixPQUFPLEdBQUc7U0FDYjtRQUVELDJCQUEyQjtRQUMzQixJQUFJLGNBQWMsR0FBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQ3JDLElBQUksR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLEtBQUs7Z0JBQ1QsUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNoQixLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQztvQkFBQyxLQUFLLENBQUM7d0JBQzFELFdBQVc7d0JBQ1gsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNqQyxNQUFLO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUFDLEtBQUssRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7d0JBQ2xFLE1BQUs7b0JBQ1QsS0FBSyxFQUFFO3dCQUNILHNCQUFzQjt3QkFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUN0QixHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDN0MsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3JCLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzFCLE1BQUs7aUJBQ1o7YUFDSjtZQUVELE9BQU8sR0FBRztRQUNkLENBQUM7UUFFRCxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLEdBQUc7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQWE7UUFDNUMsSUFBSSxHQUFHLEdBQVcsRUFBRTtRQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNqQyxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLEdBQUc7SUFDZCxDQUFDO0lBRUQ7O1NBRUs7SUFDRSxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBb0I7UUFDdkQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0FBcGhCYSxPQUFFLEdBQVcsRUFBRTtBQUNmLE9BQUUsR0FBVyxFQUFFO0FBQ2YsU0FBSSxHQUFXLFFBQVE7QUFDdkIsVUFBSyxHQUFXLEVBQUU7QUFDbEIsVUFBSyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFVBQVU7QUFDcEQsUUFBRyxHQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxRQUFRO0FBQ3ZDLFdBQU0sR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUM1RCxnQkFBVyxHQUFhLENBQUMsRUFBRSxDQUFDLEVBQUMsTUFBTTtBQUNuQyxjQUFTLEdBQWEsQ0FBQyxFQUFFLENBQUMsRUFBQyxNQUFNO0FBQ2pDLGlCQUFZLEdBQWEsQ0FBQyxFQUFFLENBQUMsRUFBQyxNQUFNO0FBQ3BDLGVBQVUsR0FBYSxDQUFDLEVBQUUsQ0FBQyxFQUFDLE1BQU07QUFDbEMsTUFBQyxHQUFhLENBQUMsRUFBRSxDQUFDLEVBQUMsTUFBTTtBQUN6QixVQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFdBQVc7QUFDMUQsV0FBTSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUNoRSxlQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsT0FBTztBQUN2QyxhQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsT0FBTztBQUNyQyxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtBQUN2RSxVQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFNBQVM7QUFDdkQsU0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN2QyxTQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hDLFVBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzlDLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDdkMsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87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Q3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFFM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBR0QsSUFBSSxP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WTtBQUNwRCxZQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGFBQWE7QUFFM0QsU0FBRSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxVQUFVO0FBQ3ZDLFFBQUMsR0FBVyxFQUFFO0FBOUNoQyx3QkErcUJDIiwiZmlsZSI6InBkZkFubm90YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwZGZBbm5vdGF0ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciwgUERGRG9jdW1lbnRQYXJzZXIsIFBhZ2UsIEFubm90YXRpb24sIEJvcmRlciwgQ29sb3IgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBXcml0ZXIgfSBmcm9tICcuL3dyaXRlcidcblxuLyoqXG4gKiBUaGUgYW5ub3RhdGlvbiBmYWN0b3J5IHByb3ZpZGVzIG1ldGhvZHMgdG8gY3JlYXRlIGFubm90YXRpb25zLiBUaG9zZSBhcmUgc3RvcmVkIHRlbXBvcmFyeVxuICogYW5kIHRoYW4gZW5jb2RlZCBpbnRvIFBERiBjb2RlIHdoZW4gdGhlIFBERiBkb2N1bWVudCBpcyBvdXRwdXR0ZWQgYW5kIGZvciBpbnN0YW5jZSBkb3dubG9hZGVkLlxuICogVGhhdFxuICogKi9cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdID0gW11cblxuICAgIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHBhcnNlcjogUERGRG9jdW1lbnRQYXJzZXJcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgUERGRG9jdW1lbnRQYXJzZXIodGhpcy5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhbm5vdGF0aW9ucyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFBERiBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgYSBQREYgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBnaXZlbiAncGF0aCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIGZldGNoKHBhdGgpLnRoZW4oKHIpID0+IHIuYmxvYigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXI6IGFueSA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQW5ub3RhdGlvbkZhY3RvcnkocmVhZGVyLnJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHsgLy8gbm9kZSBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGVudmlyb25tZW50XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkZW50aWZpZXIgbmVjZXNzYXJ5IGZvciBjcmVhdGluZyB0aGUgYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiBcIihwZGZBbm5vdGF0ZS1cIiArIFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSkuc2xpY2UoMywgMTcpICsgXCItXCIgKyB0aGlzLmFubm90YXRpb25zLmxlbmd0aCArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZGVmYXVsdCBib3JkZXJcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEJvcmRlcigpOiBCb3JkZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcl93aWR0aDogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBtYWRlIGFubm90YXRpb25zIGludG8gYSBieXRlc3RyZWFtXG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBJbnQ4QXJyYXkge1xuICAgICAgICBpZiAodGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy50b0RlbGV0ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICAgICAgbGV0IHdyaXRlcjogV3JpdGVyID0gbmV3IFdyaXRlcih0aGlzLmRhdGEsIHRoaXMuYW5ub3RhdGlvbnMsIHRoaXMudG9EZWxldGUsIHRoaXMucGFyc2VyKVxuXG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3JlY3QnIHBhcmFtZXRlciwgd2hldGhlciBhbGwgdGhlIGVudHJpZXMgYXJlIG9mIHR5cGUgbnVtYmVyIGFuZCBpZiB0aGUgdGhlIG51bWJlciBvZiBlbnRyaWVzIGlzIGNvcnJlY3RcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY2hlY2tSZWN0KG5yOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCAhPT0gbnIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgaGFzIGludmFsaWQgbnVtYmVyIG9mIGVudHJpZXM6IFwiICsgcmVjdCArIFwiIGhhcyBcIiArIHJlY3QubGVuZ3RoICsgXCIgZW50cmllcywgYnV0IHNob3VsZCBoYXZlIFwiICsgbnIgKyBcIiBlbnRyaWVzXCIpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBhKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVjdCBcIiArIHJlY3QgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWN0YW5ndWxhciBodWxsIGZyb20gYSBxdWFkUG9pbnQgZGVmaW5pdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBleHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgeF92YWx1ZXMgPSBxdWFkUG9pbnRzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMClcbiAgICAgICAgbGV0IHlfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgIT09IDApXG5cbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbiguLi54X3ZhbHVlcyksIE1hdGgubWluKC4uLnlfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueF92YWx1ZXMpLCBNYXRoLm1heCguLi55X3ZhbHVlcyldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSAncXVhZFBvaW50cycgcGFyYW1ldGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocXVhZFBvaW50cy5sZW5ndGggJSA4ICE9PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFF1YWRwb2ludHMgYXJyYXkgaGFzIGxlbmd0aCAke3F1YWRQb2ludHMubGVuZ3RofSBidXQgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDhgKVxuXG4gICAgICAgIHF1YWRQb2ludHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlF1YWRwb2ludCBcIiArIHF1YWRQb2ludHMgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiYXNlIGFubm90YXRpb24gdGhhdCBtZWFuIHRoZSByYXcgb2JqZWN0IG9mIGFubm90YXRpb24gb3IgdGhvc2UgcGFydHMgdGhhdCBhcmUgYWxsIGV4aXN0aW5nXG4gICAgICogYW5kIGVxdWFsbHkgc2V0IGluIGFsbCB0eXBlcyBvZiBhbm5vdGF0aW9uc1xuICAgICAqICovXG4gICAgY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcpOiBBbm5vdGF0aW9uIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKVxuICAgICAgICBhbm5vdC50eXBlID0gXCIvQW5ub3RcIixcbiAgICAgICAgICAgIGFubm90LnBhZ2UgPSBwYWdlLFxuICAgICAgICAgICAgYW5ub3Qub2JqZWN0X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKCksXG4gICAgICAgICAgICBhbm5vdC5pZCA9IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICBhbm5vdC5yZWN0ID0gcmVjdCxcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IGF1dGhvcixcbiAgICAgICAgICAgIGFubm90LnBhZ2VSZWZlcmVuY2UgPSB0aGlzLnBhcnNlci5nZXRQYWdlKHBhZ2UpLFxuICAgICAgICAgICAgYW5ub3QudXBkYXRlRGF0ZSA9IFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSksXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IGNvbnRlbnRzLFxuICAgICAgICAgICAgYW5ub3QuYm9yZGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0Qm9yZGVyKClcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVRleHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBpZiAoIWNvbnRlbnRzKVxuICAgICAgICAgICAgY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhdXRob3IpXG4gICAgICAgICAgICBhdXRob3IgPSBcIlwiXG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcblxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9UZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgbWFya3VwIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGlmICgwID09PSBxdWFkUG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHF1YWRQb2ludHMgPSBbcmVjdFswXSwgcmVjdFszXSwgcmVjdFsyXSwgcmVjdFszXSwgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFsxXV1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcXVhZFBvaW50czogcXVhZFBvaW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGhpZ2hsaWdodCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUhpZ2hsaWdodEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9IaWdobGlnaHRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gdW5kZXJsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVW5kZXJsaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9VbmRlcmxpbmVcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzcXVpZ2dsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWlnZ2x5QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVpZ2dseVwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmlrZSBvdXQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdHJpa2VPdXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1N0cmlrZU91dFwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZyZWUgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUZyZWVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJyaWdodC1qdXN0aWZpZWRcIixcbiAgICAgICAgICAgIGRlZmF1bHRBcHBlYXJhbmNlOiBcIi9JbnZhbGlkX2ZvbnQgOSBUZlwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0ZyZWVUZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTGluZUFubm90YXRpb24oKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzZSBhbm5vdGF0aW9uIG9iamVjdCBvZiBhIGNpcmNsZSBhbmQgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1NxdWFyZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9DaXJjbGVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2Ugb2JqZWN0IG9mIGEgcG9seWdvbiBvciBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBzdWJ0eXA6IFBvbHlnb24gb3IgUG9seUxpbmVcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBzdWJ0eXBlOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KTogQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IHN1YnR5cGVcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWdvbiBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvbkFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5Z29uXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seUxpbmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5rIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBpbmtMaXN0IDogYSBsaXN0IG9mIGxpc3QgY29udGFpbmluZyB0aGUgcG9pbnRzIGZvciBkcmF3aW5nIHRoZSBsaW5lc1xuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVJbmtBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBpbmtMaXN0OiBudW1iZXJbXVtdIHwgbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMCwgZzogMSwgYjogMCB9KSB7XG5cbiAgICAgICAgaWYgKGlua0xpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbmtMaXN0IGlzIGVtcHR5XCIpXG5cbiAgICAgICAgbGV0IF9pbmtMaXN0OiBhbnkgPSBbXVxuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbmtMaXN0WzBdKSB7XG4gICAgICAgICAgICBfaW5rTGlzdCA9IFtpbmtMaXN0XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBpbmtMaXN0XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBpbmtMaXN0OiBfaW5rTGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9JbmtcIlxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RhbXAgYW5ub3RhdGlvbi4gVGhlcmUgZXhpc3RzIGEgbnVtYmVyIG9mIHByZWRpZmluZWQgc3RhbXBzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIFBERiBkb2N1bWVudHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdGFtcFR5cGUgOiB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdGFtcEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3RhbXBUeXBlOiBzdHJpbmcgPSBcIkRyYWZ0XCIsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgWzUwLCA1MCwgODAsIDgwXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHN0YW1wVHlwZTogc3RhbXBUeXBlXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL1N0YW1wXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZpc3VhbCBzeW1ib2wgdGhhdCBpbmRjYXRlcyB0aGUgZXhpc3RhbmNlIG9mIHRleHQgZWRpdHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjYXJldFN5bWJvbCA6IE5vbmUgb3IgUCwgd2l0aCBQIGZvciB1c2luZyB0aGUgcGFyYWdyYXBoIHN5bWJvbCBhcyBjYXJldFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDYXJldEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY2FyZXRTeW1ib2w6IHN0cmluZyA9IFwiUFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFtdLCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY2FyZXRTeW1ib2w6IGNhcmV0U3ltYm9sXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0NhcmV0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgYW5ub3RhdGlvbiB3aXRoIHRoZSBnaXZlbiBpZCBvciB0aGUgZ2l2ZW4gcmVmZXJlbmNlIG9iamVjdFxuICAgICAqICovXG4gICAgZGVsZXRlQW5ub3RhdGlvbihpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpZiBpdCB3YXMganVzdCBjcmVhdGVkIGJ1dCBpcyBub3QgaW4gdGhlIHBkZiBkb2N1bWVudFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFubm90YXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgaWQgJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiB0aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCAmJiBpZC5vYmogPT09ICg8YW55PnRoaXMuYW5ub3RhdGlvbnNbaV0ub2JqZWN0X2lkKS5vYmogJiYgaWQuZ2VuZXJhdGlvbiAmJiBpZC5nZW5lcmF0aW9uID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkuZ2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5zbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRBbm5vdGF0aW9ucygpLnRoZW4oKGFubm90cykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IF9hbm5vdHMgb2YgYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFubm90IG9mIF9hbm5vdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIGFubm90LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9EZWxldGUucHVzaChhbm5vdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiBhbm5vdC5vYmplY3RfaWQgJiYgaWQub2JqID09PSBhbm5vdC5vYmplY3RfaWQub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gYW5ub3Qub2JqZWN0X2lkLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlc3VsIG9mIGFsbCBhbm5vdGF0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gVGhpcyB3aWxsXG4gICAgICogY29tcHJpc2UgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBleGlzdHMgYW5kIHRob3NlIHRoYXQgd2VyZSBjcmVhdGVkIHVzaW5nIHRoaXMgbGlicmFyeVxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbnMoKTogUHJvbWlzZTxBbm5vdGF0aW9uW11bXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0Fubm90cyA9IHRoaXMucGFyc2VyLmV4dHJhY3RBbm5vdGF0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdBbm5vdCBvZiB0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbm5vdHNbbmV3QW5ub3QucGFnZV0ucHVzaChuZXdBbm5vdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZXhpc3RpbmdBbm5vdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUG9wdXBBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICBsZXQgYTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICBsZXQgZXh0ZW5kZWRfcGRmID0gdGhpcy53cml0ZSgpXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2V4dGVuZGVkX3BkZl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgYS5ocmVmID0gdXJsXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgYS5yZW1vdmUoKVxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBhZGFwdGVkIFBERiBkb2N1bWVudCBpbiBhIG5vZGVqcyBlbnZpcm9ubWVudFxuICAgICAqICovXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2lzc3Vlcy85ODI3XG4gICAgLy8gd2h5IGlzIGl0IHNvIHJlcHJlaGVuc2libGUgdG8gY3JlYXRlIGxpYnJhcmllcyBmb3IgYm90aCBlbnZpcm9ubWVudHMgKGJyb3dzZXIgYW5kIG5vZGVqcyk/IFRob3NlIGd1eXMgYXQgYW5ndWxhciBtaWdodCBrbm93LlxuICAgIC8vXG4gICAgLy8gdW5jb21tZW50IGl0IGlmIHlvdSB3YW50IHRvIHVzZSBpdC5cbiAgICBzYXZlKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyAmJiAoPGFueT5wcm9jZXNzKS5yZWxlYXNlLm5hbWUgIT09ICdub2RlJykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBkb3dubG9hZCgpIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLndyaXRlKClcbiAgICAgICAgLy8gICAgIGZzLndyaXRlRmlsZShmaWxlTmFtZSwgQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZmlsZSB3YXMgd3JpdHRlbiB0bzogJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFhSZWYge1xuICAgICAgICBpZCA6IG51bWJlclxuICAgICAgICBwb2ludGVyIDogbnVtYmVyXG4gICAgICAgIGdlbmVyYXRpb24gOiBudW1iZXJcbiAgICAgICAgZnJlZSA6IGJvb2xlYW5cbiAgICAgICAgdXBkYXRlIDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgICAgIGlkIDogbnVtYmVyXG4gICAgICAgIGNvdW50IDogbnVtYmVyXG4gICAgICAgIGVuZF9wdHIgOiBudW1iZXIgLy8gcG9pbnRzIHRvIHRoZSBlbmQgb2YgdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxufVxuXG5pbnRlcmZhY2UgVHJhaWxlciB7XG4gICAgICAgIHNpemUgOiBudW1iZXJcbiAgICAgICAgcm9vdCA6IFJlZmVyZW5jZVBvaW50ZXJcbiAgICAgICAgcHJldj8gOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgICAgIFtpZCA6IG51bWJlcl0gOiBYUmVmXG59XG5cbi8qKlxuICogSG9sZHMgdGhlIGNvbXBsZXRlIGluZm9ybWF0aW9uIG9mIG9uZSB1cGRhdGUgc2VjdGlvbi4gVGhhdCBjb21wcmlzZXM6XG4gKiAtIHRoZSBib2R5IHVwZGF0ZVxuICogLSB0aGUgY3Jvc3Npc3RlIHJlZmVyZW5jZSB0YWJsZVxuICogLSB0aGUgdHJhaWxlclxuICogKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcHVibGljIHJlZnMgOiBYUmVmW10gPSBbXVxuXG4gICAgICAgIHB1YmxpYyBzdGFydF9wb2ludGVyIDogbnVtYmVyID0gLTFcblxuICAgICAgICBwdWJsaWMgdHJhaWxlciA6IFRyYWlsZXIgPSB7IHNpemUgOiAtMSwgcm9vdCA6IHtvYmogOiAtMSwgZ2VuZXJhdGlvbjogLTF9fVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNJWkUgOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vIC9TaXplXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFJPT1QgOiBudW1iZXJbXSA9IFs0NywgODIsIDExMSwgMTExLCAxMTZdIC8vIC9Sb290XG4gICAgICAgIHByaXZhdGUgc3RhdGljIFBSRVYgOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vIC9QcmV2XG4gICAgICAgIHByaXZhdGUgc3RhdGljIFNUQVJUWFJFRiA6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl1cblxuICAgICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkYXRhIDogSW50OEFycmF5KSB7IH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHdpdGggdGhlIGdpdmVuIGlkXG4gICAgICAgICAqICovXG4gICAgICAgIGdldFJlZmVyZW5jZSAoaWQgOiBudW1iZXIpIDogWFJlZiAgfCB1bmRlZmluZWQge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJlZiBvZiB0aGlzLnJlZnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWYuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBoZWFkZXIgb2YgYSBzdWIgc2VjdGlvbi4gRm9yIGluc3RhbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIDAgMSAvLyA8LS1cbiAgICAgICAgICogLi4uXG4gICAgICAgICAqXG4gICAgICAgICAqIFNvIHRoZSBvYmVqY3QgaWQgMCBhbmQgdGhlIG51bWJlciBvZiBzdWIgc2VjdGlvbiBlbnRyaWVzIDFcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIgKGluZGV4IDogbnVtYmVyKSA6IFN1YlNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgICAgICAgIGxldCBwdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgbGV0IG9ial9pZCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHIpXG5cbiAgICAgICAgICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIgKyAxKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0cl9yZWZfY291bnQgPSBwdHJcblxuICAgICAgICAgICAgICAgIHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZV9jb3VudCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9yZWZfY291bnQsIHB0cilcblxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkIDogb2JqX2lkLCBjb3VudCA6IHJlZmVyZW5jZV9jb3VudCwgZW5kX3B0ciA6ICBwdHJ9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgb2YgYSBzdWIgc2VjdGlvbi4gVGhlIGluZGV4IHBvaW50cyB0byB0aGUgc3RhcnQgb2ZcbiAgICAgICAgICogdGhlIGZpcnN0IHJlZmVyZW5jZSBhbmQgY291bnQgcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgdGhhdCBhcmVcbiAgICAgICAgICogY29udGFpbmVkIGluIHRoZSBzdWJzZWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZmlyc3Rfb2JqZWN0X2lkIGlzIHRoZSBpZCBwcm92aWRlZCBpbiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmluaXRpb24gb2YgdGhlIFBERiBzdGFuZGFyZCBvbmUgZW50cnkgaXMgMjAgYnl0ZXMgbG9uZ1xuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0UmVmZXJlbmNlcyAoIGluZGV4IDogbnVtYmVyLCBjb3VudCA6IG51bWJlciwgZmlyc3Rfb2JqZWN0X2lkIDogbnVtYmVyKSA6IFhSZWZbXSB7XG4gICAgICAgICAgICAgICAgbGV0IF9yZWZzIDogWFJlZltdID0gW11cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSwgaW5kZXggKz0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdHJfZW5kX3BvaW50ZXIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHJfZW5kX3BvaW50ZXIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdHJfZ2VuX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2VuZF9wb2ludGVyICsgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB0cl9nZW5fZW5kID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdGlvbiA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQsIHB0cl9nZW5fZW5kKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHRyX2ZsYWcgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX2VuZCArIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0ZyZWUgPSB0aGlzLmRhdGFbcHRyX2ZsYWddID09PSAxMDJcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogZmlyc3Rfb2JqZWN0X2lkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlciA6IHBvaW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb24gOiBnZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmVlIDogaXNGcmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgOiAhaXNGcmVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmc1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSB0cmFpbGVyIG9mIHRoZSBzdWJzZWN0aW9uIHRoYXQgbWVhbnMgdGhlIHBhcnQgc3RhdGluZyB3aXRoIHRoZSAndHJhaWxlcicga2V5d29yZCBhbmRcbiAgICAgICAgICogaW4gcGFydGljdWxhciB0aGUgdHJhaWxlciBkaWN0aW9uYXJ5XG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3RUcmFpbGVyIChpbmRleCA6IG51bWJlcikgOiBUcmFpbGVyIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5kX3RyYWlsZXJfaW5kZXggOiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uU1RBUlRYUkVGLCB0aGlzLmRhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShpbmRleCwgZW5kX3RyYWlsZXJfaW5kZXgpXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uU0laRSwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFVwZGF0ZVNlY3Rpb24uU0laRS5sZW5ndGhcbiAgICAgICAgICAgICAgICBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IFV0aWwuZXh0cmFjdE51bWJlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cblxuICAgICAgICAgICAgICAgIGxldCBwdHJfc3RhcnRfcm9vdCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5ST09ULCBfZGF0YSwgaW5kZXgsIHRydWUpICsgVXBkYXRlU2VjdGlvbi5ST09ULmxlbmd0aFxuICAgICAgICAgICAgICAgIHB0cl9zdGFydF9yb290ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcm9vdClcbiAgICAgICAgICAgICAgICBsZXQgcm9vdF9yZWZlcmVuY2UgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG5cblxuICAgICAgICAgICAgICAgIGxldCBwdHJfc3RhcnRfcHJldiA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5QUkVWLCBfZGF0YSwgaW5kZXgsIHRydWUpXG4gICAgICAgICAgICAgICAgbGV0IHByZXYgPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAoLTEgIT0gcHRyX3N0YXJ0X3ByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0cl9zdGFydF9wcmV2ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldiArIFVwZGF0ZVNlY3Rpb24uUFJFVi5sZW5ndGgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplIDogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QgOiByb290X3JlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgOiBwcmV2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyB0aGUgVXBkYXRlIHNlY3Rpb24gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICAgICAqICovXG4gICAgICAgIGV4dHJhY3QgKGluZGV4IDogbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF9wb2ludGVyID0gaW5kZXhcblxuICAgICAgICAgICAgICAgIGxldCBzdGFydF9wdHIgPSBpbmRleCArIDUgLy8gKyBsZW5ndGgoeHJlZikgKyBibGFua1xuICAgICAgICAgICAgICAgIHN0YXJ0X3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHN0YXJ0X3B0cilcblxuICAgICAgICAgICAgICAgIGxldCBmaXJzdF9oZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBoZWFkZXIgbXVzdCBiZSAwIHRvIGVzdGFibGlzaCB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X2hlYWRlci5pZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IgKFwiRmlyc3Qgb2JqZWN0IGlkIG5vdCAwXCIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGZpcnN0X2hlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgZmlyc3QgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdCh0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgZmlyc3RfaGVhZGVyLmNvdW50LCBmaXJzdF9oZWFkZXIuaWQpKVxuXG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCByZW1haW5pbmcgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGZpcnN0X2hlYWRlci5jb3VudCAqIDIwXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5kYXRhW3N0YXJ0X3B0cl0gIT09IDExNikgeyAvLyAxMTYgPSAndCcgc3RhcnQgb2YgdGhlIHdvcmQgdHJhaWxlciB0aGF0IGNvbmNsdWRlcyB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZSBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGhlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZXMgPSB0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgaGVhZGVyLmNvdW50LCBoZWFkZXIuaWQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQocmVmZXJlbmNlcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgaGVhZGVyLmNvdW50ICogMjBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWlsZXIgPSB0aGlzLmV4dHJhY3RUcmFpbGVyKHN0YXJ0X3B0cilcbiAgICAgICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbXBsZXRlIFBERiBkb2N1bWVudCBoaXN0b3J5IGFuZCB0aGVyZWZvcmUgaG9sZHMgdGhlXG4gKiB1cGRhdGVkIGJvZHkgcGFydHMsIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlcyBhbmQgdGhlIGRvY3VtZW50IHRyYWlsZXJzXG4gKiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50SGlzdG9yeSB7XG4gICAgICAgIHB1YmxpYyB1cGRhdGVzIDogVXBkYXRlU2VjdGlvbltdID0gW11cblxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTVEFSVFhSRUYgOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3N0YXJ0eHJlZidcblxuICAgICAgICBwdWJsaWMgdHJhaWxlclNpemUgOiBudW1iZXIgPSAtMVxuXG4gICAgICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGRhdGEgOiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgSW50OEFycmF5KGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIHVwZGF0ZSBzZWN0aW9uIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0VXBkYXRlU2VjdGlvbiAoaW5kZXggOiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlU2VjdGlvbiA9IG5ldyBVcGRhdGVTZWN0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICB1cGRhdGVTZWN0aW9uLmV4dHJhY3QoaW5kZXgpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaCh1cGRhdGVTZWN0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3RzIHRoZSBsYXN0IHVwZGF0ZSBzZWN0aW9uIG9mIGEgZG9jdW1lbnQgKHRoYXQgbWVhbnNcbiAgICAgICAgICogdGhlIG1vc3QgcmVjZW50IHVwZGF0ZSBsb2NhdGluZyBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlKVxuICAgICAgICAgKiAqL1xuICAgICAgICBleHRyYWN0RG9jdW1lbnRFbnRyeSAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHRoaXMuZGF0YS5sZW5ndGggLSAxXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyX3N0YXJ0eHJlZiA9IFV0aWwubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChEb2N1bWVudEhpc3RvcnkuU1RBUlRYUkVGLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyA5XG5cbiAgICAgICAgICAgICAgICBwdHIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfc3RhcnR4cmVmKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0VXBkYXRlU2VjdGlvbihwdHIpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXh0cmFjdHMgdGhlIGVudGlyZSB1cGRhdGUgc2VjdGlvbnNcbiAgICAgICAgICogKi9cbiAgICAgICAgZXh0cmFjdERvY3VtZW50SGlzdG9yeSAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0RG9jdW1lbnRFbnRyeSgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdXMgPSB0aGlzLnVwZGF0ZXNbMF1cblxuICAgICAgICAgICAgICAgIHdoaWxlICh1cy50cmFpbGVyLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24odXMudHJhaWxlci5wcmV2KVxuICAgICAgICAgICAgICAgICAgICAgICAgdXMgPSB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFpbGVyU2l6ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlci5zaXplXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJpbWFyaWx5IGZvciBjbGFyaWZpY2F0aW9uLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgbW9zdCByZWNlbnQuIFdlIHBhcnNlZCBiYWNrd2FyZHMuXG4gICAgICAgICAqICovXG4gICAgICAgIGdldFJlY2VudFVwZGF0ZSAoKSA6IFVwZGF0ZVNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXNbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCeSBydW5uaW5nIHRocm91Z2ggdGhlIFBEZiBoaXN0b3J5IHdlIGNhbiBmb3IgZXZlcnkgb2JqZWN0IGlkIGRldGVybWluZSB0aGUgcG9pbnRlciBhZGRyZXNzIHRvIHRoZSBtb3N0IHJlY2VudCB2ZXJzaW9uLCBhbmRcbiAgICAgICAgICogd2hldGhlciB0aGUgb2JqZWN0IGlkIGlzIHN0aWxsIGluIHVzZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNvIHRoZSBvYmplY3QgbG9va3VwIHRhYmxlIGhhcyBhbiBlbnRyeSBmb3IgZXZlcnkgZXhpc3Rpbmcgb2JqZWN0IGlkLCBhIHBvaW50ZXIgdG8gdGhlIHRoZSBtb3N0IHJlY2VudCBvYmplY3QgZGVmaW5pdGlvbiwgYXMgbG9uZ1xuICAgICAgICAgKiBhcyB0aGUgb2JqZWN0IGV4aXN0cywgb3IgYW4gYWNjb3JkaW5nIGluZGljYXRpb24gb3RoZXJ3aXNlLlxuICAgICAgICAgKiAqL1xuICAgICAgICBjcmVhdGVPYmplY3RMb29rdXBUYWJsZSAoKSA6IE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqVGFibGUgOiB7W2lkIDogbnVtYmVyXSA6IFhSZWZ9ID0ge31cblxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSB0aGlzLmdldFJlY2VudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgbGV0IG9ial9jb3VudCA9IHVwZGF0ZS50cmFpbGVyLnNpemVcblxuICAgICAgICAgICAgICAgIGxldCBpID0gMVxuICAgICAgICAgICAgICAgIHdoaWxlIChPYmplY3Qua2V5cyhvYmpUYWJsZSkubGVuZ3RoIDwgb2JqX2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IHVwZGF0ZS5yZWZzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJlZiBvZiByZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialRhYmxlW3JlZi5pZF0gPSByZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICsraVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpUYWJsZVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5ldyBvYmplY3QgaWQuIEl0IHByaW1hcmlseSB0cmllcyB0byByZXVzZSBhbiBleGlzdGluZyBpZCwgYnV0IGlmIG5vIHN1Y2ggZXhpc3RzIGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogbmV3IG9uZVxuICAgICAgICAgKiAqL1xuICAgICAgICBnZXRGcmVlT2JqZWN0SWQoKSA6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSB0aGlzLmdldFJlY2VudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgbGV0IGZyZWVfaGVhZGVyID0gdXBkYXRlLmdldFJlZmVyZW5jZSgwKVxuXG4gICAgICAgICAgICAgICAgaWYgKCFmcmVlX2hlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTW9zdCByZWNlbnQgY3Jvc3NzaXRlIHJlZmVyZW5jZSBoYXMgbm8gaGVhZGVyIGZvciB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXCIpXG5cbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gZnJlZV9oZWFkZXIucG9pbnRlciB8fCAwID09PSBmcmVlX2hlYWRlci5wb2ludGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT09IHRoaXMudHJhaWxlclNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVHJhaWxlciBzaXplIG5vdCBzZXRcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIDogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uIDogMCwgcmV1c2VkIDogZmFsc2UgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7b2JqIDogZnJlZV9oZWFkZXIucG9pbnRlciwgZ2VuZXJhdGlvbiA6IHRoaXMuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVtmcmVlX2hlYWRlci5pZF0uZ2VuZXJhdGlvbiwgcmV1c2VkIDogdHJ1ZX1cbiAgICAgICAgfVxufVxuIiwiZXhwb3J0IHsgUERGRG9jdW1lbnRQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7IEFubm90YXRpb25GYWN0b3J5IH0gZnJvbSAnLi9hbm5vdGF0aW9uJztcblxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBEb2N1bWVudEhpc3RvcnksIE9iamVjdExvb2t1cFRhYmxlIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5JztcblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhpcyBwYXJzZXIgZG9lcyBub3QgcGFyc2VzIHRoZSBQREYgZmlsZSBjb21wbGV0ZWx5LiBJdCBsb29rdXBzIHRob3NlXG4gKiBwYXJ0cyB0aGF0IGFyZSBpbXBvcnRhbnQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhbm5vdGF0aW9ucy4gRm9yIG1vcmUgaW5mb3JtYXRpb25cbiAqIHBsZWFzZSByZWFkIHRoZSBSRUFETUUuXG4gKiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yIHtcbiAgICByOiBudW1iZXJcbiAgICBnOiBudW1iZXJcbiAgICBiOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgYm9yZGVyX3dpZHRoOiBudW1iZXJcbiAgICBkYXNoX3BhdHRlcj86IG51bWJlcltdXG59XG5cbi8qKlxuICogUmVmZXJlbmNlcyBpbiBQREYgZG9jdW1lbnMgYXJlICBvZiB0aGUgZm9ybVxuICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAqXG4gKiBUaGlzIGhvbGRzIHN1Y2ggYSByZWZlcmVuY2VcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZVBvaW50ZXIge1xuICAgIG9iajogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgcmV1c2VkPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XG4gICAgcGFnZTogbnVtYmVyID0gLTEvLyB0aGUgdGFyZ2V0IHBhZ2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICB0eXBlOiBzdHJpbmcgPSBcIlwiLy8gdGhlIHN1YiB0eXBlIG9mIHRoZSBhcnJheSAoVGV4dCwgSGlnaGxpZ2h0LCAuLi4pXG4gICAgb2JqZWN0X2lkOiBSZWZlcmVuY2VQb2ludGVyIHwgbnVsbCA9IG51bGwvLyBhbiB1bnVzZWQgb2JqZWN0IGlkXG4gICAgaWQ6IHN0cmluZyA9IFwiXCIvLyB1bmlxdWUgYW5uYXRpb24gaWRlbnRpZmllclxuICAgIHJlY3Q6IG51bWJlcltdID0gW10vLyB0aGUgbG9jYXRpb24gb2YgdGhlIGFubm90YXRpb25cbiAgICBhdXRob3I6IHN0cmluZyA9IFwiXCIvLyB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgcGFnZVJlZmVyZW5jZTogUGFnZSB8IG51bGwgPSBudWxsLy8gVGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3QgdG8gd2hpY2ggdGhlIGFubm90YXRpb24gaXMgYWRkZWRcbiAgICB1cGRhdGVEYXRlOiBzdHJpbmcgPSBcIlwiLy8gVGhlIGRhdGUgd2hlbiB0aGUgYW5ub3RhdGlvbiB3YXMgY3JlYXRlZCBvciB1cGRhdGVkXG4gICAgY29udGVudHM/OiBzdHJpbmcgLy8gVGV4dCB0aGF0IHNoYWxsIGJlIGRpc3BsYXllZCBmb3IgdGhlIGFubm90YXRpb25cbiAgICBhbm5vdGF0aW9uX2ZsYWc/OiBudW1iZXIgLy8gU2VlIFBERiBzcGNlY2lmaWNhdGlvbiAnQW5ub3RhdGlvbiBGbGFnJ1xuICAgIGFwcGVhcmFuY2VfZGljdGlvbmFyeT86IGFueSAvLyBjb250cm9sIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgYXBwZWFyYW5jZV9zdGF0ZT86IGFueSAvLyBjaGFuZ2UgdGhlIGFwcGVhcmFuY2UgYWNjb3JkaW5nIHRvIHN0YXRlc1xuICAgIGJvcmRlcj86IEJvcmRlciB8IG51bGwgPSBudWxsLy8gZGVmaW5lIHRoZSBib3JkZXJcbiAgICBjb2xvcj86IENvbG9yIHwgbnVsbCA9IG51bGwvLyB0aGUgY29sb3Igc2V0XG4gICAgb3BhY2l0eT86IG51bWJlciAvLyB0aGUgb3BhY2l0eSB2YWx1ZSAoQ0EgY2FsbGVkIGluIHRoZSBQREYgc3BlYylcbiAgICByaWNodGV4dD86IHN0cmluZyAvLyByaWNoIHRleHQgc3RyaW5nIGRpc3BsYXllZCBpbiB0aGUgcG9wdXAgd2luZG93IHdoZW4gdGhlIGFubm90YXRpb24gaXMgb3BlbmVkXG4gICAgaW5pdGlhbGx5T3Blbj86IGJvb2xlYW4gLy8gZmxhZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBhbm5vdGF0aW9uIHNoYWxsIGluaXRpYWxseSBiZSBvcGVuXG4gICAgaWNvbk5hbWU/OiBzdHJpbmcgLy8gbmFtZSBvZiB0aGUgdXNlZCBpY29uXG4gICAgYW5ub3RhdGlvblN0YXRlPzogc3RyaW5nIC8vIHRoZSBzdGF0ZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHN0YXRlTW9kZWw/OiBzdHJpbmdcbiAgICBkZWZhdWx0QXBwZWFyYW5jZT86IHN0cmluZyAvLyBkZWZhdWx0IGFwcGVhcmFuY2Ugc3RyaW5nXG4gICAgdGV4dEFsaWdubWVudD86IHN0cmluZyAvLyBsZWZ0LWp1c3RpZmllZCwgY2VudGVyZWQsIHJpZ2h0LWp1c3RpZmllZFxuICAgIHJpY2hUZXh0U3RyaW5nPzogc3RyaW5nIC8vIGdlbmVyYXRlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGNhbGxvdXRMaW5lPzogbnVtYmVyW10gLy8gY2FsbCBvdXQgbGluZVxuICAgIGludGVudD86IHN0cmluZyAvLyBhIHN0cmluZyBkZXNjcmliaW5nIHRoZSBpbnRlbnQ6IEZyZWVUZXh0LCBGcmVlVGV4dENhbGxvdXQsIEZyZWVUZXh0VHlwZVdyaXRlclxuICAgIGJvcmRlckVmZmVjdD86IGFueVxuICAgIHJkPzogYW55IC8vID9cbiAgICBib3JkZXJTdHlsZT86IGFueSAvLyBib3JkZXIgc3R5bGVcbiAgICBsaW5lRW5kaW5nPzogc3RyaW5nIC8vIHRoZSBsaW5lIGVuZGluZyB0eXBlIG9mIHRoZSBjYWxsb3V0IGxpbmVcbiAgICBzdGFtcFR5cGU/OiBzdHJpbmcgLy8gdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICBjYXJldFN5bWJvbD86IHN0cmluZyAvLyBDYW4gYmUgUCB0byB1c2UgYSBwYXJhZ3JhcGggc3ltYm9sIGZvciB0aGUgY2FyZXQgb3IgTm9uZVxuICAgIHF1YWRQb2ludHM/OiBudW1iZXJbXSAvLyBzcGVjaWZpZXMgaG93IHRoZSBhbm5vdGF0aW9uIGdvZXMgYXJyb3VuZCB0aGUgdGV4dFxuICAgIGlua0xpc3Q/OiBudW1iZXJbXVtdXG4gICAgYm9yZGVyX3N0eWxlPzogYW55XG4gICAgY29sb3Jfc3BhY2U/OiBudW1iZXJbXVxuICAgIGJvcmRlcl9lZmZlY3Q/OiBhbnlcbiAgICB2ZXJ0aWNlcz86IG51bWJlcltdXG4gICAgbGluZV9lbmRpbmc/OiBzdHJpbmdbXVxuICAgIGludGVyaW9yX2NvbG9yPzogbnVtYmVyW11cbiAgICBtZWFzdXJlPzogYW55XG4gICAgaXNfZGVsZXRlZD86IGJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXkgPSBuZXcgSW50OEFycmF5KFtdKSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBhbm5vdGF0aW9uIG9iamVjdCAocGFydGlhbGx5KVxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlciwgcGFnZTogUGFnZSkge1xuICAgICAgICAvLyByZXN0cmljdCB0aGUgZGF0YSBhcnJheSB0byB0aGUgcGFydGl0aW9uIHRoYXQgYWN0dWFsbHkgY29udGFpbnMgdGhlIGFubm90YXRpb24gZGF0YVxuICAgICAgICBsZXQgb2JqX2VuZF9wdHI6IG51bWJlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIG9ial9lbmRfcHRyKVxuXG4gICAgICAgIHRoaXMub2JqZWN0X2lkID0gVXRpbC5leHRyYWN0T2JqZWN0SWQodGhpcy5kYXRhLCAwKVxuXG4gICAgICAgIHRoaXMudHlwZSA9IFwiL1wiICsgVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlNVQlRZUEUpXG4gICAgICAgIHRoaXMucmVjdCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5SRUNUKVxuICAgICAgICB0aGlzLnBhZ2VSZWZlcmVuY2UgPSBwYWdlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZSA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5NKVxuICAgICAgICB0aGlzLmJvcmRlciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5CT1JERVIpXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQylcbiAgICAgICAgdGhpcy5hdXRob3IgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuVClcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5OTSlcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5DT05URU5UUylcbiAgICAgICAgdGhpcy5xdWFkUG9pbnRzID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlFVQURQT0lOVFMpXG4gICAgICAgIHRoaXMuaW5rTGlzdCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5JTktMSVNUKVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBDYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIENhdGFsb2dPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5KSB7IH1cblxuICAgIHByaXZhdGUgcGFnZXNPYmplY3RJZDogUmVmZXJlbmNlUG9pbnRlciA9IHsgb2JqOiAtMSwgZ2VuZXJhdGlvbjogLTEgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgY2F0YWxvZyBvYmplY3QgZnJvbSB0aGUgZGF0YSBhdCB0aGUgZ2l2ZW4gcHRyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwdHJfcGFnZXNfa2V5ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlBBR0VTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLlBBR0VTLmxlbmd0aFxuXG4gICAgICAgIHRoaXMucGFnZXNPYmplY3RJZCA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHRoaXMuZGF0YSwgcHRyX3BhZ2VzX2tleSlcbiAgICB9XG5cbiAgICBnZXRQYWdlc09iamVjdElkKCk6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlc09iamVjdElkXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFBhZ2VUcmVlIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VUcmVlIHtcblxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIGdlbmVyYXRpb246IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIHBhZ2VDb3VudDogbnVtYmVyID0gLTFcblxuICAgIHByaXZhdGUgcGFnZVJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSwgcHJpdmF0ZSBvYmplY3RMb29rdXBUYWJsZTogT2JqZWN0TG9va3VwVGFibGUpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIHRoZSBwcm92aWRlZCByZWZlcmVuY2UgYW5kIHJldHVybiB0cnVlLCBpZiB0aGUgb2JqZWN0IHR5cGUgaXMgL1BhZ2VcbiAgICAgKiAqL1xuICAgIGlzUGFnZShyZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgaWYgKHhyZWYuZ2VuZXJhdGlvbiAhPT0gcmVmZXJlbmNlLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZSh4cmVmLnBvaW50ZXIsIHB0cilcblxuICAgICAgICByZXR1cm4gKC0xICE9PSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRSwgX2RhdGEsIDAsIHRydWUpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBraWRzIHJlZmVyZW5jZXMgcmVjdXJzaXZlbHkuXG4gICAgICogRm9yIGV2ZXJ5IGtpZCBpdCBjaGVja3MgaWYgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IHR5cGUgaXM6XG4gICAgICogLSBhIC9QYWdlcyBvYmplY3QgdGhlbiBpdCByZWN1cnNpdmVseSBsb29rdXBzIGl0cyBjaGlsZHJlblxuICAgICAqIC0gYSAvUGFnZSBvYmplY3QgdGhlbiBpdCBhZGRzIHRoZSByZWZlcmVuY2VzXG4gICAgICogKi9cbiAgICBleHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdKSB7XG5cbiAgICAgICAgZm9yIChsZXQgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGFnZShyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGhhbmRsZSBhcnJheSAtLSByZWN1cnNpdmVseSBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgICAgICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICAgICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyID0geHJlZi5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICBsZXQga2lkc19pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5LSURTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLktJRFMubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlfZGF0YSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBraWRzX2luZGV4ICsgMSlcblxuICAgICAgICAgICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgb2JqZWN0IGRhdGEgYXQgdGhlIGdpdmVuIHBvaW50ZXJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGtleV9pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5DT1VOVCwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5DT1VOVC5sZW5ndGhcblxuICAgICAgICAvLyBUaGUgY29tcGxldGUgcGFnZSBjb3VudCBpcyBzcGVjaWZpZWQgaW4gdGhlIHRvcCBsZXZlbCBwYWdldHJlZVxuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGtleV9pbmRleClcblxuICAgICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0aGF0IGFuIG9iamVjdCBvZiB0eXBlIC9QYWdlcyByZWZlcmVuY2VzIGFnYWluIHRvIG9iamVjdHMgb2YgdHlwZXMgL1BhZ2VzIHNvIHdlIG11c3RcbiAgICAgICAgLy8gYXBwbHkgYSByZWN1cnNpdmUgZXZhbHVhdGlvblxuICAgICAgICBsZXQga2lkc19pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5LSURTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLktJRFMubGVuZ3RoXG5cbiAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcyA9IFtdXG5cbiAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfZGF0YSlcblxuICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYWdlcyB0aGUgcGFnZSB0cmVlIGNvbXByaXNlc1xuICAgICAqICovXG4gICAgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VDb3VudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3RzXG4gICAgICogKi9cbiAgICBnZXRQYWdlUmVmZXJlbmNlcygpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlUmVmZXJlbmNlc1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcGFnZSBvYmplY3QgaW4gdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgICBwdWJsaWMgb2JqZWN0X2lkOiBSZWZlcmVuY2VQb2ludGVyIHwgdW5kZWZpbmVkIC8vIFRoZSBvYmplY3QgaWQgYW5kIGdlbmVyYXRpb24gb2YgdGhlIG9iamVjdFxuXG4gICAgcHVibGljIGFubm90czogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgIHB1YmxpYyBoYXNBbm5vdHNGaWVsZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwdWJsaWMgYW5ub3RzUG9pbnRlcjogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXksIHByaXZhdGUgZG9jdW1lbnRIaXN0b3J5OiBEb2N1bWVudEhpc3RvcnkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgaW4gdGhlIGxpbmtlZCBhbm5vdGF0aW9ucyBhcnJheVxuICAgICAqICovXG4gICAgZXh0cmFjdEFubm90YXRpb25BcnJheSgpIHtcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBpZiAoIXRoaXMuYW5ub3RzUG9pbnRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQW5ub3RhdGlvbnMgcG9pbnRlciBub3Qgc2V0XCIpXG5cbiAgICAgICAgbGV0IHJlZl9hbm5vdF90YWJsZSA9IG9ial90YWJsZVt0aGlzLmFubm90c1BvaW50ZXIub2JqXVxuXG4gICAgICAgIGlmIChyZWZfYW5ub3RfdGFibGUuZ2VuZXJhdGlvbiAhPT0gdGhpcy5hbm5vdHNQb2ludGVyLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlZmVyZW5jZSBhbm5vdGF0aW9uIHRhYmxlIG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHB0ciA9IHJlZl9hbm5vdF90YWJsZS5wb2ludGVyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLk9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5PQkoubGVuZ3RoXG5cbiAgICAgICAgcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2UpXG5cbiAgICAgICAgdGhpcy5hbm5vdHMgPSByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHBhZ2Ugb2JqZWN0IHN0YXJ0aW5nIGF0IHBvc2l0aW9uIHB0clxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlcikge1xuICAgICAgICBsZXQgaWRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuICAgICAgICBsZXQgb2JqZWN0X2lkOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpZF9wdHIpXG5cbiAgICAgICAgbGV0IGVuZF9pZF9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGlkX3B0ciArIDEpICsgMVxuICAgICAgICBsZXQgb2JqZWN0X2dlbjogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgZW5kX2lkX3B0cilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IHsgb2JqOiBvYmplY3RfaWQsIGdlbmVyYXRpb246IG9iamVjdF9nZW4gfVxuXG4gICAgICAgIGxldCBlbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHB0ciwgZW5kX3B0cilcblxuICAgICAgICBsZXQgYW5ub3RzX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BTk5PVFMsIF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGlmICgtMSAhPT0gYW5ub3RzX3B0cikge1xuICAgICAgICAgICAgdGhpcy5oYXNBbm5vdHNGaWVsZCA9IHRydWVcblxuICAgICAgICAgICAgYW5ub3RzX3B0ciArPSBVdGlsLkFOTk9UUy5sZW5ndGggKyAxXG4gICAgICAgICAgICBhbm5vdHNfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICBpZiAoX2RhdGFbYW5ub3RzX3B0cl0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2UpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFubm90cyA9IHJlZnNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdHNQb2ludGVyID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoX2RhdGEsIGFubm90c19wdHIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgcmVsZXZhbnQgcGFydHMgb2YgdGhlIFBERiBkb2N1bWVudCBhbmQgcHJvdmlkZXMgZnVuY3Rpb25hbGl0eSB0byBleHRyYWN0IHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gZm9yXG4gKiBhZGRpbmcgYW5ub3RhdGlvbnNcbiAqICovXG5leHBvcnQgY2xhc3MgUERGRG9jdW1lbnRQYXJzZXIge1xuXG4gICAgcHVibGljIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeShuZXcgSW50OEFycmF5KFtdKSlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcblxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkodGhpcy5kYXRhKVxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeS5leHRyYWN0RG9jdW1lbnRIaXN0b3J5KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnJlZSBvYmplY3QgaWQuIEl0IGZpcnN0IGNoZWNrcyB3ZXRoZXIgdGhlcmUgY2FuIGJlIGFuIGZyZWVkIG9iamVjdCBpZCByZXVzZWQuIElmIHRoYXQgaXMgbm90IHRoZSBjYXNlXG4gICAgICogaXQgY3JlYXRlcyBhIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldEZyZWVPYmplY3RJZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBnZXRDYXRhbG9nKCk6IENhdGFsb2dPYmplY3Qge1xuICAgICAgICBsZXQgcm9vdF9vYmogPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnJvb3RcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19wdHIgPSBvYmpfdGFibGVbcm9vdF9vYmoub2JqXS5wb2ludGVyXG5cbiAgICAgICAgbGV0IGNhdGFsb2dfb2JqZWN0ID0gbmV3IENhdGFsb2dPYmplY3QodGhpcy5kYXRhKVxuICAgICAgICBjYXRhbG9nX29iamVjdC5leHRyYWN0KGNhdGFsb2dfcHRyKVxuXG4gICAgICAgIHJldHVybiBjYXRhbG9nX29iamVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHRyZWUgb2JqZWN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0UGFnZVRyZWUoKTogUGFnZVRyZWUge1xuICAgICAgICBsZXQgb2JqX3RhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSB0aGlzLmdldENhdGFsb2coKVxuXG4gICAgICAgIGxldCBwYWdlc19pZCA9IGNhdGFsb2dfb2JqZWN0LmdldFBhZ2VzT2JqZWN0SWQoKVxuICAgICAgICBsZXQgcGFnZXNfcmVmID0gb2JqX3RhYmxlW3BhZ2VzX2lkLm9ial1cblxuICAgICAgICBpZiAocGFnZXNfcmVmLmdlbmVyYXRpb24gIT09IHBhZ2VzX2lkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2VzIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwYWdlVHJlZSA9IG5ldyBQYWdlVHJlZSh0aGlzLmRhdGEsIG9ial90YWJsZSlcbiAgICAgICAgcGFnZVRyZWUuZXh0cmFjdChwYWdlc19yZWYucG9pbnRlcilcblxuICAgICAgICByZXR1cm4gcGFnZVRyZWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB3aXRoIHRoZSBnaXZlbiBwYWdlTnVtYmVyXG4gICAgICogKi9cbiAgICBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IFBhZ2Uge1xuICAgICAgICBsZXQgcGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IHBhZ2VJZCA9IHBhZ2VUcmVlLmdldFBhZ2VSZWZlcmVuY2VzKClbcGFnZU51bWJlcl1cblxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGlmIChvYmpfdGFibGVbcGFnZUlkLm9ial0uZ2VuZXJhdGlvbiAhPT0gcGFnZUlkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IG9ial9wdHIgPSBvYmpfdGFibGVbcGFnZUlkLm9ial0ucG9pbnRlclxuXG4gICAgICAgIGxldCBwYWdlID0gbmV3IFBhZ2UodGhpcy5kYXRhLCB0aGlzLmRvY3VtZW50SGlzdG9yeSlcbiAgICAgICAgcGFnZS5leHRyYWN0KG9ial9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbm5vdGF0aW9ucyB0aGF0IGV4aXN0IGluIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZXh0cmFjdEFubm90YXRpb25zKCk6IEFubm90YXRpb25bXVtdIHtcbiAgICAgICAgbGV0IGFubm90czogQW5ub3RhdGlvbltdW10gPSBbXVxuICAgICAgICBsZXQgcHQ6IFBhZ2VUcmVlID0gdGhpcy5nZXRQYWdlVHJlZSgpXG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IHBhZ2VDb3VudDogbnVtYmVyID0gcHQuZ2V0UGFnZUNvdW50KClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcGFnZTogUGFnZSA9IHRoaXMuZ2V0UGFnZShpKVxuXG4gICAgICAgICAgICBsZXQgYW5ub3RhdGlvblJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCByZWZQdHIgb2YgYW5ub3RhdGlvblJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBBbm5vdGF0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICBhLmV4dHJhY3Qob2JqX3RhYmxlW3JlZlB0ci5vYmpdLnBvaW50ZXIsIHBhZ2UpXG4gICAgICAgICAgICAgICAgYS5wYWdlID0gaVxuICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHMucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5ub3RzLnB1c2gocGFnZUFubm90cylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbm5vdHNcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBieXRlIGFycmF5IHJlcHJlc2VudGluZyB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFV0aWwge1xuXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRTogc3RyaW5nID0gXCIvVHlwZSBcIlxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBfVFlQRTogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxXSAvLyAnL1R5cGUnXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl0gLy8gJ29iaidcbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XSAvLyAnZW5kb2JqJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlcltdID0gWzkxXSAvLyAnWydcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORDogbnVtYmVyW10gPSBbOTNdIC8vICddJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX1NUQVJUOiBudW1iZXJbXSA9IFs0MF0gLy8gJygnXG4gICAgcHVibGljIHN0YXRpYyBTVFJJTkdfRU5EOiBudW1iZXJbXSA9IFs0MV0gLy8gJyknXG4gICAgcHVibGljIHN0YXRpYyBSOiBudW1iZXJbXSA9IFs4Ml0gLy8gJ1InXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTZdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVFM6IG51bWJlcltdID0gWzQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2LCAxMTVdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdIC8vICc8PCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfRU5EOiBudW1iZXJbXSA9IFs2MiwgNjJdIC8vICc+PidcbiAgICBwdWJsaWMgc3RhdGljIFNVQlRZUEU6IG51bWJlcltdID0gWzQ3LCA4MywgMTE3LCA5OCwgMTE2LCAxMjEsIDExMiwgMTAxXSAvLyAnL1N1YnR5cGUnXG4gICAgcHVibGljIHN0YXRpYyBQQUdFUzogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDEsIDExNV0gLy8gL1BhZ2VzXG4gICAgcHVibGljIHN0YXRpYyBQQUdFOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIEtJRFM6IG51bWJlcltdID0gWzQ3LCA3NSwgMTA1LCAxMDAsIDExNV1cbiAgICBwdWJsaWMgc3RhdGljIENPVU5UOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTE3LCAxMTAsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgTTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyAnL00nXG4gICAgcHVibGljIHN0YXRpYyBUOiBudW1iZXJbXSA9IFs0NywgODRdIC8vICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIEY6IG51bWJlcltdID0gWzQ3LCA3MF0gLy8gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgQzogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyAnL0MnXG4gICAgcHVibGljIHN0YXRpYyBDQTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIE5NOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyAnL05NJ1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyW10gPSBbNDcsIDgwXSAvLyAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBDT05URU5UUzogbnVtYmVyW10gPSBbNDcsIDY3LCAxMTEsIDExMCwgMTE2LCAxMDEsIDExMCwgMTE2LCAxMTVdIC8vICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCT1JERVI6IG51bWJlcltdID0gWzQ3LCA2NiwgMTExLCAxMTQsIDEwMCwgMTAxLCAxMTRdIC8vICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgSU5LTElTVDogbnVtYmVyW10gPSBbNDcsIDczLCAxMTAsIDEwNywgNzYsIDEwNSwgMTE1LCAxMTZdIC8vICcvSW5rTGlzdCdcblxuICAgIC8qKlxuICAgICAqIEFzc3VtZXMgdGhhdCBhdCBwb3NpdGlvbiBpbmRleCBpcyBhIGRlbGltaXRlciBhbmQgdGhhbiBydW5zIGFzIGxvbmcgZm9yd2FyZCB1bnRpbCBpdCBmaW5kc1xuICAgICAqIGFub3RoZXIgZGVsaW1pdGVyIG9yIHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2tpcERlbGltaXRlcihkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgZGF0YS5sZW5ndGggJiYgdGhpcy5pc0RlbGltaXRlcihkYXRhW2luZGV4XSkpKytpbmRleFxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0aGUgY29ycmVzcG9uZGluZyBhc2NpaSB2YWx1ZXNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFN0cmluZ1RvQXNjaWkodG9Db252ZXJ0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBhc2NpaXM6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvQ29udmVydC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXNjaWlzLnB1c2goK3RvQ29udmVydC5jaGFyQ29kZUF0KGkpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzY2lpc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNEZWxpbWl0ZXIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IDEwIHx8IHZhbHVlID09PSAxMyB8fCB2YWx1ZSA9PT0gMzJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldFxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBzdWNlZWRpbmcgY2hhciBhZnRlciB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZFxuICAgICAqIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZSBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlU2VxdWVuY2Uoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBJbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyID0gMCwgY2xvc2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IG9mZnNldFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT0gc2VxdWVuY2UubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCB8fCBkYXRhLmxlbmd0aCA9PSBpICsgMSB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgLSAoc2VxdWVuY2UubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSAtMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICsralxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHRoZSBzZXF1ZW5jZSBpbiBkYXRhIHN0YXJ0aW5nIGF0IHRoZSBvZmZzZXQgaW4gcmV2ZXJzZSBkaXJlY3Rpb25cbiAgICAgKlxuICAgICAqIFNldCB0aGUgJ2Nsb3NlZCcgZmxhZyB0byBjaGVjayBpZiB0aGUgcHJlY2VkaW5nIGNoYXIgYmVmb3JlIHRoZSBzZXF1ZW5jZSBpcyBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgc3RhcnRcbiAgICAgKiBvZiB0aGUgd2hvbGUgZGF0YSBzZXF1ZW5jZSBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlU2VxdWVuY2VSZXZlcnNlZChzZXF1ZW5jZTogbnVtYmVyW10sIGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcblxuICAgICAgICBmb3IgKGxldCBqID0gc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCB8fCBpIC0gMSA8IDAgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gc2VxdWVuY2UubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLS1qXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBiZWZvcmUgdGhlIG5leHQgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXIoZGF0YTogSW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgZGF0YS5sZW5ndGggJiYgIXRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtvZmZzZXRdKSkrK29mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYXRlcyB0aGUgaW5kZXggYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhOiBJbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyID0gZGF0YS5sZW5ndGggLSAxKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA+IDAgJiYgIXRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtvZmZzZXRdKSktLW9mZnNldFxuXG4gICAgICAgIGlmIChvZmZzZXQgPD0gMClcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXRcblxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBhcnJheSBkYXRhIGF0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5kZXguIFRoZSBpbmRleCBjYW4gbWFyayB0aGUgc3RhcnQgb2YgdGhlXG4gICAgICogYXJyYXkgb3IgYSBwb2ludGVyIHdpdGhpbiB0aGUgYXJyYXkuIElmIGl0IGlzIGEgbmVzdGVkIGFycmF5IHRoZSBwb2ludGVyIG11c3QgbWFyayB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgdGhlIHN1YmVyYXJyYXkuIE90aGVyd2lzZSBvbmx5IHRoZSBzdWJhcnJheSBpcyBleHRyYWN0ZWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuQVJSQVlfU1RBUlQsIGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGlmICgtMSA9PT0gYXJyYXlfc3RhcnQpXG4gICAgICAgICAgICBhcnJheV9zdGFydCA9IGluZGV4XG5cbiAgICAgICAgbGV0IHJvb3RfbGlzdCA9IHsgcHRyOiBhcnJheV9zdGFydCwgbHN0OiBbXSB9XG4gICAgICAgIGxldCBzdGFydF9wb2ludGVyOiBhbnlbXSA9IFtyb290X2xpc3RdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5X3N0YXJ0ICsgMTsgaSA8IGRhdGEubGVuZ3RoICYmIHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMDspIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9uID0geyBwdHI6IGksIGxzdDogW10gfVxuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5wdHIgPSAtMSAvLyBtYXJrIGxpc3QgYXMgY29sbGVjdGlvbiBvZiBvdGhlciBsaXN0c1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXIucHVzaChfbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwID0gc3RhcnRfcG9pbnRlci5wb3AoKVxuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc3Npbmcgc3RhcnQgcG9pbnRlciAke0pTT04uc3RyaW5naWZ5KHNwKX1gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzcC5wdHIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc190b0FkZCA9IGRhdGEuc2xpY2Uoc3AucHRyICsgMSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKGFzX3RvQWRkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzX3RvQWRkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwLnB0ciA9PT0gLTEgJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5sc3QucHVzaChzcC5sc3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGkgKyAxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3RfbGlzdC5sc3RcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheVNlcSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYnI6IGFueSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBhcnJheV9zZXF1ZW5jZSBvZiBhcnJheVNlcSkge1xuICAgICAgICAgICAgICAgIG5ici5wdXNoKFV0aWwuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5iclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgaW4gYW4gYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZUFycmF5KGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZXMgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheV9zZXF1ZW5jZXMpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBleHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5U2VxOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoYXJyYXlTZXEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBuYnJzOiBhbnkgPSBbXVxuXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXlTZXEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmJycy5wdXNoKFV0aWwuZXh0cmFjdE51bWJlcihhcnJheVNlcSwgaSkpXG5cbiAgICAgICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKSArIDFcbiAgICAgICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGFycmF5U2VxLCBpICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5icnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYnI6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2godGhpcy5leHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5X3NlcXVlbmNlKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5iclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAgICAgKiBlLmcuICBbNjkuNjk3IDQ3LjQxNDggOTYuNDY0NiA1OC4yNTk4IF1cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcnNBcnJheShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2VzID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFuIG9iamVjdCBpZGVudGlmaWVyXG4gICAgICogPElEPiA8R0VOPiBvYmpcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE9iamVjdElkKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICBpbmRleCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZW5kX29ial9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBpbmRleCArIDEpXG5cbiAgICAgICAgbGV0IG9iaiA9IFV0aWwuZXh0cmFjdE51bWJlcihkYXRhLCBpbmRleCwgZW5kX29ial9wdHIpXG5cbiAgICAgICAgbGV0IHN0YXJ0X2dlbl9wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgZW5kX29ial9wdHIgKyAxKVxuICAgICAgICBsZXQgZW5kX2dlbl9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBzdGFydF9nZW5fcHRyICsgMSlcblxuICAgICAgICBsZXQgZ2VuID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIsIGVuZF9nZW5fcHRyKVxuXG4gICAgICAgIHJldHVybiB7IG9iajogb2JqLCBnZW5lcmF0aW9uOiBnZW4gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIHJlZmVyZW5jZSBzdGFydGluZyBhdCBwb3NpdGlvbiAnaW5kZXgnXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2UoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogSW50OEFycmF5IHtcbiAgICAgICAgaW5kZXggPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaW5kZXgpXG4gICAgICAgIGxldCByX2luZGV4ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZSh0aGlzLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFwiIFJcIiksIGRhdGEsIGluZGV4LCB0cnVlKVxuXG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKGluZGV4LCByX2luZGV4KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByZWZlcmVuY2UgYXMgdHlwZWQgb2JqZWN0XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VUeXBlZChkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBSZWZlcmVuY2VQb2ludGVyIHtcblxuICAgICAgICBsZXQgcmVmX2RhdGEgPSB0aGlzLmV4dHJhY3RSZWZlcmVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IGRlbF9pbmRleCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyKHJlZl9kYXRhLCAwKVxuXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZXh0cmFjdE51bWJlcihyZWZfZGF0YSwgMCwgZGVsX2luZGV4KVxuICAgICAgICBsZXQgZ2VuID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCBkZWxfaW5kZXggKyAyKVxuXG4gICAgICAgIHJldHVybiB7IG9iajogaWQsIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JqZWN0cyBpbiBQREYgZmlsZXMgYXJlIGRlZmluZWQgYXNcbiAgICAgKiA8b2JqTnVtYmVyPiA8Z2VuZXJhdGlvbj4gb2JqXG4gICAgICogPDxcbiAgICAgKiAgICAgIC4uLlxuICAgICAqICAgICAgL1R5cGUgLzx0eXBlPlxuICAgICAqICAgICAgLi4uXG4gICAgICogPj5cbiAgICAgKlxuICAgICAqIEFwcHJvYWNoOiBXZSBpZGVudGlmeSBhbiBpbmRleCB3aXRoaW4gdGhlIG9iamVjdCBkZWZpbml0b24gc2VhcmNoIHRoZSB1bmlxdWVseSBpZGVudGlmeWFibGUgZW5kIG9mIHRoZSBvYmplY3QgZGVmaW5pdGlvblxuICAgICAqIHRoYW4gdGhlIHVuaXF1ZWx5IGlkZW50aWZpYWJsZSBzdGFydC4gV2UgdGhhbiBleHRyYWN0IHRoZSBnZW5lcmF0aW9uIGFuZCB0aGUgb2JqZWN0IGlkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdEJ5VHlwZShkYXRhOiBJbnQ4QXJyYXksIF90eXBlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgc2VhcmNoU2VxdWVuY2UgPSB0aGlzLmNvbnZlcnRTdHJpbmdUb0FzY2lpKHRoaXMuVFlQRSArIF90eXBlKVxuXG4gICAgICAgIGxldCBvYmpfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHNlYXJjaFNlcXVlbmNlLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGxldCBvYmpfZW5kID0gdGhpcy5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKSArIDZcblxuICAgICAgICBsZXQgb2JqX3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuT0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpXG5cbiAgICAgICAgbGV0IGdlbmVyYXRpb24gPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIG9ial9zdGFydCAtIDEpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgZ2VuZXJhdGlvbiAtIDEpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2Uob2JqX2lkLCBvYmpfZW5kKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFycmF5IG9mIG51bWJlcnMgYW5kIGFycmF5cyBvZiByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBNYXJrIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGFycmF5cyB0aGF0IGNvbnRhaW4gZGlmZmVyZW50IHR5cGVzLCBzbyBlaXRoZXJcbiAgICAgKiBpdCByZXR1cm5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy4gSG93ZXZlciB0aGUgZnVuY3Rpb24gc3VwcG9ydHNcbiAgICAgKiBhcmJpdHJhcmlseSBuZXN0aW5nIG9mIGFycmF5cy5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEFycmF5KGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuUlswXSkgeyAvLyAnUicgLS0gd2Uga25vdyBpdCBpcyBhbiBhcnJheSBvZiByZWZlcmVuY2VzXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZUFycmF5KGRhdGEsIGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdE51bWJlcnNBcnJheShkYXRhLCBpbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYXRjcyB0aGUgc3RyaW5nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RTdHJpbmcoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0cmluZ19zdGFydCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5TVFJJTkdfU1RBUlQsIGRhdGEsIDApXG4gICAgICAgIGxldCBzdHJpbmdfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19FTkQsIGRhdGEsIDApXG5cbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RyaW5nX3N0YXJ0ICsgMSwgc3RyaW5nX2VuZClcblxuICAgICAgICByZXR1cm4gVXRpbC5jb252ZXJ0VW5pY29kZVRvU3RyaW5nKGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gb3B0aW9uXG4gICAgICogLzxvcHRpb24+XG4gICAgICpcbiAgICAgKiBzbyBmb3IgaW5zdGFuY2UgZm9yIC9IaWdobGlnaHQgaXQgd291bGQgcmV0dXJuICdIaWdobGlnaHQnXG4gICAgICpcbiAgICAgKiBUaGUgaW5kZXggbXVzdCBwb2ludCB0byB0aGUgXCIvXCJcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE9wdGlvblZhbHVlKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChkYXRhW2luZGV4XSAhPT0gNDcpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIm1pc3BsYWNlZCBvcHRpb24gdmFsdWUgcG9pbnRlclwiKVxuXG4gICAgICAgIGxldCBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBpbmRleClcblxuICAgICAgICByZXR1cm4gVXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhBcnJheS5mcm9tKGRhdGEuc2xpY2UoaW5kZXggKyAxLCBlbmQgKyAxKSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBmaWVsZC5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEZpZWxkKGRhdGE6IEludDhBcnJheSwgZmllbGQ6IG51bWJlcltdLCBwdHI6IG51bWJlciA9IDApOiBhbnkge1xuICAgICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaWVsZHMgb2Ygb25lIG9iamVjdFxuICAgICAgICBsZXQgc3RhcnRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIGRhdGEsIHB0ciwgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgc3RhcnRfb2JqX3B0ciwgdHJ1ZSlcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydF9vYmpfcHRyLCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgZmllbGRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShmaWVsZCwgZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBpZiAoZmllbGRfcHRyID09PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBmaWVsZF9wdHIgKz0gZmllbGQubGVuZ3RoXG5cbiAgICAgICAgbGV0IGZpZWxkX3ZhbHVlX2VuZF9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFs0N10sIGRhdGEsIGZpZWxkX3B0cikgLy8gJy8nID0gNDdcblxuICAgICAgICBpZiAoZmllbGRfdmFsdWVfZW5kX3B0ciA9PT0gZmllbGRfcHRyICsgMSkge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdE9wdGlvblZhbHVlKGRhdGEsIGZpZWxkX3ZhbHVlX2VuZF9wdHIpXG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZF9wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgZmllbGRfcHRyKVxuXG4gICAgICAgIGxldCB2YWx1ZV9kYXRhID0gZGF0YS5zbGljZShmaWVsZF9wdHIsIGZpZWxkX3ZhbHVlX2VuZF9wdHIpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZV9kYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9TVEFSVFswXSB8fCB2YWx1ZV9kYXRhW2ldID09PSBVdGlsLkFSUkFZX0VORFswXSkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBhcnJheVxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RBcnJheSh2YWx1ZV9kYXRhLCAwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZV9kYXRhW2ldID09PSBVdGlsLlNUUklOR19TVEFSVFswXSB8fCB2YWx1ZV9kYXRhW2ldID09PSBVdGlsLlNUUklOR19FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFN0cmluZyh2YWx1ZV9kYXRhLCAwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZV9kYXRhW2ldID09PSBVdGlsLlJbMF0pIHsgLy8gUlxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBSZWZlcmVuY2VcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3ROdW1iZXIodmFsdWVfZGF0YSwgMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGFzY2lpIGVuY29kZWQgbnVtYmVyIG9mIHRoZSBQREYgZmlsZVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0TnVtYmVyKGRhdGE6IEludDhBcnJheSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgPSAtMSkge1xuICAgICAgICBzdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBzdGFydClcblxuICAgICAgICBpZiAoLTEgPT0gZW5kKSB7XG4gICAgICAgICAgICBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBzdGFydClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJfaWQgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFwiXCIgPT09IHN0cl9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBwYXJzZSBudW1iZXIgYXQgcG9zaXRpb24gJHtzdGFydH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICtzdHJfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhcyBhcmd1bWVudCBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZCByZXR1cm5zIHRob3NlIHR5cGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2U6IEludDhBcnJheSk6IFJlZmVyZW5jZVBvaW50ZXJbXSB7XG4gICAgICAgIGxldCByZWZzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICB3aGlsZSAoaSA8IGFycmF5X3NlcXVlbmNlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVmcy5wdXNoKFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKGFycmF5X3NlcXVlbmNlLCBpKSlcbiAgICAgICAgICAgIGkgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUiwgYXJyYXlfc2VxdWVuY2UsIGksIHRydWUpICsgMlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZGF0ZSBpbnRvIFBERiBmb3JtYXR0aW5nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnREYXRlVG9QREZEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGF0ZV9zdHIgPSBcIihEOlwiXG4gICAgICAgIGRhdGVfc3RyICs9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICBsZXQgbW9udGg6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKVxuICAgICAgICBkYXRlX3N0ciArPSAobW9udGgubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbW9udGhcbiAgICAgICAgbGV0IGRheTogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICBkYXRlX3N0ciArPSAoZGF5Lmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGRheVxuICAgICAgICBsZXQgaG91cnM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChob3Vycy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBob3Vyc1xuICAgICAgICBsZXQgbWludXRlczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAobWludXRlcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBtaW51dGVzXG4gICAgICAgIGxldCBzZWNvbmRzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChzZWNvbmRzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIHNlY29uZHNcbiAgICAgICAgcmV0dXJuIGRhdGVfc3RyICsgXCIpXCJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHVuaWNvZGUgc2VxdWVuY2UgaW50byBhIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VW5pY29kZVRvU3RyaW5nKHZhbDogSW50OEFycmF5IHwgVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpXG4gICAgICAgICAgICB2YWwgPSBuZXcgVWludDhBcnJheSh2YWwpXG5cbiAgICAgICAgaWYgKHZhbFswXSA9PT0gMjU0ICYmIHZhbFsxXSA9PT0gMjU1KSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMiwgdmFsLmxlbmd0aClcblxuICAgICAgICAgICAgbGV0IHVpbnRUb1N0cmluZyA9ICh1aW50QXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1aW50QXJyYXkubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh1aW50QXJyYXlbaV0gPDwgOCkgfCB1aW50QXJyYXlbaSArIDFdICYgMHhGRilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXQgPSB1aW50VG9TdHJpbmcodmFsKVxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHV0Zi04IGNvbXByZXNzaW9uXG4gICAgICAgIGxldCBVdGY4QXJyYXlUb1N0ciA9IChhcnJheTogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIxID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgIGxldCBjaGFyMlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcjEgPj4gNCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogY2FzZSAyOiBjYXNlIDM6IGNhc2UgNDogY2FzZSA1OiBjYXNlIDY6IGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uZSBieXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0d28gYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcjIgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNoYXIxICYgMHgxRikgPDwgNikgfCAoY2hhcjIgJiAweDNGKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aHJlZSBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyMyA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDBGKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoY2hhcjIgJiAweDNGKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMyAmIDB4M0YpIDw8IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBVdGY4QXJyYXlUb1N0cihBcnJheS5mcm9tKHZhbCkpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRBc2NpaVRvU3RyaW5nKHZhbDogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0OiBzdHJpbmcgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZhbFtpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIG51bWJlciBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBpdHMgY2hhciByZXByZXNlbnRhdGlvbnNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydE51bWJlclRvQ2hhckFycmF5KG5icjogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShTdHJpbmcobmJyKSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQYWdlLCBSZWZlcmVuY2VQb2ludGVyIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgV3JpdGVyVXRpbCB7XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcmVmZXJlbmNlIHBvaW50ZXJcbiAgICAgKlxuICAgICAqIDxvYmpfaWQ+IDxnZW5lcmF0aW9uPiBSXG4gICAgICpcbiAgICAgKiBUaGUgJ1InIGFuZCB0aGUgcHJlY2VkaW5nIHNwYWNlIGlzIG9ubHkgd3JpdHRlbiBpbiBjYXNlICdyZWZlcmVuY2VkJyBpcyB0cnVlXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWY6IFJlZmVyZW5jZVBvaW50ZXIsIHJlZmVyZW5jZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShyZWYub2JqKVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShyZWYuZ2VuZXJhdGlvbikpXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaCguLi5VdGlsLlIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBwcmVjZWRpbmcgemVyb3MgKDApIGluIGZyb250IG9mIHRoZSAndmFsdWUnIHRvIG1hdGNoIHRoZSBsZW5ndGhcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFkKGxlbmd0aDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0LnB1c2goNDgpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHZhbHVlKSlcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgbmVzdGVkIG51bWJlciBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyB3cml0ZU5lc3RlZE51bWJlckFycmF5KGFycmF5OiBudW1iZXJbXVtdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuQVJSQVlfU1RBUlRcblxuICAgICAgICBmb3IgKGxldCBzdWJBcnJheSBvZiBhcnJheSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoc3ViQXJyYXkpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKC4uLlV0aWwuQVJSQVlfRU5EKVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgamF2YXNjcmlwdCBudW1iZXIgYXJyYXkgdG8gYSBQREYgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuQVJSQVlfU1RBUlRcblxuICAgICAgICBmb3IgKGxldCBpIG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGkpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKC4uLlV0aWwuQVJSQVlfRU5EKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgL0Fubm90cyBmaWVsZCBpbiBhbiBwYWdlIG9iamVjdFxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2VBbm5vdHNGaWVsZEluUGFnZU9iamVjdChkYXRhOiBJbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG4gICAgICAgICAgICBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwuc2tpcERlbGltaXRlcihjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzX2FycmF5X2VuZClcblxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2Fubm90c19hcnJheV9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwdHJfZGljdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRElDVF9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgICAgIHJldCA9IEFycmF5LmZyb20oY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5zbGljZSgwLCBwdHJfZGljdF9lbmQpKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLkFOTk9UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90X2FycmF5X3JlZmVyZW5jZSwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2RpY3RfZW5kLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLmxlbmd0aCkpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5DUilcbiAgICAgICAgcmV0LnB1c2goVXRpbC5MRilcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEFubm90YXRpb24sIFJlZmVyZW5jZVBvaW50ZXIsIFBERkRvY3VtZW50UGFyc2VyLCBQYWdlIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBYUmVmIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5J1xuaW1wb3J0IHsgV3JpdGVyVXRpbCB9IGZyb20gJy4vd3JpdGVyLXV0aWwnXG5cbi8qKlxuICogQ3JlYXRzIHRoZSBieXRlIGFycmF5IHRoYXQgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBXcml0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBOOiBudW1iZXIgPSAxMTBcbiAgICBwdWJsaWMgc3RhdGljIEY6IG51bWJlciA9IDEwMlxuXG4gICAgcHVibGljIHN0YXRpYyBTUEFDRTogbnVtYmVyID0gMzJcbiAgICBwdWJsaWMgc3RhdGljIENSOiBudW1iZXIgPSAxM1xuICAgIHB1YmxpYyBzdGF0aWMgTEY6IG51bWJlciA9IDEwXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlciA9IDkxXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlciA9IDkzXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdXG4gICAgcHVibGljIHN0YXRpYyBESUNUX0VORDogbnVtYmVyW10gPSBbNjIsIDYyXVxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRV9BTk5PVDogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxLCBXcml0ZXIuU1BBQ0UsIDQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBTVUJUWVBFOiBudW1iZXJbXSA9IFs0NywgODMsIDExNywgOTgsIDExNiwgMTIxLCAxMTIsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIFVQREFURV9EQVRFOiBudW1iZXJbXSA9IFs0NywgNzddIC8vID0gJy9NJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVVUSE9SOiBudW1iZXJbXSA9IFs0NywgODRdIC8vID0gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVOVFM6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTAsIDExNiwgMTAxLCAxMTAsIDExNiwgMTE1XSAvLyA9ICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCUkFDS0VUX1NUQVJUOiBudW1iZXIgPSA0MFxuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9FTkQ6IG51bWJlciA9IDQxXG4gICAgcHVibGljIHN0YXRpYyBGTEFHOiBudW1iZXJbXSA9IFs0NywgNzBdIC8vID0gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgSUQ6IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vID0gJy9OTSdcbiAgICBwdWJsaWMgc3RhdGljIENPTE9SOiBudW1iZXJbXSA9IFs0NywgNjddIC8vID0gJy9DJ1xuICAgIHB1YmxpYyBzdGF0aWMgT1BBQ0lUWTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gPSAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgQk9SREVSOiBudW1iZXJbXSA9IFs0NywgNjYsIDExMSwgMTE0LCAxMDAsIDEwMSwgMTE0XSAvLyA9ICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRV9SRUZFUkVOQ0U6IG51bWJlcltdID0gWzQ3LCA4MF0gLy8gPSAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQUEVBUkFOQ0U6IG51bWJlcltdID0gWzQ3LCA2OCwgNjVdIC8vID0gJy9EQSdcbiAgICBwdWJsaWMgc3RhdGljIElOS0xJU1Q6IG51bWJlcltdID0gWzQ3LCA3MywgMTEwLCAxMDcsIDc2LCAxMDUsIDExNSwgMTE2XSAvLyA9ICcvSW5rTGlzdCdcblxuICAgIHB1YmxpYyBzdGF0aWMgVFJBSUxFUjogbnVtYmVyW10gPSBbMTE2LCAxMTQsIDk3LCAxMDUsIDEwOCwgMTAxLCAxMTRdIC8vID0gJ3RyYWlsZXInXG4gICAgcHVibGljIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vID0gJy9TaXplJ1xuICAgIHB1YmxpYyBzdGF0aWMgUk9PVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyA9ICcvUm9vdCdcbiAgICBwdWJsaWMgc3RhdGljIFBSRVY6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gPScvUHJldidcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJUWFJFRjogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG4gICAgcHVibGljIHN0YXRpYyBFT0Y6IG51bWJlcltdID0gWzM3LCAzNywgNjksIDc5LCA3MF0gLy8gPSAnJSVFT0YnXG5cbiAgICBwdWJsaWMgc3RhdGljIFhSRUY6IG51bWJlcltdID0gWzEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAneHJlZidcblxuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBWRVJUSUNFUzogbnVtYmVyW10gPSBbNDcsIDg2LCAxMDEsIDExNCwgMTE2LCAxMDUsIDk5LCAxMDEsIDExNV0gLy8gPSAnL1ZlcnRpY2VzJ1xuICAgIHB1YmxpYyBzdGF0aWMgTkFNRTogbnVtYmVyW10gPSBbNDcsIDc4LCA5NywgMTA5LCAxMDFdIC8vID0gJy9OYW1lJ1xuICAgIHB1YmxpYyBzdGF0aWMgRFJBRlQ6IG51bWJlcltdID0gWzQ3LCA2OCwgMTE0LCA5NywgMTAyLCAxMTZdIC8vID0gJy9EcmFmdCdcblxuICAgIHB1YmxpYyBzdGF0aWMgU1k6IG51bWJlcltdID0gWzQ3LCA4MywgMTIxXSAvLyA9ICcvU3knXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXIgPSA4MFxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAqICovXG4gICAgcHJpdmF0ZSB4cmVmczogWFJlZltdID0gW11cblxuICAgIC8qKlxuICAgICAqIGRhdGEgOiBUaGUgZGF0YSByZXByZXNlbnRpbmcgdGhlIG9yaWdpbmFsIFBERiBkb2N1bWVudFxuICAgICAqIGFhbm5vdGF0aW9ucyA6IFRoZSBhbm5vdGF0aW9ucyB0byBhZGQgdG8gdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSwgcHJpdmF0ZSBhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdLCBwcml2YXRlIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgcGFyc2VyOiBQREZEb2N1bWVudFBhcnNlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgSW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGFubm90YXRpb25zIHBhZ2V3aXNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIGFubm90YXRpb24gYXJyYXlzIG9mIHRoZSBzaXRlcyBtdXN0IGJlIGV4dGVuZGVkXG4gICAgICogYW5kIGl0IG1ha2VzIHNlbnNlIHRvIGRvIHRoaXMgdXBkYXRlIGluIG9uZSBzdGVwLlxuICAgICAqICovXG4gICAgc29ydFBhZ2VXaXNlKGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10pOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSB7XG4gICAgICAgIGxldCBwYWdlQW5ub3RzOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghcGFnZUFubm90c1thbm5vdC5wYWdlXSlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdID0gW11cblxuICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXS5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VBbm5vdHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCByZXR1cm5zIHRoZSBwYWdlIG9iamVjdCBlaXRoZXIgZXh0ZW5kZWQgYnkgYSAvQW5ub3RzIGZpZWxkLCBpZiB0aGlzIGRpZCBub3QgZXhpc3QgeWV0IG9yIHdpdGggdGhlIGFubm90cyBmaWVsZCByZXBsYWNlZCBieSBhIHJlcmZlcmVuY2UgcG9pbnRlclxuICAgICAqIHRvIGFuIGFycmF5IGlmIHRoZSBwYWdlIG9iamVjdCBjb250YWlucyB0aGUgbGlzdCBvZiBhbm5vdGF0aW9ucyBkaXJlY3RseVxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBhZGFwdFBhZ2VPYmplY3QocGFnZTogUGFnZSwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuICAgICAgICBsZXQgbG9va3VwVGFibGUgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlX3B0cjogWFJlZiA9IGxvb2t1cFRhYmxlW3BhZ2Uub2JqZWN0X2lkLm9ial1cblxuICAgICAgICByZXR1cm4gV3JpdGVyVXRpbC5yZXBsYWNlQW5ub3RzRmllbGRJblBhZ2VPYmplY3QodGhpcy5kYXRhLCBwYWdlLCBwYWdlX3B0ci5wb2ludGVyLCBhbm5vdF9hcnJheV9yZWZlcmVuY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIGFubm90YXRpb25zIG9mID4+b25lPDwgcGFnZSBhbmQgZGVyaXZlcyB0aGUgYW5ub3RhdGlvbnMgYXJyYXkgZnJvbSBpdC5cbiAgICAgKiBUaGVyZWJ5IGl0IGFsc28gY29uc2lkZXJzIHRoZSBwb3RlbnRpYWxseSBleGlzdGluZyBhbm5vdGF0aW9uIGFycmF5LlxuICAgICAqXG4gICAgICogdG9EZWxldGUgOj0gY29udGFpbnMgdGhvc2UgYW5ub3RhdGlvbnMgdGhhdCBtdXN0IGJlIGRlbGV0ZWQuIEl0IHJlbW92ZXMgdGhlbSBmcm9tIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgKiBhbmQgbWFya3MgdGhlbSBhcyByZW1vdmVkXG4gICAgICogKi9cbiAgICB3cml0ZUFubm90QXJyYXkoYW5ub3RzOiBBbm5vdGF0aW9uW10sIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10sIHBhZ2VSZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIsIHBhZ2VEYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBhbm5vdHNbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF4Lm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb24gd2l0aCBvYmplY3RfaWQgbnVsbFwiKVxuXG4gICAgICAgICAgICByZXR1cm4geC5vYmplY3RfaWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcGFnZV9kYXRhOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGlmICghcmVmQXJyYXlfaWQpIHtcbiAgICAgICAgICAgIHJlZkFycmF5X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgICAgIHBhZ2VfZGF0YSA9IHRoaXMuYWRhcHRQYWdlT2JqZWN0KHBhZ2UsIHJlZkFycmF5X2lkKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQsIHBhZ2VSZWZlcmVuY2U6IHBhZ2Uub2JqZWN0X2lkLCBwYWdlRGF0YTogcGFnZV9kYXRhIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN1YnR5cGUgdG8gaXRzIGJ5dGUgcmVwcmVzZW50YXRpb25cbiAgICAgKiAqL1xuICAgIGNvbnZlcnRTdWJ0eXBlKHN0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHN3aXRjaCAoc3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxuICAgICAgICAgICAgY2FzZSAnL1RleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvVGV4dCdcbiAgICAgICAgICAgIGNhc2UgJ0hpZ2hsaWdodCc6XG4gICAgICAgICAgICBjYXNlICcvSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MiwgMTA1LCAxMDMsIDEwNCwgMTA4LCAxMDUsIDEwMywgMTA0LCAxMTZdIC8vID0gJy9IaWdobGlnaHQnXG4gICAgICAgICAgICBjYXNlICdVbmRlcmxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1VuZGVybGluZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODUsIDExMCwgMTAwLCAxMDEsIDExNCwgMTA4LCAxMDUsIDExMCwgMTAxXSAvLyA9ICcvVW5kZXJsaW5lJ1xuICAgICAgICAgICAgY2FzZSAnU3F1aWdnbHknOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWlnZ2x5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDEwNSwgMTAzLCAxMDMsIDEwOCwgMTIxXSAvLyA9ICcvU3F1aWdnbHknXG4gICAgICAgICAgICBjYXNlICdTdHJpa2VPdXQnOlxuICAgICAgICAgICAgY2FzZSAnL1N0cmlrZU91dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgMTE0LCAxMDUsIDEwNywgMTAxLCA3OSwgMTE3LCAxMTZdIC8vID0gJy9TdHJpa2VPdXQnXG4gICAgICAgICAgICBjYXNlICdTcXVhcmUnOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWFyZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExMywgMTE3LCA5NywgMTE0LCAxMDFdIC8vID0gJy9TcXVhcmUnXG4gICAgICAgICAgICBjYXNlICdDaXJjbGUnOlxuICAgICAgICAgICAgY2FzZSAnL0NpcmNsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDEwNSwgMTE0LCA5OSwgMTA4LCAxMDFdIC8vID0gJy9DaXJjbGUnXG4gICAgICAgICAgICBjYXNlICdGcmVlVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvRnJlZVRleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcwLCAxMTQsIDEwMSwgMTAxLCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL0ZyZWVUZXh0J1xuICAgICAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICBjYXNlICcvUG9seWdvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODAsIDExMSwgMTA4LCAxMjEsIDEwMywgMTExLCAxMTBdIC8vID0gJy9Qb2x5Z29uJ1xuICAgICAgICAgICAgY2FzZSAnUG9seUxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1BvbHlMaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgNzYsIDEwNSwgMTEwLCAxMDFdIC8vICcvUG9seUxpbmVcbiAgICAgICAgICAgIGNhc2UgJ1N0YW1wJzpcbiAgICAgICAgICAgIGNhc2UgJy9TdGFtcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgOTcsIDEwOSwgMTEyXSAvLyA9ICcvU3RhbXAnXG4gICAgICAgICAgICBjYXNlICdDYXJldCc6XG4gICAgICAgICAgICBjYXNlICcvQ2FyZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDY3LCA5NywgMTE0LCAxMDEsIDExNl0gLy8gPSAnL0NhcmV0J1xuICAgICAgICAgICAgY2FzZSAnSW5rJzpcbiAgICAgICAgICAgIGNhc2UgJy9JbmsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDczLCAxMTAsIDEwN10gLy8gPSAnL0luaydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhbiBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAqICovXG4gICAgd3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90OiBBbm5vdGF0aW9uKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBpZiAoIWFubm90LmF1dGhvcilcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90LmNvbnRlbnRzKVxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIG9iamVjdF9pZFwiKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3Qub2JqZWN0X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5UWVBFX0FOTk9UKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LnJlY3QgJiYgYW5ub3QucmVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5SRUNUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucmVjdCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TVUJUWVBFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy5jb252ZXJ0U3VidHlwZShhbm5vdC50eXBlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlVQREFURV9EQVRFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC51cGRhdGVEYXRlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkFVVEhPUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmF1dGhvcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5jb250ZW50cykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09OVEVOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5jb250ZW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5JRClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuaWQpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmFubm90YXRpb25fZmxhZykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRkxBRylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5jb2xvcikge1xuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLnIgPiAxKSBhbm5vdC5jb2xvci5yIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmcgPiAxKSBhbm5vdC5jb2xvci5nIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmIgPiAxKSBhbm5vdC5jb2xvci5iIC89IDI1NVxuXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT0xPUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5jb2xvci5yLCBhbm5vdC5jb2xvci5nLCBhbm5vdC5jb2xvci5iXSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBvcGFjaXR5ID0gYW5ub3Qub3BhY2l0eVxuICAgICAgICBpZiAob3BhY2l0eSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT1BBQ0lUWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkob3BhY2l0eSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuYm9yZGVyKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5CT1JERVIpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuYm9yZGVyLmhvcml6b250YWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLnZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci5ib3JkZXJfd2lkdGhdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuREVGQVVMVF9BUFBFQVJBTkNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuZGVmYXVsdEFwcGVhcmFuY2UpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbm5vdC5wYWdlUmVmZXJlbmNlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmIChhbm5vdC5wYWdlUmVmZXJlbmNlLm9iamVjdF9pZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUEFHRV9SRUZFUkVOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5xdWFkUG9pbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5RVUFEUE9JTlRTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucXVhZFBvaW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QudmVydGljZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlZFUlRJQ0VTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QudmVydGljZXMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnN0YW1wVHlwZSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuTkFNRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRSQUZUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNhcmV0U3ltYm9sKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5QKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90Lmlua0xpc3QpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklOS0xJU1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOZXN0ZWROdW1iZXJBcnJheShhbm5vdC5pbmtMaXN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiBhbm5vdC5vYmplY3RfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYWxsIHRoZSBjcm9zcyBzaXRlIHJlZmVyZW5jZSB0YWJsZSBlbnRyaWVzIGFuZCBleHRyYWN0cyB0aGUgY29uc2VjdXRpdmUgc2VxdWVuY2VzXG4gICAgICogKi9cbiAgICBjb21wdXRlWHJlZlNlcXVlbmNlcygpOiBYUmVmW11bXSB7XG4gICAgICAgIGxldCBzZXFzOiBYUmVmW11bXSA9IFtdXG5cbiAgICAgICAgbGV0IG9yZGVyZWRfeHJlZnMgPSB0aGlzLnhyZWZzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2VxOiBYUmVmW10gPSBbb3JkZXJlZF94cmVmc1swXV1cbiAgICAgICAgbGV0IGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzWzBdLmlkXG4gICAgICAgIHNlcXMucHVzaChzZXEpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3JkZXJlZF94cmVmcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyZWRfeHJlZnNbaV0uaWQgPT09IGxhc3RfaWQgKyAxKSB7XG4gICAgICAgICAgICAgICAgc2VxLnB1c2gob3JkZXJlZF94cmVmc1tpXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VxID0gW29yZGVyZWRfeHJlZnNbaV1dXG4gICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzW2ldLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vxc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgdGhlIHBvaW50ZXJzIG9mIHRoZSBsaW5rZWQgbGlzdCB0aGF0IGNvbnRhaW5zIHRoZSBpZHMgb2YgZnJlZWQgb2JqZWN0c1xuICAgICAqICovXG4gICAgYXBwbHlPYmplY3RGcmVlaW5nKHJlZnM6IFhSZWZbXSk6IFhSZWZbXSB7XG4gICAgICAgIC8vIHdyaXRlIGZyZWUgb2JqZWN0IGhlYWRcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkucmVmc1swXVxuICAgICAgICBsZXQgbGFzdF9mcmVlZF9vYmplY3RfaWQgPSBoZWFkLmlkXG5cbiAgICAgICAgbGV0IGZyZWVkX29ianM6IFhSZWZbXSA9IHJlZnMuZmlsdGVyKHIgPT4gci5mcmVlKVxuICAgICAgICBmcmVlZF9vYmpzID0gZnJlZWRfb2Jqcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5pZCA8IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICBpZiAoYS5pZCA+IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGxhc3RvYmo6IFhSZWYgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIGZyZWVkX29ianMpIHtcbiAgICAgICAgICAgIGlmICghbGFzdG9iaikge1xuICAgICAgICAgICAgICAgIC8vIHNldCBmaXJzdCBvYmplY3QgYXMgbGlzdCBoZWFkZXJcbiAgICAgICAgICAgICAgICBoZWFkLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3RvYmopIHtcbiAgICAgICAgICAgICAgICBsYXN0b2JqLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdG9iaiA9IG9ialxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyZWVkX29ianMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGZyZWVkX29ianNbZnJlZWRfb2Jqcy5sZW5ndGggLSAxXS5wb2ludGVyID0gbGFzdF9mcmVlZF9vYmplY3RfaWRcblxuICAgICAgICByZWZzLnB1c2goaGVhZClcblxuICAgICAgICByZXR1cm4gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgY3Jvc3NpdGUgcmVmZXJlbmNlIHRhYmxlXG4gICAgICogKi9cbiAgICB3cml0ZUNyb3NzU2l0ZVJlZmVyZW5jZVRhYmxlKCk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuWFJFRlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICB0aGlzLnhyZWZzID0gdGhpcy5hcHBseU9iamVjdEZyZWVpbmcodGhpcy54cmVmcylcblxuICAgICAgICBsZXQgb3JkZXJlZF9zZXF1ZW5jZXMgPSB0aGlzLmNvbXB1dGVYcmVmU2VxdWVuY2VzKClcblxuICAgICAgICBmb3IgKGxldCBzZXF1ZW5jZSBvZiBvcmRlcmVkX3NlcXVlbmNlcykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBzZXF1ZW5jZVswXVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShoZWFkLmlkKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoc2VxdWVuY2UubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBfcmV0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDEwLCBzZXF1ZW5jZVtpXS5wb2ludGVyKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIF9yZXQgPSBfcmV0LmNvbmNhdChXcml0ZXJVdGlsLnBhZCg1LCBzZXF1ZW5jZVtpXS5nZW5lcmF0aW9uKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLmZyZWUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuRilcblxuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS51cGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTilcblxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIGlmIChfcmV0Lmxlbmd0aCA8IDIwKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlhSZWYgZW50cnkgPCAyMCBieXRlc1wiKVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChfcmV0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgdHJhaWxlclxuICAgICAqICovXG4gICAgd3JpdGVUcmFpbGVyKHBvc1hyZWY6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuVFJBSUxFUlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TSVpFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LnRyYWlsZXJTaXplKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXJcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUk9PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHRyYWlsZXIucm9vdCwgdHJ1ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QUkVWKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnN0YXJ0X3BvaW50ZXIpKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1RBUlRYUkVGKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHBvc1hyZWYpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU9GKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIGFubmF0aW9ucyBhdCB0aGUgZW5kIG9mIHRoZSBQREYgYnl0ZSByZXByZXNlbnRhdGlvbiBhbmQgcmV0dXJuc1xuICAgICAqIHRoZSBieXRlIGFycmF5XG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBJbnQ4QXJyYXkge1xuICAgICAgICBsZXQgcGFnZVdpc2VTb3J0ZWQgPSB0aGlzLnNvcnRQYWdlV2lzZSh0aGlzLmFubm90YXRpb25zKVxuXG4gICAgICAgIGxldCBwdHI6IG51bWJlciA9IHRoaXMuZGF0YS5sZW5ndGhcblxuICAgICAgICBsZXQgbmV3X2RhdGE6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWQpIHtcbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzID0gcGFnZVdpc2VTb3J0ZWRba2V5XVxuXG4gICAgICAgICAgICAvLyB3cml0ZSB0aGUgYXJyYXkgcmVmZXJlbmNpbmcgdG8gYW5ub3RhdGlvbnMgb2YgYSBjZXJ0YWluIHBhZ2VcbiAgICAgICAgICAgIC8vIGl0IGFsc28gcmVtb3ZlcyByZWZlcmVuY2VzIG9mIGFubm90YXRpb25zIHRoYXQgbXVzdCBiZSBkZWxldGVkXG4gICAgICAgICAgICBsZXQgYW5ub3RfYXJyYXkgPSB0aGlzLndyaXRlQW5ub3RBcnJheShwYWdlQW5ub3RzLCB0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucHRyLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5kYXRhKVxuICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LmRhdGEubGVuZ3RoXG5cbiAgICAgICAgICAgIC8vIGFkZCBhZGFwdGVkIHBhZ2Ugb2JqZWN0IGlmIGl0IGV4aXN0cyAtLSBJbiB0aGUgY2FzZSB0aGUgcGFnZSBoYWQgbm8gYW5ub3RhdGlvbiB5ZXQgdGhlcmUgZXhpc3RzXG4gICAgICAgICAgICAvLyBubyBzdWNoIGFycmF5IHJlZmVycmluZyB0byBpdHMgYW5ub3RhdGlvbnMuIEEgcG9pbnRlciB0byBzdWNoIGFuIGFycmF5IGFycmF5IG11c3QgYmUgYWRkZWQgdG8gdGhlXG4gICAgICAgICAgICAvLyBwYWdlIG9iamVjdC4gSWYgdGhpcyB3YXMgZG9uZSB0aGUgYHBhZ2VEYXRhYCBwYXJhbWF0ZXIgaXMgc2V0IGFuZCBjb250YWlucyB0aGUgYWRhcHRlZCBwYWdlIG9iamVjdFxuICAgICAgICAgICAgaWYgKGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5wYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBwdHIgKz0gYW5ub3RfYXJyYXkucGFnZURhdGEubGVuZ3RoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdyaXRlcyB0aGUgYWN0dWFsIGFubm90YXRpb24gb2JqZWN0XG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBwYWdlQW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90X29iaiA9IHRoaXMud3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90KVxuICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhbm5vdF9vYmoucHRyLm9iaixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBhbm5vdF9vYmoucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3Rfb2JqLmRhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X29iai5kYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGFrZSBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgbm90IGRlbGV0ZWQgeWV0XG4gICAgICAgIGxldCBfdG9EZWxldGU6IEFubm90YXRpb25bXSA9IHRoaXMudG9EZWxldGUuZmlsdGVyKCh0KSA9PiAhdC5pc19kZWxldGVkKVxuICAgICAgICBsZXQgcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSA9IHRoaXMuc29ydFBhZ2VXaXNlKF90b0RlbGV0ZSlcblxuICAgICAgICAvLyBhZGFwdCB0aGUgcmVtYWluaW5nIGFubm90YXRpb24gcmVmZXJlbmNlIHRhYmxlc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSkge1xuICAgICAgICAgICAgbGV0IGRlbF9kYXRhID0gdGhpcy51cGRhdGVQYWdlQW5ub3RhdGlvblJlZmVyZW5jZUFycmF5KHBhZ2VXaXNlU29ydGVkVG9EZWxldGVba2V5XSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGRlbF9kYXRhLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGRlbF9kYXRhLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoZGVsX2RhdGEuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBkZWxfZGF0YS5kYXRhLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXQgdGhpcyBwb2ludCBhbGwgcmVmZXJlbmNlcyB0byBhbm5vdGF0aW9uIG9iamVjdHMgaW4gcGFnZXMgc2hvdWxkIGJlIHJlbW92ZWQgYW5kIHdlIGNhbiBmcmVlXG4gICAgICAgIC8vIHRoZSBhbm5vdGF0aW9uIG9iamVjdCBpZHNcbiAgICAgICAgZm9yIChsZXQgdG9EZWwgb2YgdGhpcy50b0RlbGV0ZSkge1xuICAgICAgICAgICAgaWYgKCF0b0RlbC5vYmplY3RfaWQpXG4gICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdG9EZWwub2JqZWN0X2lkLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiAtMSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiB0b0RlbC5vYmplY3RfaWQuZ2VuZXJhdGlvbiArIDEsIC8vIGluY3JlYXNlIGdlbmVyYXRpb25cbiAgICAgICAgICAgICAgICBmcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3J0YWJsZSA9IHRoaXMud3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSgpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGNydGFibGUpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLndyaXRlVHJhaWxlcihwdHIpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KHRyYWlsZXIpXG5cbiAgICAgICAgbGV0IG5ld19kYXRhX2FycmF5ID0gbmV3IEludDhBcnJheShuZXdfZGF0YSlcblxuICAgICAgICBsZXQgcmV0X2FycmF5ID0gbmV3IEludDhBcnJheSh0aGlzLmRhdGEubGVuZ3RoICsgbmV3X2RhdGFfYXJyYXkubGVuZ3RoKVxuICAgICAgICByZXRfYXJyYXkuc2V0KHRoaXMuZGF0YSlcbiAgICAgICAgcmV0X2FycmF5LnNldChuZXdfZGF0YSwgdGhpcy5kYXRhLmxlbmd0aClcblxuICAgICAgICByZXR1cm4gcmV0X2FycmF5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgdXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheSh0b0RlbGV0ZTogQW5ub3RhdGlvbltdKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBsZXQgcGFnZSA9IHRvRGVsZXRlWzBdLnBhZ2VSZWZlcmVuY2VcblxuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbm5vdGF0aW9uIHJlZmVyZW5jZXMgZnJvbSB0aGUgYXJyYXkgdGhhdCBtdXN0IGJlIGRlbGV0ZWQgYW5kIG1hcmsgdGhlbSBhcyBkZWxldGVkXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmZpbHRlcigoYTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9EZWwgPSB0b0RlbGV0ZS5maW5kKCh0KSA9PiAoPGFueT50Lm9iamVjdF9pZCkub2JqID09PSBhLm9iaiAmJiAoPGFueT50Lm9iamVjdF9pZCkuZ2VuZXJhdGlvbiA9PT0gYS5nZW5lcmF0aW9uKVxuXG4gICAgICAgICAgICBpZiAodG9EZWwpIHtcbiAgICAgICAgICAgICAgICB0b0RlbC5pc19kZWxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCByZWZBcnJheV9pZDogYW55ID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=