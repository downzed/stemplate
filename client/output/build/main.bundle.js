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
/******/ 	__webpack_require__.p = "/output/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/AppBar/index.js from dll-reference library ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/AppBar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/AppBar/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Avatar/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Avatar/index.js from dll-reference library ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Avatar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Avatar/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Button/index.js from dll-reference library ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Button/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Button/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Card/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Card/index.js from dll-reference library ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Card/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Card/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/CircularProgress/index.js":
/*!*******************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/CircularProgress/index.js from dll-reference library ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/CircularProgress/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/CircularProgress/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Icon/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Icon/index.js from dll-reference library ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Icon/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Icon/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/IconButton/index.js from dll-reference library ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/IconButton/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/IconButton/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Menu/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Menu/index.js from dll-reference library ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Menu/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Menu/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Snackbar/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Snackbar/index.js from dll-reference library ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Snackbar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Snackbar/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Tooltip/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Tooltip/index.js from dll-reference library ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/Tooltip/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Tooltip/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/index.es.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/index.es.js from dll-reference library ***!
  \*****************************************************************************************/
/*! exports provided: colors, createGenerateClassName, createMuiTheme, createStyles, jssPreset, MuiThemeProvider, withStyles, withTheme, AppBar, Avatar, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Button, ButtonBase, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, Fade, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, GridList, GridListTile, GridListTileBar, Grow, Hidden, Icon, IconButton, Input, InputAdornment, InputLabel, LinearProgress, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, Paper, Popover, Popper, Portal, Radio, RadioGroup, RootRef, Select, Slide, Snackbar, SnackbarContent, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper, SvgIcon, SwipeableDrawer, Switch, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, Tab, TextField, Toolbar, Tooltip, Typography, withMobileDialog, withWidth, Zoom */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/index.es.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/index.es.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/styles/index.js from dll-reference library ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/@material-ui/core/styles/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/styles/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/awesome-phonenumber/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/awesome-phonenumber/index.js from dll-reference library ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/awesome-phonenumber/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/awesome-phonenumber/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/core.web/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/core.web/index.js from dll-reference library ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/core.web/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/core.web/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/country-data/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/country-data/index.js from dll-reference library ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/country-data/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/country-data/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./source/plugins/ui/components/ExpandingPanel/customs.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./source/plugins/ui/components/ExpandingPanel/customs.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".no_boxshadow {\\n  box-shadow: none !important; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ExpandingPanel/customs.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./source/plugins/snackbar/snackbar.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./source/plugins/snackbar/snackbar.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".snackbar > .jss151{\\n    border-radius: 3px 3px 0px 0px !important;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./source/plugins/snackbar/snackbar.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/css-loader/lib/css-base.js from dll-reference library ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/css-loader/lib/css-base.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/css-loader/lib/css-base.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/extend/index.js?");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/lodash.js from dll-reference library ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/lodash/lodash.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/lodash/lodash.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/methods/index.js":
/*!***************************************!*\
  !*** ./node_modules/methods/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * methods\n * Copyright(c) 2013-2014 TJ Holowaychuk\n * Copyright(c) 2015-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar http = __webpack_require__(/*! http */ 0);\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = getCurrentNodeMethods() || getBasicNodeMethods();\n\n/**\n * Get the current Node.js methods.\n * @private\n */\n\nfunction getCurrentNodeMethods() {\n  return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {\n    return method.toLowerCase();\n  });\n}\n\n/**\n * Get the \"basic\" Node.js methods, a snapshot from Node.js 0.10.\n * @private\n */\n\nfunction getBasicNodeMethods() {\n  return [\n    'get',\n    'post',\n    'put',\n    'head',\n    'delete',\n    'options',\n    'trace',\n    'copy',\n    'lock',\n    'mkcol',\n    'move',\n    'purge',\n    'propfind',\n    'proppatch',\n    'unlock',\n    'report',\n    'mkactivity',\n    'checkout',\n    'merge',\n    'm-search',\n    'notify',\n    'subscribe',\n    'unsubscribe',\n    'patch',\n    'search',\n    'connect'\n  ];\n}\n\n\n//# sourceURL=webpack:///./node_modules/methods/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference library ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/prop-types/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/prop-types/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference library ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/react-dom/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-dom/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference library ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/react/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react/index.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/style-loader/lib/addStyles.js from dll-reference library ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/style-loader/lib/addStyles.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/style-loader/lib/addStyles.js_from_dll-reference_library?");

/***/ }),

/***/ "./node_modules/superagent-use/index.js":
/*!**********************************************!*\
  !*** ./node_modules/superagent-use/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var methods = __webpack_require__(/*! methods */ \"./node_modules/methods/index.js\");\nvar extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n\nmodule.exports = function(_superagent) {\n  var superagent = extend({}, _superagent);\n\n  var uses = [];\n\n  superagent.use = function(fn) {\n    uses.push(fn);\n    return this;\n  };\n\n  if(methods.indexOf('del') === -1) {\n    methods = methods.slice(0);\n    methods.push('del');\n  }\n  methods.forEach(function(method) {\n    superagent[method] = function() {\n      var request = _superagent[method].apply(superagent, arguments);\n      uses.forEach(function(use) {\n        request = request.use(use);\n      })\n      return request;\n    };\n  });\n\n  return superagent;\n};\n\n\n//# sourceURL=webpack:///./node_modules/superagent-use/index.js?");

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/superagent/lib/client.js from dll-reference library ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(\"./node_modules/superagent/lib/client.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/superagent/lib/client.js_from_dll-reference_library?");

/***/ }),

/***/ "./source sync recursive .*\\.module\\.":
/*!**********************************!*\
  !*** ./source sync .*\.module\. ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./components/badge/Badge.module.jsx\": \"./source/components/badge/Badge.module.jsx\",\n\t\"./components/loaderButton/LoaderButton.module.jsx\": \"./source/components/loaderButton/LoaderButton.module.jsx\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./source sync recursive .*\\\\.module\\\\.\";\n\n//# sourceURL=webpack:///./source_sync_.*\\.module\\.?");

/***/ }),

/***/ "./source/App.jsx":
/*!************************!*\
  !*** ./source/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ReactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar core = __webpack_require__(/*! core.web */ \"./node_modules/core.web/index.js\");\n\nvar theme = (0, _styles.createMuiTheme)(); // automatically require all files that contain a '.module.' pattern.\n\ncore.injector.loadContext('Stemplate', __webpack_require__(\"./source sync recursive .*\\\\.module\\\\.\"));\ncore.plugin([__webpack_require__(/*! ./plugins/agent */ \"./source/plugins/agent/index.js\"), __webpack_require__(/*! ./plugins/core.plugin.state */ \"./source/plugins/core.plugin.state/index.js\"), __webpack_require__(/*! ./plugins/core.plugin.widget */ \"./source/plugins/core.plugin.widget/index.js\"), __webpack_require__(/*! ./plugins/interact */ \"./source/plugins/interact/index.js\"), __webpack_require__(/*! ./plugins/login */ \"./source/plugins/login/index.js\"), __webpack_require__(/*! ./plugins/theme */ \"./source/plugins/theme/index.js\"), __webpack_require__(/*! ./plugins/translate */ \"./source/plugins/translate/index.js\"), __webpack_require__(/*! ./plugins/popup */ \"./source/plugins/popup/index.js\"), __webpack_require__(/*! ./plugins/menu */ \"./source/plugins/menu/index.js\"), __webpack_require__(/*! ./plugins/router */ \"./source/plugins/router/index.js\"), __webpack_require__(/*! ./plugins/inputs */ \"./source/plugins/inputs/index.js\"), __webpack_require__(/*! ./plugins/snackbar */ \"./source/plugins/snackbar/index.js\"), __webpack_require__(/*! ./plugins/ui */ \"./source/plugins/ui/index.js\"), __webpack_require__(/*! ./plugins/Stemplate */ \"./source/plugins/Stemplate/index.js\")]);\n\ncore.require(['Stemplate.Root'], function (Root) {\n  core.tree.commit(); // to prevent duplicate first render when Baobab updates\n\n  ReactDom.render(React.createElement(_styles.MuiThemeProvider, {\n    theme: theme\n  }, React.createElement(Root, null)), document.getElementById('app'));\n});\n\n//# sourceURL=webpack:///./source/App.jsx?");

/***/ }),

