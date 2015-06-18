/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./out/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/entry.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by YikaJ on 15/6/16.
	 */
	'use strict';
	// 引入样式表
	__webpack_require__(/*! ./main.scss */ 2);
	
	// 引入组件
	__webpack_require__(/*! ./components/App */ 7);

/***/ },
/* 2 */
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/sass-loader!./main.scss */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!******************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/main.scss ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 4)();
	exports.push([module.id, "body {\n  background: #f5f5f5; }\n\nheader h1 {\n  text-align: center;\n  text-decoration: underline; }\n\n.container {\n  width: 760px;\n  margin: 0 auto; }\n\n.fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  height: 0;\n  clear: both; }\n\n.panel {\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 8px;\n  box-shadow: 1px 1px 1px #000; }\n  .panel .panel-header {\n    border-bottom: 3px solid #ddd; }\n    .panel .panel-header input {\n      width: 90%;\n      background: url("+__webpack_require__(/*! ./svg/si-glyph-baby.svg */ 5)+") no-repeat;\n      padding: 5px 5px;\n      padding-left: 50px;\n      font-size: 24px;\n      border: none; }\n\n.todo-list {\n  list-style: none;\n  padding: 0; }\n  .todo-list li {\n    border-bottom: 1px solid #ddd;\n    padding: 10px;\n    font-size: 18px; }\n    .todo-list li input[type=checkbox] {\n      margin-right: 10px; }\n    .todo-list li button {\n      font-size: 14px; }\n\n.todo-footer {\n  margin-left: 10px; }\n  .todo-footer input[type=checkbox] {\n    margin-right: 10px; }\n", ""]);

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./src/svg/si-glyph-baby.svg ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8tLT4KPHN2ZyB2aWV3Qm94PSIwIDAgMTcgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgY2xhc3M9InNpLWdseXBoIHNpLWdseXBoLWJhYnkiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjAuMyAoNzg5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Nzg3PC90aXRsZT4KICAgIAogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbD0iIzQzNDM0MyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljk3NSwxLjk4OCBDNS45NzUsMy4wODUgNS4wODksMy45NzEgNCwzLjk3MSBDMi45MTQsMy45NzEgMi4wMjgsMy4wODQgMi4wMjgsMS45ODggQzIuMDI4LDAuODkyIDIuOTE0LDAuMDA1IDQsMC4wMDUgQzUuMDg5LDAuMDA1MDAwMDAwMDEgNS45NzUsMC44OTMgNS45NzUsMS45ODggTDUuOTc1LDEuOTg4IFoiIGNsYXNzPSJzaS1nbHlwaC1maWxsIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljg1NCwxMC4wMzIgQzYuMTU0LDEwLjM0MiA1Ljk1OCwxMC40ODggNS44NDksMTAuNTk3IEw0LjgyNiwxMS43MjkgQzQuNTI3LDEyLjA0IDMuNDQ3LDEyLjA0MSAzLjE0OSwxMS43MzEgTDIuMTUsMTAuNjE4IEMyLjA5LDEwLjU1NyAxLjg1MywxMC4zNjQgMi4xNTUsMTAuMDUyIEw1Ljg1NCwxMC4wMzIgTDUuODU0LDEwLjAzMiBaIiBjbGFzcz0ic2ktZ2x5cGgtZmlsbCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44NzUsNS4zNSBDNS42MzEsNS4xNTQgNS4zMzYsNS4wMzUgNS4wMTMsNS4wMzUgTDIuOTkzLDUuMDM1IEMyLjY2NSw1LjAzNSAyLjM2Myw1LjE2MSAyLjExNyw1LjM2MyBDMi4wOTcsNS4zNzcgMC4wODEsOC4xMzcgMC4wODEsOC4xMzcgQy0wLjAzNyw4LjMyNSAwLjAwMTk5OTk5OTk5LDguNTg5IDAuMTY4LDguNzI2IEMwLjI1Miw4Ljc5MSAwLjM1NCw4LjgxNCAwLjQ0NSw4Ljc5NiBDMC41MzksOC43NzcgMC42MjUsOC43MiAwLjY4NCw4LjYyNSBMMi4wMiw3LjU4MSBMMi4wMiw4LjU2IEMyLjAyLDguNTYgMS44Mzc3NTk3NCw4Ljk1Njk5OTkzIDIuNDc4NzU5NzQsOC45NTY5OTk5MyBMNS41ODksOC45NTcgQzUuOTM3LDguOTU3IDUuOTk5LDguNTYgNS45OTksOC41NiBMNS45OTksNy42MDkgTDcuMzM1LDguNjM3IEM3LjM5Niw4LjczMiA3LjQ4MSw4Ljc5IDcuNTc2LDguODA5IEM3LjY2OSw4LjgyNiA3Ljc2OCw4LjgwNCA3Ljg1Miw4LjczOCBDOC4wMjEsOC42MDMgOC4wNiw4LjM0IDcuOTQxLDguMTQ5IEM3Ljk0MSw4LjE0OSA1LjkzMSw1LjM4IDUuODc1LDUuMzUgWiIgY2xhc3M9InNpLWdseXBoLWZpbGwiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIuNDIxLDE1Ljk2NCBDMi4yNDgsMTUuOTY0IDEuODk3LDE1LjgzOCAxLjc5NSwxNS42NjQgTDAuNTI5LDEzLjM1NSBDMC4zODQsMTMuMTExIDEuNDQxLDExLjEwMSAxLjQ0MSwxMS4xMDEgTDIuNTk1LDEyLjM4MiBDMi41OTUsMTIuMzgyIDIuMDI4LDEzLjAzNyAyLjAwOSwxMy4yMjIgQzEuOTg5LDEzLjQwNyAyLjg2MywxNS4wMTUgMi44NjMsMTUuMDE1IEMzLjAzLDE1LjI5MSAyLjk2NiwxNS42NzEgMi43MTksMTUuODU5IEMyLjYyOCwxNS45MzEgMi41MjMsMTUuOTY0IDIuNDIxLDE1Ljk2NCBMMi40MjEsMTUuOTY0IFoiIGNsYXNzPSJzaS1nbHlwaC1maWxsIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjUzMSwxNS45NjQgQzUuNzA1LDE1Ljk2NCA2LjA1NiwxNS44MzggNi4xNTksMTUuNjY0IEw3LjQyNCwxMy4zNTUgQzcuNTY5LDEzLjExMSA2LjUxMywxMS4xMDEgNi41MTMsMTEuMTAxIEw1LjM1OSwxMi4zODIgQzUuMzU5LDEyLjM4MiA1LjkyNywxMy4wMzcgNS45NDYsMTMuMjIyIEM1Ljk2NSwxMy40MDcgNS4wOTEsMTUuMDE1IDUuMDkxLDE1LjAxNSBDNC45MjQsMTUuMjkxIDQuOTg4LDE1LjY3MSA1LjIzNCwxNS44NTkgQzUuMzI1LDE1LjkzMSA1LjQzLDE1Ljk2NCA1LjUzMSwxNS45NjQgTDUuNTMxLDE1Ljk2NCBaIiBjbGFzcz0ic2ktZ2x5cGgtZmlsbCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by YikaJ on 15/6/16.
	 */
	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _localDb = __webpack_require__(/*! localDb */ 9);
	
	var _localDb2 = _interopRequireDefault(_localDb);
	
	var _TodoHeaderJs = __webpack_require__(/*! ./TodoHeader.js */ 10);
	
	var _TodoHeaderJs2 = _interopRequireDefault(_TodoHeaderJs);
	
	var _TodoMainJs = __webpack_require__(/*! ./TodoMain.js */ 11);
	
	var _TodoMainJs2 = _interopRequireDefault(_TodoMainJs);
	
	var _TodoFooterJs = __webpack_require__(/*! ./TodoFooter.js */ 13);
	
	var _TodoFooterJs2 = _interopRequireDefault(_TodoFooterJs);
	
	var App = (function (_React$Component) {
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this);
	        this.db = new _localDb2["default"]("React-Todos");
	        this.state = {
	            todos: this.db.get("todos") || [],
	            allChecked: false
	        };
	    }
	
	    _inherits(App, _React$Component);
	
	    _createClass(App, [{
	        key: "addTodo",
	        value: function addTodo(todoItem) {
	            var todos = this.state.todos.concat(todoItem);
	            this.setState({ todos: todos });
	            this.db.set("todos", todos);
	        }
	    }, {
	        key: "changeTodoState",
	        value: function changeTodoState(index, isDone) {
	            var isChangeAll = arguments[2] === undefined ? false : arguments[2];
	
	            if (isChangeAll) {
	                this.setState({
	                    todos: this.state.todos.map(function (todo) {
	                        todo.isDone = isDone;
	                        return todo;
	                    }),
	                    allChecked: isDone
	                });
	            } else {
	                this.state.todos[index].isDone = isDone;
	                //check isAllChecked
	                var allChecked = false;
	                if (this.state.todos.every(function (todo) {
	                    return todo.isDone;
	                })) {
	                    allChecked = true;
	                }
	                this.setState({ todos: this.state.todos, allChecked: allChecked });
	            }
	            this.db.set("todos", this.state.todos);
	        }
	    }, {
	        key: "clearDone",
	        value: function clearDone() {
	            this.setState({
	                todos: this.state.todos.filter(function (todo) {
	                    return !todo.isDone;
	                })
	            });
	            this.db.set("todos", this.state.todos);
	        }
	    }, {
	        key: "deleteTodo",
	        value: function deleteTodo(index) {
	            this.state.todos.splice(index, 1);
	            this.setState({ todos: this.state.todos });
	            this.db.set("todos", this.state.todos);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var props = {
	                todoCount: this.state.todos.length || 0,
	                todoDoneCount: (this.state.todos && this.state.todos.filter(function (todo) {
	                    return todo.isDone;
	                })).length || 0
	            };
	            return _react2["default"].createElement(
	                "div",
	                { className: "panel" },
	                _react2["default"].createElement(_TodoHeaderJs2["default"], { addTodo: this.addTodo.bind(this) }),
	                _react2["default"].createElement(_TodoMainJs2["default"], { deleteTodo: this.deleteTodo.bind(this), todos: this.state.todos, changeTodoState: this.changeTodoState.bind(this) }),
	                _react2["default"].createElement(_TodoFooterJs2["default"], _extends({ allChecked: this.state.allChecked, clearDone: this.clearDone.bind(this) }, props, { changeTodoState: this.changeTodoState.bind(this) }))
	            );
	        }
	    }]);
	
	    return App;
	})(_react2["default"].Component);
	
	_react2["default"].render(_react2["default"].createElement(App, null), document.getElementById("app"));

