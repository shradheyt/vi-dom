/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vi_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vi-dom */ \"./vi-dom.js\");\n\r\n\r\n\r\nconst getRandomItemFromArray = (list) => {\r\n    return list[\r\n      Math.round(Math.random() * (list.length - 1))\r\n    ];\r\n  };\r\n\r\nconst App = (props) => {\r\n    const { list } = props;\r\n    return Object(_vi_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ('div', { class: 'app'},\r\n    Object(_vi_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1',null,'Simple Virtual DOM Demo'),\r\n    Object(_vi_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul',null, ...list.map(item => Object(_vi_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li',null,item))\r\n    )\r\n    );\r\n};\r\n\r\nlet currentApp;\r\nconst render = (state) => {\r\n    const newApp = Object(_vi_dom__WEBPACK_IMPORTED_MODULE_0__[\"renderNode\"])(App(state));\r\n    currentApp ? document.body.replaceChild(newApp, currentApp) \r\n    : document.body.appendChild(newApp);\r\n\r\n    currentApp = newApp;\r\n};\r\n\r\nconst state = {\r\n    list: [\r\n        '🕺', '💃', '😀', '🙋‍', '💼',\r\n        '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'\r\n      ]\r\n}\r\n\r\nsetInterval(() => {\r\n    state.list = [\r\n        ...state.list,\r\n        getRandomItemFromArray(state.list)\r\n    ];\r\n    render(state);\r\n},1000);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./vi-dom.js":
/*!*******************!*\
  !*** ./vi-dom.js ***!
  \*******************/
/*! exports provided: default, renderNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNode\", function() { return renderNode; });\nfunction createElement(nodeName, attributes, ...children) {\r\n    return {nodeName, attributes, children};\r\n}\r\n\r\nconst renderNode = vnode => {\r\n    let el;\r\n    const { nodeName, attributes, children} = vnode;\r\n    if(vnode.split) return document.createTextNode(vnode);  //if vnode is textnode\r\n\r\n    el = document.createElement(nodeName);\r\n    for(let key in attributes) {\r\n        el.setAttribute(key,attributes[key]);\r\n    } \r\n\r\n    (children || []).forEach(child => {\r\n        el.appendChild(renderNode(child));\r\n    });\r\n    return el;\r\n};\n\n//# sourceURL=webpack:///./vi-dom.js?");

/***/ })

/******/ });