/***/ "./source/components/badge/Badge.module.jsx":
/*!**************************************************!*\
  !*** ./source/components/badge/Badge.module.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _CircularProgress = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/CircularProgress/index.js\"));\n\nvar _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/IconButton/index.js\"));\n\nvar _Tooltip = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/Tooltip/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\ncore.Component('mui.Badge', [], function () {\n  /** \n   * @namespace mui.Badge\n   * @description display badge with formated number and tooltip on hover that shows the full number\n   * @example <Badge amount={listLength} >{''}</Badge>\n   * */\n  return {\n    /** \n     * @memberof mui.Badge\n     * @prop {Bool} propTypes.isLoading - show/hide loader\n     * @prop {Number} propTypes.number - required - the number to display in the badge\n     * */\n    propTypes: {\n      isLoading: PropTypes.bool,\n      amount: PropTypes.oneOfType([// any\n      PropTypes.string, PropTypes.number]),\n      showZero: PropTypes.bool,\n      tooltipPosition: PropTypes.string //Possible values are: \"bottom-center\", \"top-center\", \"bottom-right\", \"top-right\", \"bottom-left\", and \"top-left\".\n\n    },\n\n    /** \n     * @memberof mui.Badge\n     * @function\n     * @description formats the badge number to a shorter one\n     * */\n    getNumberFormatted: function getNumberFormatted(value) {\n      value = Math.trunc(value);\n      var newValue = value;\n      var suffixes = [\"\", \"k\", \"m\", \"b\", \"t\"];\n      var suffixNum = Math.floor(((\"\" + value).length - 1) / 3);\n      var shortValue = '';\n\n      for (var precision = 3; precision >= 1; precision--) {\n        shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision));\n        var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');\n\n        if (dotLessShortValue.length <= 3) {\n          break;\n        }\n      }\n\n      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);\n      newValue = shortValue + suffixes[suffixNum];\n      return newValue;\n    },\n\n    /** \n     * @memberof mui.Badge\n     * @function\n     * @description render the badge depend on the number length, if greater than 999, will be formated and add a tooltip to show the full number\n     * */\n    renderBadge: function renderBadge() {\n      var _props = this.props,\n          isLoading = _props.isLoading,\n          amount = _props.amount,\n          style = _props.style,\n          _props$tooltipStyle = _props.tooltipStyle,\n          tooltipStyle = _props$tooltipStyle === void 0 ? {} : _props$tooltipStyle,\n          _props$tooltipLabelSt = _props.tooltipLabelStyle,\n          tooltipLabelStyle = _props$tooltipLabelSt === void 0 ? {} : _props$tooltipLabelSt,\n          _props$tooltipTheme = _props.tooltipTheme,\n          tooltipTheme = _props$tooltipTheme === void 0 ? 'light' : _props$tooltipTheme,\n          _props$renderTooltipA = _props.renderTooltipArrow,\n          renderTooltipArrow = _props$renderTooltipA === void 0 ? true : _props$renderTooltipA,\n          _props$tooltipPositio = _props.tooltipPosition,\n          tooltipPosition = _props$tooltipPositio === void 0 ? 'bottom-center' : _props$tooltipPositio,\n          _props$tooltipSize = _props.tooltipSize,\n          tooltipSize = _props$tooltipSize === void 0 ? 'small' : _props$tooltipSize,\n          showZero = _props.showZero,\n          _props$isPercentage = _props.isPercentage,\n          isPercentage = _props$isPercentage === void 0 ? false : _props$isPercentage,\n          _props$backgroundColo = _props.backgroundColor,\n          backgroundColor = _props$backgroundColo === void 0 ? core.theme('main.secondary') : _props$backgroundColo,\n          _props$color = _props.color,\n          color = _props$color === void 0 ? core.theme('text.color2') : _props$color;\n\n      var badgeStyle = _extends({\n        borderRadius: '3px',\n        width: 'auto',\n        minWidth: '14px',\n        height: '14px',\n        padding: '1px 3px',\n        marginLeft: '6px',\n        fontWeight: '700',\n        fontSize: '11px',\n        display: 'inline-flex',\n        justifyContent: 'center',\n        color: color,\n        background: backgroundColor,\n        cursor: 'default',\n        lineHeight: '14px',\n        verticalAlign: 'text-top'\n      }, style);\n\n      if (isLoading) {\n        return _react.default.createElement(\"div\", {\n          className: 'widget-badge',\n          style: badgeStyle\n        }, _react.default.createElement(_CircularProgress.default, {\n          color: '#000',\n          size: 12,\n          thickness: 2\n        }));\n      }\n\n      if (!amount && !showZero) return null;\n      if (isPercentage && amount > 100) return null;\n\n      if (isPercentage) {\n        return _react.default.createElement(\"div\", {\n          className: 'widget-badge',\n          style: badgeStyle\n        }, amount + '%');\n      }\n\n      if (amount > 999) {\n        var formatedTooltipNumber = amount.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n        return _react.default.createElement(_Tooltip.default, {\n          title: formatedTooltipNumber\n        }, _react.default.createElement(\"div\", {\n          className: 'widget-badge',\n          style: badgeStyle\n        }, this.getNumberFormatted(amount)));\n      } else {\n        return _react.default.createElement(\"div\", {\n          className: 'widget-badge',\n          style: badgeStyle\n        }, amount);\n      }\n    },\n    render: function render() {\n      return this.renderBadge();\n    }\n  };\n});\n\n//# sourceURL=webpack:///./source/components/badge/Badge.module.jsx?");

/***/ }),

/***/ "./source/components/loaderButton/LoaderButton.module.jsx":
/*!****************************************************************!*\
  !*** ./source/components/loaderButton/LoaderButton.module.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\"));\n\nvar _CircularProgress = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/CircularProgress/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\ncore.Component('mui.LoaderButton', [], function () {\n  /** \n   * @namespace mui.LoaderButton\n   * @description Custom button with loader, optionally you can add an icon alongside the label, based on material-ui flat and raised buttons\n   * @example submit(callback){\n  ...             //some process to run when clicked\n  callback();     //the callback automatically stops the loader when process is ended\n  }\n   * @example <LoaderButton \n  flat={true} \n  onSubmit={this.submit} \n  icon={<FontIcon className='fa fa-facebook' />} \n  label='clickMe' \n  />\n   * @see <a href='http://www.material-ui.com/#/components/flat-button' target='_blank'>material-ui/flat-button</a>\n   * @see <a href='http://www.material-ui.com/#/components/raised-button' target='_blank'>material-ui/raised-button</a>\n   * */\n  return {\n    /** \n     * @memberof mui.LoaderButton\n     * @prop {String} propTypes.label - required - label for the button (required)\n     * @prop {Function} propTypes.onSubmit - required - the function to run on click (required)\n     * @prop {Node} propTypes.icon - render an icon alongside the label (optional)\n     * @prop {Boolean} propTypes.disabled - disable the button (optional)\n     * @prop {Boolean} propTypes.flat - required - determine if to render a flat or raised button (required)\n     * @prop {Number} propTypes.loaderSize - size for loader\n     * @prop {Number} propTypes.loaderThickness - thickness for the loader\n     * @prop {String} propTypes.loaderColor - color for the loader\n     * */\n    propTypes: {\n      onSubmit: PropTypes.func.isRequired,\n      icon: PropTypes.node,\n      disabled: PropTypes.bool,\n      loaderSize: PropTypes.number,\n      loaderThickness: PropTypes.number,\n      loaderColor: PropTypes.string\n    },\n    getDefaultProps: function getDefaultProps() {\n      return {\n        disabled: false\n      };\n    },\n    getInitialState: function getInitialState() {\n      return {\n        disabled: this.props.disabled,\n        loading: false\n      };\n    },\n\n    /** \n     * @memberof mui.LoaderButton\n     * @function\n     * @description run the supplied 'onSubmit' function, displaying a loader and disabling the button until process is ended.\n     * */\n    submit: function submit() {\n      if (!this.props.loading) {\n        this.setState({\n          loading: true,\n          disabled: true\n        });\n        return this.props.onSubmit(this.stopLoading);\n      }\n\n      return this.props.onSubmit();\n    },\n\n    /** \n     * @memberof mui.LoaderButton\n     * @function\n     * @description stop the loader when passing the callback()\n     * */\n    stopLoading: function stopLoading() {\n      this.setState({\n        loading: false,\n        disabled: false\n      });\n    },\n\n    /** \n     * @memberof mui.LoaderButton\n     * @function\n     * @description rendering the flat or raised button\n     * */\n    renderButton: function renderButton() {\n      var _props = this.props,\n          _props$loading = _props.loading,\n          loading = _props$loading === void 0 ? this.state.loading : _props$loading,\n          _props$disabled = _props.disabled,\n          disabled = _props$disabled === void 0 ? this.state.disabled : _props$disabled,\n          _props$label = _props.label,\n          label = _props$label === void 0 ? '' : _props$label,\n          onClick = _props.onClick,\n          _props$icon = _props.icon,\n          icon = _props$icon === void 0 ? null : _props$icon,\n          _props$loaderSize = _props.loaderSize,\n          loaderSize = _props$loaderSize === void 0 ? 24 : _props$loaderSize,\n          _props$loaderThicknes = _props.loaderThickness,\n          loaderThickness = _props$loaderThicknes === void 0 ? 3 : _props$loaderThicknes,\n          loaderColor = _props.loaderColor,\n          color = _props.color,\n          _props$style = _props.style,\n          style = _props$style === void 0 ? {} : _props$style,\n          props = _objectWithoutProperties(_props, [\"loading\", \"disabled\", \"label\", \"onClick\", \"icon\", \"loaderSize\", \"loaderThickness\", \"loaderColor\", \"color\", \"style\"]);\n\n      if (loading) disabled = true;\n      var lc = loaderColor ? loaderColor : core.theme('colors.white');\n      return _react.default.createElement(_Button.default, _extends({\n        onClick: this.submit,\n        disabled: disabled,\n        style: _extends({\n          borderRadius: 0,\n          background: color && !disabled ? color : core.theme(\"colors.gray3\"),\n          cursor: disabled ? 'not-allowed' : 'pointer'\n        }, style)\n      }, props), icon, label, loading ? _react.default.createElement(_CircularProgress.default, {\n        size: loaderSize,\n        thickness: loaderThickness,\n        style: {\n          'position': 'absolute',\n          'top': \"calc(50% - \".concat(loaderSize, \")\"),\n          'left': \"calc(50% - \".concat(loaderSize, \")\"),\n          'margin': 0,\n          'zIndex': 1,\n          color: lc\n        }\n      }) : null);\n    },\n    render: function render() {\n      return this.renderButton();\n    }\n  };\n});\n\n//# sourceURL=webpack:///./source/components/loaderButton/LoaderButton.module.jsx?");

/***/ }),

/***/ "./source/plugins/Stemplate/Stemplate.js":
/*!***********************************************!*\
  !*** ./source/plugins/Stemplate/Stemplate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var routes = __webpack_require__(/*! ./routes.js */ \"./source/plugins/Stemplate/routes.js\");\n\nmodule.exports = {\n  name: 'Stemplate',\n  tree: __webpack_require__(/*! ./tree.js */ \"./source/plugins/Stemplate/tree.js\"),\n  actions: [__webpack_require__(/*! ./actions/getLanguage */ \"./source/plugins/Stemplate/actions/getLanguage/index.js\"), __webpack_require__(/*! ./actions/logIn */ \"./source/plugins/Stemplate/actions/logIn/index.js\"), __webpack_require__(/*! ./actions/getDataEx */ \"./source/plugins/Stemplate/actions/getDataEx/index.js\"), __webpack_require__(/*! ./actions/getConfiguration */ \"./source/plugins/Stemplate/actions/getConfiguration/index.js\"), __webpack_require__(/*! ./actions/loadSettings */ \"./source/plugins/Stemplate/actions/loadSettings/index.js\")],\n  modules: [__webpack_require__(/*! ./modules/Mixin */ \"./source/plugins/Stemplate/modules/Mixin/index.js\"), __webpack_require__(/*! ./modules/Helper */ \"./source/plugins/Stemplate/modules/Helper/index.js\"), __webpack_require__(/*! ./modules/rules */ \"./source/plugins/Stemplate/modules/rules/index.js\"), __webpack_require__(/*! ./modules/dataModels/DataModelsEntry */ \"./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/index.js\"), __webpack_require__(/*! ./modules/dataModels/constructors/Basic */ \"./source/plugins/Stemplate/modules/dataModels/constructors/Basic/index.js\"), __webpack_require__(/*! ./modules/dataModels/constructors/ExtandBasic */ \"./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/index.js\")],\n  components: [__webpack_require__(/*! ./components/Component */ \"./source/plugins/Stemplate/components/Component/index.js\")],\n  views: [__webpack_require__(/*! ./views/Root */ \"./source/plugins/Stemplate/views/Root/index.js\"), __webpack_require__(/*! ./views/Home */ \"./source/plugins/Stemplate/views/Home/index.js\"), __webpack_require__(/*! ./views/Prices */ \"./source/plugins/Stemplate/views/Prices/index.js\")],\n  init: function init(definition, done) {\n    core.router.config({\n      routes: routes,\n      defaultRoute: '/home'\n    });\n    var _simpleOptions = {\n      BaseApi: 'http://some.ip.for/api',\n      getInitialFiles: function getInitialFiles(callback) {\n        core.plugins.Stemplate.run('loadSettings').then(function (data) {\n          var config = data.config,\n              menu = data.menu; // if (menu) {\n          //     core.plugins.Stemplate.set(['fileMenu'], menu)\n          // }\n\n          if (config) {\n            core.plugins.Stemplate.set(['config'], config);\n\n            for (var x in config) {\n              core.plugins.access.set([x], config[x]);\n            }\n\n            if (callback) callback();\n          } else if (callback) callback();\n        });\n      }\n    };\n    done(_simpleOptions);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/Stemplate.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getConfiguration/getConfiguration.js":
/*!*******************************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getConfiguration/getConfiguration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"getConfiguration\",\n  dependencies: [],\n  schema: [{\n    key: 'name',\n    type: 'string',\n    value: 'unnamed'\n  }],\n  get: function get() {\n    var core = this;\n    return function (data, promise) {\n      core.request.post('/getConfigFile').then(function (_ref) {\n        var response = _ref.response,\n            results = _ref.results,\n            error = _ref.error;\n        // if(error){\n        //\n        //   return;\n        // }\n        // console.log(results)\n        // var theme = core.tree.get(['plugins', 'theme', 'theme']);\n        // var str = JSON.stringify({ ...results }, null, 4);\n        // var obj = { ...results, theme };\n        promise.resolve(results);\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getConfiguration/getConfiguration.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getConfiguration/index.js":
/*!********************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getConfiguration/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./getConfiguration.js */ \"./source/plugins/Stemplate/actions/getConfiguration/getConfiguration.js\");\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getConfiguration/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getDataEx/getDataEx.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getDataEx/getDataEx.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"getDataEx\",\n  dependencies: ['Stemplate.Helper', 'Stemplate.DataModelsEntry'],\n  get: function get(Helper, DataModelsEntry) {\n    var core = this;\n    return function (data, promise) {\n      var BaseApi = core.plugins.Stemplate.BaseApi;\n      core.request.post(BaseApi + '/getDataEx', {\n        \"pram\": data.id\n      }).then(function (_ref) {\n        var results = _ref.results,\n            error = _ref.error;\n\n        if (error) {\n          Helper.handleActionError(error, promise);\n          return;\n        }\n\n        var exampleResults = [{\n          id: 'ex1',\n          name: 'ex1',\n          type: 'person'\n        }, {\n          id: 'ex2',\n          name: 'ex2',\n          type: 'ExtandBasic'\n        }];\n        res = DataModelsEntry.navigateDataToConstructor(exampleResults);\n        promise.resolve(res); // results replace by res for example\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getDataEx/getDataEx.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getDataEx/index.js":
/*!*************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getDataEx/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./getDataEx.js */ \"./source/plugins/Stemplate/actions/getDataEx/getDataEx.js\");\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getDataEx/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getLanguage/getLanguage.js":
/*!*********************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getLanguage/getLanguage.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"getLanguage\",\n  dependencies: [],\n  schema: [{\n    key: 'name',\n    type: 'string',\n    value: 'unnamed'\n  }],\n  get: function get() {\n    var core = this;\n    return function (data, promise) {\n      core.request.get('/languages/en.json').then(function (_ref) {\n        var results = _ref.results,\n            error = _ref.error;\n\n        if (error) {\n          var notify = {\n            title: core.translate('missing language file'),\n            text: core.translate(\"en.json is missing\"),\n            alertKind: 'error'\n          };\n          core.emit('notify', notify);\n          promise.reject(error);\n          return;\n        }\n\n        core.plugins.translate.set(['dictionary'], results);\n        promise.resolve(results);\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getLanguage/getLanguage.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/getLanguage/index.js":
/*!***************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/getLanguage/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./getLanguage.js */ \"./source/plugins/Stemplate/actions/getLanguage/getLanguage.js\");\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/getLanguage/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/loadSettings/index.js":
/*!****************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/loadSettings/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./load.js */ \"./source/plugins/Stemplate/actions/loadSettings/load.js\");\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/loadSettings/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/loadSettings/load.js":
/*!***************************************************************!*\
  !*** ./source/plugins/Stemplate/actions/loadSettings/load.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"loadSettings\",\n  dependencies: [],\n  schema: [{\n    key: 'name',\n    type: 'string',\n    value: 'unnamed'\n  }],\n  get: function get() {\n    var core = this;\n    return function (data, promise) {\n      var config = {};\n      var menu = {};\n      core.request.post('/loadSettings').then(function (_ref) {\n        var response = _ref.response,\n            results = _ref.results,\n            error = _ref.error;\n\n        if (error && error.data) {\n          var notify = {\n            title: 'Config files',\n            text: error.data.msg,\n            alertKind: 'error'\n          };\n          core.emit('notify', notify);\n          return;\n        } else if (results && results.success) {\n          var _data = results.data; // _.map(data, configItem => {\n          //   config[configItem.key] = {};\n          // });\n\n          menu = _.groupBy(_data, 'key');\n\n          for (var i in menu) {\n            for (var x = 0; x < menu[i].length; x++) {\n              if (menu[i][x].modified) config[i] = menu[i][x].data;else if (menu[i][x].fileName.indexOf('default') > -1) config[i] = menu[i][x].data;\n            }\n          }\n\n          promise.resolve({\n            config: config,\n            menu: menu\n          });\n        }\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/loadSettings/load.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/logIn/index.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/actions/logIn/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./logIn.js */ \"./source/plugins/Stemplate/actions/logIn/logIn.js\");\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/logIn/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/actions/logIn/logIn.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/actions/logIn/logIn.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"logIn\",\n  dependencies: [],\n  schema: [{\n    key: 'name',\n    type: 'string',\n    value: 'unnamed'\n  }],\n  get: function get() {\n    var _this = this;\n\n    var core = this;\n    return function (data, promise) {\n      var BaseApi = core.plugins.Stemplate.BaseApi;\n      core.request.post(BaseApi + '/auth', {\n        \"email\": data.email,\n        \"password\": data.password\n      }).then(function (_ref) {\n        var results = _ref.results,\n            error = _ref.error;\n\n        if (error) {\n          var notify = {\n            title: _this.translate(\"log in fail\"),\n            text: _this.translate(error.data.errors[0]),\n            alertKind: 'error'\n          };\n          core.emit('notify', notify);\n          promise.reject(error);\n          return;\n        }\n\n        promise.resolve(results);\n\n        if (results && results.token && results.user) {\n          localStorage.setItem('authToken', results.token);\n          localStorage.setItem('currentUser', JSON.stringify(results.user));\n        }\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/actions/logIn/logIn.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/components/Component/Component.jsx":
/*!*********************************************************************!*\
  !*** ./source/plugins/Stemplate/components/Component/Component.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = {\n  name: \"Component\",\n  description: 'This is an example of a component',\n  dependencies: ['Stemplate.Mixin'],\n  get: function get(Mixin) {\n    var _ref;\n\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return _ref = {\n      mixins: [Mixin],\n      componentWillUnmount: function componentWillUnmount() {},\n      propsTypes: {\n        text: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          text: core.translate('my first core component')\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentWillMount: function componentWillMount() {\n        this.initUnits();\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {}\n    }, _defineProperty(_ref, \"componentWillUnmount\", function componentWillUnmount() {}), _defineProperty(_ref, \"initUnits\", function initUnits() {\n      this.textColor = core.theme('colors.dark');\n    }), _defineProperty(_ref, \"styles\", function styles(s) {\n      var styles = {\n        root: {\n          color: this.textColor\n        }\n      };\n      return styles[s];\n    }), _defineProperty(_ref, \"renderText\", function renderText() {\n      var text = this.props.text;\n      return React.createElement(\"span\", null, text);\n    }), _defineProperty(_ref, \"render\", function render() {\n      return React.createElement(\"div\", {\n        style: this.styles('root')\n      }, this.renderText());\n    }), _ref;\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/components/Component/Component.jsx?");

/***/ }),

/***/ "./source/plugins/Stemplate/components/Component/index.js":
/*!****************************************************************!*\
  !*** ./source/plugins/Stemplate/components/Component/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Component.jsx */ \"./source/plugins/Stemplate/components/Component/Component.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/components/Component/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/index.js":
/*!*******************************************!*\
  !*** ./source/plugins/Stemplate/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Stemplate.js */ \"./source/plugins/Stemplate/Stemplate.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/Helper/Helper.js":
/*!***********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/Helper/Helper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = {\n  name: \"Helper\",\n  dependencies: [],\n  get: function get() {\n    return {\n      CopyToClipboard: function CopyToClipboard(textToCopy) {\n        var handleError = function handleError(err) {\n          var notify = {\n            title: 'Could not copy text',\n            text: err,\n            alertKind: 'error'\n          };\n          core.emit('notify', notify);\n        };\n\n        if (!textToCopy) return handleError('missing text to copy...');\n\n        var handleSuccess = function handleSuccess() {\n          var text = core.translate('Copied to clipboard successfully!');\n          var notify = {\n            title: textToCopy,\n            text: text,\n            alertKind: 'info'\n          };\n          core.emit('notify', notify);\n        };\n\n        if (navigator.clipboard) {\n          navigator.clipboard.writeText(textToCopy).then(handleSuccess, handleError);\n        } else {\n          var el = document.createElement('textarea');\n          el.value = textToCopy;\n          el.style.display = 'none';\n          document.body.appendChild(el);\n          el.select();\n          document.execCommand('copy');\n          document.body.removeChild(el);\n          handleSuccess();\n        }\n      },\n      capitalizeFirstLetter: function capitalizeFirstLetter(string) {\n        if (!string) return '';else if (!isNaN(string)) return string;else return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();\n      },\n      mapObject: function mapObject(obj) {\n        var _this = this;\n\n        if (obj && !_.isEmpty(obj)) {\n          return _.map(Object.keys(obj), function (key) {\n            return {\n              key: key,\n              data: _typeof(obj[key]) === 'object' ? _this.mapObject(obj[key]) : obj[key],\n              title: _this.openCamelCase(key)\n            };\n          });\n        }\n      },\n      arrayToObject: function arrayToObject(array, itemKey, fieldToGet) {\n        var _this2 = this;\n\n        var getDataType = function getDataType(data) {\n          if (data instanceof Array) {\n            return _this2.arrayToObject(data, itemKey, fieldToGet);\n          } else if (typeof data === 'boolean' || !_.isEmpty(data) || !isNaN(Number(data))) return data;else return {};\n        };\n\n        if (array && !_.isEmpty(array)) {\n          if (array instanceof Array) {\n            var reduced = array.reduce(function (obj, item) {\n              var itemData = item[fieldToGet]; // console.log('itemData => ', itemData);\n\n              obj[item[itemKey]] = getDataType(itemData);\n              return obj;\n            }, {});\n            return reduced;\n          } else {\n            console.info('array is already an object');\n            return array;\n          }\n        }\n      },\n      openCamelCase: function openCamelCase(str) {\n        if (!str) return '';\n\n        if (typeof str === 'string' && !!str.length) {\n          return str.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/\\b[a-z](?=[a-z]{2})/g, function (letter) {\n            return letter.toUpperCase();\n          });\n        }\n\n        return str;\n      },\n      makeCamelCase: function makeCamelCase(str) {\n        if (!str) return '';\n        return str.replace(/(?:^\\w|[A-Z]|\\b\\w|\\s+)/g, function (match, index) {\n          if (+match === 0) return \"\"; // or if (/\\s+/.test(match)) for white spaces\n\n          return index == 0 ? match.toLowerCase() : match.toUpperCase();\n        });\n      },\n      cutString: function cutString(str, num) {\n        if (str.length > num) return str.substring(0, num - 3) + '...';\n        return str;\n      },\n      scrollTopAnimation: function scrollTopAnimation(element) {\n        var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;\n        var currentScrollTop = element.scrollTop;\n        var initScrollTop = currentScrollTop;\n        var intervalId = setInterval(function () {\n          currentScrollTop = currentScrollTop - initScrollTop * 0.01 * speed;\n          element.scrollTop = currentScrollTop;\n\n          if (currentScrollTop == 0) {\n            clearInterval(intervalId);\n          }\n        }, 20);\n        setTimeout(function () {\n          clearInterval(intervalId);\n        }, 3000);\n      },\n      handleActionError: function handleActionError(error, promise) {\n        var err = '';\n\n        if (error.status === 500) {\n          err = core.translate(error.statusText);\n        }\n\n        var notify = {\n          text: err,\n          alertKind: 'error'\n        };\n        core.emit('notify', notify);\n        promise.reject({\n          error: error,\n          message: err\n        });\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/Helper/Helper.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/Helper/index.js":
/*!**********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/Helper/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Helper.js */ \"./source/plugins/Stemplate/modules/Helper/Helper.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/Helper/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/Mixin/Mixin.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/Mixin/Mixin.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var numeral = require('numeral');\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nmodule.exports = {\n  name: \"Mixin\",\n  dependencies: [],\n  get: function get() {\n    var React = core.imports.React;\n    return {\n      componentDidMount: function componentDidMount() {\n        this.isUnmounted = false;\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        this.isUnmounted = true;\n      },\n      safeState: function safeState(state, callback) {\n        if (this.isUnmounted) return;\n        this.setState(state, callback);\n      },\n      getNumberFormatted: function getNumberFormatted(number, format) {\n        //numeraljs.com/\n        // if(_.isNaN(_.toNumber(number))) return `${number}`;\n        // let numberString = numeral(number).format(format || \"0[.]0a\");          \n        // return (numberString);\n        return number;\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/Mixin/Mixin.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/Mixin/index.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/Mixin/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Mixin.js */ \"./source/plugins/Stemplate/modules/Mixin/Mixin.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/Mixin/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/DataModelsEntry.js":
/*!****************************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/DataModelsEntry.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"DataModelsEntry\",\n  dependencies: ['Stemplate.Basic', 'Stemplate.ExtandBasic'],\n  get: function get(Basic, ExtandBasic) {\n    return {\n      navigateDataToConstructor: function navigateDataToConstructor(data) {\n        var modifyData;\n\n        if (Array.isArray(data)) {\n          modifyData = data.map(this.findConstructor);\n        } else {\n          modifyData = [this.findConstructor(data)];\n        }\n\n        return modifyData;\n      },\n      findConstructor: function findConstructor(item) {\n        var constractors = [ExtandBasic];\n        var types = ['ExtandBasic'];\n        var constructor = Basic;\n        var place = types.indexOf(item.type);\n\n        if (place > -1) {\n          constructor = constractors[place];\n        }\n\n        ;\n        var entity = new constructor(item);\n        return entity;\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/DataModelsEntry.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/index.js":
/*!******************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./DataModelsEntry.js */ \"./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/DataModelsEntry.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/DataModelsEntry/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/constructors/Basic/Basic.js":
/*!*********************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/constructors/Basic/Basic.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar count = 0;\nmodule.exports = {\n  name: \"Basic\",\n  dependencies: [],\n  get: function get() {\n    var Basic = function Basic(data) {\n      _classCallCheck(this, Basic);\n\n      this.id = 'basic-' + count;\n      this.itemId = data.id;\n      this.name = data.name;\n      this.type = data.type;\n      count++;\n    };\n\n    return Basic;\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/constructors/Basic/Basic.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/constructors/Basic/index.js":
/*!*********************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/constructors/Basic/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Basic.js */ \"./source/plugins/Stemplate/modules/dataModels/constructors/Basic/Basic.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/constructors/Basic/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/ExtandBasic.js":
/*!*********************************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/ExtandBasic.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar count = 0;\nmodule.exports = {\n  name: \"ExtandBasic\",\n  dependencies: ['Stemplate.Basic'],\n  get: function get(Basic) {\n    var ExtandBasic =\n    /*#__PURE__*/\n    function (_Basic) {\n      _inherits(ExtandBasic, _Basic);\n\n      function ExtandBasic(data) {\n        var _this;\n\n        _classCallCheck(this, ExtandBasic);\n\n        _this = _possibleConstructorReturn(this, (ExtandBasic.__proto__ || Object.getPrototypeOf(ExtandBasic)).call(this, data));\n        _this.id = 'ExtandBasic-' + count;\n        count++;\n        return _this;\n      }\n\n      return ExtandBasic;\n    }(Basic);\n\n    return ExtandBasic;\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/ExtandBasic.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/index.js":
/*!***************************************************************************************!*\
  !*** ./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./ExtandBasic.js */ \"./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/ExtandBasic.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/dataModels/constructors/ExtandBasic/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/rules/index.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/rules/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./rules.js */ \"./source/plugins/Stemplate/modules/rules/rules.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/rules/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/modules/rules/rules.js":
/*!*********************************************************!*\
  !*** ./source/plugins/Stemplate/modules/rules/rules.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Icon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Icon */ \"./node_modules/@material-ui/core/Icon/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  name: \"rules\",\n  dependencies: [],\n  get: function get() {\n    var React = core.imports.React;\n    return {\n      verifyEmail: function verifyEmail(email) {\n        var pattern = /^[-a-z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\'?]+)*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;\n        if (email === undefined || email === '') return false;\n        return Boolean(email && email.match(pattern));\n      },\n      verifyURL: function verifyURL(url) {\n        var pattern = /^(http|https):\\/\\/[^ \"]+$/;\n        if (url === undefined || url === '') return false;\n        return Boolean(url && url.match(pattern));\n      },\n      verifyPhone: function verifyPhone(phone) {\n        // between 9 to 10 digits\n        var pattern = /^[0-9]{9,10}$/;\n        if (phone === undefined || phone === '') return false;\n        return Boolean(phone && phone.match(pattern));\n      },\n      minLength: function minLength(value, min) {\n        // min number of chars\n        min = parseInt(min);\n        return Boolean(value && value.length && value.length >= min);\n      },\n      notEmpty: function notEmpty(value) {\n        return Boolean(value && value.length > 0);\n      },\n      notZero: function notZero(value) {\n        return Boolean(value && value > 0);\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/modules/rules/rules.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/routes.js":
/*!********************************************!*\
  !*** ./source/plugins/Stemplate/routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [{\n  name: 'prices',\n  label: 'Prices',\n  component: 'Stemplate.Prices'\n}, {\n  name: 'home',\n  label: 'Home',\n  component: 'Stemplate.Home'\n}];\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/routes.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/tree.js":
/*!******************************************!*\
  !*** ./source/plugins/Stemplate/tree.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  dictionary: {},\n  isLoggedIn: true,\n  currentUser: {\n    email: \"email@test.com\",\n    first_name: \"first_name\",\n    last_name: \"last_name\"\n  },\n  initLoading: true\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/tree.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Home/Home.jsx":
/*!******************************************************!*\
  !*** ./source/plugins/Stemplate/views/Home/Home.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _Card = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/Card/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  name: \"Home\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  bindings: {},\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: pt.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        return React.createElement(_Card.default, {\n          style: {\n            display: 'inline-flex',\n            padding: 12,\n            flexDirection: 'column',\n            justifyContent: 'center',\n            alignItems: 'center',\n            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)'\n          }\n        }, React.createElement(\"span\", {\n          style: {\n            fontSize: 32,\n            color: core.theme(\"colors.darkGray\")\n          }\n        }, \"Home\"));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Home/Home.jsx?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Home/index.js":
/*!******************************************************!*\
  !*** ./source/plugins/Stemplate/views/Home/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Home.jsx */ \"./source/plugins/Stemplate/views/Home/Home.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Home/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Prices/Prices.jsx":
/*!**********************************************************!*\
  !*** ./source/plugins/Stemplate/views/Prices/Prices.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Card = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/Card/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  name: \"Prices\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        return React.createElement(_Card.default, {\n          style: {\n            display: 'inline-flex',\n            padding: 12,\n            flexDirection: 'column',\n            justifyContent: 'center',\n            alignItems: 'center',\n            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)'\n          }\n        }, React.createElement(\"span\", {\n          style: {\n            fontSize: 32,\n            color: core.theme(\"colors.darkGray\")\n          }\n        }, \"Prices\"));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Prices/Prices.jsx?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Prices/index.js":
/*!********************************************************!*\
  !*** ./source/plugins/Stemplate/views/Prices/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Prices.jsx */ \"./source/plugins/Stemplate/views/Prices/Prices.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Prices/index.js?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Root/Root.jsx":
/*!******************************************************!*\
  !*** ./source/plugins/Stemplate/views/Root/Root.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navOpenedWidth = 180;\nvar navClosedWidth = 60;\nmodule.exports = {\n  name: 'Root',\n  description: '',\n  bindings: {\n    isLoggedIn: ['isLoggedIn'],\n    currentUser: ['currentUser']\n  },\n  dependencies: ['Stemplate.Mixin', 'ui.TopBar', 'ui.Nav', // 'popovers.Notify',\n  // 'popovers.Popup',\n  // 'popovers.Caution',\n  // 'popovers.Lightbox',\n  'ui.Loader', 'snackbar.Snackbar', 'login.Login'],\n  get: function get(Mixin, TopBar, Nav, // Notify, Popup, Caution, Lightbox, \n  Loader, Snackbar, Login) {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      mixins: [Mixin],\n      propsTypes: {\n        path: PropTypes.array\n      },\n      getInitialState: function getInitialState() {\n        return {\n          text: 'Root',\n          activeView: 'home',\n          start: false,\n          navWidth: navClosedWidth\n        };\n      },\n      componentWillMount: function componentWillMount() {\n        this.start();\n      },\n      componentDidMount: function componentDidMount() {\n        core.on('notify', this.addNotification);\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        core.off('notify', this.addNotification);\n      },\n      componentDidCatch: function componentDidCatch(err) {\n        this.setState({\n          error: err && err.toString()\n        });\n      },\n      start: function start() {// core.plugins.Stemplate.getInitialFiles(()=>{\n        //     this.getLanguage();\n        //     this.initialUnits();\n        // });\n        // this.getDataExample();\n      },\n      initialUnits: function initialUnits() {\n        this.colors = {};\n        this.backgrounds = {\n          content: core.theme('backgrounds.content')\n        };\n        this.icons = {};\n        this.units = {\n          appBarHeight: core.dim(\"appBar.height\"),\n          navWidth: core.dim(\"nav.width\")\n        };\n      },\n      getLanguage: function getLanguage() {\n        var _this = this;\n\n        var start = function start() {\n          _this.setState({\n            start: true\n          });\n        };\n\n        core.plugins.Stemplate.run('getLanguage').then(start).catch(start);\n      },\n      getDataExample: function getDataExample() {\n        core.plugins.Stemplate.run('getDataEx').then(function (modifyData) {// console.log('modifyData--> ',modifyData);\n        }).catch(function () {//    console.log('2--> ',2);\n        });\n      },\n      handleNav: function handleNav(route) {\n        core.plugins.router.to('/' + route);\n        this.setState({\n          activeView: route\n        });\n      },\n      handleLoggedIn: function handleLoggedIn() {\n        core.plugins.router.to('/home');\n        this.setState({\n          activeView: 'home'\n        });\n      },\n      onNavigation: function onNavigation(route) {\n        this.setState({\n          activeView: route.name\n        });\n      },\n      styles: function styles(s) {\n        var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        var styles = {\n          root: {\n            width: '100%',\n            height: '100%',\n            overflow: 'hidden',\n            position: 'relative',\n            background: core.theme('backgrounds.light_gray')\n          },\n          content: {\n            position: 'absolute',\n            top: core.dim(\"appBar.height\"),\n            left: this.state.navWidth,\n            transition: 'all 0.25s ease-out 0s',\n            bottom: 0,\n            right: 0,\n            overflow: 'hidden',\n            backgroundColor: core.theme('backgrounds.content'),\n            padding: 12\n          }\n        };\n        return styles[s];\n      },\n      render: function render() {\n        var _this2 = this;\n\n        var _state = this.state,\n            activeView = _state.activeView,\n            navWidth = _state.navWidth;\n        return React.createElement(Login, null, React.createElement(\"div\", {\n          style: this.styles('root')\n        }, React.createElement(TopBar, {\n          handleNavState: function handleNavState() {\n            _this2.setState({\n              navWidth: navWidth === navClosedWidth ? navOpenedWidth : navClosedWidth\n            });\n          },\n          navWidth: navWidth,\n          navIsOpen: navWidth === navOpenedWidth\n        }), React.createElement(Nav, {\n          handleViews: this.handleNav,\n          activeView: activeView,\n          navWidth: navWidth\n        }), React.createElement(Snackbar, null), React.createElement(\"div\", {\n          style: this.styles('content')\n        }, core.router.render())));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Root/Root.jsx?");

/***/ }),

