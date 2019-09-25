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
        this.data = new Uint8Array(data);
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
    constructor(data = new Uint8Array([])) {
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
        this.data = new Uint8Array(data);
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
        this.documentHistory = new document_history_1.DocumentHistory(new Uint8Array([]));
        this.data = new Uint8Array(data);
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
        console.log("-----------------------------------");
        console.log(typeof arraySeq);
        console.log(arraySeq);
        console.log(Util.convertAsciiToString(arraySeq));
        if (arraySeq instanceof Uint8Array) {
            console.log("-> is array");
            return Util.extractReferencesFromArraySequence(arraySeq);
        }
        else {
            console.log("-> is not");
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
        if (arraySeq instanceof Uint8Array) {
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
        if (val instanceof Uint8Array)
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
        this.data = new Uint8Array(data);
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
        let new_data_array = new Uint8Array(new_data);
        let ret_array = new Uint8Array(this.data.length + new_data_array.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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TUFBTSxDQUFDLEtBQUssQ0FBQztRQUV0QixJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDdkIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztZQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixHQUFH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QUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFdBQVc7QUFFakQsaUJBQVUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxrQkFBa0I7QUFDN0YsZUFBUSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxnQkFBZ0I7QUFDaEYsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFlBQVk7QUFDcEQsWUFBSyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxhQUFhO0FBRTNELFNBQUUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUMsVUFBVTtBQUN2QyxRQUFDLEdBQVcsRUFBRTtBQTlDaEMsd0JBMHJCQyIsImZpbGUiOiJwZGZBbm5vdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGRmQW5ub3RhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIsIFBERkRvY3VtZW50UGFyc2VyLCBQYWdlLCBBbm5vdGF0aW9uLCBCb3JkZXIsIENvbG9yIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgV3JpdGVyIH0gZnJvbSAnLi93cml0ZXInXG5cbi8qKlxuICogVGhlIGFubm90YXRpb24gZmFjdG9yeSBwcm92aWRlcyBtZXRob2RzIHRvIGNyZWF0ZSBhbm5vdGF0aW9ucy4gVGhvc2UgYXJlIHN0b3JlZCB0ZW1wb3JhcnlcbiAqIGFuZCB0aGFuIGVuY29kZWQgaW50byBQREYgY29kZSB3aGVuIHRoZSBQREYgZG9jdW1lbnQgaXMgb3V0cHV0dGVkIGFuZCBmb3IgaW5zdGFuY2UgZG93bmxvYWRlZC5cbiAqIFRoYXRcbiAqICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkZhY3Rvcnkge1xuICAgIHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICB0aGlzLnBhcnNlciA9IG5ldyBQREZEb2N1bWVudFBhcnNlcih0aGlzLmRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGFubm90YXRpb25zIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgUERGIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRBbm5vdGF0aW9uQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIFBERiBmaWxlIHJlZmVyZW5jZWQgYnkgdGhlIGdpdmVuICdwYXRoJ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFubm90YXRpb25GYWN0b3J5PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAvLyBicm93c2VyIGVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgZmV0Y2gocGF0aCkudGhlbigocikgPT4gci5ibG9iKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlcjogYW55ID0gbmV3IEZpbGVSZWFkZXIoKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBBbm5vdGF0aW9uRmFjdG9yeShyZWFkZXIucmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgeyAvLyBub2RlIGVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb3QgeWV0IGltcGxlbWVudGVkXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVW5zdXBwb3J0ZWQgZW52aXJvbm1lbnRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWRlbnRpZmllciBuZWNlc3NhcnkgZm9yIGNyZWF0aW5nIHRoZSBhbm5vdGF0aW9uXG4gICAgICogKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIFwiKHBkZkFubm90YXRlLVwiICsgVXRpbC5jb252ZXJ0RGF0ZVRvUERGRGF0ZShuZXcgRGF0ZSgpKS5zbGljZSgzLCAxNykgKyBcIi1cIiArIHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoICsgXCIpXCJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBkZWZhdWx0IGJvcmRlclxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0Qm9yZGVyKCk6IEJvcmRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzOiAwLFxuICAgICAgICAgICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyX3dpZHRoOiAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIG1hZGUgYW5ub3RhdGlvbnMgaW50byBhIGJ5dGVzdHJlYW1cbiAgICAgKiAqL1xuICAgIHdyaXRlKCk6IFVpbnQ4QXJyYXkge1xuICAgICAgICBpZiAodGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy50b0RlbGV0ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICAgICAgbGV0IHdyaXRlcjogV3JpdGVyID0gbmV3IFdyaXRlcih0aGlzLmRhdGEsIHRoaXMuYW5ub3RhdGlvbnMsIHRoaXMudG9EZWxldGUsIHRoaXMucGFyc2VyKVxuXG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3JlY3QnIHBhcmFtZXRlciwgd2hldGhlciBhbGwgdGhlIGVudHJpZXMgYXJlIG9mIHR5cGUgbnVtYmVyIGFuZCBpZiB0aGUgdGhlIG51bWJlciBvZiBlbnRyaWVzIGlzIGNvcnJlY3RcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY2hlY2tSZWN0KG5yOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCAhPT0gbnIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgaGFzIGludmFsaWQgbnVtYmVyIG9mIGVudHJpZXM6IFwiICsgcmVjdCArIFwiIGhhcyBcIiArIHJlY3QubGVuZ3RoICsgXCIgZW50cmllcywgYnV0IHNob3VsZCBoYXZlIFwiICsgbnIgKyBcIiBlbnRyaWVzXCIpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBhKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVjdCBcIiArIHJlY3QgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWN0YW5ndWxhciBodWxsIGZyb20gYSBxdWFkUG9pbnQgZGVmaW5pdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBleHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgeF92YWx1ZXMgPSBxdWFkUG9pbnRzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMClcbiAgICAgICAgbGV0IHlfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgIT09IDApXG5cbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbiguLi54X3ZhbHVlcyksIE1hdGgubWluKC4uLnlfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueF92YWx1ZXMpLCBNYXRoLm1heCguLi55X3ZhbHVlcyldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSAncXVhZFBvaW50cycgcGFyYW1ldGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocXVhZFBvaW50cy5sZW5ndGggJSA4ICE9PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFF1YWRwb2ludHMgYXJyYXkgaGFzIGxlbmd0aCAke3F1YWRQb2ludHMubGVuZ3RofSBidXQgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDhgKVxuXG4gICAgICAgIHF1YWRQb2ludHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlF1YWRwb2ludCBcIiArIHF1YWRQb2ludHMgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiYXNlIGFubm90YXRpb24gdGhhdCBtZWFuIHRoZSByYXcgb2JqZWN0IG9mIGFubm90YXRpb24gb3IgdGhvc2UgcGFydHMgdGhhdCBhcmUgYWxsIGV4aXN0aW5nXG4gICAgICogYW5kIGVxdWFsbHkgc2V0IGluIGFsbCB0eXBlcyBvZiBhbm5vdGF0aW9uc1xuICAgICAqICovXG4gICAgY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcpOiBBbm5vdGF0aW9uIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKVxuICAgICAgICBhbm5vdC50eXBlID0gXCIvQW5ub3RcIixcbiAgICAgICAgICAgIGFubm90LnBhZ2UgPSBwYWdlLFxuICAgICAgICAgICAgYW5ub3Qub2JqZWN0X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKCksXG4gICAgICAgICAgICBhbm5vdC5pZCA9IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICBhbm5vdC5yZWN0ID0gcmVjdCxcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IGF1dGhvcixcbiAgICAgICAgICAgIGFubm90LnBhZ2VSZWZlcmVuY2UgPSB0aGlzLnBhcnNlci5nZXRQYWdlKHBhZ2UpLFxuICAgICAgICAgICAgYW5ub3QudXBkYXRlRGF0ZSA9IFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSksXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IGNvbnRlbnRzLFxuICAgICAgICAgICAgYW5ub3QuYm9yZGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0Qm9yZGVyKClcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVRleHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBpZiAoIWNvbnRlbnRzKVxuICAgICAgICAgICAgY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhdXRob3IpXG4gICAgICAgICAgICBhdXRob3IgPSBcIlwiXG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcblxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9UZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgbWFya3VwIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGlmICgwID09PSBxdWFkUG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHF1YWRQb2ludHMgPSBbcmVjdFswXSwgcmVjdFszXSwgcmVjdFsyXSwgcmVjdFszXSwgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFsxXV1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcXVhZFBvaW50czogcXVhZFBvaW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGhpZ2hsaWdodCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUhpZ2hsaWdodEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9IaWdobGlnaHRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gdW5kZXJsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVW5kZXJsaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9VbmRlcmxpbmVcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzcXVpZ2dsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWlnZ2x5QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVpZ2dseVwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmlrZSBvdXQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdHJpa2VPdXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1N0cmlrZU91dFwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZyZWUgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUZyZWVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJyaWdodC1qdXN0aWZpZWRcIixcbiAgICAgICAgICAgIGRlZmF1bHRBcHBlYXJhbmNlOiBcIi9JbnZhbGlkX2ZvbnQgOSBUZlwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0ZyZWVUZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTGluZUFubm90YXRpb24oKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzZSBhbm5vdGF0aW9uIG9iamVjdCBvZiBhIGNpcmNsZSBhbmQgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1NxdWFyZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9DaXJjbGVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2Ugb2JqZWN0IG9mIGEgcG9seWdvbiBvciBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBzdWJ0eXA6IFBvbHlnb24gb3IgUG9seUxpbmVcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBzdWJ0eXBlOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KTogQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IHN1YnR5cGVcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWdvbiBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvbkFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5Z29uXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seUxpbmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5rIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBpbmtMaXN0IDogYSBsaXN0IG9mIGxpc3QgY29udGFpbmluZyB0aGUgcG9pbnRzIGZvciBkcmF3aW5nIHRoZSBsaW5lc1xuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVJbmtBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBpbmtMaXN0OiBudW1iZXJbXVtdIHwgbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMCwgZzogMSwgYjogMCB9KSB7XG5cbiAgICAgICAgaWYgKGlua0xpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbmtMaXN0IGlzIGVtcHR5XCIpXG5cbiAgICAgICAgbGV0IF9pbmtMaXN0OiBhbnkgPSBbXVxuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbmtMaXN0WzBdKSB7XG4gICAgICAgICAgICBfaW5rTGlzdCA9IFtpbmtMaXN0XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBpbmtMaXN0XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBpbmtMaXN0OiBfaW5rTGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9JbmtcIlxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RhbXAgYW5ub3RhdGlvbi4gVGhlcmUgZXhpc3RzIGEgbnVtYmVyIG9mIHByZWRpZmluZWQgc3RhbXBzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIFBERiBkb2N1bWVudHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdGFtcFR5cGUgOiB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdGFtcEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3RhbXBUeXBlOiBzdHJpbmcgPSBcIkRyYWZ0XCIsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgWzUwLCA1MCwgODAsIDgwXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHN0YW1wVHlwZTogc3RhbXBUeXBlXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL1N0YW1wXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZpc3VhbCBzeW1ib2wgdGhhdCBpbmRjYXRlcyB0aGUgZXhpc3RhbmNlIG9mIHRleHQgZWRpdHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjYXJldFN5bWJvbCA6IE5vbmUgb3IgUCwgd2l0aCBQIGZvciB1c2luZyB0aGUgcGFyYWdyYXBoIHN5bWJvbCBhcyBjYXJldFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDYXJldEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY2FyZXRTeW1ib2w6IHN0cmluZyA9IFwiUFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFtdLCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY2FyZXRTeW1ib2w6IGNhcmV0U3ltYm9sXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0NhcmV0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgYW5ub3RhdGlvbiB3aXRoIHRoZSBnaXZlbiBpZCBvciB0aGUgZ2l2ZW4gcmVmZXJlbmNlIG9iamVjdFxuICAgICAqICovXG4gICAgZGVsZXRlQW5ub3RhdGlvbihpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpZiBpdCB3YXMganVzdCBjcmVhdGVkIGJ1dCBpcyBub3QgaW4gdGhlIHBkZiBkb2N1bWVudFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFubm90YXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgaWQgJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiB0aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCAmJiBpZC5vYmogPT09ICg8YW55PnRoaXMuYW5ub3RhdGlvbnNbaV0ub2JqZWN0X2lkKS5vYmogJiYgaWQuZ2VuZXJhdGlvbiAmJiBpZC5nZW5lcmF0aW9uID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkuZ2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5zbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRBbm5vdGF0aW9ucygpLnRoZW4oKGFubm90cykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IF9hbm5vdHMgb2YgYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFubm90IG9mIF9hbm5vdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIGFubm90LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9EZWxldGUucHVzaChhbm5vdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiBhbm5vdC5vYmplY3RfaWQgJiYgaWQub2JqID09PSBhbm5vdC5vYmplY3RfaWQub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gYW5ub3Qub2JqZWN0X2lkLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlc3VsIG9mIGFsbCBhbm5vdGF0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gVGhpcyB3aWxsXG4gICAgICogY29tcHJpc2UgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBleGlzdHMgYW5kIHRob3NlIHRoYXQgd2VyZSBjcmVhdGVkIHVzaW5nIHRoaXMgbGlicmFyeVxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbnMoKTogUHJvbWlzZTxBbm5vdGF0aW9uW11bXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0Fubm90cyA9IHRoaXMucGFyc2VyLmV4dHJhY3RBbm5vdGF0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdBbm5vdCBvZiB0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbm5vdHNbbmV3QW5ub3QucGFnZV0ucHVzaChuZXdBbm5vdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZXhpc3RpbmdBbm5vdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUG9wdXBBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICBsZXQgYTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICBsZXQgZXh0ZW5kZWRfcGRmID0gdGhpcy53cml0ZSgpXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2V4dGVuZGVkX3BkZl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgYS5ocmVmID0gdXJsXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgYS5yZW1vdmUoKVxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBhZGFwdGVkIFBERiBkb2N1bWVudCBpbiBhIG5vZGVqcyBlbnZpcm9ubWVudFxuICAgICAqICovXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2lzc3Vlcy85ODI3XG4gICAgLy8gd2h5IGlzIGl0IHNvIHJlcHJlaGVuc2libGUgdG8gY3JlYXRlIGxpYnJhcmllcyBmb3IgYm90aCBlbnZpcm9ubWVudHMgKGJyb3dzZXIgYW5kIG5vZGVqcyk/IFRob3NlIGd1eXMgYXQgYW5ndWxhciBtaWdodCBrbm93LlxuICAgIC8vXG4gICAgLy8gdW5jb21tZW50IGl0IGlmIHlvdSB3YW50IHRvIHVzZSBpdC5cbiAgICBzYXZlKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyAmJiAoPGFueT5wcm9jZXNzKS5yZWxlYXNlLm5hbWUgIT09ICdub2RlJykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBkb3dubG9hZCgpIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLndyaXRlKClcbiAgICAgICAgLy8gICAgIGZzLndyaXRlRmlsZShmaWxlTmFtZSwgQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZmlsZSB3YXMgd3JpdHRlbiB0bzogJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFhSZWYge1xuICAgIGlkOiBudW1iZXJcbiAgICBwb2ludGVyOiBudW1iZXJcbiAgICBnZW5lcmF0aW9uOiBudW1iZXJcbiAgICBmcmVlOiBib29sZWFuXG4gICAgdXBkYXRlOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICBpZDogbnVtYmVyXG4gICAgY291bnQ6IG51bWJlclxuICAgIGVuZF9wdHI6IG51bWJlciAvLyBwb2ludHMgdG8gdGhlIGVuZCBvZiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG59XG5cbmludGVyZmFjZSBUcmFpbGVyIHtcbiAgICBzaXplOiBudW1iZXJcbiAgICByb290OiBSZWZlcmVuY2VQb2ludGVyXG4gICAgcHJldj86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICBbaWQ6IG51bWJlcl06IFhSZWZcbn1cblxuLyoqXG4gKiBIb2xkcyB0aGUgY29tcGxldGUgaW5mb3JtYXRpb24gb2Ygb25lIHVwZGF0ZSBzZWN0aW9uLiBUaGF0IGNvbXByaXNlczpcbiAqIC0gdGhlIGJvZHkgdXBkYXRlXG4gKiAtIHRoZSBjcm9zc2lzdGUgcmVmZXJlbmNlIHRhYmxlXG4gKiAtIHRoZSB0cmFpbGVyXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlY3Rpb24ge1xuICAgIHB1YmxpYyByZWZzOiBYUmVmW10gPSBbXVxuXG4gICAgcHVibGljIHN0YXJ0X3BvaW50ZXI6IG51bWJlciA9IC0xXG5cbiAgICBwdWJsaWMgdHJhaWxlcjogVHJhaWxlciA9IHsgc2l6ZTogLTEsIHJvb3Q6IHsgb2JqOiAtMSwgZ2VuZXJhdGlvbjogLTEgfSB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vIC9TaXplXG4gICAgcHJpdmF0ZSBzdGF0aWMgUk9PVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyAvUm9vdFxuICAgIHByaXZhdGUgc3RhdGljIFBSRVY6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gL1ByZXZcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugd2l0aCB0aGUgZ2l2ZW4gaWRcbiAgICAgKiAqL1xuICAgIGdldFJlZmVyZW5jZShpZDogbnVtYmVyKTogWFJlZiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGZvciAobGV0IHJlZiBvZiB0aGlzLnJlZnMpIHtcbiAgICAgICAgICAgIGlmIChyZWYuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWZcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgaGVhZGVyIG9mIGEgc3ViIHNlY3Rpb24uIEZvciBpbnN0YW5jZVxuICAgICAqXG4gICAgICogMCAxIC8vIDwtLVxuICAgICAqIC4uLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iZWpjdCBpZCAwIGFuZCB0aGUgbnVtYmVyIG9mIHN1YiBzZWN0aW9uIGVudHJpZXMgMVxuICAgICAqICovXG4gICAgZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoaW5kZXg6IG51bWJlcik6IFN1YlNlY3Rpb25IZWFkZXIge1xuICAgICAgICBsZXQgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgb2JqX2lkID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaW5kZXgsIHB0cilcblxuICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIgKyAxKVxuXG4gICAgICAgIGxldCBwdHJfcmVmX2NvdW50ID0gcHRyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZV9jb3VudCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9yZWZfY291bnQsIHB0cilcblxuICAgICAgICByZXR1cm4geyBpZDogb2JqX2lkLCBjb3VudDogcmVmZXJlbmNlX2NvdW50LCBlbmRfcHRyOiBwdHIgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIG9mIGEgc3ViIHNlY3Rpb24uIFRoZSBpbmRleCBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mXG4gICAgICogdGhlIGZpcnN0IHJlZmVyZW5jZSBhbmQgY291bnQgcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgdGhhdCBhcmVcbiAgICAgKiBjb250YWluZWQgaW4gdGhlIHN1YnNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGUgZmlyc3Rfb2JqZWN0X2lkIGlzIHRoZSBpZCBwcm92aWRlZCBpbiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG4gICAgICpcbiAgICAgKiBCeSBkZWZpbml0aW9uIG9mIHRoZSBQREYgc3RhbmRhcmQgb25lIGVudHJ5IGlzIDIwIGJ5dGVzIGxvbmdcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RSZWZlcmVuY2VzKGluZGV4OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGZpcnN0X29iamVjdF9pZDogbnVtYmVyKTogWFJlZltdIHtcbiAgICAgICAgbGV0IF9yZWZzOiBYUmVmW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSwgaW5kZXggKz0gMjApIHtcbiAgICAgICAgICAgIGxldCBwdHJfZW5kX3BvaW50ZXIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHJfZW5kX3BvaW50ZXIpXG5cbiAgICAgICAgICAgIGxldCBwdHJfZ2VuX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2VuZF9wb2ludGVyICsgMSlcblxuICAgICAgICAgICAgbGV0IHB0cl9nZW5fZW5kID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0KVxuXG4gICAgICAgICAgICBsZXQgZ2VuZXJhdGlvbiA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQsIHB0cl9nZW5fZW5kKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2ZsYWcgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX2VuZCArIDEpXG5cbiAgICAgICAgICAgIGxldCBpc0ZyZWUgPSB0aGlzLmRhdGFbcHRyX2ZsYWddID09PSAxMDJcblxuICAgICAgICAgICAgX3JlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGZpcnN0X29iamVjdF9pZCArIGksXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcG9pbnRlcixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBnZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGlzRnJlZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICFpc0ZyZWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgdHJhaWxlciBvZiB0aGUgc3Vic2VjdGlvbiB0aGF0IG1lYW5zIHRoZSBwYXJ0IHN0YXRpbmcgd2l0aCB0aGUgJ3RyYWlsZXInIGtleXdvcmQgYW5kXG4gICAgICogaW4gcGFydGljdWxhciB0aGUgdHJhaWxlciBkaWN0aW9uYXJ5XG4gICAgICogKi9cbiAgICBleHRyYWN0VHJhaWxlcihpbmRleDogbnVtYmVyKTogVHJhaWxlciB7XG4gICAgICAgIGxldCBlbmRfdHJhaWxlcl9pbmRleDogbnVtYmVyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKGluZGV4LCBlbmRfdHJhaWxlcl9pbmRleClcbiAgICAgICAgaW5kZXggPSAwXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9zaXplID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlNJWkUsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlNJWkUubGVuZ3RoXG4gICAgICAgIHB0cl9zdGFydF9zaXplID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSlcblxuICAgICAgICBsZXQgc2l6ZSA9IFV0aWwuZXh0cmFjdE51bWJlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUk9PVCwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFVwZGF0ZVNlY3Rpb24uUk9PVC5sZW5ndGhcbiAgICAgICAgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuICAgICAgICBsZXQgcm9vdF9yZWZlcmVuY2UgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUFJFViwgX2RhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICBsZXQgcHJldiA9IHVuZGVmaW5lZFxuICAgICAgICBpZiAoLTEgIT0gcHRyX3N0YXJ0X3ByZXYpIHtcbiAgICAgICAgICAgIHB0cl9zdGFydF9wcmV2ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldiArIFVwZGF0ZVNlY3Rpb24uUFJFVi5sZW5ndGgpXG5cbiAgICAgICAgICAgIHByZXYgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICByb290OiByb290X3JlZmVyZW5jZSxcbiAgICAgICAgICAgIHByZXY6IHByZXZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgVXBkYXRlIHNlY3Rpb24gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogKi9cbiAgICBleHRyYWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydF9wb2ludGVyID0gaW5kZXhcblxuICAgICAgICBsZXQgc3RhcnRfcHRyID0gaW5kZXggKyA1IC8vICsgbGVuZ3RoKHhyZWYpICsgYmxhbmtcbiAgICAgICAgc3RhcnRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgc3RhcnRfcHRyKVxuXG4gICAgICAgIGxldCBmaXJzdF9oZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAvLyB0aGUgZmlyc3QgaGVhZGVyIG11c3QgYmUgMCB0byBlc3RhYmxpc2ggdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1xuICAgICAgICBpZiAoZmlyc3RfaGVhZGVyLmlkICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkZpcnN0IG9iamVjdCBpZCBub3QgMFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGZpcnN0X2hlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAvLyBleHRyYWN0IGZpcnN0IHJlZmVyZW5jZVxuICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBmaXJzdF9oZWFkZXIuY291bnQsIGZpcnN0X2hlYWRlci5pZCkpXG5cbiAgICAgICAgLy8gZXh0cmFjdCByZW1haW5pbmcgcmVmZXJlbmNlc1xuICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBmaXJzdF9oZWFkZXIuY291bnQgKiAyMFxuXG4gICAgICAgIHdoaWxlICh0aGlzLmRhdGFbc3RhcnRfcHRyXSAhPT0gMTE2KSB7IC8vIDExNiA9ICd0JyBzdGFydCBvZiB0aGUgd29yZCB0cmFpbGVyIHRoYXQgY29uY2x1ZGVzIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlIHNlY3Rpb25cbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAgICAgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlcyA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBoZWFkZXIuY291bnQsIGhlYWRlci5pZClcblxuICAgICAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdChyZWZlcmVuY2VzKVxuXG4gICAgICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBoZWFkZXIuY291bnQgKiAyMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbGVyID0gdGhpcy5leHRyYWN0VHJhaWxlcihzdGFydF9wdHIpXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbXBsZXRlIFBERiBkb2N1bWVudCBoaXN0b3J5IGFuZCB0aGVyZWZvcmUgaG9sZHMgdGhlXG4gKiB1cGRhdGVkIGJvZHkgcGFydHMsIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlcyBhbmQgdGhlIGRvY3VtZW50IHRyYWlsZXJzXG4gKiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50SGlzdG9yeSB7XG4gICAgcHVibGljIHVwZGF0ZXM6IFVwZGF0ZVNlY3Rpb25bXSA9IFtdXG5cbiAgICBwdWJsaWMgdHJhaWxlclNpemU6IG51bWJlciA9IC0xXG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyBvYmplY3QgaWRzIHRoYXQgd2VyZSBmb3JtZXJseSBmcmVlZCBhbmQgYXJlIG5vdyAnYWxyZWFkeScgcmV1c2VkLlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBwcmV2ZW50IGEgZnJlZWQgb2JqZWN0IGEgc2Vjb25kIHRpbWVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgYWxyZWFkeV9yZXVzZWRfaWRzOiBYUmVmW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHVwZGF0ZSBzZWN0aW9uIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqICovXG4gICAgZXh0cmFjdFVwZGF0ZVNlY3Rpb24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgdXBkYXRlU2VjdGlvbiA9IG5ldyBVcGRhdGVTZWN0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgdXBkYXRlU2VjdGlvbi5leHRyYWN0KGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlcy5wdXNoKHVwZGF0ZVNlY3Rpb24pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGxhc3QgdXBkYXRlIHNlY3Rpb24gb2YgYSBkb2N1bWVudCAodGhhdCBtZWFuc1xuICAgICAqIHRoZSBtb3N0IHJlY2VudCB1cGRhdGUgbG9jYXRpbmcgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEVudHJ5KCkge1xuICAgICAgICBsZXQgcHRyID0gdGhpcy5kYXRhLmxlbmd0aCAtIDFcblxuICAgICAgICBsZXQgcHRyX3N0YXJ0eHJlZiA9IFV0aWwubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgOVxuXG4gICAgICAgIHB0ciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9zdGFydHhyZWYpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0VXBkYXRlU2VjdGlvbihwdHIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGVudGlyZSB1cGRhdGUgc2VjdGlvbnNcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEhpc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZXh0cmFjdERvY3VtZW50RW50cnkoKVxuXG4gICAgICAgIGxldCB1cyA9IHRoaXMudXBkYXRlc1swXVxuXG4gICAgICAgIHdoaWxlICh1cy50cmFpbGVyLnByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24odXMudHJhaWxlci5wcmV2KVxuICAgICAgICAgICAgdXMgPSB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXJTaXplID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnNpemVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgZm9yIGNsYXJpZmljYXRpb24uIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBtb3N0IHJlY2VudC4gV2UgcGFyc2VkIGJhY2t3YXJkcy5cbiAgICAgKiAqL1xuICAgIGdldFJlY2VudFVwZGF0ZSgpOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ5IHJ1bm5pbmcgdGhyb3VnaCB0aGUgUERmIGhpc3Rvcnkgd2UgY2FuIGZvciBldmVyeSBvYmplY3QgaWQgZGV0ZXJtaW5lIHRoZSBwb2ludGVyIGFkZHJlc3MgdG8gdGhlIG1vc3QgcmVjZW50IHZlcnNpb24sIGFuZFxuICAgICAqIHdoZXRoZXIgdGhlIG9iamVjdCBpZCBpcyBzdGlsbCBpbiB1c2VkLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iamVjdCBsb29rdXAgdGFibGUgaGFzIGFuIGVudHJ5IGZvciBldmVyeSBleGlzdGluZyBvYmplY3QgaWQsIGEgcG9pbnRlciB0byB0aGUgdGhlIG1vc3QgcmVjZW50IG9iamVjdCBkZWZpbml0aW9uLCBhcyBsb25nXG4gICAgICogYXMgdGhlIG9iamVjdCBleGlzdHMsIG9yIGFuIGFjY29yZGluZyBpbmRpY2F0aW9uIG90aGVyd2lzZS5cbiAgICAgKiAqL1xuICAgIGNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKCk6IE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgbGV0IG9ialRhYmxlOiB7IFtpZDogbnVtYmVyXTogWFJlZiB9ID0ge31cblxuICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICBsZXQgb2JqX2NvdW50ID0gdXBkYXRlLnRyYWlsZXIuc2l6ZVxuXG4gICAgICAgIGxldCBpID0gMVxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICsraVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAqIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgbGV0IG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBmcmVlX2hlYWRlciA9IG9iamVjdExvb2t1cFRhYmxlWzBdXG5cbiAgICAgICAgaWYgKCFmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ3Jvc3NzaXRlIHJlZmVyZW5jZSBoYXMgbm8gaGVhZGVyIGZvciB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXCIpXG5cbiAgICAgICAgLy8gaWYgdGhlIHBvaW50ZXIgb2Ygb2JqZWN0IDAgcG9pbnRzIHRvIDAgdGhlcmUgaXMgbm8gZnJlZWQgb2JqZWN0IHRoYXQgY2FuIGJlIHJldXNlZFxuICAgICAgICBpZiAoMCA9PT0gZnJlZV9oZWFkZXIucG9pbnRlcikge1xuICAgICAgICAgICAgaWYgKC0xID09PSB0aGlzLnRyYWlsZXJTaXplKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVHJhaWxlciBzaXplIG5vdCBzZXRcIilcblxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGxpc3QgaGVhZFxuICAgICAgICBsZXQgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICBsZXQgZnJlZWRIZWFkZXJMaXN0OiBYUmVmW10gPSBbXVxuICAgICAgICB3aGlsZSAocHRyICE9PSAwKSB7XG4gICAgICAgICAgICBmcmVlZEhlYWRlckxpc3QucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIGZyZWVfaGVhZGVyID0gb2JqZWN0TG9va3VwVGFibGVbcHRyXVxuICAgICAgICAgICAgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdldEZyZWVIZWFkZXIgPSAoZnJlZUhlYWRlckxpc3Q6IFhSZWZbXSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBmcmVlSGVhZGVyTGlzdC5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocC5nZW5lcmF0aW9uIDwgNjU1MzUgJiYgLy8gbWF4IGdlbmVyYXRpb24gbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIC0xID09PSB0aGlzLmFscmVhZHlfcmV1c2VkX2lkcy5pbmRleE9mKHApKSB7IC8vIG5vdCBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXVzZWRfZnJlZV9oZWFkZXIgPSBnZXRGcmVlSGVhZGVyKGZyZWVkSGVhZGVyTGlzdClcblxuICAgICAgICBpZiAocmV1c2VkX2ZyZWVfaGVhZGVyKSB7XG4gICAgICAgICAgICBmcmVlX2hlYWRlciA9IHJldXNlZF9mcmVlX2hlYWRlclxuXG4gICAgICAgICAgICAvLyBzdG9yZSB1c2VkIGlkIHRvIG1ha2Ugc3VyZSBpdCB3aWxsIG5vdCBiZSBzZWxlY3RlZCBhZ2FpblxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5X3JldXNlZF9pZHMucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB0aGF0IGFsbCBmcmVlZCBvYmplY3QgaWRzIGFyZSBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBmcmVlX2hlYWRlci5wb2ludGVyLCBnZW5lcmF0aW9uOiBvYmplY3RMb29rdXBUYWJsZVtmcmVlX2hlYWRlci5pZF0uZ2VuZXJhdGlvbiwgcmV1c2VkOiB0cnVlIH1cbiAgICB9XG59XG4iLCJleHBvcnQgeyBQREZEb2N1bWVudFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgQW5ub3RhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IERvY3VtZW50SGlzdG9yeSwgT2JqZWN0TG9va3VwVGFibGUgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknO1xuXG4vKipcbiAqIE5vdGUgdGhhdCB0aGlzIHBhcnNlciBkb2VzIG5vdCBwYXJzZXMgdGhlIFBERiBmaWxlIGNvbXBsZXRlbHkuIEl0IGxvb2t1cHMgdGhvc2VcbiAqIHBhcnRzIHRoYXQgYXJlIGltcG9ydGFudCBmb3IgdGhlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zLiBGb3IgbW9yZSBpbmZvcm1hdGlvblxuICogcGxlYXNlIHJlYWQgdGhlIFJFQURNRS5cbiAqICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3Ige1xuICAgIHI6IG51bWJlclxuICAgIGc6IG51bWJlclxuICAgIGI6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlciB7XG4gICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzOiBudW1iZXJcbiAgICB2ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzOiBudW1iZXJcbiAgICBib3JkZXJfd2lkdGg6IG51bWJlclxuICAgIGRhc2hfcGF0dGVyPzogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBSZWZlcmVuY2VzIGluIFBERiBkb2N1bWVucyBhcmUgIG9mIHRoZSBmb3JtXG4gKiA8b2JqX2lkPiA8Z2VuZXJhdGlvbj4gUlxuICpcbiAqIFRoaXMgaG9sZHMgc3VjaCBhIHJlZmVyZW5jZVxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgb2JqOiBudW1iZXJcbiAgICBnZW5lcmF0aW9uOiBudW1iZXJcbiAgICByZXVzZWQ/OiBib29sZWFuIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uIHtcbiAgICBwYWdlOiBudW1iZXIgPSAtMS8vIHRoZSB0YXJnZXQgcGFnZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHR5cGU6IHN0cmluZyA9IFwiXCIvLyB0aGUgc3ViIHR5cGUgb2YgdGhlIGFycmF5IChUZXh0LCBIaWdobGlnaHQsIC4uLilcbiAgICBvYmplY3RfaWQ6IFJlZmVyZW5jZVBvaW50ZXIgfCBudWxsID0gbnVsbC8vIGFuIHVudXNlZCBvYmplY3QgaWRcbiAgICBpZDogc3RyaW5nID0gXCJcIi8vIHVuaXF1ZSBhbm5hdGlvbiBpZGVudGlmaWVyXG4gICAgcmVjdDogbnVtYmVyW10gPSBbXS8vIHRoZSBsb2NhdGlvbiBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGF1dGhvcjogc3RyaW5nID0gXCJcIi8vIHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICBwYWdlUmVmZXJlbmNlOiBQYWdlIHwgbnVsbCA9IG51bGwvLyBUaGUgcmVmZXJlbmNlIHRvIHRoZSBwYWdlIG9iamVjdCB0byB3aGljaCB0aGUgYW5ub3RhdGlvbiBpcyBhZGRlZFxuICAgIHVwZGF0ZURhdGU6IHN0cmluZyA9IFwiXCIvLyBUaGUgZGF0ZSB3aGVuIHRoZSBhbm5vdGF0aW9uIHdhcyBjcmVhdGVkIG9yIHVwZGF0ZWRcbiAgICBjb250ZW50cz86IHN0cmluZyAvLyBUZXh0IHRoYXQgc2hhbGwgYmUgZGlzcGxheWVkIGZvciB0aGUgYW5ub3RhdGlvblxuICAgIGFubm90YXRpb25fZmxhZz86IG51bWJlciAvLyBTZWUgUERGIHNwY2VjaWZpY2F0aW9uICdBbm5vdGF0aW9uIEZsYWcnXG4gICAgYXBwZWFyYW5jZV9kaWN0aW9uYXJ5PzogYW55IC8vIGNvbnRyb2wgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICBhcHBlYXJhbmNlX3N0YXRlPzogYW55IC8vIGNoYW5nZSB0aGUgYXBwZWFyYW5jZSBhY2NvcmRpbmcgdG8gc3RhdGVzXG4gICAgYm9yZGVyPzogQm9yZGVyIHwgbnVsbCA9IG51bGwvLyBkZWZpbmUgdGhlIGJvcmRlclxuICAgIGNvbG9yPzogQ29sb3IgfCBudWxsID0gbnVsbC8vIHRoZSBjb2xvciBzZXRcbiAgICBvcGFjaXR5PzogbnVtYmVyIC8vIHRoZSBvcGFjaXR5IHZhbHVlIChDQSBjYWxsZWQgaW4gdGhlIFBERiBzcGVjKVxuICAgIHJpY2h0ZXh0Pzogc3RyaW5nIC8vIHJpY2ggdGV4dCBzdHJpbmcgZGlzcGxheWVkIGluIHRoZSBwb3B1cCB3aW5kb3cgd2hlbiB0aGUgYW5ub3RhdGlvbiBpcyBvcGVuZWRcbiAgICBpbml0aWFsbHlPcGVuPzogYm9vbGVhbiAvLyBmbGFnIHRvIGRlc2NyaWJlIHdoZXRoZXIgdGhlIGFubm90YXRpb24gc2hhbGwgaW5pdGlhbGx5IGJlIG9wZW5cbiAgICBpY29uTmFtZT86IHN0cmluZyAvLyBuYW1lIG9mIHRoZSB1c2VkIGljb25cbiAgICBhbm5vdGF0aW9uU3RhdGU/OiBzdHJpbmcgLy8gdGhlIHN0YXRlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgc3RhdGVNb2RlbD86IHN0cmluZ1xuICAgIGRlZmF1bHRBcHBlYXJhbmNlPzogc3RyaW5nIC8vIGRlZmF1bHQgYXBwZWFyYW5jZSBzdHJpbmdcbiAgICB0ZXh0QWxpZ25tZW50Pzogc3RyaW5nIC8vIGxlZnQtanVzdGlmaWVkLCBjZW50ZXJlZCwgcmlnaHQtanVzdGlmaWVkXG4gICAgcmljaFRleHRTdHJpbmc/OiBzdHJpbmcgLy8gZ2VuZXJhdGVzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgY2FsbG91dExpbmU/OiBudW1iZXJbXSAvLyBjYWxsIG91dCBsaW5lXG4gICAgaW50ZW50Pzogc3RyaW5nIC8vIGEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGludGVudDogRnJlZVRleHQsIEZyZWVUZXh0Q2FsbG91dCwgRnJlZVRleHRUeXBlV3JpdGVyXG4gICAgYm9yZGVyRWZmZWN0PzogYW55XG4gICAgcmQ/OiBhbnkgLy8gP1xuICAgIGJvcmRlclN0eWxlPzogYW55IC8vIGJvcmRlciBzdHlsZVxuICAgIGxpbmVFbmRpbmc/OiBzdHJpbmcgLy8gdGhlIGxpbmUgZW5kaW5nIHR5cGUgb2YgdGhlIGNhbGxvdXQgbGluZVxuICAgIHN0YW1wVHlwZT86IHN0cmluZyAvLyB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgIGNhcmV0U3ltYm9sPzogc3RyaW5nIC8vIENhbiBiZSBQIHRvIHVzZSBhIHBhcmFncmFwaCBzeW1ib2wgZm9yIHRoZSBjYXJldCBvciBOb25lXG4gICAgcXVhZFBvaW50cz86IG51bWJlcltdIC8vIHNwZWNpZmllcyBob3cgdGhlIGFubm90YXRpb24gZ29lcyBhcnJvdW5kIHRoZSB0ZXh0XG4gICAgaW5rTGlzdD86IG51bWJlcltdW11cbiAgICBib3JkZXJfc3R5bGU/OiBhbnlcbiAgICBjb2xvcl9zcGFjZT86IG51bWJlcltdXG4gICAgYm9yZGVyX2VmZmVjdD86IGFueVxuICAgIHZlcnRpY2VzPzogbnVtYmVyW11cbiAgICBsaW5lX2VuZGluZz86IHN0cmluZ1tdXG4gICAgaW50ZXJpb3JfY29sb3I/OiBudW1iZXJbXVxuICAgIG1lYXN1cmU/OiBhbnlcbiAgICBpc19kZWxldGVkPzogYm9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShbXSkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgYW5ub3RhdGlvbiBvYmplY3QgKHBhcnRpYWxseSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIsIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhlIGRhdGEgYXJyYXkgdG8gdGhlIHBhcnRpdGlvbiB0aGF0IGFjdHVhbGx5IGNvbnRhaW5zIHRoZSBhbm5vdGF0aW9uIGRhdGFcbiAgICAgICAgbGV0IG9ial9lbmRfcHRyOiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UocHRyLCBvYmpfZW5kX3B0cilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IFV0aWwuZXh0cmFjdE9iamVjdElkKHRoaXMuZGF0YSwgMClcblxuICAgICAgICB0aGlzLnR5cGUgPSBcIi9cIiArIFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5TVUJUWVBFKVxuICAgICAgICB0aGlzLnJlY3QgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuUkVDVClcbiAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlID0gcGFnZVxuICAgICAgICB0aGlzLnVwZGF0ZURhdGUgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuTSlcbiAgICAgICAgdGhpcy5ib3JkZXIgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQk9SREVSKVxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkMpXG4gICAgICAgIHRoaXMuYXV0aG9yID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlQpXG4gICAgICAgIHRoaXMuaWQgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuTk0pXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQ09OVEVOVFMpXG4gICAgICAgIHRoaXMucXVhZFBvaW50cyA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5RVUFEUE9JTlRTKVxuICAgICAgICB0aGlzLmlua0xpc3QgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuSU5LTElTVClcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgQ2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBDYXRhbG9nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHsgfVxuXG4gICAgcHJpdmF0ZSBwYWdlc09iamVjdElkOiBSZWZlcmVuY2VQb2ludGVyID0geyBvYmo6IC0xLCBnZW5lcmF0aW9uOiAtMSB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBjYXRhbG9nIG9iamVjdCBmcm9tIHRoZSBkYXRhIGF0IHRoZSBnaXZlbiBwdHJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHB0cl9wYWdlc19rZXkgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRVMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuUEFHRVMubGVuZ3RoXG5cbiAgICAgICAgdGhpcy5wYWdlc09iamVjdElkID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQodGhpcy5kYXRhLCBwdHJfcGFnZXNfa2V5KVxuICAgIH1cblxuICAgIGdldFBhZ2VzT2JqZWN0SWQoKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzT2JqZWN0SWRcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgUGFnZVRyZWUgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB3aXRoIC9UeXBlIC9QYWdlc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlVHJlZSB7XG5cbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0aW9uOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBwYWdlQ291bnQ6IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIHBhZ2VSZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5LCBwcml2YXRlIG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIHRoZSBwcm92aWRlZCByZWZlcmVuY2UgYW5kIHJldHVybiB0cnVlLCBpZiB0aGUgb2JqZWN0IHR5cGUgaXMgL1BhZ2VcbiAgICAgKiAqL1xuICAgIGlzUGFnZShyZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgaWYgKHhyZWYuZ2VuZXJhdGlvbiAhPT0gcmVmZXJlbmNlLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZSh4cmVmLnBvaW50ZXIsIHB0cilcblxuICAgICAgICByZXR1cm4gKC0xICE9PSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUEFHRSwgX2RhdGEsIDAsIHRydWUpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBraWRzIHJlZmVyZW5jZXMgcmVjdXJzaXZlbHkuXG4gICAgICogRm9yIGV2ZXJ5IGtpZCBpdCBjaGVja3MgaWYgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IHR5cGUgaXM6XG4gICAgICogLSBhIC9QYWdlcyBvYmplY3QgdGhlbiBpdCByZWN1cnNpdmVseSBsb29rdXBzIGl0cyBjaGlsZHJlblxuICAgICAqIC0gYSAvUGFnZSBvYmplY3QgdGhlbiBpdCBhZGRzIHRoZSByZWZlcmVuY2VzXG4gICAgICogKi9cbiAgICBleHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdKSB7XG5cbiAgICAgICAgZm9yIChsZXQgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGFnZShyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGhhbmRsZSBhcnJheSAtLSByZWN1cnNpdmVseSBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgICAgICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICAgICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgICAgICAgICBsZXQgcHRyID0geHJlZi5wb2ludGVyXG5cbiAgICAgICAgICAgICAgICBsZXQga2lkc19pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5LSURTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLktJRFMubGVuZ3RoXG5cbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlfZGF0YSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBraWRzX2luZGV4ICsgMSlcblxuICAgICAgICAgICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgb2JqZWN0IGRhdGEgYXQgdGhlIGdpdmVuIHBvaW50ZXJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQ09VTlQsIHB0cilcblxuICAgICAgICAvLyBpdCBpcyBwb3NzaWJsZSB0aGF0IGFuIG9iamVjdCBvZiB0eXBlIC9QYWdlcyByZWZlcmVuY2VzIGFnYWluIHRvIG9iamVjdHMgb2YgdHlwZXMgL1BhZ2VzIHNvIHdlIG11c3RcbiAgICAgICAgLy8gYXBwbHkgYSByZWN1cnNpdmUgZXZhbHVhdGlvblxuICAgICAgICBsZXQga2lkc19pbmRleCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5LSURTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICBpZiAoLTEgPT09IGtpZHNfaW5kZXgpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IGZpbmQgaW5kZXggb2YgL0tpZHMgaW4gL1BhZ2VzIG9iamVjdGApXG5cbiAgICAgICAga2lkc19pbmRleCArPSBVdGlsLktJRFMubGVuZ3RoXG5cbiAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcyA9IFtdXG5cbiAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfZGF0YSlcblxuICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYWdlcyB0aGUgcGFnZSB0cmVlIGNvbXByaXNlc1xuICAgICAqICovXG4gICAgZ2V0UGFnZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VDb3VudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3RzXG4gICAgICogKi9cbiAgICBnZXRQYWdlUmVmZXJlbmNlcygpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlUmVmZXJlbmNlc1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcGFnZSBvYmplY3QgaW4gdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgICBwdWJsaWMgb2JqZWN0X2lkOiBSZWZlcmVuY2VQb2ludGVyIHwgdW5kZWZpbmVkIC8vIFRoZSBvYmplY3QgaWQgYW5kIGdlbmVyYXRpb24gb2YgdGhlIG9iamVjdFxuXG4gICAgcHVibGljIGFubm90czogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgIHB1YmxpYyBoYXNBbm5vdHNGaWVsZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwdWJsaWMgYW5ub3RzUG9pbnRlcjogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5LCBwcml2YXRlIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5KSB7IH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIHRoZSBsaW5rZWQgYW5ub3RhdGlvbnMgYXJyYXlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKSB7XG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKCF0aGlzLmFubm90c1BvaW50ZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb25zIHBvaW50ZXIgbm90IHNldFwiKVxuXG4gICAgICAgIGxldCByZWZfYW5ub3RfdGFibGUgPSBvYmpfdGFibGVbdGhpcy5hbm5vdHNQb2ludGVyLm9ial1cblxuICAgICAgICBpZiAocmVmX2Fubm90X3RhYmxlLmdlbmVyYXRpb24gIT09IHRoaXMuYW5ub3RzUG9pbnRlci5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWZlcmVuY2UgYW5ub3RhdGlvbiB0YWJsZSBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSByZWZfYW5ub3RfdGFibGUucG9pbnRlclxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuT0JKLmxlbmd0aFxuXG4gICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlKVxuXG4gICAgICAgIHRoaXMuYW5ub3RzID0gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBwYWdlIG9iamVjdCBzdGFydGluZyBhdCBwb3NpdGlvbiBwdHJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgaWRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuICAgICAgICBsZXQgb2JqZWN0X2lkOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpZF9wdHIpXG5cbiAgICAgICAgbGV0IGVuZF9pZF9wdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGlkX3B0ciArIDEpICsgMVxuICAgICAgICBsZXQgb2JqZWN0X2dlbjogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgZW5kX2lkX3B0cilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IHsgb2JqOiBvYmplY3RfaWQsIGdlbmVyYXRpb246IG9iamVjdF9nZW4gfVxuXG4gICAgICAgIGxldCBlbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHB0ciwgZW5kX3B0cilcblxuICAgICAgICBsZXQgYW5ub3RzID0gVXRpbC5leHRyYWN0RmllbGQoX2RhdGEsIFV0aWwuQU5OT1RTKVxuXG4gICAgICAgIGlmIChhbm5vdHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQW5ub3RzRmllbGQgPSB0cnVlXG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFubm90cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90cyA9IGFubm90c1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90c1BvaW50ZXIgPSBhbm5vdHNcblxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdEFubm90YXRpb25BcnJheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUGFyc2VzIHRoZSByZWxldmFudCBwYXJ0cyBvZiB0aGUgUERGIGRvY3VtZW50IGFuZCBwcm92aWRlcyBmdW5jdGlvbmFsaXR5IHRvIGV4dHJhY3QgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBmb3JcbiAqIGFkZGluZyBhbm5vdGF0aW9uc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQREZEb2N1bWVudFBhcnNlciB7XG5cbiAgICBwdWJsaWMgZG9jdW1lbnRIaXN0b3J5OiBEb2N1bWVudEhpc3RvcnkgPSBuZXcgRG9jdW1lbnRIaXN0b3J5KG5ldyBVaW50OEFycmF5KFtdKSlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeSh0aGlzLmRhdGEpXG4gICAgICAgIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmV4dHJhY3REb2N1bWVudEhpc3RvcnkoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmcmVlIG9iamVjdCBpZC4gSXQgZmlyc3QgY2hlY2tzIHdldGhlciB0aGVyZSBjYW4gYmUgYW4gZnJlZWQgb2JqZWN0IGlkIHJldXNlZC4gSWYgdGhhdCBpcyBub3QgdGhlIGNhc2VcbiAgICAgKiBpdCBjcmVhdGVzIGEgbmV3IG9uZVxuICAgICAqICovXG4gICAgZ2V0RnJlZU9iamVjdElkKCk6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEhpc3RvcnkuZ2V0RnJlZU9iamVjdElkKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIGdldENhdGFsb2coKTogQ2F0YWxvZ09iamVjdCB7XG4gICAgICAgIGxldCByb290X29iaiA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXIucm9vdFxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBjYXRhbG9nX3B0ciA9IG9ial90YWJsZVtyb290X29iai5vYmpdLnBvaW50ZXJcblxuICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSBuZXcgQ2F0YWxvZ09iamVjdCh0aGlzLmRhdGEpXG4gICAgICAgIGNhdGFsb2dfb2JqZWN0LmV4dHJhY3QoY2F0YWxvZ19wdHIpXG5cbiAgICAgICAgcmV0dXJuIGNhdGFsb2dfb2JqZWN0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHBhZ2UgdHJlZSBvYmplY3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRQYWdlVHJlZSgpOiBQYWdlVHJlZSB7XG4gICAgICAgIGxldCBvYmpfdGFibGU6IE9iamVjdExvb2t1cFRhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IHRoaXMuZ2V0Q2F0YWxvZygpXG5cbiAgICAgICAgbGV0IHBhZ2VzX2lkID0gY2F0YWxvZ19vYmplY3QuZ2V0UGFnZXNPYmplY3RJZCgpXG4gICAgICAgIGxldCBwYWdlc19yZWYgPSBvYmpfdGFibGVbcGFnZXNfaWQub2JqXVxuXG4gICAgICAgIGlmIChwYWdlc19yZWYuZ2VuZXJhdGlvbiAhPT0gcGFnZXNfaWQuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZXMgb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHBhZ2VUcmVlID0gbmV3IFBhZ2VUcmVlKHRoaXMuZGF0YSwgb2JqX3RhYmxlKVxuICAgICAgICBwYWdlVHJlZS5leHRyYWN0KHBhZ2VzX3JlZi5wb2ludGVyKVxuXG4gICAgICAgIHJldHVybiBwYWdlVHJlZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHdpdGggdGhlIGdpdmVuIHBhZ2VOdW1iZXJcbiAgICAgKiAqL1xuICAgIGdldFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogUGFnZSB7XG4gICAgICAgIGxldCBwYWdlVHJlZSA9IHRoaXMuZ2V0UGFnZVRyZWUoKVxuICAgICAgICBsZXQgcGFnZUlkID0gcGFnZVRyZWUuZ2V0UGFnZVJlZmVyZW5jZXMoKVtwYWdlTnVtYmVyXVxuXG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKG9ial90YWJsZVtwYWdlSWQub2JqXS5nZW5lcmF0aW9uICE9PSBwYWdlSWQuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICBsZXQgb2JqX3B0ciA9IG9ial90YWJsZVtwYWdlSWQub2JqXS5wb2ludGVyXG5cbiAgICAgICAgbGV0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLmRhdGEsIHRoaXMuZG9jdW1lbnRIaXN0b3J5KVxuICAgICAgICBwYWdlLmV4dHJhY3Qob2JqX3B0cilcblxuICAgICAgICByZXR1cm4gcGFnZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFubm90YXRpb25zIHRoYXQgZXhpc3QgaW4gdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBleHRyYWN0QW5ub3RhdGlvbnMoKTogQW5ub3RhdGlvbltdW10ge1xuICAgICAgICBsZXQgYW5ub3RzOiBBbm5vdGF0aW9uW11bXSA9IFtdXG4gICAgICAgIGxldCBwdDogUGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgcGFnZUNvdW50OiBudW1iZXIgPSBwdC5nZXRQYWdlQ291bnQoKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwYWdlOiBQYWdlID0gdGhpcy5nZXRQYWdlKGkpXG5cbiAgICAgICAgICAgIGxldCBhbm5vdGF0aW9uUmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICAgICAgbGV0IHBhZ2VBbm5vdHM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IHJlZlB0ciBvZiBhbm5vdGF0aW9uUmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgIGxldCBhID0gbmV3IEFubm90YXRpb24odGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIGEuZXh0cmFjdChvYmpfdGFibGVbcmVmUHRyLm9ial0ucG9pbnRlciwgcGFnZSlcbiAgICAgICAgICAgICAgICBhLnBhZ2UgPSBpXG4gICAgICAgICAgICAgICAgcGFnZUFubm90cy5wdXNoKGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbm5vdHMucHVzaChwYWdlQW5ub3RzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFubm90c1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBtZXRob2RzIHRvIG5hdmlnYXRlIHRocm91Z2ggdGhlIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgVXRpbCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIENSOiBudW1iZXIgPSAxM1xuICAgIHB1YmxpYyBzdGF0aWMgTEY6IG51bWJlciA9IDEwXG4gICAgcHVibGljIHN0YXRpYyBUWVBFOiBzdHJpbmcgPSBcIi9UeXBlIFwiXG4gICAgcHVibGljIHN0YXRpYyBTUEFDRTogbnVtYmVyID0gMzJcbiAgICBwdWJsaWMgc3RhdGljIF9UWVBFOiBudW1iZXJbXSA9IFs0NywgODQsIDEyMSwgMTEyLCAxMDFdIC8vICcvVHlwZSdcbiAgICBwdWJsaWMgc3RhdGljIE9CSjogbnVtYmVyW10gPSBbMTExLCA5OCwgMTA2XSAvLyAnb2JqJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU5ET0JKOiBudW1iZXJbXSA9IFsxMDEsIDExMCwgMTAwLCAxMTEsIDk4LCAxMDZdIC8vICdlbmRvYmonXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9TVEFSVDogbnVtYmVyW10gPSBbOTFdIC8vICdbJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXJbXSA9IFs5M10gLy8gJ10nXG4gICAgcHVibGljIHN0YXRpYyBTVFJJTkdfU1RBUlQ6IG51bWJlcltdID0gWzQwXSAvLyAnKCdcbiAgICBwdWJsaWMgc3RhdGljIFNUUklOR19FTkQ6IG51bWJlcltdID0gWzQxXSAvLyAnKSdcbiAgICBwdWJsaWMgc3RhdGljIFI6IG51bWJlcltdID0gWzgyXSAvLyAnUidcbiAgICBwdWJsaWMgc3RhdGljIEFOTk9UOiBudW1iZXJbXSA9IFs0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl0gLy8gJy9Bbm5vdCdcbiAgICBwdWJsaWMgc3RhdGljIEFOTk9UUzogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTYsIDExNV0gLy8gJy9Bbm5vdCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfU1RBUlQ6IG51bWJlcltdID0gWzYwLCA2MF0gLy8gJzw8J1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml0gLy8gJz4+J1xuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdIC8vICcvU3VidHlwZSdcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VTOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMSwgMTE1XSAvLyAvUGFnZXNcbiAgICBwdWJsaWMgc3RhdGljIFBBR0U6IG51bWJlcltdID0gWzQ3LCA4MCwgOTcsIDEwMywgMTAxXVxuICAgIHB1YmxpYyBzdGF0aWMgS0lEUzogbnVtYmVyW10gPSBbNDcsIDc1LCAxMDUsIDEwMCwgMTE1XVxuICAgIHB1YmxpYyBzdGF0aWMgQ09VTlQ6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTcsIDExMCwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBNOiBudW1iZXJbXSA9IFs0NywgNzddIC8vICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIFQ6IG51bWJlcltdID0gWzQ3LCA4NF0gLy8gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgRjogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyAnL0YnXG4gICAgcHVibGljIHN0YXRpYyBDOiBudW1iZXJbXSA9IFs0NywgNjddIC8vICcvQydcbiAgICBwdWJsaWMgc3RhdGljIENBOiBudW1iZXJbXSA9IFs0NywgNjcsIDY1XSAvLyAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgTk06IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXJbXSA9IFs0NywgODBdIC8vICcvUCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gJy9Db250ZW50cydcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gJy9Cb3JkZXInXG4gICAgcHVibGljIHN0YXRpYyBRVUFEUE9JTlRTOiBudW1iZXJbXSA9IFs0NywgODEsIDExNywgOTcsIDEwMCwgODAsIDExMSwgMTA1LCAxMTAsIDExNiwgMTE1XSAvLyAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gJy9JbmtMaXN0J1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUlRYUkVGOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3N0YXJ0eHJlZidcblxuICAgIC8qKlxuICAgICAqIEFzc3VtZXMgdGhhdCBhdCBwb3NpdGlvbiBpbmRleCBpcyBhIGRlbGltaXRlciBhbmQgdGhhbiBydW5zIGFzIGxvbmcgZm9yd2FyZCB1bnRpbCBpdCBmaW5kc1xuICAgICAqIGFub3RoZXIgZGVsaW1pdGVyIG9yIHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2tpcERlbGltaXRlcihkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IGRhdGEubGVuZ3RoICYmIHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpbmRleF0pKSsraW5kZXhcblxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgYXNjaWkgdmFsdWVzXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRTdHJpbmdUb0FzY2lpKHRvQ29udmVydDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgYXNjaWlzOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0NvbnZlcnQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGFzY2lpcy5wdXNoKCt0b0NvbnZlcnQuY2hhckNvZGVBdChpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc2NpaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRGVsaW1pdGVyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAxMCB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IDEzIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gMzIgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSA0NyAvLyAnLydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldFxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBzdWNlZWRpbmcgY2hhciBhZnRlciB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZFxuICAgICAqIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZSBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlU2VxdWVuY2Uoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDAsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PSBzZXF1ZW5jZVtqXSkge1xuICAgICAgICAgICAgICAgIGlmIChqID09IHNlcXVlbmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQgfHwgZGF0YS5sZW5ndGggPT0gaSArIDEgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgKyAxXSkgfHwgZGF0YVtpICsgMV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIC0gKHNlcXVlbmNlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gLTFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2pcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0aGUgc2VxdWVuY2UgaW4gZGF0YSBzdGFydGluZyBhdCB0aGUgb2Zmc2V0IGluIHJldmVyc2UgZGlyZWN0aW9uXG4gICAgICpcbiAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHByZWNlZGluZyBjaGFyIGJlZm9yZSB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIHN0YXJ0XG4gICAgICogb2YgdGhlIHdob2xlIGRhdGEgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSwgY2xvc2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IG9mZnNldFxuXG4gICAgICAgIGZvciAobGV0IGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGkgLSAxIDwgMCB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAtLWpcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGJlZm9yZSB0aGUgbmV4dCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlcihkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgZGF0YS5sZW5ndGggJiYgIXRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtvZmZzZXRdKSkrK29mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYXRlcyB0aGUgaW5kZXggYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAwICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpLS1vZmZzZXRcblxuICAgICAgICBpZiAob2Zmc2V0IDw9IDApXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgYXJyYXkgZGF0YSBhdCB0aGUgcG9zaXRpb24gb2YgdGhlIGluZGV4LiBUaGUgaW5kZXggY2FuIG1hcmsgdGhlIHN0YXJ0IG9mIHRoZVxuICAgICAqIGFycmF5IG9yIGEgcG9pbnRlciB3aXRoaW4gdGhlIGFycmF5LiBJZiBpdCBpcyBhIG5lc3RlZCBhcnJheSB0aGUgcG9pbnRlciBtdXN0IG1hcmsgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIHRoZSBzdWJlcmFycmF5LiBPdGhlcndpc2Ugb25seSB0aGUgc3ViYXJyYXkgaXMgZXh0cmFjdGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RBcnJheVNlcXVlbmNlKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgYXJyYXlfc3RhcnQgPSB0aGlzLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5BUlJBWV9TVEFSVCwgZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgaWYgKC0xID09PSBhcnJheV9zdGFydClcbiAgICAgICAgICAgIGFycmF5X3N0YXJ0ID0gaW5kZXhcblxuICAgICAgICBsZXQgcm9vdF9saXN0ID0geyBwdHI6IGFycmF5X3N0YXJ0LCBsc3Q6IFtdIH1cbiAgICAgICAgbGV0IHN0YXJ0X3BvaW50ZXI6IGFueVtdID0gW3Jvb3RfbGlzdF1cblxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXlfc3RhcnQgKyAxOyBpIDwgZGF0YS5sZW5ndGggJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwOykge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX24gPSB7IHB0cjogaSwgbHN0OiBbXSB9XG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLnB0ciA9IC0xIC8vIG1hcmsgbGlzdCBhcyBjb2xsZWN0aW9uIG9mIG90aGVyIGxpc3RzXG4gICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlci5wdXNoKF9uKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBzdGFydF9wb2ludGVyLnBvcCgpXG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBzcCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgTWlzc2luZyBzdGFydCBwb2ludGVyICR7SlNPTi5zdHJpbmdpZnkoc3ApfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNwLnB0ciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzX3RvQWRkID0gZGF0YS5zbGljZShzcC5wdHIgKyAxLCBpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyW3N0YXJ0X3BvaW50ZXIubGVuZ3RoIC0gMV0ubHN0LnB1c2goYXNfdG9BZGQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNfdG9BZGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3AucHRyID09PSAtMSAmJiBzdGFydF9wb2ludGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKHNwLmxzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaSArIDEpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm9vdF9saXN0LmxzdFxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheVNlcTogYW55KTogYW55IHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYXJyYXlTZXEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5U2VxKVxuICAgICAgICBjb25zb2xlLmxvZyhVdGlsLmNvbnZlcnRBc2NpaVRvU3RyaW5nKGFycmF5U2VxKSlcbiAgICAgICAgaWYgKGFycmF5U2VxIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItPiBpcyBhcnJheVwiKVxuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheVNlcSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLT4gaXMgbm90XCIpXG4gICAgICAgICAgICBsZXQgbmJyOiBhbnkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheV9zZXF1ZW5jZSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIGFuIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBuYnJzOiBhbnkgPSBbXVxuXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXlTZXEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmJycy5wdXNoKFV0aWwuZXh0cmFjdE51bWJlcihhcnJheVNlcSwgaSkpXG5cbiAgICAgICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKSArIDFcbiAgICAgICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGFycmF5U2VxLCBpICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5icnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYnI6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2godGhpcy5leHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5X3NlcXVlbmNlKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5iclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAgICAgKiBlLmcuICBbNjkuNjk3IDQ3LjQxNDggOTYuNDY0NiA1OC4yNTk4IF1cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcnNBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheV9zZXF1ZW5jZXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbiBvYmplY3QgaWRlbnRpZmllclxuICAgICAqIDxJRD4gPEdFTj4gb2JqXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RPYmplY3RJZChkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICBsZXQgb2JqID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIGluZGV4LCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuICAgICAgICBsZXQgcl9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2UodGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaShcIiBSXCIpLCBkYXRhLCBpbmRleCwgdHJ1ZSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCwgcl9pbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIGFzIHR5cGVkIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlVHlwZWQoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuXG4gICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZGVsX2luZGV4ID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXIocmVmX2RhdGEsIDApXG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCAwLCBkZWxfaW5kZXgpXG4gICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBpZCwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAqIDxvYmpOdW1iZXI+IDxnZW5lcmF0aW9uPiBvYmpcbiAgICAgKiA8PFxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICAvVHlwZSAvPHR5cGU+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA+PlxuICAgICAqXG4gICAgICogQXBwcm9hY2g6IFdlIGlkZW50aWZ5IGFuIGluZGV4IHdpdGhpbiB0aGUgb2JqZWN0IGRlZmluaXRvbiBzZWFyY2ggdGhlIHVuaXF1ZWx5IGlkZW50aWZ5YWJsZSBlbmQgb2YgdGhlIG9iamVjdCBkZWZpbml0aW9uXG4gICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0QnlUeXBlKGRhdGE6IFVpbnQ4QXJyYXksIF90eXBlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgc2VhcmNoU2VxdWVuY2UgPSB0aGlzLmNvbnZlcnRTdHJpbmdUb0FzY2lpKHRoaXMuVFlQRSArIF90eXBlKVxuXG4gICAgICAgIGxldCBvYmpfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHNlYXJjaFNlcXVlbmNlLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGxldCBvYmpfZW5kID0gdGhpcy5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKSArIDZcblxuICAgICAgICBsZXQgb2JqX3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuT0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpXG5cbiAgICAgICAgbGV0IGdlbmVyYXRpb24gPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIG9ial9zdGFydCAtIDEpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgZ2VuZXJhdGlvbiAtIDEpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2Uob2JqX2lkLCBvYmpfZW5kKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFycmF5IG9mIG51bWJlcnMgYW5kIGFycmF5cyBvZiByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBNYXJrIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGFycmF5cyB0aGF0IGNvbnRhaW4gZGlmZmVyZW50IHR5cGVzLCBzbyBlaXRoZXJcbiAgICAgKiBpdCByZXR1cm5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy4gSG93ZXZlciB0aGUgZnVuY3Rpb24gc3VwcG9ydHNcbiAgICAgKiBhcmJpdHJhcmlseSBuZXN0aW5nIG9mIGFycmF5cy5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEFycmF5KGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLlJbMF0pIHsgLy8gJ1InIC0tIHdlIGtub3cgaXQgaXMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhLCBpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3ROdW1iZXJzQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmF0Y3MgdGhlIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0U3RyaW5nKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgMClcbiAgICAgICAgbGV0IHN0cmluZ19lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX0VORCwgZGF0YSwgMClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvcHRpb25cbiAgICAgKiAvPG9wdGlvbj5cbiAgICAgKlxuICAgICAqIHNvIGZvciBpbnN0YW5jZSBmb3IgL0hpZ2hsaWdodCBpdCB3b3VsZCByZXR1cm4gJ0hpZ2hsaWdodCdcbiAgICAgKlxuICAgICAqIFRoZSBpbmRleCBtdXN0IHBvaW50IHRvIHRoZSBcIi9cIlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T3B0aW9uVmFsdWUoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChkYXRhW2luZGV4XSAhPT0gNDcpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIm1pc3BsYWNlZCBvcHRpb24gdmFsdWUgcG9pbnRlclwiKVxuXG4gICAgICAgIGxldCBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBpbmRleCArIDEpXG5cbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcoQXJyYXkuZnJvbShkYXRhLnNsaWNlKGluZGV4ICsgMSwgZW5kICsgMSkpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zICd1bmRlZmluZWQnIGlmIHRoaXMgZmllbGQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0RmllbGQoZGF0YTogVWludDhBcnJheSwgZmllbGQ6IG51bWJlcltdLCBwdHI6IG51bWJlciA9IDApOiBhbnkge1xuICAgICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaWVsZHMgb2Ygb25lIG9iamVjdFxuICAgICAgICBsZXQgc3RhcnRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIGRhdGEsIHB0ciwgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgc3RhcnRfb2JqX3B0ciwgdHJ1ZSlcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydF9vYmpfcHRyLCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgZmllbGRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShmaWVsZCwgZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBpZiAoZmllbGRfcHRyID09PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBmaWVsZF9wdHIgKz0gZmllbGQubGVuZ3RoXG5cbiAgICAgICAgLy8gaGFuZGxlIGNhc2UgdGhhdCB0aGVyZSBpcyBhbiBvcHRpb24gdmFsdWUgLzx2YWx1ZT4gYWZ0ZXIgdGhlIGZpZWxkIC88ZmllbGQ+XG4gICAgICAgIGxldCBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBpZiAoZGF0YVtmaWVsZF92YWx1ZV9lbmRfcHRyIC0gMV0gPT09IDQ3KSB7IC8vIDQ3ID0gJy8nXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0T3B0aW9uVmFsdWUoZGF0YSwgZmllbGRfdmFsdWVfZW5kX3B0ciAtIDEpXG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShbNDddLCBkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgZmllbGRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBsZXQgdmFsdWVfZGF0YSA9IGRhdGEuc2xpY2UoZmllbGRfcHRyLCBmaWVsZF92YWx1ZV9lbmRfcHRyKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXlcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0QXJyYXkodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RTdHJpbmcodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vIFJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgUmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyKHZhbHVlX2RhdGEsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBhc2NpaSBlbmNvZGVkIG51bWJlciBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcihkYXRhOiBVaW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuXG4gICAgICAgIGlmICgtMSA9PSBlbmQpIHtcbiAgICAgICAgICAgIGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IGlkZW50aWZ5IG51bWJlciBib3VuZHM6IFske3N0YXJ0fSwke2VuZH1dYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJfaWQgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFwiXCIgPT09IHN0cl9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBwYXJzZSBudW1iZXIgYXQgcG9zaXRpb24gJHtzdGFydH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICtzdHJfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhcyBhcmd1bWVudCBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZCByZXR1cm5zIHRob3NlIHR5cGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2U6IFVpbnQ4QXJyYXkpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICBsZXQgcmVmczogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgd2hpbGUgKGkgPCBhcnJheV9zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZnMucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChhcnJheV9zZXF1ZW5jZSwgaSkpXG4gICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlIsIGFycmF5X3NlcXVlbmNlLCBpLCB0cnVlKSArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgaW50byBQREYgZm9ybWF0dGluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGF0ZVRvUERGRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGVfc3RyID0gXCIoRDpcIlxuICAgICAgICBkYXRlX3N0ciArPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgbGV0IG1vbnRoOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1vbnRoLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1vbnRoXG4gICAgICAgIGxldCBkYXk6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGRheS5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBkYXlcbiAgICAgICAgbGV0IGhvdXJzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoaG91cnMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgaG91cnNcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbWludXRlc1xuICAgICAgICBsZXQgc2Vjb25kczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoc2Vjb25kcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmRzXG4gICAgICAgIHJldHVybiBkYXRlX3N0ciArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1bmljb2RlIHNlcXVlbmNlIGludG8gYSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFVuaWNvZGVUb1N0cmluZyh2YWw6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICAgICAgICAgIHZhbCA9IG5ldyBVaW50OEFycmF5KHZhbClcblxuICAgICAgICBpZiAodmFsWzBdID09PSAyNTQgJiYgdmFsWzFdID09PSAyNTUpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgyLCB2YWwubGVuZ3RoKVxuXG4gICAgICAgICAgICBsZXQgdWludFRvU3RyaW5nID0gKHVpbnRBcnJheTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpbnRBcnJheS5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHVpbnRBcnJheVtpXSA8PCA4KSB8IHVpbnRBcnJheVtpICsgMV0gJiAweEZGKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJldCA9IHVpbnRUb1N0cmluZyh2YWwpXG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdXRmLTggY29tcHJlc3Npb25cbiAgICAgICAgbGV0IFV0ZjhBcnJheVRvU3RyID0gKGFycmF5OiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcjEgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyMSA+PiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiBjYXNlIDI6IGNhc2UgMzogY2FzZSA0OiBjYXNlIDU6IGNhc2UgNjogY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lIGJ5dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDFGKSA8PCA2KSB8IChjaGFyMiAmIDB4M0YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocmVlIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIzID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjaGFyMSAmIDB4MEYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMiAmIDB4M0YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGNoYXIzICYgMHgzRikgPDwgMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldCA9IFV0ZjhBcnJheVRvU3RyKEFycmF5LmZyb20odmFsKSlcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEFzY2lpVG9TdHJpbmcodmFsOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IFwiXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEgbnVtYmVyIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGl0cyBjaGFyIHJlcHJlc2VudGF0aW9uc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkobmJyOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFN0cmluZyhuYnIpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UsIFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBXcml0ZXJVdGlsIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSByZWZlcmVuY2UgcG9pbnRlclxuICAgICAqXG4gICAgICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAgICAgKlxuICAgICAqIFRoZSAnUicgYW5kIHRoZSBwcmVjZWRpbmcgc3BhY2UgaXMgb25seSB3cml0dGVuIGluIGNhc2UgJ3JlZmVyZW5jZWQnIGlzIHRydWVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZjogUmVmZXJlbmNlUG9pbnRlciwgcmVmZXJlbmNlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5vYmopXG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5nZW5lcmF0aW9uKSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKC4uLlV0aWwuUilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHByZWNlZGluZyB6ZXJvcyAoMCkgaW4gZnJvbnQgb2YgdGhlICd2YWx1ZScgdG8gbWF0Y2ggdGhlIGxlbmd0aFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBwYWQobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQucHVzaCg0OClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodmFsdWUpKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBuZXN0ZWQgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTmVzdGVkTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IHN1YkFycmF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShzdWJBcnJheSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBqYXZhc2NyaXB0IG51bWJlciBhcnJheSB0byBhIFBERiBudW1iZXIgYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVOdW1iZXJBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IGkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHRoZSAvQW5ub3RzIGZpZWxkIGluIGFuIHBhZ2Ugb2JqZWN0XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZUFubm90c0ZpZWxkSW5QYWdlT2JqZWN0KGRhdGE6IFVpbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG4gICAgICAgICAgICBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwuc2tpcERlbGltaXRlcihjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzX2FycmF5X2VuZClcblxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2Fubm90c19hcnJheV9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwdHJfZGljdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5ESUNUX0VORCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGggLSAxLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2RpY3RfZW5kKSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9kaWN0X2VuZCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGgpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuQ1IpXG4gICAgICAgIHJldC5wdXNoKFV0aWwuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSdcbmltcG9ydCB7IFdyaXRlclV0aWwgfSBmcm9tICcuL3dyaXRlci11dGlsJ1xuXG4vKipcbiAqIENyZWF0cyB0aGUgYnl0ZSBhcnJheSB0aGF0IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTjogbnVtYmVyID0gMTEwXG4gICAgcHVibGljIHN0YXRpYyBGOiBudW1iZXIgPSAxMDJcblxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXIgPSA5MVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXIgPSA5M1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXVxuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml1cbiAgICBwdWJsaWMgc3RhdGljIFRZUEVfQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMSwgV3JpdGVyLlNQQUNFLCA0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBVUERBVEVfREFURTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyA9ICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIEFVVEhPUjogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyA9ICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL0NvbnRlbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9TVEFSVDogbnVtYmVyID0gNDBcbiAgICBwdWJsaWMgc3RhdGljIEJSQUNLRVRfRU5EOiBudW1iZXIgPSA0MVxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyA9ICcvRidcbiAgICBwdWJsaWMgc3RhdGljIElEOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyA9ICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBDT0xPUjogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyA9ICcvQydcbiAgICBwdWJsaWMgc3RhdGljIE9QQUNJVFk6IG51bWJlcltdID0gWzQ3LCA2NywgNjVdIC8vID0gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gPSAnL0JvcmRlcidcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VfUkVGRVJFTkNFOiBudW1iZXJbXSA9IFs0NywgODBdIC8vID0gJy9QJ1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUFBFQVJBTkNFOiBudW1iZXJbXSA9IFs0NywgNjgsIDY1XSAvLyA9ICcvREEnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gPSAnL0lua0xpc3QnXG5cbiAgICBwdWJsaWMgc3RhdGljIFRSQUlMRVI6IG51bWJlcltdID0gWzExNiwgMTE0LCA5NywgMTA1LCAxMDgsIDEwMSwgMTE0XSAvLyA9ICd0cmFpbGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyA9ICcvU2l6ZSdcbiAgICBwdWJsaWMgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gPSAnL1Jvb3QnXG4gICAgcHVibGljIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vID0nL1ByZXYnXG4gICAgcHVibGljIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU9GOiBudW1iZXJbXSA9IFszNywgMzcsIDY5LCA3OSwgNzBdIC8vID0gJyUlRU9GJ1xuXG4gICAgcHVibGljIHN0YXRpYyBYUkVGOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICBwdWJsaWMgc3RhdGljIFFVQURQT0lOVFM6IG51bWJlcltdID0gWzQ3LCA4MSwgMTE3LCA5NywgMTAwLCA4MCwgMTExLCAxMDUsIDExMCwgMTE2LCAxMTVdIC8vID0gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgVkVSVElDRVM6IG51bWJlcltdID0gWzQ3LCA4NiwgMTAxLCAxMTQsIDExNiwgMTA1LCA5OSwgMTAxLCAxMTVdIC8vID0gJy9WZXJ0aWNlcydcbiAgICBwdWJsaWMgc3RhdGljIE5BTUU6IG51bWJlcltdID0gWzQ3LCA3OCwgOTcsIDEwOSwgMTAxXSAvLyA9ICcvTmFtZSdcbiAgICBwdWJsaWMgc3RhdGljIERSQUZUOiBudW1iZXJbXSA9IFs0NywgNjgsIDExNCwgOTcsIDEwMiwgMTE2XSAvLyA9ICcvRHJhZnQnXG5cbiAgICBwdWJsaWMgc3RhdGljIFNZOiBudW1iZXJbXSA9IFs0NywgODMsIDEyMV0gLy8gPSAnL1N5J1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyID0gODBcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgeHJlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBkYXRhIDogVGhlIGRhdGEgcmVwcmVzZW50aW5nIHRoZSBvcmlnaW5hbCBQREYgZG9jdW1lbnRcbiAgICAgKiBhYW5ub3RhdGlvbnMgOiBUaGUgYW5ub3RhdGlvbnMgdG8gYWRkIHRvIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5LCBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSwgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGFubm90YXRpb25zIHBhZ2V3aXNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIGFubm90YXRpb24gYXJyYXlzIG9mIHRoZSBzaXRlcyBtdXN0IGJlIGV4dGVuZGVkXG4gICAgICogYW5kIGl0IG1ha2VzIHNlbnNlIHRvIGRvIHRoaXMgdXBkYXRlIGluIG9uZSBzdGVwLlxuICAgICAqICovXG4gICAgc29ydFBhZ2VXaXNlKGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10pOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSB7XG4gICAgICAgIGxldCBwYWdlQW5ub3RzOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghcGFnZUFubm90c1thbm5vdC5wYWdlXSlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdID0gW11cblxuICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXS5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VBbm5vdHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCByZXR1cm5zIHRoZSBwYWdlIG9iamVjdCBlaXRoZXIgZXh0ZW5kZWQgYnkgYSAvQW5ub3RzIGZpZWxkLCBpZiB0aGlzIGRpZCBub3QgZXhpc3QgeWV0IG9yIHdpdGggdGhlIGFubm90cyBmaWVsZCByZXBsYWNlZCBieSBhIHJlcmZlcmVuY2UgcG9pbnRlclxuICAgICAqIHRvIGFuIGFycmF5IGlmIHRoZSBwYWdlIG9iamVjdCBjb250YWlucyB0aGUgbGlzdCBvZiBhbm5vdGF0aW9ucyBkaXJlY3RseVxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBhZGFwdFBhZ2VPYmplY3QocGFnZTogUGFnZSwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuICAgICAgICBsZXQgbG9va3VwVGFibGUgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlX3B0cjogWFJlZiA9IGxvb2t1cFRhYmxlW3BhZ2Uub2JqZWN0X2lkLm9ial1cblxuICAgICAgICByZXR1cm4gV3JpdGVyVXRpbC5yZXBsYWNlQW5ub3RzRmllbGRJblBhZ2VPYmplY3QodGhpcy5kYXRhLCBwYWdlLCBwYWdlX3B0ci5wb2ludGVyLCBhbm5vdF9hcnJheV9yZWZlcmVuY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIGFubm90YXRpb25zIG9mID4+b25lPDwgcGFnZSBhbmQgZGVyaXZlcyB0aGUgYW5ub3RhdGlvbnMgYXJyYXkgZnJvbSBpdC5cbiAgICAgKiBUaGVyZWJ5IGl0IGFsc28gY29uc2lkZXJzIHRoZSBwb3RlbnRpYWxseSBleGlzdGluZyBhbm5vdGF0aW9uIGFycmF5LlxuICAgICAqXG4gICAgICogdG9EZWxldGUgOj0gY29udGFpbnMgdGhvc2UgYW5ub3RhdGlvbnMgdGhhdCBtdXN0IGJlIGRlbGV0ZWQuIEl0IHJlbW92ZXMgdGhlbSBmcm9tIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgKiBhbmQgbWFya3MgdGhlbSBhcyByZW1vdmVkXG4gICAgICogKi9cbiAgICB3cml0ZUFubm90QXJyYXkoYW5ub3RzOiBBbm5vdGF0aW9uW10sIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10sIHBhZ2VSZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIsIHBhZ2VEYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBhbm5vdHNbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF4Lm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb24gd2l0aCBvYmplY3RfaWQgbnVsbFwiKVxuXG4gICAgICAgICAgICByZXR1cm4geC5vYmplY3RfaWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcGFnZV9kYXRhOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGlmICghcmVmQXJyYXlfaWQpIHtcbiAgICAgICAgICAgIHJlZkFycmF5X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmcmVlT2JqZWN0SWQ6ICR7SlNPTi5zdHJpbmdpZnkocmVmQXJyYXlfaWQpfWApXG4gICAgICAgICAgICBwYWdlX2RhdGEgPSB0aGlzLmFkYXB0UGFnZU9iamVjdChwYWdlLCByZWZBcnJheV9pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmQXJyYXlfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9TVEFSVClcblxuXG4gICAgICAgIGZvciAobGV0IGFuIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW4sIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiByZWZBcnJheV9pZCwgZGF0YTogcmV0LCBwYWdlUmVmZXJlbmNlOiBwYWdlLm9iamVjdF9pZCwgcGFnZURhdGE6IHBhZ2VfZGF0YSB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdWJ0eXBlIHRvIGl0cyBieXRlIHJlcHJlc2VudGF0aW9uXG4gICAgICogKi9cbiAgICBjb252ZXJ0U3VidHlwZShzdDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICBzd2l0Y2ggKHN0KSB7XG4gICAgICAgICAgICBjYXNlICdUZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJy9UZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL1RleHQnXG4gICAgICAgICAgICBjYXNlICdIaWdobGlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnL0hpZ2hsaWdodCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzIsIDEwNSwgMTAzLCAxMDQsIDEwOCwgMTA1LCAxMDMsIDEwNCwgMTE2XSAvLyA9ICcvSGlnaGxpZ2h0J1xuICAgICAgICAgICAgY2FzZSAnVW5kZXJsaW5lJzpcbiAgICAgICAgICAgIGNhc2UgJy9VbmRlcmxpbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg1LCAxMTAsIDEwMCwgMTAxLCAxMTQsIDEwOCwgMTA1LCAxMTAsIDEwMV0gLy8gPSAnL1VuZGVybGluZSdcbiAgICAgICAgICAgIGNhc2UgJ1NxdWlnZ2x5JzpcbiAgICAgICAgICAgIGNhc2UgJy9TcXVpZ2dseSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExMywgMTE3LCAxMDUsIDEwMywgMTAzLCAxMDgsIDEyMV0gLy8gPSAnL1NxdWlnZ2x5J1xuICAgICAgICAgICAgY2FzZSAnU3RyaWtlT3V0JzpcbiAgICAgICAgICAgIGNhc2UgJy9TdHJpa2VPdXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTYsIDExNCwgMTA1LCAxMDcsIDEwMSwgNzksIDExNywgMTE2XSAvLyA9ICcvU3RyaWtlT3V0J1xuICAgICAgICAgICAgY2FzZSAnU3F1YXJlJzpcbiAgICAgICAgICAgIGNhc2UgJy9TcXVhcmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgOTcsIDExNCwgMTAxXSAvLyA9ICcvU3F1YXJlJ1xuICAgICAgICAgICAgY2FzZSAnQ2lyY2xlJzpcbiAgICAgICAgICAgIGNhc2UgJy9DaXJjbGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDY3LCAxMDUsIDExNCwgOTksIDEwOCwgMTAxXSAvLyA9ICcvQ2lyY2xlJ1xuICAgICAgICAgICAgY2FzZSAnRnJlZVRleHQnOlxuICAgICAgICAgICAgY2FzZSAnL0ZyZWVUZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MCwgMTE0LCAxMDEsIDEwMSwgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9GcmVlVGV4dCdcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgY2FzZSAnL1BvbHlnb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCAxMDMsIDExMSwgMTEwXSAvLyA9ICcvUG9seWdvbidcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlMaW5lJzpcbiAgICAgICAgICAgIGNhc2UgJy9Qb2x5TGluZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODAsIDExMSwgMTA4LCAxMjEsIDc2LCAxMDUsIDExMCwgMTAxXSAvLyAnL1BvbHlMaW5lXG4gICAgICAgICAgICBjYXNlICdTdGFtcCc6XG4gICAgICAgICAgICBjYXNlICcvU3RhbXAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTYsIDk3LCAxMDksIDExMl0gLy8gPSAnL1N0YW1wJ1xuICAgICAgICAgICAgY2FzZSAnQ2FyZXQnOlxuICAgICAgICAgICAgY2FzZSAnL0NhcmV0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgOTcsIDExNCwgMTAxLCAxMTZdIC8vID0gJy9DYXJldCdcbiAgICAgICAgICAgIGNhc2UgJ0luayc6XG4gICAgICAgICAgICBjYXNlICcvSW5rJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MywgMTEwLCAxMDddIC8vID0gJy9JbmsnXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYW4gYW5ub3RhdGlvbiBvYmplY3RcbiAgICAgKiAqL1xuICAgIHdyaXRlQW5ub3RhdGlvbk9iamVjdChhbm5vdDogQW5ub3RhdGlvbik6IHsgcHRyOiBSZWZlcmVuY2VQb2ludGVyLCBkYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgaWYgKCFhbm5vdC5hdXRob3IpXG4gICAgICAgICAgICBhbm5vdC5hdXRob3IgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhbm5vdC5jb250ZW50cylcbiAgICAgICAgICAgIGFubm90LmNvbnRlbnRzID0gXCJcIlxuXG4gICAgICAgIGlmICghYW5ub3Qub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBvYmplY3RfaWRcIilcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90Lm9iamVjdF9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVFlQRV9BTk5PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5yZWN0ICYmIGFubm90LnJlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUkVDVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KGFubm90LnJlY3QpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1VCVFlQRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KHRoaXMuY29udmVydFN1YnR5cGUoYW5ub3QudHlwZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5VUERBVEVfREFURSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QudXBkYXRlRGF0ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5BVVRIT1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5hdXRob3IpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QuY29udGVudHMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkNPTlRFTlRTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuY29udGVudHMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSUQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmlkKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5hbm5vdGF0aW9uX2ZsYWcpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkZMQUcpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGFubm90LmFubm90YXRpb25fZmxhZykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5yID4gMSkgYW5ub3QuY29sb3IuciAvPSAyNTVcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5nID4gMSkgYW5ub3QuY29sb3IuZyAvPSAyNTVcbiAgICAgICAgICAgIGlmIChhbm5vdC5jb2xvci5iID4gMSkgYW5ub3QuY29sb3IuYiAvPSAyNTVcblxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09MT1IpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuY29sb3IuciwgYW5ub3QuY29sb3IuZywgYW5ub3QuY29sb3IuYl0pKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgb3BhY2l0eSA9IGFubm90Lm9wYWNpdHlcbiAgICAgICAgaWYgKG9wYWNpdHkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9QQUNJVFkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KG9wYWNpdHkpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmJvcmRlcikge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQk9SREVSKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmJvcmRlci5ob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci52ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIuYm9yZGVyX3dpZHRoXSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuZGVmYXVsdEFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRFRkFVTFRfQVBQRUFSQU5DRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmRlZmF1bHRBcHBlYXJhbmNlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5ub3QucGFnZVJlZmVyZW5jZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlBBR0VfUkVGRVJFTkNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5wYWdlUmVmZXJlbmNlLm9iamVjdF9pZCwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QucXVhZFBvaW50cykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUVVBRFBPSU5UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KGFubm90LnF1YWRQb2ludHMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnZlcnRpY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5WRVJUSUNFUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KGFubm90LnZlcnRpY2VzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5zdGFtcFR5cGUpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk5BTUUpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5EUkFGVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5jYXJldFN5bWJvbCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1kpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuUClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5pbmtMaXN0KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5JTktMSVNUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTmVzdGVkTnVtYmVyQXJyYXkoYW5ub3QuaW5rTGlzdCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogYW5ub3Qub2JqZWN0X2lkLCBkYXRhOiByZXQgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIGFsbCB0aGUgY3Jvc3Mgc2l0ZSByZWZlcmVuY2UgdGFibGUgZW50cmllcyBhbmQgZXh0cmFjdHMgdGhlIGNvbnNlY3V0aXZlIHNlcXVlbmNlc1xuICAgICAqICovXG4gICAgY29tcHV0ZVhyZWZTZXF1ZW5jZXMoKTogWFJlZltdW10ge1xuICAgICAgICBsZXQgc2VxczogWFJlZltdW10gPSBbXVxuXG4gICAgICAgIGxldCBvcmRlcmVkX3hyZWZzID0gdGhpcy54cmVmcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5pZCA8IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICBpZiAoYS5pZCA+IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHNlcTogWFJlZltdID0gW29yZGVyZWRfeHJlZnNbMF1dXG4gICAgICAgIGxldCBsYXN0X2lkID0gb3JkZXJlZF94cmVmc1swXS5pZFxuICAgICAgICBzZXFzLnB1c2goc2VxKVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9yZGVyZWRfeHJlZnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChvcmRlcmVkX3hyZWZzW2ldLmlkID09PSBsYXN0X2lkICsgMSkge1xuICAgICAgICAgICAgICAgIHNlcS5wdXNoKG9yZGVyZWRfeHJlZnNbaV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlcSA9IFtvcmRlcmVkX3hyZWZzW2ldXVxuICAgICAgICAgICAgICAgIHNlcXMucHVzaChzZXEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0X2lkID0gb3JkZXJlZF94cmVmc1tpXS5pZFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlcXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIHRoZSBwb2ludGVycyBvZiB0aGUgbGlua2VkIGxpc3QgdGhhdCBjb250YWlucyB0aGUgaWRzIG9mIGZyZWVkIG9iamVjdHNcbiAgICAgKiAqL1xuICAgIGFwcGx5T2JqZWN0RnJlZWluZyhyZWZzOiBYUmVmW10pOiBYUmVmW10ge1xuICAgICAgICAvLyB3cml0ZSBmcmVlIG9iamVjdCBoZWFkXG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClbMF1cbiAgICAgICAgbGV0IGxhc3RfZnJlZWRfb2JqZWN0X2lkID0gaGVhZC5pZFxuXG4gICAgICAgIGxldCBmcmVlZF9vYmpzOiBYUmVmW10gPSByZWZzLmZpbHRlcihyID0+IHIuZnJlZSlcbiAgICAgICAgZnJlZWRfb2JqcyA9IGZyZWVkX29ianMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaWQgPCBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKGEuaWQgPiBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBsYXN0b2JqOiBYUmVmIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiBmcmVlZF9vYmpzKSB7XG4gICAgICAgICAgICBpZiAoIWxhc3RvYmopIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgZmlyc3Qgb2JqZWN0IGFzIGxpc3QgaGVhZGVyXG4gICAgICAgICAgICAgICAgaGVhZC5wb2ludGVyID0gb2JqLmlkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXN0b2JqKSB7XG4gICAgICAgICAgICAgICAgbGFzdG9iai5wb2ludGVyID0gb2JqLmlkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RvYmogPSBvYmpcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmVlZF9vYmpzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBmcmVlZF9vYmpzW2ZyZWVkX29ianMubGVuZ3RoIC0gMV0ucG9pbnRlciA9IGxhc3RfZnJlZWRfb2JqZWN0X2lkXG5cbiAgICAgICAgcmVmcy5wdXNoKGhlYWQpXG5cbiAgICAgICAgcmV0dXJuIHJlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAqICovXG4gICAgd3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSgpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyLlhSRUZcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgdGhpcy54cmVmcyA9IHRoaXMuYXBwbHlPYmplY3RGcmVlaW5nKHRoaXMueHJlZnMpXG5cbiAgICAgICAgbGV0IG9yZGVyZWRfc2VxdWVuY2VzID0gdGhpcy5jb21wdXRlWHJlZlNlcXVlbmNlcygpXG5cbiAgICAgICAgZm9yIChsZXQgc2VxdWVuY2Ugb2Ygb3JkZXJlZF9zZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gc2VxdWVuY2VbMF1cbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaGVhZC5pZCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHNlcXVlbmNlLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3JldDogbnVtYmVyW10gPSBbXVxuICAgICAgICAgICAgICAgIF9yZXQgPSBfcmV0LmNvbmNhdChXcml0ZXJVdGlsLnBhZCgxMCwgc2VxdWVuY2VbaV0ucG9pbnRlcikpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQoV3JpdGVyVXRpbC5wYWQoNSwgc2VxdWVuY2VbaV0uZ2VuZXJhdGlvbikpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS5mcmVlKVxuICAgICAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkYpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2VbaV0udXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLk4pXG5cbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgICAgICAgICBpZiAoX3JldC5sZW5ndGggPCAyMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJYUmVmIGVudHJ5IDwgMjAgYnl0ZXNcIilcblxuICAgICAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoX3JldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIHRyYWlsZXJcbiAgICAgKiAqL1xuICAgIHdyaXRlVHJhaWxlcihwb3NYcmVmOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyLlRSQUlMRVJcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU0laRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS50cmFpbGVyU2l6ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBsZXQgdHJhaWxlciA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlJPT1QpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcih0cmFpbGVyLnJvb3QsIHRydWUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUFJFVilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS5zdGFydF9wb2ludGVyKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuU1RBUlRYUkVGKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHBvc1hyZWYpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU9GKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBhbm5hdGlvbnMgYXQgdGhlIGVuZCBvZiB0aGUgUERGIGJ5dGUgcmVwcmVzZW50YXRpb24gYW5kIHJldHVybnNcbiAgICAgKiB0aGUgYnl0ZSBhcnJheVxuICAgICAqICovXG4gICAgd3JpdGUoKTogVWludDhBcnJheSB7XG4gICAgICAgIGxldCBwYWdlV2lzZVNvcnRlZCA9IHRoaXMuc29ydFBhZ2VXaXNlKHRoaXMuYW5ub3RhdGlvbnMpXG5cbiAgICAgICAgbGV0IHB0cjogbnVtYmVyID0gdGhpcy5kYXRhLmxlbmd0aFxuXG4gICAgICAgIGxldCBuZXdfZGF0YTogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIC8vIEZpeCBjYXNlIHRoYXQgdGhlcmUgaXMgbm8gbGluZWJyZWFrIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuZGF0YVtwdHIgLSAxXSA9PT0gNzApIHtcbiAgICAgICAgICAgIG5ld19kYXRhLnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuTEYpXG4gICAgICAgICAgICBwdHIgKz0gMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkKSB7XG4gICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IHBhZ2VXaXNlU29ydGVkW2tleV1cblxuICAgICAgICAgICAgLy8gd3JpdGUgdGhlIGFycmF5IHJlZmVyZW5jaW5nIHRvIGFubm90YXRpb25zIG9mIGEgY2VydGFpbiBwYWdlXG4gICAgICAgICAgICAvLyBpdCBhbHNvIHJlbW92ZXMgcmVmZXJlbmNlcyBvZiBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZFxuICAgICAgICAgICAgbGV0IGFubm90X2FycmF5ID0gdGhpcy53cml0ZUFubm90QXJyYXkocGFnZUFubm90cywgdGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHMgLS0gSW4gdGhlIGNhc2UgdGhlIHBhZ2UgaGFkIG5vIGFubm90YXRpb24geWV0IHRoZXJlIGV4aXN0c1xuICAgICAgICAgICAgLy8gbm8gc3VjaCBhcnJheSByZWZlcnJpbmcgdG8gaXRzIGFubm90YXRpb25zLiBBIHBvaW50ZXIgdG8gc3VjaCBhbiBhcnJheSBhcnJheSBtdXN0IGJlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgLy8gcGFnZSBvYmplY3QuIElmIHRoaXMgd2FzIGRvbmUgdGhlIGBwYWdlRGF0YWAgcGFyYW1hdGVyIGlzIHNldCBhbmQgY29udGFpbnMgdGhlIGFkYXB0ZWQgcGFnZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2Uub2JqLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2UuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZXMgdGhlIGFjdHVhbCBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgcGFnZUFubm90cykge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdF9vYmogPSB0aGlzLndyaXRlQW5ub3RhdGlvbk9iamVjdChhbm5vdClcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3Rfb2JqLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3Rfb2JqLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGFubm90X29iai5kYXRhKVxuICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9vYmouZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRha2UgYWxsIGFubm90YXRpb25zIHRoYXQgYXJlIG5vdCBkZWxldGVkIHlldFxuICAgICAgICBsZXQgX3RvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSB0aGlzLnRvRGVsZXRlLmZpbHRlcigodCkgPT4gIXQuaXNfZGVsZXRlZClcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkVG9EZWxldGUgPSB0aGlzLnNvcnRQYWdlV2lzZShfdG9EZWxldGUpXG5cbiAgICAgICAgLy8gYWRhcHQgdGhlIHJlbWFpbmluZyBhbm5vdGF0aW9uIHJlZmVyZW5jZSB0YWJsZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkVG9EZWxldGUpIHtcbiAgICAgICAgICAgIGxldCBkZWxfZGF0YSA9IHRoaXMudXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheShwYWdlV2lzZVNvcnRlZFRvRGVsZXRlW2tleV0pXG4gICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBkZWxfZGF0YS5wdHIub2JqLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBkZWxfZGF0YS5wdHIuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGRlbF9kYXRhLmRhdGEpXG4gICAgICAgICAgICBwdHIgKz0gZGVsX2RhdGEuZGF0YS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgYWxsIHJlZmVyZW5jZXMgdG8gYW5ub3RhdGlvbiBvYmplY3RzIGluIHBhZ2VzIHNob3VsZCBiZSByZW1vdmVkIGFuZCB3ZSBjYW4gZnJlZVxuICAgICAgICAvLyB0aGUgYW5ub3RhdGlvbiBvYmplY3QgaWRzXG4gICAgICAgIGZvciAobGV0IHRvRGVsIG9mIHRoaXMudG9EZWxldGUpIHtcbiAgICAgICAgICAgIGlmICghdG9EZWwub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRvRGVsLm9iamVjdF9pZC5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogLTEsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogdG9EZWwub2JqZWN0X2lkLmdlbmVyYXRpb24gKyAxLCAvLyBpbmNyZWFzZSBnZW5lcmF0aW9uXG4gICAgICAgICAgICAgICAgZnJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNydGFibGUgPSB0aGlzLndyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy53cml0ZVRyYWlsZXIocHRyKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdCh0cmFpbGVyKVxuXG4gICAgICAgIGxldCBuZXdfZGF0YV9hcnJheSA9IG5ldyBVaW50OEFycmF5KG5ld19kYXRhKVxuXG4gICAgICAgIGxldCByZXRfYXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEubGVuZ3RoICsgbmV3X2RhdGFfYXJyYXkubGVuZ3RoKVxuICAgICAgICByZXRfYXJyYXkuc2V0KHRoaXMuZGF0YSlcbiAgICAgICAgcmV0X2FycmF5LnNldChuZXdfZGF0YSwgdGhpcy5kYXRhLmxlbmd0aClcblxuICAgICAgICByZXR1cm4gcmV0X2FycmF5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgdXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheSh0b0RlbGV0ZTogQW5ub3RhdGlvbltdKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBsZXQgcGFnZSA9IHRvRGVsZXRlWzBdLnBhZ2VSZWZlcmVuY2VcblxuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbm5vdGF0aW9uIHJlZmVyZW5jZXMgZnJvbSB0aGUgYXJyYXkgdGhhdCBtdXN0IGJlIGRlbGV0ZWQgYW5kIG1hcmsgdGhlbSBhcyBkZWxldGVkXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmZpbHRlcigoYTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9EZWwgPSB0b0RlbGV0ZS5maW5kKCh0KSA9PiAoPGFueT50Lm9iamVjdF9pZCkub2JqID09PSBhLm9iaiAmJiAoPGFueT50Lm9iamVjdF9pZCkuZ2VuZXJhdGlvbiA9PT0gYS5nZW5lcmF0aW9uKVxuXG4gICAgICAgICAgICBpZiAodG9EZWwpIHtcbiAgICAgICAgICAgICAgICB0b0RlbC5pc19kZWxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCByZWZBcnJheV9pZDogYW55ID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=