/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/libs/core.js","vendors~core~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/libs/calculate.js":
/*!*******************************!*\
  !*** ./src/libs/calculate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass calculate{\n    constructor(len){\n        console.log('calculate 被加载2')\n        this.len = len || 2\n    }\n\n    add(x,y){\n        return (Number(x)+Number(y)).toFixed(this.len)\n    }\n\n    div(x,y){\n        return (Number(x)/Number(y)).toFixed(this.len)\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jYWxjdWxhdGUuanM/NThkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSx3RSIsImZpbGUiOiIuL3NyYy9saWJzL2NhbGN1bGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIGNhbGN1bGF0ZXtcbiAgICBjb25zdHJ1Y3RvcihsZW4pe1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsY3VsYXRlIOiiq+WKoOi9vTInKVxuICAgICAgICB0aGlzLmxlbiA9IGxlbiB8fCAyXG4gICAgfVxuXG4gICAgYWRkKHgseSl7XG4gICAgICAgIHJldHVybiAoTnVtYmVyKHgpK051bWJlcih5KSkudG9GaXhlZCh0aGlzLmxlbilcbiAgICB9XG5cbiAgICBkaXYoeCx5KXtcbiAgICAgICAgcmV0dXJuIChOdW1iZXIoeCkvTnVtYmVyKHkpKS50b0ZpeGVkKHRoaXMubGVuKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/calculate.js\n");

/***/ }),

/***/ "./src/libs/core.js":
/*!**************************!*\
  !*** ./src/libs/core.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/libs/test.js\");\n/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate */ \"./src/libs/calculate.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// 挂载核心对象\nwindow.lei = {};\n\nconsole.log('计算器被加载');\nlei.calculator = new _calculate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconsole.log('测试模块被加载');\nlei.test = new _test__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb3JlLmpzP2Y0MTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNXO0FBQ2Q7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0RBQVU7O0FBRS9CO0FBQ0EsZUFBZSw2Q0FBSTs7QUFFSixpRSIsImZpbGUiOiIuL3NyYy9saWJzL2NvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVzdCBmcm9tICcuL3Rlc3QnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0ZSdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLy8g5oyC6L295qC45b+D5a+56LGhXG53aW5kb3cubGVpID0ge307XG5cbmNvbnNvbGUubG9nKCforqHnrpflmajooqvliqDovb0nKTtcbmxlaS5jYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcblxuY29uc29sZS5sb2coJ+a1i+ivleaooeWdl+iiq+WKoOi9vScpO1xubGVpLnRlc3QgPSBuZXcgVGVzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCB7fSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/core.js\n");

/***/ }),

/***/ "./src/libs/test.js":
/*!**************************!*\
  !*** ./src/libs/test.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Test{\n    constructor(){\n        console.log('test')();\n    }\n    forErrer(){\n        console.log('test')();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlicy90ZXN0LmpzPzI4MGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FIiwiZmlsZSI6Ii4vc3JjL2xpYnMvdGVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRlc3R7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKSgpO1xuICAgIH1cbiAgICBmb3JFcnJlcigpe1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/test.js\n");

/***/ })

/******/ });