/***/ "./source/plugins/Stemplate/views/Root/index.js":
/*!******************************************************!*\
  !*** ./source/plugins/Stemplate/views/Root/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Root.jsx */ \"./source/plugins/Stemplate/views/Root/Root.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/Stemplate/views/Root/index.js?");

/***/ }),

/***/ "./source/plugins/agent/agent.js":
/*!***************************************!*\
  !*** ./source/plugins/agent/agent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var agent = __webpack_require__(/*! superagent-use */ \"./node_modules/superagent-use/index.js\")(__webpack_require__(/*! superagent */ \"./node_modules/superagent/lib/client.js\"));\n\nvar _config2 = {\n  authHeader: 'authorizationtoken'\n};\nvar authToken = localStorage.getItem('agent.token') || null;\nagent.token = authToken;\n\nfunction setToken(token) {\n  authToken = token;\n  localStorage.setItem('agent.token', token);\n  agent.token = authToken;\n}\n\nagent.setToken = setToken;\nagent.use(function (request) {\n  // if we have a token, set authToken header on request.\n  if (authToken) {\n    request.set(_config2.authHeader, authToken);\n  }\n\n  request.set('Accept', 'application/json'); // if request returns a token, save the token for later.\n\n  request.on('response', function (res) {\n    if (res.status === 401) {\n      agent.emit('unauthorized');\n    }\n\n    if (!res || !res.body) return;\n    var token = res.headers[_config2.authHeader] || res.body[_config2.authHeader];\n\n    if (token) {\n      setToken(token);\n    }\n  });\n});\nmodule.exports = {\n  name: 'agent',\n  init: function init(def, done) {\n    done(agent);\n  },\n  events: ['unauthorized'],\n  config: function config(_config) {\n    Object.assign(_config2, _config);\n    return this;\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/agent/agent.js?");

/***/ }),

/***/ "./source/plugins/agent/index.js":
/*!***************************************!*\
  !*** ./source/plugins/agent/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./agent.js */ \"./source/plugins/agent/agent.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/agent/index.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.state/core.plugin.state.js":
/*!***************************************************************!*\
  !*** ./source/plugins/core.plugin.state/core.plugin.state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: 'state',\n  events: ['change'],\n  docs: 'https://ido-ofir.github.io/core.reactor/',\n  init: function init(definition, done) {\n    var core = this;\n    var state = {};\n    var stateRef = {}; // define based on type in all setters\n\n    core.extend({\n      state: stateRef,\n      setState: function setState(nextState) {\n        plugin.set(nextState);\n      },\n      onStateChange: function onStateChange(listener) {\n        plugin.on('change', listener);\n        return function () {\n          plugin.off('change', listener);\n        };\n      }\n    });\n\n    function find(path, target) {\n      var t;\n      path.map(function (k) {\n        t = target[k];\n      });\n      return t;\n    }\n\n    function defineProperty(path, key, ref, value) {\n      var newPath = path.concat(key);\n      var id = newPath.join('/');\n      state[id] = value;\n      Object.defineProperty(ref, key, {\n        get: function get() {\n          return state[id];\n        },\n        set: function set(value) {\n          define(path, key, ref, value);\n          plugin.emit('change', {\n            value: value,\n            path: path,\n            key: key\n          });\n        },\n        enumerable: true,\n        configurable: true\n      });\n    }\n\n    function objectRef(path, value) {\n      var newPath, id;\n      var ref = {};\n\n      for (var key in value) {\n        define(path, key, ref, value[key]);\n      }\n\n      return ref;\n    }\n\n    function arrayRef(path, value) {\n      var newPath, id;\n      var ref = [];\n\n      for (var key in value) {\n        define(path, key, ref, value[key]);\n      }\n\n      return ref;\n    }\n\n    function define(path, key, ref, value) {\n      var type = core.typeOf(value);\n\n      if (type === 'object') {\n        value = objectRef(path.concat(key), value);\n      } // else if(type === 'array'){\n      //     value = arrayRef(path, value)\n      // }\n\n\n      defineProperty(path, key, ref, value);\n    }\n\n    var plugin = {\n      define: function define() {},\n      state: state,\n      set: function set(nextState) {\n        for (var key in nextState) {\n          define([], key, stateRef, nextState[key]);\n        }\n\n        return plugin;\n      }\n    };\n    done(plugin);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.state/core.plugin.state.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.state/index.js":
/*!***************************************************!*\
  !*** ./source/plugins/core.plugin.state/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./core.plugin.state.js */ \"./source/plugins/core.plugin.state/core.plugin.state.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.state/index.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.widget/core.plugin.widget.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/core.plugin.widget/core.plugin.widget.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: 'core.plugin.widget',\n  tree: {},\n  init: function init(definition, done) {\n    var core = this;\n    var plugin = {};\n    core.extend({\n      widgets: {},\n      Widget: function Widget(options) {\n        var type = core.typeOf(options);\n\n        if (type === 'object') {\n          var id = options.id;\n\n          if (!id) {\n            throw new Error(\"core.Widget() - a widget must have an id\");\n          }\n\n          var widget = Object.create(plugin.select(id));\n\n          widget.render = function (render) {\n            return plugin.bind(id, render);\n          };\n\n          core.widgets[id] = widget;\n          widget.set(options.data);\n          return widget;\n        } else if (type === 'array') {\n          return options.map(core.Widget);\n        }\n\n        throw new Error(\"core.Widget() - argument must be an object or an array, got '\".concat(type, \"'\"));\n      }\n    });\n    done(plugin);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.widget/core.plugin.widget.js?");

/***/ }),

/***/ "./source/plugins/core.plugin.widget/index.js":
/*!****************************************************!*\
  !*** ./source/plugins/core.plugin.widget/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./core.plugin.widget.js */ \"./source/plugins/core.plugin.widget/core.plugin.widget.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/core.plugin.widget/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/components/Date/Date.jsx":
/*!********************************************************!*\
  !*** ./source/plugins/inputs/components/Date/Date.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { MuiPickersUtilsProvider } from 'material-ui-pickers';\n// pick utils\n// import MomentUtils from '@date-io/moment';\n// import { DatePicker } from 'material-ui-pickers';\nmodule.exports = {\n  name: \"Date\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        var _props = this.props,\n            value = _props.value,\n            onChange = _props.onChange,\n            label = _props.label;\n        return React.createElement(\"input\", {\n          type: \"date\",\n          onChange: onChange,\n          value: value\n        }) // <MuiPickersUtilsProvider utils={MomentUtils}>\n        // <DatePicker\n        //     style={{ marginTop: 10, width: '100%' }}\n        //     value={ value }\n        //     onChange={ onChange }\n        //     showTodayButton\n        //     label={ label }\n        // />\n        // </MuiPickersUtilsProvider>\n        ;\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Date/Date.jsx?");

/***/ }),

/***/ "./source/plugins/inputs/components/Date/index.js":
/*!********************************************************!*\
  !*** ./source/plugins/inputs/components/Date/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Date.jsx */ \"./source/plugins/inputs/components/Date/Date.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Date/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/components/Number/Number.jsx":
/*!************************************************************!*\
  !*** ./source/plugins/inputs/components/Number/Number.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"Number\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        var _props = this.props,\n            required = _props.required,\n            value = _props.value,\n            _onChange = _props.onChange,\n            label = _props.label,\n            id = _props.id,\n            style = _props.style;\n        return React.createElement(_core.TextField, {\n          required: required,\n          autoComplete: 'off',\n          id: id,\n          value: value,\n          label: label,\n          style: _extends({\n            width: '100%',\n            marginTop: 10\n          }, style),\n          onChange: function onChange(e) {\n            return _onChange(e.target.value);\n          },\n          type: 'number'\n        });\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Number/Number.jsx?");

/***/ }),

/***/ "./source/plugins/inputs/components/Number/index.js":
/*!**********************************************************!*\
  !*** ./source/plugins/inputs/components/Number/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Number.jsx */ \"./source/plugins/inputs/components/Number/Number.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Number/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/components/Select/Select.jsx":
/*!************************************************************!*\
  !*** ./source/plugins/inputs/components/Select/Select.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"Select\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        var _props = this.props,\n            value = _props.value,\n            _onChange = _props.onChange,\n            label = _props.label,\n            id = _props.id,\n            options = _props.options,\n            style = _props.style;\n        return React.createElement(_core.Select, {\n          id: id,\n          label: label,\n          value: value || '',\n          style: _extends({\n            width: '100%'\n          }, style),\n          onChange: function onChange(e) {\n            return _onChange(e.target.value);\n          }\n        }, options.map(function (option) {\n          return React.createElement(_core.MenuItem, {\n            key: option,\n            value: option\n          }, option);\n        }));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Select/Select.jsx?");

/***/ }),

/***/ "./source/plugins/inputs/components/Select/index.js":
/*!**********************************************************!*\
  !*** ./source/plugins/inputs/components/Select/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Select.jsx */ \"./source/plugins/inputs/components/Select/Select.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/Select/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/components/String/String.jsx":
/*!************************************************************!*\
  !*** ./source/plugins/inputs/components/String/String.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nmodule.exports = {\n  name: \"String\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        var _props = this.props,\n            required = _props.required,\n            value = _props.value,\n            _onChange = _props.onChange,\n            label = _props.label,\n            id = _props.id,\n            style = _props.style;\n        return React.createElement(_core.TextField, {\n          required: required,\n          autoComplete: 'off',\n          id: id,\n          value: value,\n          label: label,\n          style: style,\n          onChange: function onChange(e) {\n            return _onChange(e.target.value);\n          },\n          type: 'string'\n        });\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/String/String.jsx?");

/***/ }),

/***/ "./source/plugins/inputs/components/String/index.js":
/*!**********************************************************!*\
  !*** ./source/plugins/inputs/components/String/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./String.jsx */ \"./source/plugins/inputs/components/String/String.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/inputs/components/String/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/index.js":
/*!****************************************!*\
  !*** ./source/plugins/inputs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./inputs.js */ \"./source/plugins/inputs/inputs.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/inputs/index.js?");

/***/ }),

/***/ "./source/plugins/inputs/inputs.js":
/*!*****************************************!*\
  !*** ./source/plugins/inputs/inputs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  name: 'inputs',\n  components: [__webpack_require__(/*! ./components/String */ \"./source/plugins/inputs/components/String/index.js\"), __webpack_require__(/*! ./components/Number */ \"./source/plugins/inputs/components/Number/index.js\"), __webpack_require__(/*! ./components/Select */ \"./source/plugins/inputs/components/Select/index.js\"), __webpack_require__(/*! ./components/Date */ \"./source/plugins/inputs/components/Date/index.js\")]\n};\n\n//# sourceURL=webpack:///./source/plugins/inputs/inputs.js?");

/***/ }),

/***/ "./source/plugins/interact/components/Interaction/Interaction.jsx":
/*!************************************************************************!*\
  !*** ./source/plugins/interact/components/Interaction/Interaction.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"Interaction\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes,\n        ReactDom = _core$imports.ReactDom;\n    return {\n      propsTypes: {\n        refs: PropTypes.object\n      },\n      getInitialState: function getInitialState() {\n        return {\n          isHovered: false,\n          isPressed: false,\n          isFocused: false\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        var element = this.element = ReactDom.findDOMNode(this);\n        element.addEventListener('mouseenter', this.onMouseEnter);\n        element.addEventListener('mouseleave', this.onMouseLeave);\n        element.addEventListener('mousedown', this.onMouseDown);\n        element.addEventListener('focus', this.onFocus);\n        element.addEventListener('blur', this.onBlur);\n        document.body.addEventListener('mouseleave', this.onMouseLeave);\n        document.body.addEventListener('mouseup', this.onMouseUp);\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        this.element.removeEventListener('mouseenter', this.onMouseEnter);\n        this.element.removeEventListener('mouseleave', this.onMouseLeave);\n        this.element.removeEventListener('mousedown', this.onMouseDown);\n        this.element.removeEventListener('focus', this.onFocus);\n        this.element.removeEventListener('blur', this.onBlur);\n        document.body.removeEventListener('mouseleave', this.onMouseLeave);\n        document.body.removeEventListener('mouseup', this.onMouseUp);\n      },\n      onMouseEnter: function onMouseEnter() {\n        var onHover = this.props.onHover;\n        this.setState({\n          isHovered: true\n        });\n        onHover && onHover(true, this);\n      },\n      onMouseLeave: function onMouseLeave() {\n        if (this.state.isHovered) {\n          this.setState({\n            isHovered: false\n          });\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        this.setState({\n          isPressed: true\n        });\n      },\n      onMouseUp: function onMouseUp() {\n        if (this.state.isPressed) {\n          this.setState({\n            isPressed: false\n          });\n        }\n      },\n      onFocus: function onFocus() {\n        this.setState({\n          isFocused: true\n        });\n      },\n      onBlur: function onBlur() {\n        if (this.state.isFocused) {\n          this.setState({\n            isFocused: false\n          });\n        }\n      },\n      render: function render() {\n        return this.props.children(this.state);\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/interact/components/Interaction/Interaction.jsx?");

/***/ }),

/***/ "./source/plugins/interact/components/Interaction/index.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/interact/components/Interaction/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Interaction.jsx */ \"./source/plugins/interact/components/Interaction/Interaction.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/interact/components/Interaction/index.js?");

/***/ }),

/***/ "./source/plugins/interact/index.js":
/*!******************************************!*\
  !*** ./source/plugins/interact/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./interact.js */ \"./source/plugins/interact/interact.js\");\n\n//# sourceURL=webpack:///./source/plugins/interact/index.js?");

/***/ }),

/***/ "./source/plugins/interact/interact.js":
/*!*********************************************!*\
  !*** ./source/plugins/interact/interact.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  name: 'interaction',\n  components: [__webpack_require__(/*! ./components/Interaction */ \"./source/plugins/interact/components/Interaction/index.js\")],\n  init: function init(definition, done) {\n    var core = this;\n    var _interact = {};\n    core.extend({\n      interact: function interact(render) {\n        var Interaction = _interact.components.Interaction;\n        var React = core.imports.React;\n        return React.createElement(Interaction, null, render);\n      }\n    });\n    done(_interact);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/interact/interact.js?");

/***/ }),