/***/ },
/* 8 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 9 */
/*!****************************!*\
  !*** ./~/localDb/index.js ***!
  \****************************/
/***/ function(module, exports) {

	/**
	 * Created by YikaJ on 15/6/10.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var LocalDb = (function () {
	    function LocalDb() {
	        var localDb = arguments[0] === undefined ? 'localDb' : arguments[0];
	
	        _classCallCheck(this, LocalDb);
	
	        if (!window.localStorage) {
	            throw new Error('Not supports localStorage');
	        }
	        this.localDb = localDb;
	
	        if (localStorage[localDb]) {
	            this.db = JSON.parse(localStorage[localDb]);
	        } else {
	            this.db = {};
	        }
	    }
	
	    _createClass(LocalDb, [{
	        key: 'getDb',
	        value: function getDb() {
	            return this.db;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            if (key) {
	                this.db[key] = value;
	
	                return this._saveToLocalStorage();
	            }
	
	            throw new Error('set参数key不能为空');
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (key) {
	                var value = this.db[key];
	                if (typeof value === 'undefined') {
	                    console.warn(key + '的值不存在');
	                }
	                return value;
	            }
	
	            throw new Error('get参数key不能为空');
	        }
	    }, {
	        key: 'clean',
	        value: function clean() {
	            this.db = {};
	            this._saveToLocalStorage();
	        }
	    }, {
	        key: '_saveToLocalStorage',
	        value: function _saveToLocalStorage() {
	            localStorage[this.localDb] = JSON.stringify(this.getDb());
	        }
	    }]);
	
	    return LocalDb;
	})();
	
	module.exports = LocalDb;


/***/ },
/* 10 */
/*!**************************************!*\
  !*** ./src/components/TodoHeader.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by YikaJ on 15/6/16.
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoHeader = (function (_React$Component) {
	    function TodoHeader() {
	        _classCallCheck(this, TodoHeader);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(TodoHeader, _React$Component);
	
	    _createClass(TodoHeader, [{
	        key: "handlerKeyUp",
	        value: function handlerKeyUp(event) {
	            if (event.keyCode === 13) {
	                var value = event.target.value;
	
	                if (!value) return false;
	
	                var newTodoItem = {
	                    text: value,
	                    isDone: false
	                };
	                event.target.value = "";
	                this.props.addTodo(newTodoItem);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "panel-header" },
	                _react2["default"].createElement("input", { ref: "todoInput", onKeyUp: this.handlerKeyUp.bind(this), type: "text", placeholder: "what's your task ?" })
	            );
	        }
	    }]);
	
	    return TodoHeader;
	})(_react2["default"].Component);
	
	exports["default"] = TodoHeader;
	module.exports = exports["default"];

/***/ },
/* 11 */
/*!************************************!*\
  !*** ./src/components/TodoMain.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by YikaJ on 15/6/16.
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItemJs = __webpack_require__(/*! ./TodoItem.js */ 12);
	
	var _TodoItemJs2 = _interopRequireDefault(_TodoItemJs);
	
	var TodoMain = (function (_React$Component) {
	    function TodoMain() {
	        _classCallCheck(this, TodoMain);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(TodoMain, _React$Component);
	
	    _createClass(TodoMain, [{
	        key: "render",
	        value: function render() {
	            var _this = this;
	
	            return _react2["default"].createElement(
	                "ul",
	                { className: "todo-list" },
	                this.props.todos.map(function (todo, index) {
	                    return _react2["default"].createElement(_TodoItemJs2["default"], _extends({ key: index }, todo, { index: index }, _this.props));
	                })
	            );
	        }
	    }]);
	
	    return TodoMain;
	})(_react2["default"].Component);
	
	exports["default"] = TodoMain;
	module.exports = exports["default"];

/***/ },
/* 12 */
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * Created by YikaJ on 15/6/17.
	 */
	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var TodoItem = (function (_React$Component) {
	    function TodoItem() {
	        _classCallCheck(this, TodoItem);
	
	        _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this);
	        this.state = {
	            isShowDelete: false
	        };
	    }
	
	    _inherits(TodoItem, _React$Component);
	
	    _createClass(TodoItem, [{
	        key: 'handlerChange',
	        value: function handlerChange() {
	            var isDone = !this.props.isDone;
	            this.props.changeTodoState(this.props.index, isDone);
	        }
	    }, {
	        key: 'handlerMouseOver',
	        value: function handlerMouseOver(e) {
	            this.setState({ isShowDelete: true });
	        }
	    }, {
	        key: 'handlerMouseOut',
	        value: function handlerMouseOut(e) {
	            this.setState({ isShowDelete: false });
	        }
	    }, {
	        key: 'handlerDelete',
	        value: function handlerDelete() {
	            this.props.deleteTodo(this.props.index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var showStyle = this.state.isShowDelete ? { display: 'inline' } : { display: 'none' };
	            var doneStyle = this.props.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
	
	            return React.createElement(
	                'li',
	                {
	                    onMouseOver: this.handlerMouseOver.bind(this),
	                    onMouseOut: this.handlerMouseOut.bind(this)
	                },
	                React.createElement('input', { type: 'checkbox', checked: this.props.isDone, onChange: this.handlerChange.bind(this) }),
	                React.createElement(
	                    'span',
	                    { style: doneStyle },
	                    this.props.text
	                ),
	                React.createElement(
	                    'button',
	                    { onClick: this.handlerDelete.bind(this), style: showStyle, className: 'fr' },
	                    '删除'
	                )
	            );
	        }
	    }]);
	
	    return TodoItem;
	})(React.Component);
	
	exports['default'] = TodoItem;
	module.exports = exports['default'];

