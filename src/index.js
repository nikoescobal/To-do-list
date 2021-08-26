let tasks = [];
class Task {
  constructor(title, description, startDate, dueDate, priority, notes) {}
};

let main = document.getElementById("main");

main.innerHTML =
  `
  
  `

let title = document.getElementById("title").value;
let description = document.getElementById("description").value;
let startDate = document.getElementById("startDate").value;
let dueDate = document.getElementById("dueDate").value;
let priortiy = document.getElementById("priority").value;
let notes = document.getElementById("notes").value;

let task = new Task('Throw trash', 'throwing trash', '12-12-2021', '12-12-2021', 'urgent', 'do this every thurs')

tasks.push(task)



console.log(tasks)