/***/ "./source/plugins/login/components/Login/Login.jsx":
/*!*********************************************************!*\
  !*** ./source/plugins/login/components/Login/Login.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nvar _root;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = {\n  name: \"Login\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: ['agent'],\n  get: function get(agent) {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {\n          email: 'idoofirs@gmail.com',\n          password: '123',\n          name: 'Koko',\n          signup: false,\n          ranAuth: false,\n          error: null,\n          loading: false\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        var _this = this;\n\n        var login = core.plugins.login;\n        login.auth(function (e) {\n          return _this.setState({\n            ranAuth: true\n          });\n        });\n      },\n      componentWillUnmount: function componentWillUnmount() {},\n      onLogin: function onLogin(user) {\n        if (this.props.onLogin) {\n          this.props.onLogin(user);\n        }\n      },\n      handleChange: function handleChange(stateValue) {\n        var _this2 = this;\n\n        return function (event) {\n          var _this2$setState;\n\n          _this2.setState((_this2$setState = {}, _defineProperty(_this2$setState, stateValue, event.target.value), _defineProperty(_this2$setState, \"error\", false), _this2$setState));\n        };\n      },\n      nameField: function nameField() {\n        var label = core.translate('name', 'Name');\n        var login = core.plugins.login;\n\n        var pressEnter = function pressEnter(e) {\n          if (e.charCode === 13 || e.key === 'Enter') {\n            login.submit();\n          }\n        };\n\n        return React.createElement(_core.FormControl, {\n          style: styles.formControl\n        }, React.createElement(_core.FormHelperText, {\n          id: 'login_email'\n        }, label), React.createElement(_core.TextField, {\n          required: true,\n          autoComplete: 'off',\n          id: 'login_name',\n          value: this.state.name,\n          style: styles.textField,\n          onChange: this.handleChange('name'),\n          margin: \"normal\",\n          type: 'text',\n          autoFocus: true,\n          onKeyPress: pressEnter\n        }));\n      },\n      emailField: function emailField() {\n        var label = core.translate('email', 'Email');\n        var login = core.plugins.login;\n\n        var pressEnter = function pressEnter(e) {\n          if (e.charCode === 13 || e.key === 'Enter') {\n            login.submit();\n          }\n        };\n\n        return React.createElement(_core.FormControl, {\n          style: styles.formControl\n        }, React.createElement(_core.FormHelperText, {\n          id: 'login_email'\n        }, label), React.createElement(_core.TextField, {\n          required: true,\n          autoComplete: 'off',\n          id: 'login_email',\n          value: this.state.email,\n          style: styles.textField,\n          onChange: this.handleChange('email'),\n          margin: \"normal\",\n          type: 'text',\n          autoFocus: true,\n          onKeyPress: pressEnter\n        }));\n      },\n      passwordField: function passwordField() {\n        var label = core.translate('password', 'Password');\n        var login = core.plugins.login;\n\n        var pressEnter = function pressEnter(e) {\n          if (e.charCode === 13 || e.key === 'Enter') {\n            login.submit();\n          }\n        };\n\n        return React.createElement(_core.FormControl, {\n          style: styles.formControl\n        }, React.createElement(_core.FormHelperText, {\n          id: 'login_password'\n        }, label), React.createElement(_core.TextField, {\n          required: true,\n          autoComplete: 'off',\n          id: 'login_password',\n          value: this.state.password,\n          style: styles.textField,\n          onChange: this.handleChange('password'),\n          margin: \"normal\",\n          type: 'password',\n          onKeyPress: pressEnter\n        }));\n      },\n      errorWarning: function errorWarning() {\n        var login = core.plugins.login;\n        return login.bind('error', function (error) {\n          return error ? React.createElement(_core.Typography, {\n            variant: \"body1\",\n            component: \"div\",\n            color: 'error',\n            noWrap: true,\n            style: styles.errorMsg\n          }, core.translate('usernameOrPasswordAreIncorrect', 'Username or Password are incorrect')) : null;\n        });\n      },\n      forgotPwd: function forgotPwd() {\n        core.plugins.popovers.openPopup({\n          title: core.translate('forgotPassword', 'Forgot Password'),\n          body: React.createElement(ForgotPassword, null),\n          bodyStyle: {\n            minWidth: 530,\n            minHeight: 'unset',\n            padding: '0px 22px'\n          },\n          okButton: {\n            btnTitle: core.translate('send', 'Send'),\n            btnFunc: function btnFunc(data) {\n              core.emit('ForgotPassword.action.play', data);\n            }\n          }\n        });\n      },\n      clear: function clear() {\n        this.setState({\n          email: '',\n          password: ''\n        });\n      },\n      renderLogo: function renderLogo() {\n        return React.createElement(_core.Card, {\n          style: _extends({}, styles.media, {\n            backgroundColor: core.theme('backgrounds.primary')\n          }),\n          title: \"Simple Switch\"\n        }, React.createElement(_core.Typography, {\n          variant: \"body1\",\n          component: \"span\",\n          style: _extends({}, styles.mediaHeader, {\n            color: core.theme('colors.white')\n          })\n        }, core.translate('Login', 'Login')));\n      },\n      renderButtons: function renderButtons() {\n        var _this3 = this;\n\n        var login = core.plugins.login;\n        var _state = this.state,\n            email = _state.email,\n            password = _state.password,\n            name = _state.name;\n\n        var pressEnter = function pressEnter(e) {\n          if (e.charCode === 13 || e.key === 'Enter') {\n            _this3.logIn();\n          }\n        };\n\n        return React.createElement(_core.CardActions, {\n          style: styles.buttonsLine\n        }, login.bind('isInSignUp', function (isInSignUp) {\n          return React.createElement(_core.Button, {\n            size: \"small\",\n            variant: \"flat\",\n            color: \"primary\",\n            style: _extends({}, styles.button, {\n              color: core.theme('colors.secondary')\n            }),\n            onClick: function onClick() {\n              return login.set('isInSignUp', !isInSignUp);\n            },\n            onKeyPress: function onKeyPress(e) {\n              if (e.charCode === 13 || e.key === 'Enter') {\n                login.set('isInSignUp', !isInSignUp);\n              }\n            }\n          }, core.translate(isInSignUp ? 'Log In' : 'Sign Up'));\n        }), login.bind('isLoading', function (isLoading) {\n          return React.createElement(_core.Button, {\n            size: \"small\",\n            variant: \"contained\" // color=\"primary\"\n            ,\n            style: _extends({}, styles.button, {\n              color: core.theme('colors.white'),\n              backgroundColor: core.theme('colors.secondary')\n            }),\n            onClick: function onClick(e) {\n              return login.submit({\n                email: email,\n                password: password,\n                name: name\n              });\n            },\n            onKeyPress: pressEnter,\n            disabled: isLoading || email.length < 1 || password.length < 1\n          }, isLoading ? React.createElement(_core.CircularProgress, {\n            size: 20,\n            thickness: 4,\n            color: 'primary'\n          }) : core.translate('Sign in'));\n        }));\n      },\n      renderForgotPwd: function renderForgotPwd() {\n        return React.createElement(_core.CardActions, {\n          style: styles.forgetPwdLine\n        }, React.createElement(_core.Button, {\n          size: \"small\",\n          variant: \"flat\",\n          color: \"primary\",\n          onClick: this.forgotPwd,\n          style: styles.ForgotPasswordButton\n        }, React.createElement(\"span\", {\n          style: _extends({}, styles.forgetPwdText, {\n            color: core.theme('colors.secondary')\n          })\n        }, core.translate('forgotYourPassword', 'Forgot your password?'))));\n      },\n      renderContent: function renderContent() {\n        var _this4 = this;\n\n        var login = core.plugins.login;\n        return React.createElement(_core.CardContent, {\n          style: styles.content\n        }, login.bind('isInSignUp', function (isInSignUp) {\n          return isInSignUp ? _this4.nameField() : null;\n        }), this.emailField(), this.passwordField(), this.errorWarning());\n      },\n      render: function render() {\n        var _this5 = this;\n\n        var login = core.plugins.login;\n        var children = this.props.children;\n        var ranAuth = this.state.ranAuth;\n\n        if (!ranAuth) {\n          return null;\n        }\n\n        return login.bind(['user'], function (user) {\n          return user ? children : React.createElement(\"div\", {\n            className: 'loginBackground',\n            style: styles.root\n          }, React.createElement(\"form\", null, React.createElement(_core.Card, {\n            style: styles.card\n          }, _this5.renderLogo(), _this5.renderContent(), _this5.renderButtons(), _this5.renderForgotPwd())));\n        });\n      },\n      renderLogin: function renderLogin() {\n        var _this6 = this;\n\n        var _state2 = this.state,\n            signup = _state2.signup,\n            error = _state2.error;\n        return React.createElement(\"div\", {\n          style: {\n            position: 'absolute',\n            top: 0,\n            left: 0,\n            right: 0,\n            bottom: 0,\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            flexDirection: 'column'\n          }\n        }, React.createElement(\"div\", {\n          style: {\n            width: '300px',\n            background: '#ddd',\n            padding: 26,\n            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'\n          }\n        }, signup ? React.createElement(\"input\", {\n          name: \"name\" // autoComplete=\"username\"\n          ,\n          style: {\n            marginBottom: 26,\n            width: '100%',\n            borderRadius: '6px',\n            height: '34px',\n            padding: '0 10px'\n          },\n          type: \"text\",\n          placeholder: \"Name\",\n          value: this.state.name,\n          onChange: function onChange(e) {\n            return _this6.setState({\n              name: e.target.value\n            });\n          }\n        }) : null, React.createElement(\"input\", {\n          name: \"email\" // autoComplete=\"email\" \n          ,\n          style: {\n            marginBottom: 26,\n            width: '100%',\n            borderRadius: '6px',\n            height: '34px',\n            padding: '0 10px'\n          },\n          type: \"email\",\n          placeholder: \"Email\",\n          value: this.state.email,\n          onChange: function onChange(e) {\n            return _this6.setState({\n              email: e.target.value\n            });\n          }\n        }), React.createElement(\"input\", {\n          name: \"password\" // autoComplete=\"current-password\"\n          ,\n          onKeyDown: function onKeyDown(e) {\n            if (e.keyCode === 13) {\n              _this6.submit();\n            }\n          },\n          style: {\n            marginBottom: 26,\n            width: '100%',\n            borderRadius: '6px',\n            height: '34px',\n            padding: '0 10px'\n          },\n          type: \"password\",\n          placeholder: \"Password\",\n          value: this.state.password,\n          onChange: function onChange(e) {\n            return _this6.setState({\n              password: e.target.value\n            });\n          }\n        }), React.createElement(\"button\", {\n          style: {\n            borderRadius: '6px',\n            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',\n            border: '0',\n            marginBottom: 18,\n            height: '34px',\n            width: '100%',\n            color: '#fff',\n            cursor: 'pointer',\n            fontSize: '14px',\n            outline: 0,\n            background: 'rgb(67, 69, 136)'\n          },\n          onClick: this.submit\n        }, signup ? 'Sign Up' : 'Log In'), React.createElement(\"div\", {\n          style: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'space-between',\n            fontSize: '14px'\n          }\n        }, React.createElement(\"div\", null, React.createElement(\"a\", {\n          href: \"#\",\n          onClick: function onClick(e) {\n            _this6.setState({\n              signup: !signup\n            });\n\n            e.preventDefault();\n          }\n        }, signup ? 'Log In' : 'Sign Up')), React.createElement(\"div\", null, React.createElement(\"span\", {\n          style: {\n            color: '#e63535',\n            fontSize: '14px'\n          }\n        }, error)))));\n      }\n    };\n  }\n};\nvar styles = {\n  root: (_root = {\n    height: '100%',\n    width: '100%',\n    overflow: \"hidden\",\n    display: \"flex\",\n    flexDirection: 'column',\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    left: 0,\n    bottom: 0\n  }, _defineProperty(_root, \"display\", 'flex'), _defineProperty(_root, \"justifyContent\", 'center'), _defineProperty(_root, \"alignItems\", 'center'), _defineProperty(_root, \"flexDirection\", 'column'), _root),\n  card: {\n    width: 290\n  },\n  content: {\n    padding: '22px 22px 0px 22px'\n  },\n  formControl: {\n    width: '100%'\n  },\n  media: {\n    height: 80,\n    display: 'flex',\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  mediaHeader: {\n    fontSize: 14,\n    fontFamily: \"Roboto, sans-serif !important\",\n    fontStyle: \"italic\",\n    marginTop: 5\n  },\n  buttonsLine: {\n    display: \"flex\",\n    flexDirection: \"row\",\n    justifyContent: \"flex-end\",\n    margin: '6px'\n  },\n  button: {\n    width: 85,\n    height: 36\n  },\n  forgetPwdLine: {\n    display: \"flex\",\n    flexDirection: \"row\",\n    justifyContent: \"center\",\n    margin: '0px 6px 22px'\n  },\n  ForgotPasswordButton: {// padding: '7px 0px',\n  },\n  forgetPwdText: {\n    fontSize: 10\n  },\n  textField: {\n    flex: 1,\n    width: '100%',\n    marginTop: 5,\n    marginBottom: 15\n  },\n  errorMsg: {\n    color: 'red',\n    display: 'flex',\n    alignItems: 'center',\n    height: 36\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/login/components/Login/Login.jsx?");

/***/ }),

/***/ "./source/plugins/login/components/Login/index.js":
/*!********************************************************!*\
  !*** ./source/plugins/login/components/Login/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Login.jsx */ \"./source/plugins/login/components/Login/Login.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/login/components/Login/index.js?");

/***/ }),

/***/ "./source/plugins/login/index.js":
/*!***************************************!*\
  !*** ./source/plugins/login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./login.js */ \"./source/plugins/login/login.js\");\n\n//# sourceURL=webpack:///./source/plugins/login/index.js?");

/***/ }),

/***/ "./source/plugins/login/login.js":
/*!***************************************!*\
  !*** ./source/plugins/login/login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  name: 'login',\n  components: [__webpack_require__(/*! ./components/Login */ \"./source/plugins/login/components/Login/index.js\")],\n  tree: {\n    user: null,\n    error: null,\n    isInSignUp: false,\n    isLoading: false\n  },\n  dependencies: ['agent'],\n  events: ['login'],\n  init: function init(definition, done) {\n    var core = this;\n    var agent = core.plugins.agent;\n    var _login = {\n      login: function login(data) {\n        // email, password\n        if (_login.get('error')) {\n          _login.set('error', null);\n        }\n\n        agent.post('/login').send(data).end(function (err, res) {\n          if (err) {\n            return _login.set('error', res.text || res.statusText || String(err));\n          }\n\n          var user = res.body.user;\n\n          if (user) {\n            _login.set('user', user);\n\n            _login.emit('login', user); // setTimeout(e => {\n            //     history.replaceState({}, document.title, '/');\n            // }, 20)\n\n          }\n        });\n      },\n      logout: function logout() {\n        _login.set('error', null);\n\n        _login.set('user', null);\n\n        _login.emit('logout');\n\n        agent.setToken();\n      },\n      signup: function signup(data) {\n        // name, email, password\n        if (_login.get('error')) {\n          _login.set('error', null);\n        }\n\n        agent.post('/signup').send(data).end(function (err, res) {\n          if (err) {\n            return _login.set('error', res.text || res.statusText || String(err));\n          }\n\n          var user = res.body.user;\n\n          if (user) {\n            _login.set('user', user);\n\n            _login.emit('signup', user);\n\n            _login.emit('login', user);\n          }\n        });\n      },\n      submit: function submit(data) {\n        _login.get('isInSignUp') ? _login.signup(data) : _login.login(data);\n      },\n      auth: function auth(cb) {\n        agent.post('/auth').end(function (err, res) {\n          var user = res.body && res.body.user;\n\n          if (!err && user) {\n            _login.set('user', user);\n\n            _login.emit('login', user); // setTimeout(e => {\n            //     history.replaceState({}, document.title, '/');\n            // }, 20)\n\n          }\n\n          cb && cb(err, user);\n        });\n      },\n      onUnauthorized: function onUnauthorized() {\n        if (_login.get('user')) {\n          _login.set('user', null);\n        }\n      }\n    };\n    agent.on('unauthorized', _login.onUnauthorized);\n    done(_login);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/login/login.js?");

/***/ }),

/***/ "./source/plugins/menu/components/Menu/Menu.jsx":
/*!******************************************************!*\
  !*** ./source/plugins/menu/components/Menu/Menu.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/Menu/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  name: \"Menu\",\n  description: '',\n  propTypes: {// name: 'string',\n    // title: { type: 'string' },\n    // isOpen: false,\n    // onChange(){}\n  },\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {// title: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {};\n      },\n      getInitialState: function getInitialState() {\n        return {\n          anchorEl: null\n        };\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      render: function render() {\n        // let { id } = this.props;\n        return core.menu.bind([], function (menu) {\n          return React.createElement(_Menu.default, {\n            id: 'core.menu',\n            anchorEl: menu.getAnchorElement(),\n            open: menu.isOpen,\n            onClose: menu.close\n          }, menu.getContent());\n        });\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/menu/components/Menu/Menu.jsx?");

/***/ }),

/***/ "./source/plugins/menu/components/Menu/index.js":
/*!******************************************************!*\
  !*** ./source/plugins/menu/components/Menu/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Menu.jsx */ \"./source/plugins/menu/components/Menu/Menu.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/menu/components/Menu/index.js?");

/***/ }),

/***/ "./source/plugins/menu/index.js":
/*!**************************************!*\
  !*** ./source/plugins/menu/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./menu.js */ \"./source/plugins/menu/menu.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/menu/index.js?");

/***/ }),

/***/ "./source/plugins/menu/menu.js":
/*!*************************************!*\
  !*** ./source/plugins/menu/menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  name: 'menu',\n  components: [__webpack_require__(/*! ./components/Menu */ \"./source/plugins/menu/components/Menu/index.js\")],\n  tree: {\n    isOpen: false,\n    getContent: function getContent() {\n      return null;\n    },\n    getAnchorElement: function getAnchorElement() {\n      return null;\n    },\n    close: function close() {\n      core.menu.close();\n    }\n  },\n  init: function init(definition, done) {\n    var core = this;\n    var menu = {\n      open: function open(anchorElement, content) {\n        menu.set('isOpen', true);\n        menu.set('getContent', function () {\n          return content;\n        });\n        menu.set('getAnchorElement', function () {\n          return anchorElement;\n        });\n      },\n      close: function close() {\n        menu.set('isOpen', false);\n      }\n    };\n    core.extend({\n      menu: menu\n    });\n    done(menu);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/menu/menu.js?");

/***/ }),

/***/ "./source/plugins/popup/index.js":
/*!***************************************!*\
  !*** ./source/plugins/popup/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./popup.js */ \"./source/plugins/popup/popup.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/popup/index.js?");

/***/ }),

