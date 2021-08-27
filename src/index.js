import Project from "./project";
import Task from "./task";

const main = document.getElementById("main");
let projects = [];

const defaultProject = new Project('My Project', 'Let\'s get sh*t done!')
const defaultTasks = new Task('Throw trash', 'throw trash outside', 11, 11, 'Urgent', 'It\'s been a week, dude.')
const displayTask = () => {

  tasks.forEach(task => {

  });

  main.innerHTML =
    `
<div>
  <label for="title">Title:</label><br>
  <input type="text" id="title"><br><br>
  <label for="description">Description:</label><br>
  <input type="text" id="description"><br><br>
  <label for="startDate">Start Date:</label><br>
  <input type="text" id="startDate"><br><br>
  <label for="dueDate">Due Date:</label><br>
  <input type="text" id="dueDate"><br><br>
  <label for="priority">Priority:</label><br>
  <input type="text" id="priority"><br><br>
  <label for="notes">Notes:</label><br>
  <input type="text" id="notes"><br><br>
  <button type="submit" id="create-task">Create Task</button>
</div>
  `
}

const addTask = () => {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let startDate = document.getElementById("startDate").value;
  let dueDate = document.getElementById("dueDate").value;
  let priortiy = document.getElementById("priority").value;
  let notes = document.getElementById("notes").value;
  let task = new Task(title, description, startDate, dueDate, priority, notes)
  tasks.push(task);
}

let submit = document.getElementById("create-task");

submit.addEventListener('click', e => {
  addTask();
  console.log(tasks);

  // Categories consist of tasks because each category should have their own tasks.

})

console.log(tasks)