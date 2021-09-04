let projects = [];
let tasks = [];
class Task {
  constructor(title, description, startDate, dueDate, priority, notes) {
    this.title = title
    this.description = description
    this.startDate = startDate
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = false
  }
};

class Project {
  constructor(title, tasks) {
    this.title = title
    this.tasks = tasks
  }
};

let projectForm = document.getElementById("projectForm");
projectForm.innerHTML =
  `
  <div class="text-center">
    <label for="title">Project Title:</label><br>
    <input class="px-10 rounded" type="text" id="project-title"><br><br>
    <button type="submit" class="bg-green-500 px-10 p-3 rounded"  id="create-project">Create Project</button>
  </div>
    `


let taskForm = document.getElementById("taskForm");
taskForm.innerHTML =
  `
  <div class="text-center">
    <label for="title">Task Title:</label><br>
    <input class="px-10 rounded" type="text" id="task-title"><br><br>
    <label for="description">Description:</label><br>
    <input class="px-10 rounded" type="text" id="description"><br><br>
    <label for="startDate">Start Date:</label><br>
    <input class="px-10 rounded" type="text" id="startDate"><br><br>
    <label for="dueDate">Due Date:</label><br>
    <input class="px-10 rounded" type="text" id="dueDate"><br><br>
    <label for="priority">Priority:</label><br>
    <input class="px-10 rounded" type="text" id="priority"><br><br>
    <label for="notes">Notes:</label><br>
    <input class="px-10 rounded" type="text" id="notes"><br><br>
    <button type="submit" class="bg-green-500 px-10 p-3 rounded"  id="create-task">Create Task</button>
  </div>
    `

function displayProject(project) {

  let main = document.getElementById("main");
  let projectUl = document.createElement("ul");
  projectUl.classList.add("text-center", "py-10")
  projectUl.addEventListener('click', e => {
    tasks.forEach(task => {
      displayTask(task);
    });
    console.log("hello")
  });



  projectUl.innerHTML =
    `
      <ul>
        <li>Title:${project.title}</li><br>
      </ul>
        `
  main.append(projectUl);

}



function displayTask(task) {

  let main = document.getElementById("main");
  let ul = document.createElement("ul");
  ul.classList.add("text-center", "py-10")

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
  let title = document.getElementById("task-title").value;
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
    displayTask(task);
  });
  console.log(tasks);



  // Projects consist of tasks because each project should have their own tasks.

})

console.log(tasks)

let titleDict = {}

function addProjects() {

  let title = document.getElementById("project-title").value;
  let project = new Project(title)
  // All Project titles should be unique. Loop through projects and make sure to push unique keys
  // unless project title is undefined, display it
  // after running code below, dict will not output the project title. Content of dict will be dict = {'123':true}
  // issue is you can't access the value but only the key. Accessing the value returns undefined, so just access key
  if (typeof titleDict[title] !== 'undefined') {} else {
    titleDict[title] = true;
    projects.push(project);
    displayProject(project);
  }
}



let projectSubmit = document.getElementById("create-project");

projectSubmit.addEventListener('click', e => {
  addProjects();
  console.log(projects);

});

// function process(a, b) {

//   a + b
//   console.log('12');
// }
// process(12, 10);