/***/ "./source/plugins/popup/popup.js":
/*!***************************************!*\
  !*** ./source/plugins/popup/popup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// custom popup\n// closeAll  -- logout\n// closeSelector\n// closeFunction\n// esc key\nfunction match(a, b) {\n  if (a === b) {\n    return true;\n  }\n\n  if (!a || !b) {\n    return false;\n  }\n\n  var typeA = _typeof(a);\n\n  var typeB = _typeof(b);\n\n  if (typeA !== typeB) {\n    return false;\n  }\n\n  if (typeA !== 'object') {\n    return false;\n  }\n\n  if (Array.isArray(a)) {\n    if (!Array.isArray(b)) {\n      return false;\n    }\n\n    for (var i = 0; i < a.length; i++) {\n      if (!match(a[i], b[i])) {\n        return false;\n      }\n    }\n  } else {\n    if (Array.isArray(b)) {\n      return false;\n    }\n\n    for (var m in a) {\n      if (!match(a[m], b[m])) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = {\n  name: 'popup',\n  tree: {\n    popups: []\n  },\n  types: [{\n    name: 'popup',\n    schema: [{\n      key: 'isOpen',\n      type: 'boolean',\n      defaultValue: false\n    }, {\n      key: 'title',\n      type: 'string',\n      defaultValue: 'Popup'\n    }, {\n      key: 'actions',\n      type: 'array',\n      defaultValue: []\n    }, {\n      key: 'render',\n      type: 'function'\n    }, {\n      key: 'renderBody',\n      type: 'function',\n      defaultValue: function defaultValue() {\n        return 'Popup';\n      }\n    }]\n  }],\n  components: [{\n    name: 'PopupInstance',\n    get: function get() {\n      var core = this;\n      var React = core.imports.React;\n      return {\n        shouldComponentUpdate: function shouldComponentUpdate(nextProps) {\n          return nextProps.popup !== this.props.popup;\n        },\n        render: function render() {\n          var popup = this.props.popup;\n\n          if (!popup) {\n            return null;\n          }\n\n          if (popup.render) {\n            return popup.render(popup);\n          }\n\n          var actions = popup.actions || popup.getActions && popup.getActions(popup) || [];\n          return React.createElement(_core.Dialog, {\n            title: popup.title,\n            actions: actions,\n            open: popup.isOpen,\n            onClose: function onClose(e) {\n              return popup.close();\n            }\n          }, popup.renderBody(popup));\n        }\n      };\n    }\n  }],\n  views: [{\n    name: 'Popup',\n    dependencies: ['popup.PopupInstance'],\n    bindings: {\n      popups: 'popups'\n    },\n    get: function get(PopupInstance) {\n      var core = this;\n      var React = core.imports.React;\n      return {\n        render: function render() {\n          return React.createElement(\"div\", {\n            style: _extends({}, this.props.style)\n          }, this.props.popups.map(function (popup, index) {\n            return React.createElement(PopupInstance, {\n              key: index,\n              popup: popup,\n              index: index\n            });\n          }));\n        }\n      };\n    }\n  }],\n  init: function init(definition, done) {\n    var core = this;\n    var defaults = {\n      index: 0,\n      isOpen: false,\n      state: {},\n      get: function get(path) {\n        if (!Array.isArray(path)) {\n          path = [path];\n        }\n\n        return plugin.get(['popups', this.index, 'state'].concat(path));\n      },\n      setState: function setState(object, value) {\n        var statePath = ['popups', this.index, 'state'];\n        var state = Object.assign({}, plugin.get(statePath), object);\n        plugin.set(statePath, state);\n      },\n      set: function set(path, value) {\n        if (!Array.isArray(path)) {\n          path = [path];\n        }\n\n        plugin.set(['popups', this.index].concat(path), value);\n      },\n      title: 'Popup',\n      renderBody: function renderBody() {\n        return 'Popup';\n      },\n      submit: function submit(popup) {\n        popup.close();\n      },\n      close: function close() {\n        plugin.close(this.index);\n      }\n    };\n    var plugin = {\n      open: function open(popup, options) {\n        var popups = _toConsumableArray(plugin.get(['popups']));\n\n        if (core.isFunction(popup)) {\n          var index = popups.length;\n          popup = _extends({\n            renderBody: popup,\n            isOpen: true,\n            close: plugin.close,\n            index: index\n          }, options);\n        } else {\n          if (popup.id) {\n            var existing = plugin.get(['popups', {\n              id: popup.id\n            }]);\n\n            if (existing) {\n              popup = Object.assign({}, existing, popup);\n              plugin.set(['popups', {\n                id: popup.id\n              }], popup);\n              return popup;\n            }\n          }\n\n          var popupSubmit = popup.submit || defaults.submit;\n          popup = Object.assign({}, defaults, popup, {\n            isOpen: true,\n            submit: function submit() {\n              popupSubmit(plugin.get(['popups', popup.index]));\n            }\n          });\n        }\n\n        var reopened = popups.find(function (instance, i) {\n          if (!instance.isOpen) {\n            popup.index = i;\n            popups[i] = popup;\n            return true;\n          }\n        });\n\n        if (!reopened) {\n          popup.index = popups.length;\n          popups.push(popup);\n        }\n\n        plugin.set(['popups'], popups);\n        return popup;\n      },\n      close: function close(selector) {\n        var type = core.typeOf(selector);\n\n        if (type === 'undefined') {\n          // no selector - just close the last popup that was opened\n          plugin.set(['popups', plugin.getLastOpenedIndex(), 'isOpen'], false);\n        } else if (type === 'number') {\n          // selector is a number - close the popup at this index\n          plugin.set(['popups', selector, 'isOpen'], false);\n        } else if (type === 'object') {\n          // selector is an object - close all popup that match this object ( all the keys of selector have the same value on the popup )\n          plugin.set(['popups'], plugin.get(['popups']).map(function (popup) {\n            if (match(selector, popup)) {\n              return _extends({}, popup, {\n                isOpen: false\n              });\n            }\n\n            return popup;\n          }));\n        } else if (type === 'function') {\n          // selector is a function - use it as a filter function.\n          plugin.set(['popups'], plugin.get(['popups']).map(function (popup) {\n            if (selector(popup)) {\n              return _extends({}, popup, {\n                isOpen: false\n              });\n            }\n\n            return popup;\n          }));\n        }\n      },\n      getLastOpenedPopup: function getLastOpenedPopup(popups) {\n        var reversed = _toConsumableArray(popups).reverse();\n\n        return reversed.find(function (i) {\n          return i.isOpen;\n        });\n      },\n      getLastOpenedIndex: function getLastOpenedIndex() {\n        var popups = plugin.get(['popups']);\n        var lastOpen = this.getLastOpenedPopup(popups);\n        return lastOpen ? popups.indexOf(lastOpen) : popups.length - 1;\n      },\n      closeAll: function closeAll() {\n        plugin.set(['popups'], plugin.get(['popups']).map(function (popup) {\n          return _extends({}, popup, {\n            isOpen: false\n          });\n        }));\n      },\n      create: function create(_ref, done) {\n        var title = _ref.title,\n            schema = _ref.schema,\n            _ref$data = _ref.data,\n            data = _ref$data === void 0 ? {} : _ref$data;\n        var React = core.imports.React;\n        var state = {};\n        schema.map(function (item) {\n          var value,\n              type = item.type.toLowerCase();\n\n          if (item.key in data) {\n            value = data[item.key];\n          } else if (core.types[type]) {\n            value = core.type.getDefaultValue(type);\n          }\n\n          state[item.key] = value;\n        });\n        plugin.open({\n          title: title,\n          state: state,\n          render: function render(popup) {\n            return React.createElement(_core.Dialog, {\n              open: popup.isOpen,\n              onClose: popup.close,\n              \"aria-labelledby\": \"form-dialog-title\"\n            }, React.createElement(_core.DialogTitle, {\n              id: \"form-dialog-title\"\n            }, title), React.createElement(_core.DialogContent, null, schema.map(function (item) {\n              var Component = core.plugins.inputs.components[item.type];\n              return React.createElement(Component, _extends({\n                value: popup.state[item.key],\n                onChange: function onChange(value) {\n                  return popup.setState(_defineProperty({}, item.key, value));\n                }\n              }, item));\n            })), React.createElement(\"div\", {\n              style: {\n                display: 'flex',\n                justifyContent: 'flex-end',\n                padding: 20\n              }\n            }, React.createElement(_core.Button, {\n              size: \"small\",\n              variant: \"flat\",\n              color: \"primary\",\n              style: {\n                color: core.theme('colors.secondary'),\n                marginRight: 20\n              },\n              onClick: function onClick() {\n                popup.close();\n                done();\n              }\n            }, core.translate('Cancel')), React.createElement(_core.Button, {\n              size: \"small\",\n              variant: \"contained\" // color=\"primary\"\n              ,\n              style: {\n                color: core.theme('colors.white'),\n                backgroundColor: core.theme('colors.secondary')\n              },\n              onClick: function onClick(e) {\n                popup.close();\n                done(popup.state);\n              }\n            }, core.translate('Create'))));\n          }\n        });\n      }\n    };\n    core.extend({\n      popup: plugin\n    });\n    done(plugin);\n  }\n}; // core.popup is called twice but only one popup will open\n// core.popup({\n//     id: 'myCustomPopupId',\n//     render(popup){\n//         return (\n//             <MyCustomPopup\n//                 isOpen={ popup.isOpen }\n//                 close={ e => popup.close() }/>\n//         );\n//     }\n// });\n// core.popup(popup => 'This text will appear inside a popup', { title: 'My Popup', id: '123' });\n// core.plugin({\n//     name: 'links',\n//     components: [\n//         require('./components/LinksPopup')\n//     ],\n//     actions: [\n//         require('./actions/createLink')\n//     ],\n//     init(def, done){\n//         var linksPlugin = {\n//             create(params, done){\n//                 core.popup({\n//                     render(popup){\n//                         var { LinksPopup } = linksPlugin.components;\n//                         return (\n//                             <LinksPopup \n//                                 isOpen={ popup.isOpen }\n//                                 close={ e => popup.close() }\n//                                 onSubmit={ data => linksPlugin.run('createLink', data) }\n//                                 onDone={ done }\n//                                 params={ params }/>\n//                         );\n//                     }\n//                 });\n//             }\n//         };\n//         done(linksPlugin);\n//     }\n// });\n\n//# sourceURL=webpack:///./source/plugins/popup/popup.js?");

/***/ }),

/***/ "./source/plugins/router/index.js":
/*!****************************************!*\
  !*** ./source/plugins/router/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./router.js */ \"./source/plugins/router/router.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/router/index.js?");

/***/ }),

/***/ "./source/plugins/router/router.js":
/*!*****************************************!*\
  !*** ./source/plugins/router/router.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: 'router',\n  channels: ['router.navigation'],\n  events: ['navigation'],\n  tree: {\n    defaultRoute: '',\n    routes: [],\n    path: [],\n    query: {},\n    encodeUrl: true\n  },\n  init: function init(definition, done) {\n    var core = this;\n    var React = core.imports.React;\n    var cursor = core.select(['plugins', 'router']);\n    var router = {\n      onHashChange: function onHashChange() {\n        var url = location.hash.substr(1);\n\n        var _router$parse = router.parse(url),\n            query = _router$parse.query,\n            path = _router$parse.path;\n\n        core.fire('router.navigation', {\n          url: url,\n          query: query,\n          path: path\n        }, function (_ref) {\n          var url = _ref.url,\n              query = _ref.query,\n              path = _ref.path;\n          router.set('query', query);\n          router.set('path', path);\n          router.emit('navigation', {\n            url: url,\n            query: query,\n            path: path\n          });\n        });\n      },\n      render: function render() {\n        return router.bind([], function (data) {\n          var routes = data.routes,\n              path = data.path,\n              query = data.query;\n          var route = routes.find(function (r) {\n            return r.name === path[0];\n          });\n          return router.renderRoute(route, path, query);\n        });\n      },\n      renderRoute: function renderRoute(route, path, query) {\n        if (!route) {\n          return null;\n        }\n\n        var Component = core.components[route.component];\n\n        if (!Component) {\n          console.warn(\"core.router - cannot find component '\".concat(route.name, \"'\"));\n          return null;\n        }\n\n        var child = (route.children || []).find(function (c) {\n          return c.name === path[0];\n        });\n        path = path.slice(1);\n        return React.createElement(Component, {\n          route: route,\n          path: path,\n          query: query\n        }, router.renderRoute(child, path, query));\n      },\n      config: function config(options) {\n        cursor.merge(options);\n        router.onHashChange();\n      },\n      to: function to(path, query) {\n        location.hash = router.stringify(path, query);\n      },\n      onUpdate: function onUpdate() {\n        location.hash = router.stringify(router.get('path'), router.get('query'));\n      },\n      parse: function parse(url) {\n        var result = {\n          path: [],\n          query: {}\n        };\n\n        if (!url) {\n          return result;\n        }\n\n        url = decodeURIComponent(url);\n\n        if (url[0] === '#') {\n          url = url.substr(1);\n        }\n\n        var queryStart = url.indexOf('{');\n\n        if (queryStart > -1) {\n          try {\n            var urlString = url.slice(0, queryStart);\n            var queryString = url.slice(queryStart);\n            result.path = urlString.split('/').filter(function (t) {\n              return t;\n            });\n            result.query = JSON.parse(queryString) || {};\n          } catch (err) {\n            console.error(err);\n            result.error = err;\n            return result;\n          }\n        } else {\n          result.path = url.split('/').filter(function (t) {\n            return t;\n          });\n        }\n\n        return result;\n      },\n      stringify: function stringify(path, query) {\n        if (core.isString(path)) {\n          path = path.split('/').filter(function (n) {\n            return n;\n          });\n        }\n\n        var json,\n            hash = \"/\".concat(path.join('/'), \"/\");\n\n        if (query && Object.keys(query).length) {\n          json = JSON.stringify(query);\n          hash += router.get('encodeUrl') ? encodeURIComponent(json) : json;\n        }\n\n        return hash;\n      }\n    };\n    router.query = cursor.select(['query']);\n    cursor.on('update', router.onUpdate);\n    window.addEventListener('hashchange', router.onHashChange);\n    core.extend({\n      router: router\n    });\n    done(router);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/router/router.js?");

/***/ }),

/***/ "./source/plugins/snackbar/Snackbar.jsx":
/*!**********************************************!*\
  !*** ./source/plugins/snackbar/Snackbar.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Snackbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/Snackbar/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n__webpack_require__(/*! ./snackbar.css */ \"./source/plugins/snackbar/snackbar.css\");\n\nmodule.exports = {\n  name: 'Snackbar',\n  dependencies: [],\n  get: function get() {\n    return {\n      closeSnackbar: function closeSnackbar() {\n        core.plugins.snackbar.close();\n      },\n      renderMessage: function renderMessage() {\n        var snackbar = core.plugins.snackbar;\n        var icon = snackbar.icon,\n            message = snackbar.message;\n\n        switch (icon) {\n          case 'info':\n            icon = React.createElement(\"i\", {\n              className: 'fas fa-info',\n              style: {\n                color: '#44b',\n                fonSize: 18,\n                marginRight: 6\n              }\n            });\n            break;\n\n          case 'warning':\n            icon = React.createElement(\"i\", {\n              className: 'fas fa-exclamation-triangle',\n              style: {\n                color: '#b44',\n                fonSize: 18,\n                marginRight: 6\n              }\n            });\n            break;\n\n          case 'success':\n            icon = React.createElement(\"i\", {\n              className: 'fas fa-check',\n              style: {\n                color: '#4b4',\n                fonSize: 18,\n                marginRight: 6\n              }\n            });\n            break;\n\n          default:\n            return message;\n        }\n\n        return React.createElement(\"div\", {\n          style: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'space-between'\n          }\n        }, React.createElement(\"div\", {\n          style: {\n            'verticalAlign': 'middle',\n            fontSize: 13,\n            lineHeight: '18px',\n            flex: 1\n          }\n        }, message), React.createElement(\"div\", null, icon));\n      },\n      render: function render() {\n        var _this = this;\n\n        var snackbar = core.plugins.snackbar;\n        return snackbar.bind('isOpen', function (isOpen) {\n          var icon = snackbar.icon,\n              message = snackbar.message;\n\n          switch (icon) {\n            case 'info':\n              icon = React.createElement(\"i\", {\n                className: 'fas fa-info',\n                style: {\n                  color: 'rgb(87, 176, 236)',\n                  fontSize: '16px',\n                  width: 20,\n                  textAlign: 'center'\n                }\n              });\n              break;\n\n            case 'warning':\n              icon = React.createElement(\"i\", {\n                className: 'fas fa-exclamation-triangle',\n                style: {\n                  color: 'rgb(241, 200, 92)',\n                  fontSize: '18px',\n                  width: 20,\n                  textAlign: 'center'\n                }\n              });\n              break;\n\n            case 'success':\n              icon = React.createElement(\"i\", {\n                className: 'fas fa-check',\n                style: {\n                  color: 'rgb(92, 185, 92)',\n                  fontSize: '18px',\n                  width: 20,\n                  textAlign: 'center'\n                }\n              });\n              break;\n          }\n\n          return React.createElement(_Snackbar.default, _extends({\n            anchorOrigin: {\n              vertical: 'bottom',\n              horizontal: 'center'\n            },\n            open: isOpen,\n            autoHideDuration: 3000,\n            onClose: _this.closeSnackbar,\n            message: message,\n            action: icon\n          }, snackbar.props, {\n            className: 'snackbar' + (snackbar.props && snackbar.props.className ? ' ' + snackbar.props.className : '')\n          }));\n        });\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/snackbar/Snackbar.jsx?");

/***/ }),

/***/ "./source/plugins/snackbar/index.js":
/*!******************************************!*\
  !*** ./source/plugins/snackbar/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nmodule.exports = {\n  name: 'snackbar',\n  tree: {\n    isOpen: false\n  },\n  components: [__webpack_require__(/*! ./Snackbar.jsx */ \"./source/plugins/snackbar/Snackbar.jsx\")],\n  extend: {\n    snack: function snack(message, type) {\n      this.plugins.snackbar.open.apply(this.plugins.snackbar, arguments);\n    }\n  },\n  init: function init(def, done) {\n    var core = this;\n\n    function setProps(props) {\n      var snackbar = core.plugins.snackbar;\n      snackbar.icon = props.icon;\n      snackbar.props = props.props;\n\n      if (typeof props.message === \"string\") {\n        snackbar.message = props.message;\n      } else if (_typeof(props.message) === \"object\" && props.message.message) {\n        snackbar.message = props.message.message;\n      } else {\n        console.warn(\"The \\\"snackbar\\\" was opened without a message\");\n        snackbar.message = core.translate(\"snackbar.errorOccurred\", \"An error has occurred\");\n        snackbar.icon = 'warning';\n      }\n    }\n\n    done({\n      messages: [],\n      open: function open(message, icon, props) {\n        var snackbar = core.plugins.snackbar;\n        snackbar.set('isOpen', false);\n        setTimeout(function () {\n          var snackbarProps = {\n            message: message,\n            icon: icon,\n            props: props\n          };\n\n          if (snackbar.get('isOpen')) {\n            snackbar.messages.push(snackbarProps);\n          } else {\n            setProps(snackbarProps);\n            snackbar.set('isOpen', true);\n          }\n        }, 150);\n      },\n      close: function close() {\n        var snackbar = core.plugins.snackbar;\n        snackbar.message = null;\n        snackbar.icon = null;\n        snackbar.set('isOpen', false);\n\n        if (snackbar.messages.length) {\n          setTimeout(function () {\n            setProps(snackbar.messages.shift());\n            snackbar.set('isOpen', true);\n          }, 0);\n        }\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/snackbar/index.js?");

/***/ }),

/***/ "./source/plugins/snackbar/snackbar.css":
/*!**********************************************!*\
  !*** ./source/plugins/snackbar/snackbar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./snackbar.css */ \"./node_modules/css-loader/index.js!./source/plugins/snackbar/snackbar.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./source/plugins/snackbar/snackbar.css?");

/***/ }),

