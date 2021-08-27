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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nconst main = document.getElementById(\"main\");\nlet projects = [];\n\nconst defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default('My Project', 'Let\\'s get sh*t done!')\nconst defaultTasks = [\n  new _task__WEBPACK_IMPORTED_MODULE_1__.default('Throw trash', 'throw trash outside', 11, 11, 'Urgent', 'It\\'s been a week, dude.'),\n  new _task__WEBPACK_IMPORTED_MODULE_1__.default('Eat khash', 'make sure to eat everything', 12, 12, 'Urgent', 'Daily sustenance.')\n]\ndefaultProject.tasks.push(...defaultTasks)\n\n\nconsole.log(defaultProject)\n\nconst displayTask = () => {\n\n  tasks.forEach(task => {\n\n  });\n\n  main.innerHTML =\n    `\n<div>\n  <label for=\"title\">Title:</label><br>\n  <input type=\"text\" id=\"title\"><br><br>\n  <label for=\"description\">Description:</label><br>\n  <input type=\"text\" id=\"description\"><br><br>\n  <label for=\"startDate\">Start Date:</label><br>\n  <input type=\"text\" id=\"startDate\"><br><br>\n  <label for=\"dueDate\">Due Date:</label><br>\n  <input type=\"text\" id=\"dueDate\"><br><br>\n  <label for=\"priority\">Priority:</label><br>\n  <input type=\"text\" id=\"priority\"><br><br>\n  <label for=\"notes\">Notes:</label><br>\n  <input type=\"text\" id=\"notes\"><br><br>\n  <button type=\"submit\" id=\"create-task\">Create Task</button>\n</div>\n  `\n}\n\nconst addTask = () => {\n  let title = document.getElementById(\"title\").value;\n  let description = document.getElementById(\"description\").value;\n  let startDate = document.getElementById(\"startDate\").value;\n  let dueDate = document.getElementById(\"dueDate\").value;\n  let priortiy = document.getElementById(\"priority\").value;\n  let notes = document.getElementById(\"notes\").value;\n  let task = new _task__WEBPACK_IMPORTED_MODULE_1__.default(title, description, startDate, dueDate, priority, notes)\n  tasks.push(task);\n}\n\nlet submit = document.getElementById(\"create-task\");\n\nsubmit.addEventListener('click', e => {\n  addTask();\n  console.log(tasks);\n\n  // Categories consist of tasks because each category should have their own tasks.\n\n})\n\nconsole.log(tasks)\n\n//# sourceURL=webpack://js-template/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(title, description) {\n    this.title = title\n    this.description = description\n    this.tasks = []\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://js-template/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, startDate, dueDate, priority, notes, category) {\n    this.title = title\n    this.description = description\n    this.startDate = startDate\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.checklist = false\n    this.category = category\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://js-template/./src/task.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;