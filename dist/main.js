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

eval("let projects = [];\nlet tasks = [];\nclass Task {\n  constructor(title, description, startDate, dueDate, priority, notes, project) {\n    this.title = title\n    this.description = description\n    this.startDate = startDate\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.checklist = false\n    this.project = project\n  }\n};\n\nlet form = document.getElementById(\"form\");\nform.innerHTML =\n  `\n  <div>\n    <label for=\"title\">Title:</label><br>\n    <input type=\"text\" id=\"title\"><br><br>\n    <label for=\"description\">Description:</label><br>\n    <input type=\"text\" id=\"description\"><br><br>\n    <label for=\"startDate\">Start Date:</label><br>\n    <input type=\"text\" id=\"startDate\"><br><br>\n    <label for=\"dueDate\">Due Date:</label><br>\n    <input type=\"text\" id=\"dueDate\"><br><br>\n    <label for=\"priority\">Priority:</label><br>\n    <input type=\"text\" id=\"priority\"><br><br>\n    <label for=\"notes\">Notes:</label><br>\n    <input type=\"text\" id=\"notes\"><br><br>\n    <button type=\"submit\" id=\"create-task\">Create Task</button>\n  </div>\n    `\n\nfunction displayTasks(task) {\n\n  let main = document.getElementById(\"main\");\n  let ul = document.createElement(\"ul\");\n\n  ul.innerHTML =\n    `\n  <ul>\n    <li>Title:${task.title}</li><br>\n    <li>Description:${task.description}</li><br>\n    <li>Start Date:${task.startDate}</li><br>\n    <li>Due Date:${task.dueDate}</li><br>\n    <li>Priority:${task.priority}</li><br>\n    <li>Notes:${task.notes}</li><br>\n    <button type=\"submit\" id=\"create-task\">Create Task</button>\n  </ul>\n    `\n  main.append(ul);\n\n}\n\nfunction addTasks() {\n  let title = document.getElementById(\"title\").value;\n  let description = document.getElementById(\"description\").value;\n  let startDate = document.getElementById(\"startDate\").value;\n  let dueDate = document.getElementById(\"dueDate\").value;\n  let priortiy = document.getElementById(\"priority\").value;\n  let notes = document.getElementById(\"notes\").value;\n  let task = new Task(title, description, startDate, dueDate, priority, notes)\n  tasks.push(task);\n}\n\nlet submit = document.getElementById(\"create-task\");\n\nsubmit.addEventListener('click', e => {\n  addTasks();\n  tasks.forEach(task => {\n    displayTasks(task);\n  });\n  console.log(tasks);\n\n  // Projects consist of tasks because each project should have their own tasks.\n\n})\n\nconsole.log(tasks)\n\n\n// function process(a, b) {\n\n//   a + b\n//   console.log('12');\n// }\n// process(12, 10);\n\n//# sourceURL=webpack://js-template/./src/index.js?");

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