/***/ "./source/plugins/theme/index.js":
/*!***************************************!*\
  !*** ./source/plugins/theme/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: 'core.plugin.theme',\n  dependencies: [],\n  tree: {\n    \"colors\": {\n      \"black\": \"#333333\",\n      \"dark\": \"#333333\",\n      \"gray\": \"#999999\",\n      \"darkGray\": \"#666666\",\n      \"secondary\": \"#ff4e50\",\n      \"primary\": \"#303641\",\n      \"third\": \"#88da4b\",\n      \"fourth\": \"#4ea9d6\",\n      \"white\": \"#ffffff\",\n      \"boxShadow\": \"#cacaca\",\n      \"borderDark\": \"#4e4e4e\",\n      \"borderLight\": \"#eceff1\"\n    },\n    \"backgrounds\": {\n      \"default\": \"#ffffff\",\n      \"white\": \"#ffffff\",\n      \"nav\": \"#333333\",\n      \"primary\": \"#004175\",\n      \"light_gray\": \"#efefef\",\n      \"menu\": \"#efefef\",\n      \"blue\": \"#007AFF\",\n      \"root\": \"#efefef\",\n      \"sideBar\": \"#303641\"\n    },\n    \"transparent\": {\n      \"black_12\": \"#0000001F\",\n      \"black_14\": \"#00000024\",\n      \"black_20\": \"#00000033\",\n      \"black_40\": \"#00000066\",\n      \"black_75\": \"#000000bf\",\n      \"black_80\": \"#000000cc\",\n      \"white_45\": \"#ffffff73\",\n      \"white_85\": \"#ffffffd9\"\n    },\n    \"components\": {\n      \"noResults\": \"#808080\"\n    },\n    \"notify\": {\n      \"success\": \"#56b631\",\n      \"error\": \"#cf3c3e\",\n      \"warning\": \"#2a3640\",\n      \"info\": \"#0085c2\"\n    },\n    \"icons\": {\n      \"options\": \"more_vert\",\n      \"add\": \"add\",\n      \"general\": {\n        \"save\": \"save\",\n        \"menu\": \"menu\",\n        \"more\": \"more_vert\",\n        \"folder\": \"folder\",\n        \"addFolder\": \"create_new_folder\",\n        \"folderShared\": \"folder_shared\",\n        \"download\": \"file_download\",\n        \"arrow_right\": \"arrow_right\"\n      },\n      \"notify\": {\n        \"error\": \"error\",\n        \"success\": \"check_circle\",\n        \"info\": \"info\",\n        \"warning\": \"warning\"\n      },\n      \"files\": {\n        \"edit\": \"edit\",\n        \"copy\": \"file_copy\"\n      },\n      \"nav\": {\n        \"home\": \"home\",\n        \"settings\": \"settings\",\n        \"examples\": \"school\"\n      },\n      \"topBar\": {\n        \"user\": \"person\",\n        \"signIn\": \"input\",\n        \"signOut\": \"launch\",\n        \"search\": \"search\"\n      },\n      \"navigate\": {\n        \"close\": \"close\",\n        \"up\": \"keyboard_arrow_up\",\n        \"arrow_up\": \"arrow_drop_up\",\n        \"down\": \"keyboard_arrow_down\",\n        \"arrow_down\": \"arrow_drop_down\",\n        \"left\": \"keyboard_arrow_left\",\n        \"arrow_left\": \"arrow_left\",\n        \"right\": \"keyboard_arrow_right\",\n        \"arrow_right\": \"arrow_right\"\n      },\n      \"panel\": {\n        \"expandMore\": \"expand_more\",\n        \"expandLess\": \"expand_less\"\n      }\n    },\n    \"dimensions\": {\n      \"nav\": {\n        \"width\": 225,\n        \"maxWidth\": 225,\n        \"iconSize\": 20,\n        \"fontSize\": 14,\n        \"zIndex\": 1101\n      },\n      \"appBar\": {\n        \"height\": 60,\n        \"zIndex\": 1102\n      },\n      \"expandingMenu\": {\n        \"width\": 260\n      }\n    }\n  },\n  extend: {\n    theme: function theme(path) {\n      var theme = this.plugins['core.plugin.theme'];\n      if (!path) return theme.get();\n\n      if (this.isString(path)) {\n        path = path.split(/[\\.,\\/]/);\n      }\n\n      var value = theme.get(path);\n      return value;\n    },\n    icons: function icons(path) {\n      var theme = this.plugins['core.plugin.theme'];\n      var icons = theme.select('icons');\n      if (!path) return icons.get();\n\n      if (this.isString(path)) {\n        path = path.split(/[\\.,\\/]/);\n      }\n\n      var value = icons.get(path);\n      return value;\n    },\n    dim: function dim(path) {\n      var theme = this.plugins['core.plugin.theme'];\n      var dim = theme.select('dimensions');\n      if (!path) return dim.get();\n\n      if (this.isString(path)) {\n        path = path.split(/[\\.,\\/]/);\n      }\n\n      var value = dim.get(path);\n      return value;\n    }\n  },\n  init: function init(def, done) {\n    var core = this;\n    done({\n      load: function load(theme) {\n        this.set(theme);\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/theme/index.js?");

/***/ }),

/***/ "./source/plugins/translate/index.js":
/*!*******************************************!*\
  !*** ./source/plugins/translate/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./translate.js */ \"./source/plugins/translate/translate.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/translate/index.js?");

/***/ }),

/***/ "./source/plugins/translate/modules/Translate/index.js":
/*!*************************************************************!*\
  !*** ./source/plugins/translate/modules/Translate/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./translate.js */ \"./source/plugins/translate/modules/Translate/translate.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/translate/modules/Translate/index.js?");

/***/ }),

/***/ "./source/plugins/translate/modules/Translate/translate.js":
/*!*****************************************************************!*\
  !*** ./source/plugins/translate/modules/Translate/translate.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  name: \"Translate\",\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    return {\n      translate: function translate(key, defaultValue, args) {\n        var language = core.plugins.translate.get(['dictionary']);\n\n        if (!core.isString(key)) {\n          return console.trace('core.translate() expects a string. got', key);\n        }\n\n        ;\n\n        if (core.translateKeysFlag) {\n          return key;\n        }\n\n        ;\n\n        if (core.isArray(defaultValue)) {\n          var v = args;\n          args = defaultValue;\n          defaultValue = v;\n        }\n\n        if (!language) return defaultValue;\n        var value = language[key];\n        var stringValue;\n\n        if (!value) {\n          value = defaultValue || key.split('.').pop();\n        }\n\n        var type = core.typeOf(value);\n\n        if (type === 'string') {\n          stringValue = value;\n        } else if (type === 'object') {\n          stringValue = value.value === null ? value.defaultValue : value.value;\n        }\n\n        if (stringValue && stringValue.indexOf('${') > -1) {\n          stringValue = this.parseAsTemplateString(stringValue, args);\n        }\n\n        return stringValue;\n      },\n      parseAsTemplateString: function parseAsTemplateString(str) {\n        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        var parts = [];\n        var current = [];\n        var result = [];\n        var isVeriable = false;\n        var k, i, value, part, char;\n\n        for (i = 0; i < str.length; i++) {\n          char = str[i];\n\n          if (char === '$' && str[i + 1] === '{') {\n            i++;\n            isVeriable = true;\n\n            if (current.length) {\n              value = current.join('');\n\n              if (value) {\n                parts.push({\n                  type: 'string',\n                  value: value\n                });\n              }\n            }\n\n            current = [];\n          } else if (char === '}' && isVeriable) {\n            isVeriable = false;\n\n            if (current.length) {\n              value = current.join('').trim();\n\n              if (value) {\n                parts.push({\n                  type: 'variable',\n                  value: value\n                });\n              }\n            }\n\n            current = [];\n          } else {\n            current.push(char);\n          }\n        }\n\n        if (current.length) {\n          value = current.join('');\n\n          if (value) {\n            parts.push({\n              type: 'string',\n              value: value\n            });\n          }\n        }\n\n        for (k = 0; k < parts.length; k++) {\n          part = parts[k];\n\n          if (part.type === 'string') {\n            result.push(part.value);\n          } else {\n            result.push(args[part.value] || '');\n          }\n        }\n\n        return result.join('');\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/translate/modules/Translate/translate.js?");

/***/ }),

/***/ "./source/plugins/translate/translate.js":
/*!***********************************************!*\
  !*** ./source/plugins/translate/translate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: 'translate',\n  dependencies: ['core.plugin.tree'],\n  tree: {\n    dictionary: {}\n  },\n  modules: [__webpack_require__(/*! ./modules/Translate */ \"./source/plugins/translate/modules/Translate/index.js\")],\n  extend: {\n    translate: function translate(key, defaultValue, args) {\n      return core.plugins.translate.modules.Translate.translate(key, defaultValue, args);\n    }\n  },\n  init: function init(def, done) {\n    var core = this;\n    var translate = {\n      load: function load(language) {\n        this.set('language', language);\n      },\n      merge: function merge(_merge) {\n        if (!core.isObject(_merge)) {\n          throw new Error(\"translate.merge() expects an object, got \".concat(core.typeOf(_merge)));\n        }\n\n        this.set('language', _extends({}, this.get('language'), _merge));\n      }\n    };\n    done(translate);\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/translate/translate.js?");

/***/ }),

/***/ "./source/plugins/ui/components/ActionButton/ActionButton.jsx":
/*!********************************************************************!*\
  !*** ./source/plugins/ui/components/ActionButton/ActionButton.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nmodule.exports = {\n  name: \"ActionButton\",\n  description: '',\n  propTypes: {},\n  dependencies: ['Stemplate.Mixin'],\n  get: function get(Mixin) {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      mixins: [Mixin],\n      propsTypes: {\n        size: PropTypes.number,\n        action: PropTypes.string.isRequired,\n        cb: PropTypes.func.isRequired,\n        params: PropTypes.object,\n        noCaution: PropTypes.bool,\n        caution: PropTypes.object,\n        disabeld: PropTypes.bool,\n        tooltipText: PropTypes.string,\n        icon: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          size: 20,\n          noCaution: false,\n          caution: {\n            title: core.translate('action'),\n            text: core.translate('are you sure?')\n          },\n          params: {},\n          disabeld: false,\n          tooltipText: core.translate('Folders'),\n          icon: core.icons('Folders'),\n          color: core.theme('colors.actionIcons')\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {\n          loading: false\n        };\n      },\n      componentDidMount: function componentDidMount() {},\n      componentWillUnmount: function componentWillUnmount() {},\n      Caution: function Caution(e) {\n        var _this = this;\n\n        var _props = this.props,\n            caution = _props.caution,\n            cb = _props.cb,\n            disabeld = _props.disabeld,\n            noCaution = _props.noCaution;\n        var title = caution.title,\n            text = caution.text;\n        e.stopPropagation();\n        if (disabeld) return;\n\n        if (noCaution) {\n          this.safeState({\n            loading: true\n          });\n          this.runAction();\n          return;\n        }\n\n        core.plugins.popovers.Caution(text, title, function (sure) {\n          if (!sure) {\n            cb(false);\n            return;\n          }\n\n          _this.safeState({\n            loading: true\n          });\n\n          _this.runAction();\n        });\n      },\n      runAction: function runAction() {\n        var _this2 = this;\n\n        var _props2 = this.props,\n            action = _props2.action,\n            cb = _props2.cb,\n            params = _props2.params;\n        core.plugins.Stemplate.run(action, params).then(function (result) {\n          _this2.safeState({\n            loading: false\n          });\n\n          cb(true, result);\n        }).catch(function () {\n          cb(false);\n\n          _this2.safeState({\n            loading: false\n          });\n        });\n      },\n      renderIcon: function renderIcon() {\n        var loading = this.state.loading;\n        var _props3 = this.props,\n            icon = _props3.icon,\n            size = _props3.size;\n\n        if (loading) {\n          return React.createElement(_core.CircularProgress, {\n            size: size,\n            thickness: 4,\n            color: 'primary'\n          });\n        }\n\n        return React.createElement(_core.Icon, {\n          style: this.styles('icon')\n        }, icon);\n      },\n      styles: function styles(s) {\n        var _props4 = this.props,\n            disabeld = _props4.disabeld,\n            size = _props4.size,\n            color = _props4.color;\n        var cursor = disabeld ? 'not-allowed' : 'pointer';\n        var styles = {\n          button: {\n            width: size * 1.5,\n            height: size * 1.5,\n            cursor: cursor\n          },\n          icon: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            width: size,\n            height: size,\n            fontSize: size,\n            color: !disabeld ? color : core.theme(\"colors.disable\")\n          }\n        };\n        return styles[s];\n      },\n      render: function render() {\n        var _props5 = this.props,\n            disabeld = _props5.disabeld,\n            tooltipText = _props5.tooltipText;\n        return React.createElement(_core.IconButton, {\n          style: this.styles('button'),\n          disabeld: disabeld.toString(),\n          onClick: this.Caution\n        }, React.createElement(\"div\", {\n          title: tooltipText\n        }, this.renderIcon()));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ActionButton/ActionButton.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/ActionButton/index.js":
/*!************************************************************!*\
  !*** ./source/plugins/ui/components/ActionButton/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./ActionButton.jsx */ \"./source/plugins/ui/components/ActionButton/ActionButton.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ActionButton/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/Badge/Badge.jsx":
/*!******************************************************!*\
  !*** ./source/plugins/ui/components/Badge/Badge.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"Badge\",\n  description: '',\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {\n        size: PropTypes.number,\n        count: PropTypes.number,\n        style: PropTypes.object\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          size: 1,\n          count: 0\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentDidCatch: function componentDidCatch(err) {},\n      styles: function styles(s) {\n        var _props = this.props,\n            size = _props.size,\n            style = _props.style;\n        var styles = {\n          badge: _extends({\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            minWidth: 20 * size,\n            width: 'auto',\n            height: 15 * size,\n            borderRadius: '42%',\n            background: core.theme('colors.white'),\n            border: \"1px solid \".concat(core.theme('colors.border')),\n            paddingRight: 3 * size,\n            paddingLeft: 3 * size,\n            margin: \"0px \".concat(5 * size, \"px\"),\n            fontSize: 10 * size,\n            color: core.theme('colors.dark')\n          }, style)\n        };\n        return styles[s];\n      },\n      render: function render() {\n        var count = this.props.count;\n        return React.createElement(\"div\", {\n          style: this.styles('badge')\n        }, count);\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Badge/Badge.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/Badge/index.js":
/*!*****************************************************!*\
  !*** ./source/plugins/ui/components/Badge/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Badge.jsx */ \"./source/plugins/ui/components/Badge/Badge.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Badge/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/CountrySelect/CountrySelect.jsx":
/*!**********************************************************************!*\
  !*** ./source/plugins/ui/components/CountrySelect/CountrySelect.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar Countries = __webpack_require__(/*! country-data */ \"./node_modules/country-data/index.js\").countries.all;\n\nvar PhoneNumber = __webpack_require__(/*! awesome-phonenumber */ \"./node_modules/awesome-phonenumber/index.js\");\n\nmodule.exports = {\n  name: \"CountrySelect\",\n  description: '',\n  propTypes: {},\n  dependencies: ['Stemplate.Helper'],\n  get: function get(Helper) {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {},\n      getDefaultProps: function getDefaultProps() {\n        return {\n          countryCode: 'us'\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {\n          countryStr: '',\n          countryCode: '',\n          numberValue: 123456,\n          open: false,\n          anchorEl: null,\n          Countries: [],\n          filtered: []\n        };\n      },\n      setCountries: function setCountries() {\n        var countries = _.map(Countries, function (cntry, idx) {\n          var code = cntry.alpha2.toLowerCase();\n          return _extends({}, cntry, {\n            flag: React.createElement(\"span\", {\n              className: \"flag-icon flag-icon-\".concat(code),\n              style: {\n                marginRight: 15\n              }\n            })\n          });\n        });\n\n        this.setState({\n          Countries: countries,\n          filtered: countries\n        });\n      },\n      componentDidMount: function componentDidMount() {\n        this.setState({\n          countryCode: this.props.countryCode\n        });\n        this.setCountries();\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n        if (nextProps.countryCode != this.props.countryCode) {\n          this.setState({\n            countryCode: nextProps.countryCode\n          });\n        }\n      },\n      renderCountryItem: function renderCountryItem(country, idx) {\n        var _this = this;\n\n        var code = country.alpha2.toLowerCase();\n        return React.createElement(\"div\", {\n          onClick: function onClick(e) {\n            _this.handleChangeCountry(country, e);\n          },\n          key: idx,\n          style: {\n            fontSize: 13,\n            cursor: 'pointer',\n            padding: ' 5px 10px',\n            height: '30px',\n            display: 'flex',\n            justifyContent: 'space-between'\n          }\n        }, React.createElement(\"div\", null, country.name), React.createElement(\"span\", null, this.getPrefix(code)));\n      },\n      getPrefix: function getPrefix(code) {\n        var num = PhoneNumber.getCountryCodeForRegionCode(code.toUpperCase());\n        return '+' + num;\n      },\n      renderSelectedCountry: function renderSelectedCountry(value) {\n        return React.createElement(\"div\", {\n          style: {\n            paddingLeft: 10,\n            display: 'flex'\n          }\n        }, React.createElement(\"span\", {\n          className: \"flag-icon flag-icon-\".concat(value),\n          style: {\n            fontSize: 13\n          }\n        }), React.createElement(_core.Icon, null, \" \", core.icons('dropDown')));\n      },\n      handleClose: function handleClose() {\n        this.setState({\n          anchorEl: null,\n          open: false\n        });\n        core.emit('clickAway:allow');\n      },\n      openCountryPopup: function openCountryPopup(event) {\n        var currentTarget = event.currentTarget;\n        core.emit('clickAway:prevent');\n        this.setState({\n          anchorEl: currentTarget,\n          open: !this.state.open\n        });\n      },\n      handleChangeCountry: function handleChangeCountry(country, e) {\n        this.setState({\n          countryCode: country.alpha2.toLowerCase()\n        });\n        if (this.props.handleChangeCountry) this.props.handleChangeCountry(country, e);\n        this.handleClose();\n        this.handleClearSearch();\n      },\n      handleSearchCountry: function handleSearchCountry(e) {\n        var Countries = this.state.Countries;\n        var countryStr = e.target.value;\n\n        var filtered = _.filter(Countries, function (country) {\n          return country.name.toLowerCase().indexOf(countryStr.toLowerCase()) > -1;\n        });\n\n        this.setState({\n          filtered: filtered,\n          countryStr: countryStr\n        });\n      },\n      handleClearSearch: function handleClearSearch() {\n        this.setState({\n          filtered: this.state.Countries,\n          countryStr: ''\n        });\n      },\n      render: function render() {\n        var _this2 = this;\n\n        var _state = this.state,\n            countryCode = _state.countryCode,\n            open = _state.open,\n            anchorEl = _state.anchorEl,\n            countryStr = _state.countryStr,\n            filtered = _state.filtered;\n        var id = open ? 'simple-popper' : null;\n        return React.createElement(\"div\", {\n          style: {\n            display: 'flex',\n            alignItems: 'center',\n            background: core.theme('colors.white')\n          }\n        }, React.createElement(_core.Button, {\n          size: 'small',\n          style: {\n            padding: 0,\n            minWidth: 40\n          },\n          onClick: this.openCountryPopup\n        }, this.renderSelectedCountry(countryCode)), React.createElement(_core.Popper, {\n          onClose: this.handleClose,\n          id: id,\n          open: open,\n          anchorEl: anchorEl,\n          placement: 'right-end',\n          disablePortal: true,\n          popperOptions: {\n            positionFixed: true\n          },\n          style: {\n            zIndex: 1300,\n            background: core.theme('colors.white')\n          },\n          modifiers: {\n            flip: {\n              enabled: true\n            }\n          }\n        }, React.createElement(_core.ClickAwayListener, {\n          onClickAway: this.handleClose\n        }, React.createElement(_core.Paper, null, React.createElement(\"div\", {\n          style: {\n            height: 40,\n            padding: '5px 10px',\n            display: 'flex',\n            alignItems: 'center'\n          }\n        }, React.createElement(_core.IconButton, {\n          style: {\n            width: 20,\n            height: 20\n          },\n          title: core.translate('Close search')\n        }, React.createElement(_core.Icon, {\n          style: {\n            fontSize: 16,\n            cursor: 'pointer'\n          },\n          onClick: function onClick(e) {\n            _this2.handleClose();\n\n            _this2.handleClearSearch();\n          }\n        }, core.icons('close'))), React.createElement(_core.Input, {\n          onChange: this.handleSearchCountry,\n          value: countryStr,\n          style: {\n            marginLeft: 15,\n            width: '100%'\n          },\n          inputProps: {\n            style: {\n              fontSize: 13\n            }\n          },\n          placeholder: core.translate('Search a country')\n        })), React.createElement(\"div\", {\n          style: {\n            maxHeight: 320,\n            minHeight: 200,\n            width: 320,\n            overflowY: 'auto'\n          }\n        }, _.map(filtered, this.renderCountryItem))))));\n      }\n    };\n  }\n};\nvar styles = {\n  button: {\n    minWidth: 32,\n    borderRadius: '50%',\n    cursor: 'pointer'\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/CountrySelect/CountrySelect.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/CountrySelect/index.js":
/*!*************************************************************!*\
  !*** ./source/plugins/ui/components/CountrySelect/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./CountrySelect.jsx */ \"./source/plugins/ui/components/CountrySelect/CountrySelect.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/CountrySelect/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/ExpandingPanel/ExpandingPanel.jsx":
