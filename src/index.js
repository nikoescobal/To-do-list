let projects = [];
let tasks = [];
class Task {
  constructor(title, description, startDate, dueDate, priority, notes, project) {
    this.title = title
    this.description = description
    this.startDate = startDate
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = false
    this.project = project
  }
};

let form = document.getElementById("form");
form.innerHTML =
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

function displayTasks(task) {

  let main = document.getElementById("main");
  let ul = document.createElement("ul");

  ul.innerHTML =
    `
  <ul>
    <li>Title:${task.title}</li><br>
    <li>Description:${task.description}</li><br>
    <li>Start Date:${task.startDate}</li><br>
    <li>Due Date:${task.dueDate}</li><br>
    <li>Priority:${task.priority}</li><br>
    <li>Notes:${task.notes}</li><br>
    <button type="submit" id="create-task">Create Task</button>
  </ul>
    `
  main.append(ul);

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

let submit = document.getElementById("create-task");

submit.addEventListener('click', e => {
  addTasks();
  tasks.forEach(task => {
    displayTasks(task);
  });
  console.log(tasks);

  // Projects consist of tasks because each project should have their own tasks.

})

console.log(tasks)


// function process(a, b) {

//   a + b
//   console.log('12');
// }
// process(12, 10);