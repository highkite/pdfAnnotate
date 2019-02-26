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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvZG9jdW1lbnQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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Q0FBQyxJQUFVO1FBQ3pDLElBQUksUUFBUSxHQUFHLEtBQUs7UUFDcEIsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSztRQUNsRCxJQUFJLEdBQUcsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7UUFDOUMsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLO1FBQ2xELElBQUksT0FBTyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0MsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTztRQUN0RCxJQUFJLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU87UUFDdEQsT0FBTyxRQUFRLEdBQUcsR0FBRztJQUN6QixD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QUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFdBQVc7QUFDMUQsV0FBTSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsV0FBVztBQUNoRSxlQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsT0FBTztBQUN2QyxhQUFRLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUMsT0FBTztBQUNyQyxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsYUFBYTtBQUN2RSxVQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFNBQVM7QUFDdkQsU0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN2QyxTQUFJLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3hDLFVBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzlDLFNBQUksR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7QUFDdkMsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87QUFDOUIsTUFBQyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLE9BQU87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SSxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7WUFFM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHdCQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FB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QyxFQUFDLFdBQVc7QUFFakQsaUJBQVUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxrQkFBa0I7QUFDN0YsZUFBUSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxnQkFBZ0I7QUFDaEYsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFlBQVk7QUFDcEQsWUFBSyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxhQUFhO0FBRTNELFNBQUUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUMsVUFBVTtBQUN2QyxRQUFDLEdBQVcsRUFBRTtBQTlDaEMsd0JBeXJCQyIsImZpbGUiOiJwZGZBbm5vdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGRmQW5ub3RhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIsIFBERkRvY3VtZW50UGFyc2VyLCBQYWdlLCBBbm5vdGF0aW9uLCBCb3JkZXIsIENvbG9yIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgV3JpdGVyIH0gZnJvbSAnLi93cml0ZXInXG5cbi8qKlxuICogVGhlIGFubm90YXRpb24gZmFjdG9yeSBwcm92aWRlcyBtZXRob2RzIHRvIGNyZWF0ZSBhbm5vdGF0aW9ucy4gVGhvc2UgYXJlIHN0b3JlZCB0ZW1wb3JhcnlcbiAqIGFuZCB0aGFuIGVuY29kZWQgaW50byBQREYgY29kZSB3aGVuIHRoZSBQREYgZG9jdW1lbnQgaXMgb3V0cHV0dGVkIGFuZCBmb3IgaW5zdGFuY2UgZG93bmxvYWRlZC5cbiAqIFRoYXRcbiAqICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkZhY3Rvcnkge1xuICAgIHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHRvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMucGFyc2VyID0gbmV3IFBERkRvY3VtZW50UGFyc2VyKHRoaXMuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYW5ub3RhdGlvbnMgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBQREYgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGdldEFubm90YXRpb25Db3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGEgUERGIGZpbGUgcmVmZXJlbmNlZCBieSB0aGUgZ2l2ZW4gJ3BhdGgnXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEFubm90YXRpb25GYWN0b3J5PigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IC8vIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICBmZXRjaChwYXRoKS50aGVuKChyKSA9PiByLmJsb2IoKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyOiBhbnkgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEFubm90YXRpb25GYWN0b3J5KHJlYWRlci5yZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSB7IC8vIG5vZGUgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vdCB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbnN1cHBvcnRlZCBlbnZpcm9ubWVudFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZGVudGlmaWVyIG5lY2Vzc2FyeSBmb3IgY3JlYXRpbmcgdGhlIGFubm90YXRpb25cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gXCIocGRmQW5ub3RhdGUtXCIgKyBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLnNsaWNlKDMsIDE3KSArIFwiLVwiICsgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGggKyBcIilcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGRlZmF1bHQgYm9yZGVyXG4gICAgICogKi9cbiAgICBwcml2YXRlIGNyZWF0ZURlZmF1bHRCb3JkZXIoKTogQm9yZGVyIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXM6IDAsXG4gICAgICAgICAgICBob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXM6IDAsXG4gICAgICAgICAgICBib3JkZXJfd2lkdGg6IDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgbWFkZSBhbm5vdGF0aW9ucyBpbnRvIGEgYnl0ZXN0cmVhbVxuICAgICAqICovXG4gICAgd3JpdGUoKTogSW50OEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudG9EZWxldGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuXG4gICAgICAgIGxldCB3cml0ZXI6IFdyaXRlciA9IG5ldyBXcml0ZXIodGhpcy5kYXRhLCB0aGlzLmFubm90YXRpb25zLCB0aGlzLnRvRGVsZXRlLCB0aGlzLnBhcnNlcilcblxuICAgICAgICByZXR1cm4gd3JpdGVyLndyaXRlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlICdyZWN0JyBwYXJhbWV0ZXIsIHdoZXRoZXIgYWxsIHRoZSBlbnRyaWVzIGFyZSBvZiB0eXBlIG51bWJlciBhbmQgaWYgdGhlIHRoZSBudW1iZXIgb2YgZW50cmllcyBpcyBjb3JyZWN0XG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUmVjdChucjogbnVtYmVyLCByZWN0OiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocmVjdC5sZW5ndGggIT09IG5yKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWN0IGhhcyBpbnZhbGlkIG51bWJlciBvZiBlbnRyaWVzOiBcIiArIHJlY3QgKyBcIiBoYXMgXCIgKyByZWN0Lmxlbmd0aCArIFwiIGVudHJpZXMsIGJ1dCBzaG91bGQgaGF2ZSBcIiArIG5yICsgXCIgZW50cmllc1wiKVxuXG4gICAgICAgIHJlY3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgXCIgKyByZWN0ICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVjdGFuZ3VsYXIgaHVsbCBmcm9tIGEgcXVhZFBvaW50IGRlZmluaXRpb25cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHhfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDApXG4gICAgICAgIGxldCB5X3ZhbHVlcyA9IHF1YWRQb2ludHMuZmlsdGVyKChlbGVtZW50LCBpbmRleCkgPT4gaW5kZXggJSAyICE9PSAwKVxuXG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oLi4ueF92YWx1ZXMpLCBNYXRoLm1pbiguLi55X3ZhbHVlcyksIE1hdGgubWF4KC4uLnhfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueV92YWx1ZXMpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3F1YWRQb2ludHMnIHBhcmFtZXRlclxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjaGVja1F1YWRQb2ludHMocXVhZFBvaW50czogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKHF1YWRQb2ludHMubGVuZ3RoICUgOCAhPT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBRdWFkcG9pbnRzIGFycmF5IGhhcyBsZW5ndGggJHtxdWFkUG9pbnRzLmxlbmd0aH0gYnV0IG11c3QgYmUgYSBtdWx0aXBsZSBvZiA4YClcblxuICAgICAgICBxdWFkUG9pbnRzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIGEpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJRdWFkcG9pbnQgXCIgKyBxdWFkUG9pbnRzICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmFzZSBhbm5vdGF0aW9uIHRoYXQgbWVhbiB0aGUgcmF3IG9iamVjdCBvZiBhbm5vdGF0aW9uIG9yIHRob3NlIHBhcnRzIHRoYXQgYXJlIGFsbCBleGlzdGluZ1xuICAgICAqIGFuZCBlcXVhbGx5IHNldCBpbiBhbGwgdHlwZXMgb2YgYW5ub3RhdGlvbnNcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nKTogQW5ub3RhdGlvbiB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKClcbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0Fubm90XCIsXG4gICAgICAgICAgICBhbm5vdC5wYWdlID0gcGFnZSxcbiAgICAgICAgICAgIGFubm90Lm9iamVjdF9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpLFxuICAgICAgICAgICAgYW5ub3QuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgYW5ub3QucmVjdCA9IHJlY3QsXG4gICAgICAgICAgICBhbm5vdC5hdXRob3IgPSBhdXRob3IsXG4gICAgICAgICAgICBhbm5vdC5wYWdlUmVmZXJlbmNlID0gdGhpcy5wYXJzZXIuZ2V0UGFnZShwYWdlKSxcbiAgICAgICAgICAgIGFubm90LnVwZGF0ZURhdGUgPSBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBjb250ZW50cyxcbiAgICAgICAgICAgIGFubm90LmJvcmRlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEJvcmRlcigpXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgaWYgKCFjb250ZW50cylcbiAgICAgICAgICAgIGNvbnRlbnRzID0gXCJcIlxuXG4gICAgICAgIGlmICghYXV0aG9yKVxuICAgICAgICAgICAgYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0ZXh0IG1hcmt1cCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3VidHlwZSA6IHRoZSBzdWJ0eXBlIG9mIHRoZSBUZXh0bWFya3VwIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBpZiAoMCA9PT0gcXVhZFBvaW50cy5sZW5ndGgpXG4gICAgICAgICAgICBxdWFkUG9pbnRzID0gW3JlY3RbMF0sIHJlY3RbM10sIHJlY3RbMl0sIHJlY3RbM10sIHJlY3RbMF0sIHJlY3RbMV0sIHJlY3RbMl0sIHJlY3RbMV1dXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHF1YWRQb2ludHM6IHF1YWRQb2ludHNcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBoaWdobGlnaHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVIaWdobGlnaHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvSGlnaGxpZ2h0XCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHVuZGVybGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVVuZGVybGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvVW5kZXJsaW5lXCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1aWdnbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTcXVpZ2dseUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3F1aWdnbHlcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzdHJpa2Ugb3V0IGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RyaWtlT3V0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TdHJpa2VPdXRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmcmVlIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVGcmVlVGV4dEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHQtanVzdGlmaWVkXCIsXG4gICAgICAgICAgICBkZWZhdWx0QXBwZWFyYW5jZTogXCIvSW52YWxpZF9mb250IDkgVGZcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9GcmVlVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIGNyZWF0ZUxpbmVBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2UgYW5ub3RhdGlvbiBvYmplY3Qgb2YgYSBjaXJjbGUgYW5kIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVhcmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjaXJjbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDaXJjbGVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvQ2lyY2xlXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNlIG9iamVjdCBvZiBhIHBvbHlnb24gb3IgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogc3VidHlwOiBQb2x5Z29uIG9yIFBvbHlMaW5lXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlc1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvbHlnb24gYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Bbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seWdvblwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgdmVydGljZXMsIFwiL1BvbHlMaW5lXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluayBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogaW5rTGlzdCA6IGEgbGlzdCBvZiBsaXN0IGNvbnRhaW5pbmcgdGhlIHBvaW50cyBmb3IgZHJhd2luZyB0aGUgbGluZXNcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlSW5rQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgaW5rTGlzdDogbnVtYmVyW11bXSB8IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDAsIGc6IDEsIGI6IDAgfSkge1xuXG4gICAgICAgIGlmIChpbmtMaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW5rTGlzdCBpcyBlbXB0eVwiKVxuXG4gICAgICAgIGxldCBfaW5rTGlzdDogYW55ID0gW11cbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5rTGlzdFswXSkge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBbaW5rTGlzdF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbmtMaXN0ID0gaW5rTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgaW5rTGlzdDogX2lua0xpc3RcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvSW5rXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0YW1wIGFubm90YXRpb24uIFRoZXJlIGV4aXN0cyBhIG51bWJlciBvZiBwcmVkaWZpbmVkIHN0YW1wcyB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byBQREYgZG9jdW1lbnRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3RhbXBUeXBlIDogdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RhbXBBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN0YW1wVHlwZTogc3RyaW5nID0gXCJEcmFmdFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFs1MCwgNTAsIDgwLCA4MF0sIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBzdGFtcFR5cGU6IHN0YW1wVHlwZVxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9TdGFtcFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB2aXN1YWwgc3ltYm9sIHRoYXQgaW5kY2F0ZXMgdGhlIGV4aXN0YW5jZSBvZiB0ZXh0IGVkaXRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY2FyZXRTeW1ib2wgOiBOb25lIG9yIFAsIHdpdGggUCBmb3IgdXNpbmcgdGhlIHBhcmFncmFwaCBzeW1ib2wgYXMgY2FyZXRcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlQ2FyZXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNhcmV0U3ltYm9sOiBzdHJpbmcgPSBcIlBcIiwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCBbXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNhcmV0U3ltYm9sOiBjYXJldFN5bWJvbFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9DYXJldFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGFubm90YXRpb24gd2l0aCB0aGUgZ2l2ZW4gaWQgb3IgdGhlIGdpdmVuIHJlZmVyZW5jZSBvYmplY3RcbiAgICAgKiAqL1xuICAgIGRlbGV0ZUFubm90YXRpb24oaWQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICAvLyBkZWxldGUgaWYgaXQgd2FzIGp1c3QgY3JlYXRlZCBidXQgaXMgbm90IGluIHRoZSBwZGYgZG9jdW1lbnRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIHRoaXMuYW5ub3RhdGlvbnNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLnNsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQgJiYgaWQub2JqID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gKDxhbnk+dGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQpLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbnMoKS50aGVuKChhbm5vdHMpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBfYW5ub3RzIG9mIGFubm90cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBfYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBpZCAmJiBhbm5vdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgYW5ub3Qub2JqZWN0X2lkICYmIGlkLm9iaiA9PT0gYW5ub3Qub2JqZWN0X2lkLm9iaiAmJiBpZC5nZW5lcmF0aW9uICYmIGlkLmdlbmVyYXRpb24gPT09IGFubm90Lm9iamVjdF9pZC5nZW5lcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RlbGV0ZS5wdXNoKGFubm90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSByZXN1bCBvZiBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgZG9jdW1lbnQuIFRoaXMgd2lsbFxuICAgICAqIGNvbXByaXNlIHRob3NlIHRoYXQgYXJlIGFscmVhZHkgZXhpc3RzIGFuZCB0aG9zZSB0aGF0IHdlcmUgY3JlYXRlZCB1c2luZyB0aGlzIGxpYnJhcnlcbiAgICAgKiAqL1xuICAgIGdldEFubm90YXRpb25zKCk6IFByb21pc2U8QW5ub3RhdGlvbltdW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdBbm5vdHMgPSB0aGlzLnBhcnNlci5leHRyYWN0QW5ub3RhdGlvbnMoKVxuICAgICAgICAgICAgZm9yIChsZXQgbmV3QW5ub3Qgb2YgdGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nQW5ub3RzW25ld0Fubm90LnBhZ2VdLnB1c2gobmV3QW5ub3QpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGV4aXN0aW5nQW5ub3RzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVBvcHVwQW5ub3RhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3dubG9hZHMgdGhlIGFkYXB0ZWQgUERGIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgbGV0IGE6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBhLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkX3BkZiA9IHRoaXMud3JpdGUoKVxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtleHRlbmRlZF9wZGZdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vcGRmXCIgfSlcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICAgIGEuaHJlZiA9IHVybFxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWVcbiAgICAgICAgYS5jbGljaygpXG4gICAgICAgIGEucmVtb3ZlKClcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnQgaW4gYSBub2RlanMgZW52aXJvbm1lbnRcbiAgICAgKiAqL1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLWNsaS9pc3N1ZXMvOTgyN1xuICAgIC8vIHdoeSBpcyBpdCBzbyByZXByZWhlbnNpYmxlIHRvIGNyZWF0ZSBsaWJyYXJpZXMgZm9yIGJvdGggZW52aXJvbm1lbnRzIChicm93c2VyIGFuZCBub2RlanMpPyBUaG9zZSBndXlzIGF0IGFuZ3VsYXIgbWlnaHQga25vdy5cbiAgICAvL1xuICAgIC8vIHVuY29tbWVudCBpdCBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gICAgc2F2ZShmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgJiYgKDxhbnk+cHJvY2VzcykucmVsZWFzZS5uYW1lICE9PSAnbm9kZScpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdVc2UgZG93bmxvYWQoKSBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnKVxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy53cml0ZSgpXG4gICAgICAgIC8vICAgICBmcy53cml0ZUZpbGUoZmlsZU5hbWUsIEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGZpbGUgd2FzIHdyaXR0ZW4gdG86ICR7ZmlsZU5hbWV9YCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBYUmVmIHtcbiAgICBpZDogbnVtYmVyXG4gICAgcG9pbnRlcjogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgZnJlZTogYm9vbGVhblxuICAgIHVwZGF0ZTogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgaWQ6IG51bWJlclxuICAgIGNvdW50OiBudW1iZXJcbiAgICBlbmRfcHRyOiBudW1iZXIgLy8gcG9pbnRzIHRvIHRoZSBlbmQgb2YgdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxufVxuXG5pbnRlcmZhY2UgVHJhaWxlciB7XG4gICAgc2l6ZTogbnVtYmVyXG4gICAgcm9vdDogUmVmZXJlbmNlUG9pbnRlclxuICAgIHByZXY/OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RMb29rdXBUYWJsZSB7XG4gICAgW2lkOiBudW1iZXJdOiBYUmVmXG59XG5cbi8qKlxuICogSG9sZHMgdGhlIGNvbXBsZXRlIGluZm9ybWF0aW9uIG9mIG9uZSB1cGRhdGUgc2VjdGlvbi4gVGhhdCBjb21wcmlzZXM6XG4gKiAtIHRoZSBib2R5IHVwZGF0ZVxuICogLSB0aGUgY3Jvc3Npc3RlIHJlZmVyZW5jZSB0YWJsZVxuICogLSB0aGUgdHJhaWxlclxuICogKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVTZWN0aW9uIHtcbiAgICBwdWJsaWMgcmVmczogWFJlZltdID0gW11cblxuICAgIHB1YmxpYyBzdGFydF9wb2ludGVyOiBudW1iZXIgPSAtMVxuXG4gICAgcHVibGljIHRyYWlsZXI6IFRyYWlsZXIgPSB7IHNpemU6IC0xLCByb290OiB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH0gfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0laRTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMDUsIDEyMiwgMTAxXSAvLyAvU2l6ZVxuICAgIHByaXZhdGUgc3RhdGljIFJPT1Q6IG51bWJlcltdID0gWzQ3LCA4MiwgMTExLCAxMTEsIDExNl0gLy8gL1Jvb3RcbiAgICBwcml2YXRlIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vIC9QcmV2XG4gICAgcHJpdmF0ZSBzdGF0aWMgU1RBUlRYUkVGOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugd2l0aCB0aGUgZ2l2ZW4gaWRcbiAgICAgKiAqL1xuICAgIGdldFJlZmVyZW5jZShpZDogbnVtYmVyKTogWFJlZiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGZvciAobGV0IHJlZiBvZiB0aGlzLnJlZnMpIHtcbiAgICAgICAgICAgIGlmIChyZWYuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWZcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgaGVhZGVyIG9mIGEgc3ViIHNlY3Rpb24uIEZvciBpbnN0YW5jZVxuICAgICAqXG4gICAgICogMCAxIC8vIDwtLVxuICAgICAqIC4uLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iZWpjdCBpZCAwIGFuZCB0aGUgbnVtYmVyIG9mIHN1YiBzZWN0aW9uIGVudHJpZXMgMVxuICAgICAqICovXG4gICAgZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoaW5kZXg6IG51bWJlcik6IFN1YlNlY3Rpb25IZWFkZXIge1xuICAgICAgICBsZXQgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICBsZXQgb2JqX2lkID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaW5kZXgsIHB0cilcblxuICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIgKyAxKVxuXG4gICAgICAgIGxldCBwdHJfcmVmX2NvdW50ID0gcHRyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZV9jb3VudCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9yZWZfY291bnQsIHB0cilcblxuICAgICAgICByZXR1cm4geyBpZDogb2JqX2lkLCBjb3VudDogcmVmZXJlbmNlX2NvdW50LCBlbmRfcHRyOiBwdHIgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIG9mIGEgc3ViIHNlY3Rpb24uIFRoZSBpbmRleCBwb2ludHMgdG8gdGhlIHN0YXJ0IG9mXG4gICAgICogdGhlIGZpcnN0IHJlZmVyZW5jZSBhbmQgY291bnQgcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIHJlZmVyZW5jZXMgdGhhdCBhcmVcbiAgICAgKiBjb250YWluZWQgaW4gdGhlIHN1YnNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGUgZmlyc3Rfb2JqZWN0X2lkIGlzIHRoZSBpZCBwcm92aWRlZCBpbiB0aGUgc3ViIHNlY3Rpb24gaGVhZGVyXG4gICAgICpcbiAgICAgKiBCeSBkZWZpbml0aW9uIG9mIHRoZSBQREYgc3RhbmRhcmQgb25lIGVudHJ5IGlzIDIwIGJ5dGVzIGxvbmdcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RSZWZlcmVuY2VzKGluZGV4OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGZpcnN0X29iamVjdF9pZDogbnVtYmVyKTogWFJlZltdIHtcbiAgICAgICAgbGV0IF9yZWZzOiBYUmVmW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSwgaW5kZXggKz0gMjApIHtcbiAgICAgICAgICAgIGxldCBwdHJfZW5kX3BvaW50ZXIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgICAgICBsZXQgcG9pbnRlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGluZGV4LCBwdHJfZW5kX3BvaW50ZXIpXG5cbiAgICAgICAgICAgIGxldCBwdHJfZ2VuX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgcHRyX2VuZF9wb2ludGVyICsgMSlcblxuICAgICAgICAgICAgbGV0IHB0cl9nZW5fZW5kID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX3N0YXJ0KVxuXG4gICAgICAgICAgICBsZXQgZ2VuZXJhdGlvbiA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQsIHB0cl9nZW5fZW5kKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2ZsYWcgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX2VuZCArIDEpXG5cbiAgICAgICAgICAgIGxldCBpc0ZyZWUgPSB0aGlzLmRhdGFbcHRyX2ZsYWddID09PSAxMDJcblxuICAgICAgICAgICAgX3JlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGZpcnN0X29iamVjdF9pZCArIGksXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcG9pbnRlcixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBnZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGlzRnJlZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICFpc0ZyZWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlZnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgdHJhaWxlciBvZiB0aGUgc3Vic2VjdGlvbiB0aGF0IG1lYW5zIHRoZSBwYXJ0IHN0YXRpbmcgd2l0aCB0aGUgJ3RyYWlsZXInIGtleXdvcmQgYW5kXG4gICAgICogaW4gcGFydGljdWxhciB0aGUgdHJhaWxlciBkaWN0aW9uYXJ5XG4gICAgICogKi9cbiAgICBleHRyYWN0VHJhaWxlcihpbmRleDogbnVtYmVyKTogVHJhaWxlciB7XG4gICAgICAgIGxldCBlbmRfdHJhaWxlcl9pbmRleDogbnVtYmVyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBpbmRleCwgdHJ1ZSlcbiAgICAgICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhLnNsaWNlKGluZGV4LCBlbmRfdHJhaWxlcl9pbmRleClcbiAgICAgICAgaW5kZXggPSAwXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydF9zaXplID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVcGRhdGVTZWN0aW9uLlNJWkUsIF9kYXRhLCBpbmRleCwgdHJ1ZSkgKyBVcGRhdGVTZWN0aW9uLlNJWkUubGVuZ3RoXG4gICAgICAgIHB0cl9zdGFydF9zaXplID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSlcblxuICAgICAgICBsZXQgc2l6ZSA9IFV0aWwuZXh0cmFjdE51bWJlcihfZGF0YSwgcHRyX3N0YXJ0X3NpemUpXG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUk9PVCwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFVwZGF0ZVNlY3Rpb24uUk9PVC5sZW5ndGhcbiAgICAgICAgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuICAgICAgICBsZXQgcm9vdF9yZWZlcmVuY2UgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFVwZGF0ZVNlY3Rpb24uUFJFViwgX2RhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICBsZXQgcHJldiA9IHVuZGVmaW5lZFxuICAgICAgICBpZiAoLTEgIT0gcHRyX3N0YXJ0X3ByZXYpIHtcbiAgICAgICAgICAgIHB0cl9zdGFydF9wcmV2ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldiArIFVwZGF0ZVNlY3Rpb24uUFJFVi5sZW5ndGgpXG5cbiAgICAgICAgICAgIHByZXYgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICByb290OiByb290X3JlZmVyZW5jZSxcbiAgICAgICAgICAgIHByZXY6IHByZXZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgVXBkYXRlIHNlY3Rpb24gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogKi9cbiAgICBleHRyYWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydF9wb2ludGVyID0gaW5kZXhcblxuICAgICAgICBsZXQgc3RhcnRfcHRyID0gaW5kZXggKyA1IC8vICsgbGVuZ3RoKHhyZWYpICsgYmxhbmtcbiAgICAgICAgc3RhcnRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgc3RhcnRfcHRyKVxuXG4gICAgICAgIGxldCBmaXJzdF9oZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAvLyB0aGUgZmlyc3QgaGVhZGVyIG11c3QgYmUgMCB0byBlc3RhYmxpc2ggdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1xuICAgICAgICBpZiAoZmlyc3RfaGVhZGVyLmlkICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkZpcnN0IG9iamVjdCBpZCBub3QgMFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZl9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIGZpcnN0X2hlYWRlci5lbmRfcHRyICsgMSlcblxuICAgICAgICAvLyBleHRyYWN0IGZpcnN0IHJlZmVyZW5jZVxuICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBmaXJzdF9oZWFkZXIuY291bnQsIGZpcnN0X2hlYWRlci5pZCkpXG5cbiAgICAgICAgLy8gZXh0cmFjdCByZW1haW5pbmcgcmVmZXJlbmNlc1xuICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBmaXJzdF9oZWFkZXIuY291bnQgKiAyMFxuXG4gICAgICAgIHdoaWxlICh0aGlzLmRhdGFbc3RhcnRfcHRyXSAhPT0gMTE2KSB7IC8vIDExNiA9ICd0JyBzdGFydCBvZiB0aGUgd29yZCB0cmFpbGVyIHRoYXQgY29uY2x1ZGVzIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlIHNlY3Rpb25cbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICAgICAgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlcyA9IHRoaXMuZXh0cmFjdFJlZmVyZW5jZXMocmVmX3N0YXJ0LCBoZWFkZXIuY291bnQsIGhlYWRlci5pZClcblxuICAgICAgICAgICAgdGhpcy5yZWZzID0gdGhpcy5yZWZzLmNvbmNhdChyZWZlcmVuY2VzKVxuXG4gICAgICAgICAgICBzdGFydF9wdHIgPSByZWZfc3RhcnQgKyBoZWFkZXIuY291bnQgKiAyMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbGVyID0gdGhpcy5leHRyYWN0VHJhaWxlcihzdGFydF9wdHIpXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbXBsZXRlIFBERiBkb2N1bWVudCBoaXN0b3J5IGFuZCB0aGVyZWZvcmUgaG9sZHMgdGhlXG4gKiB1cGRhdGVkIGJvZHkgcGFydHMsIHRoZSBjcm9zc3NpdGUgcmVmZXJlbmNlcyBhbmQgdGhlIGRvY3VtZW50IHRyYWlsZXJzXG4gKiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50SGlzdG9yeSB7XG4gICAgcHVibGljIHVwZGF0ZXM6IFVwZGF0ZVNlY3Rpb25bXSA9IFtdXG5cbiAgICBwcml2YXRlIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuXG4gICAgcHVibGljIHRyYWlsZXJTaXplOiBudW1iZXIgPSAtMVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB1cGRhdGUgc2VjdGlvbiBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RVcGRhdGVTZWN0aW9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVwZGF0ZVNlY3Rpb24gPSBuZXcgVXBkYXRlU2VjdGlvbih0aGlzLmRhdGEpXG4gICAgICAgIHVwZGF0ZVNlY3Rpb24uZXh0cmFjdChpbmRleClcblxuICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaCh1cGRhdGVTZWN0aW9uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBsYXN0IHVwZGF0ZSBzZWN0aW9uIG9mIGEgZG9jdW1lbnQgKHRoYXQgbWVhbnNcbiAgICAgKiB0aGUgbW9zdCByZWNlbnQgdXBkYXRlIGxvY2F0aW5nIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUpXG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRFbnRyeSgpIHtcbiAgICAgICAgbGV0IHB0ciA9IHRoaXMuZGF0YS5sZW5ndGggLSAxXG5cbiAgICAgICAgbGV0IHB0cl9zdGFydHhyZWYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoRG9jdW1lbnRIaXN0b3J5LlNUQVJUWFJFRiwgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgOVxuXG4gICAgICAgIHB0ciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9zdGFydHhyZWYpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0VXBkYXRlU2VjdGlvbihwdHIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGVudGlyZSB1cGRhdGUgc2VjdGlvbnNcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEhpc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuZXh0cmFjdERvY3VtZW50RW50cnkoKVxuXG4gICAgICAgIGxldCB1cyA9IHRoaXMudXBkYXRlc1swXVxuXG4gICAgICAgIHdoaWxlICh1cy50cmFpbGVyLnByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdFVwZGF0ZVNlY3Rpb24odXMudHJhaWxlci5wcmV2KVxuICAgICAgICAgICAgdXMgPSB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXJTaXplID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKS50cmFpbGVyLnNpemVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgZm9yIGNsYXJpZmljYXRpb24uIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBtb3N0IHJlY2VudC4gV2UgcGFyc2VkIGJhY2t3YXJkcy5cbiAgICAgKiAqL1xuICAgIGdldFJlY2VudFVwZGF0ZSgpOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ5IHJ1bm5pbmcgdGhyb3VnaCB0aGUgUERmIGhpc3Rvcnkgd2UgY2FuIGZvciBldmVyeSBvYmplY3QgaWQgZGV0ZXJtaW5lIHRoZSBwb2ludGVyIGFkZHJlc3MgdG8gdGhlIG1vc3QgcmVjZW50IHZlcnNpb24sIGFuZFxuICAgICAqIHdoZXRoZXIgdGhlIG9iamVjdCBpZCBpcyBzdGlsbCBpbiB1c2VkLlxuICAgICAqXG4gICAgICogU28gdGhlIG9iamVjdCBsb29rdXAgdGFibGUgaGFzIGFuIGVudHJ5IGZvciBldmVyeSBleGlzdGluZyBvYmplY3QgaWQsIGEgcG9pbnRlciB0byB0aGUgdGhlIG1vc3QgcmVjZW50IG9iamVjdCBkZWZpbml0aW9uLCBhcyBsb25nXG4gICAgICogYXMgdGhlIG9iamVjdCBleGlzdHMsIG9yIGFuIGFjY29yZGluZyBpbmRpY2F0aW9uIG90aGVyd2lzZS5cbiAgICAgKiAqL1xuICAgIGNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKCk6IE9iamVjdExvb2t1cFRhYmxlIHtcbiAgICAgICAgbGV0IG9ialRhYmxlOiB7IFtpZDogbnVtYmVyXTogWFJlZiB9ID0ge31cblxuICAgICAgICBsZXQgdXBkYXRlID0gdGhpcy5nZXRSZWNlbnRVcGRhdGUoKVxuICAgICAgICBsZXQgb2JqX2NvdW50ID0gdXBkYXRlLnRyYWlsZXIuc2l6ZVxuXG4gICAgICAgIGxldCBpID0gMVxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICsraVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAqIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgbGV0IHVwZGF0ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKClcbiAgICAgICAgbGV0IGZyZWVfaGVhZGVyID0gdXBkYXRlLmdldFJlZmVyZW5jZSgwKVxuXG4gICAgICAgIGlmICghZnJlZV9oZWFkZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1vc3QgcmVjZW50IGNyb3Nzc2l0ZSByZWZlcmVuY2UgaGFzIG5vIGhlYWRlciBmb3IgdGhlIGxpbmtlZCBsaXN0IG9mIGZyZWUgb2JqZWN0c1wiKVxuXG4gICAgICAgIGlmICgxID09PSBmcmVlX2hlYWRlci5wb2ludGVyIHx8IDAgPT09IGZyZWVfaGVhZGVyLnBvaW50ZXIpIHtcbiAgICAgICAgICAgIGlmICgtMSA9PT0gdGhpcy50cmFpbGVyU2l6ZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRyYWlsZXIgc2l6ZSBub3Qgc2V0XCIpXG5cbiAgICAgICAgICAgIHJldHVybiB7IG9iajogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uOiAwLCByZXVzZWQ6IGZhbHNlIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IG9iajogZnJlZV9oZWFkZXIucG9pbnRlciwgZ2VuZXJhdGlvbjogdGhpcy5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpW2ZyZWVfaGVhZGVyLmlkXS5nZW5lcmF0aW9uLCByZXVzZWQ6IHRydWUgfVxuICAgIH1cbn1cbiIsImV4cG9ydCB7IFBERkRvY3VtZW50UGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuZXhwb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyBBbm5vdGF0aW9uRmFjdG9yeSB9IGZyb20gJy4vYW5ub3RhdGlvbic7XG5cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgRG9jdW1lbnRIaXN0b3J5LCBPYmplY3RMb29rdXBUYWJsZSB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSc7XG5cbi8qKlxuICogTm90ZSB0aGF0IHRoaXMgcGFyc2VyIGRvZXMgbm90IHBhcnNlcyB0aGUgUERGIGZpbGUgY29tcGxldGVseS4gSXQgbG9va3VwcyB0aG9zZVxuICogcGFydHMgdGhhdCBhcmUgaW1wb3J0YW50IGZvciB0aGUgY3JlYXRpb24gb2YgYW5ub3RhdGlvbnMuIEZvciBtb3JlIGluZm9ybWF0aW9uXG4gKiBwbGVhc2UgcmVhZCB0aGUgUkVBRE1FLlxuICogKi9cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvciB7XG4gICAgcjogbnVtYmVyXG4gICAgZzogbnVtYmVyXG4gICAgYjogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcbiAgICBob3Jpem9udGFsX2Nvcm5lcl9yYWRpdXM6IG51bWJlclxuICAgIHZlcnRpY2FsX2Nvcm5lcl9yYWRpdXM6IG51bWJlclxuICAgIGJvcmRlcl93aWR0aDogbnVtYmVyXG4gICAgZGFzaF9wYXR0ZXI/OiBudW1iZXJbXVxufVxuXG4vKipcbiAqIFJlZmVyZW5jZXMgaW4gUERGIGRvY3VtZW5zIGFyZSAgb2YgdGhlIGZvcm1cbiAqIDxvYmpfaWQ+IDxnZW5lcmF0aW9uPiBSXG4gKlxuICogVGhpcyBob2xkcyBzdWNoIGEgcmVmZXJlbmNlXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICBvYmo6IG51bWJlclxuICAgIGdlbmVyYXRpb246IG51bWJlclxuICAgIHJldXNlZD86IGJvb2xlYW4gfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb24ge1xuICAgIHBhZ2U6IG51bWJlciA9IC0xLy8gdGhlIHRhcmdldCBwYWdlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgdHlwZTogc3RyaW5nID0gXCJcIi8vIHRoZSBzdWIgdHlwZSBvZiB0aGUgYXJyYXkgKFRleHQsIEhpZ2hsaWdodCwgLi4uKVxuICAgIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IG51bGwgPSBudWxsLy8gYW4gdW51c2VkIG9iamVjdCBpZFxuICAgIGlkOiBzdHJpbmcgPSBcIlwiLy8gdW5pcXVlIGFubmF0aW9uIGlkZW50aWZpZXJcbiAgICByZWN0OiBudW1iZXJbXSA9IFtdLy8gdGhlIGxvY2F0aW9uIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgYXV0aG9yOiBzdHJpbmcgPSBcIlwiLy8gdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHBhZ2VSZWZlcmVuY2U6IFBhZ2UgfCBudWxsID0gbnVsbC8vIFRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0IHRvIHdoaWNoIHRoZSBhbm5vdGF0aW9uIGlzIGFkZGVkXG4gICAgdXBkYXRlRGF0ZTogc3RyaW5nID0gXCJcIi8vIFRoZSBkYXRlIHdoZW4gdGhlIGFubm90YXRpb24gd2FzIGNyZWF0ZWQgb3IgdXBkYXRlZFxuICAgIGNvbnRlbnRzPzogc3RyaW5nIC8vIFRleHQgdGhhdCBzaGFsbCBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBhbm5vdGF0aW9uXG4gICAgYW5ub3RhdGlvbl9mbGFnPzogbnVtYmVyIC8vIFNlZSBQREYgc3BjZWNpZmljYXRpb24gJ0Fubm90YXRpb24gRmxhZydcbiAgICBhcHBlYXJhbmNlX2RpY3Rpb25hcnk/OiBhbnkgLy8gY29udHJvbCB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGFwcGVhcmFuY2Vfc3RhdGU/OiBhbnkgLy8gY2hhbmdlIHRoZSBhcHBlYXJhbmNlIGFjY29yZGluZyB0byBzdGF0ZXNcbiAgICBib3JkZXI/OiBCb3JkZXIgfCBudWxsID0gbnVsbC8vIGRlZmluZSB0aGUgYm9yZGVyXG4gICAgY29sb3I/OiBDb2xvciB8IG51bGwgPSBudWxsLy8gdGhlIGNvbG9yIHNldFxuICAgIG9wYWNpdHk/OiBudW1iZXIgLy8gdGhlIG9wYWNpdHkgdmFsdWUgKENBIGNhbGxlZCBpbiB0aGUgUERGIHNwZWMpXG4gICAgcmljaHRleHQ/OiBzdHJpbmcgLy8gcmljaCB0ZXh0IHN0cmluZyBkaXNwbGF5ZWQgaW4gdGhlIHBvcHVwIHdpbmRvdyB3aGVuIHRoZSBhbm5vdGF0aW9uIGlzIG9wZW5lZFxuICAgIGluaXRpYWxseU9wZW4/OiBib29sZWFuIC8vIGZsYWcgdG8gZGVzY3JpYmUgd2hldGhlciB0aGUgYW5ub3RhdGlvbiBzaGFsbCBpbml0aWFsbHkgYmUgb3BlblxuICAgIGljb25OYW1lPzogc3RyaW5nIC8vIG5hbWUgb2YgdGhlIHVzZWQgaWNvblxuICAgIGFubm90YXRpb25TdGF0ZT86IHN0cmluZyAvLyB0aGUgc3RhdGUgb2YgdGhlIGFubm90YXRpb25cbiAgICBzdGF0ZU1vZGVsPzogc3RyaW5nXG4gICAgZGVmYXVsdEFwcGVhcmFuY2U/OiBzdHJpbmcgLy8gZGVmYXVsdCBhcHBlYXJhbmNlIHN0cmluZ1xuICAgIHRleHRBbGlnbm1lbnQ/OiBzdHJpbmcgLy8gbGVmdC1qdXN0aWZpZWQsIGNlbnRlcmVkLCByaWdodC1qdXN0aWZpZWRcbiAgICByaWNoVGV4dFN0cmluZz86IHN0cmluZyAvLyBnZW5lcmF0ZXMgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICBjYWxsb3V0TGluZT86IG51bWJlcltdIC8vIGNhbGwgb3V0IGxpbmVcbiAgICBpbnRlbnQ/OiBzdHJpbmcgLy8gYSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgaW50ZW50OiBGcmVlVGV4dCwgRnJlZVRleHRDYWxsb3V0LCBGcmVlVGV4dFR5cGVXcml0ZXJcbiAgICBib3JkZXJFZmZlY3Q/OiBhbnlcbiAgICByZD86IGFueSAvLyA/XG4gICAgYm9yZGVyU3R5bGU/OiBhbnkgLy8gYm9yZGVyIHN0eWxlXG4gICAgbGluZUVuZGluZz86IHN0cmluZyAvLyB0aGUgbGluZSBlbmRpbmcgdHlwZSBvZiB0aGUgY2FsbG91dCBsaW5lXG4gICAgc3RhbXBUeXBlPzogc3RyaW5nIC8vIHRoZSBuYW1lIG9mIHRoZSB1c2VkIHN0YW1wIHR5cGUuIENhbiBiZTogW0FwcHJvdmVkLCBFeHBlcmltZW50YWwsIE5vdEFwcHJvdmVkLCBBc0lzLCBFeHBpcmVkLCBOb3RGb3JQdWJsaWNSZWxlYXNlLCBDb25maWRlbnRpYWwsIEZpbmFsLCBTb2xkLCBEZXBhcnRtZW50YWwsIEZvckNvbW1lbnQsIFRvcFNlY3JldCwgRHJhZnQsIEZvclB1YmxpY1JlbGVhc2VdXG4gICAgY2FyZXRTeW1ib2w/OiBzdHJpbmcgLy8gQ2FuIGJlIFAgdG8gdXNlIGEgcGFyYWdyYXBoIHN5bWJvbCBmb3IgdGhlIGNhcmV0IG9yIE5vbmVcbiAgICBxdWFkUG9pbnRzPzogbnVtYmVyW10gLy8gc3BlY2lmaWVzIGhvdyB0aGUgYW5ub3RhdGlvbiBnb2VzIGFycm91bmQgdGhlIHRleHRcbiAgICBpbmtMaXN0PzogbnVtYmVyW11bXVxuICAgIGJvcmRlcl9zdHlsZT86IGFueVxuICAgIGNvbG9yX3NwYWNlPzogbnVtYmVyW11cbiAgICBib3JkZXJfZWZmZWN0PzogYW55XG4gICAgdmVydGljZXM/OiBudW1iZXJbXVxuICAgIGxpbmVfZW5kaW5nPzogc3RyaW5nW11cbiAgICBpbnRlcmlvcl9jb2xvcj86IG51bWJlcltdXG4gICAgbWVhc3VyZT86IGFueVxuICAgIGlzX2RlbGV0ZWQ/OiBib29sZWFuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5ID0gbmV3IEludDhBcnJheShbXSkpIHsgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgYW5ub3RhdGlvbiBvYmplY3QgKHBhcnRpYWxseSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIsIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhlIGRhdGEgYXJyYXkgdG8gdGhlIHBhcnRpdGlvbiB0aGF0IGFjdHVhbGx5IGNvbnRhaW5zIHRoZSBhbm5vdGF0aW9uIGRhdGFcbiAgICAgICAgbGV0IG9ial9lbmRfcHRyOiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UocHRyLCBvYmpfZW5kX3B0cilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IFV0aWwuZXh0cmFjdE9iamVjdElkKHRoaXMuZGF0YSwgMClcblxuICAgICAgICB0aGlzLnR5cGUgPSBcIi9cIiArIFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5TVUJUWVBFKVxuICAgICAgICB0aGlzLnJlY3QgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuUkVDVClcbiAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlID0gcGFnZVxuICAgICAgICB0aGlzLnVwZGF0ZURhdGUgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuTSlcbiAgICAgICAgdGhpcy5ib3JkZXIgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQk9SREVSKVxuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLkMpXG4gICAgICAgIHRoaXMuYXV0aG9yID0gVXRpbC5leHRyYWN0RmllbGQodGhpcy5kYXRhLCBVdGlsLlQpXG4gICAgICAgIHRoaXMuaWQgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuTk0pXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuQ09OVEVOVFMpXG4gICAgICAgIHRoaXMucXVhZFBvaW50cyA9IFV0aWwuZXh0cmFjdEZpZWxkKHRoaXMuZGF0YSwgVXRpbC5RVUFEUE9JTlRTKVxuICAgICAgICB0aGlzLmlua0xpc3QgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuSU5LTElTVClcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgQ2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBDYXRhbG9nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkgeyB9XG5cbiAgICBwcml2YXRlIHBhZ2VzT2JqZWN0SWQ6IFJlZmVyZW5jZVBvaW50ZXIgPSB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIGNhdGFsb2cgb2JqZWN0IGZyb20gdGhlIGRhdGEgYXQgdGhlIGdpdmVuIHB0clxuICAgICAqICovXG4gICAgZXh0cmFjdChwdHI6IG51bWJlcikge1xuICAgICAgICBsZXQgcHRyX3BhZ2VzX2tleSA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5QQUdFUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5QQUdFUy5sZW5ndGhcblxuICAgICAgICB0aGlzLnBhZ2VzT2JqZWN0SWQgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZCh0aGlzLmRhdGEsIHB0cl9wYWdlc19rZXkpXG4gICAgfVxuXG4gICAgZ2V0UGFnZXNPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNPYmplY3RJZFxuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBQYWdlVHJlZSBvYmplY3Qgb2YgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlVHJlZSB7XG5cbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0aW9uOiBudW1iZXIgPSAtMVxuXG4gICAgcHJpdmF0ZSBwYWdlQ291bnQ6IG51bWJlciA9IC0xXG5cbiAgICBwcml2YXRlIHBhZ2VSZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBJbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkcyB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGFuZCByZXR1cm4gdHJ1ZSwgaWYgdGhlIG9iamVjdCB0eXBlIGlzIC9QYWdlXG4gICAgICogKi9cbiAgICBpc1BhZ2UocmVmZXJlbmNlOiBSZWZlcmVuY2VQb2ludGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB4cmVmID0gdGhpcy5vYmplY3RMb29rdXBUYWJsZVtyZWZlcmVuY2Uub2JqXVxuXG4gICAgICAgIGlmICh4cmVmLmdlbmVyYXRpb24gIT09IHJlZmVyZW5jZS5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSB4cmVmLnBvaW50ZXJcblxuICAgICAgICBwdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoeHJlZi5wb2ludGVyLCBwdHIpXG5cbiAgICAgICAgcmV0dXJuICgtMSAhPT0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlBBR0UsIF9kYXRhLCAwLCB0cnVlKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUga2lkcyByZWZlcmVuY2VzIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEZvciBldmVyeSBraWQgaXQgY2hlY2tzIGlmIHRoZSByZWZlcmVuY2VkIG9iamVjdCB0eXBlIGlzOlxuICAgICAqIC0gYSAvUGFnZXMgb2JqZWN0IHRoZW4gaXQgcmVjdXJzaXZlbHkgbG9va3VwcyBpdHMgY2hpbGRyZW5cbiAgICAgKiAtIGEgL1BhZ2Ugb2JqZWN0IHRoZW4gaXQgYWRkcyB0aGUgcmVmZXJlbmNlc1xuICAgICAqICovXG4gICAgZXh0cmFjdFBhZ2VSZWZlcmVuY2VzKHJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSkge1xuXG4gICAgICAgIGZvciAobGV0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhZ2UocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBoYW5kbGUgYXJyYXkgLS0gcmVjdXJzaXZlbHkgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgcmVmZXJlbmNlIGFycmF5XG4gICAgICAgICAgICAgICAgbGV0IHhyZWYgPSB0aGlzLm9iamVjdExvb2t1cFRhYmxlW3JlZmVyZW5jZS5vYmpdXG5cbiAgICAgICAgICAgICAgICBpZiAoeHJlZi5nZW5lcmF0aW9uICE9PSByZWZlcmVuY2UuZ2VuZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgICAgICAgICAgbGV0IHB0ciA9IHhyZWYucG9pbnRlclxuXG4gICAgICAgICAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5X2RhdGEgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwga2lkc19pbmRleCArIDEpXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmcyA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZXNGcm9tQXJyYXlTZXF1ZW5jZShhcnJheV9kYXRhKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIG9iamVjdCBkYXRhIGF0IHRoZSBnaXZlbiBwb2ludGVyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHB0cjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBrZXlfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQ09VTlQsIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuQ09VTlQubGVuZ3RoXG5cbiAgICAgICAgLy8gVGhlIGNvbXBsZXRlIHBhZ2UgY291bnQgaXMgc3BlY2lmaWVkIGluIHRoZSB0b3AgbGV2ZWwgcGFnZXRyZWVcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBrZXlfaW5kZXgpXG5cbiAgICAgICAgLy8gaXQgaXMgcG9zc2libGUgdGhhdCBhbiBvYmplY3Qgb2YgdHlwZSAvUGFnZXMgcmVmZXJlbmNlcyBhZ2FpbiB0byBvYmplY3RzIG9mIHR5cGVzIC9QYWdlcyBzbyB3ZSBtdXN0XG4gICAgICAgIC8vIGFwcGx5IGEgcmVjdXJzaXZlIGV2YWx1YXRpb25cbiAgICAgICAgbGV0IGtpZHNfaW5kZXggPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuS0lEUywgdGhpcy5kYXRhLCBwdHIsIHRydWUpICsgVXRpbC5LSURTLmxlbmd0aFxuXG4gICAgICAgIGxldCBhcnJheV9kYXRhID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZSh0aGlzLmRhdGEsIGtpZHNfaW5kZXggKyAxKVxuXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZXMgPSBbXVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X2RhdGEpXG5cbiAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFnZXMgdGhlIHBhZ2UgdHJlZSBjb21wcmlzZXNcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlQ291bnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0c1xuICAgICAqICovXG4gICAgZ2V0UGFnZVJlZmVyZW5jZXMoKTogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVJlZmVyZW5jZXNcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgcHVibGljIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZCAvLyBUaGUgb2JqZWN0IGlkIGFuZCBnZW5lcmF0aW9uIG9mIHRoZSBvYmplY3RcblxuICAgIHB1YmxpYyBhbm5vdHM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgaGFzQW5ub3RzRmllbGQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHVibGljIGFubm90c1BvaW50ZXI6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5LCBwcml2YXRlIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5KSB7IH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIHRoZSBsaW5rZWQgYW5ub3RhdGlvbnMgYXJyYXlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKSB7XG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKCF0aGlzLmFubm90c1BvaW50ZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb25zIHBvaW50ZXIgbm90IHNldFwiKVxuXG4gICAgICAgIGxldCByZWZfYW5ub3RfdGFibGUgPSBvYmpfdGFibGVbdGhpcy5hbm5vdHNQb2ludGVyLm9ial1cblxuICAgICAgICBpZiAocmVmX2Fubm90X3RhYmxlLmdlbmVyYXRpb24gIT09IHRoaXMuYW5ub3RzUG9pbnRlci5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWZlcmVuY2UgYW5ub3RhdGlvbiB0YWJsZSBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBwdHIgPSByZWZfYW5ub3RfdGFibGUucG9pbnRlclxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKSArIFV0aWwuT0JKLmxlbmd0aFxuXG4gICAgICAgIHB0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcblxuICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2UgPSBVdGlsLmV4dHJhY3RBcnJheVNlcXVlbmNlKHRoaXMuZGF0YSwgcHRyKVxuXG4gICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlKVxuXG4gICAgICAgIHRoaXMuYW5ub3RzID0gcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBwYWdlIG9iamVjdCBzdGFydGluZyBhdCBwb3NpdGlvbiBwdHJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QocHRyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGlkX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcih0aGlzLmRhdGEsIHB0cilcbiAgICAgICAgbGV0IG9iamVjdF9pZDogbnVtYmVyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgaWRfcHRyKVxuXG4gICAgICAgIGxldCBlbmRfaWRfcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpZF9wdHIgKyAxKSArIDFcbiAgICAgICAgbGV0IG9iamVjdF9nZW46IG51bWJlciA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIGVuZF9pZF9wdHIpXG5cbiAgICAgICAgdGhpcy5vYmplY3RfaWQgPSB7IG9iajogb2JqZWN0X2lkLCBnZW5lcmF0aW9uOiBvYmplY3RfZ2VuIH1cblxuICAgICAgICBsZXQgZW5kX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIHRoaXMuZGF0YSwgcHRyLCB0cnVlKVxuXG4gICAgICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YS5zbGljZShwdHIsIGVuZF9wdHIpXG5cbiAgICAgICAgbGV0IGFubm90c19wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBfZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBpZiAoLTEgIT09IGFubm90c19wdHIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQW5ub3RzRmllbGQgPSB0cnVlXG5cbiAgICAgICAgICAgIGFubm90c19wdHIgKz0gVXRpbC5BTk5PVFMubGVuZ3RoICsgMVxuICAgICAgICAgICAgYW5ub3RzX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihfZGF0YSwgYW5ub3RzX3B0cilcblxuICAgICAgICAgICAgaWYgKF9kYXRhW2Fubm90c19wdHJdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZShfZGF0YSwgYW5ub3RzX3B0cilcblxuICAgICAgICAgICAgICAgIGxldCByZWZzID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdHMgPSByZWZzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzUG9pbnRlciA9IFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKF9kYXRhLCBhbm5vdHNfcHRyKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0QW5ub3RhdGlvbkFycmF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIHJlbGV2YW50IHBhcnRzIG9mIHRoZSBQREYgZG9jdW1lbnQgYW5kIHByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdG8gZXh0cmFjdCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGZvclxuICogYWRkaW5nIGFubm90YXRpb25zXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBERkRvY3VtZW50UGFyc2VyIHtcblxuICAgIHB1YmxpYyBkb2N1bWVudEhpc3Rvcnk6IERvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkobmV3IEludDhBcnJheShbXSkpXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEludDhBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgSW50OEFycmF5KGRhdGEpXG5cbiAgICAgICAgdGhpcy5kb2N1bWVudEhpc3RvcnkgPSBuZXcgRG9jdW1lbnRIaXN0b3J5KHRoaXMuZGF0YSlcbiAgICAgICAgdGhpcy5kb2N1bWVudEhpc3RvcnkuZXh0cmFjdERvY3VtZW50SGlzdG9yeSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZyZWUgb2JqZWN0IGlkLiBJdCBmaXJzdCBjaGVja3Mgd2V0aGVyIHRoZXJlIGNhbiBiZSBhbiBmcmVlZCBvYmplY3QgaWQgcmV1c2VkLiBJZiB0aGF0IGlzIG5vdCB0aGUgY2FzZVxuICAgICAqIGl0IGNyZWF0ZXMgYSBuZXcgb25lXG4gICAgICogKi9cbiAgICBnZXRGcmVlT2JqZWN0SWQoKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50SGlzdG9yeS5nZXRGcmVlT2JqZWN0SWQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhdGFsb2cgb2JqZWN0IG9mIHRoZSBQREYgZmlsZVxuICAgICAqICovXG4gICAgZ2V0Q2F0YWxvZygpOiBDYXRhbG9nT2JqZWN0IHtcbiAgICAgICAgbGV0IHJvb3Rfb2JqID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlci5yb290XG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IGNhdGFsb2dfcHRyID0gb2JqX3RhYmxlW3Jvb3Rfb2JqLm9ial0ucG9pbnRlclxuXG4gICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IG5ldyBDYXRhbG9nT2JqZWN0KHRoaXMuZGF0YSlcbiAgICAgICAgY2F0YWxvZ19vYmplY3QuZXh0cmFjdChjYXRhbG9nX3B0cilcblxuICAgICAgICByZXR1cm4gY2F0YWxvZ19vYmplY3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB0cmVlIG9iamVjdCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VUcmVlKCk6IFBhZ2VUcmVlIHtcbiAgICAgICAgbGV0IG9ial90YWJsZTogT2JqZWN0TG9va3VwVGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IGNhdGFsb2dfb2JqZWN0ID0gdGhpcy5nZXRDYXRhbG9nKClcblxuICAgICAgICBsZXQgcGFnZXNfaWQgPSBjYXRhbG9nX29iamVjdC5nZXRQYWdlc09iamVjdElkKClcbiAgICAgICAgbGV0IHBhZ2VzX3JlZiA9IG9ial90YWJsZVtwYWdlc19pZC5vYmpdXG5cbiAgICAgICAgaWYgKHBhZ2VzX3JlZi5nZW5lcmF0aW9uICE9PSBwYWdlc19pZC5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlcyBvYmplY3Qgb3V0IG9mIGRhdGVcIilcblxuICAgICAgICBsZXQgcGFnZVRyZWUgPSBuZXcgUGFnZVRyZWUodGhpcy5kYXRhLCBvYmpfdGFibGUpXG4gICAgICAgIHBhZ2VUcmVlLmV4dHJhY3QocGFnZXNfcmVmLnBvaW50ZXIpXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VUcmVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHBhZ2Ugd2l0aCB0aGUgZ2l2ZW4gcGFnZU51bWJlclxuICAgICAqICovXG4gICAgZ2V0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiBQYWdlIHtcbiAgICAgICAgbGV0IHBhZ2VUcmVlID0gdGhpcy5nZXRQYWdlVHJlZSgpXG4gICAgICAgIGxldCBwYWdlSWQgPSBwYWdlVHJlZS5nZXRQYWdlUmVmZXJlbmNlcygpW3BhZ2VOdW1iZXJdXG5cbiAgICAgICAgbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICBpZiAob2JqX3RhYmxlW3BhZ2VJZC5vYmpdLmdlbmVyYXRpb24gIT09IHBhZ2VJZC5nZW5lcmF0aW9uKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIG9iamVjdCBvdXQgb2YgZGF0ZVwiKVxuXG4gICAgICAgIGxldCBvYmpfcHRyID0gb2JqX3RhYmxlW3BhZ2VJZC5vYmpdLnBvaW50ZXJcblxuICAgICAgICBsZXQgcGFnZSA9IG5ldyBQYWdlKHRoaXMuZGF0YSwgdGhpcy5kb2N1bWVudEhpc3RvcnkpXG4gICAgICAgIHBhZ2UuZXh0cmFjdChvYmpfcHRyKVxuXG4gICAgICAgIHJldHVybiBwYWdlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5ub3RhdGlvbnMgdGhhdCBleGlzdCBpbiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uW11bXSB7XG4gICAgICAgIGxldCBhbm5vdHM6IEFubm90YXRpb25bXVtdID0gW11cbiAgICAgICAgbGV0IHB0OiBQYWdlVHJlZSA9IHRoaXMuZ2V0UGFnZVRyZWUoKVxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlQ291bnQ6IG51bWJlciA9IHB0LmdldFBhZ2VDb3VudCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgbGV0IHBhZ2U6IFBhZ2UgPSB0aGlzLmdldFBhZ2UoaSlcblxuICAgICAgICAgICAgbGV0IGFubm90YXRpb25SZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgICAgICBsZXQgcGFnZUFubm90czogQW5ub3RhdGlvbltdID0gW11cblxuICAgICAgICAgICAgZm9yIChsZXQgcmVmUHRyIG9mIGFubm90YXRpb25SZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBuZXcgQW5ub3RhdGlvbih0aGlzLmRhdGEpXG4gICAgICAgICAgICAgICAgYS5leHRyYWN0KG9ial90YWJsZVtyZWZQdHIub2JqXS5wb2ludGVyLCBwYWdlKVxuICAgICAgICAgICAgICAgIGEucGFnZSA9IGlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzLnB1c2goYSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFubm90cy5wdXNoKHBhZ2VBbm5vdHMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYW5ub3RzXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBSZWZlcmVuY2VQb2ludGVyIH0gZnJvbSAnLi9wYXJzZXInO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIG1ldGhvZHMgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGUgYnl0ZSBhcnJheSByZXByZXNlbnRpbmcgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBVdGlsIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgQ1I6IG51bWJlciA9IDEzXG4gICAgcHVibGljIHN0YXRpYyBMRjogbnVtYmVyID0gMTBcbiAgICBwdWJsaWMgc3RhdGljIFRZUEU6IHN0cmluZyA9IFwiL1R5cGUgXCJcbiAgICBwdWJsaWMgc3RhdGljIFNQQUNFOiBudW1iZXIgPSAzMlxuICAgIHB1YmxpYyBzdGF0aWMgX1RZUEU6IG51bWJlcltdID0gWzQ3LCA4NCwgMTIxLCAxMTIsIDEwMV0gLy8gJy9UeXBlJ1xuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdIC8vICdvYmonXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl0gLy8gJ2VuZG9iaidcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXJbXSA9IFs5MV0gLy8gJ1snXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlcltdID0gWzkzXSAvLyAnXSdcbiAgICBwdWJsaWMgc3RhdGljIFNUUklOR19TVEFSVDogbnVtYmVyW10gPSBbNDBdIC8vICcoJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX0VORDogbnVtYmVyW10gPSBbNDFdIC8vICcpJ1xuICAgIHB1YmxpYyBzdGF0aWMgUjogbnVtYmVyW10gPSBbODJdIC8vICdSJ1xuICAgIHB1YmxpYyBzdGF0aWMgQU5OT1Q6IG51bWJlcltdID0gWzQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XSAvLyAnL0Fubm90J1xuICAgIHB1YmxpYyBzdGF0aWMgQU5OT1RTOiBudW1iZXJbXSA9IFs0NywgNjUsIDExMCwgMTEwLCAxMTEsIDExNiwgMTE1XSAvLyAnL0Fubm90J1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9TVEFSVDogbnVtYmVyW10gPSBbNjAsIDYwXSAvLyAnPDwnXG4gICAgcHVibGljIHN0YXRpYyBESUNUX0VORDogbnVtYmVyW10gPSBbNjIsIDYyXSAvLyAnPj4nXG4gICAgcHVibGljIHN0YXRpYyBTVUJUWVBFOiBudW1iZXJbXSA9IFs0NywgODMsIDExNywgOTgsIDExNiwgMTIxLCAxMTIsIDEwMV0gLy8gJy9TdWJ0eXBlJ1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRVM6IG51bWJlcltdID0gWzQ3LCA4MCwgOTcsIDEwMywgMTAxLCAxMTVdIC8vIC9QYWdlc1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRTogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBLSURTOiBudW1iZXJbXSA9IFs0NywgNzUsIDEwNSwgMTAwLCAxMTVdXG4gICAgcHVibGljIHN0YXRpYyBDT1VOVDogbnVtYmVyW10gPSBbNDcsIDY3LCAxMTEsIDExNywgMTEwLCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBSRUNUOiBudW1iZXJbXSA9IFs0NywgODIsIDEwMSwgOTksIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIE06IG51bWJlcltdID0gWzQ3LCA3N10gLy8gJy9NJ1xuICAgIHB1YmxpYyBzdGF0aWMgVDogbnVtYmVyW10gPSBbNDcsIDg0XSAvLyAnL1QnXG4gICAgcHVibGljIHN0YXRpYyBGOiBudW1iZXJbXSA9IFs0NywgNzBdIC8vICcvRidcbiAgICBwdWJsaWMgc3RhdGljIEM6IG51bWJlcltdID0gWzQ3LCA2N10gLy8gJy9DJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ0E6IG51bWJlcltdID0gWzQ3LCA2NywgNjVdIC8vICcvQ0EnXG4gICAgcHVibGljIHN0YXRpYyBOTTogbnVtYmVyW10gPSBbNDcsIDc4LCA3N10gLy8gJy9OTSdcbiAgICBwdWJsaWMgc3RhdGljIFA6IG51bWJlcltdID0gWzQ3LCA4MF0gLy8gJy9QJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVOVFM6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTAsIDExNiwgMTAxLCAxMTAsIDExNiwgMTE1XSAvLyAnL0NvbnRlbnRzJ1xuICAgIHB1YmxpYyBzdGF0aWMgQk9SREVSOiBudW1iZXJbXSA9IFs0NywgNjYsIDExMSwgMTE0LCAxMDAsIDEwMSwgMTE0XSAvLyAnL0JvcmRlcidcbiAgICBwdWJsaWMgc3RhdGljIFFVQURQT0lOVFM6IG51bWJlcltdID0gWzQ3LCA4MSwgMTE3LCA5NywgMTAwLCA4MCwgMTExLCAxMDUsIDExMCwgMTE2LCAxMTVdIC8vICcvUXVhZFBvaW50cydcbiAgICBwdWJsaWMgc3RhdGljIElOS0xJU1Q6IG51bWJlcltdID0gWzQ3LCA3MywgMTEwLCAxMDcsIDc2LCAxMDUsIDExNSwgMTE2XSAvLyAnL0lua0xpc3QnXG5cbiAgICAvKipcbiAgICAgKiBBc3N1bWVzIHRoYXQgYXQgcG9zaXRpb24gaW5kZXggaXMgYSBkZWxpbWl0ZXIgYW5kIHRoYW4gcnVucyBhcyBsb25nIGZvcndhcmQgdW50aWwgaXQgZmluZHNcbiAgICAgKiBhbm90aGVyIGRlbGltaXRlciBvciByZWFjaGVzIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHNraXBEZWxpbWl0ZXIoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IGRhdGEubGVuZ3RoICYmIHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpbmRleF0pKSsraW5kZXhcblxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgYXNjaWkgdmFsdWVzXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRTdHJpbmdUb0FzY2lpKHRvQ29udmVydDogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgYXNjaWlzOiBudW1iZXJbXSA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0NvbnZlcnQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGFzY2lpcy5wdXNoKCt0b0NvbnZlcnQuY2hhckNvZGVBdChpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc2NpaXNcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRGVsaW1pdGVyKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSAxMCB8fCB2YWx1ZSA9PT0gMTMgfHwgdmFsdWUgPT09IDMyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHRoZSBzZXF1ZW5jZSBpbiBkYXRhIHN0YXJ0aW5nIGF0IHRoZSBvZmZzZXRcbiAgICAgKlxuICAgICAqIFNldCB0aGUgJ2Nsb3NlZCcgZmxhZyB0byBjaGVjayBpZiB0aGUgc3VjZWVkaW5nIGNoYXIgYWZ0ZXIgdGhlIHNlcXVlbmNlIGlzIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgd2hvbGUgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlKHNlcXVlbmNlOiBudW1iZXJbXSwgZGF0YTogSW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDAsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PSBzZXF1ZW5jZVtqXSkge1xuICAgICAgICAgICAgICAgIGlmIChqID09IHNlcXVlbmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQgfHwgZGF0YS5sZW5ndGggPT0gaSArIDEgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIC0gKHNlcXVlbmNlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gLTFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2pcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0aGUgc2VxdWVuY2UgaW4gZGF0YSBzdGFydGluZyBhdCB0aGUgb2Zmc2V0IGluIHJldmVyc2UgZGlyZWN0aW9uXG4gICAgICpcbiAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHByZWNlZGluZyBjaGFyIGJlZm9yZSB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIHN0YXJ0XG4gICAgICogb2YgdGhlIHdob2xlIGRhdGEgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBJbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyID0gZGF0YS5sZW5ndGggLSAxLCBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBpID0gb2Zmc2V0XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PSBzZXF1ZW5jZVtqXSkge1xuICAgICAgICAgICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQgfHwgaSAtIDEgPCAwIHx8IHRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtpIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC0talxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqID0gc2VxdWVuY2UubGVuZ3RoIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYXRlcyB0aGUgaW5kZXggYmVmb3JlIHRoZSBuZXh0IGRlbGltaXRlci4gRGVsaW1pdGVycyBjYW4gYmUgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZCBvZiB0aGUgd2hvbGUgc2VxdWVuY2VcbiAgICAgKiBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlRGVsaW1pdGVyKGRhdGE6IEludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IGRhdGEubGVuZ3RoICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpKytvZmZzZXRcblxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlci4gRGVsaW1pdGVycyBjYW4gYmUgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZCBvZiB0aGUgd2hvbGUgc2VxdWVuY2VcbiAgICAgKiBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlRGVsaW1pdGVyUmV2ZXJzZWQoZGF0YTogSW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAwICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpLS1vZmZzZXRcblxuICAgICAgICBpZiAob2Zmc2V0IDw9IDApXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgYXJyYXkgZGF0YSBhdCB0aGUgcG9zaXRpb24gb2YgdGhlIGluZGV4LiBUaGUgaW5kZXggY2FuIG1hcmsgdGhlIHN0YXJ0IG9mIHRoZVxuICAgICAqIGFycmF5IG9yIGEgcG9pbnRlciB3aXRoaW4gdGhlIGFycmF5LiBJZiBpdCBpcyBhIG5lc3RlZCBhcnJheSB0aGUgcG9pbnRlciBtdXN0IG1hcmsgdGhlIGJlZ2lubmluZ1xuICAgICAqIG9mIHRoZSBzdWJlcmFycmF5LiBPdGhlcndpc2Ugb25seSB0aGUgc3ViYXJyYXkgaXMgZXh0cmFjdGVkXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RBcnJheVNlcXVlbmNlKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBhcnJheV9zdGFydCA9IHRoaXMubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLkFSUkFZX1NUQVJULCBkYXRhLCBpbmRleClcblxuICAgICAgICBpZiAoLTEgPT09IGFycmF5X3N0YXJ0KVxuICAgICAgICAgICAgYXJyYXlfc3RhcnQgPSBpbmRleFxuXG4gICAgICAgIGxldCByb290X2xpc3QgPSB7IHB0cjogYXJyYXlfc3RhcnQsIGxzdDogW10gfVxuICAgICAgICBsZXQgc3RhcnRfcG9pbnRlcjogYW55W10gPSBbcm9vdF9saXN0XVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheV9zdGFydCArIDE7IGkgPCBkYXRhLmxlbmd0aCAmJiBzdGFydF9wb2ludGVyLmxlbmd0aCA+IDA7KSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9TVEFSVFswXSkge1xuICAgICAgICAgICAgICAgIGxldCBfbiA9IHsgcHRyOiBpLCBsc3Q6IFtdIH1cbiAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyW3N0YXJ0X3BvaW50ZXIubGVuZ3RoIC0gMV0ucHRyID0gLTEgLy8gbWFyayBsaXN0IGFzIGNvbGxlY3Rpb24gb2Ygb3RoZXIgbGlzdHNcbiAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyLnB1c2goX24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLkFSUkFZX0VORFswXSkge1xuICAgICAgICAgICAgICAgIGxldCBzcCA9IHN0YXJ0X3BvaW50ZXIucG9wKClcblxuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBNaXNzaW5nIHN0YXJ0IHBvaW50ZXIgJHtKU09OLnN0cmluZ2lmeShzcCl9YClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc3AucHRyICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNfdG9BZGQgPSBkYXRhLnNsaWNlKHNwLnB0ciArIDEsIGkpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydF9wb2ludGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXJbc3RhcnRfcG9pbnRlci5sZW5ndGggLSAxXS5sc3QucHVzaChhc190b0FkZClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc190b0FkZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcC5wdHIgPT09IC0xICYmIHN0YXJ0X3BvaW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydF9wb2ludGVyW3N0YXJ0X3BvaW50ZXIubGVuZ3RoIC0gMV0ubHN0LnB1c2goc3AubHN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBpICsgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb290X2xpc3QubHN0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZUFycmF5UmVjKGFycmF5U2VxOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoYXJyYXlTZXEgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VzRnJvbUFycmF5U2VxdWVuY2UoYXJyYXlTZXEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmJyOiBhbnkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgYXJyYXlfc2VxdWVuY2Ugb2YgYXJyYXlTZXEpIHtcbiAgICAgICAgICAgICAgICBuYnIucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheVJlYyhhcnJheV9zZXF1ZW5jZSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIGFuIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBsZXQgYXJyYXlfc2VxdWVuY2VzID0gVXRpbC5leHRyYWN0QXJyYXlTZXF1ZW5jZShkYXRhLCBpbmRleClcblxuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0UmVmZXJlbmNlQXJyYXlSZWMoYXJyYXlfc2VxdWVuY2VzKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheVNlcTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGFycmF5U2VxIGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgICAgICAgICBsZXQgbmJyczogYW55ID0gW11cblxuICAgICAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGFycmF5U2VxLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5icnMucHVzaChVdGlsLmV4dHJhY3ROdW1iZXIoYXJyYXlTZXEsIGkpKVxuXG4gICAgICAgICAgICAgICAgaSA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGFycmF5U2VxLCBpICsgMSkgKyAxXG4gICAgICAgICAgICAgICAgaSA9IFV0aWwuc2tpcERlbGltaXRlcihhcnJheVNlcSwgaSArIDEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmJyOiBhbnkgPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhcnJheV9zZXF1ZW5jZSBvZiBhcnJheVNlcSkge1xuICAgICAgICAgICAgICAgIG5ici5wdXNoKHRoaXMuZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheV9zZXF1ZW5jZSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuYnJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBudW1iZXJzIGluIGFuIGFycmF5XG4gICAgICogZS5nLiAgWzY5LjY5NyA0Ny40MTQ4IDk2LjQ2NDYgNTguMjU5OCBdXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3ROdW1iZXJzQXJyYXkoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGFycmF5X3NlcXVlbmNlcyA9IFV0aWwuZXh0cmFjdEFycmF5U2VxdWVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdE51bWJlcnNBcnJheVJlYyhhcnJheV9zZXF1ZW5jZXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbiBvYmplY3QgaWRlbnRpZmllclxuICAgICAqIDxJRD4gPEdFTj4gb2JqXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RPYmplY3RJZChkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgaW5kZXggPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoZGF0YSwgaW5kZXggKyAxKVxuXG4gICAgICAgIGxldCBvYmogPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgaW5kZXgsIGVuZF9vYmpfcHRyKVxuXG4gICAgICAgIGxldCBzdGFydF9nZW5fcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGVuZF9vYmpfcHRyICsgMSlcbiAgICAgICAgbGV0IGVuZF9nZW5fcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciArIDEpXG5cbiAgICAgICAgbGV0IGdlbiA9IFV0aWwuZXh0cmFjdE51bWJlcihkYXRhLCBzdGFydF9nZW5fcHRyLCBlbmRfZ2VuX3B0cilcblxuICAgICAgICByZXR1cm4geyBvYmo6IG9iaiwgZ2VuZXJhdGlvbjogZ2VuIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHRoZSByZWZlcmVuY2Ugc3RhcnRpbmcgYXQgcG9zaXRpb24gJ2luZGV4J1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IEludDhBcnJheSB7XG4gICAgICAgIGluZGV4ID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGluZGV4KVxuICAgICAgICBsZXQgcl9pbmRleCA9IHRoaXMubG9jYXRlU2VxdWVuY2UodGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaShcIiBSXCIpLCBkYXRhLCBpbmRleCwgdHJ1ZSlcblxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShpbmRleCwgcl9pbmRleClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIGFzIHR5cGVkIG9iamVjdFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlVHlwZWQoZGF0YTogSW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogUmVmZXJlbmNlUG9pbnRlciB7XG5cbiAgICAgICAgbGV0IHJlZl9kYXRhID0gdGhpcy5leHRyYWN0UmVmZXJlbmNlKGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBkZWxfaW5kZXggPSB0aGlzLmxvY2F0ZURlbGltaXRlcihyZWZfZGF0YSwgMClcblxuICAgICAgICBsZXQgaWQgPSB0aGlzLmV4dHJhY3ROdW1iZXIocmVmX2RhdGEsIDAsIGRlbF9pbmRleClcbiAgICAgICAgbGV0IGdlbiA9IHRoaXMuZXh0cmFjdE51bWJlcihyZWZfZGF0YSwgZGVsX2luZGV4ICsgMilcblxuICAgICAgICByZXR1cm4geyBvYmo6IGlkLCBnZW5lcmF0aW9uOiBnZW4gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9iamVjdHMgaW4gUERGIGZpbGVzIGFyZSBkZWZpbmVkIGFzXG4gICAgICogPG9iak51bWJlcj4gPGdlbmVyYXRpb24+IG9ialxuICAgICAqIDw8XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIC9UeXBlIC88dHlwZT5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqID4+XG4gICAgICpcbiAgICAgKiBBcHByb2FjaDogV2UgaWRlbnRpZnkgYW4gaW5kZXggd2l0aGluIHRoZSBvYmplY3QgZGVmaW5pdG9uIHNlYXJjaCB0aGUgdW5pcXVlbHkgaWRlbnRpZnlhYmxlIGVuZCBvZiB0aGUgb2JqZWN0IGRlZmluaXRpb25cbiAgICAgKiB0aGFuIHRoZSB1bmlxdWVseSBpZGVudGlmaWFibGUgc3RhcnQuIFdlIHRoYW4gZXh0cmFjdCB0aGUgZ2VuZXJhdGlvbiBhbmQgdGhlIG9iamVjdCBpZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3RCeVR5cGUoZGF0YTogSW50OEFycmF5LCBfdHlwZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IHNlYXJjaFNlcXVlbmNlID0gdGhpcy5jb252ZXJ0U3RyaW5nVG9Bc2NpaSh0aGlzLlRZUEUgKyBfdHlwZSlcblxuICAgICAgICBsZXQgb2JqX2luZGV4ID0gdGhpcy5sb2NhdGVTZXF1ZW5jZShzZWFyY2hTZXF1ZW5jZSwgZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICBsZXQgb2JqX2VuZCA9IHRoaXMubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIGRhdGEsIG9ial9pbmRleCwgdHJ1ZSkgKyA2XG5cbiAgICAgICAgbGV0IG9ial9zdGFydCA9IHRoaXMubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLk9CSiwgZGF0YSwgb2JqX2luZGV4LCB0cnVlKVxuXG4gICAgICAgIGxldCBnZW5lcmF0aW9uID0gdGhpcy5sb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhLCBvYmpfc3RhcnQgLSAxKVxuXG4gICAgICAgIGxldCBvYmpfaWQgPSB0aGlzLmxvY2F0ZURlbGltaXRlclJldmVyc2VkKGRhdGEsIGdlbmVyYXRpb24gLSAxKVxuXG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKG9ial9pZCwgb2JqX2VuZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBhcnJheSBvZiBudW1iZXJzIGFuZCBhcnJheXMgb2YgcmVmZXJlbmNlc1xuICAgICAqXG4gICAgICogTWFyayB0aGF0IHRoaXMgZnVuY3Rpb24gZG9lcyBub3Qgc3VwcG9ydCBhcnJheXMgdGhhdCBjb250YWluIGRpZmZlcmVudCB0eXBlcywgc28gZWl0aGVyXG4gICAgICogaXQgcmV0dXJucyBhbiBhcnJheSBvZiByZWZlcmVuY2VzIG9yIGFuIGFycmF5IG9mIG51bWJlcnMuIEhvd2V2ZXIgdGhlIGZ1bmN0aW9uIHN1cHBvcnRzXG4gICAgICogYXJiaXRyYXJpbHkgbmVzdGluZyBvZiBhcnJheXMuXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RBcnJheShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldID09PSBVdGlsLlJbMF0pIHsgLy8gJ1InIC0tIHdlIGtub3cgaXQgaXMgYW4gYXJyYXkgb2YgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RSZWZlcmVuY2VBcnJheShkYXRhLCBpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3ROdW1iZXJzQXJyYXkoZGF0YSwgaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmF0Y3MgdGhlIHN0cmluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0U3RyaW5nKGRhdGE6IEludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHJpbmdfc3RhcnQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSSU5HX1NUQVJULCBkYXRhLCAwKVxuICAgICAgICBsZXQgc3RyaW5nX2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5TVFJJTkdfRU5ELCBkYXRhLCAwKVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0cmluZ19zdGFydCArIDEsIHN0cmluZ19lbmQpXG5cbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydFVuaWNvZGVUb1N0cmluZyhkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGFuIG9wdGlvblxuICAgICAqIC88b3B0aW9uPlxuICAgICAqXG4gICAgICogc28gZm9yIGluc3RhbmNlIGZvciAvSGlnaGxpZ2h0IGl0IHdvdWxkIHJldHVybiAnSGlnaGxpZ2h0J1xuICAgICAqXG4gICAgICogVGhlIGluZGV4IG11c3QgcG9pbnQgdG8gdGhlIFwiL1wiXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RPcHRpb25WYWx1ZShkYXRhOiBJbnQ4QXJyYXksIGluZGV4OiBudW1iZXIgPSAwKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoZGF0YVtpbmRleF0gIT09IDQ3KVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJtaXNwbGFjZWQgb3B0aW9uIHZhbHVlIHBvaW50ZXJcIilcblxuICAgICAgICBsZXQgZW5kID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcoQXJyYXkuZnJvbShkYXRhLnNsaWNlKGluZGV4ICsgMSwgZW5kICsgMSkpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RGaWVsZChkYXRhOiBJbnQ4QXJyYXksIGZpZWxkOiBudW1iZXJbXSwgcHRyOiBudW1iZXIgPSAwKTogYW55IHtcbiAgICAgICAgLy8gb25seSBjaGVjayB0aGUgZmllbGRzIG9mIG9uZSBvYmplY3RcbiAgICAgICAgbGV0IHN0YXJ0X29ial9wdHIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuT0JKLCBkYXRhLCBwdHIsIHRydWUpXG4gICAgICAgIGxldCBlbmRfb2JqX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5FTkRPQkosIGRhdGEsIHN0YXJ0X29ial9wdHIsIHRydWUpXG5cbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2Uoc3RhcnRfb2JqX3B0ciwgZW5kX29ial9wdHIpXG5cbiAgICAgICAgbGV0IGZpZWxkX3B0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoZmllbGQsIGRhdGEsIDAsIHRydWUpXG5cbiAgICAgICAgaWYgKGZpZWxkX3B0ciA9PT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgZmllbGRfcHRyICs9IGZpZWxkLmxlbmd0aFxuXG4gICAgICAgIGxldCBmaWVsZF92YWx1ZV9lbmRfcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShbNDddLCBkYXRhLCBmaWVsZF9wdHIpIC8vICcvJyA9IDQ3XG5cbiAgICAgICAgaWYgKGZpZWxkX3ZhbHVlX2VuZF9wdHIgPT09IGZpZWxkX3B0ciArIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RPcHRpb25WYWx1ZShkYXRhLCBmaWVsZF92YWx1ZV9lbmRfcHRyKVxuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKGRhdGEsIGZpZWxkX3B0cilcblxuICAgICAgICBsZXQgdmFsdWVfZGF0YSA9IGRhdGEuc2xpY2UoZmllbGRfcHRyLCBmaWVsZF92YWx1ZV9lbmRfcHRyKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlX2RhdGFbaV0gPT09IFV0aWwuQVJSQVlfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXlcbiAgICAgICAgICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0QXJyYXkodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfU1RBUlRbMF0gfHwgdmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5TVFJJTkdfRU5EWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBVdGlsLmV4dHJhY3RTdHJpbmcodmFsdWVfZGF0YSwgMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfZGF0YVtpXSA9PT0gVXRpbC5SWzBdKSB7IC8vIFJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgUmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwuZXh0cmFjdFJlZmVyZW5jZVR5cGVkKHZhbHVlX2RhdGEsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXRpbC5leHRyYWN0TnVtYmVyKHZhbHVlX2RhdGEsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBhc2NpaSBlbmNvZGVkIG51bWJlciBvZiB0aGUgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE51bWJlcihkYXRhOiBJbnQ4QXJyYXksIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgc3RhcnQpXG5cbiAgICAgICAgaWYgKC0xID09IGVuZCkge1xuICAgICAgICAgICAgZW5kID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoZGF0YSwgc3RhcnQpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RyX2lkID0gXCJcIlxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgc3RyX2lkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcIlwiID09PSBzdHJfaWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgcGFyc2UgbnVtYmVyIGF0IHBvc2l0aW9uICR7c3RhcnR9YClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiArc3RyX2lkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYXMgYXJndW1lbnQgYW4gYXJyYXkgb2YgcmVmZXJlbmNlcyBhbmQgcmV0dXJucyB0aG9zZSB0eXBlZFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0UmVmZXJlbmNlc0Zyb21BcnJheVNlcXVlbmNlKGFycmF5X3NlcXVlbmNlOiBJbnQ4QXJyYXkpOiBSZWZlcmVuY2VQb2ludGVyW10ge1xuICAgICAgICBsZXQgcmVmczogUmVmZXJlbmNlUG9pbnRlcltdID0gW11cblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgd2hpbGUgKGkgPCBhcnJheV9zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZnMucHVzaChVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChhcnJheV9zZXF1ZW5jZSwgaSkpXG4gICAgICAgICAgICBpID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlIsIGFycmF5X3NlcXVlbmNlLCBpLCB0cnVlKSArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGRhdGUgaW50byBQREYgZm9ybWF0dGluZ1xuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGF0ZVRvUERGRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGVfc3RyID0gXCIoRDpcIlxuICAgICAgICBkYXRlX3N0ciArPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgbGV0IG1vbnRoOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1vbnRoLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1vbnRoXG4gICAgICAgIGxldCBkYXk6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGRheS5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBkYXlcbiAgICAgICAgbGV0IGhvdXJzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoaG91cnMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgaG91cnNcbiAgICAgICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgbWludXRlc1xuICAgICAgICBsZXQgc2Vjb25kczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0U2Vjb25kcygpKVxuICAgICAgICBkYXRlX3N0ciArPSAoc2Vjb25kcy5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBzZWNvbmRzXG4gICAgICAgIHJldHVybiBkYXRlX3N0ciArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1bmljb2RlIHNlcXVlbmNlIGludG8gYSBzdHJpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFVuaWNvZGVUb1N0cmluZyh2YWw6IEludDhBcnJheSB8IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgSW50OEFycmF5KVxuICAgICAgICAgICAgdmFsID0gbmV3IFVpbnQ4QXJyYXkodmFsKVxuXG4gICAgICAgIGlmICh2YWxbMF0gPT09IDI1NCAmJiB2YWxbMV0gPT09IDI1NSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDIsIHZhbC5sZW5ndGgpXG5cbiAgICAgICAgICAgIGxldCB1aW50VG9TdHJpbmcgPSAodWludEFycmF5OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0gXCJcIlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWludEFycmF5Lmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgodWludEFycmF5W2ldIDw8IDgpIHwgdWludEFycmF5W2kgKyAxXSAmIDB4RkYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmV0ID0gdWludFRvU3RyaW5nKHZhbClcbiAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSB1dGYtOCBjb21wcmVzc2lvblxuICAgICAgICBsZXQgVXRmOEFycmF5VG9TdHIgPSAoYXJyYXk6IG51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmV0ID0gXCJcIlxuICAgICAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBjaGFyMSA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICBsZXQgY2hhcjJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIxID4+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IGNhc2UgMjogY2FzZSAzOiBjYXNlIDQ6IGNhc2UgNTogY2FzZSA2OiBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmUgYnl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHdvIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIyID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjaGFyMSAmIDB4MUYpIDw8IDYpIHwgKGNoYXIyICYgMHgzRikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhyZWUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcjIgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcjMgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNoYXIxICYgMHgwRikgPDwgMTIpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGNoYXIyICYgMHgzRikgPDwgNikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoY2hhcjMgJiAweDNGKSA8PCAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0ID0gVXRmOEFycmF5VG9TdHIoQXJyYXkuZnJvbSh2YWwpKVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0QXNjaWlUb1N0cmluZyh2YWw6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJldDogc3RyaW5nID0gXCJcIlxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2YWxbaV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBudW1iZXIgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgaXRzIGNoYXIgcmVwcmVzZW50YXRpb25zXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShuYnI6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoU3RyaW5nKG5icikpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGFnZSwgUmVmZXJlbmNlUG9pbnRlciB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIFdyaXRlclV0aWwge1xuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIHJlZmVyZW5jZSBwb2ludGVyXG4gICAgICpcbiAgICAgKiA8b2JqX2lkPiA8Z2VuZXJhdGlvbj4gUlxuICAgICAqXG4gICAgICogVGhlICdSJyBhbmQgdGhlIHByZWNlZGluZyBzcGFjZSBpcyBvbmx5IHdyaXR0ZW4gaW4gY2FzZSAncmVmZXJlbmNlZCcgaXMgdHJ1ZVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyB3cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmOiBSZWZlcmVuY2VQb2ludGVyLCByZWZlcmVuY2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocmVmLm9iailcblxuICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkocmVmLmdlbmVyYXRpb24pKVxuXG4gICAgICAgIGlmIChyZWZlcmVuY2VkKSB7XG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5SKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcHJlY2VkaW5nIHplcm9zICgwKSBpbiBmcm9udCBvZiB0aGUgJ3ZhbHVlJyB0byBtYXRjaCB0aGUgbGVuZ3RoXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHBhZChsZW5ndGg6IG51bWJlciwgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKDQ4KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh2YWx1ZSkpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIG5lc3RlZCBudW1iZXIgYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVOZXN0ZWROdW1iZXJBcnJheShhcnJheTogbnVtYmVyW11bXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBVdGlsLkFSUkFZX1NUQVJUXG5cbiAgICAgICAgZm9yIChsZXQgc3ViQXJyYXkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KHN1YkFycmF5KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaCguLi5VdGlsLkFSUkFZX0VORClcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyBhIGphdmFzY3JpcHQgbnVtYmVyIGFycmF5IHRvIGEgUERGIG51bWJlciBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyB3cml0ZU51bWJlckFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBVdGlsLkFSUkFZX1NUQVJUXG5cbiAgICAgICAgZm9yIChsZXQgaSBvZiBhcnJheSkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShpKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaCguLi5VdGlsLkFSUkFZX0VORClcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgdGhlIC9Bbm5vdHMgZmllbGQgaW4gYW4gcGFnZSBvYmplY3RcbiAgICAgKlxuICAgICAqIHB0ciA6IFBvaW50ZXIgdG8gdGhlIHBhZ2Ugb2JqZWN0XG4gICAgICogYW5ub3RfYXJyYXlfcmVmZXJlbmNlIDogVGhlIHJlZmVyZW5jZSB0byB0aGUgYW5ub3RhdGlvbiBhcnJheVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyByZXBsYWNlQW5ub3RzRmllbGRJblBhZ2VPYmplY3QoZGF0YTogSW50OEFycmF5LCBwYWdlOiBQYWdlLCBwYWdlX3B0cjogbnVtYmVyLCBhbm5vdF9hcnJheV9yZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBwdHJfb2JqZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgcGFnZV9wdHIsIHRydWUpXG5cbiAgICAgICAgbGV0IGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEgPSBkYXRhLnNsaWNlKHBhZ2VfcHRyLCBwdHJfb2JqZW5kICsgVXRpbC5FTkRPQkoubGVuZ3RoKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBpZiAocGFnZS5oYXNBbm5vdHNGaWVsZCkge1xuICAgICAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSBwYWdlIG9iamVjdCBkaXJlY3RseSBjb250YWlucyBhbiBhcnJheSBvZiByZWZlcmVuY2VzIGFuZFxuICAgICAgICAgICAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYW4gYXJyYXkgYXJyYXkgb2JqZWN0IC0tIHdlIHJlcGxhY2UgdGhlIGFycmF5IG9mIHJlZmVyZW5jZXMgd2l0aCBhIHBvaW50ZXJcbiAgICAgICAgICAgIC8vIHRvIHRoZSByZWZlcmVuY2UgYXJyYXlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkFOTk9UUywgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgMCwgdHJ1ZSlcblxuICAgICAgICAgICAgcmV0ID0gQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKDAsIHB0cl9hbm5vdHMgKyBVdGlsLkFOTk9UUy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3RfYXJyYXlfcmVmZXJlbmNlLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICBsZXQgcHRyX2Fubm90c19hcnJheV9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQVJSQVlfRU5ELCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBwdHJfYW5ub3RzLCB0cnVlKSArIFV0aWwuQVJSQVlfRU5ELmxlbmd0aFxuICAgICAgICAgICAgcHRyX2Fubm90c19hcnJheV9lbmQgPSBVdGlsLnNraXBEZWxpbWl0ZXIoY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSwgcHRyX2Fubm90c19hcnJheV9lbmQpXG5cbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9hbm5vdHNfYXJyYXlfZW5kLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLmxlbmd0aCkpKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHRyX2RpY3RfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuRElDVF9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoIC0gMSwgdHJ1ZSlcblxuICAgICAgICAgICAgcmV0ID0gQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKDAsIHB0cl9kaWN0X2VuZCkpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuQU5OT1RTKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3RfYXJyYXlfcmVmZXJlbmNlLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KEFycmF5LmZyb20oY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5zbGljZShwdHJfZGljdF9lbmQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEubGVuZ3RoKSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChVdGlsLkNSKVxuICAgICAgICByZXQucHVzaChVdGlsLkxGKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgQW5ub3RhdGlvbiwgUmVmZXJlbmNlUG9pbnRlciwgUERGRG9jdW1lbnRQYXJzZXIsIFBhZ2UgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFhSZWYgfSBmcm9tICcuL2RvY3VtZW50LWhpc3RvcnknXG5pbXBvcnQgeyBXcml0ZXJVdGlsIH0gZnJvbSAnLi93cml0ZXItdXRpbCdcblxuLyoqXG4gKiBDcmVhdHMgdGhlIGJ5dGUgYXJyYXkgdGhhdCBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBlbmQgb2YgdGhlIGRvY3VtZW50XG4gKiAqL1xuZXhwb3J0IGNsYXNzIFdyaXRlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIE46IG51bWJlciA9IDExMFxuICAgIHB1YmxpYyBzdGF0aWMgRjogbnVtYmVyID0gMTAyXG5cbiAgICBwdWJsaWMgc3RhdGljIFNQQUNFOiBudW1iZXIgPSAzMlxuICAgIHB1YmxpYyBzdGF0aWMgQ1I6IG51bWJlciA9IDEzXG4gICAgcHVibGljIHN0YXRpYyBMRjogbnVtYmVyID0gMTBcbiAgICBwdWJsaWMgc3RhdGljIE9CSjogbnVtYmVyW10gPSBbMTExLCA5OCwgMTA2XVxuICAgIHB1YmxpYyBzdGF0aWMgRU5ET0JKOiBudW1iZXJbXSA9IFsxMDEsIDExMCwgMTAwLCAxMTEsIDk4LCAxMDZdXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9TVEFSVDogbnVtYmVyID0gOTFcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX0VORDogbnVtYmVyID0gOTNcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfU1RBUlQ6IG51bWJlcltdID0gWzYwLCA2MF1cbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfRU5EOiBudW1iZXJbXSA9IFs2MiwgNjJdXG4gICAgcHVibGljIHN0YXRpYyBUWVBFX0FOTk9UOiBudW1iZXJbXSA9IFs0NywgODQsIDEyMSwgMTEyLCAxMDEsIFdyaXRlci5TUEFDRSwgNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBSRUNUOiBudW1iZXJbXSA9IFs0NywgODIsIDEwMSwgOTksIDExNl1cbiAgICBwdWJsaWMgc3RhdGljIFNVQlRZUEU6IG51bWJlcltdID0gWzQ3LCA4MywgMTE3LCA5OCwgMTE2LCAxMjEsIDExMiwgMTAxXVxuICAgIHB1YmxpYyBzdGF0aWMgVVBEQVRFX0RBVEU6IG51bWJlcltdID0gWzQ3LCA3N10gLy8gPSAnL00nXG4gICAgcHVibGljIHN0YXRpYyBBVVRIT1I6IG51bWJlcltdID0gWzQ3LCA4NF0gLy8gPSAnL1QnXG4gICAgcHVibGljIHN0YXRpYyBDT05URU5UUzogbnVtYmVyW10gPSBbNDcsIDY3LCAxMTEsIDExMCwgMTE2LCAxMDEsIDExMCwgMTE2LCAxMTVdIC8vID0gJy9Db250ZW50cydcbiAgICBwdWJsaWMgc3RhdGljIEJSQUNLRVRfU1RBUlQ6IG51bWJlciA9IDQwXG4gICAgcHVibGljIHN0YXRpYyBCUkFDS0VUX0VORDogbnVtYmVyID0gNDFcbiAgICBwdWJsaWMgc3RhdGljIEZMQUc6IG51bWJlcltdID0gWzQ3LCA3MF0gLy8gPSAnL0YnXG4gICAgcHVibGljIHN0YXRpYyBJRDogbnVtYmVyW10gPSBbNDcsIDc4LCA3N10gLy8gPSAnL05NJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ09MT1I6IG51bWJlcltdID0gWzQ3LCA2N10gLy8gPSAnL0MnXG4gICAgcHVibGljIHN0YXRpYyBPUEFDSVRZOiBudW1iZXJbXSA9IFs0NywgNjcsIDY1XSAvLyA9ICcvQ0EnXG4gICAgcHVibGljIHN0YXRpYyBCT1JERVI6IG51bWJlcltdID0gWzQ3LCA2NiwgMTExLCAxMTQsIDEwMCwgMTAxLCAxMTRdIC8vID0gJy9Cb3JkZXInXG4gICAgcHVibGljIHN0YXRpYyBQQUdFX1JFRkVSRU5DRTogbnVtYmVyW10gPSBbNDcsIDgwXSAvLyA9ICcvUCdcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfQVBQRUFSQU5DRTogbnVtYmVyW10gPSBbNDcsIDY4LCA2NV0gLy8gPSAnL0RBJ1xuICAgIHB1YmxpYyBzdGF0aWMgSU5LTElTVDogbnVtYmVyW10gPSBbNDcsIDczLCAxMTAsIDEwNywgNzYsIDEwNSwgMTE1LCAxMTZdIC8vID0gJy9JbmtMaXN0J1xuXG4gICAgcHVibGljIHN0YXRpYyBUUkFJTEVSOiBudW1iZXJbXSA9IFsxMTYsIDExNCwgOTcsIDEwNSwgMTA4LCAxMDEsIDExNF0gLy8gPSAndHJhaWxlcidcbiAgICBwdWJsaWMgc3RhdGljIFNJWkU6IG51bWJlcltdID0gWzQ3LCA4MywgMTA1LCAxMjIsIDEwMV0gLy8gPSAnL1NpemUnXG4gICAgcHVibGljIHN0YXRpYyBST09UOiBudW1iZXJbXSA9IFs0NywgODIsIDExMSwgMTExLCAxMTZdIC8vID0gJy9Sb290J1xuICAgIHB1YmxpYyBzdGF0aWMgUFJFVjogbnVtYmVyW10gPSBbNDcsIDgwLCAxMTQsIDEwMSwgMTE4XSAvLyA9Jy9QcmV2J1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUlRYUkVGOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgOTcsIDExNCwgMTE2LCAxMjAsIDExNCwgMTAxLCAxMDJdIC8vID0gJ3N0YXJ0eHJlZidcbiAgICBwdWJsaWMgc3RhdGljIEVPRjogbnVtYmVyW10gPSBbMzcsIDM3LCA2OSwgNzksIDcwXSAvLyA9ICclJUVPRidcblxuICAgIHB1YmxpYyBzdGF0aWMgWFJFRjogbnVtYmVyW10gPSBbMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICd4cmVmJ1xuXG4gICAgcHVibGljIHN0YXRpYyBRVUFEUE9JTlRTOiBudW1iZXJbXSA9IFs0NywgODEsIDExNywgOTcsIDEwMCwgODAsIDExMSwgMTA1LCAxMTAsIDExNiwgMTE1XSAvLyA9ICcvUXVhZFBvaW50cydcbiAgICBwdWJsaWMgc3RhdGljIFZFUlRJQ0VTOiBudW1iZXJbXSA9IFs0NywgODYsIDEwMSwgMTE0LCAxMTYsIDEwNSwgOTksIDEwMSwgMTE1XSAvLyA9ICcvVmVydGljZXMnXG4gICAgcHVibGljIHN0YXRpYyBOQU1FOiBudW1iZXJbXSA9IFs0NywgNzgsIDk3LCAxMDksIDEwMV0gLy8gPSAnL05hbWUnXG4gICAgcHVibGljIHN0YXRpYyBEUkFGVDogbnVtYmVyW10gPSBbNDcsIDY4LCAxMTQsIDk3LCAxMDIsIDExNl0gLy8gPSAnL0RyYWZ0J1xuXG4gICAgcHVibGljIHN0YXRpYyBTWTogbnVtYmVyW10gPSBbNDcsIDgzLCAxMjFdIC8vID0gJy9TeSdcbiAgICBwdWJsaWMgc3RhdGljIFA6IG51bWJlciA9IDgwXG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgY3Jvc3NpdGUgcmVmZXJlbmNlIHRhYmxlXG4gICAgICogKi9cbiAgICBwcml2YXRlIHhyZWZzOiBYUmVmW10gPSBbXVxuXG4gICAgLyoqXG4gICAgICogZGF0YSA6IFRoZSBkYXRhIHJlcHJlc2VudGluZyB0aGUgb3JpZ2luYWwgUERGIGRvY3VtZW50XG4gICAgICogYWFubm90YXRpb25zIDogVGhlIGFubm90YXRpb25zIHRvIGFkZCB0byB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogSW50OEFycmF5LCBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10sIHByaXZhdGUgdG9EZWxldGU6IEFubm90YXRpb25bXSwgcHJpdmF0ZSBwYXJzZXI6IFBERkRvY3VtZW50UGFyc2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBJbnQ4QXJyYXkoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgYW5ub3RhdGlvbnMgcGFnZXdpc2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBzaW5jZSB0aGUgYW5ub3RhdGlvbiBhcnJheXMgb2YgdGhlIHNpdGVzIG11c3QgYmUgZXh0ZW5kZWRcbiAgICAgKiBhbmQgaXQgbWFrZXMgc2Vuc2UgdG8gZG8gdGhpcyB1cGRhdGUgaW4gb25lIHN0ZXAuXG4gICAgICogKi9cbiAgICBzb3J0UGFnZVdpc2UoYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSk6IHsgW2l0ZW06IG51bWJlcl06IEFubm90YXRpb25bXSB9IHtcbiAgICAgICAgbGV0IHBhZ2VBbm5vdHM6IHsgW2l0ZW06IG51bWJlcl06IEFubm90YXRpb25bXSB9ID0ge31cblxuICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFwYWdlQW5ub3RzW2Fubm90LnBhZ2VdKVxuICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHNbYW5ub3QucGFnZV0gPSBbXVxuXG4gICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZUFubm90c1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0IHJldHVybnMgdGhlIHBhZ2Ugb2JqZWN0IGVpdGhlciBleHRlbmRlZCBieSBhIC9Bbm5vdHMgZmllbGQsIGlmIHRoaXMgZGlkIG5vdCBleGlzdCB5ZXQgb3Igd2l0aCB0aGUgYW5ub3RzIGZpZWxkIHJlcGxhY2VkIGJ5IGEgcmVyZmVyZW5jZSBwb2ludGVyXG4gICAgICogdG8gYW4gYXJyYXkgaWYgdGhlIHBhZ2Ugb2JqZWN0IGNvbnRhaW5zIHRoZSBsaXN0IG9mIGFubm90YXRpb25zIGRpcmVjdGx5XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIGFkYXB0UGFnZU9iamVjdChwYWdlOiBQYWdlLCBhbm5vdF9hcnJheV9yZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGxldCBsb29rdXBUYWJsZSA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IHBhZ2VfcHRyOiBYUmVmID0gbG9va3VwVGFibGVbcGFnZS5vYmplY3RfaWQub2JqXVxuXG4gICAgICAgIHJldHVybiBXcml0ZXJVdGlsLnJlcGxhY2VBbm5vdHNGaWVsZEluUGFnZU9iamVjdCh0aGlzLmRhdGEsIHBhZ2UsIHBhZ2VfcHRyLnBvaW50ZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgYW5ub3RhdGlvbnMgb2YgPj5vbmU8PCBwYWdlIGFuZCBkZXJpdmVzIHRoZSBhbm5vdGF0aW9ucyBhcnJheSBmcm9tIGl0LlxuICAgICAqIFRoZXJlYnkgaXQgYWxzbyBjb25zaWRlcnMgdGhlIHBvdGVudGlhbGx5IGV4aXN0aW5nIGFubm90YXRpb24gYXJyYXkuXG4gICAgICpcbiAgICAgKiB0b0RlbGV0ZSA6PSBjb250YWlucyB0aG9zZSBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZC4gSXQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAqIGFuZCBtYXJrcyB0aGVtIGFzIHJlbW92ZWRcbiAgICAgKiAqL1xuICAgIHdyaXRlQW5ub3RBcnJheShhbm5vdHM6IEFubm90YXRpb25bXSwgdG9EZWxldGU6IEFubm90YXRpb25bXSk6IHsgcHRyOiBSZWZlcmVuY2VQb2ludGVyLCBkYXRhOiBudW1iZXJbXSwgcGFnZVJlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlciwgcGFnZURhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBsZXQgcGFnZSA9IGFubm90c1swXS5wYWdlUmVmZXJlbmNlXG5cbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmNvbmNhdChhbm5vdHMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXgub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQW5ub3RhdGlvbiB3aXRoIG9iamVjdF9pZCBudWxsXCIpXG5cbiAgICAgICAgICAgIHJldHVybiB4Lm9iamVjdF9pZFxuICAgICAgICB9KSlcblxuICAgICAgICAvLyByZW1vdmUgYW5ub3RhdGlvbiByZWZlcmVuY2VzIGZyb20gdGhlIGFycmF5IHRoYXQgbXVzdCBiZSBkZWxldGVkIGFuZCBtYXJrIHRoZW0gYXMgZGVsZXRlZFxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5maWx0ZXIoKGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvRGVsID0gdG9EZWxldGUuZmluZCgodCkgPT4gKDxhbnk+dC5vYmplY3RfaWQpLm9iaiA9PT0gYS5vYmogJiYgKDxhbnk+dC5vYmplY3RfaWQpLmdlbmVyYXRpb24gPT09IGEuZ2VuZXJhdGlvbilcblxuICAgICAgICAgICAgaWYgKHRvRGVsKSB7XG4gICAgICAgICAgICAgICAgdG9EZWwuaXNfZGVsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcmVmQXJyYXlfaWQ6IGFueSA9IHBhZ2UuYW5ub3RzUG9pbnRlclxuXG4gICAgICAgIGxldCBwYWdlX2RhdGE6IG51bWJlcltdID0gW11cbiAgICAgICAgaWYgKCFyZWZBcnJheV9pZCkge1xuICAgICAgICAgICAgcmVmQXJyYXlfaWQgPSB0aGlzLnBhcnNlci5nZXRGcmVlT2JqZWN0SWQoKVxuICAgICAgICAgICAgcGFnZV9kYXRhID0gdGhpcy5hZGFwdFBhZ2VPYmplY3QocGFnZSwgcmVmQXJyYXlfaWQpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfU1RBUlQpXG5cblxuICAgICAgICBmb3IgKGxldCBhbiBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFuLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogcmVmQXJyYXlfaWQsIGRhdGE6IHJldCwgcGFnZVJlZmVyZW5jZTogcGFnZS5vYmplY3RfaWQsIHBhZ2VEYXRhOiBwYWdlX2RhdGEgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3VidHlwZSB0byBpdHMgYnl0ZSByZXByZXNlbnRhdGlvblxuICAgICAqICovXG4gICAgY29udmVydFN1YnR5cGUoc3Q6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgc3dpdGNoIChzdCkge1xuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9UZXh0J1xuICAgICAgICAgICAgY2FzZSAnSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJy9IaWdobGlnaHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcyLCAxMDUsIDEwMywgMTA0LCAxMDgsIDEwNSwgMTAzLCAxMDQsIDExNl0gLy8gPSAnL0hpZ2hsaWdodCdcbiAgICAgICAgICAgIGNhc2UgJ1VuZGVybGluZSc6XG4gICAgICAgICAgICBjYXNlICcvVW5kZXJsaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4NSwgMTEwLCAxMDAsIDEwMSwgMTE0LCAxMDgsIDEwNSwgMTEwLCAxMDFdIC8vID0gJy9VbmRlcmxpbmUnXG4gICAgICAgICAgICBjYXNlICdTcXVpZ2dseSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1aWdnbHknOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgMTA1LCAxMDMsIDEwMywgMTA4LCAxMjFdIC8vID0gJy9TcXVpZ2dseSdcbiAgICAgICAgICAgIGNhc2UgJ1N0cmlrZU91dCc6XG4gICAgICAgICAgICBjYXNlICcvU3RyaWtlT3V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCAxMTQsIDEwNSwgMTA3LCAxMDEsIDc5LCAxMTcsIDExNl0gLy8gPSAnL1N0cmlrZU91dCdcbiAgICAgICAgICAgIGNhc2UgJ1NxdWFyZSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1YXJlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDk3LCAxMTQsIDEwMV0gLy8gPSAnL1NxdWFyZSdcbiAgICAgICAgICAgIGNhc2UgJ0NpcmNsZSc6XG4gICAgICAgICAgICBjYXNlICcvQ2lyY2xlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgMTA1LCAxMTQsIDk5LCAxMDgsIDEwMV0gLy8gPSAnL0NpcmNsZSdcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWVUZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJy9GcmVlVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzAsIDExNCwgMTAxLCAxMDEsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvRnJlZVRleHQnXG4gICAgICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIGNhc2UgJy9Qb2x5Z29uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgMTAzLCAxMTEsIDExMF0gLy8gPSAnL1BvbHlnb24nXG4gICAgICAgICAgICBjYXNlICdQb2x5TGluZSc6XG4gICAgICAgICAgICBjYXNlICcvUG9seUxpbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCA3NiwgMTA1LCAxMTAsIDEwMV0gLy8gJy9Qb2x5TGluZVxuICAgICAgICAgICAgY2FzZSAnU3RhbXAnOlxuICAgICAgICAgICAgY2FzZSAnL1N0YW1wJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCA5NywgMTA5LCAxMTJdIC8vID0gJy9TdGFtcCdcbiAgICAgICAgICAgIGNhc2UgJ0NhcmV0JzpcbiAgICAgICAgICAgIGNhc2UgJy9DYXJldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDk3LCAxMTQsIDEwMSwgMTE2XSAvLyA9ICcvQ2FyZXQnXG4gICAgICAgICAgICBjYXNlICdJbmsnOlxuICAgICAgICAgICAgY2FzZSAnL0luayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzMsIDExMCwgMTA3XSAvLyA9ICcvSW5rJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIGFubm90YXRpb24gb2JqZWN0XG4gICAgICogKi9cbiAgICB3cml0ZUFubm90YXRpb25PYmplY3QoYW5ub3Q6IEFubm90YXRpb24pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGlmICghYW5ub3QuYXV0aG9yKVxuICAgICAgICAgICAgYW5ub3QuYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIGlmICghYW5ub3QuY29udGVudHMpXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90Lm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gb2JqZWN0X2lkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlRZUEVfQU5OT1QpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QucmVjdCAmJiBhbm5vdC5yZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlJFQ1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5yZWN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNVQlRZUEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLmNvbnZlcnRTdWJ0eXBlKGFubm90LnR5cGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVVBEQVRFX0RBVEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LnVwZGF0ZURhdGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQVVUSE9SKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuYXV0aG9yKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmNvbnRlbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT05URU5UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmNvbnRlbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklEKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5pZCkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5GTEFHKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShhbm5vdC5hbm5vdGF0aW9uX2ZsYWcpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuciA+IDEpIGFubm90LmNvbG9yLnIgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuZyA+IDEpIGFubm90LmNvbG9yLmcgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuYiA+IDEpIGFubm90LmNvbG9yLmIgLz0gMjU1XG5cbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkNPTE9SKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmNvbG9yLnIsIGFubm90LmNvbG9yLmcsIGFubm90LmNvbG9yLmJdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG9wYWNpdHkgPSBhbm5vdC5vcGFjaXR5XG4gICAgICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PUEFDSVRZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShvcGFjaXR5KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5ib3JkZXIpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkJPUkRFUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5ib3JkZXIuaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIudmVydGljYWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLmJvcmRlcl93aWR0aF0pKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmRlZmF1bHRBcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ERUZBVUxUX0FQUEVBUkFOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFubm90LnBhZ2VSZWZlcmVuY2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QQUdFX1JFRkVSRU5DRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnF1YWRQb2ludHMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlFVQURQT0lOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5xdWFkUG9pbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC52ZXJ0aWNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVkVSVElDRVMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC52ZXJ0aWNlcykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3Quc3RhbXBUeXBlKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5OQU1FKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRFJBRlQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuY2FyZXRTeW1ib2wpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlApXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuaW5rTGlzdCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSU5LTElTVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU5lc3RlZE51bWJlckFycmF5KGFubm90Lmlua0xpc3QpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IGFubm90Lm9iamVjdF9pZCwgZGF0YTogcmV0IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhbGwgdGhlIGNyb3NzIHNpdGUgcmVmZXJlbmNlIHRhYmxlIGVudHJpZXMgYW5kIGV4dHJhY3RzIHRoZSBjb25zZWN1dGl2ZSBzZXF1ZW5jZXNcbiAgICAgKiAqL1xuICAgIGNvbXB1dGVYcmVmU2VxdWVuY2VzKCk6IFhSZWZbXVtdIHtcbiAgICAgICAgbGV0IHNlcXM6IFhSZWZbXVtdID0gW11cblxuICAgICAgICBsZXQgb3JkZXJlZF94cmVmcyA9IHRoaXMueHJlZnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaWQgPCBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKGEuaWQgPiBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZXE6IFhSZWZbXSA9IFtvcmRlcmVkX3hyZWZzWzBdXVxuICAgICAgICBsZXQgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbMF0uaWRcbiAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvcmRlcmVkX3hyZWZzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAob3JkZXJlZF94cmVmc1tpXS5pZCA9PT0gbGFzdF9pZCArIDEpIHtcbiAgICAgICAgICAgICAgICBzZXEucHVzaChvcmRlcmVkX3hyZWZzW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXEgPSBbb3JkZXJlZF94cmVmc1tpXV1cbiAgICAgICAgICAgICAgICBzZXFzLnB1c2goc2VxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbaV0uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyB0aGUgcG9pbnRlcnMgb2YgdGhlIGxpbmtlZCBsaXN0IHRoYXQgY29udGFpbnMgdGhlIGlkcyBvZiBmcmVlZCBvYmplY3RzXG4gICAgICogKi9cbiAgICBhcHBseU9iamVjdEZyZWVpbmcocmVmczogWFJlZltdKTogWFJlZltdIHtcbiAgICAgICAgLy8gd3JpdGUgZnJlZSBvYmplY3QgaGVhZFxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5nZXRSZWNlbnRVcGRhdGUoKS5yZWZzWzBdXG4gICAgICAgIGxldCBsYXN0X2ZyZWVkX29iamVjdF9pZCA9IGhlYWQuaWRcblxuICAgICAgICBsZXQgZnJlZWRfb2JqczogWFJlZltdID0gcmVmcy5maWx0ZXIociA9PiByLmZyZWUpXG4gICAgICAgIGZyZWVkX29ianMgPSBmcmVlZF9vYmpzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgbGFzdG9iajogWFJlZiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuICAgICAgICBmb3IgKGxldCBvYmogb2YgZnJlZWRfb2Jqcykge1xuICAgICAgICAgICAgaWYgKCFsYXN0b2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGZpcnN0IG9iamVjdCBhcyBsaXN0IGhlYWRlclxuICAgICAgICAgICAgICAgIGhlYWQucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFzdG9iaikge1xuICAgICAgICAgICAgICAgIGxhc3RvYmoucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0b2JqID0gb2JqXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJlZWRfb2Jqcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgZnJlZWRfb2Jqc1tmcmVlZF9vYmpzLmxlbmd0aCAtIDFdLnBvaW50ZXIgPSBsYXN0X2ZyZWVkX29iamVjdF9pZFxuXG4gICAgICAgIHJlZnMucHVzaChoZWFkKVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHdyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5YUkVGXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHRoaXMueHJlZnMgPSB0aGlzLmFwcGx5T2JqZWN0RnJlZWluZyh0aGlzLnhyZWZzKVxuXG4gICAgICAgIGxldCBvcmRlcmVkX3NlcXVlbmNlcyA9IHRoaXMuY29tcHV0ZVhyZWZTZXF1ZW5jZXMoKVxuXG4gICAgICAgIGZvciAobGV0IHNlcXVlbmNlIG9mIG9yZGVyZWRfc2VxdWVuY2VzKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IHNlcXVlbmNlWzBdXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGhlYWQuaWQpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShzZXF1ZW5jZS5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9yZXQ6IG51bWJlcltdID0gW11cbiAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQoV3JpdGVyVXRpbC5wYWQoMTAsIHNlcXVlbmNlW2ldLnBvaW50ZXIpKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDUsIHNlcXVlbmNlW2ldLmdlbmVyYXRpb24pKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2VbaV0uZnJlZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5GKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLnVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5OKVxuXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgaWYgKF9yZXQubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiWFJlZiBlbnRyeSA8IDIwIGJ5dGVzXCIpXG5cbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KF9yZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSB0cmFpbGVyXG4gICAgICogKi9cbiAgICB3cml0ZVRyYWlsZXIocG9zWHJlZjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5UUkFJTEVSXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNJWkUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkudHJhaWxlclNpemUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkudHJhaWxlclxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ST09UKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIodHJhaWxlci5yb290LCB0cnVlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlBSRVYpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkuc3RhcnRfcG9pbnRlcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNUQVJUWFJFRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShwb3NYcmVmKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVPRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgYW5uYXRpb25zIGF0IHRoZSBlbmQgb2YgdGhlIFBERiBieXRlIHJlcHJlc2VudGF0aW9uIGFuZCByZXR1cm5zXG4gICAgICogdGhlIGJ5dGUgYXJyYXlcbiAgICAgKiAqL1xuICAgIHdyaXRlKCk6IEludDhBcnJheSB7XG4gICAgICAgIGxldCBwYWdlV2lzZVNvcnRlZCA9IHRoaXMuc29ydFBhZ2VXaXNlKHRoaXMuYW5ub3RhdGlvbnMpXG5cbiAgICAgICAgbGV0IHB0cjogbnVtYmVyID0gdGhpcy5kYXRhLmxlbmd0aFxuXG4gICAgICAgIGxldCBuZXdfZGF0YTogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIC8vIEZpeCBjYXNlIHRoYXQgdGhlcmUgaXMgbm8gbGluZWJyZWFrIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuZGF0YVtwdHIgLSAxXSA9PT0gNzApIHtcbiAgICAgICAgICAgIG5ld19kYXRhLnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuTEYpXG4gICAgICAgICAgICBwdHIgKz0gMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkKSB7XG4gICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IHBhZ2VXaXNlU29ydGVkW2tleV1cblxuICAgICAgICAgICAgLy8gd3JpdGUgdGhlIGFycmF5IHJlZmVyZW5jaW5nIHRvIGFubm90YXRpb25zIG9mIGEgY2VydGFpbiBwYWdlXG4gICAgICAgICAgICAvLyBpdCBhbHNvIHJlbW92ZXMgcmVmZXJlbmNlcyBvZiBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZFxuICAgICAgICAgICAgbGV0IGFubm90X2FycmF5ID0gdGhpcy53cml0ZUFubm90QXJyYXkocGFnZUFubm90cywgdGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHMgLS0gSW4gdGhlIGNhc2UgdGhlIHBhZ2UgaGFkIG5vIGFubm90YXRpb24geWV0IHRoZXJlIGV4aXN0c1xuICAgICAgICAgICAgLy8gbm8gc3VjaCBhcnJheSByZWZlcnJpbmcgdG8gaXRzIGFubm90YXRpb25zLiBBIHBvaW50ZXIgdG8gc3VjaCBhbiBhcnJheSBhcnJheSBtdXN0IGJlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgLy8gcGFnZSBvYmplY3QuIElmIHRoaXMgd2FzIGRvbmUgdGhlIGBwYWdlRGF0YWAgcGFyYW1hdGVyIGlzIHNldCBhbmQgY29udGFpbnMgdGhlIGFkYXB0ZWQgcGFnZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2Uub2JqLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2UuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZXMgdGhlIGFjdHVhbCBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgcGFnZUFubm90cykge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdF9vYmogPSB0aGlzLndyaXRlQW5ub3RhdGlvbk9iamVjdChhbm5vdClcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3Rfb2JqLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3Rfb2JqLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGFubm90X29iai5kYXRhKVxuICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9vYmouZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRha2UgYWxsIGFubm90YXRpb25zIHRoYXQgYXJlIG5vdCBkZWxldGVkIHlldFxuICAgICAgICBsZXQgX3RvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSB0aGlzLnRvRGVsZXRlLmZpbHRlcigodCkgPT4gIXQuaXNfZGVsZXRlZClcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkVG9EZWxldGUgPSB0aGlzLnNvcnRQYWdlV2lzZShfdG9EZWxldGUpXG5cbiAgICAgICAgLy8gYWRhcHQgdGhlIHJlbWFpbmluZyBhbm5vdGF0aW9uIHJlZmVyZW5jZSB0YWJsZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkVG9EZWxldGUpIHtcbiAgICAgICAgICAgIGxldCBkZWxfZGF0YSA9IHRoaXMudXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheShwYWdlV2lzZVNvcnRlZFRvRGVsZXRlW2tleV0pXG4gICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBkZWxfZGF0YS5wdHIub2JqLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBkZWxfZGF0YS5wdHIuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGRlbF9kYXRhLmRhdGEpXG4gICAgICAgICAgICBwdHIgKz0gZGVsX2RhdGEuZGF0YS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgYWxsIHJlZmVyZW5jZXMgdG8gYW5ub3RhdGlvbiBvYmplY3RzIGluIHBhZ2VzIHNob3VsZCBiZSByZW1vdmVkIGFuZCB3ZSBjYW4gZnJlZVxuICAgICAgICAvLyB0aGUgYW5ub3RhdGlvbiBvYmplY3QgaWRzXG4gICAgICAgIGZvciAobGV0IHRvRGVsIG9mIHRoaXMudG9EZWxldGUpIHtcbiAgICAgICAgICAgIGlmICghdG9EZWwub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRvRGVsLm9iamVjdF9pZC5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogLTEsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogdG9EZWwub2JqZWN0X2lkLmdlbmVyYXRpb24gKyAxLCAvLyBpbmNyZWFzZSBnZW5lcmF0aW9uXG4gICAgICAgICAgICAgICAgZnJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNydGFibGUgPSB0aGlzLndyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy53cml0ZVRyYWlsZXIocHRyKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdCh0cmFpbGVyKVxuXG4gICAgICAgIGxldCBuZXdfZGF0YV9hcnJheSA9IG5ldyBJbnQ4QXJyYXkobmV3X2RhdGEpXG5cbiAgICAgICAgbGV0IHJldF9hcnJheSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5kYXRhLmxlbmd0aCArIG5ld19kYXRhX2FycmF5Lmxlbmd0aClcbiAgICAgICAgcmV0X2FycmF5LnNldCh0aGlzLmRhdGEpXG4gICAgICAgIHJldF9hcnJheS5zZXQobmV3X2RhdGEsIHRoaXMuZGF0YS5sZW5ndGgpXG5cbiAgICAgICAgcmV0dXJuIHJldF9hcnJheVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGFubm90YXRpb25cbiAgICAgKiAqL1xuICAgIHVwZGF0ZVBhZ2VBbm5vdGF0aW9uUmVmZXJlbmNlQXJyYXkodG9EZWxldGU6IEFubm90YXRpb25bXSk6IHsgcHRyOiBSZWZlcmVuY2VQb2ludGVyLCBkYXRhOiBudW1iZXJbXSB9IHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0b0RlbGV0ZVswXS5wYWdlUmVmZXJlbmNlXG5cbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQYWdlIHdpdGhvdXQgb2JqZWN0IGlkXCIpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVmZXJlbmNlczogUmVmZXJlbmNlUG9pbnRlcltdID0gcGFnZS5hbm5vdHNcblxuICAgICAgICAvLyByZW1vdmUgYW5ub3RhdGlvbiByZWZlcmVuY2VzIGZyb20gdGhlIGFycmF5IHRoYXQgbXVzdCBiZSBkZWxldGVkIGFuZCBtYXJrIHRoZW0gYXMgZGVsZXRlZFxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5maWx0ZXIoKGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvRGVsID0gdG9EZWxldGUuZmluZCgodCkgPT4gKDxhbnk+dC5vYmplY3RfaWQpLm9iaiA9PT0gYS5vYmogJiYgKDxhbnk+dC5vYmplY3RfaWQpLmdlbmVyYXRpb24gPT09IGEuZ2VuZXJhdGlvbilcblxuICAgICAgICAgICAgaWYgKHRvRGVsKSB7XG4gICAgICAgICAgICAgICAgdG9EZWwuaXNfZGVsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcmVmQXJyYXlfaWQ6IGFueSA9IHBhZ2UuYW5ub3RzUG9pbnRlclxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIocmVmQXJyYXlfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9TVEFSVClcblxuXG4gICAgICAgIGZvciAobGV0IGFuIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW4sIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX0VORClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVORE9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHsgcHRyOiByZWZBcnJheV9pZCwgZGF0YTogcmV0IH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9