/*!************************************************************************!*\
  !*** ./source/plugins/ui/components/ExpandingPanel/ExpandingPanel.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n__webpack_require__(/*! ./customs.scss */ \"./source/plugins/ui/components/ExpandingPanel/customs.scss\");\n\nmodule.exports = {\n  name: \"ExpandingPanel\",\n  description: '',\n  propTypes: {// name: 'string',\n  },\n  dependencies: ['ui.Loader', 'ui.Badge'],\n  get: function get(Loader, Badge) {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {\n        sectionKey: PropTypes.string.isRequired,\n        childRender: PropTypes.func.isRequired,\n        onTitleDoubleClick: PropTypes.func,\n        loadContent: PropTypes.func,\n        iconSize: PropTypes.number,\n        badge: PropTypes.number,\n        badgePlacement: PropTypes.string,\n        // left or right\n        expandButton: PropTypes.bool,\n        isLoading: PropTypes.bool,\n        boxShadow: PropTypes.bool,\n        open: PropTypes.bool,\n        customClassName: PropTypes.string,\n        actionButtons: PropTypes.array,\n        onSearch: PropTypes.func,\n        onClose: PropTypes.func,\n        iconColor: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          badge: 0,\n          iconSize: 16,\n          iconColor: core.theme('colors.sectionsHeadLine'),\n          expandButton: true,\n          childRender: this.childRender,\n          isLoading: false,\n          open: false,\n          customClassName: '',\n          badgePlacement: 'right',\n          headerBorder: core.theme('colors.border'),\n          boxShadow: false,\n          forceOpen: false,\n          onSearch: function onSearch() {},\n          onClose: function onClose() {},\n          loadContent: function loadContent() {}\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {\n          expanded: false,\n          inputValue: ''\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        var open = this.props.open;\n        core.on('openSection', this.openSection);\n        this.setState({\n          expanded: open\n        });\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n        var editable = nextProps.editable,\n            forceOpen = nextProps.forceOpen,\n            name = nextProps.name;\n        var expanded = this.state.expanded;\n\n        if (editable && !expanded) {\n          this.setState({\n            expanded: true\n          });\n        }\n\n        if (forceOpen && !expanded && name == this.props.name) {\n          this.setState({\n            expanded: true\n          });\n        }\n      },\n      componentWillMount: function componentWillMount() {\n        this.clicks = {\n          timer: 0,\n          delay: 200,\n          prevent: false\n        };\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        core.off('openSection', this.openSection);\n      },\n      openSection: function openSection(object) {\n        var sectionKey = this.props.sectionKey;\n\n        if (sectionKey === object.sectionKey) {\n          this.setState({\n            expanded: true\n          });\n        }\n      },\n      handleChange: function handleChange() {\n        var _this = this;\n\n        var expanded = this.state.expanded;\n        var _props = this.props,\n            isLoading = _props.isLoading,\n            loadContent = _props.loadContent,\n            onClose = _props.onClose,\n            editable = _props.editable;\n        if (isLoading || editable) return;\n\n        var doClickAction = function doClickAction() {\n          if (!expanded) {\n            loadContent();\n            if (onClose) onClose();\n          }\n\n          _this.setState({\n            expanded: !expanded\n          });\n        }; // this.clicks.timer = setTimeout( () => {\n        //   if (!this.clicks.prevent) {\n\n\n        doClickAction(); //   }\n        //   this.clicks.prevent = false;\n        // }, this.clicks.delay);\n      },\n      handleKeyPress: function handleKeyPress(event) {\n        var _props2 = this.props,\n            editable = _props2.editable,\n            handleEdit = _props2.handleEdit;\n        var inputValue = this.state.inputValue;\n        if (!editable) return;\n\n        switch (event.keyCode) {\n          case 27:\n            this.handleClose();\n            break;\n\n          case 13:\n            handleEdit(inputValue);\n            this.handleClose();\n            break;\n        }\n      },\n      handleClose: function handleClose() {\n        this.setState({\n          inputValue: ''\n        });\n        this.props.handleEdit(null);\n      },\n      handleInputChange: function handleInputChange(e) {\n        this.setState({\n          inputValue: e.target.value\n        }); // this.props.handleEdit(e.target.value);\n      },\n      handleTitleDoubleClick: function handleTitleDoubleClick(e) {\n        this.clicks.prevent = true;\n        e.preventDefault();\n        clearTimeout(this.clicks.timer);\n        if (this.props.onTitleDoubleClick) this.props.onTitleDoubleClick();\n      },\n      handleTitleClick: function handleTitleClick(e) {\n        e.preventDefault();\n        var onClick = this.props.onClick;\n        if (onClick) onClick();\n      },\n      renderInput: function renderInput(placeholder, padding) {\n        var inputValue = this.state.inputValue;\n        return React.createElement(_core.ClickAwayListener, {\n          onClickAway: this.handleClose\n        }, React.createElement(_core.TextField, {\n          placeholder: placeholder,\n          style: _extends({}, styles.search, {\n            paddingLeft: padding\n          }),\n          onKeyDown: this.handleKeyPress,\n          onChange: this.handleInputChange,\n          margin: \"normal\",\n          type: \"text\",\n          InputProps: {\n            style: {\n              fontSize: 13,\n              textTransform: 'uppercase'\n            }\n          },\n          value: inputValue,\n          autoFocus: true\n        }));\n      },\n      renderName: function renderName() {\n        var _props3 = this.props,\n            name = _props3.name,\n            icon = _props3.icon,\n            editable = _props3.editable;\n        var expanded = this.state.expanded;\n        var padding = icon && !_.isEmpty(icon) ? 0 : 30;\n        if (editable) return this.renderInput(name, padding);\n        return React.createElement(_core.Typography, {\n          style: {\n            color: core.theme('colors.sectionsHeadLine'),\n            fontWeight: expanded ? 600 : 500,\n            fontSize: 13,\n            paddingLeft: padding\n          }\n        }, name);\n      },\n      renderBadge: function renderBadge() {\n        var _props4 = this.props,\n            badge = _props4.badge,\n            badgePlacement = _props4.badgePlacement,\n            isLoading = _props4.isLoading;\n        if (!badge) return null;\n        return React.createElement(\"div\", {\n          style: _extends({}, styles.badge, {\n            position: badgePlacement == 'right' ? 'absolute' : 'unset',\n            color: core.theme('colors.primary')\n          })\n        }, isLoading ? '...' : React.createElement(Badge, {\n          count: badge\n        }));\n      },\n      renderIcon: function renderIcon() {\n        var _props5 = this.props,\n            icon = _props5.icon,\n            iconSize = _props5.iconSize,\n            iconColor = _props5.iconColor;\n        if (!icon) return null;\n        return React.createElement(_core.Icon, {\n          style: {\n            fontSize: iconSize,\n            color: iconColor,\n            marginLeft: 25,\n            marginRight: 10\n          }\n        }, icon);\n      },\n      renderHeadline: function renderHeadline() {\n        var _props6 = this.props,\n            headerStyle = _props6.headerStyle,\n            customClassName = _props6.customClassName;\n        var expanded = this.state.expanded;\n        return React.createElement(_core.ExpansionPanelSummary, {\n          style: _extends({}, styles.summary, headerStyle),\n          onClick: this.handleTitleClick\n        }, React.createElement(\"div\", {\n          style: _extends({}, styles.expandButton, {\n            height: headerStyle && headerStyle.maxHeight ? headerStyle.maxHeight : 40\n          }),\n          onClick: this.handleChange\n        }, this.renderExpandMoreIcon(expanded)), React.createElement(\"div\", {\n          style: {\n            display: 'flex',\n            maxWidth: '85%',\n            width: '100%'\n          }\n          /*onDoubleClick={ this.handleTitleDoubleClick }*/\n          ,\n          onClick: this.handleChange\n        }, this.renderIcon(), this.renderName(), this.renderBadge()), this.renderActionButtons());\n      },\n      renderExpandMoreIcon: function renderExpandMoreIcon(expanded) {\n        var isLoading = this.props.isLoading;\n        if (isLoading) return React.createElement(Loader, {\n          show: true,\n          size: 15\n        });\n        return React.createElement(_core.Icon, {\n          style: {\n            fontSize: 20,\n            color: core.theme('colors.actionIcons')\n          }\n        }, core.icons(expanded ? 'panel.expandLess' : 'panel.expandMore'));\n      },\n      renderActionButtons: function renderActionButtons() {\n        var expanded = this.state.expanded;\n        var _props7 = this.props,\n            headerStyle = _props7.headerStyle,\n            actionButtons = _props7.actionButtons;\n\n        if (actionButtons) {\n          return React.createElement(\"div\", {\n            style: _extends({}, styles.expandButton, {\n              width: 'auto',\n              paddingRight: 0,\n              left: 'unset',\n              right: 5,\n              height: headerStyle && headerStyle.maxHeight ? headerStyle.maxHeight : 40\n            }),\n            onClick: function onClick(e) {\n              e.preventDefault();\n            }\n          }, actionButtons);\n        }\n\n        return null;\n      },\n      childRender: function childRender(content, itemKey) {\n        if (this.props.childRender) {\n          return this.props.childRender(content, itemKey);\n        } else {\n          return _.map(content, function (per, idx) {\n            return React.createElement(\"div\", {\n              key: idx\n            }, per.name);\n          });\n        }\n      },\n      render: function render() {\n        var _props8 = this.props,\n            customClassName = _props8.customClassName,\n            style = _props8.style,\n            isLoading = _props8.isLoading,\n            childWrapStyle = _props8.childWrapStyle,\n            boxShadow = _props8.boxShadow;\n        var expanded = this.state.expanded;\n        return React.createElement(_core.ExpansionPanel, {\n          className: customClassName + \" \".concat(boxShadow ? '' : 'no_boxshadow'),\n          style: _extends({}, style),\n          expanded: expanded\n        }, this.renderHeadline(), React.createElement(_core.ExpansionPanelDetails, {\n          style: _extends({\n            display: 'flex',\n            flexDirection: 'column',\n            padding: 0\n          }, childWrapStyle)\n        }, this.childRender()));\n      }\n    };\n  }\n};\nvar styles = {\n  expandButton: {\n    position: 'absolute',\n    width: '25px',\n    height: '25px',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    left: '10px',\n    top: 0\n  },\n  badge: {\n    marginLeft: 5,\n    fontSize: 13,\n    padding: 0,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    position: 'absolute',\n    right: '55px'\n  },\n  summary: {\n    padding: '0 10px',\n    display: 'flex',\n    alignItems: 'center',\n    maxHeight: 40,\n    minHeight: 40,\n    textTransform: 'uppercase'\n  },\n  searchCont: {\n    display: 'flex',\n    width: '100%',\n    alignItems: 'center'\n  },\n  search: {\n    width: '100%',\n    marginBottom: 15,\n    fontSize: 13,\n    textTransform: 'uppercase'\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ExpandingPanel/ExpandingPanel.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/ExpandingPanel/customs.scss":
/*!******************************************************************!*\
  !*** ./source/plugins/ui/components/ExpandingPanel/customs.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./customs.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./source/plugins/ui/components/ExpandingPanel/customs.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ExpandingPanel/customs.scss?");

/***/ }),

/***/ "./source/plugins/ui/components/ExpandingPanel/index.js":
/*!**************************************************************!*\
  !*** ./source/plugins/ui/components/ExpandingPanel/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./ExpandingPanel.jsx */ \"./source/plugins/ui/components/ExpandingPanel/ExpandingPanel.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/ExpandingPanel/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/IconPopover/IconPopover.jsx":
/*!******************************************************************!*\
  !*** ./source/plugins/ui/components/IconPopover/IconPopover.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"IconPopover\",\n  description: '',\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {\n        icon: PropTypes.string,\n        title: PropTypes.string,\n        iconStyle: PropTypes.object,\n        popoverStyle: PropTypes.object,\n        iconColor: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          icon: core.icons('home'),\n          iconColor: core.theme('colors.actionIcons'),\n          title: '',\n          iconStyle: {},\n          popoverStyle: {}\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {\n          isOpen: false,\n          anchorEl: null\n        };\n      },\n      componentDidMount: function componentDidMount() {\n        core.on('closePopover', this.handleCloseMenu);\n      },\n      componentWillUnmount: function componentWillUnmount() {\n        core.off('closePopover', this.handleCloseMenu);\n      },\n      handleOpenMenu: function handleOpenMenu(e) {\n        this.setState({\n          isOpen: true,\n          anchorEl: e.currentTarget\n        });\n      },\n      handleCloseMenu: function handleCloseMenu() {\n        this.setState({\n          isOpen: false,\n          anchorEl: null\n        });\n      },\n      handleSwitchMenu: function handleSwitchMenu(e) {\n        if (this.state.isOpen) this.handleCloseMenu();else this.handleOpenMenu(e);\n      },\n      onClickAway: function onClickAway() {\n        var _this = this;\n\n        setTimeout(function () {\n          if (_this.state.isOpen) {\n            _this.handleCloseMenu();\n          }\n        }, 100);\n      },\n      render: function render() {\n        var anchorEl = this.state.anchorEl;\n        var _props = this.props,\n            children = _props.children,\n            icon = _props.icon,\n            title = _props.title,\n            iconStyle = _props.iconStyle,\n            popoverStyle = _props.popoverStyle,\n            iconColor = _props.iconColor;\n        var open = Boolean(anchorEl);\n        var id = open ? 'icon-Poper' : null;\n        return React.createElement(\"div\", {\n          style: styles(core).popover\n        }, React.createElement(_core.IconButton, {\n          \"aria-owns\": anchorEl ? 'icon-fade-menu' : null,\n          \"aria-haspopup\": true,\n          style: styles(core).button,\n          onClick: this.handleSwitchMenu\n        }, React.createElement(_core.Icon, {\n          title: title,\n          style: _extends({}, styles(core).buttonsIcon, {\n            color: iconColor\n          }, iconStyle)\n        }, icon)), React.createElement(_core.Popper, {\n          id: id,\n          open: open,\n          anchorEl: anchorEl,\n          placement: 'bottom-end',\n          style: _extends({}, styles(core).container, popoverStyle),\n          modifiers: {\n            flip: {\n              enabled: true\n            }\n          }\n        }, React.createElement(_core.ClickAwayListener, {\n          onClickAway: this.onClickAway\n        }, React.createElement(_core.Paper, null, children))));\n      }\n    };\n  }\n};\n\nvar styles = function styles(core) {\n  return {\n    popover: {\n      position: 'relative'\n    },\n    container: {\n      minWidth: 200,\n      background: core.theme('colors.white'),\n      zIndex: 1001 // to be above the map widget\n\n    },\n    button: {\n      height: 30,\n      width: 30,\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    buttonsIcon: {\n      fontSize: 18\n    }\n  };\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/IconPopover/IconPopover.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/IconPopover/index.js":
/*!***********************************************************!*\
  !*** ./source/plugins/ui/components/IconPopover/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./IconPopover.jsx */ \"./source/plugins/ui/components/IconPopover/IconPopover.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/IconPopover/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/Loader/Loader.jsx":
/*!********************************************************!*\
  !*** ./source/plugins/ui/components/Loader/Loader.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"Loader\",\n  description: '',\n  propTypes: {},\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {\n        size: PropTypes.number,\n        show: PropTypes.bool,\n        color: PropTypes.string,\n        style: PropTypes.object\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          size: 'small',\n          color: 'primary',\n          show: true\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {\n          error: null\n        };\n      },\n      getThickness: function getThickness() {\n        var size = this.props.size;\n        if (size < 30) return 2;\n        return 3;\n      },\n      render: function render() {\n        var _props = this.props,\n            show = _props.show,\n            style = _props.style,\n            size = _props.size,\n            color = _props.color,\n            loaderStyle = _props.loaderStyle;\n        var thickness = this.getThickness();\n\n        if (!show) {\n          return null;\n        }\n\n        var wrapper = {\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          position: 'absolute',\n          top: 0,\n          bottom: 0,\n          left: 0,\n          right: 0,\n          zIndex: 1\n        };\n        color = core.theme(color) ? core.theme(color) : color;\n        return React.createElement(\"div\", {\n          style: _extends({}, wrapper, style)\n        }, React.createElement(_core.CircularProgress, {\n          size: size,\n          thickness: thickness,\n          style: _extends({\n            color: color\n          }, loaderStyle)\n        }));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Loader/Loader.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/Loader/index.js":
/*!******************************************************!*\
  !*** ./source/plugins/ui/components/Loader/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Loader.jsx */ \"./source/plugins/ui/components/Loader/Loader.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Loader/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/Nav/Nav.jsx":
/*!**************************************************!*\
  !*** ./source/plugins/ui/components/Nav/Nav.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar styles = {\n  placeHolderContainer: {\n    transition: 'all .25s ease-out',\n    position: 'relative',\n    height: '100%'\n  },\n  container: {\n    height: \"calc(100% - 60px)\",\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'space-between',\n    transition: 'all .25s ease-out',\n    overflow: 'hidden',\n    position: 'absolute',\n    boxShadow: \"rgba(0, 0, 0, 0.12) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 10px 0px\",\n    width: '100%'\n  },\n  rowContainer: {\n    width: '100%',\n    padding: '0',\n    height: 40,\n    cursor: 'pointer',\n    zIndex: 1\n  },\n  rowInner: {\n    display: 'flex',\n    flex: 1,\n    padding: '12px 16px',\n    alignItems: 'center'\n  },\n  rowIcon: {\n    marginRight: 6,\n    fontSize: 18\n  },\n  rowLabel: {\n    display: 'block',\n    whiteSpace: 'nowrap',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    fontSize: 12\n  },\n  navList: {\n    padding: 0\n  }\n};\nmodule.exports = {\n  name: 'Nav',\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var React = core.imports.React;\n    return {\n      getListData: function getListData(listPosition) {\n        switch (listPosition) {\n          case 'top':\n            return [{\n              label: core.translate('Home'),\n              icon: core.icons('nav.home'),\n              view: 'home'\n            }, {\n              label: core.translate('Prices'),\n              icon: core.icons('nav.examples'),\n              view: 'prices'\n            }];\n\n          case 'bottom':\n            return [];\n\n          default:\n            return [];\n        }\n      },\n      setActiveItem: function setActiveItem(view) {\n        this.props.handleViews(view);\n      },\n      renderItemMap: function renderItemMap(item, key, position) {\n        var activeView = this.props.activeView;\n        var view = item.view || null;\n        var isActive = activeView === item.view;\n\n        var itemStyle = _extends({}, styles.rowContainer, {\n          background: isActive ? \"rgba(0, 0, 0, 0.08)\" : \"transparent\",\n          borderTop: item.renderTopBorder ? \"1px solid \".concat(core.theme('colors.borderDark')) : 'none',\n          borderLeft: isActive ? \"3px solid  \".concat(core.theme('colors.third')) : 'none',\n          paddingLeft: isActive ? 0 : 3\n        });\n\n        var innerStyle = _extends({}, styles.rowInner, {\n          opacity: isActive ? 1 : .65\n        });\n\n        return React.createElement(_core.ListItem, {\n          key: key,\n          title: item.label,\n          button: true,\n          onClick: this.setActiveItem.bind(this, view),\n          disabled: item.disabled,\n          style: itemStyle\n        }, React.createElement(\"div\", {\n          style: innerStyle\n        }, React.createElement(_core.ListItemIcon, null, React.createElement(_core.Icon, {\n          style: _extends({}, styles.rowIcon, {\n            color: core.theme('colors.secondary')\n          })\n        }, item.icon)), React.createElement(_core.ListItemText, {\n          primary: React.createElement(\"span\", {\n            style: _extends({}, styles.rowLabel, {\n              color: core.theme('colors.white')\n            })\n          }, item.label)\n        })));\n      },\n      renderNavRow: function renderNavRow(items, position) {\n        var _this = this;\n\n        return React.createElement(_core.List, {\n          component: \"nav\",\n          style: styles.navList\n        }, items.map(function (item, key) {\n          return _this.renderItemMap(item, key, position);\n        }));\n      },\n      render: function render() {\n        var navWidth = this.props.navWidth;\n        return React.createElement(\"div\", {\n          style: _extends({}, styles.placeHolderContainer, {\n            width: navWidth\n          })\n        }, React.createElement(\"div\", {\n          style: _extends({}, styles.container, {\n            background: core.theme('colors.primary')\n          })\n        }, this.renderNavRow(this.getListData('top'), 'top'), this.renderNavRow(this.getListData('bottom'), 'bottom')));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Nav/Nav.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/Nav/index.js":
/*!***************************************************!*\
  !*** ./source/plugins/ui/components/Nav/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Nav.jsx */ \"./source/plugins/ui/components/Nav/Nav.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/Nav/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/NoResults/NoResults.jsx":
