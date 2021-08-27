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

eval("let categories = [];\nlet tasks = [];\nclass Task {\n  constructor(title, description, startDate, dueDate, priority, notes, category) {\n    this.title = title\n    this.description = description\n    this.startDate = startDate\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.checklist = false\n    this.category = category\n  }\n};\n\nfunction displayTasks() {\n  let main = document.getElementById(\"main\");\n\n  main.innerHTML =\n    `\n  <div>\n    <label for=\"title\">Title:</label><br>\n    <input type=\"text\" id=\"title\"><br><br>\n    <label for=\"description\">Description:</label><br>\n    <input type=\"text\" id=\"description\"><br><br>\n    <label for=\"startDate\">Start Date:</label><br>\n    <input type=\"text\" id=\"startDate\"><br><br>\n    <label for=\"dueDate\">Due Date:</label><br>\n    <input type=\"text\" id=\"dueDate\"><br><br>\n    <label for=\"priority\">Priority:</label><br>\n    <input type=\"text\" id=\"priority\"><br><br>\n    <label for=\"notes\">Notes:</label><br>\n    <input type=\"text\" id=\"notes\"><br><br>\n    <button type=\"submit\" id=\"create-task\">Create Task</button>\n  </div>\n    `\n}\n\n\nfunction addTasks() {\n  let title = document.getElementById(\"title\").value;\n  let description = document.getElementById(\"description\").value;\n  let startDate = document.getElementById(\"startDate\").value;\n  let dueDate = document.getElementById(\"dueDate\").value;\n  let priortiy = document.getElementById(\"priority\").value;\n  let notes = document.getElementById(\"notes\").value;\n  let task = new Task(title, description, startDate, dueDate, priority, notes)\n  tasks.push(task);\n}\n\n// let submit = document.getElementById(\"create-task\");\n\nsubmit.addEventListener('click', e => {\n  addTask();\n  console.log(tasks);\n\n  // Categories consist of tasks because each category should have their own tasks.\n\n})\n\nconsole.log(tasks)\n\n//# sourceURL=webpack://js-template/./src/index.js?");

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