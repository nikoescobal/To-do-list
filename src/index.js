let categories = [];
let tasks = [];
class Task {
  constructor(title, description, startDate, dueDate, priority, notes, category) {
    this.title = title
    this.description = description
    this.startDate = startDate
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = false
    this.category = category
  }
};

function displayTasks() {
  let main = document.getElementById("main");

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


function addTasks() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let startDate = document.getElementById("startDate").value;
  let dueDate = document.getElementById("dueDate").value;
  let priortiy = document.getElementById("priority").value;
  let notes = document.getElementById("notes").value;
  let task = new Task(title, description, startDate, dueDate, priority, notes)
  tasks.push(task);
}

// let submit = document.getElementById("create-task");

submit.addEventListener('click', e => {
  addTask();
  console.log(tasks);

  // Categories consist of tasks because each category should have their own tasks.

})

console.log(tasks)