/*!**************************************************************!*\
  !*** ./source/plugins/ui/components/NoResults/NoResults.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"NoResults\",\n  description: '',\n  propTypes: {},\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return {\n      propsTypes: {\n        text: PropTypes.string,\n        icon: PropTypes.string\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          icon: 'contact_support',\n          text: 'No Results',\n          size: 3\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentDidMount: function componentDidMount() {},\n      componentDidCatch: function componentDidCatch(err) {},\n      renderNoResults: function renderNoResults() {\n        var _props = this.props,\n            size = _props.size,\n            icon = _props.icon;\n        var fontSize = size * 6;\n        return React.createElement(_core.Icon, {\n          style: {\n            fontSize: fontSize,\n            color: core.theme('components.noResults')\n          }\n        }, icon);\n      },\n      renderText: function renderText() {\n        var _props2 = this.props,\n            text = _props2.text,\n            size = _props2.size;\n        if (!text) return;\n        var fontSize = size * 3;\n        return React.createElement(_core.Typography, {\n          style: {\n            marginTop: 15,\n            fontSize: fontSize,\n            color: core.theme('components.noResults')\n          }\n        }, text);\n      },\n      render: function render() {\n        return React.createElement(\"div\", {\n          style: _extends({}, styles.wrapper, this.props.style)\n        }, React.createElement(\"div\", {\n          style: styles.flexColumn\n        }, this.renderNoResults(), this.renderText()));\n      }\n    };\n  }\n};\nvar styles = {\n  wrapper: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    position: 'absolute',\n    top: 0,\n    bottom: 0,\n    left: 0,\n    right: 0\n  },\n  flexColumn: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/NoResults/NoResults.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/NoResults/index.js":
/*!*********************************************************!*\
  !*** ./source/plugins/ui/components/NoResults/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./NoResults.jsx */ \"./source/plugins/ui/components/NoResults/NoResults.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/NoResults/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/TitleBar/TitleBar.jsx":
/*!************************************************************!*\
  !*** ./source/plugins/ui/components/TitleBar/TitleBar.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @material-ui/core/ */ \"./node_modules/@material-ui/core/index.es.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nmodule.exports = {\n  name: \"TitleBar\",\n  description: '',\n  propTypes: {},\n  dependencies: ['ui.Badge'],\n  get: function get(Badge) {\n    var _ref;\n\n    var core = this;\n    var _core$imports = core.imports,\n        React = _core$imports.React,\n        PropTypes = _core$imports.PropTypes;\n    return _ref = {\n      propsTypes: {\n        title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),\n        titlePosition: PropTypes.oneOf(['left', 'middle']),\n        style: PropTypes.object,\n        logo: PropTypes.object,\n        icon: PropTypes.shape({\n          title: PropTypes.string,\n          value: PropTypes.string,\n          action: PropTypes.func,\n          size: PropTypes.number\n        }),\n        badge: PropTypes.shape({\n          counter: PropTypes.number,\n          style: PropTypes.object\n        }),\n        leftButton: PropTypes.array,\n        buttons: PropTypes.array,\n        bgColor: PropTypes.string,\n        fgColor: PropTypes.string,\n        padding: PropTypes.number,\n        middle: PropTypes.object,\n        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),\n        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),\n        shaddow: PropTypes.bool\n      },\n      getDefaultProps: function getDefaultProps() {\n        return {\n          title: core.translate('Default Title'),\n          titlePosition: 'left',\n          style: {},\n          logo: undefined,\n          icon: undefined,\n          badge: undefined,\n          leftButton: [],\n          buttons: [],\n          bgColor: core.theme('backgrounds.primary'),\n          fgColor: core.theme('colors.white'),\n          padding: 5,\n          middle: undefined,\n          height: 30,\n          width: '100%',\n          shaddow: true\n        };\n      },\n      getInitialState: function getInitialState() {\n        return {};\n      },\n      componentWillMount: function componentWillMount() {\n        this.initialUnits();\n      },\n      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {\n        this.initialUnits();\n      }\n    }, _defineProperty(_ref, \"componentWillReceiveProps\", function componentWillReceiveProps(nextProps) {\n      if (nextProps.height !== this.units.propsHeight) this.units.propsHeight = nextProps.height;\n      if (nextProps.width !== this.units.propsWidth) this.units.propsWidth = nextProps.width;\n      if (nextProps.padding !== this.units.propsPadding) this.units.propsPadding = nextProps.padding;\n    }), _defineProperty(_ref, \"initialUnits\", function initialUnits() {\n      var _props = this.props,\n          bgColor = _props.bgColor,\n          fgColor = _props.fgColor,\n          icon = _props.icon,\n          padding = _props.padding,\n          height = _props.height,\n          width = _props.width,\n          zIndex = _props.zIndex;\n      this.colors = {\n        propsFgColor: fgColor || core.theme('colors.white'),\n        white: core.theme('colors.white'),\n        b12: core.theme('transparent.black_12'),\n        b14: core.theme('transparent.black_14'),\n        b20: core.theme('transparent.black_20')\n      };\n      this.backgrounds = {\n        propsBgColor: bgColor || core.theme('backgrounds.primary')\n      };\n      var iconSize = icon && icon.size ? icon.size : core.dim(\"nav.iconSize\");\n      this.units = {\n        propsHeight: height || 15,\n        propsWidth: width ? width : '100%',\n        propsPadding: padding || 5,\n        propsIndex: zIndex ? zIndex : 10,\n        navWidth: core.dim(\"nav.width\"),\n        icon: {\n          height: iconSize * 1.5,\n          width: iconSize * 1.5,\n          fontSize: iconSize\n        }\n      };\n    }), _defineProperty(_ref, \"styles\", function styles(s) {\n      var _props2 = this.props,\n          shaddow = _props2.shaddow,\n          style = _props2.style;\n      var styles = {\n        root: _extends({\n          backgroundColor: this.backgrounds.propsBgColor,\n          color: this.colors.propsFgColor,\n          padding: this.units.propsPadding,\n          minHeight: this.units.propsHeight,\n          maxHeight: this.units.propsHeight,\n          width: this.units.propsWidth,\n          display: 'flex',\n          justifyContent: 'space-between',\n          zIndex: this.units.propsIndex,\n          position: 'relative',\n          boxShadow: shaddow ? \"0px 2px 4px -1px \".concat(this.colors.b12, \",                                                 0px 4px 5px  0px \").concat(this.colors.b14, \",                                                 0px 1px 10px 0px \").concat(this.colors.b20) : 'unset'\n        }, style),\n        left: {\n          flex: 0.5,\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"flex-start\",\n          position: 'relative',\n          color: 'inherit'\n        },\n        middle: {\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          position: 'relative',\n          color: 'inherit'\n        },\n        right: {\n          flex: 0.5,\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"flex-end\",\n          position: 'relative',\n          color: 'inherit'\n        },\n        buttonsList: {\n          display: 'flex'\n        },\n        button: {\n          padding: \"0px 5px\"\n        },\n        logoWrap: {\n          height: \"100%\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          textAlign: \"center\",\n          padding: \"0px 5px\",\n          marginTop: \"auto\",\n          marginBottom: \"auto\"\n        },\n        iconWrap: {\n          height: \"100%\",\n          width: this.units.navWidth - 5,\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\",\n          textAlign: \"center\",\n          margin: \"auto 0px\"\n        },\n        buttonStyle: {\n          height: this.units.icon.height,\n          width: this.units.icon.width,\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          color: this.colors.white\n        },\n        iconStyle: {\n          color: this.colors.white,\n          cursor: 'pointer',\n          fontSize: this.units.icon.fontSize\n        }\n      };\n      return styles[s];\n    }), _defineProperty(_ref, \"renderLogo\", function renderLogo() {\n      var logo = this.props.logo;\n      if (!logo) return null;\n      return React.createElement(\"div\", {\n        id: 'TitleBar.logoWrap',\n        style: this.styles('logoWrap')\n      }, logo);\n    }), _defineProperty(_ref, \"renderIcon\", function renderIcon() {\n      var _props3 = this.props,\n          logo = _props3.logo,\n          icon = _props3.icon;\n      if (!icon || logo) return null;\n      var title = icon.title,\n          value = icon.value,\n          action = icon.action;\n      if (!action) action = function action() {\n        console.log('Default icon action');\n      };\n      return React.createElement(\"div\", {\n        id: 'TitleBar.iconWrap',\n        style: this.styles('iconWrap')\n      }, React.createElement(_core.IconButton, {\n        style: this.styles('buttonStyle'),\n        onClick: action\n      }, React.createElement(_core.Icon, {\n        key: 'infoPanel',\n        title: title,\n        style: this.styles('iconStyle')\n      }, core.icons(value))));\n    }), _defineProperty(_ref, \"renderButton\", function renderButton(button, key) {\n      var stl = key > 0 ? this.styles('button') : {};\n      return React.createElement(\"div\", {\n        id: \"TitleBar.button_\".concat(key),\n        key: key,\n        style: stl\n      }, button);\n    }), _defineProperty(_ref, \"renderButtons\", function renderButtons(buttonsList) {\n      if (!buttonsList || _.isEmpty(buttonsList)) return null;\n      return React.createElement(\"div\", {\n        id: 'TitleBar.buttonList',\n        style: this.styles('buttonsList')\n      }, buttonsList.map(this.renderButton));\n    }), _defineProperty(_ref, \"renderBadge\", function renderBadge() {\n      var badge = this.props.badge;\n      if (!badge || _.isEmpty(badge)) return null;\n      var counter = badge.counter,\n          style = badge.style;\n      return React.createElement(\"div\", {\n        id: 'TitleBar.badgeWrap',\n        style: this.styles('badge')\n      }, React.createElement(Badge, {\n        size: 1,\n        count: counter,\n        style: style\n      }));\n    }), _defineProperty(_ref, \"renderLeft\", function renderLeft() {\n      var _props4 = this.props,\n          leftButton = _props4.leftButton,\n          title = _props4.title,\n          titlePosition = _props4.titlePosition,\n          badge = _props4.badge;\n      var leftTitle = titlePosition.includes('left') ? title : '';\n      return React.createElement(\"div\", {\n        id: 'TitleBar.left',\n        style: this.styles('left')\n      }, this.renderButtons(leftButton), this.renderLogo(), this.renderIcon(), leftTitle, this.renderBadge());\n    }), _defineProperty(_ref, \"renderMiddle\", function renderMiddle() {\n      var _props5 = this.props,\n          middle = _props5.middle,\n          title = _props5.title,\n          titlePosition = _props5.titlePosition;\n      if (_.isEmpty(middle) && titlePosition !== 'middle') return null;\n      var midTitle = titlePosition.includes('middle') ? title : '';\n      return React.createElement(\"div\", {\n        id: 'TitleBar.middle',\n        style: this.styles('middle')\n      }, midTitle, middle);\n    }), _defineProperty(_ref, \"renderRight\", function renderRight() {\n      var buttons = this.props.buttons;\n      return React.createElement(\"div\", {\n        id: 'TitleBar.right',\n        style: this.styles('right')\n      }, this.renderButtons(buttons));\n    }), _defineProperty(_ref, \"render\", function render() {\n      return React.createElement(\"div\", {\n        id: 'TitleBar.root',\n        style: this.styles('root')\n      }, this.renderLeft(), this.renderMiddle(), this.renderRight());\n    }), _ref;\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/TitleBar/TitleBar.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/TitleBar/index.js":
/*!********************************************************!*\
  !*** ./source/plugins/ui/components/TitleBar/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./TitleBar.jsx */ \"./source/plugins/ui/components/TitleBar/TitleBar.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/TitleBar/index.js?");

/***/ }),

/***/ "./source/plugins/ui/components/TopBar/TopBar.jsx":
/*!********************************************************!*\
  !*** ./source/plugins/ui/components/TopBar/TopBar.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/AppBar/index.js\"));\n\nvar _Avatar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/Avatar/index.js\"));\n\nvar _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/IconButton/index.js\"));\n\nvar _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\"));\n\nvar _Icon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Icon */ \"./node_modules/@material-ui/core/Icon/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar styles = {\n  appBar: {\n    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',\n    height: 60,\n    alignItems: 'center',\n    flexDirection: 'row',\n    justifyContent: 'space-between'\n  },\n  logoWrapper: {\n    overflow: 'hidden',\n    transition: 'all 0.25s ease-out 0s',\n    display: 'flex',\n    height: '100%',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    padding: '0 16px 0 6px'\n  },\n  logoContainer: {\n    display: 'flex',\n    alignItems: 'center'\n  },\n  logoButton: {\n    width: 48,\n    height: 48\n  },\n  logoImage: {\n    height: 26,\n    maxWidth: '100%'\n  },\n  logoLabel: {\n    fontSize: 18,\n    letterSpacing: 2,\n    padding: '0 6px'\n  },\n  appBarRight: {\n    display: 'flex',\n    height: '100%',\n    alignItems: 'center',\n    flex: 1,\n    justifyContent: 'space-between',\n    padding: '0px 16px 0 8px'\n  },\n  appBarRight_left: {\n    display: 'flex',\n    alignItems: 'center'\n  },\n  appBarRight_right: {\n    display: 'flex',\n    alignItems: 'center',\n    padding: '0 0 0 16px'\n  },\n  navButton: {\n    width: 48,\n    height: 48,\n    marginRight: 8\n  },\n  userAvatar: {\n    width: 32,\n    height: 32,\n    marginRight: 12\n  },\n  userInfo: {\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  userName: {\n    fontSize: 14,\n    display: 'flex',\n    alignItems: 'center',\n    fontWeight: 500\n  },\n  userGroup: {\n    fontSize: 12,\n    display: 'flex',\n    alignItems: 'center',\n    opacity: .75\n  },\n  loginBtn: {\n    borderRadius: 0,\n    padding: '6px 9px',\n    minHeight: 30\n  },\n  loginBtnLabel: {\n    fontSize: 12,\n    marginRight: 8\n  },\n  loginBtnIcon: {\n    fontSize: 16\n  }\n};\nmodule.exports = {\n  name: 'TopBar',\n  dependencies: [],\n  get: function get() {\n    var core = this;\n    var React = core.imports.React;\n    return {\n      getInitialState: function getInitialState() {\n        return {\n          logedIn: true\n        };\n      },\n      render: function render() {\n        var _this = this;\n\n        var logedIn = this.state.logedIn;\n        var _props = this.props,\n            handleNavState = _props.handleNavState,\n            navWidth = _props.navWidth,\n            navIsOpen = _props.navIsOpen;\n        return React.createElement(_AppBar.default, {\n          position: \"static\",\n          style: _extends({}, styles.appBar, {\n            background: core.theme('backgrounds.white')\n          })\n        }, React.createElement(\"div\", {\n          style: _extends({}, styles.logoWrapper, {\n            width: navWidth,\n            background: core.theme('colors.primary')\n          })\n        }, React.createElement(\"div\", {\n          style: styles.logoContainer\n        }, React.createElement(_IconButton.default, {\n          onClick: function onClick() {},\n          style: styles.logoButton\n        }, React.createElement(\"img\", {\n          src: \"resources/images/logo.png\",\n          style: styles.logoImage\n        })), React.createElement(\"span\", {\n          style: styles.logoLabel\n        }, \"Stemplate\"))), React.createElement(\"div\", {\n          style: styles.appBarRight\n        }, React.createElement(\"div\", {\n          style: styles.appBarRight_left\n        }, React.createElement(_IconButton.default, {\n          onClick: handleNavState,\n          style: styles.navButton\n        }, React.createElement(_Icon.default, {\n          style: {\n            color: core.theme('colors.dark')\n          }\n        }, navIsOpen ? core.icons('general.close') : core.icons('general.menu'))), React.createElement(_Avatar.default, {\n          style: _extends({}, styles.userAvatar, {\n            background: core.theme('colors.third')\n          })\n        }, React.createElement(_Icon.default, null, core.icons('topBar.user'))), React.createElement(\"div\", {\n          style: styles.userInfo\n        }, React.createElement(\"span\", {\n          style: _extends({}, styles.userName, {\n            color: core.theme('colors.primary')\n          })\n        }, \"Ido Ofir\"), React.createElement(\"span\", {\n          style: _extends({}, styles.userGroup, {\n            color: core.theme('colors.primary')\n          })\n        }, \"Administrator\"))), React.createElement(\"div\", {\n          style: styles.appBarRight_right\n        }, React.createElement(_Button.default, {\n          size: \"small\",\n          style: _extends({}, styles.loginBtn, {\n            background: core.theme('colors.fourth')\n          }),\n          onClick: function onClick(e) {\n            return _this.setState({\n              logedIn: !logedIn\n            });\n          }\n        }, React.createElement(\"span\", {\n          style: _extends({}, styles.loginBtnLabel, {\n            color: core.theme('colors.white')\n          })\n        }, logedIn ? \"Logout\" : \"Login\"), React.createElement(_Icon.default, {\n          style: _extends({}, styles.loginBtnIcon, {\n            color: core.theme('colors.white')\n          })\n        }, logedIn ? core.icons('topBar.signOut') : core.icons('topBar.signIn'))))));\n      }\n    };\n  }\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/components/TopBar/TopBar.jsx?");

/***/ }),

/***/ "./source/plugins/ui/components/TopBar/index.js":
/*!******************************************************!*\
  !*** ./source/plugins/ui/components/TopBar/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./TopBar.jsx */ \"./source/plugins/ui/components/TopBar/TopBar.jsx\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/components/TopBar/index.js?");

/***/ }),

/***/ "./source/plugins/ui/index.js":
/*!************************************!*\
  !*** ./source/plugins/ui/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./ui.js */ \"./source/plugins/ui/ui.js\");\n\nif (false) {}\n\n//# sourceURL=webpack:///./source/plugins/ui/index.js?");

/***/ }),

/***/ "./source/plugins/ui/ui.js":
/*!*********************************!*\
  !*** ./source/plugins/ui/ui.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  name: 'ui',\n  components: [__webpack_require__(/*! ./components/ExpandingPanel */ \"./source/plugins/ui/components/ExpandingPanel/index.js\"), __webpack_require__(/*! ./components/TopBar */ \"./source/plugins/ui/components/TopBar/index.js\"), __webpack_require__(/*! ./components/TitleBar */ \"./source/plugins/ui/components/TitleBar/index.js\"), __webpack_require__(/*! ./components/NoResults */ \"./source/plugins/ui/components/NoResults/index.js\"), __webpack_require__(/*! ./components/ActionButton */ \"./source/plugins/ui/components/ActionButton/index.js\"), __webpack_require__(/*! ./components/Badge */ \"./source/plugins/ui/components/Badge/index.js\"), __webpack_require__(/*! ./components/Loader */ \"./source/plugins/ui/components/Loader/index.js\"), __webpack_require__(/*! ./components/IconPopover */ \"./source/plugins/ui/components/IconPopover/index.js\"), __webpack_require__(/*! ./components/Nav */ \"./source/plugins/ui/components/Nav/index.js\"), __webpack_require__(/*! ./components/CountrySelect */ \"./source/plugins/ui/components/CountrySelect/index.js\")]\n};\n\n//# sourceURL=webpack:///./source/plugins/ui/ui.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///http_(ignored)?");

/***/ }),

/***/ "dll-reference library":
/*!**************************!*\
  !*** external "library" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = library;\n\n//# sourceURL=webpack:///external_%22library%22?");

/***/ })

/******/ });