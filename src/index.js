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
  <div class="text-center">
    <label for="title">Title:</label><br>
    <input class="px-10" type="text" id="title"><br><br>
    <label for="description">Description:</label><br>
    <input class="px-10" type="text" id="description"><br><br>
    <label for="startDate">Start Date:</label><br>
    <input class="px-10" type="text" id="startDate"><br><br>
    <label for="dueDate">Due Date:</label><br>
    <input class="px-10" type="text" id="dueDate"><br><br>
    <label for="priority">Priority:</label><br>
    <input class="px-10" type="text" id="priority"><br><br>
    <label for="notes">Notes:</label><br>
    <input class="px-10" type="text" id="notes"><br><br>
    <button type="submit" class="bg-green-500 px-10 p-3 rounded"  id="create-task">Create Task</button>
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

  <div class="bg-blue w-full p-8 flex justify-center font-sans">
<div class="rounded bg-grey-light w-64 p-2">
  <div class="flex justify-between py-1">
  	<h3 class="text-sm">New landing page</h3>
    <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
  </div>
  <div class="text-sm mt-2">
  	<div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        Do a mobile first layout
	</div>
    
  	<div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        Check the meta tags
	</div>
    
  	<div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        Check the responsive layout on all devices
      	<div class="text-grey-darker mt-2 ml-2 flex justify-between items-start">
          	<span class="text-xs flex items-center">
      			<svg class="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"/></svg>
              	3/5
          	</span>
          	<img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full" />
      	</div>
	</div>
    <p class="mt-3 text-grey-dark">Add a card...</p>
  </div>
</div>
</div>

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