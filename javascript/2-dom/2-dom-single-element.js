

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
// console.log(taskTitle.textContent = "Task List");
// console.log(taskTitle.innerText = "Task List2");
// taskTitle.innerHTML = "<span>Lokesh is a good or bad</span>";


// document.querySelector("");

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".collection"));
const li = document.querySelector("li");

document.querySelector("li:nth-child(3)").style.color = "green";
document.querySelector("li:first-child").style.color = "blue";
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(odd)").style.color = "yellow";
document.querySelector("li:nth-child(even)").style.color = "purple";
document.querySelector("ul>li:first-child").style.color = "orange";