/***/ },
/* 13 */
/*!**************************************!*\
  !*** ./src/components/TodoFooter.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by YikaJ on 15/6/16.
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoFooter = (function (_React$Component) {
	    function TodoFooter() {
	        _classCallCheck(this, TodoFooter);
	
	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }
	
	    _inherits(TodoFooter, _React$Component);
	
	    _createClass(TodoFooter, [{
	        key: "handlerAllState",
	        value: function handlerAllState(event) {
	            this.props.changeTodoState(null, event.target.checked, true);
	        }
	    }, {
	        key: "handlerClick",
	        value: function handlerClick() {
	            this.props.clearDone();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "clearfix todo-footer" },
	                _react2["default"].createElement("input", { checked: this.props.allChecked, onChange: this.handlerAllState.bind(this), type: "checkbox", className: "fl" }),
	                _react2["default"].createElement(
	                    "span",
	                    { className: "fl" },
	                    this.props.todoDoneCount,
	                    "已完成 / ",
	                    this.props.todoCount,
	                    "总数"
	                ),
	                _react2["default"].createElement(
	                    "button",
	                    { onClick: this.handlerClick.bind(this), className: "fr" },
	                    "清除已完成"
	                )
	            );
	        }
	    }]);
	
	    return TodoFooter;
	})(_react2["default"].Component);
	
	exports["default"] = TodoFooter;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map