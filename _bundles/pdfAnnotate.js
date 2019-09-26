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
exports.UpdateSection = UpdateSection;
UpdateSection.SIZE = [47, 83, 105, 122, 101]; // /Size
UpdateSection.ROOT = [47, 82, 111, 111, 116]; // /Root
UpdateSection.PREV = [47, 80, 114, 101, 118]; // /Prev
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
        // Handle cross reference table
        if (util_1.Util.areArraysEqual(this.data.slice(ptr, ptr + util_1.Util.XREF.length), util_1.Util.XREF)) {
            this.extractUpdateSection(ptr);
        }
        else { // handle cross reference stream object
            console.log("Cross reference stream object");
        }
    }
    /**
     * Extracts the entire update sections
     *
     * Needs to adapt depending whether the document uses a cross-reference table or a cross-reference stream object
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
            if (!free_header.free) {
                // handle the case of an incosistent xref
                return { obj: this.trailerSize++, generation: 0, reused: false };
            }
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
        this.version = undefined;
        this.documentHistory = new document_history_1.DocumentHistory(new Uint8Array([]));
        this.data = new Uint8Array(data);
        this.documentHistory = new document_history_1.DocumentHistory(this.data);
        this.documentHistory.extractDocumentHistory();
    }
    /**
     * Returns the major and minor version of the pdf document
     * */
    getPDFVersion() {
        if (this.version)
            return this.version;
        let ptr_version_start = util_1.Util.locateSequence(util_1.Util.VERSION, this.data) + util_1.Util.VERSION.length;
        let ptr_delimiter = util_1.Util.locateSequence([util_1.Util.DOT], this.data, ptr_version_start);
        let major_version = util_1.Util.extractNumber(this.data, ptr_version_start, ptr_delimiter);
        let ptr_end = util_1.Util.locateDelimiter(this.data, ptr_delimiter);
        let minor_version = util_1.Util.extractNumber(this.data, ptr_delimiter + 1, ptr_end);
        this.version = { major: major_version, minor: minor_version };
        return this.version;
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
        if (arraySeq instanceof Uint8Array) {
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
    /**
     * takes two arrays and checks their equality
     * */
    static areArraysEqual(array_one, array_two) {
        if (array_one.length !== array_two.length)
            return false;
        for (let i = 0; i < array_one.length; ++i) {
            if (array_one[i] !== array_two[i])
                return false;
        }
        return true;
    }
}
exports.Util = Util;
Util.VERSION = [37, 80, 68, 70, 45]; // %PDF-
Util.DOT = 46;
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
Util.XREF = [120, 114, 101, 102]; // = 'xref'


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
exports.Writer = Writer;
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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dW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGRmQW5ub3RhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIsIFBERkRvY3VtZW50UGFyc2VyLCBQYWdlLCBBbm5vdGF0aW9uLCBCb3JkZXIsIENvbG9yIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgV3JpdGVyIH0gZnJvbSAnLi93cml0ZXInXG5cbi8qKlxuICogVGhlIGFubm90YXRpb24gZmFjdG9yeSBwcm92aWRlcyBtZXRob2RzIHRvIGNyZWF0ZSBhbm5vdGF0aW9ucy4gVGhvc2UgYXJlIHN0b3JlZCB0ZW1wb3JhcnlcbiAqIGFuZCB0aGFuIGVuY29kZWQgaW50byBQREYgY29kZSB3aGVuIHRoZSBQREYgZG9jdW1lbnQgaXMgb3V0cHV0dGVkIGFuZCBmb3IgaW5zdGFuY2UgZG93bmxvYWRlZC5cbiAqIFRoYXRcbiAqICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkZhY3Rvcnkge1xuICAgIHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgICAgICB0aGlzLnBhcnNlciA9IG5ldyBQREZEb2N1bWVudFBhcnNlcih0aGlzLmRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGFubm90YXRpb25zIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgUERGIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRBbm5vdGF0aW9uQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIFBERiBmaWxlIHJlZmVyZW5jZWQgYnkgdGhlIGdpdmVuICdwYXRoJ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFubm90YXRpb25GYWN0b3J5PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAvLyBicm93c2VyIGVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgZmV0Y2gocGF0aCkudGhlbigocikgPT4gci5ibG9iKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlcjogYW55ID0gbmV3IEZpbGVSZWFkZXIoKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBBbm5vdGF0aW9uRmFjdG9yeShyZWFkZXIucmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgeyAvLyBub2RlIGVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb3QgeWV0IGltcGxlbWVudGVkXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVW5zdXBwb3J0ZWQgZW52aXJvbm1lbnRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWRlbnRpZmllciBuZWNlc3NhcnkgZm9yIGNyZWF0aW5nIHRoZSBhbm5vdGF0aW9uXG4gICAgICogKi9cbiAgICBwcml2YXRlIGdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIFwiKHBkZkFubm90YXRlLVwiICsgVXRpbC5jb252ZXJ0RGF0ZVRvUERGRGF0ZShuZXcgRGF0ZSgpKS5zbGljZSgzLCAxNykgKyBcIi1cIiArIHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoICsgXCIpXCJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBkZWZhdWx0IGJvcmRlclxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0Qm9yZGVyKCk6IEJvcmRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbF9jb3JuZXJfcmFkaXVzOiAwLFxuICAgICAgICAgICAgaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyX3dpZHRoOiAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIG1hZGUgYW5ub3RhdGlvbnMgaW50byBhIGJ5dGVzdHJlYW1cbiAgICAgKiAqL1xuICAgIHdyaXRlKCk6IFVpbnQ4QXJyYXkge1xuICAgICAgICBpZiAodGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDAgJiYgdGhpcy50b0RlbGV0ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICAgICAgbGV0IHdyaXRlcjogV3JpdGVyID0gbmV3IFdyaXRlcih0aGlzLmRhdGEsIHRoaXMuYW5ub3RhdGlvbnMsIHRoaXMudG9EZWxldGUsIHRoaXMucGFyc2VyKVxuXG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3JlY3QnIHBhcmFtZXRlciwgd2hldGhlciBhbGwgdGhlIGVudHJpZXMgYXJlIG9mIHR5cGUgbnVtYmVyIGFuZCBpZiB0aGUgdGhlIG51bWJlciBvZiBlbnRyaWVzIGlzIGNvcnJlY3RcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY2hlY2tSZWN0KG5yOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCAhPT0gbnIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgaGFzIGludmFsaWQgbnVtYmVyIG9mIGVudHJpZXM6IFwiICsgcmVjdCArIFwiIGhhcyBcIiArIHJlY3QubGVuZ3RoICsgXCIgZW50cmllcywgYnV0IHNob3VsZCBoYXZlIFwiICsgbnIgKyBcIiBlbnRyaWVzXCIpXG5cbiAgICAgICAgcmVjdC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBhKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVjdCBcIiArIHJlY3QgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWN0YW5ndWxhciBodWxsIGZyb20gYSBxdWFkUG9pbnQgZGVmaW5pdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBleHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgeF92YWx1ZXMgPSBxdWFkUG9pbnRzLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMClcbiAgICAgICAgbGV0IHlfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgIT09IDApXG5cbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbiguLi54X3ZhbHVlcyksIE1hdGgubWluKC4uLnlfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueF92YWx1ZXMpLCBNYXRoLm1heCguLi55X3ZhbHVlcyldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSAncXVhZFBvaW50cycgcGFyYW1ldGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocXVhZFBvaW50cy5sZW5ndGggJSA4ICE9PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFF1YWRwb2ludHMgYXJyYXkgaGFzIGxlbmd0aCAke3F1YWRQb2ludHMubGVuZ3RofSBidXQgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDhgKVxuXG4gICAgICAgIHF1YWRQb2ludHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlF1YWRwb2ludCBcIiArIHF1YWRQb2ludHMgKyBcIiBoYXMgaW52YWxpZCBlbnRyeTogXCIgKyBhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBiYXNlIGFubm90YXRpb24gdGhhdCBtZWFuIHRoZSByYXcgb2JqZWN0IG9mIGFubm90YXRpb24gb3IgdGhvc2UgcGFydHMgdGhhdCBhcmUgYWxsIGV4aXN0aW5nXG4gICAgICogYW5kIGVxdWFsbHkgc2V0IGluIGFsbCB0eXBlcyBvZiBhbm5vdGF0aW9uc1xuICAgICAqICovXG4gICAgY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcpOiBBbm5vdGF0aW9uIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKVxuICAgICAgICBhbm5vdC50eXBlID0gXCIvQW5ub3RcIixcbiAgICAgICAgICAgIGFubm90LnBhZ2UgPSBwYWdlLFxuICAgICAgICAgICAgYW5ub3Qub2JqZWN0X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKCksXG4gICAgICAgICAgICBhbm5vdC5pZCA9IHRoaXMuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICBhbm5vdC5yZWN0ID0gcmVjdCxcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IGF1dGhvcixcbiAgICAgICAgICAgIGFubm90LnBhZ2VSZWZlcmVuY2UgPSB0aGlzLnBhcnNlci5nZXRQYWdlKHBhZ2UpLFxuICAgICAgICAgICAgYW5ub3QudXBkYXRlRGF0ZSA9IFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSksXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IGNvbnRlbnRzLFxuICAgICAgICAgICAgYW5ub3QuYm9yZGVyID0gdGhpcy5jcmVhdGVEZWZhdWx0Qm9yZGVyKClcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVRleHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBpZiAoIWNvbnRlbnRzKVxuICAgICAgICAgICAgY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhdXRob3IpXG4gICAgICAgICAgICBhdXRob3IgPSBcIlwiXG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcblxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9UZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgbWFya3VwIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdWJ0eXBlIDogdGhlIHN1YnR5cGUgb2YgdGhlIFRleHRtYXJrdXAgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGlmICgwID09PSBxdWFkUG9pbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHF1YWRQb2ludHMgPSBbcmVjdFswXSwgcmVjdFszXSwgcmVjdFsyXSwgcmVjdFszXSwgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFsxXV1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgcXVhZFBvaW50czogcXVhZFBvaW50c1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGhpZ2hsaWdodCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUhpZ2hsaWdodEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9IaWdobGlnaHRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gdW5kZXJsaW5lIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVW5kZXJsaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9VbmRlcmxpbmVcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzcXVpZ2dsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWlnZ2x5QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVpZ2dseVwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmlrZSBvdXQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdHJpa2VPdXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3QgPSB0aGlzLmNyZWF0ZVRleHRNYXJrdXBBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1N0cmlrZU91dFwiLCBjb2xvciwgcXVhZFBvaW50cylcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZyZWUgdGV4dCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUZyZWVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJyaWdodC1qdXN0aWZpZWRcIixcbiAgICAgICAgICAgIGRlZmF1bHRBcHBlYXJhbmNlOiBcIi9JbnZhbGlkX2ZvbnQgOSBUZlwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0ZyZWVUZXh0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTGluZUFubm90YXRpb24oKSB7XG4gICAgICAgIHRocm93IEVycm9yKFwiTm8geWV0IGltcGxlbWVudGVkXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYmFzZSBhbm5vdGF0aW9uIG9iamVjdCBvZiBhIGNpcmNsZSBhbmQgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1YXJlIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3F1YXJlQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVTcXVhcmVDaXJjbGVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIFwiL1NxdWFyZVwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9DaXJjbGVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2Ugb2JqZWN0IG9mIGEgcG9seWdvbiBvciBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBzdWJ0eXA6IFBvbHlnb24gb3IgUG9seUxpbmVcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBzdWJ0eXBlOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KTogQW5ub3RhdGlvbiB7XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IHN1YnR5cGVcblxuICAgICAgICByZXR1cm4gYW5ub3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWdvbiBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seWdvbkFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gdGhpcy5jcmVhdGVQb2x5Z29uUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IsIHZlcnRpY2VzLCBcIi9Qb2x5Z29uXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb2x5bGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogdmVydGljZXMgOiB0aGUgdmVydGljZXMgZGVmaW5pbmcgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBvYmplY3RcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlUG9seUxpbmVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seUxpbmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5rIGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBpbmtMaXN0IDogYSBsaXN0IG9mIGxpc3QgY29udGFpbmluZyB0aGUgcG9pbnRzIGZvciBkcmF3aW5nIHRoZSBsaW5lc1xuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVJbmtBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBpbmtMaXN0OiBudW1iZXJbXVtdIHwgbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMCwgZzogMSwgYjogMCB9KSB7XG5cbiAgICAgICAgaWYgKGlua0xpc3QubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbmtMaXN0IGlzIGVtcHR5XCIpXG5cbiAgICAgICAgbGV0IF9pbmtMaXN0OiBhbnkgPSBbXVxuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbmtMaXN0WzBdKSB7XG4gICAgICAgICAgICBfaW5rTGlzdCA9IFtpbmtMaXN0XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBpbmtMaXN0XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBpbmtMaXN0OiBfaW5rTGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9JbmtcIlxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3RhbXAgYW5ub3RhdGlvbi4gVGhlcmUgZXhpc3RzIGEgbnVtYmVyIG9mIHByZWRpZmluZWQgc3RhbXBzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIFBERiBkb2N1bWVudHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBzdGFtcFR5cGUgOiB0aGUgbmFtZSBvZiB0aGUgdXNlZCBzdGFtcCB0eXBlLiBDYW4gYmU6IFtBcHByb3ZlZCwgRXhwZXJpbWVudGFsLCBOb3RBcHByb3ZlZCwgQXNJcywgRXhwaXJlZCwgTm90Rm9yUHVibGljUmVsZWFzZSwgQ29uZmlkZW50aWFsLCBGaW5hbCwgU29sZCwgRGVwYXJ0bWVudGFsLCBGb3JDb21tZW50LCBUb3BTZWNyZXQsIERyYWZ0LCBGb3JQdWJsaWNSZWxlYXNlXVxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTdGFtcEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgc3RhbXBUeXBlOiBzdHJpbmcgPSBcIkRyYWZ0XCIsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgWzUwLCA1MCwgODAsIDgwXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHN0YW1wVHlwZTogc3RhbXBUeXBlXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL1N0YW1wXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZpc3VhbCBzeW1ib2wgdGhhdCBpbmRjYXRlcyB0aGUgZXhpc3RhbmNlIG9mIHRleHQgZWRpdHMuXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjYXJldFN5bWJvbCA6IE5vbmUgb3IgUCwgd2l0aCBQIGZvciB1c2luZyB0aGUgcGFyYWdyYXBoIHN5bWJvbCBhcyBjYXJldFxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDYXJldEFubm90YXRpb24ocGFnZTogbnVtYmVyLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY2FyZXRTeW1ib2w6IHN0cmluZyA9IFwiUFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFtdLCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY2FyZXRTeW1ib2w6IGNhcmV0U3ltYm9sXG4gICAgICAgIH0pXG5cbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0NhcmV0XCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgYW5ub3RhdGlvbiB3aXRoIHRoZSBnaXZlbiBpZCBvciB0aGUgZ2l2ZW4gcmVmZXJlbmNlIG9iamVjdFxuICAgICAqICovXG4gICAgZGVsZXRlQW5ub3RhdGlvbihpZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGRlbGV0ZSBpZiBpdCB3YXMganVzdCBjcmVhdGVkIGJ1dCBpcyBub3QgaW4gdGhlIHBkZiBkb2N1bWVudFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFubm90YXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgaWQgJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiB0aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCAmJiBpZC5vYmogPT09ICg8YW55PnRoaXMuYW5ub3RhdGlvbnNbaV0ub2JqZWN0X2lkKS5vYmogJiYgaWQuZ2VuZXJhdGlvbiAmJiBpZC5nZW5lcmF0aW9uID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkuZ2VuZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5zbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRBbm5vdGF0aW9ucygpLnRoZW4oKGFubm90cykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IF9hbm5vdHMgb2YgYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFubm90IG9mIF9hbm5vdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIGFubm90LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9EZWxldGUucHVzaChhbm5vdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMudG9EZWxldGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkLm9iaiAmJiBhbm5vdC5vYmplY3RfaWQgJiYgaWQub2JqID09PSBhbm5vdC5vYmplY3RfaWQub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gYW5ub3Qub2JqZWN0X2lkLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHJlc3VsIG9mIGFsbCBhbm5vdGF0aW9ucyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gVGhpcyB3aWxsXG4gICAgICogY29tcHJpc2UgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBleGlzdHMgYW5kIHRob3NlIHRoYXQgd2VyZSBjcmVhdGVkIHVzaW5nIHRoaXMgbGlicmFyeVxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbnMoKTogUHJvbWlzZTxBbm5vdGF0aW9uW11bXT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0Fubm90cyA9IHRoaXMucGFyc2VyLmV4dHJhY3RBbm5vdGF0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdBbm5vdCBvZiB0aGlzLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbm5vdHNbbmV3QW5ub3QucGFnZV0ucHVzaChuZXdBbm5vdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZXhpc3RpbmdBbm5vdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlUG9wdXBBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICBsZXQgYTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuICAgICAgICBsZXQgZXh0ZW5kZWRfcGRmID0gdGhpcy53cml0ZSgpXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2V4dGVuZGVkX3BkZl0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiB9KVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgYS5ocmVmID0gdXJsXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlTmFtZVxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgYS5yZW1vdmUoKVxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBhZGFwdGVkIFBERiBkb2N1bWVudCBpbiBhIG5vZGVqcyBlbnZpcm9ubWVudFxuICAgICAqICovXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2lzc3Vlcy85ODI3XG4gICAgLy8gd2h5IGlzIGl0IHNvIHJlcHJlaGVuc2libGUgdG8gY3JlYXRlIGxpYnJhcmllcyBmb3IgYm90aCBlbnZpcm9ubWVudHMgKGJyb3dzZXIgYW5kIG5vZGVqcyk/IFRob3NlIGd1eXMgYXQgYW5ndWxhciBtaWdodCBrbm93LlxuICAgIC8vXG4gICAgLy8gdW5jb21tZW50IGl0IGlmIHlvdSB3YW50IHRvIHVzZSBpdC5cbiAgICBzYXZlKGZpbGVOYW1lOiBzdHJpbmcgPSBcIm91dHB1dC5wZGZcIikge1xuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyAmJiAoPGFueT5wcm9jZXNzKS5yZWxlYXNlLm5hbWUgIT09ICdub2RlJykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBkb3dubG9hZCgpIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudCcpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgICAvLyAgICAgbGV0IGRhdGEgPSB0aGlzLndyaXRlKClcbiAgICAgICAgLy8gICAgIGZzLndyaXRlRmlsZShmaWxlTmFtZSwgQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZmlsZSB3YXMgd3JpdHRlbiB0bzogJHtmaWxlTmFtZX1gKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgUERGVmVyc2lvbiB9IGZyb20gJy4vcGFyc2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBYUmVmIHtcbiAgICBpZDogbnVtYmVyXG4gICAgcG9pbnRlcjogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgZnJlZTogYm9vbGVhblxuICAgIHVwZGF0ZTogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgaWQ6IG51bWJlclxuICAgIGNvdW50OiBudW1iZXJcbiAgICBlbmRfcHRyOiBudW1iZXIgLy8gcG9pbnRzIHRvIHRoZSBlbmQgb2YgdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxufVxuXG5pbnRlcmZhY2UgVHJhaWxlciB7XG4gICAgc2l6ZTogbnVtYmVyXG4gICAgcm9vdDogUmVmZXJlbmNlUG9pbnRlclxuICAgIHByZXY/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgW2lkOiBudW1iZXJdOiBYUmVmXG59XG5cbi8qKlxuICogSG9sZHMgdGhlIGNvbXBsZXRlIGluZm9ybWF0aW9uIG9mIG9uZSB1cGRhdGUgc2VjdGlvbi4gVGhhdCBjb21wcmlzZXM6XG4gKiAtIHRoZSBib2R5IHVwZGF0ZVxuICogLSB0aGUgY3Jvc3Npc3RlIHJlZmVyZW5jZSB0YWJsZVxuICogLSB0aGUgdHJhaWxlclxuICogKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZWN0aW9uIHtcbiAgICBwdWJsaWMgcmVmczogWFJlZltdID0gW11cblxuICAgIHB1YmxpYyBzdGFydF9wb2ludGVyOiBudW1iZXIgPSAtMVxuXG4gICAgcHVibGljIHRyYWlsZXI6IFRyYWlsZXIgPSB7IHNpemU6IC0xLCByb290OiB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH0gfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyAvU2l6ZVxuICAgIHByaXZhdGUgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gL1Jvb3RcbiAgICBwcml2YXRlIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vIC9QcmV2XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHdpdGggdGhlIGdpdmVuIGlkXG4gICAgICogKi9cbiAgICBnZXRSZWZlcmVuY2UoaWQ6IG51bWJlcik6IFhSZWYgfCB1bmRlZmluZWQge1xuICAgICAgICBmb3IgKGxldCByZWYgb2YgdGhpcy5yZWZzKSB7XG4gICAgICAgICAgICBpZiAocmVmLmlkID09PSBpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGhlYWRlciBvZiBhIHN1YiBzZWN0aW9uLiBGb3IgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIDAgMSAvLyA8LS1cbiAgICAgKiAuLi5cbiAgICAgKlxuICAgICAqIFNvIHRoZSBvYmVqY3QgaWQgMCBhbmQgdGhlIG51bWJlciBvZiBzdWIgc2VjdGlvbiBlbnRyaWVzIDFcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKGluZGV4OiBudW1iZXIpOiBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgbGV0IHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHIpXG5cbiAgICAgICAgcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyICsgMSlcblxuICAgICAgICBsZXQgcHRyX3JlZl9jb3VudCA9IHB0clxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VfY291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfcmVmX2NvdW50LCBwdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IG9ial9pZCwgY291bnQ6IHJlZmVyZW5jZV9jb3VudCwgZW5kX3B0cjogcHRyIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBvZiBhIHN1YiBzZWN0aW9uLiBUaGUgaW5kZXggcG9pbnRzIHRvIHRoZSBzdGFydCBvZlxuICAgICAqIHRoZSBmaXJzdCByZWZlcmVuY2UgYW5kIGNvdW50IHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiByZWZlcmVuY2VzIHRoYXQgYXJlXG4gICAgICogY29udGFpbmVkIGluIHRoZSBzdWJzZWN0aW9uLlxuICAgICAqXG4gICAgICogVGhlIGZpcnN0X29iamVjdF9pZCBpcyB0aGUgaWQgcHJvdmlkZWQgaW4gdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxuICAgICAqXG4gICAgICogQnkgZGVmaW5pdGlvbiBvZiB0aGUgUERGIHN0YW5kYXJkIG9uZSBlbnRyeSBpcyAyMCBieXRlcyBsb25nXG4gICAgICogKi9cbiAgICBleHRyYWN0UmVmZXJlbmNlcyhpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBmaXJzdF9vYmplY3RfaWQ6IG51bWJlcik6IFhSZWZbXSB7XG4gICAgICAgIGxldCBfcmVmczogWFJlZltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2ksIGluZGV4ICs9IDIwKSB7XG4gICAgICAgICAgICBsZXQgcHRyX2VuZF9wb2ludGVyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyX2VuZF9wb2ludGVyKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2dlbl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9lbmRfcG9pbnRlciArIDEpXG5cbiAgICAgICAgICAgIGxldCBwdHJfZ2VuX2VuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydClcblxuICAgICAgICAgICAgbGV0IGdlbmVyYXRpb24gPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0LCBwdHJfZ2VuX2VuZClcblxuICAgICAgICAgICAgbGV0IHB0cl9mbGFnID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9lbmQgKyAxKVxuXG4gICAgICAgICAgICBsZXQgaXNGcmVlID0gdGhpcy5kYXRhW3B0cl9mbGFnXSA9PT0gMTAyXG5cbiAgICAgICAgICAgIF9yZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBmaXJzdF9vYmplY3RfaWQgKyBpLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXIsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBpc0ZyZWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAhaXNGcmVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHRyYWlsZXIgb2YgdGhlIHN1YnNlY3Rpb24gdGhhdCBtZWFucyB0aGUgcGFydCBzdGF0aW5nIHdpdGggdGhlICd0cmFpbGVyJyBrZXl3b3JkIGFuZFxuICAgICAqIGluIHBhcnRpY3VsYXIgdGhlIHRyYWlsZXIgZGljdGlvbmFyeVxuICAgICAqICovXG4gICAgZXh0cmFjdFRyYWlsZXIoaW5kZXg6IG51bWJlcik6IFRyYWlsZXIge1xuICAgICAgICBsZXQgZW5kX3RyYWlsZXJfaW5kZXg6IG51bWJlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgaW5kZXgsIHRydWUpXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShpbmRleCwgZW5kX3RyYWlsZXJfaW5kZXgpXG4gICAgICAgIGluZGV4ID0gMFxuXG4gICAgICAgIGxldCBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5TSVpFLCBfZGF0YSwgaW5kZXgsIHRydWUpICsgVXBkYXRlU2VjdGlvbi5TSVpFLmxlbmd0aFxuICAgICAgICBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cbiAgICAgICAgbGV0IHNpemUgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9yb290ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlJPT1QsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlJPT1QubGVuZ3RoXG4gICAgICAgIHB0cl9zdGFydF9yb290ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcm9vdClcbiAgICAgICAgbGV0IHJvb3RfcmVmZXJlbmNlID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9wcmV2ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlBSRVYsIF9kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgbGV0IHByZXYgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKC0xICE9IHB0cl9zdGFydF9wcmV2KSB7XG4gICAgICAgICAgICBwdHJfc3RhcnRfcHJldiA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3ByZXYgKyBVcGRhdGVTZWN0aW9uLlBSRVYubGVuZ3RoKVxuXG4gICAgICAgICAgICBwcmV2ID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgcm9vdDogcm9vdF9yZWZlcmVuY2UsXG4gICAgICAgICAgICBwcmV2OiBwcmV2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIFVwZGF0ZSBzZWN0aW9uIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqICovXG4gICAgZXh0cmFjdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRfcG9pbnRlciA9IGluZGV4XG5cbiAgICAgICAgbGV0IHN0YXJ0X3B0ciA9IGluZGV4ICsgNSAvLyArIGxlbmd0aCh4cmVmKSArIGJsYW5rXG4gICAgICAgIHN0YXJ0X3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHN0YXJ0X3B0cilcblxuICAgICAgICBsZXQgZmlyc3RfaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgLy8gdGhlIGZpcnN0IGhlYWRlciBtdXN0IGJlIDAgdG8gZXN0YWJsaXNoIHRoZSBsaW5rZWQgbGlzdCBvZiBmcmVlIG9iamVjdHNcbiAgICAgICAgaWYgKGZpcnN0X2hlYWRlci5pZCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJGaXJzdCBvYmplY3QgaWQgbm90IDBcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBmaXJzdF9oZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgLy8gZXh0cmFjdCBmaXJzdCByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdCh0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgZmlyc3RfaGVhZGVyLmNvdW50LCBmaXJzdF9oZWFkZXIuaWQpKVxuXG4gICAgICAgIC8vIGV4dHJhY3QgcmVtYWluaW5nIHJlZmVyZW5jZXNcbiAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgZmlyc3RfaGVhZGVyLmNvdW50ICogMjBcblxuICAgICAgICB3aGlsZSAodGhpcy5kYXRhW3N0YXJ0X3B0cl0gIT09IDExNikgeyAvLyAxMTYgPSAndCcgc3RhcnQgb2YgdGhlIHdvcmQgdHJhaWxlciB0aGF0IGNvbmNsdWRlcyB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZSBzZWN0aW9uXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgICAgIHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGhlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZXMgPSB0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgaGVhZGVyLmNvdW50LCBoZWFkZXIuaWQpXG5cbiAgICAgICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQocmVmZXJlbmNlcylcblxuICAgICAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgaGVhZGVyLmNvdW50ICogMjBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxlciA9IHRoaXMuZXh0cmFjdFRyYWlsZXIoc3RhcnRfcHRyKVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjb21wbGV0ZSBQREYgZG9jdW1lbnQgaGlzdG9yeSBhbmQgdGhlcmVmb3JlIGhvbGRzIHRoZVxuICogdXBkYXRlZCBib2R5IHBhcnRzLCB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZXMgYW5kIHRoZSBkb2N1bWVudCB0cmFpbGVyc1xuICogKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudEhpc3Rvcnkge1xuICAgIHB1YmxpYyB1cGRhdGVzOiBVcGRhdGVTZWN0aW9uW10gPSBbXVxuXG4gICAgcHVibGljIHRyYWlsZXJTaXplOiBudW1iZXIgPSAtMVxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgb2JqZWN0IGlkcyB0aGF0IHdlcmUgZm9ybWVybHkgZnJlZWQgYW5kIGFyZSBub3cgJ2FscmVhZHknIHJldXNlZC5cbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gcHJldmVudCBhIGZyZWVkIG9iamVjdCBhIHNlY29uZCB0aW1lXG4gICAgICogKi9cbiAgICBwcml2YXRlIGFscmVhZHlfcmV1c2VkX2lkczogWFJlZltdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB1cGRhdGUgc2VjdGlvbiBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RVcGRhdGVTZWN0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVwZGF0ZVNlY3Rpb24gPSBuZXcgVXBkYXRlU2VjdGlvbih0aGlzLmRhdGEpXG4gICAgICAgIHVwZGF0ZVNlY3Rpb24uZXh0cmFjdChpbmRleClcblxuICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaCh1cGRhdGVTZWN0aW9uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBsYXN0IHVwZGF0ZSBzZWN0aW9uIG9mIGEgZG9jdW1lbnQgKHRoYXQgbWVhbnNcbiAgICAgKiB0aGUgbW9zdCByZWNlbnQgdXBkYXRlIGxvY2F0aW5nIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUpXG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRFbnRyeSgpIHtcbiAgICAgICAgbGV0IHB0ciA9IHRoaXMuZGF0YS5sZW5ndGggLSAxXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydHhyZWYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIDlcblxuICAgICAgICBwdHIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfc3RhcnR4cmVmKVxuICAgICAgICAvLyBIYW5kbGUgY3Jvc3MgcmVmZXJlbmNlIHRhYmxlXG4gICAgICAgIGlmIChVdGlsLmFyZUFycmF5c0VxdWFsKHRoaXMuZGF0YS5zbGljZShwdHIsIHB0ciArIFV0aWwuWFJFRi5sZW5ndGgpLCBVdGlsLlhSRUYpKSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RVcGRhdGVTZWN0aW9uKHB0cilcbiAgICAgICAgfSBlbHNlIHsgLy8gaGFuZGxlIGNyb3NzIHJlZmVyZW5jZSBzdHJlYW0gb2JqZWN0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNyb3NzIHJlZmVyZW5jZSBzdHJlYW0gb2JqZWN0XCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBlbnRpcmUgdXBkYXRlIHNlY3Rpb25zXG4gICAgICpcbiAgICAgKiBOZWVkcyB0byBhZGFwdCBkZXBlbmRpbmcgd2hldGhlciB0aGUgZG9jdW1lbnQgdXNlcyBhIGNyb3NzLXJlZmVyZW5jZSB0YWJsZSBvciBhIGNyb3NzLXJlZmVyZW5jZSBzdHJlYW0gb2JqZWN0XG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRIaXN0b3J5KCkge1xuXG4gICAgICAgIHRoaXMuZXh0cmFjdERvY3VtZW50RW50cnkoKVxuXG4gICAgICAgIGxldCB1cyA9IHRoaXMudXBkYXRlc1swXVxuXG4gICAgICAgIHdoaWxlICh1cy50cmFpbGVyLnByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24odXMudHJhaWxlci5wcmV2KVxuICAgICAgICAgICAgdXMgPSB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXJTaXplID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnNpemVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgZm9yIGNsYXJpZmljYXRpb24uIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBtb3N0IHJlY2VudC4gV2UgcGFyc2VkIGJhY2t3YXJkcy5cbiAgICAgKiAqL1xuICAgIGdldFJlY2VudFVwZGF0ZSgpOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ5IHJ1bm5pbmcgdGhyb3VnaCB0aGUgUERmIGhpc3Rvcnkgd2UgY2FuIGZvciBldmVyeSBvYmplY3QgaWQgZGV0ZXJtaW5lIHRoZSBwb2ludGVyIGFkZHJlc3MgdG8gdGhlIG1vc3QgcmVjZW50IHZlcnNpb24sIGFuZFxuICAgICAqIHdoZXRoZXIgdGhlIG9iamVjdCBpZCBpcyBzdGlsbCBpbiB1c2VkLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iamVjdCBsb29rdXAgdGFibGUgaGFzIGFuIGVudHJ5IGZvciBldmVyeSBleGlzdGluZyBvYmplY3QgaWQsIGEgcG9pbnRlciB0byB0aGUgdGhlIG1vc3QgcmVjZW50IG9iamVjdCBkZWZpbml0aW9uLCBhcyBsb25nXG4gICAgICogYXMgdGhlIG9iamVjdCBleGlzdHMsIG9yIGFuIGFjY29yZGluZyBpbmRpY2F0aW9uIG90aGVyd2lzZS5cbiAgICAgKiAqL1xuICAgIGNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKCk6IE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgbGV0IG9ialRhYmxlOiB7IFtpZDogbnVtYmVyXTogWFJlZiB9ID0ge31cblxuICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICBsZXQgb2JqX2NvdW50ID0gdXBkYXRlLnRyYWlsZXIuc2l6ZVxuXG4gICAgICAgIGxldCBpID0gMVxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICsraVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAqIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgbGV0IG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBmcmVlX2hlYWRlciA9IG9iamVjdExvb2t1cFRhYmxlWzBdXG5cbiAgICAgICAgaWYgKCFmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ3Jvc3NzaXRlIHJlZmVyZW5jZSBoYXMgbm8gaGVhZGVyIGZvciB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXCIpXG5cbiAgICAgICAgLy8gaWYgdGhlIHBvaW50ZXIgb2Ygb2JqZWN0IDAgcG9pbnRzIHRvIDAgdGhlcmUgaXMgbm8gZnJlZWQgb2JqZWN0IHRoYXQgY2FuIGJlIHJldXNlZFxuICAgICAgICBpZiAoMCA9PT0gZnJlZV9oZWFkZXIucG9pbnRlcikge1xuICAgICAgICAgICAgaWYgKC0xID09PSB0aGlzLnRyYWlsZXJTaXplKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVHJhaWxlciBzaXplIG5vdCBzZXRcIilcblxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGxpc3QgaGVhZFxuICAgICAgICBsZXQgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICBsZXQgZnJlZWRIZWFkZXJMaXN0OiBYUmVmW10gPSBbXVxuICAgICAgICB3aGlsZSAocHRyICE9PSAwKSB7XG4gICAgICAgICAgICBmcmVlZEhlYWRlckxpc3QucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIGZyZWVfaGVhZGVyID0gb2JqZWN0TG9va3VwVGFibGVbcHRyXVxuXG4gICAgICAgICAgICBpZiAoIWZyZWVfaGVhZGVyLmZyZWUpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW5jb3Npc3RlbnQgeHJlZlxuICAgICAgICAgICAgICAgIHJldHVybiB7IG9iajogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uOiAwLCByZXVzZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdldEZyZWVIZWFkZXIgPSAoZnJlZUhlYWRlckxpc3Q6IFhSZWZbXSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBmcmVlSGVhZGVyTGlzdC5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocC5nZW5lcmF0aW9uIDwgNjU1MzUgJiYgLy8gbWF4IGdlbmVyYXRpb24gbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIC0xID09PSB0aGlzLmFscmVhZHlfcmV1c2VkX2lkcy5pbmRleE9mKHApKSB7IC8vIG5vdCBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXVzZWRfZnJlZV9oZWFkZXIgPSBnZXRGcmVlSGVhZGVyKGZyZWVkSGVhZGVyTGlzdClcblxuICAgICAgICBpZiAocmV1c2VkX2ZyZWVfaGVhZGVyKSB7XG4gICAgICAgICAgICBmcmVlX2hlYWRlciA9IHJldXNlZF9mcmVlX2hlYWRlclxuXG4gICAgICAgICAgICAvLyBzdG9yZSB1c2VkIGlkIHRvIG1ha2Ugc3VyZSBpdCB3aWxsIG5vdCBiZSBzZWxlY3RlZCBhZ2FpblxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5X3JldXNlZF9pZHMucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB0aGF0IGFsbCBmcmVlZCBvYmplY3QgaWRzIGFyZSBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBmcmVlX2hlYWRlci5wb2ludGVyLCBnZW5lcmF0aW9uOiBvYmplY3RMb29rdXBUYWJsZVtmcmVlX2hlYWRlci5pZF0uZ2VuZXJhdGlvbiwgcmV1c2VkOiB0cnVlIH1cbiAgICB9XG59XG4iLCJleHBvcnQgeyBQREZEb2N1bWVudFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgQW5ub3RhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IERvY3VtZW50SGlzdG9yeSwgT2JqZWN0TG9va3VwVGFibGUgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknO1xuXG4vKipcbiAqIE5vdGUgdGhhdCB0aGlzIHBhcnNlciBkb2VzIG5vdCBwYXJzZXMgdGhlIFBERiBmaWxlIGNvbXBsZXRlbHkuIEl0IGxvb2t1cHMgdGhvc2VcbiAqIHBhcnRzIHRoYXQgYXJlIGltcG9ydGFudCBmb3IgdGhlIGNyZWF0aW9uIG9mIGFubm90YXRpb25zLiBGb3IgbW9yZSBpbmZvcm1hdGlvblxuICogcGxlYXNlIHJlYWQgdGhlIFJFQURNRS5cbiAqICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3Ige1xuICAgIHI6IG51bWJlclxuICAgIGc6IG51bWJlclxuICAgIGI6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBERlZlcnNpb24ge1xuICAgIG1ham9yOiBudW1iZXJcbiAgICBtaW5vcjogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXM6IG51bWJlclxuICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXM6IG51bWJlclxuICAgIGJvcmRlcl93aWR0aDogbnVtYmVyXG4gICAgZGFzaF9wYXR0ZXI/OiBudW1iZXJbXVxufVxuXG4vKipcbiAqIFJlZmVyZW5jZXMgaW4gUERGIGRvY3VtZW5zIGFyZSAgb2YgdGhlIGZvcm1cbiAqIDxvYmpfaWQ+IDxnZW5lcmF0aW9uPiBSXG4gKlxuICogVGhpcyBob2xkcyBzdWNoIGEgcmVmZXJlbmNlXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICBvYmo6IG51bWJlclxuICAgIGdlbmVyYXRpb246IG51bWJlclxuICAgIHJldXNlZD86IGJvb2xlYW4gfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb24ge1xuICAgIHBhZ2U6IG51bWJlciA9IC0xLy8gdGhlIHRhcmdldCBwYWdlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgdHlwZTogc3RyaW5nID0gXCJcIi8vIHRoZSBzdWIgdHlwZSBvZiB0aGUgYXJyYXkgKFRleHQsIEhpZ2hsaWdodCwgLi4uKVxuICAgIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IG51bGwgPSBudWxsLy8gYW4gdW51c2VkIG9iamVjdCBpZFxuICAgIGlkOiBzdHJpbmcgPSBcIlwiLy8gdW5pcXVlIGFubmF0aW9uIGlkZW50aWZpZXJcbiAgICByZWN0OiBudW1iZXJbXSA9IFtdLy8gdGhlIGxvY2F0aW9uIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgYXV0aG9yOiBzdHJpbmcgPSBcIlwiLy8gdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHBhZ2VSZWZlcmVuY2U6IFBhZ2UgfCBudWxsID0gbnVsbC8vIFRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0IHRvIHdoaWNoIHRoZSBhbm5vdGF0aW9uIGlzIGFkZGVkXG4gICAgdXBkYXRlRGF0ZTogc3RyaW5nID0gXCJcIi8vIFRoZSBkYXRlIHdoZW4gdGhlIGFubm90YXRpb24gd2FzIGNyZWF0ZWQgb3IgdXBkYXRlZFxuICAgIGNvbnRlbnRzPzogc3RyaW5nIC8vIFRleHQgdGhhdCBzaGFsbCBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBhbm5vdGF0aW9uXG4gICAgYW5ub3RhdGlvbl9mbGFnPzogbnVtYmVyIC8vIFNlZSBQREYgc3BjZWNpZmljYXRpb24gJ0Fubm90YXRpb24gRmxhZydcbiAgICBhcHBlYXJhbmNlX2RpY3Rpb25hcnk/OiBhbnkgLy8gY29udHJvbCB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGFwcGVhcmFuY2Vfc3RhdGU/OiBhbnkgLy8gY2hhbmdlIHRoZSBhcHBlYXJhbmNlIGFjY29yZGluZyB0byBzdGF0ZXNcbiAgICBib3JkZXI/OiBCb3JkZXIgfCBudWxsID0gbnVsbC8vIGRlZmluZSB0aGUgYm9yZGVyXG4gICAgY29sb3I/OiBDb2xvciB8IG51bGwgPSBudWxsLy8gdGhlIGNvbG9yIHNldFxuICAgIG9wYWNpdHk/OiBudW1iZXIgLy8gdGhlIG9wYWNpdHkgdmFsdWUgKENBIGNhbGxlZCBpbiB0aGUgUERGIHNwZWMpXG4gICAgcmljaHRleHQ/OiBzdHJpbmcgLy8gcmljaCB0ZXh0IHN0cmluZyBkaXNwbGF5ZWQgaW4gdGhlIHBvcHVwIHdpbmRvdyB3aGVuIHRoZSBhbm5vdGF0aW9uIGlzIG9wZW5lZFxuICAgIGluaXRpYWxseU9wZW4/OiBib29sZWFuIC8vIGZsYWcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgYW5ub3RhdGlvbiBzaGFsbCBpbml0aWFsbHkgYmUgb3BlblxuICAgIGljb25OYW1lPzogc3RyaW5nIC8vIG5hbWUgb2YgdGhlIHVzZWQgaWNvblxuICAgIGFubm90YXRpb25TdGF0ZT86IHN0cmluZyAvLyB0aGUgc3RhdGUgb2YgdGhlIGFubm90YXRpb25cbiAgICBzdGF0ZU1vZGVsPzogc3RyaW5nXG4gICAgZGVmYXVsdEFwcGVhcmFuY2U/OiBzdHJpbmcgLy8gZGVmYXVsdCBhcHBlYXJhbmNlIHN0cmluZ1xuICAgIHRleHRBbGlnbm1lbnQ/OiBzdHJpbmcgLy8gbGVmdC1qdXN0aWZpZWQsIGNlbnRlcmVkLCByaWdodC1qdXN0aWZpZWRcbiAgICByaWNoVGV4dFN0cmluZz86IHN0cmluZyAvLyBnZW5lcmF0ZXMgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICBjYWxsb3V0TGluZT86IG51bWJlcltdIC8vIGNhbGwgb3V0IGxpbmVcbiAgICBpbnRlbnQ/OiBzdHJpbmcgLy8gYSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgaW50ZW50OiBGcmVlVGV4dCwgRnJlZVRleHRDYWxsb3V0LCBGcmVlVGV4dFR5cGVXcml0ZXJcbiAgICBib3JkZXJFZmZlY3Q/OiBhbnlcbiAgICByZD86IGFueSAvLyA/XG4gICAgYm9yZGVyU3R5bGU/OiBhbnkgLy8gYm9yZGVyIHN0eWxlXG4gICAgbGluZUVuZGluZz86IHN0cmluZyAvLyB0aGUgbGluZSBlbmRpbmcgdHlwZSBvZiB0aGUgY2FsbG91dCBsaW5lXG4gICAgc3RhbXBUeXBlPzogc3RyaW5nIC8vIHRoZSBuYW1lIG9mIHRoZSB1c2VkIHN0YW1wIHR5cGUuIENhbiBiZTogW0FwcHJvdmVkLCBFeHBlcmltZW50YWwsIE5vdEFwcHJvdmVkLCBBc0lzLCBFeHBpcmVkLCBOb3RGb3JQdWJsaWNSZWxlYXNlLCBDb25maWRlbnRpYWwsIEZpbmFsLCBTb2xkLCBEZXBhcnRtZW50YWwsIEZvckNvbW1lbnQsIFRvcFNlY3JldCwgRHJhZnQsIEZvclB1YmxpY1JlbGVhc2VdXG4gICAgY2FyZXRTeW1ib2w/OiBzdHJpbmcgLy8gQ2FuIGJlIFAgdG8gdXNlIGEgcGFyYWdyYXBoIHN5bWJvbCBmb3IgdGhlIGNhcmV0IG9yIE5vbmVcbiAgICBxdWFkUG9pbnRzPzogbnVtYmVyW10gLy8gc3BlY2lmaWVzIGhvdyB0aGUgYW5ub3RhdGlvbiBnb2VzIGFycm91bmQgdGhlIHRleHRcbiAgICBpbmtMaXN0PzogbnVtYmVyW11bXVxuICAgIGJvcmRlcl9zdHlsZT86IGFueVxuICAgIGNvbG9yX3NwYWNlPzogbnVtYmVyW11cbiAgICBib3JkZXJfZWZmZWN0PzogYW55XG4gICAgdmVydGljZXM/OiBudW1iZXJbXVxuICAgIGxpbmVfZW5kaW5nPzogc3RyaW5nW11cbiAgICBpbnRlcmlvcl9jb2xvcj86IG51bWJlcltdXG4gICAgbWVhc3VyZT86IGFueVxuICAgIGlzX2RlbGV0ZWQ/OiBib29sZWFuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KFtdKSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBhbm5vdGF0aW9uIG9iamVjdCAocGFydGlhbGx5KVxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlciwgcGFnZTogUGFnZSkge1xuICAgICAgICAvLyByZXN0cmljdCB0aGUgZGF0YSBhcnJheSB0byB0aGUgcGFydGl0aW9uIHRoYXQgYWN0dWFsbHkgY29udGFpbnMgdGhlIGFubm90YXRpb24gZGF0YVxuICAgICAgICBsZXQgb2JqX2VuZF9wdHI6IG51bWJlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIG9ial9lbmRfcHRyKVxuXG4gICAgICAgIHRoaXMub2JqZWN0X2lkID0gVXRpbC5leHRyYWN0T2JqZWN0SWQodGhpcy5kYXRhLCAwKVxuXG4gICAgICAgIHRoaXMudHlwZSA9IFwiL1wiICsgVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlNVQlRZUEUpXG4gICAgICAgIHRoaXMucmVjdCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5SRUNUKVxuICAgICAgICB0aGlzLnBhZ2VSZWZlcmVuY2UgPSBwYWdlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZSA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5NKVxuICAgICAgICB0aGlzLmJvcmRlciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5CT1JERVIpXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQylcbiAgICAgICAgdGhpcy5hdXRob3IgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuVClcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5OTSlcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5DT05URU5UUylcbiAgICAgICAgdGhpcy5xdWFkUG9pbnRzID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlFVQURQT0lOVFMpXG4gICAgICAgIHRoaXMuaW5rTGlzdCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5JTktMSVNUKVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBDYXRhbG9nIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIENhdGFsb2dPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkgeyB9XG5cbiAgICBwcml2YXRlIHBhZ2VzT2JqZWN0SWQ6IFJlZmVyZW5jZVBvaW50ZXIgPSB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGNhdGFsb2cgb2JqZWN0IGZyb20gdGhlIGRhdGEgYXQgdGhlIGdpdmVuIHB0clxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlcikge1xuICAgICAgICBsZXQgcHRyX3BhZ2VzX2tleSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5QQUdFUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5QQUdFUy5sZW5ndGhcblxuICAgICAgICB0aGlzLnBhZ2VzT2JqZWN0SWQgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZCh0aGlzLmRhdGEsIHB0cl9wYWdlc19rZXkpXG4gICAgfVxuXG4gICAgZ2V0UGFnZXNPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNPYmplY3RJZFxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBQYWdlVHJlZSBvYmplY3Qgb2YgdGhlIFBERiBkb2N1bWVudFxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHdpdGggL1R5cGUgL1BhZ2VzXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VUcmVlIHtcblxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIGdlbmVyYXRpb246IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIHBhZ2VDb3VudDogbnVtYmVyID0gLTFcblxuICAgIHByaXZhdGUgcGFnZVJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZHMgdGhlIHByb3ZpZGVkIHJlZmVyZW5jZSBhbmQgcmV0dXJuIHRydWUsIGlmIHRoZSBvYmplY3QgdHlwZSBpcyAvUGFnZVxuICAgICAqICovXG4gICAgaXNQYWdlKHJlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICBpZiAoeHJlZi5nZW5lcmF0aW9uICE9PSByZWZlcmVuY2UuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICBsZXQgcHRyID0geHJlZi5wb2ludGVyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHhyZWYucG9pbnRlciwgcHRyKVxuXG4gICAgICAgIHJldHVybiAoLTEgIT09IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5QQUdFLCBfZGF0YSwgMCwgdHJ1ZSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGtpZHMgcmVmZXJlbmNlcyByZWN1cnNpdmVseS5cbiAgICAgKiBGb3IgZXZlcnkga2lkIGl0IGNoZWNrcyBpZiB0aGUgcmVmZXJlbmNlZCBvYmplY3QgdHlwZSBpczpcbiAgICAgKiAtIGEgL1BhZ2VzIG9iamVjdCB0aGVuIGl0IHJlY3Vyc2l2ZWx5IGxvb2t1cHMgaXRzIGNoaWxkcmVuXG4gICAgICogLSBhIC9QYWdlIG9iamVjdCB0aGVuIGl0IGFkZHMgdGhlIHJlZmVyZW5jZXNcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10pIHtcblxuICAgICAgICBmb3IgKGxldCByZWZlcmVuY2Ugb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQYWdlKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VSZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaGFuZGxlIGFycmF5IC0tIHJlY3Vyc2l2ZWx5IGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgICAgIGxldCB4cmVmID0gdGhpcy5vYmplY3RMb29rdXBUYWJsZVtyZWZlcmVuY2Uub2JqXVxuXG4gICAgICAgICAgICAgICAgaWYgKHhyZWYuZ2VuZXJhdGlvbiAhPT0gcmVmZXJlbmNlLmdlbmVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICAgICAgICAgIGxldCBwdHIgPSB4cmVmLnBvaW50ZXJcblxuICAgICAgICAgICAgICAgIGxldCBraWRzX2luZGV4ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLktJRFMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuS0lEUy5sZW5ndGhcblxuICAgICAgICAgICAgICAgIGxldCBhcnJheV9kYXRhID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIGtpZHNfaW5kZXggKyAxKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfZGF0YSlcblxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdFBhZ2VSZWZlcmVuY2VzKHJlZnMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSBvYmplY3QgZGF0YSBhdCB0aGUgZ2l2ZW4gcG9pbnRlclxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5DT1VOVCwgcHRyKVxuXG4gICAgICAgIC8vIGl0IGlzIHBvc3NpYmxlIHRoYXQgYW4gb2JqZWN0IG9mIHR5cGUgL1BhZ2VzIHJlZmVyZW5jZXMgYWdhaW4gdG8gb2JqZWN0cyBvZiB0eXBlcyAvUGFnZXMgc28gd2UgbXVzdFxuICAgICAgICAvLyBhcHBseSBhIHJlY3Vyc2l2ZSBldmFsdWF0aW9uXG4gICAgICAgIGxldCBraWRzX2luZGV4ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLktJRFMsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIGlmICgtMSA9PT0ga2lkc19pbmRleClcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgZmluZCBpbmRleCBvZiAvS2lkcyBpbiAvUGFnZXMgb2JqZWN0YClcblxuICAgICAgICBraWRzX2luZGV4ICs9IFV0aWwuS0lEUy5sZW5ndGhcblxuICAgICAgICBsZXQgYXJyYXlfZGF0YSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBraWRzX2luZGV4ICsgMSlcblxuICAgICAgICB0aGlzLnBhZ2VSZWZlcmVuY2VzID0gW11cblxuICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9kYXRhKVxuXG4gICAgICAgIHRoaXMuZXh0cmFjdFBhZ2VSZWZlcmVuY2VzKHJlZnMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHBhZ2VzIHRoZSBwYWdlIHRyZWUgY29tcHJpc2VzXG4gICAgICogKi9cbiAgICBnZXRQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZUNvdW50XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHRvIHRoZSBwYWdlIG9iamVjdHNcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VSZWZlcmVuY2VzKCk6IFJlZmVyZW5jZVBvaW50ZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VSZWZlcmVuY2VzXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwYWdlIG9iamVjdCBpbiB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2Uge1xuICAgIHB1YmxpYyBvYmplY3RfaWQ6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWQgLy8gVGhlIG9iamVjdCBpZCBhbmQgZ2VuZXJhdGlvbiBvZiB0aGUgb2JqZWN0XG5cbiAgICBwdWJsaWMgYW5ub3RzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgcHVibGljIGhhc0Fubm90c0ZpZWxkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHB1YmxpYyBhbm5vdHNQb2ludGVyOiBSZWZlcmVuY2VQb2ludGVyIHwgdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXksIHByaXZhdGUgZG9jdW1lbnRIaXN0b3J5OiBEb2N1bWVudEhpc3RvcnkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHJlZmVyZW5jZXMgaW4gdGhlIGxpbmtlZCBhbm5vdGF0aW9ucyBhcnJheVxuICAgICAqICovXG4gICAgZXh0cmFjdEFubm90YXRpb25BcnJheSgpIHtcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBpZiAoIXRoaXMuYW5ub3RzUG9pbnRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQW5ub3RhdGlvbnMgcG9pbnRlciBub3Qgc2V0XCIpXG5cbiAgICAgICAgbGV0IHJlZl9hbm5vdF90YWJsZSA9IG9ial90YWJsZVt0aGlzLmFubm90c1BvaW50ZXIub2JqXVxuXG4gICAgICAgIGlmIChyZWZfYW5ub3RfdGFibGUuZ2VuZXJhdGlvbiAhPT0gdGhpcy5hbm5vdHNQb2ludGVyLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlZmVyZW5jZSBhbm5vdGF0aW9uIHRhYmxlIG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IHB0ciA9IHJlZl9hbm5vdF90YWJsZS5wb2ludGVyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLk9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5PQkoubGVuZ3RoXG5cbiAgICAgICAgcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCBhcnJheV9zZXF1ZW5jZSA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IHJlZnMgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2UpXG5cbiAgICAgICAgdGhpcy5hbm5vdHMgPSByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHBhZ2Ugb2JqZWN0IHN0YXJ0aW5nIGF0IHBvc2l0aW9uIHB0clxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlcikge1xuXG4gICAgICAgIGxldCBpZF9wdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG4gICAgICAgIGxldCBvYmplY3RfaWQ6IG51bWJlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGlkX3B0cilcblxuICAgICAgICBsZXQgZW5kX2lkX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaWRfcHRyICsgMSkgKyAxXG4gICAgICAgIGxldCBvYmplY3RfZ2VuOiBudW1iZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBlbmRfaWRfcHRyKVxuXG4gICAgICAgIHRoaXMub2JqZWN0X2lkID0geyBvYmo6IG9iamVjdF9pZCwgZ2VuZXJhdGlvbjogb2JqZWN0X2dlbiB9XG5cbiAgICAgICAgbGV0IGVuZF9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UocHRyLCBlbmRfcHRyKVxuXG4gICAgICAgIGxldCBhbm5vdHMgPSBVdGlsLmV4dHJhY3RGaWVsZChfZGF0YSwgVXRpbC5BTk5PVFMpXG5cbiAgICAgICAgaWYgKGFubm90cykge1xuICAgICAgICAgICAgdGhpcy5oYXNBbm5vdHNGaWVsZCA9IHRydWVcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYW5ub3RzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzID0gYW5ub3RzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzUG9pbnRlciA9IGFubm90c1xuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0QW5ub3RhdGlvbkFycmF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIHJlbGV2YW50IHBhcnRzIG9mIHRoZSBQREYgZG9jdW1lbnQgYW5kIHByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdG8gZXh0cmFjdCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGZvclxuICogYWRkaW5nIGFubm90YXRpb25zXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBERkRvY3VtZW50UGFyc2VyIHtcblxuICAgIHByaXZhdGUgdmVyc2lvbjogUERGVmVyc2lvbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeShuZXcgVWludDhBcnJheShbXSkpXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcblxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkodGhpcy5kYXRhKVxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeS5leHRyYWN0RG9jdW1lbnRIaXN0b3J5KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWpvciBhbmQgbWlub3IgdmVyc2lvbiBvZiB0aGUgcGRmIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRQREZWZXJzaW9uKCk6IFBERlZlcnNpb24ge1xuICAgICAgICBpZiAodGhpcy52ZXJzaW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVyc2lvblxuXG4gICAgICAgIGxldCBwdHJfdmVyc2lvbl9zdGFydCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5WRVJTSU9OLCB0aGlzLmRhdGEpICsgVXRpbC5WRVJTSU9OLmxlbmd0aFxuICAgICAgICBsZXQgcHRyX2RlbGltaXRlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoW1V0aWwuRE9UXSwgdGhpcy5kYXRhLCBwdHJfdmVyc2lvbl9zdGFydClcbiAgICAgICAgbGV0IG1ham9yX3ZlcnNpb24gPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfdmVyc2lvbl9zdGFydCwgcHRyX2RlbGltaXRlcilcbiAgICAgICAgbGV0IHB0cl9lbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9kZWxpbWl0ZXIpXG4gICAgICAgIGxldCBtaW5vcl92ZXJzaW9uID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX2RlbGltaXRlciArIDEsIHB0cl9lbmQpXG5cbiAgICAgICAgdGhpcy52ZXJzaW9uID0geyBtYWpvcjogbWFqb3JfdmVyc2lvbiwgbWlub3I6IG1pbm9yX3ZlcnNpb24gfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnJlZSBvYmplY3QgaWQuIEl0IGZpcnN0IGNoZWNrcyB3ZXRoZXIgdGhlcmUgY2FuIGJlIGFuIGZyZWVkIG9iamVjdCBpZCByZXVzZWQuIElmIHRoYXQgaXMgbm90IHRoZSBjYXNlXG4gICAgICogaXQgY3JlYXRlcyBhIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldEZyZWVPYmplY3RJZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBnZXRDYXRhbG9nKCk6IENhdGFsb2dPYmplY3Qge1xuICAgICAgICBsZXQgcm9vdF9vYmogPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnJvb3RcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19wdHIgPSBvYmpfdGFibGVbcm9vdF9vYmoub2JqXS5wb2ludGVyXG5cbiAgICAgICAgbGV0IGNhdGFsb2dfb2JqZWN0ID0gbmV3IENhdGFsb2dPYmplY3QodGhpcy5kYXRhKVxuICAgICAgICBjYXRhbG9nX29iamVjdC5leHRyYWN0KGNhdGFsb2dfcHRyKVxuXG4gICAgICAgIHJldHVybiBjYXRhbG9nX29iamVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHRyZWUgb2JqZWN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0UGFnZVRyZWUoKTogUGFnZVRyZWUge1xuICAgICAgICBsZXQgb2JqX3RhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSB0aGlzLmdldENhdGFsb2coKVxuXG4gICAgICAgIGxldCBwYWdlc19pZCA9IGNhdGFsb2dfb2JqZWN0LmdldFBhZ2VzT2JqZWN0SWQoKVxuICAgICAgICBsZXQgcGFnZXNfcmVmID0gb2JqX3RhYmxlW3BhZ2VzX2lkLm9ial1cblxuICAgICAgICBpZiAocGFnZXNfcmVmLmdlbmVyYXRpb24gIT09IHBhZ2VzX2lkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2VzIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwYWdlVHJlZSA9IG5ldyBQYWdlVHJlZSh0aGlzLmRhdGEsIG9ial90YWJsZSlcbiAgICAgICAgcGFnZVRyZWUuZXh0cmFjdChwYWdlc19yZWYucG9pbnRlcilcblxuICAgICAgICByZXR1cm4gcGFnZVRyZWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB3aXRoIHRoZSBnaXZlbiBwYWdlTnVtYmVyXG4gICAgICogKi9cbiAgICBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IFBhZ2Uge1xuICAgICAgICBsZXQgcGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IHBhZ2VJZCA9IHBhZ2VUcmVlLmdldFBhZ2VSZWZlcmVuY2VzKClbcGFnZU51bWJlcl1cblxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGlmIChvYmpfdGFibGVbcGFnZUlkLm9ial0uZ2VuZXJhdGlvbiAhPT0gcGFnZUlkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IG9ial9wdHIgPSBvYmpfdGFibGVbcGFnZUlkLm9ial0ucG9pbnRlclxuXG4gICAgICAgIGxldCBwYWdlID0gbmV3IFBhZ2UodGhpcy5kYXRhLCB0aGlzLmRvY3VtZW50SGlzdG9yeSlcbiAgICAgICAgcGFnZS5leHRyYWN0KG9ial9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbm5vdGF0aW9ucyB0aGF0IGV4aXN0IGluIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZXh0cmFjdEFubm90YXRpb25zKCk6IEFubm90YXRpb25bXVtdIHtcbiAgICAgICAgbGV0IGFubm90czogQW5ub3RhdGlvbltdW10gPSBbXVxuICAgICAgICBsZXQgcHQ6IFBhZ2VUcmVlID0gdGhpcy5nZXRQYWdlVHJlZSgpXG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IHBhZ2VDb3VudDogbnVtYmVyID0gcHQuZ2V0UGFnZUNvdW50KClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcGFnZTogUGFnZSA9IHRoaXMuZ2V0UGFnZShpKVxuXG4gICAgICAgICAgICBsZXQgYW5ub3RhdGlvblJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCByZWZQdHIgb2YgYW5ub3RhdGlvblJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBBbm5vdGF0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICBhLmV4dHJhY3Qob2JqX3RhYmxlW3JlZlB0ci5vYmpdLnBvaW50ZXIsIHBhZ2UpXG4gICAgICAgICAgICAgICAgYS5wYWdlID0gaVxuICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHMucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5ub3RzLnB1c2gocGFnZUFubm90cylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbm5vdHNcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBieXRlIGFycmF5IHJlcHJlc2VudGluZyB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFV0aWwge1xuXG4gICAgcHVibGljIHN0YXRpYyBWRVJTSU9OOiBudW1iZXJbXSA9IFszNywgODAsIDY4LCA3MCwgNDVdIC8vICVQREYtXG4gICAgcHVibGljIHN0YXRpYyBET1Q6IG51bWJlciA9IDQ2XG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRTogc3RyaW5nID0gXCIvVHlwZSBcIlxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBfVFlQRTogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxXSAvLyAnL1R5cGUnXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl0gLy8gJ29iaidcbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XSAvLyAnZW5kb2JqJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlcltdID0gWzkxXSAvLyAnWydcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORDogbnVtYmVyW10gPSBbOTNdIC8vICddJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX1NUQVJUOiBudW1iZXJbXSA9IFs0MF0gLy8gJygnXG4gICAgcHVibGljIHN0YXRpYyBTVFJJTkdfRU5EOiBudW1iZXJbXSA9IFs0MV0gLy8gJyknXG4gICAgcHVibGljIHN0YXRpYyBSOiBudW1iZXJbXSA9IFs4Ml0gLy8gJ1InXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTZdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVFM6IG51bWJlcltdID0gWzQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2LCAxMTVdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdIC8vICc8PCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfRU5EOiBudW1iZXJbXSA9IFs2MiwgNjJdIC8vICc+PidcbiAgICBwdWJsaWMgc3RhdGljIFNVQlRZUEU6IG51bWJlcltdID0gWzQ3LCA4MywgMTE3LCA5OCwgMTE2LCAxMjEsIDExMiwgMTAxXSAvLyAnL1N1YnR5cGUnXG4gICAgcHVibGljIHN0YXRpYyBQQUdFUzogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDEsIDExNV0gLy8gL1BhZ2VzXG4gICAgcHVibGljIHN0YXRpYyBQQUdFOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIEtJRFM6IG51bWJlcltdID0gWzQ3LCA3NSwgMTA1LCAxMDAsIDExNV1cbiAgICBwdWJsaWMgc3RhdGljIENPVU5UOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTE3LCAxMTAsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgTTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyAnL00nXG4gICAgcHVibGljIHN0YXRpYyBUOiBudW1iZXJbXSA9IFs0NywgODRdIC8vICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIEY6IG51bWJlcltdID0gWzQ3LCA3MF0gLy8gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgQzogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyAnL0MnXG4gICAgcHVibGljIHN0YXRpYyBDQTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIE5NOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyAnL05NJ1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyW10gPSBbNDcsIDgwXSAvLyAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBDT05URU5UUzogbnVtYmVyW10gPSBbNDcsIDY3LCAxMTEsIDExMCwgMTE2LCAxMDEsIDExMCwgMTE2LCAxMTVdIC8vICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCT1JERVI6IG51bWJlcltdID0gWzQ3LCA2NiwgMTExLCAxMTQsIDEwMCwgMTAxLCAxMTRdIC8vICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgSU5LTElTVDogbnVtYmVyW10gPSBbNDcsIDczLCAxMTAsIDEwNywgNzYsIDEwNSwgMTE1LCAxMTZdIC8vICcvSW5rTGlzdCdcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJUWFJFRjogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG4gICAgcHVibGljIHN0YXRpYyBYUkVGOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICAvKipcbiAgICAgKiBBc3N1bWVzIHRoYXQgYXQgcG9zaXRpb24gaW5kZXggaXMgYSBkZWxpbWl0ZXIgYW5kIHRoYW4gcnVucyBhcyBsb25nIGZvcndhcmQgdW50aWwgaXQgZmluZHNcbiAgICAgKiBhbm90aGVyIGRlbGltaXRlciBvciByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHNraXBEZWxpbWl0ZXIoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBkYXRhLmxlbmd0aCAmJiB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaW5kZXhdKSkrK2luZGV4XG5cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIGFzY2lpIHZhbHVlc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0U3RyaW5nVG9Bc2NpaSh0b0NvbnZlcnQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGFzY2lpczogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Db252ZXJ0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhc2NpaXMucHVzaCgrdG9Db252ZXJ0LmNoYXJDb2RlQXQoaSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNjaWlzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlbGltaXRlcih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSAxMyB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IDMyIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gNDcgLy8gJy8nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHRoZSBzZXF1ZW5jZSBpbiBkYXRhIHN0YXJ0aW5nIGF0IHRoZSBvZmZzZXRcbiAgICAgKlxuICAgICAqIFNldCB0aGUgJ2Nsb3NlZCcgZmxhZyB0byBjaGVjayBpZiB0aGUgc3VjZWVkaW5nIGNoYXIgYWZ0ZXIgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgd2hvbGUgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwLCBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gb2Zmc2V0XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBzZXF1ZW5jZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGRhdGEubGVuZ3RoID09IGkgKyAxIHx8IHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpICsgMV0pIHx8IGRhdGFbaSArIDFdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAtIChzZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytqXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBzdGFydFxuICAgICAqIG9mIHRoZSB3aG9sZSBkYXRhIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZVJldmVyc2VkKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcblxuICAgICAgICBmb3IgKGxldCBqID0gc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCB8fCBpIC0gMSA8IDAgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gc2VxdWVuY2UubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLS1qXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBiZWZvcmUgdGhlIG5leHQgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXIoZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IGRhdGEubGVuZ3RoICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpKytvZmZzZXRcblxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlci4gRGVsaW1pdGVycyBjYW4gYmUgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZCBvZiB0aGUgd2hvbGUgc2VxdWVuY2VcbiAgICAgKiBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEpOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0ID4gMCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKS0tb2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGFycmF5IGRhdGEgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmRleC4gVGhlIGluZGV4IGNhbiBtYXJrIHRoZSBzdGFydCBvZiB0aGVcbiAgICAgKiBhcnJheSBvciBhIHBvaW50ZXIgd2l0aGluIHRoZSBhcnJheS4gSWYgaXQgaXMgYSBuZXN0ZWQgYXJyYXkgdGhlIHBvaW50ZXIgbXVzdCBtYXJrIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiB0aGUgc3ViZXJhcnJheS4gT3RoZXJ3aXNlIG9ubHkgdGhlIHN1YmFycmF5IGlzIGV4dHJhY3RlZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuQVJSQVlfU1RBUlQsIGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGlmICgtMSA9PT0gYXJyYXlfc3RhcnQpXG4gICAgICAgICAgICBhcnJheV9zdGFydCA9IGluZGV4XG5cbiAgICAgICAgbGV0IHJvb3RfbGlzdCA9IHsgcHRyOiBhcnJheV9zdGFydCwgbHN0OiBbXSB9XG4gICAgICAgIGxldCBzdGFydF9wb2ludGVyOiBhbnlbXSA9IFtyb290X2xpc3RdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5X3N0YXJ0ICsgMTsgaSA8IGRhdGEubGVuZ3RoICYmIHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMDspIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9uID0geyBwdHI6IGksIGxzdDogW10gfVxuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5wdHIgPSAtMSAvLyBtYXJrIGxpc3QgYXMgY29sbGVjdGlvbiBvZiBvdGhlciBsaXN0c1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXIucHVzaChfbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwID0gc3RhcnRfcG9pbnRlci5wb3AoKVxuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc3Npbmcgc3RhcnQgcG9pbnRlciAke0pTT04uc3RyaW5naWZ5KHNwKX1gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzcC5wdHIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc190b0FkZCA9IGRhdGEuc2xpY2Uoc3AucHRyICsgMSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKGFzX3RvQWRkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzX3RvQWRkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwLnB0ciA9PT0gLTEgJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5sc3QucHVzaChzcC5sc3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGkgKyAxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3RfbGlzdC5sc3RcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlTZXEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmJyOiBhbnkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheV9zZXF1ZW5jZSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIGFuIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBuYnJzOiBhbnkgPSBbXVxuXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXlTZXEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmJycy5wdXNoKFV0aWwuZXh0cmFjdE51bWJlcihhcnJheVNlcSwgaSkpXG5cbiAgICAgICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKSArIDFcbiAgICAgICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGFycmF5U2VxLCBpICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5icnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYnI6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2godGhpcy5leHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5X3NlcXVlbmNlKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5iclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAgICAgKiBlLmcuICBbNjkuNjk3IDQ3LjQxNDggOTYuNDY0NiA1OC4yNTk4IF1cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcnNBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheV9zZXF1ZW5jZXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbiBvYmplY3QgaWRlbnRpZmllclxuICAgICAqIDxJRD4gPEdFTj4gb2JqXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RPYmplY3RJZChkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICBsZXQgb2JqID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIGluZGV4LCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuICAgICAgICBsZXQgcl9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2UodGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaShcIiBSXCIpLCBkYXRhLCBpbmRleCwgdHJ1ZSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCwgcl9pbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIGFzIHR5cGVkIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlVHlwZWQoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuXG4gICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZGVsX2luZGV4ID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXIocmVmX2RhdGEsIDApXG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCAwLCBkZWxfaW5kZXgpXG4gICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBpZCwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAqIDxvYmpOdW1iZXI+IDxnZW5lcmF0aW9uPiBvYmpcbiAgICAgKiA8PFxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICAvVHlwZSAvPHR5cGU+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA+PlxuICAgICAqXG4gICAgICogQXBwcm9hY2g6IFdlIGlkZW50aWZ5IGFuIGluZGV4IHdpdGhpbiB0aGUgb2JqZWN0IGRlZmluaXRvbiBzZWFyY2ggdGhlIHVuaXF1ZWx5IGlkZW50aWZ5YWJsZSBlbmQgb2YgdGhlIG9iamVjdCBkZWZpbml0aW9uXG4gICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0QnlUeXBlKGRhdGE6IFVpbnQ4QXJyYXksIF90eXBlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgc2VhcmNoU2VxdWVuY2UgPSB0aGlzLmNvbnZlcnRTdHJpbmdUb0FzY2lpKHRoaXMuVFlQRSArIF90eXBlKVxuXG4gICAgICAgIGxldCBvYmpfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHNlYXJjaFNlcXVlbmNlLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGxldCBvYmpfZW5kID0gdGhpcy5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKSArIDZcblxuICAgICAgICBsZXQgb2JqX3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuT0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpXG5cbiAgICAgICAgbGV0IGdlbmVyYXRpb24gPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIG9ial9zdGFydCAtIDEpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgZ2VuZXJhdGlvbiAtIDEpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2Uob2JqX2lkLCBvYmpfZW5kKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFycmF5IG9mIG51bWJlcnMgYW5kIGFycmF5cyBvZiByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBNYXJrIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGFycmF5cyB0aGF0IGNvbnRhaW4gZGlmZmVyZW50IHR5cGVzLCBzbyBlaXRoZXJcbiAgICAgKiBpdCByZXR1cm5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy4gSG93ZXZlciB0aGUgZnVuY3Rpb24gc3VwcG9ydHNcbiAgICAgKiBhcmJpdHJhcmlseSBuZXN0aW5nIG9mIGFycmF5cy5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEFycmF5KGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLlJbMF0pIHsgLy8gJ1InIC0tIHdlIGtub3cgaXQgaXMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhLCBpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3ROdW1iZXJzQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmF0Y3MgdGhlIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0U3RyaW5nKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgMClcbiAgICAgICAgbGV0IHN0cmluZ19lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX0VORCwgZGF0YSwgMClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvcHRpb25cbiAgICAgKiAvPG9wdGlvbj5cbiAgICAgKlxuICAgICAqIHNvIGZvciBpbnN0YW5jZSBmb3IgL0hpZ2hsaWdodCBpdCB3b3VsZCByZXR1cm4gJ0hpZ2hsaWdodCdcbiAgICAgKlxuICAgICAqIFRoZSBpbmRleCBtdXN0IHBvaW50IHRvIHRoZSBcIi9cIlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T3B0aW9uVmFsdWUoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChkYXRhW2luZGV4XSAhPT0gNDcpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIm1pc3BsYWNlZCBvcHRpb24gdmFsdWUgcG9pbnRlclwiKVxuXG4gICAgICAgIGxldCBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBpbmRleCArIDEpXG5cbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcoQXJyYXkuZnJvbShkYXRhLnNsaWNlKGluZGV4ICsgMSwgZW5kICsgMSkpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zICd1bmRlZmluZWQnIGlmIHRoaXMgZmllbGQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0RmllbGQoZGF0YTogVWludDhBcnJheSwgZmllbGQ6IG51bWJlcltdLCBwdHI6IG51bWJlciA9IDApOiBhbnkge1xuICAgICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaWVsZHMgb2Ygb25lIG9iamVjdFxuICAgICAgICBsZXQgc3RhcnRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIGRhdGEsIHB0ciwgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgc3RhcnRfb2JqX3B0ciwgdHJ1ZSlcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydF9vYmpfcHRyLCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgZmllbGRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShmaWVsZCwgZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBpZiAoZmllbGRfcHRyID09PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBmaWVsZF9wdHIgKz0gZmllbGQubGVuZ3RoXG5cbiAgICAgICAgLy8gaGFuZGxlIGNhc2UgdGhhdCB0aGVyZSBpcyBhbiBvcHRpb24gdmFsdWUgLzx2YWx1ZT4gYWZ0ZXIgdGhlIGZpZWxkIC88ZmllbGQ+XG4gICAgICAgIGxldCBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBpZiAoZGF0YVtmaWVsZF92YWx1ZV9lbmRfcHRyIC0gMV0gPT09IDQ3KSB7IC8vIDQ3ID0gJy8nXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0T3B0aW9uVmFsdWUoZGF0YSwgZmllbGRfdmFsdWVfZW5kX3B0ciAtIDEpXG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShbNDddLCBkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgZmllbGRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBsZXQgdmFsdWVfZGF0YSA9IGRhdGEuc2xpY2UoZmllbGRfcHRyLCBmaWVsZF92YWx1ZV9lbmRfcHRyKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXlcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0QXJyYXkodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RTdHJpbmcodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vIFJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgUmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyKHZhbHVlX2RhdGEsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBhc2NpaSBlbmNvZGVkIG51bWJlciBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcihkYXRhOiBVaW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuXG4gICAgICAgIGlmICgtMSA9PSBlbmQpIHtcbiAgICAgICAgICAgIGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IGlkZW50aWZ5IG51bWJlciBib3VuZHM6IFske3N0YXJ0fSwke2VuZH1dYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJfaWQgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFwiXCIgPT09IHN0cl9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBwYXJzZSBudW1iZXIgYXQgcG9zaXRpb24gJHtzdGFydH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICtzdHJfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhcyBhcmd1bWVudCBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZCByZXR1cm5zIHRob3NlIHR5cGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2U6IFVpbnQ4QXJyYXkpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICBsZXQgcmVmczogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgd2hpbGUgKGkgPCBhcnJheV9zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZnMucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChhcnJheV9zZXF1ZW5jZSwgaSkpXG4gICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlIsIGFycmF5X3NlcXVlbmNlLCBpLCB0cnVlKSArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgaW50byBQREYgZm9ybWF0dGluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGF0ZVRvUERGRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGVfc3RyID0gXCIoRDpcIlxuICAgICAgICBkYXRlX3N0ciArPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgbGV0IG1vbnRoOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1vbnRoLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1vbnRoXG4gICAgICAgIGxldCBkYXk6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGRheS5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBkYXlcbiAgICAgICAgbGV0IGhvdXJzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoaG91cnMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgaG91cnNcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbWludXRlc1xuICAgICAgICBsZXQgc2Vjb25kczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoc2Vjb25kcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmRzXG4gICAgICAgIHJldHVybiBkYXRlX3N0ciArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1bmljb2RlIHNlcXVlbmNlIGludG8gYSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFVuaWNvZGVUb1N0cmluZyh2YWw6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICAgICAgICAgIHZhbCA9IG5ldyBVaW50OEFycmF5KHZhbClcblxuICAgICAgICBpZiAodmFsWzBdID09PSAyNTQgJiYgdmFsWzFdID09PSAyNTUpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgyLCB2YWwubGVuZ3RoKVxuXG4gICAgICAgICAgICBsZXQgdWludFRvU3RyaW5nID0gKHVpbnRBcnJheTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpbnRBcnJheS5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHVpbnRBcnJheVtpXSA8PCA4KSB8IHVpbnRBcnJheVtpICsgMV0gJiAweEZGKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJldCA9IHVpbnRUb1N0cmluZyh2YWwpXG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdXRmLTggY29tcHJlc3Npb25cbiAgICAgICAgbGV0IFV0ZjhBcnJheVRvU3RyID0gKGFycmF5OiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcjEgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyMSA+PiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiBjYXNlIDI6IGNhc2UgMzogY2FzZSA0OiBjYXNlIDU6IGNhc2UgNjogY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lIGJ5dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDFGKSA8PCA2KSB8IChjaGFyMiAmIDB4M0YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocmVlIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIzID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjaGFyMSAmIDB4MEYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMiAmIDB4M0YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGNoYXIzICYgMHgzRikgPDwgMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldCA9IFV0ZjhBcnJheVRvU3RyKEFycmF5LmZyb20odmFsKSlcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEFzY2lpVG9TdHJpbmcodmFsOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IFwiXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEgbnVtYmVyIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGl0cyBjaGFyIHJlcHJlc2VudGF0aW9uc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkobmJyOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFN0cmluZyhuYnIpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHR3byBhcnJheXMgYW5kIGNoZWNrcyB0aGVpciBlcXVhbGl0eVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBhcmVBcnJheXNFcXVhbChhcnJheV9vbmU6IFVpbnQ4QXJyYXkgfCBudW1iZXJbXSwgYXJyYXlfdHdvOiBVaW50OEFycmF5IHwgbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGFycmF5X29uZS5sZW5ndGggIT09IGFycmF5X3R3by5sZW5ndGgpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlfb25lLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlfb25lW2ldICE9PSBhcnJheV90d29baV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UsIFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBXcml0ZXJVdGlsIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSByZWZlcmVuY2UgcG9pbnRlclxuICAgICAqXG4gICAgICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAgICAgKlxuICAgICAqIFRoZSAnUicgYW5kIHRoZSBwcmVjZWRpbmcgc3BhY2UgaXMgb25seSB3cml0dGVuIGluIGNhc2UgJ3JlZmVyZW5jZWQnIGlzIHRydWVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZjogUmVmZXJlbmNlUG9pbnRlciwgcmVmZXJlbmNlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5vYmopXG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5nZW5lcmF0aW9uKSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKC4uLlV0aWwuUilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHByZWNlZGluZyB6ZXJvcyAoMCkgaW4gZnJvbnQgb2YgdGhlICd2YWx1ZScgdG8gbWF0Y2ggdGhlIGxlbmd0aFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBwYWQobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQucHVzaCg0OClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodmFsdWUpKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBuZXN0ZWQgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTmVzdGVkTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IHN1YkFycmF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShzdWJBcnJheSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBqYXZhc2NyaXB0IG51bWJlciBhcnJheSB0byBhIFBERiBudW1iZXIgYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVOdW1iZXJBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IGkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHRoZSAvQW5ub3RzIGZpZWxkIGluIGFuIHBhZ2Ugb2JqZWN0XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZUFubm90c0ZpZWxkSW5QYWdlT2JqZWN0KGRhdGE6IFVpbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG4gICAgICAgICAgICBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwuc2tpcERlbGltaXRlcihjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzX2FycmF5X2VuZClcblxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2Fubm90c19hcnJheV9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwdHJfZGljdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5ESUNUX0VORCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGggLSAxLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2RpY3RfZW5kKSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9kaWN0X2VuZCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGgpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuQ1IpXG4gICAgICAgIHJldC5wdXNoKFV0aWwuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSdcbmltcG9ydCB7IFdyaXRlclV0aWwgfSBmcm9tICcuL3dyaXRlci11dGlsJ1xuXG4vKipcbiAqIENyZWF0cyB0aGUgYnl0ZSBhcnJheSB0aGF0IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTjogbnVtYmVyID0gMTEwXG4gICAgcHVibGljIHN0YXRpYyBGOiBudW1iZXIgPSAxMDJcblxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXIgPSA5MVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXIgPSA5M1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXVxuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml1cbiAgICBwdWJsaWMgc3RhdGljIFRZUEVfQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMSwgV3JpdGVyLlNQQUNFLCA0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBVUERBVEVfREFURTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyA9ICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIEFVVEhPUjogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyA9ICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL0NvbnRlbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9TVEFSVDogbnVtYmVyID0gNDBcbiAgICBwdWJsaWMgc3RhdGljIEJSQUNLRVRfRU5EOiBudW1iZXIgPSA0MVxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyA9ICcvRidcbiAgICBwdWJsaWMgc3RhdGljIElEOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyA9ICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBDT0xPUjogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyA9ICcvQydcbiAgICBwdWJsaWMgc3RhdGljIE9QQUNJVFk6IG51bWJlcltdID0gWzQ3LCA2NywgNjVdIC8vID0gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gPSAnL0JvcmRlcidcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VfUkVGRVJFTkNFOiBudW1iZXJbXSA9IFs0NywgODBdIC8vID0gJy9QJ1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUFBFQVJBTkNFOiBudW1iZXJbXSA9IFs0NywgNjgsIDY1XSAvLyA9ICcvREEnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gPSAnL0lua0xpc3QnXG5cbiAgICBwdWJsaWMgc3RhdGljIFRSQUlMRVI6IG51bWJlcltdID0gWzExNiwgMTE0LCA5NywgMTA1LCAxMDgsIDEwMSwgMTE0XSAvLyA9ICd0cmFpbGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyA9ICcvU2l6ZSdcbiAgICBwdWJsaWMgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gPSAnL1Jvb3QnXG4gICAgcHVibGljIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vID0nL1ByZXYnXG4gICAgcHVibGljIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU9GOiBudW1iZXJbXSA9IFszNywgMzcsIDY5LCA3OSwgNzBdIC8vID0gJyUlRU9GJ1xuXG4gICAgcHVibGljIHN0YXRpYyBYUkVGOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICBwdWJsaWMgc3RhdGljIFFVQURQT0lOVFM6IG51bWJlcltdID0gWzQ3LCA4MSwgMTE3LCA5NywgMTAwLCA4MCwgMTExLCAxMDUsIDExMCwgMTE2LCAxMTVdIC8vID0gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgVkVSVElDRVM6IG51bWJlcltdID0gWzQ3LCA4NiwgMTAxLCAxMTQsIDExNiwgMTA1LCA5OSwgMTAxLCAxMTVdIC8vID0gJy9WZXJ0aWNlcydcbiAgICBwdWJsaWMgc3RhdGljIE5BTUU6IG51bWJlcltdID0gWzQ3LCA3OCwgOTcsIDEwOSwgMTAxXSAvLyA9ICcvTmFtZSdcbiAgICBwdWJsaWMgc3RhdGljIERSQUZUOiBudW1iZXJbXSA9IFs0NywgNjgsIDExNCwgOTcsIDEwMiwgMTE2XSAvLyA9ICcvRHJhZnQnXG5cbiAgICBwdWJsaWMgc3RhdGljIFNZOiBudW1iZXJbXSA9IFs0NywgODMsIDEyMV0gLy8gPSAnL1N5J1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyID0gODBcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgeHJlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBkYXRhIDogVGhlIGRhdGEgcmVwcmVzZW50aW5nIHRoZSBvcmlnaW5hbCBQREYgZG9jdW1lbnRcbiAgICAgKiBhYW5ub3RhdGlvbnMgOiBUaGUgYW5ub3RhdGlvbnMgdG8gYWRkIHRvIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5LCBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSwgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGFubm90YXRpb25zIHBhZ2V3aXNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIGFubm90YXRpb24gYXJyYXlzIG9mIHRoZSBzaXRlcyBtdXN0IGJlIGV4dGVuZGVkXG4gICAgICogYW5kIGl0IG1ha2VzIHNlbnNlIHRvIGRvIHRoaXMgdXBkYXRlIGluIG9uZSBzdGVwLlxuICAgICAqICovXG4gICAgc29ydFBhZ2VXaXNlKGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10pOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSB7XG4gICAgICAgIGxldCBwYWdlQW5ub3RzOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghcGFnZUFubm90c1thbm5vdC5wYWdlXSlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdID0gW11cblxuICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXS5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VBbm5vdHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCByZXR1cm5zIHRoZSBwYWdlIG9iamVjdCBlaXRoZXIgZXh0ZW5kZWQgYnkgYSAvQW5ub3RzIGZpZWxkLCBpZiB0aGlzIGRpZCBub3QgZXhpc3QgeWV0IG9yIHdpdGggdGhlIGFubm90cyBmaWVsZCByZXBsYWNlZCBieSBhIHJlcmZlcmVuY2UgcG9pbnRlclxuICAgICAqIHRvIGFuIGFycmF5IGlmIHRoZSBwYWdlIG9iamVjdCBjb250YWlucyB0aGUgbGlzdCBvZiBhbm5vdGF0aW9ucyBkaXJlY3RseVxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBhZGFwdFBhZ2VPYmplY3QocGFnZTogUGFnZSwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuICAgICAgICBsZXQgbG9va3VwVGFibGUgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlX3B0cjogWFJlZiA9IGxvb2t1cFRhYmxlW3BhZ2Uub2JqZWN0X2lkLm9ial1cblxuICAgICAgICByZXR1cm4gV3JpdGVyVXRpbC5yZXBsYWNlQW5ub3RzRmllbGRJblBhZ2VPYmplY3QodGhpcy5kYXRhLCBwYWdlLCBwYWdlX3B0ci5wb2ludGVyLCBhbm5vdF9hcnJheV9yZWZlcmVuY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIGFubm90YXRpb25zIG9mID4+b25lPDwgcGFnZSBhbmQgZGVyaXZlcyB0aGUgYW5ub3RhdGlvbnMgYXJyYXkgZnJvbSBpdC5cbiAgICAgKiBUaGVyZWJ5IGl0IGFsc28gY29uc2lkZXJzIHRoZSBwb3RlbnRpYWxseSBleGlzdGluZyBhbm5vdGF0aW9uIGFycmF5LlxuICAgICAqXG4gICAgICogdG9EZWxldGUgOj0gY29udGFpbnMgdGhvc2UgYW5ub3RhdGlvbnMgdGhhdCBtdXN0IGJlIGRlbGV0ZWQuIEl0IHJlbW92ZXMgdGhlbSBmcm9tIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgKiBhbmQgbWFya3MgdGhlbSBhcyByZW1vdmVkXG4gICAgICogKi9cbiAgICB3cml0ZUFubm90QXJyYXkoYW5ub3RzOiBBbm5vdGF0aW9uW10sIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10sIHBhZ2VSZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIsIHBhZ2VEYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBhbm5vdHNbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF4Lm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb24gd2l0aCBvYmplY3RfaWQgbnVsbFwiKVxuXG4gICAgICAgICAgICByZXR1cm4geC5vYmplY3RfaWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcGFnZV9kYXRhOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGlmICghcmVmQXJyYXlfaWQpIHtcbiAgICAgICAgICAgIHJlZkFycmF5X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgICAgIHBhZ2VfZGF0YSA9IHRoaXMuYWRhcHRQYWdlT2JqZWN0KHBhZ2UsIHJlZkFycmF5X2lkKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQsIHBhZ2VSZWZlcmVuY2U6IHBhZ2Uub2JqZWN0X2lkLCBwYWdlRGF0YTogcGFnZV9kYXRhIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN1YnR5cGUgdG8gaXRzIGJ5dGUgcmVwcmVzZW50YXRpb25cbiAgICAgKiAqL1xuICAgIGNvbnZlcnRTdWJ0eXBlKHN0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHN3aXRjaCAoc3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxuICAgICAgICAgICAgY2FzZSAnL1RleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvVGV4dCdcbiAgICAgICAgICAgIGNhc2UgJ0hpZ2hsaWdodCc6XG4gICAgICAgICAgICBjYXNlICcvSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MiwgMTA1LCAxMDMsIDEwNCwgMTA4LCAxMDUsIDEwMywgMTA0LCAxMTZdIC8vID0gJy9IaWdobGlnaHQnXG4gICAgICAgICAgICBjYXNlICdVbmRlcmxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1VuZGVybGluZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODUsIDExMCwgMTAwLCAxMDEsIDExNCwgMTA4LCAxMDUsIDExMCwgMTAxXSAvLyA9ICcvVW5kZXJsaW5lJ1xuICAgICAgICAgICAgY2FzZSAnU3F1aWdnbHknOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWlnZ2x5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDEwNSwgMTAzLCAxMDMsIDEwOCwgMTIxXSAvLyA9ICcvU3F1aWdnbHknXG4gICAgICAgICAgICBjYXNlICdTdHJpa2VPdXQnOlxuICAgICAgICAgICAgY2FzZSAnL1N0cmlrZU91dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgMTE0LCAxMDUsIDEwNywgMTAxLCA3OSwgMTE3LCAxMTZdIC8vID0gJy9TdHJpa2VPdXQnXG4gICAgICAgICAgICBjYXNlICdTcXVhcmUnOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWFyZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExMywgMTE3LCA5NywgMTE0LCAxMDFdIC8vID0gJy9TcXVhcmUnXG4gICAgICAgICAgICBjYXNlICdDaXJjbGUnOlxuICAgICAgICAgICAgY2FzZSAnL0NpcmNsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDEwNSwgMTE0LCA5OSwgMTA4LCAxMDFdIC8vID0gJy9DaXJjbGUnXG4gICAgICAgICAgICBjYXNlICdGcmVlVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvRnJlZVRleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcwLCAxMTQsIDEwMSwgMTAxLCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL0ZyZWVUZXh0J1xuICAgICAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICBjYXNlICcvUG9seWdvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODAsIDExMSwgMTA4LCAxMjEsIDEwMywgMTExLCAxMTBdIC8vID0gJy9Qb2x5Z29uJ1xuICAgICAgICAgICAgY2FzZSAnUG9seUxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1BvbHlMaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgNzYsIDEwNSwgMTEwLCAxMDFdIC8vICcvUG9seUxpbmVcbiAgICAgICAgICAgIGNhc2UgJ1N0YW1wJzpcbiAgICAgICAgICAgIGNhc2UgJy9TdGFtcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgOTcsIDEwOSwgMTEyXSAvLyA9ICcvU3RhbXAnXG4gICAgICAgICAgICBjYXNlICdDYXJldCc6XG4gICAgICAgICAgICBjYXNlICcvQ2FyZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDY3LCA5NywgMTE0LCAxMDEsIDExNl0gLy8gPSAnL0NhcmV0J1xuICAgICAgICAgICAgY2FzZSAnSW5rJzpcbiAgICAgICAgICAgIGNhc2UgJy9JbmsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDczLCAxMTAsIDEwN10gLy8gPSAnL0luaydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhbiBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAqICovXG4gICAgd3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90OiBBbm5vdGF0aW9uKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBpZiAoIWFubm90LmF1dGhvcilcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90LmNvbnRlbnRzKVxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIG9iamVjdF9pZFwiKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3Qub2JqZWN0X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5UWVBFX0FOTk9UKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LnJlY3QgJiYgYW5ub3QucmVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5SRUNUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucmVjdCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TVUJUWVBFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy5jb252ZXJ0U3VidHlwZShhbm5vdC50eXBlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlVQREFURV9EQVRFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC51cGRhdGVEYXRlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkFVVEhPUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmF1dGhvcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5jb250ZW50cykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09OVEVOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5jb250ZW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5JRClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuaWQpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmFubm90YXRpb25fZmxhZykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRkxBRylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5jb2xvcikge1xuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLnIgPiAxKSBhbm5vdC5jb2xvci5yIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmcgPiAxKSBhbm5vdC5jb2xvci5nIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmIgPiAxKSBhbm5vdC5jb2xvci5iIC89IDI1NVxuXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT0xPUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5jb2xvci5yLCBhbm5vdC5jb2xvci5nLCBhbm5vdC5jb2xvci5iXSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBvcGFjaXR5ID0gYW5ub3Qub3BhY2l0eVxuICAgICAgICBpZiAob3BhY2l0eSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT1BBQ0lUWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkob3BhY2l0eSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuYm9yZGVyKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5CT1JERVIpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuYm9yZGVyLmhvcml6b250YWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLnZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci5ib3JkZXJfd2lkdGhdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuREVGQVVMVF9BUFBFQVJBTkNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuZGVmYXVsdEFwcGVhcmFuY2UpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbm5vdC5wYWdlUmVmZXJlbmNlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmIChhbm5vdC5wYWdlUmVmZXJlbmNlLm9iamVjdF9pZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUEFHRV9SRUZFUkVOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5xdWFkUG9pbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5RVUFEUE9JTlRTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucXVhZFBvaW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QudmVydGljZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlZFUlRJQ0VTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QudmVydGljZXMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnN0YW1wVHlwZSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuTkFNRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRSQUZUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNhcmV0U3ltYm9sKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5QKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90Lmlua0xpc3QpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklOS0xJU1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOZXN0ZWROdW1iZXJBcnJheShhbm5vdC5pbmtMaXN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiBhbm5vdC5vYmplY3RfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYWxsIHRoZSBjcm9zcyBzaXRlIHJlZmVyZW5jZSB0YWJsZSBlbnRyaWVzIGFuZCBleHRyYWN0cyB0aGUgY29uc2VjdXRpdmUgc2VxdWVuY2VzXG4gICAgICogKi9cbiAgICBjb21wdXRlWHJlZlNlcXVlbmNlcygpOiBYUmVmW11bXSB7XG4gICAgICAgIGxldCBzZXFzOiBYUmVmW11bXSA9IFtdXG5cbiAgICAgICAgbGV0IG9yZGVyZWRfeHJlZnMgPSB0aGlzLnhyZWZzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2VxOiBYUmVmW10gPSBbb3JkZXJlZF94cmVmc1swXV1cbiAgICAgICAgbGV0IGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzWzBdLmlkXG4gICAgICAgIHNlcXMucHVzaChzZXEpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3JkZXJlZF94cmVmcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyZWRfeHJlZnNbaV0uaWQgPT09IGxhc3RfaWQgKyAxKSB7XG4gICAgICAgICAgICAgICAgc2VxLnB1c2gob3JkZXJlZF94cmVmc1tpXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VxID0gW29yZGVyZWRfeHJlZnNbaV1dXG4gICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzW2ldLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vxc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgdGhlIHBvaW50ZXJzIG9mIHRoZSBsaW5rZWQgbGlzdCB0aGF0IGNvbnRhaW5zIHRoZSBpZHMgb2YgZnJlZWQgb2JqZWN0c1xuICAgICAqICovXG4gICAgYXBwbHlPYmplY3RGcmVlaW5nKHJlZnM6IFhSZWZbXSk6IFhSZWZbXSB7XG4gICAgICAgIC8vIHdyaXRlIGZyZWUgb2JqZWN0IGhlYWRcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVswXVxuICAgICAgICBsZXQgbGFzdF9mcmVlZF9vYmplY3RfaWQgPSBoZWFkLmlkXG5cbiAgICAgICAgbGV0IGZyZWVkX29ianM6IFhSZWZbXSA9IHJlZnMuZmlsdGVyKHIgPT4gci5mcmVlKVxuICAgICAgICBmcmVlZF9vYmpzID0gZnJlZWRfb2Jqcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5pZCA8IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICBpZiAoYS5pZCA+IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGxhc3RvYmo6IFhSZWYgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIGZyZWVkX29ianMpIHtcbiAgICAgICAgICAgIGlmICghbGFzdG9iaikge1xuICAgICAgICAgICAgICAgIC8vIHNldCBmaXJzdCBvYmplY3QgYXMgbGlzdCBoZWFkZXJcbiAgICAgICAgICAgICAgICBoZWFkLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3RvYmopIHtcbiAgICAgICAgICAgICAgICBsYXN0b2JqLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdG9iaiA9IG9ialxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyZWVkX29ianMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGZyZWVkX29ianNbZnJlZWRfb2Jqcy5sZW5ndGggLSAxXS5wb2ludGVyID0gbGFzdF9mcmVlZF9vYmplY3RfaWRcblxuICAgICAgICByZWZzLnB1c2goaGVhZClcblxuICAgICAgICByZXR1cm4gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgY3Jvc3NpdGUgcmVmZXJlbmNlIHRhYmxlXG4gICAgICogKi9cbiAgICB3cml0ZUNyb3NzU2l0ZVJlZmVyZW5jZVRhYmxlKCk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuWFJFRlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICB0aGlzLnhyZWZzID0gdGhpcy5hcHBseU9iamVjdEZyZWVpbmcodGhpcy54cmVmcylcblxuICAgICAgICBsZXQgb3JkZXJlZF9zZXF1ZW5jZXMgPSB0aGlzLmNvbXB1dGVYcmVmU2VxdWVuY2VzKClcblxuICAgICAgICBmb3IgKGxldCBzZXF1ZW5jZSBvZiBvcmRlcmVkX3NlcXVlbmNlcykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBzZXF1ZW5jZVswXVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShoZWFkLmlkKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoc2VxdWVuY2UubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBfcmV0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDEwLCBzZXF1ZW5jZVtpXS5wb2ludGVyKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIF9yZXQgPSBfcmV0LmNvbmNhdChXcml0ZXJVdGlsLnBhZCg1LCBzZXF1ZW5jZVtpXS5nZW5lcmF0aW9uKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLmZyZWUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuRilcblxuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS51cGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTilcblxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIGlmIChfcmV0Lmxlbmd0aCA8IDIwKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlhSZWYgZW50cnkgPCAyMCBieXRlc1wiKVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChfcmV0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgdHJhaWxlclxuICAgICAqICovXG4gICAgd3JpdGVUcmFpbGVyKHBvc1hyZWY6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuVFJBSUxFUlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TSVpFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LnRyYWlsZXJTaXplKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXJcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUk9PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHRyYWlsZXIucm9vdCwgdHJ1ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QUkVWKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnN0YXJ0X3BvaW50ZXIpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TVEFSVFhSRUYpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocG9zWHJlZikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FT0YpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIGFubmF0aW9ucyBhdCB0aGUgZW5kIG9mIHRoZSBQREYgYnl0ZSByZXByZXNlbnRhdGlvbiBhbmQgcmV0dXJuc1xuICAgICAqIHRoZSBieXRlIGFycmF5XG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkID0gdGhpcy5zb3J0UGFnZVdpc2UodGhpcy5hbm5vdGF0aW9ucylcblxuICAgICAgICBsZXQgcHRyOiBudW1iZXIgPSB0aGlzLmRhdGEubGVuZ3RoXG5cbiAgICAgICAgbGV0IG5ld19kYXRhOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgLy8gRml4IGNhc2UgdGhhdCB0aGVyZSBpcyBubyBsaW5lYnJlYWsgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgZmlsZVxuICAgICAgICBpZiAodGhpcy5kYXRhW3B0ciAtIDFdID09PSA3MCkge1xuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICBuZXdfZGF0YS5wdXNoKFdyaXRlci5MRilcbiAgICAgICAgICAgIHB0ciArPSAyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWQpIHtcbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzID0gcGFnZVdpc2VTb3J0ZWRba2V5XVxuXG4gICAgICAgICAgICAvLyB3cml0ZSB0aGUgYXJyYXkgcmVmZXJlbmNpbmcgdG8gYW5ub3RhdGlvbnMgb2YgYSBjZXJ0YWluIHBhZ2VcbiAgICAgICAgICAgIC8vIGl0IGFsc28gcmVtb3ZlcyByZWZlcmVuY2VzIG9mIGFubm90YXRpb25zIHRoYXQgbXVzdCBiZSBkZWxldGVkXG4gICAgICAgICAgICBsZXQgYW5ub3RfYXJyYXkgPSB0aGlzLndyaXRlQW5ub3RBcnJheShwYWdlQW5ub3RzLCB0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucHRyLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5kYXRhKVxuICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LmRhdGEubGVuZ3RoXG5cbiAgICAgICAgICAgIC8vIGFkZCBhZGFwdGVkIHBhZ2Ugb2JqZWN0IGlmIGl0IGV4aXN0cyAtLSBJbiB0aGUgY2FzZSB0aGUgcGFnZSBoYWQgbm8gYW5ub3RhdGlvbiB5ZXQgdGhlcmUgZXhpc3RzXG4gICAgICAgICAgICAvLyBubyBzdWNoIGFycmF5IHJlZmVycmluZyB0byBpdHMgYW5ub3RhdGlvbnMuIEEgcG9pbnRlciB0byBzdWNoIGFuIGFycmF5IGFycmF5IG11c3QgYmUgYWRkZWQgdG8gdGhlXG4gICAgICAgICAgICAvLyBwYWdlIG9iamVjdC4gSWYgdGhpcyB3YXMgZG9uZSB0aGUgYHBhZ2VEYXRhYCBwYXJhbWF0ZXIgaXMgc2V0IGFuZCBjb250YWlucyB0aGUgYWRhcHRlZCBwYWdlIG9iamVjdFxuICAgICAgICAgICAgaWYgKGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5wYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBwdHIgKz0gYW5ub3RfYXJyYXkucGFnZURhdGEubGVuZ3RoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdyaXRlcyB0aGUgYWN0dWFsIGFubm90YXRpb24gb2JqZWN0XG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBwYWdlQW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90X29iaiA9IHRoaXMud3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90KVxuICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhbm5vdF9vYmoucHRyLm9iaixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBhbm5vdF9vYmoucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3Rfb2JqLmRhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X29iai5kYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGFrZSBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgbm90IGRlbGV0ZWQgeWV0XG4gICAgICAgIGxldCBfdG9EZWxldGU6IEFubm90YXRpb25bXSA9IHRoaXMudG9EZWxldGUuZmlsdGVyKCh0KSA9PiAhdC5pc19kZWxldGVkKVxuICAgICAgICBsZXQgcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSA9IHRoaXMuc29ydFBhZ2VXaXNlKF90b0RlbGV0ZSlcblxuICAgICAgICAvLyBhZGFwdCB0aGUgcmVtYWluaW5nIGFubm90YXRpb24gcmVmZXJlbmNlIHRhYmxlc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSkge1xuICAgICAgICAgICAgbGV0IGRlbF9kYXRhID0gdGhpcy51cGRhdGVQYWdlQW5ub3RhdGlvblJlZmVyZW5jZUFycmF5KHBhZ2VXaXNlU29ydGVkVG9EZWxldGVba2V5XSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGRlbF9kYXRhLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGRlbF9kYXRhLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoZGVsX2RhdGEuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBkZWxfZGF0YS5kYXRhLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXQgdGhpcyBwb2ludCBhbGwgcmVmZXJlbmNlcyB0byBhbm5vdGF0aW9uIG9iamVjdHMgaW4gcGFnZXMgc2hvdWxkIGJlIHJlbW92ZWQgYW5kIHdlIGNhbiBmcmVlXG4gICAgICAgIC8vIHRoZSBhbm5vdGF0aW9uIG9iamVjdCBpZHNcbiAgICAgICAgZm9yIChsZXQgdG9EZWwgb2YgdGhpcy50b0RlbGV0ZSkge1xuICAgICAgICAgICAgaWYgKCF0b0RlbC5vYmplY3RfaWQpXG4gICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdG9EZWwub2JqZWN0X2lkLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiAtMSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiB0b0RlbC5vYmplY3RfaWQuZ2VuZXJhdGlvbiArIDEsIC8vIGluY3JlYXNlIGdlbmVyYXRpb25cbiAgICAgICAgICAgICAgICBmcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3J0YWJsZSA9IHRoaXMud3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSgpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGNydGFibGUpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLndyaXRlVHJhaWxlcihwdHIpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KHRyYWlsZXIpXG5cbiAgICAgICAgbGV0IG5ld19kYXRhX2FycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3X2RhdGEpXG5cbiAgICAgICAgbGV0IHJldF9hcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5sZW5ndGggKyBuZXdfZGF0YV9hcnJheS5sZW5ndGgpXG4gICAgICAgIHJldF9hcnJheS5zZXQodGhpcy5kYXRhKVxuICAgICAgICByZXRfYXJyYXkuc2V0KG5ld19kYXRhLCB0aGlzLmRhdGEubGVuZ3RoKVxuXG4gICAgICAgIHJldHVybiByZXRfYXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBhbm5vdGF0aW9uXG4gICAgICogKi9cbiAgICB1cGRhdGVQYWdlQW5ub3RhdGlvblJlZmVyZW5jZUFycmF5KHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGxldCBwYWdlID0gdG9EZWxldGVbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfU1RBUlQpXG5cblxuICAgICAgICBmb3IgKGxldCBhbiBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFuLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogcmVmQXJyYXlfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==