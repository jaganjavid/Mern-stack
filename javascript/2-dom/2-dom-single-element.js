

// document.getElementById();

// console.log(document.getElementById("task-form"));
// console.log(document.getElementById("task-form").id);
// console.log(document.getElementById("task-form").className);


const taskTitle = document.getElementById("task-title");

// console.log(taskTitle) // CSSStyleDeclaration

taskTitle.style.backgroundColor = "green";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "20px";

// change Content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "Task List";
taskTitle.innerHTML = "<span>Lokesh is a good or bad</span>";

console.log(taskTitle);
