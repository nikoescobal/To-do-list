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

eval("let projects = [];\nlet tasks = [];\nclass Task {\n  constructor(title, description, startDate, dueDate, priority, notes) {\n    this.title = title\n    this.description = description\n    this.startDate = startDate\n    this.dueDate = dueDate\n    this.priority = priority\n    this.notes = notes\n    this.checklist = false\n  }\n};\n\nclass Project {\n  constructor(title, tasks) {\n    this.title = title\n    this.tasks = tasks\n  }\n};\n\nlet projectForm = document.getElementById(\"projectForm\");\nprojectForm.innerHTML =\n  `\n  <div class=\"text-center\">\n    <label for=\"title\">Title:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"project-title\"><br><br>\n    <button type=\"submit\" class=\"bg-green-500 px-10 p-3 rounded\"  id=\"create-project\">Create Project</button>\n  </div>\n    `\n\n\nlet taskForm = document.getElementById(\"taskForm\");\ntaskForm.innerHTML =\n  `\n  <div class=\"text-center\">\n    <label for=\"title\">Title:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"task-title\"><br><br>\n    <label for=\"description\">Description:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"description\"><br><br>\n    <label for=\"startDate\">Start Date:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"startDate\"><br><br>\n    <label for=\"dueDate\">Due Date:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"dueDate\"><br><br>\n    <label for=\"priority\">Priority:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"priority\"><br><br>\n    <label for=\"notes\">Notes:</label><br>\n    <input class=\"px-10 rounded\" type=\"text\" id=\"notes\"><br><br>\n    <button type=\"submit\" class=\"bg-green-500 px-10 p-3 rounded\"  id=\"create-task\">Create Task</button>\n  </div>\n    `\n\nfunction displayProject(project) {\n\n  let main = document.getElementById(\"main\");\n  let projectUl = document.createElement(\"ul\");\n  projectUl.classList.add(\"text-center\", \"py-10\")\n  projectUl.addEventListener('click', e => {\n    tasks.forEach(task => {\n      displayTask(task);\n    });\n    console.log(\"hello\")\n  });\n\n\n\n  projectUl.innerHTML =\n    `\n      <ul>\n        <li>Title:${project.title}</li><br>\n      </ul>\n        `\n  main.append(projectUl);\n\n}\n\n\n\nfunction displayTask(task) {\n\n  let main = document.getElementById(\"main\");\n  let ul = document.createElement(\"ul\");\n  ul.classList.add(\"text-center\", \"py-10\")\n\n  ul.innerHTML =\n    `\n  <ul>\n    <li>Title:${task.title}</li><br>\n    <li>Description:${task.description}</li><br>\n    <li>Start Date:${task.startDate}</li><br>\n    <li>Due Date:${task.dueDate}</li><br>\n    <li>Priority:${task.priority}</li><br>\n    <li>Notes:${task.notes}</li><br>\n    <button type=\"submit\" id=\"create-task\">Create Task</button>\n  </ul>\n    `\n  main.append(ul);\n\n}\n\nfunction addTasks() {\n  let title = document.getElementById(\"task-title\").value;\n  let description = document.getElementById(\"description\").value;\n  let startDate = document.getElementById(\"startDate\").value;\n  let dueDate = document.getElementById(\"dueDate\").value;\n  let priortiy = document.getElementById(\"priority\").value;\n  let notes = document.getElementById(\"notes\").value;\n  let task = new Task(title, description, startDate, dueDate, priority, notes)\n  tasks.push(task);\n}\n\nlet submit = document.getElementById(\"create-task\");\n\nsubmit.addEventListener('click', e => {\n  addTasks();\n  tasks.forEach(task => {\n    displayTask(task);\n  });\n  console.log(tasks);\n\n\n\n  // Projects consist of tasks because each project should have their own tasks.\n\n})\n\nconsole.log(tasks)\n\nfunction addProjects() {\n  let title = document.getElementById(\"project-title\").value;\n  let project = new Project(title)\n  projects.push(project);\n}\n\nlet projectSubmit = document.getElementById(\"create-project\");\n\nprojectSubmit.addEventListener('click', e => {\n  addProjects();\n  projects.forEach(project => {\n    displayProject(project);\n  });\n  console.log(projects);\n\n});\n\n// function process(a, b) {\n\n//   a + b\n//   console.log('12');\n// }\n// process(12, 10);\n\n//# sourceURL=webpack://js-template/./src/index.js?");

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