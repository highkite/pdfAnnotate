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
        let end_trailer_index = util_1.Util.locateSequence(util_1.Util.STARTXREF, this.data, index, true);
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
        /**
         * Holds object ids that were formerly freed and are now 'already' reused.
         * This is used to prevent a freed object a second time
         * */
        this.already_reused_ids = [];
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
        let ptr_startxref = util_1.Util.locateSequenceReversed(util_1.Util.STARTXREF, this.data, ptr, true) + 9;
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
        let objectLookupTable = this.createObjectLookupTable();
        let free_header = objectLookupTable[0];
        if (!free_header)
            throw Error("Crosssite reference has no header for the linked list of free objects");
        // if the pointer of object 0 points to 0 there is no freed object that can be reused
        if (0 === free_header.pointer) {
            if (-1 === this.trailerSize)
                throw Error("Trailer size not set");
            return { obj: this.trailerSize++, generation: 0, reused: false };
        }
        // get list head
        let ptr = free_header.pointer;
        let freedHeaderList = [];
        while (ptr !== 0) {
            freedHeaderList.push(free_header);
            free_header = objectLookupTable[ptr];
            ptr = free_header.pointer;
        }
        let getFreeHeader = (freeHeaderList) => {
            for (let p of freeHeaderList.reverse()) {
                if (p.generation < 65535 && // max generation number
                    -1 === this.already_reused_ids.indexOf(p)) { // not already reused
                    return p;
                }
            }
            return undefined;
        };
        let reused_free_header = getFreeHeader(freedHeaderList);
        if (reused_free_header) {
            free_header = reused_free_header;
            // store used id to make sure it will not be selected again
            this.already_reused_ids.push(free_header);
        }
        else {
            // handle the case that all freed object ids are already reused
            return { obj: this.trailerSize++, generation: 0, reused: false };
        }
        return { obj: free_header.pointer, generation: objectLookupTable[free_header.id].generation, reused: true };
    }
}
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
 * This is the object with /Type /Pages
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
        this.pageCount = util_1.Util.extractField(this.data, util_1.Util.COUNT, ptr);
        // it is possible that an object of type /Pages references again to objects of types /Pages so we must
        // apply a recursive evaluation
        let kids_index = util_1.Util.locateSequence(util_1.Util.KIDS, this.data, ptr, true);
        if (-1 === kids_index)
            throw Error(`Could not find index of /Kids in /Pages object`);
        kids_index += util_1.Util.KIDS.length;
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
        let annots = util_1.Util.extractField(_data, util_1.Util.ANNOTS);
        if (annots) {
            this.hasAnnotsField = true;
            if (Array.isArray(annots)) {
                this.annots = annots;
            }
            else {
                this.annotsPointer = annots;
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
        return value === 10 ||
            value === 13 ||
            value === 32 ||
            value === 47; // '/'
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
                    if (!closed || data.length == i + 1 || this.isDelimiter(data[i + 1]) || data[i + 1] === Util.ARRAY_START[0]) {
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
        let end = Util.locateDelimiter(data, index + 1);
        return Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1)));
    }
    /**
     * Extracts the value of the given field.
     *
     * Returns 'undefined' if this field does not exist in the object
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
        // handle case that there is an option value /<value> after the field /<field>
        let field_value_end_ptr = Util.skipDelimiter(data, field_ptr);
        if (data[field_value_end_ptr - 1] === 47) { // 47 = '/'
            return Util.extractOptionValue(data, field_value_end_ptr - 1);
        }
        field_value_end_ptr = Util.locateSequence([47], data, field_ptr);
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
        if (end < start) {
            throw Error(`Could not identify number bounds: [${start},${end}]`);
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
Util.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102]; // = 'startxref'
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
            let ptr_dict_end = util_1.Util.locateSequenceReversed(util_1.Util.DICT_END, complete_page_object_data, complete_page_object_data.length - 1, true);
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
            console.log(`freeObjectId: ${JSON.stringify(refArray_id)}`);
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
        let head = this.parser.documentHistory.createObjectLookupTable()[0];
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
        ret.push(Writer.SPACE);
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
        ret.push(Writer.CR);
        ret.push(Writer.LF);
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
        // Fix case that there is no linebreak after the end of the file
        if (this.data[ptr - 1] === 70) {
            new_data.push(Writer.CR);
            new_data.push(Writer.LF);
            ptr += 2;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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LFNBQVM7QUFDdkQsU0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN2QyxTQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hDLFVBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzlDLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDdkMsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsT0FBRSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQyxRQUFRO0FBQ3BDLE9BQUUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsUUFBUTtBQUNwQyxNQUFDLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsT0FBTztBQUM5QixhQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGNBQWM7QUFDL0UsV0FBTSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtBQUNqRSxlQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsZ0JBQWdCO0FBQzNGLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxhQUFhO0FBQ3ZFLGNBQVMsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsZ0JBQWdCO0FBbkNyRyxvQkFvaUJDOzs7Ozs7Ozs7Ozs7Ozs7QUN2aUJELGtFQUE2QjtBQUU3QixNQUFhLFVBQVU7SUFDbkI7Ozs7OztTQU1LO0lBQ0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQXFCLEVBQUUsYUFBc0IsS0FBSztRQUNsRixJQUFJLEdBQUcsR0FBYSxXQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUUxRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUM7UUFFcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvRCxJQUFJLFVBQVUsRUFBRTtZQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQztZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBSSxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUVELE9BQU8sR0FBRztJQUNkLENBQUM7SUFFRDs7U0FFSztJQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQXNCO1FBQ3BELEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXJCLElBQUksR0FBRyxHQUFhLEVBQUU7UUFFdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ2Y7UUFFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEQsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVEOztTQUVLO0lBQ0UsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQWlCO1FBQ2xELElBQUksR0FBRyxHQUFhLFdBQUksQ0FBQyxXQUFXO1FBRXBDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkI7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixPQUFPLEdBQUc7SUFDZCxDQUFDO0lBRUQ7O1NBRUs7SUFDRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBZTtRQUMxQyxJQUFJLEdBQUcsR0FBYSxXQUFJLENBQUMsV0FBVztRQUVwQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0IsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVEOzs7OztTQUtLO0lBQ0UsTUFBTSxDQUFDLDhCQUE4QixDQUFDLElBQWUsRUFBRSxJQUFVLEVBQUUsUUFBZ0IsRUFBRSxxQkFBdUM7UUFDL0gsSUFBSSxVQUFVLEdBQUcsV0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBRXZFLElBQUkseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXJGLElBQUksR0FBRyxHQUFhLEVBQUU7UUFFdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLDRFQUE0RTtZQUM1RSwrRkFBK0Y7WUFDL0YseUJBQXlCO1lBQ3pCLElBQUksVUFBVSxHQUFHLFdBQUksQ0FBQyxjQUFjLENBQUMsV0FBSSxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBRXJGLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckYsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxvQkFBb0IsR0FBRyxXQUFJLENBQUMsY0FBYyxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNuSSxvQkFBb0IsR0FBRyxXQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDO1lBRTFGLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FFeEg7YUFBTTtZQUNILElBQUksWUFBWSxHQUFHLFdBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFJLENBQUMsUUFBUSxFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBRXBJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9FLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQztZQUNwQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoSDtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUM7UUFFakIsT0FBTyxHQUFHO0lBQ2QsQ0FBQztDQUNKO0FBbkhELGdDQW1IQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEhELGtFQUE2QjtBQUc3Qix1RkFBMEM7QUFFMUM7O0tBRUs7QUFDTCxNQUFhLE1BQU07SUFxRGY7OztTQUdLO0lBQ0wsWUFBb0IsSUFBZSxFQUFVLFdBQXlCLEVBQVUsUUFBc0IsRUFBVSxNQUF5QjtRQUFySCxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFUekk7O2FBRUs7UUFDRyxVQUFLLEdBQVcsRUFBRTtRQU90QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O1NBS0s7SUFDTCxZQUFZLENBQUMsV0FBeUI7UUFDbEMsSUFBSSxVQUFVLEdBQXFDLEVBQUU7UUFFckQsS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUN2QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFL0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxVQUFVO0lBQ3JCLENBQUM7SUFFRDs7Ozs7O1NBTUs7SUFDTCxlQUFlLENBQUMsSUFBVSxFQUFFLHFCQUF1QztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDZixNQUFNLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUV6QyxJQUFJLEdBQUcsR0FBYSxFQUFFO1FBQ3RCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFO1FBRXZFLElBQUksUUFBUSxHQUFTLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUVwRCxPQUFPLHdCQUFVLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQztJQUM5RyxDQUFDO0lBRUQ7Ozs7OztTQU1LO0lBQ0wsZUFBZSxDQUFDLE1BQW9CLEVBQUUsUUFBc0I7UUFDeEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFFbEMsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDZixNQUFNLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUV6QyxJQUFJLFVBQVUsR0FBdUIsSUFBSSxDQUFDLE1BQU07UUFFaEQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDWixNQUFNLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztZQUVqRCxPQUFPLENBQUMsQ0FBQyxTQUFTO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsNEZBQTRGO1FBQzVGLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQU8sQ0FBQyxDQUFDLFNBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBVSxDQUFDLENBQUMsU0FBVSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBRXBILElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSTtnQkFDdkIsT0FBTyxLQUFLO2FBQ2Y7WUFFRCxPQUFPLElBQUk7UUFDZixDQUFDLENBQUM7UUFFRixJQUFJLFdBQVcsR0FBUSxJQUFJLENBQUMsYUFBYTtRQUV6QyxJQUFJLFNBQVMsR0FBYSxFQUFFO1FBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQzNELFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7U0FDdEQ7UUFFRCxJQUFJLEdBQUcsR0FBYSx3QkFBVSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRzVCLEtBQUssSUFBSSxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRW5CLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtJQUM5RixDQUFDO0lBRUQ7O1NBRUs7SUFDTCxjQUFjLENBQUMsRUFBVTtRQUNyQixRQUFRLEVBQUUsRUFBRTtZQUNSLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxPQUFPO2dCQUNSLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtZQUMvQyxLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGlCQUFpQjtZQUM3RSxLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGlCQUFpQjtZQUM3RSxLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFdBQVc7Z0JBQ1osT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsZ0JBQWdCO1lBQ3ZFLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssWUFBWTtnQkFDYixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsaUJBQWlCO1lBQzVFLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxTQUFTO2dCQUNWLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxjQUFjO1lBQzFELEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxTQUFTO2dCQUNWLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxjQUFjO1lBQzFELEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssV0FBVztnQkFDWixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxnQkFBZ0I7WUFDdEUsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxlQUFlO1lBQ2pFLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssV0FBVztnQkFDWixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxhQUFhO1lBQ25FLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxRQUFRO2dCQUNULE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGFBQWE7WUFDcEQsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtZQUNwRCxLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssTUFBTTtnQkFDUCxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztTQUM1QztRQUVELE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDs7U0FFSztJQUNMLHFCQUFxQixDQUFDLEtBQWlCO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUNiLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRTtRQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUU7UUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ2hCLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUUvQixJQUFJLEdBQUcsR0FBYSx3QkFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDckUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDbkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUV0QixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDaEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXRCLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHO1lBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHO1lBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHO1lBRTNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUdELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO1FBQzNCLElBQUksT0FBTyxFQUFFO1lBQ1QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0SixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3BFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDcEIsTUFBTSxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFFcEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNuQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRW5CLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzlDLENBQUM7SUFFRDs7U0FFSztJQUNMLG9CQUFvQjtRQUNoQixJQUFJLElBQUksR0FBYSxFQUFFO1FBRXZCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUM7WUFDWixPQUFPLENBQUM7UUFDWixDQUFDLENBQUM7UUFFRixJQUFJLEdBQUcsR0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzNDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDSCxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hDO1FBRUQsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVEOztTQUVLO0lBQ0wsa0JBQWtCLENBQUMsSUFBWTtRQUMzQix5QkFBeUI7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUVsQyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqRCxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDO1lBQ1osT0FBTyxDQUFDO1FBQ1osQ0FBQyxDQUFDO1FBRUYsSUFBSSxPQUFPLEdBQXFCLFNBQVM7UUFDekMsS0FBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUU7YUFDeEI7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2FBQzNCO1lBRUQsT0FBTyxHQUFHLEdBQUc7U0FDaEI7UUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNyQixVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CO1FBRXBFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWYsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVEOztTQUVLO0lBQ0wsNEJBQTRCO1FBQ3hCLElBQUksR0FBRyxHQUFhLE1BQU0sQ0FBQyxJQUFJO1FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVoRCxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtRQUVuRCxLQUFLLElBQUksUUFBUSxJQUFJLGlCQUFpQixFQUFFO1lBQ3BDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksR0FBYSxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFdkIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUV2QixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUVwQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtvQkFDaEIsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUM7Z0JBRXhDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUN6QjtTQUNKO1FBRUQsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVEOztTQUVLO0lBQ0wsWUFBWSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxHQUFHLEdBQWEsTUFBTSxDQUFDLE9BQU87UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUVuQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25DLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTztRQUNuRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXRCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRW5CLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUVuQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFbkIsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVEOzs7U0FHSztJQUNMLEtBQUs7UUFDRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFeEQsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBRWxDLElBQUksUUFBUSxHQUFhLEVBQUU7UUFFM0IsZ0VBQWdFO1FBQ2hFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDeEIsR0FBRyxJQUFJLENBQUM7U0FDWDtRQUVELEtBQUssSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFO1lBQzVCLElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFFcEMsK0RBQStEO1lBQy9ELGlFQUFpRTtZQUNqRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNaLEVBQUUsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ3ZCLE9BQU8sRUFBRSxHQUFHO2dCQUNaLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVU7Z0JBQ3RDLElBQUksRUFBRSxLQUFLO2dCQUNYLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQztZQUVGLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUU5QixrR0FBa0c7WUFDbEcsb0dBQW9HO1lBQ3BHLHFHQUFxRztZQUNyRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1osRUFBRSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRztvQkFDakMsT0FBTyxFQUFFLEdBQUc7b0JBQ1osVUFBVSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVTtvQkFDaEQsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsTUFBTSxFQUFFLElBQUk7aUJBQ2YsQ0FBQztnQkFDRixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUNoRCxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQ3JDO1lBRUQsc0NBQXNDO1lBQ3RDLEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dCQUMxQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHO29CQUNyQixPQUFPLEVBQUUsR0FBRztvQkFDWixVQUFVLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVO29CQUNwQyxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsSUFBSTtpQkFDZixDQUFDO2dCQUVGLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDL0I7U0FDSjtRQUVELGdEQUFnRDtRQUNoRCxJQUFJLFNBQVMsR0FBaUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUN4RSxJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBRXpELGtEQUFrRDtRQUNsRCxLQUFLLElBQUksR0FBRyxJQUFJLHNCQUFzQixFQUFFO1lBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUNwQixPQUFPLEVBQUUsR0FBRztnQkFDWixVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUNuQyxJQUFJLEVBQUUsS0FBSztnQkFDWCxNQUFNLEVBQUUsSUFBSTthQUNmLENBQUM7WUFFRixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDOUI7UUFFRCxnR0FBZ0c7UUFDaEcsNEJBQTRCO1FBQzVCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2hCLFNBQVE7WUFFWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsS0FBSzthQUNoQixDQUFDO1NBQ0w7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsNEJBQTRCLEVBQUU7UUFDakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRW5DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBQ3BDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVuQyxJQUFJLGNBQWMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUN2RSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekMsT0FBTyxTQUFTO0lBQ3BCLENBQUM7SUFFRDs7U0FFSztJQUNMLGtDQUFrQyxDQUFDLFFBQXNCO1FBQ3JELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBRXBDLElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxLQUFLLENBQUMsd0JBQXdCLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxLQUFLLENBQUMsd0JBQXdCLENBQUM7U0FDeEM7UUFFRCxJQUFJLFVBQVUsR0FBdUIsSUFBSSxDQUFDLE1BQU07UUFFaEQsNEZBQTRGO1FBQzVGLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQU8sQ0FBQyxDQUFDLFNBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBVSxDQUFDLENBQUMsU0FBVSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBRXBILElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSTtnQkFDdkIsT0FBTyxLQUFLO2FBQ2Y7WUFFRCxPQUFPLElBQUk7UUFDZixDQUFDLENBQUM7UUFFRixJQUFJLFdBQVcsR0FBUSxJQUFJLENBQUMsYUFBYTtRQUV6QyxJQUFJLEdBQUcsR0FBYSx3QkFBVSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRzVCLEtBQUssSUFBSSxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMscUJBQXFCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRW5CLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDMUMsQ0FBQzs7QUF2ckJhLFFBQUMsR0FBVyxHQUFHO0FBQ2YsUUFBQyxHQUFXLEdBQUc7QUFFZixZQUFLLEdBQVcsRUFBRTtBQUNsQixTQUFFLEdBQVcsRUFBRTtBQUNmLFNBQUUsR0FBVyxFQUFFO0FBQ2YsVUFBRyxHQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDOUIsYUFBTSxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDaEQsa0JBQVcsR0FBVyxFQUFFO0FBQ3hCLGdCQUFTLEdBQVcsRUFBRTtBQUN0QixpQkFBVSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMvQixlQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzdCLGlCQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDeEYsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztBQUN2QyxjQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3pELGtCQUFXLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsU0FBUztBQUMxQyxhQUFNLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsU0FBUztBQUNyQyxlQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGdCQUFnQjtBQUNqRixvQkFBYSxHQUFXLEVBQUU7QUFDMUIsa0JBQVcsR0FBVyxFQUFFO0FBQ3hCLFdBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQyxTQUFTO0FBQ25DLFNBQUUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsVUFBVTtBQUN0QyxZQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsU0FBUztBQUNwQyxjQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLFVBQVU7QUFDM0MsYUFBTSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsY0FBYztBQUNuRSxxQkFBYyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLFNBQVM7QUFDN0MseUJBQWtCLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLFVBQVU7QUFDdEQsY0FBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGVBQWU7QUFFekUsY0FBTyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsY0FBYztBQUNyRSxXQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtBQUNyRCxXQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtBQUNyRCxXQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUNwRCxnQkFBUyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxnQkFBZ0I7QUFDbkYsVUFBRyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLFlBQVk7QUFFakQsV0FBSSxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUVqRCxpQkFBVSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGtCQUFrQjtBQUM3RixlQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGdCQUFnQjtBQUNoRixXQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsWUFBWTtBQUNwRCxZQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGFBQWE7QUFFM0QsU0FBRSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxVQUFVO0FBQ3ZDLFFBQUMsR0FBVyxFQUFFO0FBOUNoQyx3QkEwckJDIiwiZmlsZSI6InBkZkFubm90YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwZGZBbm5vdGF0ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwZGZBbm5vdGF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciwgUERGRG9jdW1lbnRQYXJzZXIsIFBhZ2UsIEFubm90YXRpb24sIEJvcmRlciwgQ29sb3IgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBXcml0ZXIgfSBmcm9tICcuL3dyaXRlcidcblxuLyoqXG4gKiBUaGUgYW5ub3RhdGlvbiBmYWN0b3J5IHByb3ZpZGVzIG1ldGhvZHMgdG8gY3JlYXRlIGFubm90YXRpb25zLiBUaG9zZSBhcmUgc3RvcmVkIHRlbXBvcmFyeVxuICogYW5kIHRoYW4gZW5jb2RlZCBpbnRvIFBERiBjb2RlIHdoZW4gdGhlIFBERiBkb2N1bWVudCBpcyBvdXRwdXR0ZWQgYW5kIGZvciBpbnN0YW5jZSBkb3dubG9hZGVkLlxuICogVGhhdFxuICogKi9cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdID0gW11cblxuICAgIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHBhcnNlcjogUERGRG9jdW1lbnRQYXJzZXJcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgUERGRG9jdW1lbnRQYXJzZXIodGhpcy5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhbm5vdGF0aW9ucyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFBERiBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgYSBQREYgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBnaXZlbiAncGF0aCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIGZldGNoKHBhdGgpLnRoZW4oKHIpID0+IHIuYmxvYigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXI6IGFueSA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQW5ub3RhdGlvbkZhY3RvcnkocmVhZGVyLnJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHsgLy8gbm9kZSBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGVudmlyb25tZW50XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkZW50aWZpZXIgbmVjZXNzYXJ5IGZvciBjcmVhdGluZyB0aGUgYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiBcIihwZGZBbm5vdGF0ZS1cIiArIFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSkuc2xpY2UoMywgMTcpICsgXCItXCIgKyB0aGlzLmFubm90YXRpb25zLmxlbmd0aCArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZGVmYXVsdCBib3JkZXJcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEJvcmRlcigpOiBCb3JkZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcl93aWR0aDogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBtYWRlIGFubm90YXRpb25zIGludG8gYSBieXRlc3RyZWFtXG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBJbnQ4QXJyYXkge1xuICAgICAgICBpZiAodGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy50b0RlbGV0ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICAgICAgbGV0IHdyaXRlcjogV3JpdGVyID0gbmV3IFdyaXRlcih0aGlzLmRhdGEsIHRoaXMuYW5ub3RhdGlvbnMsIHRoaXMudG9EZWxldGUsIHRoaXMucGFyc2VyKVxuXG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3JlY3QnIHBhcmFtZXRlciwgd2hldGhlciBhbGwgdGhlIGVudHJpZXMgYXJlIG9mIHR5cGUgbnVtYmVyIGFuZCBpZiB0aGUgdGhlIG51bWJlciBvZiBlbnRyaWVzIGlzIGNvcnJlY3RcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY2hlY2tSZWN0KG5yOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCAhPT0gbnIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgaGFzIGludmFsaWQgbnVtYmVyIG9mIGVudHJpZXM6IFwiICsgcmVjdCArIFwiIGhhcyBcIiArIHJlY3QubGVuZ3RoICsgXCIgZW50cmllcywgYnV0IHNob3VsZCBoYXZlIFwiICsgbnIgKyBcIiBlbnRyaWVzXCIpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBhKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVjdCBcIiArIHJlY3QgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWN0YW5ndWxhciBodWxsIGZyb20gYSBxdWFkUG9pbnQgZGVmaW5pdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBleHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgeF92YWx1ZXMgPSBxdWFkUG9pbnRzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMClcbiAgICAgICAgbGV0IHlfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgIT09IDApXG5cbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbiguLi54X3ZhbHVlcyksIE1hdGgubWluKC4uLnlfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueF92YWx1ZXMpLCBNYXRoLm1heCguLi55X3ZhbHVlcyldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSAncXVhZFBvaW50cycgcGFyYW1ldGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocXVhZFBvaW50cy5sZW5ndGggJSA4ICE9PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFF1YWRwb2ludHMgYXJyYXkgaGFzIGxlbmd0aCAke3F1YWRQb2ludHMubGVuZ3RofSBidXQgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDhgKVxuXG4gICAgICAgIHF1YWRQb2ludHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlF1YWRwb2ludCBcIiArIHF1YWRQb2ludHMgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiYXNlIGFubm90YXRpb24gdGhhdCBtZWFuIHRoZSByYXcgb2JqZWN0IG9mIGFubm90YXRpb24gb3IgdGhvc2UgcGFydHMgdGhhdCBhcmUgYWxsIGV4aXN0aW5nXG4gICAgICogYW5kIGVxdWFsbHkgc2V0IGluIGFsbCB0eXBlcyBvZiBhbm5vdGF0aW9uc1xuICAgICAqICovXG4gICAgY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcpOiBBbm5vdGF0aW9uIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKVxuICAgICAgICBhbm5vdC50eXBlID0gXCIvQW5ub3RcIixcbiAgICAgICAgICAgIGFubm90LnBhZ2UgPSBwYWdlLFxuICAgICAgICAgICAgYW5ub3Qub2JqZWN0X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKCksXG4gICAgICAgICAgICBhbm5vdC5pZCA9IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICBhbm5vdC5yZWN0ID0gcmVjdCxcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IGF1dGhvcixcbiAgICAgICAgICAgIGFubm90LnBhZ2VSZWZlcmVuY2UgPSB0aGlzLnBhcnNlci5nZXRQYWdlKHBhZ2UpLFxuICAgICAgICAgICAgYW5ub3QudXBkYXRlRGF0ZSA9IFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSksXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IGNvbnRlbnRzLFxuICAgICAgICAgICAgYW5ub3QuYm9yZGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0Qm9yZGVyKClcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVRleHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBpZiAoIWNvbnRlbnRzKVxuICAgICAgICAgICAgY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhdXRob3IpXG4gICAgICAgICAgICBhdXRob3IgPSBcIlwiXG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcblxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9UZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgbWFya3VwIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGlmICgwID09PSBxdWFkUG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHF1YWRQb2ludHMgPSBbcmVjdFswXSwgcmVjdFszXSwgcmVjdFsyXSwgcmVjdFszXSwgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFsxXV1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcXVhZFBvaW50czogcXVhZFBvaW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGhpZ2hsaWdodCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUhpZ2hsaWdodEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9IaWdobGlnaHRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gdW5kZXJsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVW5kZXJsaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9VbmRlcmxpbmVcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzcXVpZ2dsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWlnZ2x5QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVpZ2dseVwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmlrZSBvdXQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdHJpa2VPdXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1N0cmlrZU91dFwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZyZWUgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUZyZWVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJyaWdodC1qdXN0aWZpZWRcIixcbiAgICAgICAgICAgIGRlZmF1bHRBcHBlYXJhbmNlOiBcIi9JbnZhbGlkX2ZvbnQgOSBUZlwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0ZyZWVUZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTGluZUFubm90YXRpb24oKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzZSBhbm5vdGF0aW9uIG9iamVjdCBvZiBhIGNpcmNsZSBhbmQgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1NxdWFyZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9DaXJjbGVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2Ugb2JqZWN0IG9mIGEgcG9seWdvbiBvciBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBzdWJ0eXA6IFBvbHlnb24gb3IgUG9seUxpbmVcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBzdWJ0eXBlOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KTogQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IHN1YnR5cGVcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWdvbiBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvbkFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5Z29uXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seUxpbmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5rIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBpbmtMaXN0IDogYSBsaXN0IG9mIGxpc3QgY29udGFpbmluZyB0aGUgcG9pbnRzIGZvciBkcmF3aW5nIHRoZSBsaW5lc1xuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVJbmtBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBpbmtMaXN0OiBudW1iZXJbXVtdIHwgbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMCwgZzogMSwgYjogMCB9KSB7XG5cbiAgICAgICAgaWYgKGlua0xpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbmtMaXN0IGlzIGVtcHR5XCIpXG5cbiAgICAgICAgbGV0IF9pbmtMaXN0OiBhbnkgPSBbXVxuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbmtMaXN0WzBdKSB7XG4gICAgICAgICAgICBfaW5rTGlzdCA9IFtpbmtMaXN0XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBpbmtMaXN0XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBpbmtMaXN0OiBfaW5rTGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9JbmtcIlxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RhbXAgYW5ub3RhdGlvbi4gVGhlcmUgZXhpc3RzIGEgbnVtYmVyIG9mIHByZWRpZmluZWQgc3RhbXBzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIFBERiBkb2N1bWVudHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdGFtcFR5cGUgOiB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdGFtcEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3RhbXBUeXBlOiBzdHJpbmcgPSBcIkRyYWZ0XCIsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgWzUwLCA1MCwgODAsIDgwXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHN0YW1wVHlwZTogc3RhbXBUeXBlXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL1N0YW1wXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZpc3VhbCBzeW1ib2wgdGhhdCBpbmRjYXRlcyB0aGUgZXhpc3RhbmNlIG9mIHRleHQgZWRpdHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjYXJldFN5bWJvbCA6IE5vbmUgb3IgUCwgd2l0aCBQIGZvciB1c2luZyB0aGUgcGFyYWdyYXBoIHN5bWJvbCBhcyBjYXJldFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDYXJldEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY2FyZXRTeW1ib2w6IHN0cmluZyA9IFwiUFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFtdLCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY2FyZXRTeW1ib2w6IGNhcmV0U3ltYm9sXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0NhcmV0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgYW5ub3RhdGlvbiB3aXRoIHRoZSBnaXZlbiBpZCBvciB0aGUgZ2l2ZW4gcmVmZXJlbmNlIG9iamVjdFxuICAgICAqICovXG4gICAgZGVsZXRlQW5ub3RhdGlvbihpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpZiBpdCB3YXMganVzdCBjcmVhdGVkIGJ1dCBpcyBub3QgaW4gdGhlIHBkZiBkb2N1bWVudFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFubm90YXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgaWQgJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiB0aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCAmJiBpZC5vYmogPT09ICg8YW55PnRoaXMuYW5ub3RhdGlvbnNbaV0ub2JqZWN0X2lkKS5vYmogJiYgaWQuZ2VuZXJhdGlvbiAmJiBpZC5nZW5lcmF0aW9uID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkuZ2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5zbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRBbm5vdGF0aW9ucygpLnRoZW4oKGFubm90cykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IF9hbm5vdHMgb2YgYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFubm90IG9mIF9hbm5vdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIGFubm90LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9EZWxldGUucHVzaChhbm5vdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiBhbm5vdC5vYmplY3RfaWQgJiYgaWQub2JqID09PSBhbm5vdC5vYmplY3RfaWQub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gYW5ub3Qub2JqZWN0X2lkLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlc3VsIG9mIGFsbCBhbm5vdGF0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gVGhpcyB3aWxsXG4gICAgICogY29tcHJpc2UgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBleGlzdHMgYW5kIHRob3NlIHRoYXQgd2VyZSBjcmVhdGVkIHVzaW5nIHRoaXMgbGlicmFyeVxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbnMoKTogUHJvbWlzZTxBbm5vdGF0aW9uW11bXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0Fubm90cyA9IHRoaXMucGFyc2VyLmV4dHJhY3RBbm5vdGF0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdBbm5vdCBvZiB0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbm5vdHNbbmV3QW5ub3QucGFnZV0ucHVzaChuZXdBbm5vdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZXhpc3RpbmdBbm5vdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUG9wdXBBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICBsZXQgYTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICBsZXQgZXh0ZW5kZWRfcGRmID0gdGhpcy53cml0ZSgpXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2V4dGVuZGVkX3BkZl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgYS5ocmVmID0gdXJsXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgYS5yZW1vdmUoKVxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBhZGFwdGVkIFBERiBkb2N1bWVudCBpbiBhIG5vZGVqcyBlbnZpcm9ubWVudFxuICAgICAqICovXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2lzc3Vlcy85ODI3XG4gICAgLy8gd2h5IGlzIGl0IHNvIHJlcHJlaGVuc2libGUgdG8gY3JlYXRlIGxpYnJhcmllcyBmb3IgYm90aCBlbnZpcm9ubWVudHMgKGJyb3dzZXIgYW5kIG5vZGVqcyk/IFRob3NlIGd1eXMgYXQgYW5ndWxhciBtaWdodCBrbm93LlxuICAgIC8vXG4gICAgLy8gdW5jb21tZW50IGl0IGlmIHlvdSB3YW50IHRvIHVzZSBpdC5cbiAgICBzYXZlKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyAmJiAoPGFueT5wcm9jZXNzKS5yZWxlYXNlLm5hbWUgIT09ICdub2RlJykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBkb3dubG9hZCgpIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLndyaXRlKClcbiAgICAgICAgLy8gICAgIGZzLndyaXRlRmlsZShmaWxlTmFtZSwgQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZmlsZSB3YXMgd3JpdHRlbiB0bzogJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFhSZWYge1xuICAgIGlkOiBudW1iZXJcbiAgICBwb2ludGVyOiBudW1iZXJcbiAgICBnZW5lcmF0aW9uOiBudW1iZXJcbiAgICBmcmVlOiBib29sZWFuXG4gICAgdXBkYXRlOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICBpZDogbnVtYmVyXG4gICAgY291bnQ6IG51bWJlclxuICAgIGVuZF9wdHI6IG51bWJlciAvLyBwb2ludHMgdG8gdGhlIGVuZCBvZiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG59XG5cbmludGVyZmFjZSBUcmFpbGVyIHtcbiAgICBzaXplOiBudW1iZXJcbiAgICByb290OiBSZWZlcmVuY2VQb2ludGVyXG4gICAgcHJldj86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICBbaWQ6IG51bWJlcl06IFhSZWZcbn1cblxuLyoqXG4gKiBIb2xkcyB0aGUgY29tcGxldGUgaW5mb3JtYXRpb24gb2Ygb25lIHVwZGF0ZSBzZWN0aW9uLiBUaGF0IGNvbXByaXNlczpcbiAqIC0gdGhlIGJvZHkgdXBkYXRlXG4gKiAtIHRoZSBjcm9zc2lzdGUgcmVmZXJlbmNlIHRhYmxlXG4gKiAtIHRoZSB0cmFpbGVyXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlY3Rpb24ge1xuICAgIHB1YmxpYyByZWZzOiBYUmVmW10gPSBbXVxuXG4gICAgcHVibGljIHN0YXJ0X3BvaW50ZXI6IG51bWJlciA9IC0xXG5cbiAgICBwdWJsaWMgdHJhaWxlcjogVHJhaWxlciA9IHsgc2l6ZTogLTEsIHJvb3Q6IHsgb2JqOiAtMSwgZ2VuZXJhdGlvbjogLTEgfSB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vIC9TaXplXG4gICAgcHJpdmF0ZSBzdGF0aWMgUk9PVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyAvUm9vdFxuICAgIHByaXZhdGUgc3RhdGljIFBSRVY6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gL1ByZXZcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5KSB7IH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB3aXRoIHRoZSBnaXZlbiBpZFxuICAgICAqICovXG4gICAgZ2V0UmVmZXJlbmNlKGlkOiBudW1iZXIpOiBYUmVmIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgZm9yIChsZXQgcmVmIG9mIHRoaXMucmVmcykge1xuICAgICAgICAgICAgaWYgKHJlZi5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBoZWFkZXIgb2YgYSBzdWIgc2VjdGlvbi4gRm9yIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiAwIDEgLy8gPC0tXG4gICAgICogLi4uXG4gICAgICpcbiAgICAgKiBTbyB0aGUgb2JlamN0IGlkIDAgYW5kIHRoZSBudW1iZXIgb2Ygc3ViIHNlY3Rpb24gZW50cmllcyAxXG4gICAgICogKi9cbiAgICBleHRyYWN0U3ViU2VjdGlvbkhlYWRlcihpbmRleDogbnVtYmVyKTogU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgICAgIGxldCBwdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBvYmpfaWQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyKVxuXG4gICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0ciArIDEpXG5cbiAgICAgICAgbGV0IHB0cl9yZWZfY291bnQgPSBwdHJcblxuICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlX2NvdW50ID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX3JlZl9jb3VudCwgcHRyKVxuXG4gICAgICAgIHJldHVybiB7IGlkOiBvYmpfaWQsIGNvdW50OiByZWZlcmVuY2VfY291bnQsIGVuZF9wdHI6IHB0ciB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgb2YgYSBzdWIgc2VjdGlvbi4gVGhlIGluZGV4IHBvaW50cyB0byB0aGUgc3RhcnQgb2ZcbiAgICAgKiB0aGUgZmlyc3QgcmVmZXJlbmNlIGFuZCBjb3VudCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgcmVmZXJlbmNlcyB0aGF0IGFyZVxuICAgICAqIGNvbnRhaW5lZCBpbiB0aGUgc3Vic2VjdGlvbi5cbiAgICAgKlxuICAgICAqIFRoZSBmaXJzdF9vYmplY3RfaWQgaXMgdGhlIGlkIHByb3ZpZGVkIGluIHRoZSBzdWIgc2VjdGlvbiBoZWFkZXJcbiAgICAgKlxuICAgICAqIEJ5IGRlZmluaXRpb24gb2YgdGhlIFBERiBzdGFuZGFyZCBvbmUgZW50cnkgaXMgMjAgYnl0ZXMgbG9uZ1xuICAgICAqICovXG4gICAgZXh0cmFjdFJlZmVyZW5jZXMoaW5kZXg6IG51bWJlciwgY291bnQ6IG51bWJlciwgZmlyc3Rfb2JqZWN0X2lkOiBudW1iZXIpOiBYUmVmW10ge1xuICAgICAgICBsZXQgX3JlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpLCBpbmRleCArPSAyMCkge1xuICAgICAgICAgICAgbGV0IHB0cl9lbmRfcG9pbnRlciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaW5kZXgsIHB0cl9lbmRfcG9pbnRlcilcblxuICAgICAgICAgICAgbGV0IHB0cl9nZW5fc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZW5kX3BvaW50ZXIgKyAxKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2dlbl9lbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQpXG5cbiAgICAgICAgICAgIGxldCBnZW5lcmF0aW9uID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydCwgcHRyX2dlbl9lbmQpXG5cbiAgICAgICAgICAgIGxldCBwdHJfZmxhZyA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9nZW5fZW5kICsgMSlcblxuICAgICAgICAgICAgbGV0IGlzRnJlZSA9IHRoaXMuZGF0YVtwdHJfZmxhZ10gPT09IDEwMlxuXG4gICAgICAgICAgICBfcmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZmlyc3Rfb2JqZWN0X2lkICsgaSxcbiAgICAgICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgZnJlZTogaXNGcmVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogIWlzRnJlZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB0cmFpbGVyIG9mIHRoZSBzdWJzZWN0aW9uIHRoYXQgbWVhbnMgdGhlIHBhcnQgc3RhdGluZyB3aXRoIHRoZSAndHJhaWxlcicga2V5d29yZCBhbmRcbiAgICAgKiBpbiBwYXJ0aWN1bGFyIHRoZSB0cmFpbGVyIGRpY3Rpb25hcnlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RUcmFpbGVyKGluZGV4OiBudW1iZXIpOiBUcmFpbGVyIHtcbiAgICAgICAgbGV0IGVuZF90cmFpbGVyX2luZGV4OiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RBUlRYUkVGLCB0aGlzLmRhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoaW5kZXgsIGVuZF90cmFpbGVyX2luZGV4KVxuICAgICAgICBpbmRleCA9IDBcblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uU0laRSwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFVwZGF0ZVNlY3Rpb24uU0laRS5sZW5ndGhcbiAgICAgICAgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG4gICAgICAgIGxldCBzaXplID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSlcblxuXG4gICAgICAgIGxldCBwdHJfc3RhcnRfcm9vdCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5ST09ULCBfZGF0YSwgaW5kZXgsIHRydWUpICsgVXBkYXRlU2VjdGlvbi5ST09ULmxlbmd0aFxuICAgICAgICBwdHJfc3RhcnRfcm9vdCA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG4gICAgICAgIGxldCByb290X3JlZmVyZW5jZSA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKF9kYXRhLCBwdHJfc3RhcnRfcm9vdClcblxuXG4gICAgICAgIGxldCBwdHJfc3RhcnRfcHJldiA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5QUkVWLCBfZGF0YSwgaW5kZXgsIHRydWUpXG4gICAgICAgIGxldCBwcmV2ID0gdW5kZWZpbmVkXG4gICAgICAgIGlmICgtMSAhPSBwdHJfc3RhcnRfcHJldikge1xuICAgICAgICAgICAgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2ICsgVXBkYXRlU2VjdGlvbi5QUkVWLmxlbmd0aClcblxuICAgICAgICAgICAgcHJldiA9IFV0aWwuZXh0cmFjdE51bWJlcihfZGF0YSwgcHRyX3N0YXJ0X3ByZXYpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgIHJvb3Q6IHJvb3RfcmVmZXJlbmNlLFxuICAgICAgICAgICAgcHJldjogcHJldlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBVcGRhdGUgc2VjdGlvbiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0X3BvaW50ZXIgPSBpbmRleFxuXG4gICAgICAgIGxldCBzdGFydF9wdHIgPSBpbmRleCArIDUgLy8gKyBsZW5ndGgoeHJlZikgKyBibGFua1xuICAgICAgICBzdGFydF9wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBzdGFydF9wdHIpXG5cbiAgICAgICAgbGV0IGZpcnN0X2hlYWRlciA9IHRoaXMuZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoc3RhcnRfcHRyKVxuXG4gICAgICAgIC8vIHRoZSBmaXJzdCBoZWFkZXIgbXVzdCBiZSAwIHRvIGVzdGFibGlzaCB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXG4gICAgICAgIGlmIChmaXJzdF9oZWFkZXIuaWQgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiRmlyc3Qgb2JqZWN0IGlkIG5vdCAwXCIpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgZmlyc3RfaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgIC8vIGV4dHJhY3QgZmlyc3QgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQodGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGZpcnN0X2hlYWRlci5jb3VudCwgZmlyc3RfaGVhZGVyLmlkKSlcblxuICAgICAgICAvLyBleHRyYWN0IHJlbWFpbmluZyByZWZlcmVuY2VzXG4gICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGZpcnN0X2hlYWRlci5jb3VudCAqIDIwXG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZGF0YVtzdGFydF9wdHJdICE9PSAxMTYpIHsgLy8gMTE2ID0gJ3QnIHN0YXJ0IG9mIHRoZSB3b3JkIHRyYWlsZXIgdGhhdCBjb25jbHVkZXMgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2Ugc2VjdGlvblxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoc3RhcnRfcHRyKVxuXG4gICAgICAgICAgICByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBoZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgICAgIGxldCByZWZlcmVuY2VzID0gdGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGhlYWRlci5jb3VudCwgaGVhZGVyLmlkKVxuXG4gICAgICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHJlZmVyZW5jZXMpXG5cbiAgICAgICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGhlYWRlci5jb3VudCAqIDIwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXIgPSB0aGlzLmV4dHJhY3RUcmFpbGVyKHN0YXJ0X3B0cilcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29tcGxldGUgUERGIGRvY3VtZW50IGhpc3RvcnkgYW5kIHRoZXJlZm9yZSBob2xkcyB0aGVcbiAqIHVwZGF0ZWQgYm9keSBwYXJ0cywgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2VzIGFuZCB0aGUgZG9jdW1lbnQgdHJhaWxlcnNcbiAqICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRIaXN0b3J5IHtcbiAgICBwdWJsaWMgdXBkYXRlczogVXBkYXRlU2VjdGlvbltdID0gW11cblxuICAgIHB1YmxpYyB0cmFpbGVyU2l6ZTogbnVtYmVyID0gLTFcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIG9iamVjdCBpZHMgdGhhdCB3ZXJlIGZvcm1lcmx5IGZyZWVkIGFuZCBhcmUgbm93ICdhbHJlYWR5JyByZXVzZWQuXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHByZXZlbnQgYSBmcmVlZCBvYmplY3QgYSBzZWNvbmQgdGltZVxuICAgICAqICovXG4gICAgcHJpdmF0ZSBhbHJlYWR5X3JldXNlZF9pZHM6IFhSZWZbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgSW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHVwZGF0ZSBzZWN0aW9uIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqICovXG4gICAgZXh0cmFjdFVwZGF0ZVNlY3Rpb24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgdXBkYXRlU2VjdGlvbiA9IG5ldyBVcGRhdGVTZWN0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgdXBkYXRlU2VjdGlvbi5leHRyYWN0KGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlcy5wdXNoKHVwZGF0ZVNlY3Rpb24pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGxhc3QgdXBkYXRlIHNlY3Rpb24gb2YgYSBkb2N1bWVudCAodGhhdCBtZWFuc1xuICAgICAqIHRoZSBtb3N0IHJlY2VudCB1cGRhdGUgbG9jYXRpbmcgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEVudHJ5KCkge1xuICAgICAgICBsZXQgcHRyID0gdGhpcy5kYXRhLmxlbmd0aCAtIDFcblxuICAgICAgICBsZXQgcHRyX3N0YXJ0eHJlZiA9IFV0aWwubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgOVxuXG4gICAgICAgIHB0ciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9zdGFydHhyZWYpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0VXBkYXRlU2VjdGlvbihwdHIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGVudGlyZSB1cGRhdGUgc2VjdGlvbnNcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEhpc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZXh0cmFjdERvY3VtZW50RW50cnkoKVxuXG4gICAgICAgIGxldCB1cyA9IHRoaXMudXBkYXRlc1swXVxuXG4gICAgICAgIHdoaWxlICh1cy50cmFpbGVyLnByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24odXMudHJhaWxlci5wcmV2KVxuICAgICAgICAgICAgdXMgPSB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXJTaXplID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnNpemVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgZm9yIGNsYXJpZmljYXRpb24uIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBtb3N0IHJlY2VudC4gV2UgcGFyc2VkIGJhY2t3YXJkcy5cbiAgICAgKiAqL1xuICAgIGdldFJlY2VudFVwZGF0ZSgpOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ5IHJ1bm5pbmcgdGhyb3VnaCB0aGUgUERmIGhpc3Rvcnkgd2UgY2FuIGZvciBldmVyeSBvYmplY3QgaWQgZGV0ZXJtaW5lIHRoZSBwb2ludGVyIGFkZHJlc3MgdG8gdGhlIG1vc3QgcmVjZW50IHZlcnNpb24sIGFuZFxuICAgICAqIHdoZXRoZXIgdGhlIG9iamVjdCBpZCBpcyBzdGlsbCBpbiB1c2VkLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iamVjdCBsb29rdXAgdGFibGUgaGFzIGFuIGVudHJ5IGZvciBldmVyeSBleGlzdGluZyBvYmplY3QgaWQsIGEgcG9pbnRlciB0byB0aGUgdGhlIG1vc3QgcmVjZW50IG9iamVjdCBkZWZpbml0aW9uLCBhcyBsb25nXG4gICAgICogYXMgdGhlIG9iamVjdCBleGlzdHMsIG9yIGFuIGFjY29yZGluZyBpbmRpY2F0aW9uIG90aGVyd2lzZS5cbiAgICAgKiAqL1xuICAgIGNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKCk6IE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgbGV0IG9ialRhYmxlOiB7IFtpZDogbnVtYmVyXTogWFJlZiB9ID0ge31cblxuICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICBsZXQgb2JqX2NvdW50ID0gdXBkYXRlLnRyYWlsZXIuc2l6ZVxuXG4gICAgICAgIGxldCBpID0gMVxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICsraVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAqIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgbGV0IG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBmcmVlX2hlYWRlciA9IG9iamVjdExvb2t1cFRhYmxlWzBdXG5cbiAgICAgICAgaWYgKCFmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ3Jvc3NzaXRlIHJlZmVyZW5jZSBoYXMgbm8gaGVhZGVyIGZvciB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXCIpXG5cbiAgICAgICAgLy8gaWYgdGhlIHBvaW50ZXIgb2Ygb2JqZWN0IDAgcG9pbnRzIHRvIDAgdGhlcmUgaXMgbm8gZnJlZWQgb2JqZWN0IHRoYXQgY2FuIGJlIHJldXNlZFxuICAgICAgICBpZiAoMCA9PT0gZnJlZV9oZWFkZXIucG9pbnRlcikge1xuICAgICAgICAgICAgaWYgKC0xID09PSB0aGlzLnRyYWlsZXJTaXplKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVHJhaWxlciBzaXplIG5vdCBzZXRcIilcblxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGxpc3QgaGVhZFxuICAgICAgICBsZXQgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICBsZXQgZnJlZWRIZWFkZXJMaXN0OiBYUmVmW10gPSBbXVxuICAgICAgICB3aGlsZSAocHRyICE9PSAwKSB7XG4gICAgICAgICAgICBmcmVlZEhlYWRlckxpc3QucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIGZyZWVfaGVhZGVyID0gb2JqZWN0TG9va3VwVGFibGVbcHRyXVxuICAgICAgICAgICAgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdldEZyZWVIZWFkZXIgPSAoZnJlZUhlYWRlckxpc3Q6IFhSZWZbXSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBmcmVlSGVhZGVyTGlzdC5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocC5nZW5lcmF0aW9uIDwgNjU1MzUgJiYgLy8gbWF4IGdlbmVyYXRpb24gbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIC0xID09PSB0aGlzLmFscmVhZHlfcmV1c2VkX2lkcy5pbmRleE9mKHApKSB7IC8vIG5vdCBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXVzZWRfZnJlZV9oZWFkZXIgPSBnZXRGcmVlSGVhZGVyKGZyZWVkSGVhZGVyTGlzdClcblxuICAgICAgICBpZiAocmV1c2VkX2ZyZWVfaGVhZGVyKSB7XG4gICAgICAgICAgICBmcmVlX2hlYWRlciA9IHJldXNlZF9mcmVlX2hlYWRlclxuXG4gICAgICAgICAgICAvLyBzdG9yZSB1c2VkIGlkIHRvIG1ha2Ugc3VyZSBpdCB3aWxsIG5vdCBiZSBzZWxlY3RlZCBhZ2FpblxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5X3JldXNlZF9pZHMucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB0aGF0IGFsbCBmcmVlZCBvYmplY3QgaWRzIGFyZSBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBmcmVlX2hlYWRlci5wb2ludGVyLCBnZW5lcmF0aW9uOiBvYmplY3RMb29rdXBUYWJsZVtmcmVlX2hlYWRlci5pZF0uZ2VuZXJhdGlvbiwgcmV1c2VkOiB0cnVlIH1cbiAgICB9XG59XG4iLCJleHBvcnQgeyBQREZEb2N1bWVudFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgQW5ub3RhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IERvY3VtZW50SGlzdG9yeSwgT2JqZWN0TG9va3VwVGFibGUgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknO1xuXG4vKipcbiAqIE5vdGUgdGhhdCB0aGlzIHBhcnNlciBkb2VzIG5vdCBwYXJzZXMgdGhlIFBERiBmaWxlIGNvbXBsZXRlbHkuIEl0IGxvb2t1cHMgdGhvc2VcbiAqIHBhcnRzIHRoYXQgYXJlIGltcG9ydGFudCBmb3IgdGhlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zLiBGb3IgbW9yZSBpbmZvcm1hdGlvblxuICogcGxlYXNlIHJlYWQgdGhlIFJFQURNRS5cbiAqICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3Ige1xuICAgIHI6IG51bWJlclxuICAgIGc6IG51bWJlclxuICAgIGI6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzOiBudW1iZXJcbiAgICB2ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzOiBudW1iZXJcbiAgICBib3JkZXJfd2lkdGg6IG51bWJlclxuICAgIGRhc2hfcGF0dGVyPzogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBSZWZlcmVuY2VzIGluIFBERiBkb2N1bWVucyBhcmUgIG9mIHRoZSBmb3JtXG4gKiA8b2JqX2lkPiA8Z2VuZXJhdGlvbj4gUlxuICpcbiAqIFRoaXMgaG9sZHMgc3VjaCBhIHJlZmVyZW5jZVxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgb2JqOiBudW1iZXJcbiAgICBnZW5lcmF0aW9uOiBudW1iZXJcbiAgICByZXVzZWQ/OiBib29sZWFuIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uIHtcbiAgICBwYWdlOiBudW1iZXIgPSAtMS8vIHRoZSB0YXJnZXQgcGFnZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHR5cGU6IHN0cmluZyA9IFwiXCIvLyB0aGUgc3ViIHR5cGUgb2YgdGhlIGFycmF5IChUZXh0LCBIaWdobGlnaHQsIC4uLilcbiAgICBvYmplY3RfaWQ6IFJlZmVyZW5jZVBvaW50ZXIgfCBudWxsID0gbnVsbC8vIGFuIHVudXNlZCBvYmplY3QgaWRcbiAgICBpZDogc3RyaW5nID0gXCJcIi8vIHVuaXF1ZSBhbm5hdGlvbiBpZGVudGlmaWVyXG4gICAgcmVjdDogbnVtYmVyW10gPSBbXS8vIHRoZSBsb2NhdGlvbiBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGF1dGhvcjogc3RyaW5nID0gXCJcIi8vIHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICBwYWdlUmVmZXJlbmNlOiBQYWdlIHwgbnVsbCA9IG51bGwvLyBUaGUgcmVmZXJlbmNlIHRvIHRoZSBwYWdlIG9iamVjdCB0byB3aGljaCB0aGUgYW5ub3RhdGlvbiBpcyBhZGRlZFxuICAgIHVwZGF0ZURhdGU6IHN0cmluZyA9IFwiXCIvLyBUaGUgZGF0ZSB3aGVuIHRoZSBhbm5vdGF0aW9uIHdhcyBjcmVhdGVkIG9yIHVwZGF0ZWRcbiAgICBjb250ZW50cz86IHN0cmluZyAvLyBUZXh0IHRoYXQgc2hhbGwgYmUgZGlzcGxheWVkIGZvciB0aGUgYW5ub3RhdGlvblxuICAgIGFubm90YXRpb25fZmxhZz86IG51bWJlciAvLyBTZWUgUERGIHNwY2VjaWZpY2F0aW9uICdBbm5vdGF0aW9uIEZsYWcnXG4gICAgYXBwZWFyYW5jZV9kaWN0aW9uYXJ5PzogYW55IC8vIGNvbnRyb2wgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICBhcHBlYXJhbmNlX3N0YXRlPzogYW55IC8vIGNoYW5nZSB0aGUgYXBwZWFyYW5jZSBhY2NvcmRpbmcgdG8gc3RhdGVzXG4gICAgYm9yZGVyPzogQm9yZGVyIHwgbnVsbCA9IG51bGwvLyBkZWZpbmUgdGhlIGJvcmRlclxuICAgIGNvbG9yPzogQ29sb3IgfCBudWxsID0gbnVsbC8vIHRoZSBjb2xvciBzZXRcbiAgICBvcGFjaXR5PzogbnVtYmVyIC8vIHRoZSBvcGFjaXR5IHZhbHVlIChDQSBjYWxsZWQgaW4gdGhlIFBERiBzcGVjKVxuICAgIHJpY2h0ZXh0Pzogc3RyaW5nIC8vIHJpY2ggdGV4dCBzdHJpbmcgZGlzcGxheWVkIGluIHRoZSBwb3B1cCB3aW5kb3cgd2hlbiB0aGUgYW5ub3RhdGlvbiBpcyBvcGVuZWRcbiAgICBpbml0aWFsbHlPcGVuPzogYm9vbGVhbiAvLyBmbGFnIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIGFubm90YXRpb24gc2hhbGwgaW5pdGlhbGx5IGJlIG9wZW5cbiAgICBpY29uTmFtZT86IHN0cmluZyAvLyBuYW1lIG9mIHRoZSB1c2VkIGljb25cbiAgICBhbm5vdGF0aW9uU3RhdGU/OiBzdHJpbmcgLy8gdGhlIHN0YXRlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgc3RhdGVNb2RlbD86IHN0cmluZ1xuICAgIGRlZmF1bHRBcHBlYXJhbmNlPzogc3RyaW5nIC8vIGRlZmF1bHQgYXBwZWFyYW5jZSBzdHJpbmdcbiAgICB0ZXh0QWxpZ25tZW50Pzogc3RyaW5nIC8vIGxlZnQtanVzdGlmaWVkLCBjZW50ZXJlZCwgcmlnaHQtanVzdGlmaWVkXG4gICAgcmljaFRleHRTdHJpbmc/OiBzdHJpbmcgLy8gZ2VuZXJhdGVzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgY2FsbG91dExpbmU/OiBudW1iZXJbXSAvLyBjYWxsIG91dCBsaW5lXG4gICAgaW50ZW50Pzogc3RyaW5nIC8vIGEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGludGVudDogRnJlZVRleHQsIEZyZWVUZXh0Q2FsbG91dCwgRnJlZVRleHRUeXBlV3JpdGVyXG4gICAgYm9yZGVyRWZmZWN0PzogYW55XG4gICAgcmQ/OiBhbnkgLy8gP1xuICAgIGJvcmRlclN0eWxlPzogYW55IC8vIGJvcmRlciBzdHlsZVxuICAgIGxpbmVFbmRpbmc/OiBzdHJpbmcgLy8gdGhlIGxpbmUgZW5kaW5nIHR5cGUgb2YgdGhlIGNhbGxvdXQgbGluZVxuICAgIHN0YW1wVHlwZT86IHN0cmluZyAvLyB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgIGNhcmV0U3ltYm9sPzogc3RyaW5nIC8vIENhbiBiZSBQIHRvIHVzZSBhIHBhcmFncmFwaCBzeW1ib2wgZm9yIHRoZSBjYXJldCBvciBOb25lXG4gICAgcXVhZFBvaW50cz86IG51bWJlcltdIC8vIHNwZWNpZmllcyBob3cgdGhlIGFubm90YXRpb24gZ29lcyBhcnJvdW5kIHRoZSB0ZXh0XG4gICAgaW5rTGlzdD86IG51bWJlcltdW11cbiAgICBib3JkZXJfc3R5bGU/OiBhbnlcbiAgICBjb2xvcl9zcGFjZT86IG51bWJlcltdXG4gICAgYm9yZGVyX2VmZmVjdD86IGFueVxuICAgIHZlcnRpY2VzPzogbnVtYmVyW11cbiAgICBsaW5lX2VuZGluZz86IHN0cmluZ1tdXG4gICAgaW50ZXJpb3JfY29sb3I/OiBudW1iZXJbXVxuICAgIG1lYXN1cmU/OiBhbnlcbiAgICBpc19kZWxldGVkPzogYm9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSA9IG5ldyBJbnQ4QXJyYXkoW10pKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGFubm90YXRpb24gb2JqZWN0IChwYXJ0aWFsbHkpXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyLCBwYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vIHJlc3RyaWN0IHRoZSBkYXRhIGFycmF5IHRvIHRoZSBwYXJ0aXRpb24gdGhhdCBhY3R1YWxseSBjb250YWlucyB0aGUgYW5ub3RhdGlvbiBkYXRhXG4gICAgICAgIGxldCBvYmpfZW5kX3B0cjogbnVtYmVyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHB0ciwgb2JqX2VuZF9wdHIpXG5cbiAgICAgICAgdGhpcy5vYmplY3RfaWQgPSBVdGlsLmV4dHJhY3RPYmplY3RJZCh0aGlzLmRhdGEsIDApXG5cbiAgICAgICAgdGhpcy50eXBlID0gXCIvXCIgKyBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuU1VCVFlQRSlcbiAgICAgICAgdGhpcy5yZWN0ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlJFQ1QpXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZSA9IHBhZ2VcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLk0pXG4gICAgICAgIHRoaXMuYm9yZGVyID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkJPUkRFUilcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5DKVxuICAgICAgICB0aGlzLmF1dGhvciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5UKVxuICAgICAgICB0aGlzLmlkID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLk5NKVxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkNPTlRFTlRTKVxuICAgICAgICB0aGlzLnF1YWRQb2ludHMgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuUVVBRFBPSU5UUylcbiAgICAgICAgdGhpcy5pbmtMaXN0ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLklOS0xJU1QpXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIENhdGFsb2cgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXkpIHsgfVxuXG4gICAgcHJpdmF0ZSBwYWdlc09iamVjdElkOiBSZWZlcmVuY2VQb2ludGVyID0geyBvYmo6IC0xLCBnZW5lcmF0aW9uOiAtMSB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBjYXRhbG9nIG9iamVjdCBmcm9tIHRoZSBkYXRhIGF0IHRoZSBnaXZlbiBwdHJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHB0cl9wYWdlc19rZXkgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRVMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuUEFHRVMubGVuZ3RoXG5cbiAgICAgICAgdGhpcy5wYWdlc09iamVjdElkID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQodGhpcy5kYXRhLCBwdHJfcGFnZXNfa2V5KVxuICAgIH1cblxuICAgIGdldFBhZ2VzT2JqZWN0SWQoKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzT2JqZWN0SWRcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgUGFnZVRyZWUgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB3aXRoIC9UeXBlIC9QYWdlc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlVHJlZSB7XG5cbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0aW9uOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBwYWdlQ291bnQ6IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIHBhZ2VSZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGFuZCByZXR1cm4gdHJ1ZSwgaWYgdGhlIG9iamVjdCB0eXBlIGlzIC9QYWdlXG4gICAgICogKi9cbiAgICBpc1BhZ2UocmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB4cmVmID0gdGhpcy5vYmplY3RMb29rdXBUYWJsZVtyZWZlcmVuY2Uub2JqXVxuXG4gICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSB4cmVmLnBvaW50ZXJcblxuICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoeHJlZi5wb2ludGVyLCBwdHIpXG5cbiAgICAgICAgcmV0dXJuICgtMSAhPT0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlBBR0UsIF9kYXRhLCAwLCB0cnVlKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUga2lkcyByZWZlcmVuY2VzIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEZvciBldmVyeSBraWQgaXQgY2hlY2tzIGlmIHRoZSByZWZlcmVuY2VkIG9iamVjdCB0eXBlIGlzOlxuICAgICAqIC0gYSAvUGFnZXMgb2JqZWN0IHRoZW4gaXQgcmVjdXJzaXZlbHkgbG9va3VwcyBpdHMgY2hpbGRyZW5cbiAgICAgKiAtIGEgL1BhZ2Ugb2JqZWN0IHRoZW4gaXQgYWRkcyB0aGUgcmVmZXJlbmNlc1xuICAgICAqICovXG4gICAgZXh0cmFjdFBhZ2VSZWZlcmVuY2VzKHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSkge1xuXG4gICAgICAgIGZvciAobGV0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhZ2UocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBoYW5kbGUgYXJyYXkgLS0gcmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgcmVmZXJlbmNlIGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgICAgICAgICBpZiAoeHJlZi5nZW5lcmF0aW9uICE9PSByZWZlcmVuY2UuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9kYXRhKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIG9iamVjdCBkYXRhIGF0IHRoZSBnaXZlbiBwb2ludGVyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkNPVU5ULCBwdHIpXG5cbiAgICAgICAgLy8gaXQgaXMgcG9zc2libGUgdGhhdCBhbiBvYmplY3Qgb2YgdHlwZSAvUGFnZXMgcmVmZXJlbmNlcyBhZ2FpbiB0byBvYmplY3RzIG9mIHR5cGVzIC9QYWdlcyBzbyB3ZSBtdXN0XG4gICAgICAgIC8vIGFwcGx5IGEgcmVjdXJzaXZlIGV2YWx1YXRpb25cbiAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgaWYgKC0xID09PSBraWRzX2luZGV4KVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGluZGV4IG9mIC9LaWRzIGluIC9QYWdlcyBvYmplY3RgKVxuXG4gICAgICAgIGtpZHNfaW5kZXggKz0gVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgIGxldCBhcnJheV9kYXRhID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIGtpZHNfaW5kZXggKyAxKVxuXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMgPSBbXVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFnZXMgdGhlIHBhZ2UgdHJlZSBjb21wcmlzZXNcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlQ291bnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0c1xuICAgICAqICovXG4gICAgZ2V0UGFnZVJlZmVyZW5jZXMoKTogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVJlZmVyZW5jZXNcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgcHVibGljIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZCAvLyBUaGUgb2JqZWN0IGlkIGFuZCBnZW5lcmF0aW9uIG9mIHRoZSBvYmplY3RcblxuICAgIHB1YmxpYyBhbm5vdHM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgaGFzQW5ub3RzRmllbGQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHVibGljIGFubm90c1BvaW50ZXI6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5LCBwcml2YXRlIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5KSB7IH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIHRoZSBsaW5rZWQgYW5ub3RhdGlvbnMgYXJyYXlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKSB7XG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKCF0aGlzLmFubm90c1BvaW50ZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb25zIHBvaW50ZXIgbm90IHNldFwiKVxuXG4gICAgICAgIGxldCByZWZfYW5ub3RfdGFibGUgPSBvYmpfdGFibGVbdGhpcy5hbm5vdHNQb2ludGVyLm9ial1cblxuICAgICAgICBpZiAocmVmX2Fubm90X3RhYmxlLmdlbmVyYXRpb24gIT09IHRoaXMuYW5ub3RzUG9pbnRlci5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWZlcmVuY2UgYW5ub3RhdGlvbiB0YWJsZSBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSByZWZfYW5ub3RfdGFibGUucG9pbnRlclxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuT0JKLmxlbmd0aFxuXG4gICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlKVxuXG4gICAgICAgIHRoaXMuYW5ub3RzID0gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBwYWdlIG9iamVjdCBzdGFydGluZyBhdCBwb3NpdGlvbiBwdHJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgaWRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuICAgICAgICBsZXQgb2JqZWN0X2lkOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpZF9wdHIpXG5cbiAgICAgICAgbGV0IGVuZF9pZF9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGlkX3B0ciArIDEpICsgMVxuICAgICAgICBsZXQgb2JqZWN0X2dlbjogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgZW5kX2lkX3B0cilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IHsgb2JqOiBvYmplY3RfaWQsIGdlbmVyYXRpb246IG9iamVjdF9nZW4gfVxuXG4gICAgICAgIGxldCBlbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHB0ciwgZW5kX3B0cilcblxuICAgICAgICBsZXQgYW5ub3RzID0gVXRpbC5leHRyYWN0RmllbGQoX2RhdGEsIFV0aWwuQU5OT1RTKVxuXG4gICAgICAgIGlmIChhbm5vdHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQW5ub3RzRmllbGQgPSB0cnVlXG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFubm90cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90cyA9IGFubm90c1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90c1BvaW50ZXIgPSBhbm5vdHNcblxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEFubm90YXRpb25BcnJheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUGFyc2VzIHRoZSByZWxldmFudCBwYXJ0cyBvZiB0aGUgUERGIGRvY3VtZW50IGFuZCBwcm92aWRlcyBmdW5jdGlvbmFsaXR5IHRvIGV4dHJhY3QgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBmb3JcbiAqIGFkZGluZyBhbm5vdGF0aW9uc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQREZEb2N1bWVudFBhcnNlciB7XG5cbiAgICBwdWJsaWMgZG9jdW1lbnRIaXN0b3J5OiBEb2N1bWVudEhpc3RvcnkgPSBuZXcgRG9jdW1lbnRIaXN0b3J5KG5ldyBJbnQ4QXJyYXkoW10pKVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeSh0aGlzLmRhdGEpXG4gICAgICAgIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmV4dHJhY3REb2N1bWVudEhpc3RvcnkoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmcmVlIG9iamVjdCBpZC4gSXQgZmlyc3QgY2hlY2tzIHdldGhlciB0aGVyZSBjYW4gYmUgYW4gZnJlZWQgb2JqZWN0IGlkIHJldXNlZC4gSWYgdGhhdCBpcyBub3QgdGhlIGNhc2VcbiAgICAgKiBpdCBjcmVhdGVzIGEgbmV3IG9uZVxuICAgICAqICovXG4gICAgZ2V0RnJlZU9iamVjdElkKCk6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEhpc3RvcnkuZ2V0RnJlZU9iamVjdElkKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIGdldENhdGFsb2coKTogQ2F0YWxvZ09iamVjdCB7XG4gICAgICAgIGxldCByb290X29iaiA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXIucm9vdFxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBjYXRhbG9nX3B0ciA9IG9ial90YWJsZVtyb290X29iai5vYmpdLnBvaW50ZXJcblxuICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSBuZXcgQ2F0YWxvZ09iamVjdCh0aGlzLmRhdGEpXG4gICAgICAgIGNhdGFsb2dfb2JqZWN0LmV4dHJhY3QoY2F0YWxvZ19wdHIpXG5cbiAgICAgICAgcmV0dXJuIGNhdGFsb2dfb2JqZWN0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHBhZ2UgdHJlZSBvYmplY3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRQYWdlVHJlZSgpOiBQYWdlVHJlZSB7XG4gICAgICAgIGxldCBvYmpfdGFibGU6IE9iamVjdExvb2t1cFRhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IHRoaXMuZ2V0Q2F0YWxvZygpXG5cbiAgICAgICAgbGV0IHBhZ2VzX2lkID0gY2F0YWxvZ19vYmplY3QuZ2V0UGFnZXNPYmplY3RJZCgpXG4gICAgICAgIGxldCBwYWdlc19yZWYgPSBvYmpfdGFibGVbcGFnZXNfaWQub2JqXVxuXG4gICAgICAgIGlmIChwYWdlc19yZWYuZ2VuZXJhdGlvbiAhPT0gcGFnZXNfaWQuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZXMgb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHBhZ2VUcmVlID0gbmV3IFBhZ2VUcmVlKHRoaXMuZGF0YSwgb2JqX3RhYmxlKVxuICAgICAgICBwYWdlVHJlZS5leHRyYWN0KHBhZ2VzX3JlZi5wb2ludGVyKVxuXG4gICAgICAgIHJldHVybiBwYWdlVHJlZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHdpdGggdGhlIGdpdmVuIHBhZ2VOdW1iZXJcbiAgICAgKiAqL1xuICAgIGdldFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogUGFnZSB7XG4gICAgICAgIGxldCBwYWdlVHJlZSA9IHRoaXMuZ2V0UGFnZVRyZWUoKVxuICAgICAgICBsZXQgcGFnZUlkID0gcGFnZVRyZWUuZ2V0UGFnZVJlZmVyZW5jZXMoKVtwYWdlTnVtYmVyXVxuXG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKG9ial90YWJsZVtwYWdlSWQub2JqXS5nZW5lcmF0aW9uICE9PSBwYWdlSWQuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICBsZXQgb2JqX3B0ciA9IG9ial90YWJsZVtwYWdlSWQub2JqXS5wb2ludGVyXG5cbiAgICAgICAgbGV0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLmRhdGEsIHRoaXMuZG9jdW1lbnRIaXN0b3J5KVxuICAgICAgICBwYWdlLmV4dHJhY3Qob2JqX3B0cilcblxuICAgICAgICByZXR1cm4gcGFnZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFubm90YXRpb25zIHRoYXQgZXhpc3QgaW4gdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBleHRyYWN0QW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbltdW10ge1xuICAgICAgICBsZXQgYW5ub3RzOiBBbm5vdGF0aW9uW11bXSA9IFtdXG4gICAgICAgIGxldCBwdDogUGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgcGFnZUNvdW50OiBudW1iZXIgPSBwdC5nZXRQYWdlQ291bnQoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwYWdlOiBQYWdlID0gdGhpcy5nZXRQYWdlKGkpXG5cbiAgICAgICAgICAgIGxldCBhbm5vdGF0aW9uUmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICAgICAgbGV0IHBhZ2VBbm5vdHM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IHJlZlB0ciBvZiBhbm5vdGF0aW9uUmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgIGxldCBhID0gbmV3IEFubm90YXRpb24odGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIGEuZXh0cmFjdChvYmpfdGFibGVbcmVmUHRyLm9ial0ucG9pbnRlciwgcGFnZSlcbiAgICAgICAgICAgICAgICBhLnBhZ2UgPSBpXG4gICAgICAgICAgICAgICAgcGFnZUFubm90cy5wdXNoKGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbm5vdHMucHVzaChwYWdlQW5ub3RzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFubm90c1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBtZXRob2RzIHRvIG5hdmlnYXRlIHRocm91Z2ggdGhlIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgVXRpbCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIENSOiBudW1iZXIgPSAxM1xuICAgIHB1YmxpYyBzdGF0aWMgTEY6IG51bWJlciA9IDEwXG4gICAgcHVibGljIHN0YXRpYyBUWVBFOiBzdHJpbmcgPSBcIi9UeXBlIFwiXG4gICAgcHVibGljIHN0YXRpYyBTUEFDRTogbnVtYmVyID0gMzJcbiAgICBwdWJsaWMgc3RhdGljIF9UWVBFOiBudW1iZXJbXSA9IFs0NywgODQsIDEyMSwgMTEyLCAxMDFdIC8vICcvVHlwZSdcbiAgICBwdWJsaWMgc3RhdGljIE9CSjogbnVtYmVyW10gPSBbMTExLCA5OCwgMTA2XSAvLyAnb2JqJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU5ET0JKOiBudW1iZXJbXSA9IFsxMDEsIDExMCwgMTAwLCAxMTEsIDk4LCAxMDZdIC8vICdlbmRvYmonXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9TVEFSVDogbnVtYmVyW10gPSBbOTFdIC8vICdbJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXJbXSA9IFs5M10gLy8gJ10nXG4gICAgcHVibGljIHN0YXRpYyBTVFJJTkdfU1RBUlQ6IG51bWJlcltdID0gWzQwXSAvLyAnKCdcbiAgICBwdWJsaWMgc3RhdGljIFNUUklOR19FTkQ6IG51bWJlcltdID0gWzQxXSAvLyAnKSdcbiAgICBwdWJsaWMgc3RhdGljIFI6IG51bWJlcltdID0gWzgyXSAvLyAnUidcbiAgICBwdWJsaWMgc3RhdGljIEFOTk9UOiBudW1iZXJbXSA9IFs0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl0gLy8gJy9Bbm5vdCdcbiAgICBwdWJsaWMgc3RhdGljIEFOTk9UUzogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTYsIDExNV0gLy8gJy9Bbm5vdCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfU1RBUlQ6IG51bWJlcltdID0gWzYwLCA2MF0gLy8gJzw8J1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml0gLy8gJz4+J1xuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdIC8vICcvU3VidHlwZSdcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VTOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMSwgMTE1XSAvLyAvUGFnZXNcbiAgICBwdWJsaWMgc3RhdGljIFBBR0U6IG51bWJlcltdID0gWzQ3LCA4MCwgOTcsIDEwMywgMTAxXVxuICAgIHB1YmxpYyBzdGF0aWMgS0lEUzogbnVtYmVyW10gPSBbNDcsIDc1LCAxMDUsIDEwMCwgMTE1XVxuICAgIHB1YmxpYyBzdGF0aWMgQ09VTlQ6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTcsIDExMCwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBNOiBudW1iZXJbXSA9IFs0NywgNzddIC8vICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIFQ6IG51bWJlcltdID0gWzQ3LCA4NF0gLy8gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgRjogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyAnL0YnXG4gICAgcHVibGljIHN0YXRpYyBDOiBudW1iZXJbXSA9IFs0NywgNjddIC8vICcvQydcbiAgICBwdWJsaWMgc3RhdGljIENBOiBudW1iZXJbXSA9IFs0NywgNjcsIDY1XSAvLyAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgTk06IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXJbXSA9IFs0NywgODBdIC8vICcvUCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gJy9Db250ZW50cydcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gJy9Cb3JkZXInXG4gICAgcHVibGljIHN0YXRpYyBRVUFEUE9JTlRTOiBudW1iZXJbXSA9IFs0NywgODEsIDExNywgOTcsIDEwMCwgODAsIDExMSwgMTA1LCAxMTAsIDExNiwgMTE1XSAvLyAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gJy9JbmtMaXN0J1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUlRYUkVGOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3N0YXJ0eHJlZidcblxuICAgIC8qKlxuICAgICAqIEFzc3VtZXMgdGhhdCBhdCBwb3NpdGlvbiBpbmRleCBpcyBhIGRlbGltaXRlciBhbmQgdGhhbiBydW5zIGFzIGxvbmcgZm9yd2FyZCB1bnRpbCBpdCBmaW5kc1xuICAgICAqIGFub3RoZXIgZGVsaW1pdGVyIG9yIHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2tpcERlbGltaXRlcihkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgZGF0YS5sZW5ndGggJiYgdGhpcy5pc0RlbGltaXRlcihkYXRhW2luZGV4XSkpKytpbmRleFxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0aGUgY29ycmVzcG9uZGluZyBhc2NpaSB2YWx1ZXNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFN0cmluZ1RvQXNjaWkodG9Db252ZXJ0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBhc2NpaXM6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvQ29udmVydC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXNjaWlzLnB1c2goK3RvQ29udmVydC5jaGFyQ29kZUF0KGkpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzY2lpc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNEZWxpbWl0ZXIodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IDEwIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gMTMgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSAzMiB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IDQ3IC8vICcvJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0aGUgc2VxdWVuY2UgaW4gZGF0YSBzdGFydGluZyBhdCB0aGUgb2Zmc2V0XG4gICAgICpcbiAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHN1Y2VlZGluZyBjaGFyIGFmdGVyIHRoZSBzZXF1ZW5jZSBpcyBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kXG4gICAgICogb2YgdGhlIHdob2xlIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZShzZXF1ZW5jZTogbnVtYmVyW10sIGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwLCBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gb2Zmc2V0XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBzZXF1ZW5jZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGRhdGEubGVuZ3RoID09IGkgKyAxIHx8IHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpICsgMV0pIHx8IGRhdGFbaSArIDFdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAtIChzZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytqXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBzdGFydFxuICAgICAqIG9mIHRoZSB3aG9sZSBkYXRhIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZVJldmVyc2VkKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogSW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSwgY2xvc2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IG9mZnNldFxuXG4gICAgICAgIGZvciAobGV0IGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGkgLSAxIDwgMCB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAtLWpcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGJlZm9yZSB0aGUgbmV4dCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlcihkYXRhOiBJbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBkYXRhLmxlbmd0aCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKSsrb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEpOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0ID4gMCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKS0tb2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGFycmF5IGRhdGEgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmRleC4gVGhlIGluZGV4IGNhbiBtYXJrIHRoZSBzdGFydCBvZiB0aGVcbiAgICAgKiBhcnJheSBvciBhIHBvaW50ZXIgd2l0aGluIHRoZSBhcnJheS4gSWYgaXQgaXMgYSBuZXN0ZWQgYXJyYXkgdGhlIHBvaW50ZXIgbXVzdCBtYXJrIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiB0aGUgc3ViZXJhcnJheS4gT3RoZXJ3aXNlIG9ubHkgdGhlIHN1YmFycmF5IGlzIGV4dHJhY3RlZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgYXJyYXlfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5BUlJBWV9TVEFSVCwgZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgaWYgKC0xID09PSBhcnJheV9zdGFydClcbiAgICAgICAgICAgIGFycmF5X3N0YXJ0ID0gaW5kZXhcblxuICAgICAgICBsZXQgcm9vdF9saXN0ID0geyBwdHI6IGFycmF5X3N0YXJ0LCBsc3Q6IFtdIH1cbiAgICAgICAgbGV0IHN0YXJ0X3BvaW50ZXI6IGFueVtdID0gW3Jvb3RfbGlzdF1cblxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXlfc3RhcnQgKyAxOyBpIDwgZGF0YS5sZW5ndGggJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwOykge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX24gPSB7IHB0cjogaSwgbHN0OiBbXSB9XG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLnB0ciA9IC0xIC8vIG1hcmsgbGlzdCBhcyBjb2xsZWN0aW9uIG9mIG90aGVyIGxpc3RzXG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlci5wdXNoKF9uKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBzdGFydF9wb2ludGVyLnBvcCgpXG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBzcCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgTWlzc2luZyBzdGFydCBwb2ludGVyICR7SlNPTi5zdHJpbmdpZnkoc3ApfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNwLnB0ciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzX3RvQWRkID0gZGF0YS5zbGljZShzcC5wdHIgKyAxLCBpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyW3N0YXJ0X3BvaW50ZXIubGVuZ3RoIC0gMV0ubHN0LnB1c2goYXNfdG9BZGQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNfdG9BZGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3AucHRyID09PSAtMSAmJiBzdGFydF9wb2ludGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKHNwLmxzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaSArIDEpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm9vdF9saXN0LmxzdFxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheVNlcTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGFycmF5U2VxIGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5U2VxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5icjogYW55ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2goVXRpbC5leHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2UpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBpbiBhbiBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlQXJyYXkoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgICAgICAgICAgbGV0IG5icnM6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheVNlcS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuYnJzLnB1c2goVXRpbC5leHRyYWN0TnVtYmVyKGFycmF5U2VxLCBpKSlcblxuICAgICAgICAgICAgICAgIGkgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihhcnJheVNlcSwgaSArIDEpICsgMVxuICAgICAgICAgICAgICAgIGkgPSBVdGlsLnNraXBEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5icjogYW55ID0gW11cblxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaCh0aGlzLmV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2UpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmJyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgbnVtYmVycyBpbiBhbiBhcnJheVxuICAgICAqIGUuZy4gIFs2OS42OTcgNDcuNDE0OCA5Ni40NjQ2IDU4LjI1OTggXVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0TnVtYmVyc0FycmF5KGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZXMgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2VzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYW4gb2JqZWN0IGlkZW50aWZpZXJcbiAgICAgKiA8SUQ+IDxHRU4+IG9ialxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T2JqZWN0SWQoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICBsZXQgb2JqID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIGluZGV4LCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBJbnQ4QXJyYXkge1xuICAgICAgICBpbmRleCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBpbmRleClcbiAgICAgICAgbGV0IHJfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkoXCIgUlwiKSwgZGF0YSwgaW5kZXgsIHRydWUpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgsIHJfaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSBhcyB0eXBlZCBvYmplY3RcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZVR5cGVkKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuXG4gICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZGVsX2luZGV4ID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXIocmVmX2RhdGEsIDApXG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCAwLCBkZWxfaW5kZXgpXG4gICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBpZCwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAqIDxvYmpOdW1iZXI+IDxnZW5lcmF0aW9uPiBvYmpcbiAgICAgKiA8PFxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICAvVHlwZSAvPHR5cGU+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA+PlxuICAgICAqXG4gICAgICogQXBwcm9hY2g6IFdlIGlkZW50aWZ5IGFuIGluZGV4IHdpdGhpbiB0aGUgb2JqZWN0IGRlZmluaXRvbiBzZWFyY2ggdGhlIHVuaXF1ZWx5IGlkZW50aWZ5YWJsZSBlbmQgb2YgdGhlIG9iamVjdCBkZWZpbml0aW9uXG4gICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0QnlUeXBlKGRhdGE6IEludDhBcnJheSwgX3R5cGU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBzZWFyY2hTZXF1ZW5jZSA9IHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkodGhpcy5UWVBFICsgX3R5cGUpXG5cbiAgICAgICAgbGV0IG9ial9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2Uoc2VhcmNoU2VxdWVuY2UsIGRhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgbGV0IG9ial9lbmQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpICsgNlxuXG4gICAgICAgIGxldCBvYmpfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5PQkosIGRhdGEsIG9ial9pbmRleCwgdHJ1ZSlcblxuICAgICAgICBsZXQgZ2VuZXJhdGlvbiA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgb2JqX3N0YXJ0IC0gMSlcblxuICAgICAgICBsZXQgb2JqX2lkID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhLCBnZW5lcmF0aW9uIC0gMSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShvYmpfaWQsIG9ial9lbmQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgYXJyYXkgb2YgbnVtYmVycyBhbmQgYXJyYXlzIG9mIHJlZmVyZW5jZXNcbiAgICAgKlxuICAgICAqIE1hcmsgdGhhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IHN1cHBvcnQgYXJyYXlzIHRoYXQgY29udGFpbiBkaWZmZXJlbnQgdHlwZXMsIHNvIGVpdGhlclxuICAgICAqIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlcyBvciBhbiBhcnJheSBvZiBudW1iZXJzLiBIb3dldmVyIHRoZSBmdW5jdGlvbiBzdXBwb3J0c1xuICAgICAqIGFyYml0cmFyaWx5IG5lc3Rpbmcgb2YgYXJyYXlzLlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXkoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vICdSJyAtLSB3ZSBrbm93IGl0IGlzIGFuIGFycmF5IG9mIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0UmVmZXJlbmNlQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyc0FycmF5KGRhdGEsIGluZGV4KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhdGNzIHRoZSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFN0cmluZyhkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgMClcbiAgICAgICAgbGV0IHN0cmluZ19lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX0VORCwgZGF0YSwgMClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvcHRpb25cbiAgICAgKiAvPG9wdGlvbj5cbiAgICAgKlxuICAgICAqIHNvIGZvciBpbnN0YW5jZSBmb3IgL0hpZ2hsaWdodCBpdCB3b3VsZCByZXR1cm4gJ0hpZ2hsaWdodCdcbiAgICAgKlxuICAgICAqIFRoZSBpbmRleCBtdXN0IHBvaW50IHRvIHRoZSBcIi9cIlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T3B0aW9uVmFsdWUoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGRhdGFbaW5kZXhdICE9PSA0NylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibWlzcGxhY2VkIG9wdGlvbiB2YWx1ZSBwb2ludGVyXCIpXG5cbiAgICAgICAgbGV0IGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICByZXR1cm4gVXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhBcnJheS5mcm9tKGRhdGEuc2xpY2UoaW5kZXggKyAxLCBlbmQgKyAxKSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBmaWVsZC5cbiAgICAgKlxuICAgICAqIFJldHVybnMgJ3VuZGVmaW5lZCcgaWYgdGhpcyBmaWVsZCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgb2JqZWN0XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RGaWVsZChkYXRhOiBJbnQ4QXJyYXksIGZpZWxkOiBudW1iZXJbXSwgcHRyOiBudW1iZXIgPSAwKTogYW55IHtcbiAgICAgICAgLy8gb25seSBjaGVjayB0aGUgZmllbGRzIG9mIG9uZSBvYmplY3RcbiAgICAgICAgbGV0IHN0YXJ0X29ial9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuT0JKLCBkYXRhLCBwdHIsIHRydWUpXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIGRhdGEsIHN0YXJ0X29ial9wdHIsIHRydWUpXG5cbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnRfb2JqX3B0ciwgZW5kX29ial9wdHIpXG5cbiAgICAgICAgbGV0IGZpZWxkX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoZmllbGQsIGRhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgaWYgKGZpZWxkX3B0ciA9PT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgZmllbGRfcHRyICs9IGZpZWxkLmxlbmd0aFxuXG4gICAgICAgIC8vIGhhbmRsZSBjYXNlIHRoYXQgdGhlcmUgaXMgYW4gb3B0aW9uIHZhbHVlIC88dmFsdWU+IGFmdGVyIHRoZSBmaWVsZCAvPGZpZWxkPlxuICAgICAgICBsZXQgZmllbGRfdmFsdWVfZW5kX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgaWYgKGRhdGFbZmllbGRfdmFsdWVfZW5kX3B0ciAtIDFdID09PSA0NykgeyAvLyA0NyA9ICcvJ1xuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdE9wdGlvblZhbHVlKGRhdGEsIGZpZWxkX3ZhbHVlX2VuZF9wdHIgLSAxKVxuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRfdmFsdWVfZW5kX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoWzQ3XSwgZGF0YSwgZmllbGRfcHRyKVxuXG4gICAgICAgIGZpZWxkX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgbGV0IHZhbHVlX2RhdGEgPSBkYXRhLnNsaWNlKGZpZWxkX3B0ciwgZmllbGRfdmFsdWVfZW5kX3B0cilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlX2RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZV9kYXRhW2ldID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdIHx8IHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGFycmF5XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdEFycmF5KHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuU1RSSU5HX1NUQVJUWzBdIHx8IHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuU1RSSU5HX0VORFswXSkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0U3RyaW5nKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuUlswXSkgeyAvLyBSXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZCh2YWx1ZV9kYXRhLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdE51bWJlcih2YWx1ZV9kYXRhLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYXNjaWkgZW5jb2RlZCBudW1iZXIgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3ROdW1iZXIoZGF0YTogSW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuXG4gICAgICAgIGlmICgtMSA9PSBlbmQpIHtcbiAgICAgICAgICAgIGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IGlkZW50aWZ5IG51bWJlciBib3VuZHM6IFske3N0YXJ0fSwke2VuZH1dYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJfaWQgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFwiXCIgPT09IHN0cl9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBwYXJzZSBudW1iZXIgYXQgcG9zaXRpb24gJHtzdGFydH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICtzdHJfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhcyBhcmd1bWVudCBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZCByZXR1cm5zIHRob3NlIHR5cGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2U6IEludDhBcnJheSk6IFJlZmVyZW5jZVBvaW50ZXJbXSB7XG4gICAgICAgIGxldCByZWZzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICB3aGlsZSAoaSA8IGFycmF5X3NlcXVlbmNlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVmcy5wdXNoKFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKGFycmF5X3NlcXVlbmNlLCBpKSlcbiAgICAgICAgICAgIGkgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUiwgYXJyYXlfc2VxdWVuY2UsIGksIHRydWUpICsgMlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZGF0ZSBpbnRvIFBERiBmb3JtYXR0aW5nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnREYXRlVG9QREZEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGF0ZV9zdHIgPSBcIihEOlwiXG4gICAgICAgIGRhdGVfc3RyICs9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICBsZXQgbW9udGg6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKVxuICAgICAgICBkYXRlX3N0ciArPSAobW9udGgubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbW9udGhcbiAgICAgICAgbGV0IGRheTogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICBkYXRlX3N0ciArPSAoZGF5Lmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGRheVxuICAgICAgICBsZXQgaG91cnM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChob3Vycy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBob3Vyc1xuICAgICAgICBsZXQgbWludXRlczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAobWludXRlcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBtaW51dGVzXG4gICAgICAgIGxldCBzZWNvbmRzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRTZWNvbmRzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChzZWNvbmRzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIHNlY29uZHNcbiAgICAgICAgcmV0dXJuIGRhdGVfc3RyICsgXCIpXCJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHVuaWNvZGUgc2VxdWVuY2UgaW50byBhIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VW5pY29kZVRvU3RyaW5nKHZhbDogSW50OEFycmF5IHwgVWludDhBcnJheSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpXG4gICAgICAgICAgICB2YWwgPSBuZXcgVWludDhBcnJheSh2YWwpXG5cbiAgICAgICAgaWYgKHZhbFswXSA9PT0gMjU0ICYmIHZhbFsxXSA9PT0gMjU1KSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMiwgdmFsLmxlbmd0aClcblxuICAgICAgICAgICAgbGV0IHVpbnRUb1N0cmluZyA9ICh1aW50QXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1aW50QXJyYXkubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh1aW50QXJyYXlbaV0gPDwgOCkgfCB1aW50QXJyYXlbaSArIDFdICYgMHhGRilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXQgPSB1aW50VG9TdHJpbmcodmFsKVxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHV0Zi04IGNvbXByZXNzaW9uXG4gICAgICAgIGxldCBVdGY4QXJyYXlUb1N0ciA9IChhcnJheTogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIxID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgIGxldCBjaGFyMlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcjEgPj4gNCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogY2FzZSAyOiBjYXNlIDM6IGNhc2UgNDogY2FzZSA1OiBjYXNlIDY6IGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uZSBieXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0d28gYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcjIgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNoYXIxICYgMHgxRikgPDwgNikgfCAoY2hhcjIgJiAweDNGKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aHJlZSBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyMyA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDBGKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoY2hhcjIgJiAweDNGKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMyAmIDB4M0YpIDw8IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBVdGY4QXJyYXlUb1N0cihBcnJheS5mcm9tKHZhbCkpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRBc2NpaVRvU3RyaW5nKHZhbDogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0OiBzdHJpbmcgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZhbFtpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0YWtlcyBhIG51bWJlciBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBpdHMgY2hhciByZXByZXNlbnRhdGlvbnNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydE51bWJlclRvQ2hhckFycmF5KG5icjogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShTdHJpbmcobmJyKSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQYWdlLCBSZWZlcmVuY2VQb2ludGVyIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgV3JpdGVyVXRpbCB7XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcmVmZXJlbmNlIHBvaW50ZXJcbiAgICAgKlxuICAgICAqIDxvYmpfaWQ+IDxnZW5lcmF0aW9uPiBSXG4gICAgICpcbiAgICAgKiBUaGUgJ1InIGFuZCB0aGUgcHJlY2VkaW5nIHNwYWNlIGlzIG9ubHkgd3JpdHRlbiBpbiBjYXNlICdyZWZlcmVuY2VkJyBpcyB0cnVlXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWY6IFJlZmVyZW5jZVBvaW50ZXIsIHJlZmVyZW5jZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShyZWYub2JqKVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShyZWYuZ2VuZXJhdGlvbikpXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaCguLi5VdGlsLlIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBwcmVjZWRpbmcgemVyb3MgKDApIGluIGZyb250IG9mIHRoZSAndmFsdWUnIHRvIG1hdGNoIHRoZSBsZW5ndGhcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFkKGxlbmd0aDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0LnB1c2goNDgpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHZhbHVlKSlcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgbmVzdGVkIG51bWJlciBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyB3cml0ZU5lc3RlZE51bWJlckFycmF5KGFycmF5OiBudW1iZXJbXVtdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuQVJSQVlfU1RBUlRcblxuICAgICAgICBmb3IgKGxldCBzdWJBcnJheSBvZiBhcnJheSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoc3ViQXJyYXkpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKC4uLlV0aWwuQVJSQVlfRU5EKVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgamF2YXNjcmlwdCBudW1iZXIgYXJyYXkgdG8gYSBQREYgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuQVJSQVlfU1RBUlRcblxuICAgICAgICBmb3IgKGxldCBpIG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGkpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKC4uLlV0aWwuQVJSQVlfRU5EKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgL0Fubm90cyBmaWVsZCBpbiBhbiBwYWdlIG9iamVjdFxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlcGxhY2VBbm5vdHNGaWVsZEluUGFnZU9iamVjdChkYXRhOiBJbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG4gICAgICAgICAgICBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwuc2tpcERlbGltaXRlcihjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzX2FycmF5X2VuZClcblxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2Fubm90c19hcnJheV9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwdHJfZGljdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5ESUNUX0VORCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGggLSAxLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2RpY3RfZW5kKSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9kaWN0X2VuZCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGgpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuQ1IpXG4gICAgICAgIHJldC5wdXNoKFV0aWwuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSdcbmltcG9ydCB7IFdyaXRlclV0aWwgfSBmcm9tICcuL3dyaXRlci11dGlsJ1xuXG4vKipcbiAqIENyZWF0cyB0aGUgYnl0ZSBhcnJheSB0aGF0IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTjogbnVtYmVyID0gMTEwXG4gICAgcHVibGljIHN0YXRpYyBGOiBudW1iZXIgPSAxMDJcblxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXIgPSA5MVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXIgPSA5M1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXVxuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml1cbiAgICBwdWJsaWMgc3RhdGljIFRZUEVfQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMSwgV3JpdGVyLlNQQUNFLCA0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBVUERBVEVfREFURTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyA9ICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIEFVVEhPUjogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyA9ICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL0NvbnRlbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9TVEFSVDogbnVtYmVyID0gNDBcbiAgICBwdWJsaWMgc3RhdGljIEJSQUNLRVRfRU5EOiBudW1iZXIgPSA0MVxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyA9ICcvRidcbiAgICBwdWJsaWMgc3RhdGljIElEOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyA9ICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBDT0xPUjogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyA9ICcvQydcbiAgICBwdWJsaWMgc3RhdGljIE9QQUNJVFk6IG51bWJlcltdID0gWzQ3LCA2NywgNjVdIC8vID0gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gPSAnL0JvcmRlcidcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VfUkVGRVJFTkNFOiBudW1iZXJbXSA9IFs0NywgODBdIC8vID0gJy9QJ1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUFBFQVJBTkNFOiBudW1iZXJbXSA9IFs0NywgNjgsIDY1XSAvLyA9ICcvREEnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gPSAnL0lua0xpc3QnXG5cbiAgICBwdWJsaWMgc3RhdGljIFRSQUlMRVI6IG51bWJlcltdID0gWzExNiwgMTE0LCA5NywgMTA1LCAxMDgsIDEwMSwgMTE0XSAvLyA9ICd0cmFpbGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyA9ICcvU2l6ZSdcbiAgICBwdWJsaWMgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gPSAnL1Jvb3QnXG4gICAgcHVibGljIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vID0nL1ByZXYnXG4gICAgcHVibGljIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU9GOiBudW1iZXJbXSA9IFszNywgMzcsIDY5LCA3OSwgNzBdIC8vID0gJyUlRU9GJ1xuXG4gICAgcHVibGljIHN0YXRpYyBYUkVGOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICBwdWJsaWMgc3RhdGljIFFVQURQT0lOVFM6IG51bWJlcltdID0gWzQ3LCA4MSwgMTE3LCA5NywgMTAwLCA4MCwgMTExLCAxMDUsIDExMCwgMTE2LCAxMTVdIC8vID0gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgVkVSVElDRVM6IG51bWJlcltdID0gWzQ3LCA4NiwgMTAxLCAxMTQsIDExNiwgMTA1LCA5OSwgMTAxLCAxMTVdIC8vID0gJy9WZXJ0aWNlcydcbiAgICBwdWJsaWMgc3RhdGljIE5BTUU6IG51bWJlcltdID0gWzQ3LCA3OCwgOTcsIDEwOSwgMTAxXSAvLyA9ICcvTmFtZSdcbiAgICBwdWJsaWMgc3RhdGljIERSQUZUOiBudW1iZXJbXSA9IFs0NywgNjgsIDExNCwgOTcsIDEwMiwgMTE2XSAvLyA9ICcvRHJhZnQnXG5cbiAgICBwdWJsaWMgc3RhdGljIFNZOiBudW1iZXJbXSA9IFs0NywgODMsIDEyMV0gLy8gPSAnL1N5J1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyID0gODBcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgeHJlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBkYXRhIDogVGhlIGRhdGEgcmVwcmVzZW50aW5nIHRoZSBvcmlnaW5hbCBQREYgZG9jdW1lbnRcbiAgICAgKiBhYW5ub3RhdGlvbnMgOiBUaGUgYW5ub3RhdGlvbnMgdG8gYWRkIHRvIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXksIHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSwgcHJpdmF0ZSB0b0RlbGV0ZTogQW5ub3RhdGlvbltdLCBwcml2YXRlIHBhcnNlcjogUERGRG9jdW1lbnRQYXJzZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBhbm5vdGF0aW9ucyBwYWdld2lzZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IHNpbmNlIHRoZSBhbm5vdGF0aW9uIGFycmF5cyBvZiB0aGUgc2l0ZXMgbXVzdCBiZSBleHRlbmRlZFxuICAgICAqIGFuZCBpdCBtYWtlcyBzZW5zZSB0byBkbyB0aGlzIHVwZGF0ZSBpbiBvbmUgc3RlcC5cbiAgICAgKiAqL1xuICAgIHNvcnRQYWdlV2lzZShhbm5vdGF0aW9uczogQW5ub3RhdGlvbltdKTogeyBbaXRlbTogbnVtYmVyXTogQW5ub3RhdGlvbltdIH0ge1xuICAgICAgICBsZXQgcGFnZUFubm90czogeyBbaXRlbTogbnVtYmVyXTogQW5ub3RhdGlvbltdIH0gPSB7fVxuXG4gICAgICAgIGZvciAobGV0IGFubm90IG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIXBhZ2VBbm5vdHNbYW5ub3QucGFnZV0pXG4gICAgICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXSA9IFtdXG5cbiAgICAgICAgICAgIHBhZ2VBbm5vdHNbYW5ub3QucGFnZV0ucHVzaChhbm5vdClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlQW5ub3RzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXQgcmV0dXJucyB0aGUgcGFnZSBvYmplY3QgZWl0aGVyIGV4dGVuZGVkIGJ5IGEgL0Fubm90cyBmaWVsZCwgaWYgdGhpcyBkaWQgbm90IGV4aXN0IHlldCBvciB3aXRoIHRoZSBhbm5vdHMgZmllbGQgcmVwbGFjZWQgYnkgYSByZXJmZXJlbmNlIHBvaW50ZXJcbiAgICAgKiB0byBhbiBhcnJheSBpZiB0aGUgcGFnZSBvYmplY3QgY29udGFpbnMgdGhlIGxpc3Qgb2YgYW5ub3RhdGlvbnMgZGlyZWN0bHlcbiAgICAgKlxuICAgICAqIHB0ciA6IFBvaW50ZXIgdG8gdGhlIHBhZ2Ugb2JqZWN0XG4gICAgICogYW5ub3RfYXJyYXlfcmVmZXJlbmNlIDogVGhlIHJlZmVyZW5jZSB0byB0aGUgYW5ub3RhdGlvbiBhcnJheVxuICAgICAqICovXG4gICAgYWRhcHRQYWdlT2JqZWN0KHBhZ2U6IFBhZ2UsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cbiAgICAgICAgbGV0IGxvb2t1cFRhYmxlID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgcGFnZV9wdHI6IFhSZWYgPSBsb29rdXBUYWJsZVtwYWdlLm9iamVjdF9pZC5vYmpdXG5cbiAgICAgICAgcmV0dXJuIFdyaXRlclV0aWwucmVwbGFjZUFubm90c0ZpZWxkSW5QYWdlT2JqZWN0KHRoaXMuZGF0YSwgcGFnZSwgcGFnZV9wdHIucG9pbnRlciwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSBhbm5vdGF0aW9ucyBvZiA+Pm9uZTw8IHBhZ2UgYW5kIGRlcml2ZXMgdGhlIGFubm90YXRpb25zIGFycmF5IGZyb20gaXQuXG4gICAgICogVGhlcmVieSBpdCBhbHNvIGNvbnNpZGVycyB0aGUgcG90ZW50aWFsbHkgZXhpc3RpbmcgYW5ub3RhdGlvbiBhcnJheS5cbiAgICAgKlxuICAgICAqIHRvRGVsZXRlIDo9IGNvbnRhaW5zIHRob3NlIGFubm90YXRpb25zIHRoYXQgbXVzdCBiZSBkZWxldGVkLiBJdCByZW1vdmVzIHRoZW0gZnJvbSB0aGUgcmVmZXJlbmNlIGFycmF5XG4gICAgICogYW5kIG1hcmtzIHRoZW0gYXMgcmVtb3ZlZFxuICAgICAqICovXG4gICAgd3JpdGVBbm5vdEFycmF5KGFubm90czogQW5ub3RhdGlvbltdLCB0b0RlbGV0ZTogQW5ub3RhdGlvbltdKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdLCBwYWdlUmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyLCBwYWdlRGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGxldCBwYWdlID0gYW5ub3RzWzBdLnBhZ2VSZWZlcmVuY2VcblxuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuY29uY2F0KGFubm90cy5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICgheC5vYmplY3RfaWQpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBbm5vdGF0aW9uIHdpdGggb2JqZWN0X2lkIG51bGxcIilcblxuICAgICAgICAgICAgcmV0dXJuIHgub2JqZWN0X2lkXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIHJlbW92ZSBhbm5vdGF0aW9uIHJlZmVyZW5jZXMgZnJvbSB0aGUgYXJyYXkgdGhhdCBtdXN0IGJlIGRlbGV0ZWQgYW5kIG1hcmsgdGhlbSBhcyBkZWxldGVkXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmZpbHRlcigoYTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9EZWwgPSB0b0RlbGV0ZS5maW5kKCh0KSA9PiAoPGFueT50Lm9iamVjdF9pZCkub2JqID09PSBhLm9iaiAmJiAoPGFueT50Lm9iamVjdF9pZCkuZ2VuZXJhdGlvbiA9PT0gYS5nZW5lcmF0aW9uKVxuXG4gICAgICAgICAgICBpZiAodG9EZWwpIHtcbiAgICAgICAgICAgICAgICB0b0RlbC5pc19kZWxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCByZWZBcnJheV9pZDogYW55ID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgbGV0IHBhZ2VfZGF0YTogbnVtYmVyW10gPSBbXVxuICAgICAgICBpZiAoIXJlZkFycmF5X2lkKSB7XG4gICAgICAgICAgICByZWZBcnJheV9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZnJlZU9iamVjdElkOiAke0pTT04uc3RyaW5naWZ5KHJlZkFycmF5X2lkKX1gKVxuICAgICAgICAgICAgcGFnZV9kYXRhID0gdGhpcy5hZGFwdFBhZ2VPYmplY3QocGFnZSwgcmVmQXJyYXlfaWQpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfU1RBUlQpXG5cblxuICAgICAgICBmb3IgKGxldCBhbiBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFuLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogcmVmQXJyYXlfaWQsIGRhdGE6IHJldCwgcGFnZVJlZmVyZW5jZTogcGFnZS5vYmplY3RfaWQsIHBhZ2VEYXRhOiBwYWdlX2RhdGEgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3VidHlwZSB0byBpdHMgYnl0ZSByZXByZXNlbnRhdGlvblxuICAgICAqICovXG4gICAgY29udmVydFN1YnR5cGUoc3Q6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgc3dpdGNoIChzdCkge1xuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9UZXh0J1xuICAgICAgICAgICAgY2FzZSAnSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJy9IaWdobGlnaHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcyLCAxMDUsIDEwMywgMTA0LCAxMDgsIDEwNSwgMTAzLCAxMDQsIDExNl0gLy8gPSAnL0hpZ2hsaWdodCdcbiAgICAgICAgICAgIGNhc2UgJ1VuZGVybGluZSc6XG4gICAgICAgICAgICBjYXNlICcvVW5kZXJsaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4NSwgMTEwLCAxMDAsIDEwMSwgMTE0LCAxMDgsIDEwNSwgMTEwLCAxMDFdIC8vID0gJy9VbmRlcmxpbmUnXG4gICAgICAgICAgICBjYXNlICdTcXVpZ2dseSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1aWdnbHknOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgMTA1LCAxMDMsIDEwMywgMTA4LCAxMjFdIC8vID0gJy9TcXVpZ2dseSdcbiAgICAgICAgICAgIGNhc2UgJ1N0cmlrZU91dCc6XG4gICAgICAgICAgICBjYXNlICcvU3RyaWtlT3V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCAxMTQsIDEwNSwgMTA3LCAxMDEsIDc5LCAxMTcsIDExNl0gLy8gPSAnL1N0cmlrZU91dCdcbiAgICAgICAgICAgIGNhc2UgJ1NxdWFyZSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1YXJlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDk3LCAxMTQsIDEwMV0gLy8gPSAnL1NxdWFyZSdcbiAgICAgICAgICAgIGNhc2UgJ0NpcmNsZSc6XG4gICAgICAgICAgICBjYXNlICcvQ2lyY2xlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgMTA1LCAxMTQsIDk5LCAxMDgsIDEwMV0gLy8gPSAnL0NpcmNsZSdcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWVUZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJy9GcmVlVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzAsIDExNCwgMTAxLCAxMDEsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvRnJlZVRleHQnXG4gICAgICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIGNhc2UgJy9Qb2x5Z29uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgMTAzLCAxMTEsIDExMF0gLy8gPSAnL1BvbHlnb24nXG4gICAgICAgICAgICBjYXNlICdQb2x5TGluZSc6XG4gICAgICAgICAgICBjYXNlICcvUG9seUxpbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCA3NiwgMTA1LCAxMTAsIDEwMV0gLy8gJy9Qb2x5TGluZVxuICAgICAgICAgICAgY2FzZSAnU3RhbXAnOlxuICAgICAgICAgICAgY2FzZSAnL1N0YW1wJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCA5NywgMTA5LCAxMTJdIC8vID0gJy9TdGFtcCdcbiAgICAgICAgICAgIGNhc2UgJ0NhcmV0JzpcbiAgICAgICAgICAgIGNhc2UgJy9DYXJldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDk3LCAxMTQsIDEwMSwgMTE2XSAvLyA9ICcvQ2FyZXQnXG4gICAgICAgICAgICBjYXNlICdJbmsnOlxuICAgICAgICAgICAgY2FzZSAnL0luayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzMsIDExMCwgMTA3XSAvLyA9ICcvSW5rJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIGFubm90YXRpb24gb2JqZWN0XG4gICAgICogKi9cbiAgICB3cml0ZUFubm90YXRpb25PYmplY3QoYW5ub3Q6IEFubm90YXRpb24pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGlmICghYW5ub3QuYXV0aG9yKVxuICAgICAgICAgICAgYW5ub3QuYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIGlmICghYW5ub3QuY29udGVudHMpXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90Lm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gb2JqZWN0X2lkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlRZUEVfQU5OT1QpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QucmVjdCAmJiBhbm5vdC5yZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlJFQ1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5yZWN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNVQlRZUEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLmNvbnZlcnRTdWJ0eXBlKGFubm90LnR5cGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVVBEQVRFX0RBVEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LnVwZGF0ZURhdGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQVVUSE9SKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuYXV0aG9yKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmNvbnRlbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT05URU5UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmNvbnRlbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklEKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5pZCkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5GTEFHKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShhbm5vdC5hbm5vdGF0aW9uX2ZsYWcpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuciA+IDEpIGFubm90LmNvbG9yLnIgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuZyA+IDEpIGFubm90LmNvbG9yLmcgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuYiA+IDEpIGFubm90LmNvbG9yLmIgLz0gMjU1XG5cbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkNPTE9SKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmNvbG9yLnIsIGFubm90LmNvbG9yLmcsIGFubm90LmNvbG9yLmJdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG9wYWNpdHkgPSBhbm5vdC5vcGFjaXR5XG4gICAgICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PUEFDSVRZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShvcGFjaXR5KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5ib3JkZXIpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkJPUkRFUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5ib3JkZXIuaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIudmVydGljYWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLmJvcmRlcl93aWR0aF0pKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmRlZmF1bHRBcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ERUZBVUxUX0FQUEVBUkFOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFubm90LnBhZ2VSZWZlcmVuY2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QQUdFX1JFRkVSRU5DRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnF1YWRQb2ludHMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlFVQURQT0lOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5xdWFkUG9pbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC52ZXJ0aWNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVkVSVElDRVMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC52ZXJ0aWNlcykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3Quc3RhbXBUeXBlKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5OQU1FKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRFJBRlQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuY2FyZXRTeW1ib2wpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlApXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuaW5rTGlzdCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSU5LTElTVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU5lc3RlZE51bWJlckFycmF5KGFubm90Lmlua0xpc3QpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IGFubm90Lm9iamVjdF9pZCwgZGF0YTogcmV0IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhbGwgdGhlIGNyb3NzIHNpdGUgcmVmZXJlbmNlIHRhYmxlIGVudHJpZXMgYW5kIGV4dHJhY3RzIHRoZSBjb25zZWN1dGl2ZSBzZXF1ZW5jZXNcbiAgICAgKiAqL1xuICAgIGNvbXB1dGVYcmVmU2VxdWVuY2VzKCk6IFhSZWZbXVtdIHtcbiAgICAgICAgbGV0IHNlcXM6IFhSZWZbXVtdID0gW11cblxuICAgICAgICBsZXQgb3JkZXJlZF94cmVmcyA9IHRoaXMueHJlZnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaWQgPCBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKGEuaWQgPiBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZXE6IFhSZWZbXSA9IFtvcmRlcmVkX3hyZWZzWzBdXVxuICAgICAgICBsZXQgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbMF0uaWRcbiAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvcmRlcmVkX3hyZWZzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAob3JkZXJlZF94cmVmc1tpXS5pZCA9PT0gbGFzdF9pZCArIDEpIHtcbiAgICAgICAgICAgICAgICBzZXEucHVzaChvcmRlcmVkX3hyZWZzW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXEgPSBbb3JkZXJlZF94cmVmc1tpXV1cbiAgICAgICAgICAgICAgICBzZXFzLnB1c2goc2VxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbaV0uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyB0aGUgcG9pbnRlcnMgb2YgdGhlIGxpbmtlZCBsaXN0IHRoYXQgY29udGFpbnMgdGhlIGlkcyBvZiBmcmVlZCBvYmplY3RzXG4gICAgICogKi9cbiAgICBhcHBseU9iamVjdEZyZWVpbmcocmVmczogWFJlZltdKTogWFJlZltdIHtcbiAgICAgICAgLy8gd3JpdGUgZnJlZSBvYmplY3QgaGVhZFxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpWzBdXG4gICAgICAgIGxldCBsYXN0X2ZyZWVkX29iamVjdF9pZCA9IGhlYWQuaWRcblxuICAgICAgICBsZXQgZnJlZWRfb2JqczogWFJlZltdID0gcmVmcy5maWx0ZXIociA9PiByLmZyZWUpXG4gICAgICAgIGZyZWVkX29ianMgPSBmcmVlZF9vYmpzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgbGFzdG9iajogWFJlZiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuICAgICAgICBmb3IgKGxldCBvYmogb2YgZnJlZWRfb2Jqcykge1xuICAgICAgICAgICAgaWYgKCFsYXN0b2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGZpcnN0IG9iamVjdCBhcyBsaXN0IGhlYWRlclxuICAgICAgICAgICAgICAgIGhlYWQucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFzdG9iaikge1xuICAgICAgICAgICAgICAgIGxhc3RvYmoucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0b2JqID0gb2JqXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJlZWRfb2Jqcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgZnJlZWRfb2Jqc1tmcmVlZF9vYmpzLmxlbmd0aCAtIDFdLnBvaW50ZXIgPSBsYXN0X2ZyZWVkX29iamVjdF9pZFxuXG4gICAgICAgIHJlZnMucHVzaChoZWFkKVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHdyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5YUkVGXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHRoaXMueHJlZnMgPSB0aGlzLmFwcGx5T2JqZWN0RnJlZWluZyh0aGlzLnhyZWZzKVxuXG4gICAgICAgIGxldCBvcmRlcmVkX3NlcXVlbmNlcyA9IHRoaXMuY29tcHV0ZVhyZWZTZXF1ZW5jZXMoKVxuXG4gICAgICAgIGZvciAobGV0IHNlcXVlbmNlIG9mIG9yZGVyZWRfc2VxdWVuY2VzKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IHNlcXVlbmNlWzBdXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGhlYWQuaWQpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShzZXF1ZW5jZS5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9yZXQ6IG51bWJlcltdID0gW11cbiAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQoV3JpdGVyVXRpbC5wYWQoMTAsIHNlcXVlbmNlW2ldLnBvaW50ZXIpKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDUsIHNlcXVlbmNlW2ldLmdlbmVyYXRpb24pKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2VbaV0uZnJlZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5GKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLnVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5OKVxuXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgaWYgKF9yZXQubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiWFJlZiBlbnRyeSA8IDIwIGJ5dGVzXCIpXG5cbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KF9yZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSB0cmFpbGVyXG4gICAgICogKi9cbiAgICB3cml0ZVRyYWlsZXIocG9zWHJlZjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5UUkFJTEVSXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNJWkUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkudHJhaWxlclNpemUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlclxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ST09UKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIodHJhaWxlci5yb290LCB0cnVlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlBSRVYpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkuc3RhcnRfcG9pbnRlcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNUQVJUWFJFRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShwb3NYcmVmKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVPRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgYW5uYXRpb25zIGF0IHRoZSBlbmQgb2YgdGhlIFBERiBieXRlIHJlcHJlc2VudGF0aW9uIGFuZCByZXR1cm5zXG4gICAgICogdGhlIGJ5dGUgYXJyYXlcbiAgICAgKiAqL1xuICAgIHdyaXRlKCk6IEludDhBcnJheSB7XG4gICAgICAgIGxldCBwYWdlV2lzZVNvcnRlZCA9IHRoaXMuc29ydFBhZ2VXaXNlKHRoaXMuYW5ub3RhdGlvbnMpXG5cbiAgICAgICAgbGV0IHB0cjogbnVtYmVyID0gdGhpcy5kYXRhLmxlbmd0aFxuXG4gICAgICAgIGxldCBuZXdfZGF0YTogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIC8vIEZpeCBjYXNlIHRoYXQgdGhlcmUgaXMgbm8gbGluZWJyZWFrIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuZGF0YVtwdHIgLSAxXSA9PT0gNzApIHtcbiAgICAgICAgICAgIG5ld19kYXRhLnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuTEYpXG4gICAgICAgICAgICBwdHIgKz0gMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkKSB7XG4gICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IHBhZ2VXaXNlU29ydGVkW2tleV1cblxuICAgICAgICAgICAgLy8gd3JpdGUgdGhlIGFycmF5IHJlZmVyZW5jaW5nIHRvIGFubm90YXRpb25zIG9mIGEgY2VydGFpbiBwYWdlXG4gICAgICAgICAgICAvLyBpdCBhbHNvIHJlbW92ZXMgcmVmZXJlbmNlcyBvZiBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZFxuICAgICAgICAgICAgbGV0IGFubm90X2FycmF5ID0gdGhpcy53cml0ZUFubm90QXJyYXkocGFnZUFubm90cywgdGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHMgLS0gSW4gdGhlIGNhc2UgdGhlIHBhZ2UgaGFkIG5vIGFubm90YXRpb24geWV0IHRoZXJlIGV4aXN0c1xuICAgICAgICAgICAgLy8gbm8gc3VjaCBhcnJheSByZWZlcnJpbmcgdG8gaXRzIGFubm90YXRpb25zLiBBIHBvaW50ZXIgdG8gc3VjaCBhbiBhcnJheSBhcnJheSBtdXN0IGJlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgLy8gcGFnZSBvYmplY3QuIElmIHRoaXMgd2FzIGRvbmUgdGhlIGBwYWdlRGF0YWAgcGFyYW1hdGVyIGlzIHNldCBhbmQgY29udGFpbnMgdGhlIGFkYXB0ZWQgcGFnZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2Uub2JqLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2UuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZXMgdGhlIGFjdHVhbCBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgcGFnZUFubm90cykge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdF9vYmogPSB0aGlzLndyaXRlQW5ub3RhdGlvbk9iamVjdChhbm5vdClcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3Rfb2JqLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3Rfb2JqLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGFubm90X29iai5kYXRhKVxuICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9vYmouZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRha2UgYWxsIGFubm90YXRpb25zIHRoYXQgYXJlIG5vdCBkZWxldGVkIHlldFxuICAgICAgICBsZXQgX3RvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSB0aGlzLnRvRGVsZXRlLmZpbHRlcigodCkgPT4gIXQuaXNfZGVsZXRlZClcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkVG9EZWxldGUgPSB0aGlzLnNvcnRQYWdlV2lzZShfdG9EZWxldGUpXG5cbiAgICAgICAgLy8gYWRhcHQgdGhlIHJlbWFpbmluZyBhbm5vdGF0aW9uIHJlZmVyZW5jZSB0YWJsZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkVG9EZWxldGUpIHtcbiAgICAgICAgICAgIGxldCBkZWxfZGF0YSA9IHRoaXMudXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheShwYWdlV2lzZVNvcnRlZFRvRGVsZXRlW2tleV0pXG4gICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBkZWxfZGF0YS5wdHIub2JqLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBkZWxfZGF0YS5wdHIuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGRlbF9kYXRhLmRhdGEpXG4gICAgICAgICAgICBwdHIgKz0gZGVsX2RhdGEuZGF0YS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgYWxsIHJlZmVyZW5jZXMgdG8gYW5ub3RhdGlvbiBvYmplY3RzIGluIHBhZ2VzIHNob3VsZCBiZSByZW1vdmVkIGFuZCB3ZSBjYW4gZnJlZVxuICAgICAgICAvLyB0aGUgYW5ub3RhdGlvbiBvYmplY3QgaWRzXG4gICAgICAgIGZvciAobGV0IHRvRGVsIG9mIHRoaXMudG9EZWxldGUpIHtcbiAgICAgICAgICAgIGlmICghdG9EZWwub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRvRGVsLm9iamVjdF9pZC5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogLTEsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogdG9EZWwub2JqZWN0X2lkLmdlbmVyYXRpb24gKyAxLCAvLyBpbmNyZWFzZSBnZW5lcmF0aW9uXG4gICAgICAgICAgICAgICAgZnJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNydGFibGUgPSB0aGlzLndyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy53cml0ZVRyYWlsZXIocHRyKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdCh0cmFpbGVyKVxuXG4gICAgICAgIGxldCBuZXdfZGF0YV9hcnJheSA9IG5ldyBJbnQ4QXJyYXkobmV3X2RhdGEpXG5cbiAgICAgICAgbGV0IHJldF9hcnJheSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5kYXRhLmxlbmd0aCArIG5ld19kYXRhX2FycmF5Lmxlbmd0aClcbiAgICAgICAgcmV0X2FycmF5LnNldCh0aGlzLmRhdGEpXG4gICAgICAgIHJldF9hcnJheS5zZXQobmV3X2RhdGEsIHRoaXMuZGF0YS5sZW5ndGgpXG5cbiAgICAgICAgcmV0dXJuIHJldF9hcnJheVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGFubm90YXRpb25cbiAgICAgKiAqL1xuICAgIHVwZGF0ZVBhZ2VBbm5vdGF0aW9uUmVmZXJlbmNlQXJyYXkodG9EZWxldGU6IEFubm90YXRpb25bXSk6IHsgcHRyOiBSZWZlcmVuY2VQb2ludGVyLCBkYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0b0RlbGV0ZVswXS5wYWdlUmVmZXJlbmNlXG5cbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICAvLyByZW1vdmUgYW5ub3RhdGlvbiByZWZlcmVuY2VzIGZyb20gdGhlIGFycmF5IHRoYXQgbXVzdCBiZSBkZWxldGVkIGFuZCBtYXJrIHRoZW0gYXMgZGVsZXRlZFxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5maWx0ZXIoKGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvRGVsID0gdG9EZWxldGUuZmluZCgodCkgPT4gKDxhbnk+dC5vYmplY3RfaWQpLm9iaiA9PT0gYS5vYmogJiYgKDxhbnk+dC5vYmplY3RfaWQpLmdlbmVyYXRpb24gPT09IGEuZ2VuZXJhdGlvbilcblxuICAgICAgICAgICAgaWYgKHRvRGVsKSB7XG4gICAgICAgICAgICAgICAgdG9EZWwuaXNfZGVsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcmVmQXJyYXlfaWQ6IGFueSA9IHBhZ2UuYW5ub3RzUG9pbnRlclxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmQXJyYXlfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9TVEFSVClcblxuXG4gICAgICAgIGZvciAobGV0IGFuIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW4sIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiByZWZBcnJheV9pZCwgZGF0YTogcmV0IH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9