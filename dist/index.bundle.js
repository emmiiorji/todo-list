/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Primary colors */\\r\\n:root {\\r\\n  --grey: #696969;\\r\\n  --black: #000;\\r\\n  --milky: #f6f6f6;\\r\\n}\\r\\n\\r\\n/* Primary colors */\\r\\n\\r\\n/* Global Styling */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: var(--black);\\r\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  min-width: 100vw;\\r\\n  min-height: 100vh;\\r\\n  background: var(--milky);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n  width: 38%;\\r\\n  min-width: 350px;\\r\\n  box-shadow: 0 1px 5px 0.1px var(--grey);\\r\\n  background: white;\\r\\n}\\r\\n\\r\\n.todo-header h1 {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.todo-header,\\r\\n.enter-todo,\\r\\n.todo-entry {\\r\\n  display: flex;\\r\\n  margin: 0 20px;\\r\\n  align-items: center;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.todo-container .todo-header {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n/* Style enter-do placecholder */\\r\\n#enter-todo::-webkit-input-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#enter-todo::-moz-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#enter-todo:-moz-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#enter-todo:-ms-input-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/* Style enter-do placecholder */\\r\\n\\r\\n.todo-container input {\\r\\n  border: none;\\r\\n\\r\\n  /* color: #000; */\\r\\n}\\r\\n\\r\\n.todo-container input:focus {\\r\\n  outline: none;\\r\\n\\r\\n  /* color: red; */\\r\\n}\\r\\n\\r\\n.todo-container input[type=\\\"text\\\"] {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.todo-container input[type=\\\"checkbox\\\"] {\\r\\n  margin-right: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-container .divide {\\r\\n  border: none;\\r\\n  height: 0.2px;\\r\\n  background: #c0c0c0;\\r\\n}\\r\\n\\r\\n/* Handle input text dynamics */\\r\\n.highlight-input {\\r\\n  background: #fffeca;\\r\\n  margin: 0;\\r\\n  padding-left: 20px;\\r\\n  padding-right: 20px;\\r\\n}\\r\\n\\r\\n.highlight-input input:focus {\\r\\n  background: #fffeca;\\r\\n}\\r\\n\\r\\n.todo-container :checked + input {\\r\\n  text-decoration: line-through;\\r\\n  color: #c0c0c0;\\r\\n}\\r\\n\\r\\n.todo-container :checked + input:focus {\\r\\n  text-decoration: initial;\\r\\n  color: initial;\\r\\n}\\r\\n\\r\\n/* Handle input text dynamics */\\r\\n\\r\\n.enter {\\r\\n  height: 10px;\\r\\n  font-size: 14px;\\r\\n  color: #c0c0c0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#refresh {\\r\\n  font-size: 13px;\\r\\n  cursor: pointer;\\r\\n  color: #c0c0c0;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  color: #c0c0c0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.reorder {\\r\\n  font-size: 16px;\\r\\n  color: #c0c0c0;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.enter:hover,\\r\\n#refresh:hover,\\r\\n.reorder:hover,\\r\\n.delete:hover {\\r\\n  color: var(--grey);\\r\\n}\\r\\n\\r\\n#clear-completed {\\r\\n  width: 100%;\\r\\n  padding: 15px;\\r\\n  cursor: pointer;\\r\\n  background: var(--milky);\\r\\n}\\r\\n\\r\\n#clear-completed:hover {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.rotate {\\r\\n  transform: rotate(360deg);\\r\\n  transition: transform 1s;\\r\\n  -webkit-transform: rotate(360deg);\\r\\n  -webkit-transition: -webkit-transform 1s;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/js/tasks.js\");\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskManager.js */ \"./src/js/taskManager.js\");\n\n\n\n\nconst markupAllLists = () => {\n  let allLists = '';\n  _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoData.forEach((data, index) => {\n    allLists += `<li class=\"todo-item\">\n                    <div class=\"todo-entry\" id=entry_${index}>\n                      <input type=\"checkbox\" ${data.completed ? 'checked' : ''} class=\"status\" title=\"Check!\">\n                      <input type=\"text\" class=\"todo\" value=\"${data.description}\">\n                      <i class=\"fa-solid fa-trash-can delete hide\" title=\"Delete entry\"></i>\n                      <i class=\"fa-solid fa-ellipsis-vertical reorder\" title=\"Move\"></i>\n                    </div>\n                    <hr class=\"divide\">\n                  </li>`;\n  });\n  return allLists;\n};\n\nconst renderLists = () => {\n  const todoCollection = document.getElementById('todo-collection');\n  todoCollection.innerHTML = markupAllLists();\n};\n\nrenderLists();\n\n// General declaration that re-rendering lists will not affect\nconst enterTodo = document.getElementById('enter-todo');\nconst enterBu = document.querySelector('.enter');\nconst clearCompleted = document.getElementById('clear-completed');\nconst refreshBu = document.getElementById('refresh');\n\nconst addRefreshingListeners = () => {\n  const descInput = document.querySelectorAll('.todo');\n  const deleteButtons = document.querySelectorAll('.delete');\n  const statuses = document.querySelectorAll('.status');\n\n  descInput.forEach((element) => {\n    ['focus', 'blur', 'keyup'].forEach((evt) => {\n      element.addEventListener(evt, (e) => {\n        const todoEntry = e.target.parentNode;\n\n        // Modify the looks\n        todoEntry.classList.toggle('highlight-input');\n        todoEntry.querySelector('.delete').classList.toggle('hide');\n        todoEntry.querySelector('.reorder').classList.toggle('hide');\n\n        if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {\n          // It's a modify\n          const taskIndex = Number(e.target.parentNode.id.split('_')[1]);\n          _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].modifyTask({ description: e.target.value }, taskIndex);\n          todoEntry.classList.remove('highlight-input');\n          todoEntry.querySelector('.delete').classList.add('hide');\n          todoEntry.querySelector('.reorder').classList.remove('hide');\n          e.target.blur();\n        }\n      });\n    });\n  });\n\n  deleteButtons.forEach((deleteButton) => {\n    deleteButton.addEventListener('mousedown', (e) => {\n      const taskIndex = Number(e.target.parentNode.id.split('_')[1]);\n      _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTask(taskIndex);\n      renderLists();\n      addRefreshingListeners();\n    });\n  });\n\n  statuses.forEach((status) => {\n    status.addEventListener('change', (e) => {\n      const taskIndex = Number(e.target.parentNode.id.split('_')[1]);\n      _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].modifyTask({ completed: e.target.checked }, taskIndex);\n    });\n  });\n};\n\naddRefreshingListeners();\n\nconst addOneTimeListeners = () => {\n  // Save todo events. Clicking enter icon or pressing enter key saves an entry\n  const eventPairs = { keyup: enterTodo, click: enterBu };\n  Object.entries(eventPairs).forEach(([evt, element]) => {\n    element.addEventListener(evt, (e) => {\n      if (enterTodo.value.trim() !== '') {\n        if (evt === 'keyup' && !(e.key === 'Enter')) return;\n\n        _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(enterTodo.value);\n        renderLists();\n        addRefreshingListeners();\n        _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setValue(enterTodo, '');\n      }\n    });\n  });\n\n  // Clear completed tasks\n  clearCompleted.addEventListener('click', () => {\n    const todoEntries = Array.from(document.querySelectorAll('.todo-entry'));\n    const completedTasks = todoEntries.filter((todoEntry) => todoEntry.querySelector('.status').checked);\n    const taskIndexes = completedTasks.map((completedTask) => Number(completedTask.id.split('_')[1]));\n    _taskManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearCompletedTasks(taskIndexes);\n    renderLists();\n    addRefreshingListeners();\n  });\n\n  refreshBu.onclick = (e) => {\n    e.target.classList.add('rotate');\n    setTimeout(() => {\n      e.target.classList.remove('rotate');\n    }, 500);\n    renderLists();\n  };\n};\n\naddOneTimeListeners();\n\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/taskManager.js":
/*!*******************************!*\
  !*** ./src/js/taskManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/js/tasks.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nclass TaskManager {\n  constructor() {\n    this.enterTodo = document.getElementById('enter-todo');\n    this.data = null;\n  }\n\n  addTask(value) {\n    const task = {\n      description: value,\n      completed: false,\n    };\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData = this.writeLocalCollection(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageKey, task);\n  }\n\n  deleteTask(taskIndex) {\n    const taskToDelete = _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData[taskIndex];\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData = _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData.filter((data, index) => index !== taskIndex);\n    this.writeLocalCollection(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageKey, _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData, false);\n    return taskToDelete;\n  }\n\n  modifyTask(taskObject, taskIndex) {\n    // To receive only the keys necessary to be changed\n    Object.entries(taskObject).forEach(([key, value]) => {\n      _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData[taskIndex][key] = value;\n    });\n    this.writeLocalCollection(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageKey, _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData, false);\n  }\n\n  clearCompletedTasks(taskIndexes) {\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData = _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData.filter((task, index) => !taskIndexes.includes(index));\n    this.writeLocalCollection(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageKey, _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoData, false);\n  }\n\n  setValue(element, value = '') {\n    element.value = value;\n    return this.undefined; // Return undefined as though there's no return statement\n  }\n\n  readLocalCollection(key) {\n    this.data = JSON.parse(localStorage.getItem(key)) || [];\n    return this.data;\n  }\n\n  writeLocalCollection(key, item, single = true) { // When single is false, do a replace\n    let existingData;\n    if (single) {\n      existingData = this.readLocalCollection(key);\n      existingData.push(item);\n    } else {\n      existingData = item;\n    }\n\n    localStorage.setItem(key, JSON.stringify(existingData));\n    return existingData;\n  }\n}\n\nconst taskManager = new TaskManager();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskManager);\n\n//# sourceURL=webpack://todo-list/./src/js/taskManager.js?");

/***/ }),

/***/ "./src/js/tasks.js":
/*!*************************!*\
  !*** ./src/js/tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.js */ \"./src/js/taskManager.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nclass Tasks {\n  constructor() {\n    this.storageKey = 'todoData';\n    this.todoData = _taskManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].readLocalCollection(this.storageKey);\n  }\n}\n\nconst tasks = new Tasks();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-list/./src/js/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;