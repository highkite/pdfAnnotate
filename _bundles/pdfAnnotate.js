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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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QUMsTUFBTSxDQUFDLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFFM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBR0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87UUFDM0IsSUFBSSxPQUFPLEVBQUU7WUFDVCxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENB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O0FBQzdGLGVBQVEsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsZ0JBQWdCO0FBQ2hGLFdBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxZQUFZO0FBQ3BELFlBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtBQUUzRCxTQUFFLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDLFVBQVU7QUFDdkMsUUFBQyxHQUFXLEVBQUU7QUE5Q2hDLHdCQXlyQkMiLCJmaWxlIjoicGRmQW5ub3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInBkZkFubm90YXRlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBkZkFubm90YXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBkZkFubm90YXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSwgQW5ub3RhdGlvbiwgQm9yZGVyLCBDb2xvciB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IFdyaXRlciB9IGZyb20gJy4vd3JpdGVyJ1xuXG4vKipcbiAqIFRoZSBhbm5vdGF0aW9uIGZhY3RvcnkgcHJvdmlkZXMgbWV0aG9kcyB0byBjcmVhdGUgYW5ub3RhdGlvbnMuIFRob3NlIGFyZSBzdG9yZWQgdGVtcG9yYXJ5XG4gKiBhbmQgdGhhbiBlbmNvZGVkIGludG8gUERGIGNvZGUgd2hlbiB0aGUgUERGIGRvY3VtZW50IGlzIG91dHB1dHRlZCBhbmQgZm9yIGluc3RhbmNlIGRvd25sb2FkZWQuXG4gKiBUaGF0XG4gKiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSB0b0RlbGV0ZTogQW5ub3RhdGlvbltdID0gW11cblxuICAgIHByaXZhdGUgcGFyc2VyOiBQREZEb2N1bWVudFBhcnNlclxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgUERGRG9jdW1lbnRQYXJzZXIodGhpcy5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhbm5vdGF0aW9ucyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFBERiBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgYSBQREYgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBnaXZlbiAncGF0aCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIGZldGNoKHBhdGgpLnRoZW4oKHIpID0+IHIuYmxvYigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXI6IGFueSA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQW5ub3RhdGlvbkZhY3RvcnkocmVhZGVyLnJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHsgLy8gbm9kZSBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGVudmlyb25tZW50XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkZW50aWZpZXIgbmVjZXNzYXJ5IGZvciBjcmVhdGluZyB0aGUgYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiBcIihwZGZBbm5vdGF0ZS1cIiArIFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSkuc2xpY2UoMywgMTcpICsgXCItXCIgKyB0aGlzLmFubm90YXRpb25zLmxlbmd0aCArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZGVmYXVsdCBib3JkZXJcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEJvcmRlcigpOiBCb3JkZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcl93aWR0aDogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBtYWRlIGFubm90YXRpb25zIGludG8gYSBieXRlc3RyZWFtXG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudG9EZWxldGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuXG4gICAgICAgIGxldCB3cml0ZXI6IFdyaXRlciA9IG5ldyBXcml0ZXIodGhpcy5kYXRhLCB0aGlzLmFubm90YXRpb25zLCB0aGlzLnRvRGVsZXRlLCB0aGlzLnBhcnNlcilcblxuICAgICAgICByZXR1cm4gd3JpdGVyLndyaXRlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlICdyZWN0JyBwYXJhbWV0ZXIsIHdoZXRoZXIgYWxsIHRoZSBlbnRyaWVzIGFyZSBvZiB0eXBlIG51bWJlciBhbmQgaWYgdGhlIHRoZSBudW1iZXIgb2YgZW50cmllcyBpcyBjb3JyZWN0XG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUmVjdChucjogbnVtYmVyLCByZWN0OiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocmVjdC5sZW5ndGggIT09IG5yKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWN0IGhhcyBpbnZhbGlkIG51bWJlciBvZiBlbnRyaWVzOiBcIiArIHJlY3QgKyBcIiBoYXMgXCIgKyByZWN0Lmxlbmd0aCArIFwiIGVudHJpZXMsIGJ1dCBzaG91bGQgaGF2ZSBcIiArIG5yICsgXCIgZW50cmllc1wiKVxuXG4gICAgICAgIHJlY3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgXCIgKyByZWN0ICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVjdGFuZ3VsYXIgaHVsbCBmcm9tIGEgcXVhZFBvaW50IGRlZmluaXRpb25cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHhfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDApXG4gICAgICAgIGxldCB5X3ZhbHVlcyA9IHF1YWRQb2ludHMuZmlsdGVyKChlbGVtZW50LCBpbmRleCkgPT4gaW5kZXggJSAyICE9PSAwKVxuXG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oLi4ueF92YWx1ZXMpLCBNYXRoLm1pbiguLi55X3ZhbHVlcyksIE1hdGgubWF4KC4uLnhfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueV92YWx1ZXMpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3F1YWRQb2ludHMnIHBhcmFtZXRlclxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjaGVja1F1YWRQb2ludHMocXVhZFBvaW50czogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKHF1YWRQb2ludHMubGVuZ3RoICUgOCAhPT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBRdWFkcG9pbnRzIGFycmF5IGhhcyBsZW5ndGggJHtxdWFkUG9pbnRzLmxlbmd0aH0gYnV0IG11c3QgYmUgYSBtdWx0aXBsZSBvZiA4YClcblxuICAgICAgICBxdWFkUG9pbnRzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIGEpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJRdWFkcG9pbnQgXCIgKyBxdWFkUG9pbnRzICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmFzZSBhbm5vdGF0aW9uIHRoYXQgbWVhbiB0aGUgcmF3IG9iamVjdCBvZiBhbm5vdGF0aW9uIG9yIHRob3NlIHBhcnRzIHRoYXQgYXJlIGFsbCBleGlzdGluZ1xuICAgICAqIGFuZCBlcXVhbGx5IHNldCBpbiBhbGwgdHlwZXMgb2YgYW5ub3RhdGlvbnNcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nKTogQW5ub3RhdGlvbiB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKClcbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0Fubm90XCIsXG4gICAgICAgICAgICBhbm5vdC5wYWdlID0gcGFnZSxcbiAgICAgICAgICAgIGFubm90Lm9iamVjdF9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpLFxuICAgICAgICAgICAgYW5ub3QuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgYW5ub3QucmVjdCA9IHJlY3QsXG4gICAgICAgICAgICBhbm5vdC5hdXRob3IgPSBhdXRob3IsXG4gICAgICAgICAgICBhbm5vdC5wYWdlUmVmZXJlbmNlID0gdGhpcy5wYXJzZXIuZ2V0UGFnZShwYWdlKSxcbiAgICAgICAgICAgIGFubm90LnVwZGF0ZURhdGUgPSBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBjb250ZW50cyxcbiAgICAgICAgICAgIGFubm90LmJvcmRlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEJvcmRlcigpXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgaWYgKCFjb250ZW50cylcbiAgICAgICAgICAgIGNvbnRlbnRzID0gXCJcIlxuXG4gICAgICAgIGlmICghYXV0aG9yKVxuICAgICAgICAgICAgYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0ZXh0IG1hcmt1cCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3VidHlwZSA6IHRoZSBzdWJ0eXBlIG9mIHRoZSBUZXh0bWFya3VwIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBpZiAoMCA9PT0gcXVhZFBvaW50cy5sZW5ndGgpXG4gICAgICAgICAgICBxdWFkUG9pbnRzID0gW3JlY3RbMF0sIHJlY3RbM10sIHJlY3RbMl0sIHJlY3RbM10sIHJlY3RbMF0sIHJlY3RbMV0sIHJlY3RbMl0sIHJlY3RbMV1dXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHF1YWRQb2ludHM6IHF1YWRQb2ludHNcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBoaWdobGlnaHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVIaWdobGlnaHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvSGlnaGxpZ2h0XCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHVuZGVybGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVVuZGVybGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvVW5kZXJsaW5lXCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1aWdnbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTcXVpZ2dseUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3F1aWdnbHlcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzdHJpa2Ugb3V0IGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RyaWtlT3V0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TdHJpa2VPdXRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmcmVlIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVGcmVlVGV4dEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHQtanVzdGlmaWVkXCIsXG4gICAgICAgICAgICBkZWZhdWx0QXBwZWFyYW5jZTogXCIvSW52YWxpZF9mb250IDkgVGZcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9GcmVlVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIGNyZWF0ZUxpbmVBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2UgYW5ub3RhdGlvbiBvYmplY3Qgb2YgYSBjaXJjbGUgYW5kIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVhcmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjaXJjbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDaXJjbGVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvQ2lyY2xlXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNlIG9iamVjdCBvZiBhIHBvbHlnb24gb3IgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogc3VidHlwOiBQb2x5Z29uIG9yIFBvbHlMaW5lXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlc1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvbHlnb24gYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Bbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seWdvblwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgdmVydGljZXMsIFwiL1BvbHlMaW5lXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluayBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogaW5rTGlzdCA6IGEgbGlzdCBvZiBsaXN0IGNvbnRhaW5pbmcgdGhlIHBvaW50cyBmb3IgZHJhd2luZyB0aGUgbGluZXNcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlSW5rQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgaW5rTGlzdDogbnVtYmVyW11bXSB8IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDAsIGc6IDEsIGI6IDAgfSkge1xuXG4gICAgICAgIGlmIChpbmtMaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW5rTGlzdCBpcyBlbXB0eVwiKVxuXG4gICAgICAgIGxldCBfaW5rTGlzdDogYW55ID0gW11cbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5rTGlzdFswXSkge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBbaW5rTGlzdF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbmtMaXN0ID0gaW5rTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgaW5rTGlzdDogX2lua0xpc3RcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvSW5rXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0YW1wIGFubm90YXRpb24uIFRoZXJlIGV4aXN0cyBhIG51bWJlciBvZiBwcmVkaWZpbmVkIHN0YW1wcyB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byBQREYgZG9jdW1lbnRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3RhbXBUeXBlIDogdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RhbXBBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN0YW1wVHlwZTogc3RyaW5nID0gXCJEcmFmdFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFs1MCwgNTAsIDgwLCA4MF0sIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBzdGFtcFR5cGU6IHN0YW1wVHlwZVxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9TdGFtcFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB2aXN1YWwgc3ltYm9sIHRoYXQgaW5kY2F0ZXMgdGhlIGV4aXN0YW5jZSBvZiB0ZXh0IGVkaXRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY2FyZXRTeW1ib2wgOiBOb25lIG9yIFAsIHdpdGggUCBmb3IgdXNpbmcgdGhlIHBhcmFncmFwaCBzeW1ib2wgYXMgY2FyZXRcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlQ2FyZXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNhcmV0U3ltYm9sOiBzdHJpbmcgPSBcIlBcIiwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCBbXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNhcmV0U3ltYm9sOiBjYXJldFN5bWJvbFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9DYXJldFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGFubm90YXRpb24gd2l0aCB0aGUgZ2l2ZW4gaWQgb3IgdGhlIGdpdmVuIHJlZmVyZW5jZSBvYmplY3RcbiAgICAgKiAqL1xuICAgIGRlbGV0ZUFubm90YXRpb24oaWQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICAvLyBkZWxldGUgaWYgaXQgd2FzIGp1c3QgY3JlYXRlZCBidXQgaXMgbm90IGluIHRoZSBwZGYgZG9jdW1lbnRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIHRoaXMuYW5ub3RhdGlvbnNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLnNsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQgJiYgaWQub2JqID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gKDxhbnk+dGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQpLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbnMoKS50aGVuKChhbm5vdHMpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBfYW5ub3RzIG9mIGFubm90cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBfYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBpZCAmJiBhbm5vdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgYW5ub3Qub2JqZWN0X2lkICYmIGlkLm9iaiA9PT0gYW5ub3Qub2JqZWN0X2lkLm9iaiAmJiBpZC5nZW5lcmF0aW9uICYmIGlkLmdlbmVyYXRpb24gPT09IGFubm90Lm9iamVjdF9pZC5nZW5lcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RlbGV0ZS5wdXNoKGFubm90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSByZXN1bCBvZiBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgZG9jdW1lbnQuIFRoaXMgd2lsbFxuICAgICAqIGNvbXByaXNlIHRob3NlIHRoYXQgYXJlIGFscmVhZHkgZXhpc3RzIGFuZCB0aG9zZSB0aGF0IHdlcmUgY3JlYXRlZCB1c2luZyB0aGlzIGxpYnJhcnlcbiAgICAgKiAqL1xuICAgIGdldEFubm90YXRpb25zKCk6IFByb21pc2U8QW5ub3RhdGlvbltdW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdBbm5vdHMgPSB0aGlzLnBhcnNlci5leHRyYWN0QW5ub3RhdGlvbnMoKVxuICAgICAgICAgICAgZm9yIChsZXQgbmV3QW5ub3Qgb2YgdGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nQW5ub3RzW25ld0Fubm90LnBhZ2VdLnB1c2gobmV3QW5ub3QpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGV4aXN0aW5nQW5ub3RzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVBvcHVwQW5ub3RhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3dubG9hZHMgdGhlIGFkYXB0ZWQgUERGIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgbGV0IGE6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBhLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkX3BkZiA9IHRoaXMud3JpdGUoKVxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtleHRlbmRlZF9wZGZdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vcGRmXCIgfSlcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICAgIGEuaHJlZiA9IHVybFxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWVcbiAgICAgICAgYS5jbGljaygpXG4gICAgICAgIGEucmVtb3ZlKClcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnQgaW4gYSBub2RlanMgZW52aXJvbm1lbnRcbiAgICAgKiAqL1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLWNsaS9pc3N1ZXMvOTgyN1xuICAgIC8vIHdoeSBpcyBpdCBzbyByZXByZWhlbnNpYmxlIHRvIGNyZWF0ZSBsaWJyYXJpZXMgZm9yIGJvdGggZW52aXJvbm1lbnRzIChicm93c2VyIGFuZCBub2RlanMpPyBUaG9zZSBndXlzIGF0IGFuZ3VsYXIgbWlnaHQga25vdy5cbiAgICAvL1xuICAgIC8vIHVuY29tbWVudCBpdCBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gICAgc2F2ZShmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgJiYgKDxhbnk+cHJvY2VzcykucmVsZWFzZS5uYW1lICE9PSAnbm9kZScpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdVc2UgZG93bmxvYWQoKSBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnKVxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy53cml0ZSgpXG4gICAgICAgIC8vICAgICBmcy53cml0ZUZpbGUoZmlsZU5hbWUsIEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGZpbGUgd2FzIHdyaXR0ZW4gdG86ICR7ZmlsZU5hbWV9YCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBYUmVmIHtcbiAgICBpZDogbnVtYmVyXG4gICAgcG9pbnRlcjogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgZnJlZTogYm9vbGVhblxuICAgIHVwZGF0ZTogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgaWQ6IG51bWJlclxuICAgIGNvdW50OiBudW1iZXJcbiAgICBlbmRfcHRyOiBudW1iZXIgLy8gcG9pbnRzIHRvIHRoZSBlbmQgb2YgdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxufVxuXG5pbnRlcmZhY2UgVHJhaWxlciB7XG4gICAgc2l6ZTogbnVtYmVyXG4gICAgcm9vdDogUmVmZXJlbmNlUG9pbnRlclxuICAgIHByZXY/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgW2lkOiBudW1iZXJdOiBYUmVmXG59XG5cbi8qKlxuICogSG9sZHMgdGhlIGNvbXBsZXRlIGluZm9ybWF0aW9uIG9mIG9uZSB1cGRhdGUgc2VjdGlvbi4gVGhhdCBjb21wcmlzZXM6XG4gKiAtIHRoZSBib2R5IHVwZGF0ZVxuICogLSB0aGUgY3Jvc3Npc3RlIHJlZmVyZW5jZSB0YWJsZVxuICogLSB0aGUgdHJhaWxlclxuICogKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZWN0aW9uIHtcbiAgICBwdWJsaWMgcmVmczogWFJlZltdID0gW11cblxuICAgIHB1YmxpYyBzdGFydF9wb2ludGVyOiBudW1iZXIgPSAtMVxuXG4gICAgcHVibGljIHRyYWlsZXI6IFRyYWlsZXIgPSB7IHNpemU6IC0xLCByb290OiB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH0gfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyAvU2l6ZVxuICAgIHByaXZhdGUgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gL1Jvb3RcbiAgICBwcml2YXRlIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vIC9QcmV2XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIHdpdGggdGhlIGdpdmVuIGlkXG4gICAgICogKi9cbiAgICBnZXRSZWZlcmVuY2UoaWQ6IG51bWJlcik6IFhSZWYgfCB1bmRlZmluZWQge1xuICAgICAgICBmb3IgKGxldCByZWYgb2YgdGhpcy5yZWZzKSB7XG4gICAgICAgICAgICBpZiAocmVmLmlkID09PSBpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGhlYWRlciBvZiBhIHN1YiBzZWN0aW9uLiBGb3IgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIDAgMSAvLyA8LS1cbiAgICAgKiAuLi5cbiAgICAgKlxuICAgICAqIFNvIHRoZSBvYmVqY3QgaWQgMCBhbmQgdGhlIG51bWJlciBvZiBzdWIgc2VjdGlvbiBlbnRyaWVzIDFcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKGluZGV4OiBudW1iZXIpOiBTdWJTZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgbGV0IHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHIpXG5cbiAgICAgICAgcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyICsgMSlcblxuICAgICAgICBsZXQgcHRyX3JlZl9jb3VudCA9IHB0clxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VfY291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfcmVmX2NvdW50LCBwdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IG9ial9pZCwgY291bnQ6IHJlZmVyZW5jZV9jb3VudCwgZW5kX3B0cjogcHRyIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBvZiBhIHN1YiBzZWN0aW9uLiBUaGUgaW5kZXggcG9pbnRzIHRvIHRoZSBzdGFydCBvZlxuICAgICAqIHRoZSBmaXJzdCByZWZlcmVuY2UgYW5kIGNvdW50IHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiByZWZlcmVuY2VzIHRoYXQgYXJlXG4gICAgICogY29udGFpbmVkIGluIHRoZSBzdWJzZWN0aW9uLlxuICAgICAqXG4gICAgICogVGhlIGZpcnN0X29iamVjdF9pZCBpcyB0aGUgaWQgcHJvdmlkZWQgaW4gdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxuICAgICAqXG4gICAgICogQnkgZGVmaW5pdGlvbiBvZiB0aGUgUERGIHN0YW5kYXJkIG9uZSBlbnRyeSBpcyAyMCBieXRlcyBsb25nXG4gICAgICogKi9cbiAgICBleHRyYWN0UmVmZXJlbmNlcyhpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBmaXJzdF9vYmplY3RfaWQ6IG51bWJlcik6IFhSZWZbXSB7XG4gICAgICAgIGxldCBfcmVmczogWFJlZltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2ksIGluZGV4ICs9IDIwKSB7XG4gICAgICAgICAgICBsZXQgcHRyX2VuZF9wb2ludGVyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyX2VuZF9wb2ludGVyKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2dlbl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9lbmRfcG9pbnRlciArIDEpXG5cbiAgICAgICAgICAgIGxldCBwdHJfZ2VuX2VuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydClcblxuICAgICAgICAgICAgbGV0IGdlbmVyYXRpb24gPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0LCBwdHJfZ2VuX2VuZClcblxuICAgICAgICAgICAgbGV0IHB0cl9mbGFnID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2dlbl9lbmQgKyAxKVxuXG4gICAgICAgICAgICBsZXQgaXNGcmVlID0gdGhpcy5kYXRhW3B0cl9mbGFnXSA9PT0gMTAyXG5cbiAgICAgICAgICAgIF9yZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBmaXJzdF9vYmplY3RfaWQgKyBpLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXIsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBpc0ZyZWUsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAhaXNGcmVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHRyYWlsZXIgb2YgdGhlIHN1YnNlY3Rpb24gdGhhdCBtZWFucyB0aGUgcGFydCBzdGF0aW5nIHdpdGggdGhlICd0cmFpbGVyJyBrZXl3b3JkIGFuZFxuICAgICAqIGluIHBhcnRpY3VsYXIgdGhlIHRyYWlsZXIgZGljdGlvbmFyeVxuICAgICAqICovXG4gICAgZXh0cmFjdFRyYWlsZXIoaW5kZXg6IG51bWJlcik6IFRyYWlsZXIge1xuICAgICAgICBsZXQgZW5kX3RyYWlsZXJfaW5kZXg6IG51bWJlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgaW5kZXgsIHRydWUpXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShpbmRleCwgZW5kX3RyYWlsZXJfaW5kZXgpXG4gICAgICAgIGluZGV4ID0gMFxuXG4gICAgICAgIGxldCBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXBkYXRlU2VjdGlvbi5TSVpFLCBfZGF0YSwgaW5kZXgsIHRydWUpICsgVXBkYXRlU2VjdGlvbi5TSVpFLmxlbmd0aFxuICAgICAgICBwdHJfc3RhcnRfc2l6ZSA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cbiAgICAgICAgbGV0IHNpemUgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9yb290ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlJPT1QsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlJPT1QubGVuZ3RoXG4gICAgICAgIHB0cl9zdGFydF9yb290ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcm9vdClcbiAgICAgICAgbGV0IHJvb3RfcmVmZXJlbmNlID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9wcmV2ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlBSRVYsIF9kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgbGV0IHByZXYgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKC0xICE9IHB0cl9zdGFydF9wcmV2KSB7XG4gICAgICAgICAgICBwdHJfc3RhcnRfcHJldiA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgcHRyX3N0YXJ0X3ByZXYgKyBVcGRhdGVTZWN0aW9uLlBSRVYubGVuZ3RoKVxuXG4gICAgICAgICAgICBwcmV2ID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgcm9vdDogcm9vdF9yZWZlcmVuY2UsXG4gICAgICAgICAgICBwcmV2OiBwcmV2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIFVwZGF0ZSBzZWN0aW9uIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqICovXG4gICAgZXh0cmFjdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRfcG9pbnRlciA9IGluZGV4XG5cbiAgICAgICAgbGV0IHN0YXJ0X3B0ciA9IGluZGV4ICsgNSAvLyArIGxlbmd0aCh4cmVmKSArIGJsYW5rXG4gICAgICAgIHN0YXJ0X3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHN0YXJ0X3B0cilcblxuICAgICAgICBsZXQgZmlyc3RfaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgLy8gdGhlIGZpcnN0IGhlYWRlciBtdXN0IGJlIDAgdG8gZXN0YWJsaXNoIHRoZSBsaW5rZWQgbGlzdCBvZiBmcmVlIG9iamVjdHNcbiAgICAgICAgaWYgKGZpcnN0X2hlYWRlci5pZCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJGaXJzdCBvYmplY3QgaWQgbm90IDBcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBmaXJzdF9oZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgLy8gZXh0cmFjdCBmaXJzdCByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdCh0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgZmlyc3RfaGVhZGVyLmNvdW50LCBmaXJzdF9oZWFkZXIuaWQpKVxuXG4gICAgICAgIC8vIGV4dHJhY3QgcmVtYWluaW5nIHJlZmVyZW5jZXNcbiAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgZmlyc3RfaGVhZGVyLmNvdW50ICogMjBcblxuICAgICAgICB3aGlsZSAodGhpcy5kYXRhW3N0YXJ0X3B0cl0gIT09IDExNikgeyAvLyAxMTYgPSAndCcgc3RhcnQgb2YgdGhlIHdvcmQgdHJhaWxlciB0aGF0IGNvbmNsdWRlcyB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZSBzZWN0aW9uXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy5leHRyYWN0U3ViU2VjdGlvbkhlYWRlcihzdGFydF9wdHIpXG5cbiAgICAgICAgICAgIHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGhlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZXMgPSB0aGlzLmV4dHJhY3RSZWZlcmVuY2VzKHJlZl9zdGFydCwgaGVhZGVyLmNvdW50LCBoZWFkZXIuaWQpXG5cbiAgICAgICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQocmVmZXJlbmNlcylcblxuICAgICAgICAgICAgc3RhcnRfcHRyID0gcmVmX3N0YXJ0ICsgaGVhZGVyLmNvdW50ICogMjBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxlciA9IHRoaXMuZXh0cmFjdFRyYWlsZXIoc3RhcnRfcHRyKVxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjb21wbGV0ZSBQREYgZG9jdW1lbnQgaGlzdG9yeSBhbmQgdGhlcmVmb3JlIGhvbGRzIHRoZVxuICogdXBkYXRlZCBib2R5IHBhcnRzLCB0aGUgY3Jvc3NzaXRlIHJlZmVyZW5jZXMgYW5kIHRoZSBkb2N1bWVudCB0cmFpbGVyc1xuICogKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudEhpc3Rvcnkge1xuICAgIHB1YmxpYyB1cGRhdGVzOiBVcGRhdGVTZWN0aW9uW10gPSBbXVxuXG4gICAgcHVibGljIHRyYWlsZXJTaXplOiBudW1iZXIgPSAtMVxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgb2JqZWN0IGlkcyB0aGF0IHdlcmUgZm9ybWVybHkgZnJlZWQgYW5kIGFyZSBub3cgJ2FscmVhZHknIHJldXNlZC5cbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gcHJldmVudCBhIGZyZWVkIG9iamVjdCBhIHNlY29uZCB0aW1lXG4gICAgICogKi9cbiAgICBwcml2YXRlIGFscmVhZHlfcmV1c2VkX2lkczogWFJlZltdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB1cGRhdGUgc2VjdGlvbiBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RVcGRhdGVTZWN0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVwZGF0ZVNlY3Rpb24gPSBuZXcgVXBkYXRlU2VjdGlvbih0aGlzLmRhdGEpXG4gICAgICAgIHVwZGF0ZVNlY3Rpb24uZXh0cmFjdChpbmRleClcblxuICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaCh1cGRhdGVTZWN0aW9uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBsYXN0IHVwZGF0ZSBzZWN0aW9uIG9mIGEgZG9jdW1lbnQgKHRoYXQgbWVhbnNcbiAgICAgKiB0aGUgbW9zdCByZWNlbnQgdXBkYXRlIGxvY2F0aW5nIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUpXG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRFbnRyeSgpIHtcbiAgICAgICAgbGV0IHB0ciA9IHRoaXMuZGF0YS5sZW5ndGggLSAxXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydHhyZWYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5TVEFSVFhSRUYsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIDlcblxuICAgICAgICBwdHIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBwdHJfc3RhcnR4cmVmKVxuXG4gICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24ocHRyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBlbnRpcmUgdXBkYXRlIHNlY3Rpb25zXG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRIaXN0b3J5KCkge1xuICAgICAgICB0aGlzLmV4dHJhY3REb2N1bWVudEVudHJ5KClcblxuICAgICAgICBsZXQgdXMgPSB0aGlzLnVwZGF0ZXNbMF1cblxuICAgICAgICB3aGlsZSAodXMudHJhaWxlci5wcmV2KSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RVcGRhdGVTZWN0aW9uKHVzLnRyYWlsZXIucHJldilcbiAgICAgICAgICAgIHVzID0gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGggLSAxXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbGVyU2l6ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlci5zaXplXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbWFyaWx5IGZvciBjbGFyaWZpY2F0aW9uLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgbW9zdCByZWNlbnQuIFdlIHBhcnNlZCBiYWNrd2FyZHMuXG4gICAgICogKi9cbiAgICBnZXRSZWNlbnRVcGRhdGUoKTogVXBkYXRlU2VjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXNbMF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCeSBydW5uaW5nIHRocm91Z2ggdGhlIFBEZiBoaXN0b3J5IHdlIGNhbiBmb3IgZXZlcnkgb2JqZWN0IGlkIGRldGVybWluZSB0aGUgcG9pbnRlciBhZGRyZXNzIHRvIHRoZSBtb3N0IHJlY2VudCB2ZXJzaW9uLCBhbmRcbiAgICAgKiB3aGV0aGVyIHRoZSBvYmplY3QgaWQgaXMgc3RpbGwgaW4gdXNlZC5cbiAgICAgKlxuICAgICAqIFNvIHRoZSBvYmplY3QgbG9va3VwIHRhYmxlIGhhcyBhbiBlbnRyeSBmb3IgZXZlcnkgZXhpc3Rpbmcgb2JqZWN0IGlkLCBhIHBvaW50ZXIgdG8gdGhlIHRoZSBtb3N0IHJlY2VudCBvYmplY3QgZGVmaW5pdGlvbiwgYXMgbG9uZ1xuICAgICAqIGFzIHRoZSBvYmplY3QgZXhpc3RzLCBvciBhbiBhY2NvcmRpbmcgaW5kaWNhdGlvbiBvdGhlcndpc2UuXG4gICAgICogKi9cbiAgICBjcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpOiBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgICAgIGxldCBvYmpUYWJsZTogeyBbaWQ6IG51bWJlcl06IFhSZWYgfSA9IHt9XG5cbiAgICAgICAgbGV0IHVwZGF0ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKClcbiAgICAgICAgbGV0IG9ial9jb3VudCA9IHVwZGF0ZS50cmFpbGVyLnNpemVcblxuICAgICAgICBsZXQgaSA9IDFcbiAgICAgICAgd2hpbGUgKE9iamVjdC5rZXlzKG9ialRhYmxlKS5sZW5ndGggPCBvYmpfY291bnQpIHtcbiAgICAgICAgICAgIGxldCByZWZzID0gdXBkYXRlLnJlZnNcblxuICAgICAgICAgICAgZm9yIChsZXQgcmVmIG9mIHJlZnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9ialRhYmxlLmhhc093blByb3BlcnR5KHJlZi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqVGFibGVbcmVmLmlkXSA9IHJlZlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlID0gdGhpcy51cGRhdGVzW2ldXG4gICAgICAgICAgICArK2lcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpUYWJsZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5ldyBvYmplY3QgaWQuIEl0IHByaW1hcmlseSB0cmllcyB0byByZXVzZSBhbiBleGlzdGluZyBpZCwgYnV0IGlmIG5vIHN1Y2ggZXhpc3RzIGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgKiBuZXcgb25lXG4gICAgICogKi9cbiAgICBnZXRGcmVlT2JqZWN0SWQoKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGxldCBvYmplY3RMb29rdXBUYWJsZTogT2JqZWN0TG9va3VwVGFibGUgPSB0aGlzLmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgZnJlZV9oZWFkZXIgPSBvYmplY3RMb29rdXBUYWJsZVswXVxuXG4gICAgICAgIGlmICghZnJlZV9oZWFkZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNyb3Nzc2l0ZSByZWZlcmVuY2UgaGFzIG5vIGhlYWRlciBmb3IgdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1wiKVxuXG4gICAgICAgIC8vIGlmIHRoZSBwb2ludGVyIG9mIG9iamVjdCAwIHBvaW50cyB0byAwIHRoZXJlIGlzIG5vIGZyZWVkIG9iamVjdCB0aGF0IGNhbiBiZSByZXVzZWRcbiAgICAgICAgaWYgKDAgPT09IGZyZWVfaGVhZGVyLnBvaW50ZXIpIHtcbiAgICAgICAgICAgIGlmICgtMSA9PT0gdGhpcy50cmFpbGVyU2l6ZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRyYWlsZXIgc2l6ZSBub3Qgc2V0XCIpXG5cbiAgICAgICAgICAgIHJldHVybiB7IG9iajogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uOiAwLCByZXVzZWQ6IGZhbHNlIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBsaXN0IGhlYWRcbiAgICAgICAgbGV0IHB0ciA9IGZyZWVfaGVhZGVyLnBvaW50ZXJcbiAgICAgICAgbGV0IGZyZWVkSGVhZGVyTGlzdDogWFJlZltdID0gW11cbiAgICAgICAgd2hpbGUgKHB0ciAhPT0gMCkge1xuICAgICAgICAgICAgZnJlZWRIZWFkZXJMaXN0LnB1c2goZnJlZV9oZWFkZXIpXG4gICAgICAgICAgICBmcmVlX2hlYWRlciA9IG9iamVjdExvb2t1cFRhYmxlW3B0cl1cblxuICAgICAgICAgICAgaWYgKCFmcmVlX2hlYWRlci5mcmVlKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIG9mIGFuIGluY29zaXN0ZW50IHhyZWZcbiAgICAgICAgICAgICAgICByZXR1cm4geyBvYmo6IHRoaXMudHJhaWxlclNpemUrKywgZ2VuZXJhdGlvbjogMCwgcmV1c2VkOiBmYWxzZSB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHB0ciA9IGZyZWVfaGVhZGVyLnBvaW50ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBnZXRGcmVlSGVhZGVyID0gKGZyZWVIZWFkZXJMaXN0OiBYUmVmW10pID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHAgb2YgZnJlZUhlYWRlckxpc3QucmV2ZXJzZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAuZ2VuZXJhdGlvbiA8IDY1NTM1ICYmIC8vIG1heCBnZW5lcmF0aW9uIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAtMSA9PT0gdGhpcy5hbHJlYWR5X3JldXNlZF9pZHMuaW5kZXhPZihwKSkgeyAvLyBub3QgYWxyZWFkeSByZXVzZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmV1c2VkX2ZyZWVfaGVhZGVyID0gZ2V0RnJlZUhlYWRlcihmcmVlZEhlYWRlckxpc3QpXG5cbiAgICAgICAgaWYgKHJldXNlZF9mcmVlX2hlYWRlcikge1xuICAgICAgICAgICAgZnJlZV9oZWFkZXIgPSByZXVzZWRfZnJlZV9oZWFkZXJcblxuICAgICAgICAgICAgLy8gc3RvcmUgdXNlZCBpZCB0byBtYWtlIHN1cmUgaXQgd2lsbCBub3QgYmUgc2VsZWN0ZWQgYWdhaW5cbiAgICAgICAgICAgIHRoaXMuYWxyZWFkeV9yZXVzZWRfaWRzLnB1c2goZnJlZV9oZWFkZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbGwgZnJlZWQgb2JqZWN0IGlkcyBhcmUgYWxyZWFkeSByZXVzZWRcbiAgICAgICAgICAgIHJldHVybiB7IG9iajogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uOiAwLCByZXVzZWQ6IGZhbHNlIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IG9iajogZnJlZV9oZWFkZXIucG9pbnRlciwgZ2VuZXJhdGlvbjogb2JqZWN0TG9va3VwVGFibGVbZnJlZV9oZWFkZXIuaWRdLmdlbmVyYXRpb24sIHJldXNlZDogdHJ1ZSB9XG4gICAgfVxufVxuIiwiZXhwb3J0IHsgUERGRG9jdW1lbnRQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5leHBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7IEFubm90YXRpb25GYWN0b3J5IH0gZnJvbSAnLi9hbm5vdGF0aW9uJztcblxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBEb2N1bWVudEhpc3RvcnksIE9iamVjdExvb2t1cFRhYmxlIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5JztcblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhpcyBwYXJzZXIgZG9lcyBub3QgcGFyc2VzIHRoZSBQREYgZmlsZSBjb21wbGV0ZWx5LiBJdCBsb29rdXBzIHRob3NlXG4gKiBwYXJ0cyB0aGF0IGFyZSBpbXBvcnRhbnQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhbm5vdGF0aW9ucy4gRm9yIG1vcmUgaW5mb3JtYXRpb25cbiAqIHBsZWFzZSByZWFkIHRoZSBSRUFETUUuXG4gKiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yIHtcbiAgICByOiBudW1iZXJcbiAgICBnOiBudW1iZXJcbiAgICBiOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgYm9yZGVyX3dpZHRoOiBudW1iZXJcbiAgICBkYXNoX3BhdHRlcj86IG51bWJlcltdXG59XG5cbi8qKlxuICogUmVmZXJlbmNlcyBpbiBQREYgZG9jdW1lbnMgYXJlICBvZiB0aGUgZm9ybVxuICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAqXG4gKiBUaGlzIGhvbGRzIHN1Y2ggYSByZWZlcmVuY2VcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZVBvaW50ZXIge1xuICAgIG9iajogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgcmV1c2VkPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XG4gICAgcGFnZTogbnVtYmVyID0gLTEvLyB0aGUgdGFyZ2V0IHBhZ2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICB0eXBlOiBzdHJpbmcgPSBcIlwiLy8gdGhlIHN1YiB0eXBlIG9mIHRoZSBhcnJheSAoVGV4dCwgSGlnaGxpZ2h0LCAuLi4pXG4gICAgb2JqZWN0X2lkOiBSZWZlcmVuY2VQb2ludGVyIHwgbnVsbCA9IG51bGwvLyBhbiB1bnVzZWQgb2JqZWN0IGlkXG4gICAgaWQ6IHN0cmluZyA9IFwiXCIvLyB1bmlxdWUgYW5uYXRpb24gaWRlbnRpZmllclxuICAgIHJlY3Q6IG51bWJlcltdID0gW10vLyB0aGUgbG9jYXRpb24gb2YgdGhlIGFubm90YXRpb25cbiAgICBhdXRob3I6IHN0cmluZyA9IFwiXCIvLyB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgcGFnZVJlZmVyZW5jZTogUGFnZSB8IG51bGwgPSBudWxsLy8gVGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3QgdG8gd2hpY2ggdGhlIGFubm90YXRpb24gaXMgYWRkZWRcbiAgICB1cGRhdGVEYXRlOiBzdHJpbmcgPSBcIlwiLy8gVGhlIGRhdGUgd2hlbiB0aGUgYW5ub3RhdGlvbiB3YXMgY3JlYXRlZCBvciB1cGRhdGVkXG4gICAgY29udGVudHM/OiBzdHJpbmcgLy8gVGV4dCB0aGF0IHNoYWxsIGJlIGRpc3BsYXllZCBmb3IgdGhlIGFubm90YXRpb25cbiAgICBhbm5vdGF0aW9uX2ZsYWc/OiBudW1iZXIgLy8gU2VlIFBERiBzcGNlY2lmaWNhdGlvbiAnQW5ub3RhdGlvbiBGbGFnJ1xuICAgIGFwcGVhcmFuY2VfZGljdGlvbmFyeT86IGFueSAvLyBjb250cm9sIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgYXBwZWFyYW5jZV9zdGF0ZT86IGFueSAvLyBjaGFuZ2UgdGhlIGFwcGVhcmFuY2UgYWNjb3JkaW5nIHRvIHN0YXRlc1xuICAgIGJvcmRlcj86IEJvcmRlciB8IG51bGwgPSBudWxsLy8gZGVmaW5lIHRoZSBib3JkZXJcbiAgICBjb2xvcj86IENvbG9yIHwgbnVsbCA9IG51bGwvLyB0aGUgY29sb3Igc2V0XG4gICAgb3BhY2l0eT86IG51bWJlciAvLyB0aGUgb3BhY2l0eSB2YWx1ZSAoQ0EgY2FsbGVkIGluIHRoZSBQREYgc3BlYylcbiAgICByaWNodGV4dD86IHN0cmluZyAvLyByaWNoIHRleHQgc3RyaW5nIGRpc3BsYXllZCBpbiB0aGUgcG9wdXAgd2luZG93IHdoZW4gdGhlIGFubm90YXRpb24gaXMgb3BlbmVkXG4gICAgaW5pdGlhbGx5T3Blbj86IGJvb2xlYW4gLy8gZmxhZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBhbm5vdGF0aW9uIHNoYWxsIGluaXRpYWxseSBiZSBvcGVuXG4gICAgaWNvbk5hbWU/OiBzdHJpbmcgLy8gbmFtZSBvZiB0aGUgdXNlZCBpY29uXG4gICAgYW5ub3RhdGlvblN0YXRlPzogc3RyaW5nIC8vIHRoZSBzdGF0ZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHN0YXRlTW9kZWw/OiBzdHJpbmdcbiAgICBkZWZhdWx0QXBwZWFyYW5jZT86IHN0cmluZyAvLyBkZWZhdWx0IGFwcGVhcmFuY2Ugc3RyaW5nXG4gICAgdGV4dEFsaWdubWVudD86IHN0cmluZyAvLyBsZWZ0LWp1c3RpZmllZCwgY2VudGVyZWQsIHJpZ2h0LWp1c3RpZmllZFxuICAgIHJpY2hUZXh0U3RyaW5nPzogc3RyaW5nIC8vIGdlbmVyYXRlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGNhbGxvdXRMaW5lPzogbnVtYmVyW10gLy8gY2FsbCBvdXQgbGluZVxuICAgIGludGVudD86IHN0cmluZyAvLyBhIHN0cmluZyBkZXNjcmliaW5nIHRoZSBpbnRlbnQ6IEZyZWVUZXh0LCBGcmVlVGV4dENhbGxvdXQsIEZyZWVUZXh0VHlwZVdyaXRlclxuICAgIGJvcmRlckVmZmVjdD86IGFueVxuICAgIHJkPzogYW55IC8vID9cbiAgICBib3JkZXJTdHlsZT86IGFueSAvLyBib3JkZXIgc3R5bGVcbiAgICBsaW5lRW5kaW5nPzogc3RyaW5nIC8vIHRoZSBsaW5lIGVuZGluZyB0eXBlIG9mIHRoZSBjYWxsb3V0IGxpbmVcbiAgICBzdGFtcFR5cGU/OiBzdHJpbmcgLy8gdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICBjYXJldFN5bWJvbD86IHN0cmluZyAvLyBDYW4gYmUgUCB0byB1c2UgYSBwYXJhZ3JhcGggc3ltYm9sIGZvciB0aGUgY2FyZXQgb3IgTm9uZVxuICAgIHF1YWRQb2ludHM/OiBudW1iZXJbXSAvLyBzcGVjaWZpZXMgaG93IHRoZSBhbm5vdGF0aW9uIGdvZXMgYXJyb3VuZCB0aGUgdGV4dFxuICAgIGlua0xpc3Q/OiBudW1iZXJbXVtdXG4gICAgYm9yZGVyX3N0eWxlPzogYW55XG4gICAgY29sb3Jfc3BhY2U/OiBudW1iZXJbXVxuICAgIGJvcmRlcl9lZmZlY3Q/OiBhbnlcbiAgICB2ZXJ0aWNlcz86IG51bWJlcltdXG4gICAgbGluZV9lbmRpbmc/OiBzdHJpbmdbXVxuICAgIGludGVyaW9yX2NvbG9yPzogbnVtYmVyW11cbiAgICBtZWFzdXJlPzogYW55XG4gICAgaXNfZGVsZXRlZD86IGJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoW10pKSB7IH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGFubm90YXRpb24gb2JqZWN0IChwYXJ0aWFsbHkpXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyLCBwYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vIHJlc3RyaWN0IHRoZSBkYXRhIGFycmF5IHRvIHRoZSBwYXJ0aXRpb24gdGhhdCBhY3R1YWxseSBjb250YWlucyB0aGUgYW5ub3RhdGlvbiBkYXRhXG4gICAgICAgIGxldCBvYmpfZW5kX3B0cjogbnVtYmVyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnNsaWNlKHB0ciwgb2JqX2VuZF9wdHIpXG5cbiAgICAgICAgdGhpcy5vYmplY3RfaWQgPSBVdGlsLmV4dHJhY3RPYmplY3RJZCh0aGlzLmRhdGEsIDApXG5cbiAgICAgICAgdGhpcy50eXBlID0gXCIvXCIgKyBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuU1VCVFlQRSlcbiAgICAgICAgdGhpcy5yZWN0ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlJFQ1QpXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZSA9IHBhZ2VcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLk0pXG4gICAgICAgIHRoaXMuYm9yZGVyID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkJPUkRFUilcbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5DKVxuICAgICAgICB0aGlzLmF1dGhvciA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5UKVxuICAgICAgICB0aGlzLmlkID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLk5NKVxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkNPTlRFTlRTKVxuICAgICAgICB0aGlzLnF1YWRQb2ludHMgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuUVVBRFBPSU5UUylcbiAgICAgICAgdGhpcy5pbmtMaXN0ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLklOS0xJU1QpXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIENhdGFsb2cgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5KSB7IH1cblxuICAgIHByaXZhdGUgcGFnZXNPYmplY3RJZDogUmVmZXJlbmNlUG9pbnRlciA9IHsgb2JqOiAtMSwgZ2VuZXJhdGlvbjogLTEgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgY2F0YWxvZyBvYmplY3QgZnJvbSB0aGUgZGF0YSBhdCB0aGUgZ2l2ZW4gcHRyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwdHJfcGFnZXNfa2V5ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlBBR0VTLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLlBBR0VTLmxlbmd0aFxuXG4gICAgICAgIHRoaXMucGFnZXNPYmplY3RJZCA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHRoaXMuZGF0YSwgcHRyX3BhZ2VzX2tleSlcbiAgICB9XG5cbiAgICBnZXRQYWdlc09iamVjdElkKCk6IFJlZmVyZW5jZVBvaW50ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlc09iamVjdElkXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFBhZ2VUcmVlIG9iamVjdCBvZiB0aGUgUERGIGRvY3VtZW50XG4gKiBUaGlzIGlzIHRoZSBvYmplY3Qgd2l0aCAvVHlwZSAvUGFnZXNcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZVRyZWUge1xuXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTFcblxuICAgIHByaXZhdGUgZ2VuZXJhdGlvbjogbnVtYmVyID0gLTFcblxuICAgIHByaXZhdGUgcGFnZUNvdW50OiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBwYWdlUmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSwgcHJpdmF0ZSBvYmplY3RMb29rdXBUYWJsZTogT2JqZWN0TG9va3VwVGFibGUpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGFuZCByZXR1cm4gdHJ1ZSwgaWYgdGhlIG9iamVjdCB0eXBlIGlzIC9QYWdlXG4gICAgICogKi9cbiAgICBpc1BhZ2UocmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB4cmVmID0gdGhpcy5vYmplY3RMb29rdXBUYWJsZVtyZWZlcmVuY2Uub2JqXVxuXG4gICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSB4cmVmLnBvaW50ZXJcblxuICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoeHJlZi5wb2ludGVyLCBwdHIpXG5cbiAgICAgICAgcmV0dXJuICgtMSAhPT0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlBBR0UsIF9kYXRhLCAwLCB0cnVlKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUga2lkcyByZWZlcmVuY2VzIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEZvciBldmVyeSBraWQgaXQgY2hlY2tzIGlmIHRoZSByZWZlcmVuY2VkIG9iamVjdCB0eXBlIGlzOlxuICAgICAqIC0gYSAvUGFnZXMgb2JqZWN0IHRoZW4gaXQgcmVjdXJzaXZlbHkgbG9va3VwcyBpdHMgY2hpbGRyZW5cbiAgICAgKiAtIGEgL1BhZ2Ugb2JqZWN0IHRoZW4gaXQgYWRkcyB0aGUgcmVmZXJlbmNlc1xuICAgICAqICovXG4gICAgZXh0cmFjdFBhZ2VSZWZlcmVuY2VzKHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSkge1xuXG4gICAgICAgIGZvciAobGV0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhZ2UocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBoYW5kbGUgYXJyYXkgLS0gcmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgcmVmZXJlbmNlIGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgICAgICAgICBpZiAoeHJlZi5nZW5lcmF0aW9uICE9PSByZWZlcmVuY2UuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9kYXRhKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIG9iamVjdCBkYXRhIGF0IHRoZSBnaXZlbiBwb2ludGVyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkNPVU5ULCBwdHIpXG5cbiAgICAgICAgLy8gaXQgaXMgcG9zc2libGUgdGhhdCBhbiBvYmplY3Qgb2YgdHlwZSAvUGFnZXMgcmVmZXJlbmNlcyBhZ2FpbiB0byBvYmplY3RzIG9mIHR5cGVzIC9QYWdlcyBzbyB3ZSBtdXN0XG4gICAgICAgIC8vIGFwcGx5IGEgcmVjdXJzaXZlIGV2YWx1YXRpb25cbiAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpXG5cbiAgICAgICAgaWYgKC0xID09PSBraWRzX2luZGV4KVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGluZGV4IG9mIC9LaWRzIGluIC9QYWdlcyBvYmplY3RgKVxuXG4gICAgICAgIGtpZHNfaW5kZXggKz0gVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgIGxldCBhcnJheV9kYXRhID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIGtpZHNfaW5kZXggKyAxKVxuXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMgPSBbXVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFnZXMgdGhlIHBhZ2UgdHJlZSBjb21wcmlzZXNcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlQ291bnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0c1xuICAgICAqICovXG4gICAgZ2V0UGFnZVJlZmVyZW5jZXMoKTogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVJlZmVyZW5jZXNcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgcHVibGljIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZCAvLyBUaGUgb2JqZWN0IGlkIGFuZCBnZW5lcmF0aW9uIG9mIHRoZSBvYmplY3RcblxuICAgIHB1YmxpYyBhbm5vdHM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgaGFzQW5ub3RzRmllbGQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHVibGljIGFubm90c1BvaW50ZXI6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSwgcHJpdmF0ZSBkb2N1bWVudEhpc3Rvcnk6IERvY3VtZW50SGlzdG9yeSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBpbiB0aGUgbGlua2VkIGFubm90YXRpb25zIGFycmF5XG4gICAgICogKi9cbiAgICBleHRyYWN0QW5ub3RhdGlvbkFycmF5KCkge1xuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGlmICghdGhpcy5hbm5vdHNQb2ludGVyKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBbm5vdGF0aW9ucyBwb2ludGVyIG5vdCBzZXRcIilcblxuICAgICAgICBsZXQgcmVmX2Fubm90X3RhYmxlID0gb2JqX3RhYmxlW3RoaXMuYW5ub3RzUG9pbnRlci5vYmpdXG5cbiAgICAgICAgaWYgKHJlZl9hbm5vdF90YWJsZS5nZW5lcmF0aW9uICE9PSB0aGlzLmFubm90c1BvaW50ZXIuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVmZXJlbmNlIGFubm90YXRpb24gdGFibGUgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICBsZXQgcHRyID0gcmVmX2Fubm90X3RhYmxlLnBvaW50ZXJcblxuICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuT0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyBVdGlsLk9CSi5sZW5ndGhcblxuICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9zZXF1ZW5jZSlcblxuICAgICAgICB0aGlzLmFubm90cyA9IHJlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcGFnZSBvYmplY3Qgc3RhcnRpbmcgYXQgcG9zaXRpb24gcHRyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGlkX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcbiAgICAgICAgbGV0IG9iamVjdF9pZDogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaWRfcHRyKVxuXG4gICAgICAgIGxldCBlbmRfaWRfcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpZF9wdHIgKyAxKSArIDFcbiAgICAgICAgbGV0IG9iamVjdF9nZW46IG51bWJlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGVuZF9pZF9wdHIpXG5cbiAgICAgICAgdGhpcy5vYmplY3RfaWQgPSB7IG9iajogb2JqZWN0X2lkLCBnZW5lcmF0aW9uOiBvYmplY3RfZ2VuIH1cblxuICAgICAgICBsZXQgZW5kX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIGVuZF9wdHIpXG5cbiAgICAgICAgbGV0IGFubm90cyA9IFV0aWwuZXh0cmFjdEZpZWxkKF9kYXRhLCBVdGlsLkFOTk9UUylcblxuICAgICAgICBpZiAoYW5ub3RzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0Fubm90c0ZpZWxkID0gdHJ1ZVxuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhbm5vdHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdHMgPSBhbm5vdHNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdHNQb2ludGVyID0gYW5ub3RzXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgcmVsZXZhbnQgcGFydHMgb2YgdGhlIFBERiBkb2N1bWVudCBhbmQgcHJvdmlkZXMgZnVuY3Rpb25hbGl0eSB0byBleHRyYWN0IHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gZm9yXG4gKiBhZGRpbmcgYW5ub3RhdGlvbnNcbiAqICovXG5leHBvcnQgY2xhc3MgUERGRG9jdW1lbnRQYXJzZXIge1xuXG4gICAgcHVibGljIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeShuZXcgVWludDhBcnJheShbXSkpXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcblxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkodGhpcy5kYXRhKVxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeS5leHRyYWN0RG9jdW1lbnRIaXN0b3J5KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnJlZSBvYmplY3QgaWQuIEl0IGZpcnN0IGNoZWNrcyB3ZXRoZXIgdGhlcmUgY2FuIGJlIGFuIGZyZWVkIG9iamVjdCBpZCByZXVzZWQuIElmIHRoYXQgaXMgbm90IHRoZSBjYXNlXG4gICAgICogaXQgY3JlYXRlcyBhIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldEZyZWVPYmplY3RJZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBnZXRDYXRhbG9nKCk6IENhdGFsb2dPYmplY3Qge1xuICAgICAgICBsZXQgcm9vdF9vYmogPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnJvb3RcbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19wdHIgPSBvYmpfdGFibGVbcm9vdF9vYmoub2JqXS5wb2ludGVyXG5cbiAgICAgICAgbGV0IGNhdGFsb2dfb2JqZWN0ID0gbmV3IENhdGFsb2dPYmplY3QodGhpcy5kYXRhKVxuICAgICAgICBjYXRhbG9nX29iamVjdC5leHRyYWN0KGNhdGFsb2dfcHRyKVxuXG4gICAgICAgIHJldHVybiBjYXRhbG9nX29iamVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHRyZWUgb2JqZWN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0UGFnZVRyZWUoKTogUGFnZVRyZWUge1xuICAgICAgICBsZXQgb2JqX3RhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBsZXQgY2F0YWxvZ19vYmplY3QgPSB0aGlzLmdldENhdGFsb2coKVxuXG4gICAgICAgIGxldCBwYWdlc19pZCA9IGNhdGFsb2dfb2JqZWN0LmdldFBhZ2VzT2JqZWN0SWQoKVxuICAgICAgICBsZXQgcGFnZXNfcmVmID0gb2JqX3RhYmxlW3BhZ2VzX2lkLm9ial1cblxuICAgICAgICBpZiAocGFnZXNfcmVmLmdlbmVyYXRpb24gIT09IHBhZ2VzX2lkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2VzIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwYWdlVHJlZSA9IG5ldyBQYWdlVHJlZSh0aGlzLmRhdGEsIG9ial90YWJsZSlcbiAgICAgICAgcGFnZVRyZWUuZXh0cmFjdChwYWdlc19yZWYucG9pbnRlcilcblxuICAgICAgICByZXR1cm4gcGFnZVRyZWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB3aXRoIHRoZSBnaXZlbiBwYWdlTnVtYmVyXG4gICAgICogKi9cbiAgICBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IFBhZ2Uge1xuICAgICAgICBsZXQgcGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IHBhZ2VJZCA9IHBhZ2VUcmVlLmdldFBhZ2VSZWZlcmVuY2VzKClbcGFnZU51bWJlcl1cblxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGlmIChvYmpfdGFibGVbcGFnZUlkLm9ial0uZ2VuZXJhdGlvbiAhPT0gcGFnZUlkLmdlbmVyYXRpb24pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugb2JqZWN0IG91dCBvZiBkYXRlXCIpXG5cbiAgICAgICAgbGV0IG9ial9wdHIgPSBvYmpfdGFibGVbcGFnZUlkLm9ial0ucG9pbnRlclxuXG4gICAgICAgIGxldCBwYWdlID0gbmV3IFBhZ2UodGhpcy5kYXRhLCB0aGlzLmRvY3VtZW50SGlzdG9yeSlcbiAgICAgICAgcGFnZS5leHRyYWN0KG9ial9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbm5vdGF0aW9ucyB0aGF0IGV4aXN0IGluIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZXh0cmFjdEFubm90YXRpb25zKCk6IEFubm90YXRpb25bXVtdIHtcbiAgICAgICAgbGV0IGFubm90czogQW5ub3RhdGlvbltdW10gPSBbXVxuICAgICAgICBsZXQgcHQ6IFBhZ2VUcmVlID0gdGhpcy5nZXRQYWdlVHJlZSgpXG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IHBhZ2VDb3VudDogbnVtYmVyID0gcHQuZ2V0UGFnZUNvdW50KClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcGFnZTogUGFnZSA9IHRoaXMuZ2V0UGFnZShpKVxuXG4gICAgICAgICAgICBsZXQgYW5ub3RhdGlvblJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCByZWZQdHIgb2YgYW5ub3RhdGlvblJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBBbm5vdGF0aW9uKHRoaXMuZGF0YSlcbiAgICAgICAgICAgICAgICBhLmV4dHJhY3Qob2JqX3RhYmxlW3JlZlB0ci5vYmpdLnBvaW50ZXIsIHBhZ2UpXG4gICAgICAgICAgICAgICAgYS5wYWdlID0gaVxuICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHMucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5ub3RzLnB1c2gocGFnZUFubm90cylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbm5vdHNcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyB0byBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBieXRlIGFycmF5IHJlcHJlc2VudGluZyB0aGUgUERGIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFV0aWwge1xuXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRTogc3RyaW5nID0gXCIvVHlwZSBcIlxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBfVFlQRTogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxXSAvLyAnL1R5cGUnXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl0gLy8gJ29iaidcbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XSAvLyAnZW5kb2JqJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlcltdID0gWzkxXSAvLyAnWydcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORDogbnVtYmVyW10gPSBbOTNdIC8vICddJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX1NUQVJUOiBudW1iZXJbXSA9IFs0MF0gLy8gJygnXG4gICAgcHVibGljIHN0YXRpYyBTVFJJTkdfRU5EOiBudW1iZXJbXSA9IFs0MV0gLy8gJyknXG4gICAgcHVibGljIHN0YXRpYyBSOiBudW1iZXJbXSA9IFs4Ml0gLy8gJ1InXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVDogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTZdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBBTk5PVFM6IG51bWJlcltdID0gWzQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2LCAxMTVdIC8vICcvQW5ub3QnXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdIC8vICc8PCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfRU5EOiBudW1iZXJbXSA9IFs2MiwgNjJdIC8vICc+PidcbiAgICBwdWJsaWMgc3RhdGljIFNVQlRZUEU6IG51bWJlcltdID0gWzQ3LCA4MywgMTE3LCA5OCwgMTE2LCAxMjEsIDExMiwgMTAxXSAvLyAnL1N1YnR5cGUnXG4gICAgcHVibGljIHN0YXRpYyBQQUdFUzogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDEsIDExNV0gLy8gL1BhZ2VzXG4gICAgcHVibGljIHN0YXRpYyBQQUdFOiBudW1iZXJbXSA9IFs0NywgODAsIDk3LCAxMDMsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIEtJRFM6IG51bWJlcltdID0gWzQ3LCA3NSwgMTA1LCAxMDAsIDExNV1cbiAgICBwdWJsaWMgc3RhdGljIENPVU5UOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTE3LCAxMTAsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgTTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyAnL00nXG4gICAgcHVibGljIHN0YXRpYyBUOiBudW1iZXJbXSA9IFs0NywgODRdIC8vICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIEY6IG51bWJlcltdID0gWzQ3LCA3MF0gLy8gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgQzogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyAnL0MnXG4gICAgcHVibGljIHN0YXRpYyBDQTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIE5NOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyAnL05NJ1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyW10gPSBbNDcsIDgwXSAvLyAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBDT05URU5UUzogbnVtYmVyW10gPSBbNDcsIDY3LCAxMTEsIDExMCwgMTE2LCAxMDEsIDExMCwgMTE2LCAxMTVdIC8vICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCT1JERVI6IG51bWJlcltdID0gWzQ3LCA2NiwgMTExLCAxMTQsIDEwMCwgMTAxLCAxMTRdIC8vICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgSU5LTElTVDogbnVtYmVyW10gPSBbNDcsIDczLCAxMTAsIDEwNywgNzYsIDEwNSwgMTE1LCAxMTZdIC8vICcvSW5rTGlzdCdcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJUWFJFRjogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG5cbiAgICAvKipcbiAgICAgKiBBc3N1bWVzIHRoYXQgYXQgcG9zaXRpb24gaW5kZXggaXMgYSBkZWxpbWl0ZXIgYW5kIHRoYW4gcnVucyBhcyBsb25nIGZvcndhcmQgdW50aWwgaXQgZmluZHNcbiAgICAgKiBhbm90aGVyIGRlbGltaXRlciBvciByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHNraXBEZWxpbWl0ZXIoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBkYXRhLmxlbmd0aCAmJiB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaW5kZXhdKSkrK2luZGV4XG5cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIGFzY2lpIHZhbHVlc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0U3RyaW5nVG9Bc2NpaSh0b0NvbnZlcnQ6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGFzY2lpczogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Db252ZXJ0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhc2NpaXMucHVzaCgrdG9Db252ZXJ0LmNoYXJDb2RlQXQoaSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNjaWlzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlbGltaXRlcih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gMTAgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSAxMyB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IDMyIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gNDcgLy8gJy8nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHRoZSBzZXF1ZW5jZSBpbiBkYXRhIHN0YXJ0aW5nIGF0IHRoZSBvZmZzZXRcbiAgICAgKlxuICAgICAqIFNldCB0aGUgJ2Nsb3NlZCcgZmxhZyB0byBjaGVjayBpZiB0aGUgc3VjZWVkaW5nIGNoYXIgYWZ0ZXIgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgd2hvbGUgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwLCBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gb2Zmc2V0XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBzZXF1ZW5jZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGRhdGEubGVuZ3RoID09IGkgKyAxIHx8IHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpICsgMV0pIHx8IGRhdGFbaSArIDFdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAtIChzZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytqXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBzdGFydFxuICAgICAqIG9mIHRoZSB3aG9sZSBkYXRhIHNlcXVlbmNlIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVTZXF1ZW5jZVJldmVyc2VkKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcblxuICAgICAgICBmb3IgKGxldCBqID0gc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09IHNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCB8fCBpIC0gMSA8IDAgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gc2VxdWVuY2UubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLS1qXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhdGVzIHRoZSBpbmRleCBiZWZvcmUgdGhlIG5leHQgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXIoZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IGRhdGEubGVuZ3RoICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpKytvZmZzZXRcblxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlci4gRGVsaW1pdGVycyBjYW4gYmUgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZCBvZiB0aGUgd2hvbGUgc2VxdWVuY2VcbiAgICAgKiBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YTogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSBkYXRhLmxlbmd0aCAtIDEpOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0ID4gMCAmJiAhdGhpcy5pc0RlbGltaXRlcihkYXRhW29mZnNldF0pKS0tb2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGFycmF5IGRhdGEgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBpbmRleC4gVGhlIGluZGV4IGNhbiBtYXJrIHRoZSBzdGFydCBvZiB0aGVcbiAgICAgKiBhcnJheSBvciBhIHBvaW50ZXIgd2l0aGluIHRoZSBhcnJheS4gSWYgaXQgaXMgYSBuZXN0ZWQgYXJyYXkgdGhlIHBvaW50ZXIgbXVzdCBtYXJrIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiB0aGUgc3ViZXJhcnJheS4gT3RoZXJ3aXNlIG9ubHkgdGhlIHN1YmFycmF5IGlzIGV4dHJhY3RlZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuQVJSQVlfU1RBUlQsIGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGlmICgtMSA9PT0gYXJyYXlfc3RhcnQpXG4gICAgICAgICAgICBhcnJheV9zdGFydCA9IGluZGV4XG5cbiAgICAgICAgbGV0IHJvb3RfbGlzdCA9IHsgcHRyOiBhcnJheV9zdGFydCwgbHN0OiBbXSB9XG4gICAgICAgIGxldCBzdGFydF9wb2ludGVyOiBhbnlbXSA9IFtyb290X2xpc3RdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5X3N0YXJ0ICsgMTsgaSA8IGRhdGEubGVuZ3RoICYmIHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMDspIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9uID0geyBwdHI6IGksIGxzdDogW10gfVxuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5wdHIgPSAtMSAvLyBtYXJrIGxpc3QgYXMgY29sbGVjdGlvbiBvZiBvdGhlciBsaXN0c1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXIucHVzaChfbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT09IFV0aWwuQVJSQVlfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwID0gc3RhcnRfcG9pbnRlci5wb3AoKVxuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc3Npbmcgc3RhcnQgcG9pbnRlciAke0pTT04uc3RyaW5naWZ5KHNwKX1gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzcC5wdHIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc190b0FkZCA9IGRhdGEuc2xpY2Uoc3AucHRyICsgMSwgaSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfcG9pbnRlcltzdGFydF9wb2ludGVyLmxlbmd0aCAtIDFdLmxzdC5wdXNoKGFzX3RvQWRkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzX3RvQWRkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwLnB0ciA9PT0gLTEgJiYgc3RhcnRfcG9pbnRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5sc3QucHVzaChzcC5sc3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGkgKyAxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3RfbGlzdC5sc3RcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlTZXEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmJyOiBhbnkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheV9zZXF1ZW5jZSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIGFuIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5X3NlcXVlbmNlcylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXlSZWMoYXJyYXlTZXE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChhcnJheVNlcSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBuYnJzOiBhbnkgPSBbXVxuXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXlTZXEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmJycy5wdXNoKFV0aWwuZXh0cmFjdE51bWJlcihhcnJheVNlcSwgaSkpXG5cbiAgICAgICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoYXJyYXlTZXEsIGkgKyAxKSArIDFcbiAgICAgICAgICAgICAgICBpID0gVXRpbC5za2lwRGVsaW1pdGVyKGFycmF5U2VxLCBpICsgMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5icnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYnI6IGFueSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IGFycmF5X3NlcXVlbmNlIG9mIGFycmF5U2VxKSB7XG4gICAgICAgICAgICAgICAgbmJyLnB1c2godGhpcy5leHRyYWN0TnVtYmVyc0FycmF5UmVjKGFycmF5X3NlcXVlbmNlKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5iclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAgICAgKiBlLmcuICBbNjkuNjk3IDQ3LjQxNDggOTYuNDY0NiA1OC4yNTk4IF1cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcnNBcnJheShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheV9zZXF1ZW5jZXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbiBvYmplY3QgaWRlbnRpZmllclxuICAgICAqIDxJRD4gPEdFTj4gb2JqXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RPYmplY3RJZChkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICBsZXQgb2JqID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIGluZGV4LCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbiB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcmVmZXJlbmNlIHN0YXJ0aW5nIGF0IHBvc2l0aW9uICdpbmRleCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogVWludDhBcnJheSB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuICAgICAgICBsZXQgcl9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2UodGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaShcIiBSXCIpLCBkYXRhLCBpbmRleCwgdHJ1ZSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCwgcl9pbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIGFzIHR5cGVkIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlVHlwZWQoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFJlZmVyZW5jZVBvaW50ZXIge1xuXG4gICAgICAgIGxldCByZWZfZGF0YSA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgZGVsX2luZGV4ID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXIocmVmX2RhdGEsIDApXG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5leHRyYWN0TnVtYmVyKHJlZl9kYXRhLCAwLCBkZWxfaW5kZXgpXG4gICAgICAgIGxldCBnZW4gPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIGRlbF9pbmRleCArIDIpXG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBpZCwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RzIGluIFBERiBmaWxlcyBhcmUgZGVmaW5lZCBhc1xuICAgICAqIDxvYmpOdW1iZXI+IDxnZW5lcmF0aW9uPiBvYmpcbiAgICAgKiA8PFxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICAvVHlwZSAvPHR5cGU+XG4gICAgICogICAgICAuLi5cbiAgICAgKiA+PlxuICAgICAqXG4gICAgICogQXBwcm9hY2g6IFdlIGlkZW50aWZ5IGFuIGluZGV4IHdpdGhpbiB0aGUgb2JqZWN0IGRlZmluaXRvbiBzZWFyY2ggdGhlIHVuaXF1ZWx5IGlkZW50aWZ5YWJsZSBlbmQgb2YgdGhlIG9iamVjdCBkZWZpbml0aW9uXG4gICAgICogdGhhbiB0aGUgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHN0YXJ0LiBXZSB0aGFuIGV4dHJhY3QgdGhlIGdlbmVyYXRpb24gYW5kIHRoZSBvYmplY3QgaWRcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0QnlUeXBlKGRhdGE6IFVpbnQ4QXJyYXksIF90eXBlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBsZXQgc2VhcmNoU2VxdWVuY2UgPSB0aGlzLmNvbnZlcnRTdHJpbmdUb0FzY2lpKHRoaXMuVFlQRSArIF90eXBlKVxuXG4gICAgICAgIGxldCBvYmpfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHNlYXJjaFNlcXVlbmNlLCBkYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgIGxldCBvYmpfZW5kID0gdGhpcy5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKSArIDZcblxuICAgICAgICBsZXQgb2JqX3N0YXJ0ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuT0JKLCBkYXRhLCBvYmpfaW5kZXgsIHRydWUpXG5cbiAgICAgICAgbGV0IGdlbmVyYXRpb24gPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIG9ial9zdGFydCAtIDEpXG5cbiAgICAgICAgbGV0IG9ial9pZCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YSwgZ2VuZXJhdGlvbiAtIDEpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2Uob2JqX2lkLCBvYmpfZW5kKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFycmF5IG9mIG51bWJlcnMgYW5kIGFycmF5cyBvZiByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBNYXJrIHRoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGFycmF5cyB0aGF0IGNvbnRhaW4gZGlmZmVyZW50IHR5cGVzLCBzbyBlaXRoZXJcbiAgICAgKiBpdCByZXR1cm5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgb3IgYW4gYXJyYXkgb2YgbnVtYmVycy4gSG93ZXZlciB0aGUgZnVuY3Rpb24gc3VwcG9ydHNcbiAgICAgKiBhcmJpdHJhcmlseSBuZXN0aW5nIG9mIGFycmF5cy5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEFycmF5KGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLlJbMF0pIHsgLy8gJ1InIC0tIHdlIGtub3cgaXQgaXMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhLCBpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3ROdW1iZXJzQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmF0Y3MgdGhlIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0U3RyaW5nKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgMClcbiAgICAgICAgbGV0IHN0cmluZ19lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX0VORCwgZGF0YSwgMClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvcHRpb25cbiAgICAgKiAvPG9wdGlvbj5cbiAgICAgKlxuICAgICAqIHNvIGZvciBpbnN0YW5jZSBmb3IgL0hpZ2hsaWdodCBpdCB3b3VsZCByZXR1cm4gJ0hpZ2hsaWdodCdcbiAgICAgKlxuICAgICAqIFRoZSBpbmRleCBtdXN0IHBvaW50IHRvIHRoZSBcIi9cIlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0T3B0aW9uVmFsdWUoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChkYXRhW2luZGV4XSAhPT0gNDcpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIm1pc3BsYWNlZCBvcHRpb24gdmFsdWUgcG9pbnRlclwiKVxuXG4gICAgICAgIGxldCBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBpbmRleCArIDEpXG5cbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcoQXJyYXkuZnJvbShkYXRhLnNsaWNlKGluZGV4ICsgMSwgZW5kICsgMSkpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zICd1bmRlZmluZWQnIGlmIHRoaXMgZmllbGQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0RmllbGQoZGF0YTogVWludDhBcnJheSwgZmllbGQ6IG51bWJlcltdLCBwdHI6IG51bWJlciA9IDApOiBhbnkge1xuICAgICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaWVsZHMgb2Ygb25lIG9iamVjdFxuICAgICAgICBsZXQgc3RhcnRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIGRhdGEsIHB0ciwgdHJ1ZSlcbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgc3RhcnRfb2JqX3B0ciwgdHJ1ZSlcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydF9vYmpfcHRyLCBlbmRfb2JqX3B0cilcblxuICAgICAgICBsZXQgZmllbGRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShmaWVsZCwgZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBpZiAoZmllbGRfcHRyID09PSAtMSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBmaWVsZF9wdHIgKz0gZmllbGQubGVuZ3RoXG5cbiAgICAgICAgLy8gaGFuZGxlIGNhc2UgdGhhdCB0aGVyZSBpcyBhbiBvcHRpb24gdmFsdWUgLzx2YWx1ZT4gYWZ0ZXIgdGhlIGZpZWxkIC88ZmllbGQ+XG4gICAgICAgIGxldCBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBpZiAoZGF0YVtmaWVsZF92YWx1ZV9lbmRfcHRyIC0gMV0gPT09IDQ3KSB7IC8vIDQ3ID0gJy8nXG4gICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0T3B0aW9uVmFsdWUoZGF0YSwgZmllbGRfdmFsdWVfZW5kX3B0ciAtIDEpXG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShbNDddLCBkYXRhLCBmaWVsZF9wdHIpXG5cbiAgICAgICAgZmllbGRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBsZXQgdmFsdWVfZGF0YSA9IGRhdGEuc2xpY2UoZmllbGRfcHRyLCBmaWVsZF92YWx1ZV9lbmRfcHRyKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXlcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0QXJyYXkodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RTdHJpbmcodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vIFJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgUmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyKHZhbHVlX2RhdGEsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBhc2NpaSBlbmNvZGVkIG51bWJlciBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcihkYXRhOiBVaW50OEFycmF5LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciA9IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuXG4gICAgICAgIGlmICgtMSA9PSBlbmQpIHtcbiAgICAgICAgICAgIGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ291bGQgbm90IGlkZW50aWZ5IG51bWJlciBib3VuZHM6IFske3N0YXJ0fSwke2VuZH1dYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJfaWQgPSBcIlwiXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzdHJfaWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFwiXCIgPT09IHN0cl9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBwYXJzZSBudW1iZXIgYXQgcG9zaXRpb24gJHtzdGFydH1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICtzdHJfaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhcyBhcmd1bWVudCBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZCByZXR1cm5zIHRob3NlIHR5cGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlfc2VxdWVuY2U6IFVpbnQ4QXJyYXkpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICBsZXQgcmVmczogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgd2hpbGUgKGkgPCBhcnJheV9zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZnMucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChhcnJheV9zZXF1ZW5jZSwgaSkpXG4gICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlIsIGFycmF5X3NlcXVlbmNlLCBpLCB0cnVlKSArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgaW50byBQREYgZm9ybWF0dGluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGF0ZVRvUERGRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGVfc3RyID0gXCIoRDpcIlxuICAgICAgICBkYXRlX3N0ciArPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgbGV0IG1vbnRoOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1vbnRoLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1vbnRoXG4gICAgICAgIGxldCBkYXk6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGRheS5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBkYXlcbiAgICAgICAgbGV0IGhvdXJzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoaG91cnMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgaG91cnNcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbWludXRlc1xuICAgICAgICBsZXQgc2Vjb25kczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoc2Vjb25kcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmRzXG4gICAgICAgIHJldHVybiBkYXRlX3N0ciArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1bmljb2RlIHNlcXVlbmNlIGludG8gYSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFVuaWNvZGVUb1N0cmluZyh2YWw6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICAgICAgICAgIHZhbCA9IG5ldyBVaW50OEFycmF5KHZhbClcblxuICAgICAgICBpZiAodmFsWzBdID09PSAyNTQgJiYgdmFsWzFdID09PSAyNTUpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgyLCB2YWwubGVuZ3RoKVxuXG4gICAgICAgICAgICBsZXQgdWludFRvU3RyaW5nID0gKHVpbnRBcnJheTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpbnRBcnJheS5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHVpbnRBcnJheVtpXSA8PCA4KSB8IHVpbnRBcnJheVtpICsgMV0gJiAweEZGKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJldCA9IHVpbnRUb1N0cmluZyh2YWwpXG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdXRmLTggY29tcHJlc3Npb25cbiAgICAgICAgbGV0IFV0ZjhBcnJheVRvU3RyID0gKGFycmF5OiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldCA9IFwiXCJcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgd2hpbGUgKGkgPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhcjEgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgbGV0IGNoYXIyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyMSA+PiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiBjYXNlIDI6IGNhc2UgMzogY2FzZSA0OiBjYXNlIDU6IGNhc2UgNjogY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lIGJ5dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDFGKSA8PCA2KSB8IChjaGFyMiAmIDB4M0YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocmVlIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXIzID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjaGFyMSAmIDB4MEYpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMiAmIDB4M0YpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGNoYXIzICYgMHgzRikgPDwgMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldCA9IFV0ZjhBcnJheVRvU3RyKEFycmF5LmZyb20odmFsKSlcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEFzY2lpVG9TdHJpbmcodmFsOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IFwiXCJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIGEgbnVtYmVyIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGl0cyBjaGFyIHJlcHJlc2VudGF0aW9uc1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkobmJyOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKFN0cmluZyhuYnIpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UsIFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBXcml0ZXJVdGlsIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSByZWZlcmVuY2UgcG9pbnRlclxuICAgICAqXG4gICAgICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAgICAgKlxuICAgICAqIFRoZSAnUicgYW5kIHRoZSBwcmVjZWRpbmcgc3BhY2UgaXMgb25seSB3cml0dGVuIGluIGNhc2UgJ3JlZmVyZW5jZWQnIGlzIHRydWVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZjogUmVmZXJlbmNlUG9pbnRlciwgcmVmZXJlbmNlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5vYmopXG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5nZW5lcmF0aW9uKSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKC4uLlV0aWwuUilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHByZWNlZGluZyB6ZXJvcyAoMCkgaW4gZnJvbnQgb2YgdGhlICd2YWx1ZScgdG8gbWF0Y2ggdGhlIGxlbmd0aFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBwYWQobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQucHVzaCg0OClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodmFsdWUpKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBuZXN0ZWQgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTmVzdGVkTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IHN1YkFycmF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShzdWJBcnJheSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBqYXZhc2NyaXB0IG51bWJlciBhcnJheSB0byBhIFBERiBudW1iZXIgYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVOdW1iZXJBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IGkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHRoZSAvQW5ub3RzIGZpZWxkIGluIGFuIHBhZ2Ugb2JqZWN0XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZUFubm90c0ZpZWxkSW5QYWdlT2JqZWN0KGRhdGE6IFVpbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG4gICAgICAgICAgICBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwuc2tpcERlbGltaXRlcihjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzX2FycmF5X2VuZClcblxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2Fubm90c19hcnJheV9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwdHJfZGljdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoVXRpbC5ESUNUX0VORCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGggLSAxLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2RpY3RfZW5kKSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5BTk5PVFMpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9kaWN0X2VuZCwgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5sZW5ndGgpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFV0aWwuQ1IpXG4gICAgICAgIHJldC5wdXNoKFV0aWwuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSdcbmltcG9ydCB7IFdyaXRlclV0aWwgfSBmcm9tICcuL3dyaXRlci11dGlsJ1xuXG4vKipcbiAqIENyZWF0cyB0aGUgYnl0ZSBhcnJheSB0aGF0IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTjogbnVtYmVyID0gMTEwXG4gICAgcHVibGljIHN0YXRpYyBGOiBudW1iZXIgPSAxMDJcblxuICAgIHB1YmxpYyBzdGF0aWMgU1BBQ0U6IG51bWJlciA9IDMyXG4gICAgcHVibGljIHN0YXRpYyBDUjogbnVtYmVyID0gMTNcbiAgICBwdWJsaWMgc3RhdGljIExGOiBudW1iZXIgPSAxMFxuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXIgPSA5MVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfRU5EOiBudW1iZXIgPSA5M1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXVxuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml1cbiAgICBwdWJsaWMgc3RhdGljIFRZUEVfQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMSwgV3JpdGVyLlNQQUNFLCA0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFJFQ1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTAxLCA5OSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgU1VCVFlQRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMTcsIDk4LCAxMTYsIDEyMSwgMTEyLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBVUERBVEVfREFURTogbnVtYmVyW10gPSBbNDcsIDc3XSAvLyA9ICcvTSdcbiAgICBwdWJsaWMgc3RhdGljIEFVVEhPUjogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyA9ICcvVCdcbiAgICBwdWJsaWMgc3RhdGljIENPTlRFTlRTOiBudW1iZXJbXSA9IFs0NywgNjcsIDExMSwgMTEwLCAxMTYsIDEwMSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL0NvbnRlbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9TVEFSVDogbnVtYmVyID0gNDBcbiAgICBwdWJsaWMgc3RhdGljIEJSQUNLRVRfRU5EOiBudW1iZXIgPSA0MVxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzogbnVtYmVyW10gPSBbNDcsIDcwXSAvLyA9ICcvRidcbiAgICBwdWJsaWMgc3RhdGljIElEOiBudW1iZXJbXSA9IFs0NywgNzgsIDc3XSAvLyA9ICcvTk0nXG4gICAgcHVibGljIHN0YXRpYyBDT0xPUjogbnVtYmVyW10gPSBbNDcsIDY3XSAvLyA9ICcvQydcbiAgICBwdWJsaWMgc3RhdGljIE9QQUNJVFk6IG51bWJlcltdID0gWzQ3LCA2NywgNjVdIC8vID0gJy9DQSdcbiAgICBwdWJsaWMgc3RhdGljIEJPUkRFUjogbnVtYmVyW10gPSBbNDcsIDY2LCAxMTEsIDExNCwgMTAwLCAxMDEsIDExNF0gLy8gPSAnL0JvcmRlcidcbiAgICBwdWJsaWMgc3RhdGljIFBBR0VfUkVGRVJFTkNFOiBudW1iZXJbXSA9IFs0NywgODBdIC8vID0gJy9QJ1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9BUFBFQVJBTkNFOiBudW1iZXJbXSA9IFs0NywgNjgsIDY1XSAvLyA9ICcvREEnXG4gICAgcHVibGljIHN0YXRpYyBJTktMSVNUOiBudW1iZXJbXSA9IFs0NywgNzMsIDExMCwgMTA3LCA3NiwgMTA1LCAxMTUsIDExNl0gLy8gPSAnL0lua0xpc3QnXG5cbiAgICBwdWJsaWMgc3RhdGljIFRSQUlMRVI6IG51bWJlcltdID0gWzExNiwgMTE0LCA5NywgMTA1LCAxMDgsIDEwMSwgMTE0XSAvLyA9ICd0cmFpbGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyA9ICcvU2l6ZSdcbiAgICBwdWJsaWMgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gPSAnL1Jvb3QnXG4gICAgcHVibGljIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vID0nL1ByZXYnXG4gICAgcHVibGljIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgRU9GOiBudW1iZXJbXSA9IFszNywgMzcsIDY5LCA3OSwgNzBdIC8vID0gJyUlRU9GJ1xuXG4gICAgcHVibGljIHN0YXRpYyBYUkVGOiBudW1iZXJbXSA9IFsxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3hyZWYnXG5cbiAgICBwdWJsaWMgc3RhdGljIFFVQURQT0lOVFM6IG51bWJlcltdID0gWzQ3LCA4MSwgMTE3LCA5NywgMTAwLCA4MCwgMTExLCAxMDUsIDExMCwgMTE2LCAxMTVdIC8vID0gJy9RdWFkUG9pbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgVkVSVElDRVM6IG51bWJlcltdID0gWzQ3LCA4NiwgMTAxLCAxMTQsIDExNiwgMTA1LCA5OSwgMTAxLCAxMTVdIC8vID0gJy9WZXJ0aWNlcydcbiAgICBwdWJsaWMgc3RhdGljIE5BTUU6IG51bWJlcltdID0gWzQ3LCA3OCwgOTcsIDEwOSwgMTAxXSAvLyA9ICcvTmFtZSdcbiAgICBwdWJsaWMgc3RhdGljIERSQUZUOiBudW1iZXJbXSA9IFs0NywgNjgsIDExNCwgOTcsIDEwMiwgMTE2XSAvLyA9ICcvRHJhZnQnXG5cbiAgICBwdWJsaWMgc3RhdGljIFNZOiBudW1iZXJbXSA9IFs0NywgODMsIDEyMV0gLy8gPSAnL1N5J1xuICAgIHB1YmxpYyBzdGF0aWMgUDogbnVtYmVyID0gODBcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgeHJlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBkYXRhIDogVGhlIGRhdGEgcmVwcmVzZW50aW5nIHRoZSBvcmlnaW5hbCBQREYgZG9jdW1lbnRcbiAgICAgKiBhYW5ub3RhdGlvbnMgOiBUaGUgYW5ub3RhdGlvbnMgdG8gYWRkIHRvIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5LCBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSwgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGFubm90YXRpb25zIHBhZ2V3aXNlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3Nhcnkgc2luY2UgdGhlIGFubm90YXRpb24gYXJyYXlzIG9mIHRoZSBzaXRlcyBtdXN0IGJlIGV4dGVuZGVkXG4gICAgICogYW5kIGl0IG1ha2VzIHNlbnNlIHRvIGRvIHRoaXMgdXBkYXRlIGluIG9uZSBzdGVwLlxuICAgICAqICovXG4gICAgc29ydFBhZ2VXaXNlKGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10pOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSB7XG4gICAgICAgIGxldCBwYWdlQW5ub3RzOiB7IFtpdGVtOiBudW1iZXJdOiBBbm5vdGF0aW9uW10gfSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghcGFnZUFubm90c1thbm5vdC5wYWdlXSlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdID0gW11cblxuICAgICAgICAgICAgcGFnZUFubm90c1thbm5vdC5wYWdlXS5wdXNoKGFubm90KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VBbm5vdHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCByZXR1cm5zIHRoZSBwYWdlIG9iamVjdCBlaXRoZXIgZXh0ZW5kZWQgYnkgYSAvQW5ub3RzIGZpZWxkLCBpZiB0aGlzIGRpZCBub3QgZXhpc3QgeWV0IG9yIHdpdGggdGhlIGFubm90cyBmaWVsZCByZXBsYWNlZCBieSBhIHJlcmZlcmVuY2UgcG9pbnRlclxuICAgICAqIHRvIGFuIGFycmF5IGlmIHRoZSBwYWdlIG9iamVjdCBjb250YWlucyB0aGUgbGlzdCBvZiBhbm5vdGF0aW9ucyBkaXJlY3RseVxuICAgICAqXG4gICAgICogcHRyIDogUG9pbnRlciB0byB0aGUgcGFnZSBvYmplY3RcbiAgICAgKiBhbm5vdF9hcnJheV9yZWZlcmVuY2UgOiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBhbm5vdGF0aW9uIGFycmF5XG4gICAgICogKi9cbiAgICBhZGFwdFBhZ2VPYmplY3QocGFnZTogUGFnZSwgYW5ub3RfYXJyYXlfcmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuICAgICAgICBsZXQgbG9va3VwVGFibGUgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlX3B0cjogWFJlZiA9IGxvb2t1cFRhYmxlW3BhZ2Uub2JqZWN0X2lkLm9ial1cblxuICAgICAgICByZXR1cm4gV3JpdGVyVXRpbC5yZXBsYWNlQW5ub3RzRmllbGRJblBhZ2VPYmplY3QodGhpcy5kYXRhLCBwYWdlLCBwYWdlX3B0ci5wb2ludGVyLCBhbm5vdF9hcnJheV9yZWZlcmVuY2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIGFubm90YXRpb25zIG9mID4+b25lPDwgcGFnZSBhbmQgZGVyaXZlcyB0aGUgYW5ub3RhdGlvbnMgYXJyYXkgZnJvbSBpdC5cbiAgICAgKiBUaGVyZWJ5IGl0IGFsc28gY29uc2lkZXJzIHRoZSBwb3RlbnRpYWxseSBleGlzdGluZyBhbm5vdGF0aW9uIGFycmF5LlxuICAgICAqXG4gICAgICogdG9EZWxldGUgOj0gY29udGFpbnMgdGhvc2UgYW5ub3RhdGlvbnMgdGhhdCBtdXN0IGJlIGRlbGV0ZWQuIEl0IHJlbW92ZXMgdGhlbSBmcm9tIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgKiBhbmQgbWFya3MgdGhlbSBhcyByZW1vdmVkXG4gICAgICogKi9cbiAgICB3cml0ZUFubm90QXJyYXkoYW5ub3RzOiBBbm5vdGF0aW9uW10sIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10sIHBhZ2VSZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIsIHBhZ2VEYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSBhbm5vdHNbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5jb25jYXQoYW5ub3RzLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF4Lm9iamVjdF9pZClcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb24gd2l0aCBvYmplY3RfaWQgbnVsbFwiKVxuXG4gICAgICAgICAgICByZXR1cm4geC5vYmplY3RfaWRcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcGFnZV9kYXRhOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGlmICghcmVmQXJyYXlfaWQpIHtcbiAgICAgICAgICAgIHJlZkFycmF5X2lkID0gdGhpcy5wYXJzZXIuZ2V0RnJlZU9iamVjdElkKClcbiAgICAgICAgICAgIHBhZ2VfZGF0YSA9IHRoaXMuYWRhcHRQYWdlT2JqZWN0KHBhZ2UsIHJlZkFycmF5X2lkKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQsIHBhZ2VSZWZlcmVuY2U6IHBhZ2Uub2JqZWN0X2lkLCBwYWdlRGF0YTogcGFnZV9kYXRhIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN1YnR5cGUgdG8gaXRzIGJ5dGUgcmVwcmVzZW50YXRpb25cbiAgICAgKiAqL1xuICAgIGNvbnZlcnRTdWJ0eXBlKHN0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHN3aXRjaCAoc3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ1RleHQnOlxuICAgICAgICAgICAgY2FzZSAnL1RleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvVGV4dCdcbiAgICAgICAgICAgIGNhc2UgJ0hpZ2hsaWdodCc6XG4gICAgICAgICAgICBjYXNlICcvSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA3MiwgMTA1LCAxMDMsIDEwNCwgMTA4LCAxMDUsIDEwMywgMTA0LCAxMTZdIC8vID0gJy9IaWdobGlnaHQnXG4gICAgICAgICAgICBjYXNlICdVbmRlcmxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1VuZGVybGluZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODUsIDExMCwgMTAwLCAxMDEsIDExNCwgMTA4LCAxMDUsIDExMCwgMTAxXSAvLyA9ICcvVW5kZXJsaW5lJ1xuICAgICAgICAgICAgY2FzZSAnU3F1aWdnbHknOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWlnZ2x5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDEwNSwgMTAzLCAxMDMsIDEwOCwgMTIxXSAvLyA9ICcvU3F1aWdnbHknXG4gICAgICAgICAgICBjYXNlICdTdHJpa2VPdXQnOlxuICAgICAgICAgICAgY2FzZSAnL1N0cmlrZU91dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgMTE0LCAxMDUsIDEwNywgMTAxLCA3OSwgMTE3LCAxMTZdIC8vID0gJy9TdHJpa2VPdXQnXG4gICAgICAgICAgICBjYXNlICdTcXVhcmUnOlxuICAgICAgICAgICAgY2FzZSAnL1NxdWFyZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExMywgMTE3LCA5NywgMTE0LCAxMDFdIC8vID0gJy9TcXVhcmUnXG4gICAgICAgICAgICBjYXNlICdDaXJjbGUnOlxuICAgICAgICAgICAgY2FzZSAnL0NpcmNsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDEwNSwgMTE0LCA5OSwgMTA4LCAxMDFdIC8vID0gJy9DaXJjbGUnXG4gICAgICAgICAgICBjYXNlICdGcmVlVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvRnJlZVRleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcwLCAxMTQsIDEwMSwgMTAxLCA4NCwgMTAxLCAxMjAsIDExNl0gLy8gPSAnL0ZyZWVUZXh0J1xuICAgICAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICBjYXNlICcvUG9seWdvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODAsIDExMSwgMTA4LCAxMjEsIDEwMywgMTExLCAxMTBdIC8vID0gJy9Qb2x5Z29uJ1xuICAgICAgICAgICAgY2FzZSAnUG9seUxpbmUnOlxuICAgICAgICAgICAgY2FzZSAnL1BvbHlMaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgNzYsIDEwNSwgMTEwLCAxMDFdIC8vICcvUG9seUxpbmVcbiAgICAgICAgICAgIGNhc2UgJ1N0YW1wJzpcbiAgICAgICAgICAgIGNhc2UgJy9TdGFtcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODMsIDExNiwgOTcsIDEwOSwgMTEyXSAvLyA9ICcvU3RhbXAnXG4gICAgICAgICAgICBjYXNlICdDYXJldCc6XG4gICAgICAgICAgICBjYXNlICcvQ2FyZXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDY3LCA5NywgMTE0LCAxMDEsIDExNl0gLy8gPSAnL0NhcmV0J1xuICAgICAgICAgICAgY2FzZSAnSW5rJzpcbiAgICAgICAgICAgIGNhc2UgJy9JbmsnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDczLCAxMTAsIDEwN10gLy8gPSAnL0luaydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhbiBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAqICovXG4gICAgd3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90OiBBbm5vdGF0aW9uKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBpZiAoIWFubm90LmF1dGhvcilcbiAgICAgICAgICAgIGFubm90LmF1dGhvciA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90LmNvbnRlbnRzKVxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBcIlwiXG5cbiAgICAgICAgaWYgKCFhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIG9iamVjdF9pZFwiKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3Qub2JqZWN0X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5UWVBFX0FOTk9UKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LnJlY3QgJiYgYW5ub3QucmVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5SRUNUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucmVjdCkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TVUJUWVBFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQodGhpcy5jb252ZXJ0U3VidHlwZShhbm5vdC50eXBlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlVQREFURV9EQVRFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC51cGRhdGVEYXRlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkFVVEhPUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmF1dGhvcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmIChhbm5vdC5jb250ZW50cykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQ09OVEVOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5jb250ZW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5JRClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuaWQpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmFubm90YXRpb25fZmxhZykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRkxBRylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5jb2xvcikge1xuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLnIgPiAxKSBhbm5vdC5jb2xvci5yIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmcgPiAxKSBhbm5vdC5jb2xvci5nIC89IDI1NVxuICAgICAgICAgICAgaWYgKGFubm90LmNvbG9yLmIgPiAxKSBhbm5vdC5jb2xvci5iIC89IDI1NVxuXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT0xPUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5jb2xvci5yLCBhbm5vdC5jb2xvci5nLCBhbm5vdC5jb2xvci5iXSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBvcGFjaXR5ID0gYW5ub3Qub3BhY2l0eVxuICAgICAgICBpZiAob3BhY2l0eSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT1BBQ0lUWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkob3BhY2l0eSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuYm9yZGVyKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5CT1JERVIpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShbYW5ub3QuYm9yZGVyLmhvcml6b250YWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLnZlcnRpY2FsX2Nvcm5lcl9yYWRpdXMsIGFubm90LmJvcmRlci5ib3JkZXJfd2lkdGhdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuREVGQVVMVF9BUFBFQVJBTkNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfU1RBUlQpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuZGVmYXVsdEFwcGVhcmFuY2UpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbm5vdC5wYWdlUmVmZXJlbmNlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmIChhbm5vdC5wYWdlUmVmZXJlbmNlLm9iamVjdF9pZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUEFHRV9SRUZFUkVOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5xdWFkUG9pbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5RVUFEUE9JTlRTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QucXVhZFBvaW50cykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QudmVydGljZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlZFUlRJQ0VTKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoYW5ub3QudmVydGljZXMpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnN0YW1wVHlwZSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuTkFNRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRSQUZUKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNhcmV0U3ltYm9sKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TWSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5QKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90Lmlua0xpc3QpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklOS0xJU1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOZXN0ZWROdW1iZXJBcnJheShhbm5vdC5pbmtMaXN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiBhbm5vdC5vYmplY3RfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYWxsIHRoZSBjcm9zcyBzaXRlIHJlZmVyZW5jZSB0YWJsZSBlbnRyaWVzIGFuZCBleHRyYWN0cyB0aGUgY29uc2VjdXRpdmUgc2VxdWVuY2VzXG4gICAgICogKi9cbiAgICBjb21wdXRlWHJlZlNlcXVlbmNlcygpOiBYUmVmW11bXSB7XG4gICAgICAgIGxldCBzZXFzOiBYUmVmW11bXSA9IFtdXG5cbiAgICAgICAgbGV0IG9yZGVyZWRfeHJlZnMgPSB0aGlzLnhyZWZzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc2VxOiBYUmVmW10gPSBbb3JkZXJlZF94cmVmc1swXV1cbiAgICAgICAgbGV0IGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzWzBdLmlkXG4gICAgICAgIHNlcXMucHVzaChzZXEpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3JkZXJlZF94cmVmcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyZWRfeHJlZnNbaV0uaWQgPT09IGxhc3RfaWQgKyAxKSB7XG4gICAgICAgICAgICAgICAgc2VxLnB1c2gob3JkZXJlZF94cmVmc1tpXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VxID0gW29yZGVyZWRfeHJlZnNbaV1dXG4gICAgICAgICAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RfaWQgPSBvcmRlcmVkX3hyZWZzW2ldLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2Vxc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgdGhlIHBvaW50ZXJzIG9mIHRoZSBsaW5rZWQgbGlzdCB0aGF0IGNvbnRhaW5zIHRoZSBpZHMgb2YgZnJlZWQgb2JqZWN0c1xuICAgICAqICovXG4gICAgYXBwbHlPYmplY3RGcmVlaW5nKHJlZnM6IFhSZWZbXSk6IFhSZWZbXSB7XG4gICAgICAgIC8vIHdyaXRlIGZyZWUgb2JqZWN0IGhlYWRcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVswXVxuICAgICAgICBsZXQgbGFzdF9mcmVlZF9vYmplY3RfaWQgPSBoZWFkLmlkXG5cbiAgICAgICAgbGV0IGZyZWVkX29ianM6IFhSZWZbXSA9IHJlZnMuZmlsdGVyKHIgPT4gci5mcmVlKVxuICAgICAgICBmcmVlZF9vYmpzID0gZnJlZWRfb2Jqcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5pZCA8IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICBpZiAoYS5pZCA+IGIuaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGxhc3RvYmo6IFhSZWYgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIGZyZWVkX29ianMpIHtcbiAgICAgICAgICAgIGlmICghbGFzdG9iaikge1xuICAgICAgICAgICAgICAgIC8vIHNldCBmaXJzdCBvYmplY3QgYXMgbGlzdCBoZWFkZXJcbiAgICAgICAgICAgICAgICBoZWFkLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3RvYmopIHtcbiAgICAgICAgICAgICAgICBsYXN0b2JqLnBvaW50ZXIgPSBvYmouaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdG9iaiA9IG9ialxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyZWVkX29ianMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGZyZWVkX29ianNbZnJlZWRfb2Jqcy5sZW5ndGggLSAxXS5wb2ludGVyID0gbGFzdF9mcmVlZF9vYmplY3RfaWRcblxuICAgICAgICByZWZzLnB1c2goaGVhZClcblxuICAgICAgICByZXR1cm4gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgY3Jvc3NpdGUgcmVmZXJlbmNlIHRhYmxlXG4gICAgICogKi9cbiAgICB3cml0ZUNyb3NzU2l0ZVJlZmVyZW5jZVRhYmxlKCk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuWFJFRlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICB0aGlzLnhyZWZzID0gdGhpcy5hcHBseU9iamVjdEZyZWVpbmcodGhpcy54cmVmcylcblxuICAgICAgICBsZXQgb3JkZXJlZF9zZXF1ZW5jZXMgPSB0aGlzLmNvbXB1dGVYcmVmU2VxdWVuY2VzKClcblxuICAgICAgICBmb3IgKGxldCBzZXF1ZW5jZSBvZiBvcmRlcmVkX3NlcXVlbmNlcykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBzZXF1ZW5jZVswXVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShoZWFkLmlkKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoc2VxdWVuY2UubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBfcmV0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDEwLCBzZXF1ZW5jZVtpXS5wb2ludGVyKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgICAgIF9yZXQgPSBfcmV0LmNvbmNhdChXcml0ZXJVdGlsLnBhZCg1LCBzZXF1ZW5jZVtpXS5nZW5lcmF0aW9uKSlcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLmZyZWUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuRilcblxuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZVtpXS51cGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuTilcblxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICAgICAgICAgIGlmIChfcmV0Lmxlbmd0aCA8IDIwKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlhSZWYgZW50cnkgPCAyMCBieXRlc1wiKVxuXG4gICAgICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChfcmV0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgdHJhaWxlclxuICAgICAqICovXG4gICAgd3JpdGVUcmFpbGVyKHBvc1hyZWY6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXIuVFJBSUxFUlxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ESUNUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TSVpFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LnRyYWlsZXJTaXplKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnRyYWlsZXJcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUk9PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHRyYWlsZXIucm9vdCwgdHJ1ZSkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QUkVWKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodGhpcy5wYXJzZXIuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpLnN0YXJ0X3BvaW50ZXIpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5TVEFSVFhSRUYpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocG9zWHJlZikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FT0YpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIGFubmF0aW9ucyBhdCB0aGUgZW5kIG9mIHRoZSBQREYgYnl0ZSByZXByZXNlbnRhdGlvbiBhbmQgcmV0dXJuc1xuICAgICAqIHRoZSBieXRlIGFycmF5XG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkID0gdGhpcy5zb3J0UGFnZVdpc2UodGhpcy5hbm5vdGF0aW9ucylcblxuICAgICAgICBsZXQgcHRyOiBudW1iZXIgPSB0aGlzLmRhdGEubGVuZ3RoXG5cbiAgICAgICAgbGV0IG5ld19kYXRhOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgLy8gRml4IGNhc2UgdGhhdCB0aGVyZSBpcyBubyBsaW5lYnJlYWsgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgZmlsZVxuICAgICAgICBpZiAodGhpcy5kYXRhW3B0ciAtIDFdID09PSA3MCkge1xuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgICAgICBuZXdfZGF0YS5wdXNoKFdyaXRlci5MRilcbiAgICAgICAgICAgIHB0ciArPSAyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWQpIHtcbiAgICAgICAgICAgIGxldCBwYWdlQW5ub3RzID0gcGFnZVdpc2VTb3J0ZWRba2V5XVxuXG4gICAgICAgICAgICAvLyB3cml0ZSB0aGUgYXJyYXkgcmVmZXJlbmNpbmcgdG8gYW5ub3RhdGlvbnMgb2YgYSBjZXJ0YWluIHBhZ2VcbiAgICAgICAgICAgIC8vIGl0IGFsc28gcmVtb3ZlcyByZWZlcmVuY2VzIG9mIGFubm90YXRpb25zIHRoYXQgbXVzdCBiZSBkZWxldGVkXG4gICAgICAgICAgICBsZXQgYW5ub3RfYXJyYXkgPSB0aGlzLndyaXRlQW5ub3RBcnJheShwYWdlQW5ub3RzLCB0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucHRyLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5kYXRhKVxuICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LmRhdGEubGVuZ3RoXG5cbiAgICAgICAgICAgIC8vIGFkZCBhZGFwdGVkIHBhZ2Ugb2JqZWN0IGlmIGl0IGV4aXN0cyAtLSBJbiB0aGUgY2FzZSB0aGUgcGFnZSBoYWQgbm8gYW5ub3RhdGlvbiB5ZXQgdGhlcmUgZXhpc3RzXG4gICAgICAgICAgICAvLyBubyBzdWNoIGFycmF5IHJlZmVycmluZyB0byBpdHMgYW5ub3RhdGlvbnMuIEEgcG9pbnRlciB0byBzdWNoIGFuIGFycmF5IGFycmF5IG11c3QgYmUgYWRkZWQgdG8gdGhlXG4gICAgICAgICAgICAvLyBwYWdlIG9iamVjdC4gSWYgdGhpcyB3YXMgZG9uZSB0aGUgYHBhZ2VEYXRhYCBwYXJhbWF0ZXIgaXMgc2V0IGFuZCBjb250YWlucyB0aGUgYWRhcHRlZCBwYWdlIG9iamVjdFxuICAgICAgICAgICAgaWYgKGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3RfYXJyYXkucGFnZVJlZmVyZW5jZS5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChhbm5vdF9hcnJheS5wYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBwdHIgKz0gYW5ub3RfYXJyYXkucGFnZURhdGEubGVuZ3RoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdyaXRlcyB0aGUgYWN0dWFsIGFubm90YXRpb24gb2JqZWN0XG4gICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBwYWdlQW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90X29iaiA9IHRoaXMud3JpdGVBbm5vdGF0aW9uT2JqZWN0KGFubm90KVxuICAgICAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhbm5vdF9vYmoucHRyLm9iaixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBhbm5vdF9vYmoucHRyLmdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3Rfb2JqLmRhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X29iai5kYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGFrZSBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgbm90IGRlbGV0ZWQgeWV0XG4gICAgICAgIGxldCBfdG9EZWxldGU6IEFubm90YXRpb25bXSA9IHRoaXMudG9EZWxldGUuZmlsdGVyKCh0KSA9PiAhdC5pc19kZWxldGVkKVxuICAgICAgICBsZXQgcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSA9IHRoaXMuc29ydFBhZ2VXaXNlKF90b0RlbGV0ZSlcblxuICAgICAgICAvLyBhZGFwdCB0aGUgcmVtYWluaW5nIGFubm90YXRpb24gcmVmZXJlbmNlIHRhYmxlc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFnZVdpc2VTb3J0ZWRUb0RlbGV0ZSkge1xuICAgICAgICAgICAgbGV0IGRlbF9kYXRhID0gdGhpcy51cGRhdGVQYWdlQW5ub3RhdGlvblJlZmVyZW5jZUFycmF5KHBhZ2VXaXNlU29ydGVkVG9EZWxldGVba2V5XSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGRlbF9kYXRhLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGRlbF9kYXRhLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoZGVsX2RhdGEuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBkZWxfZGF0YS5kYXRhLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXQgdGhpcyBwb2ludCBhbGwgcmVmZXJlbmNlcyB0byBhbm5vdGF0aW9uIG9iamVjdHMgaW4gcGFnZXMgc2hvdWxkIGJlIHJlbW92ZWQgYW5kIHdlIGNhbiBmcmVlXG4gICAgICAgIC8vIHRoZSBhbm5vdGF0aW9uIG9iamVjdCBpZHNcbiAgICAgICAgZm9yIChsZXQgdG9EZWwgb2YgdGhpcy50b0RlbGV0ZSkge1xuICAgICAgICAgICAgaWYgKCF0b0RlbC5vYmplY3RfaWQpXG4gICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdG9EZWwub2JqZWN0X2lkLm9iaixcbiAgICAgICAgICAgICAgICBwb2ludGVyOiAtMSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiB0b0RlbC5vYmplY3RfaWQuZ2VuZXJhdGlvbiArIDEsIC8vIGluY3JlYXNlIGdlbmVyYXRpb25cbiAgICAgICAgICAgICAgICBmcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3J0YWJsZSA9IHRoaXMud3JpdGVDcm9zc1NpdGVSZWZlcmVuY2VUYWJsZSgpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGNydGFibGUpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLndyaXRlVHJhaWxlcihwdHIpXG4gICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KHRyYWlsZXIpXG5cbiAgICAgICAgbGV0IG5ld19kYXRhX2FycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3X2RhdGEpXG5cbiAgICAgICAgbGV0IHJldF9hcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YS5sZW5ndGggKyBuZXdfZGF0YV9hcnJheS5sZW5ndGgpXG4gICAgICAgIHJldF9hcnJheS5zZXQodGhpcy5kYXRhKVxuICAgICAgICByZXRfYXJyYXkuc2V0KG5ld19kYXRhLCB0aGlzLmRhdGEubGVuZ3RoKVxuXG4gICAgICAgIHJldHVybiByZXRfYXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBhbm5vdGF0aW9uXG4gICAgICogKi9cbiAgICB1cGRhdGVQYWdlQW5ub3RhdGlvblJlZmVyZW5jZUFycmF5KHRvRGVsZXRlOiBBbm5vdGF0aW9uW10pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGxldCBwYWdlID0gdG9EZWxldGVbMF0ucGFnZVJlZmVyZW5jZVxuXG4gICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBwYWdlIHJlZmVyZW5jZVwiKVxuXG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG5cbiAgICAgICAgLy8gcmVtb3ZlIGFubm90YXRpb24gcmVmZXJlbmNlcyBmcm9tIHRoZSBhcnJheSB0aGF0IG11c3QgYmUgZGVsZXRlZCBhbmQgbWFyayB0aGVtIGFzIGRlbGV0ZWRcbiAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXMuZmlsdGVyKChhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCB0b0RlbCA9IHRvRGVsZXRlLmZpbmQoKHQpID0+ICg8YW55PnQub2JqZWN0X2lkKS5vYmogPT09IGEub2JqICYmICg8YW55PnQub2JqZWN0X2lkKS5nZW5lcmF0aW9uID09PSBhLmdlbmVyYXRpb24pXG5cbiAgICAgICAgICAgIGlmICh0b0RlbCkge1xuICAgICAgICAgICAgICAgIHRvRGVsLmlzX2RlbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHJlZkFycmF5X2lkOiBhbnkgPSBwYWdlLmFubm90c1BvaW50ZXJcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfU1RBUlQpXG5cblxuICAgICAgICBmb3IgKGxldCBhbiBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFuLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogcmVmQXJyYXlfaWQsIGRhdGE6IHJldCB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==