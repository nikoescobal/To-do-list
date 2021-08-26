/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let tasks = [];\nclass Task {\n  constructor(title, description, startDate, dueDate, priority, notes) {}\n};\n\nlet main = document.getElementById(\"main\");\n\nmain.innerHTML =\n  `\n  \n  `\n\nlet title = document.getElementById(\"title\").value;\nlet description = document.getElementById(\"description\").value;\nlet startDate = document.getElementById(\"startDate\").value;\nlet dueDate = document.getElementById(\"dueDate\").value;\nlet priortiy = document.getElementById(\"priority\").value;\nlet notes = document.getElementById(\"notes\").value;\n\nlet task = new Task('Throw trash', 'throwing trash', '12-12-2021', '12-12-2021', 'urgent', 'do this every thurs')\n\ntasks.push(task)\n\n\n\nconsole.log(tasks)\n\n//# sourceURL=webpack://js-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;