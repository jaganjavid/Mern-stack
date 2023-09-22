// Define a UI VARS
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#btn-clear");
const searchInput = document.getElementById("searchInput");



// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){
   
    // Add Task
    form.addEventListener("submit", addTask);

    // Remove Task
    taskList.addEventListener("click", removeTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask);

    // Search TAsk
    searchInput.addEventListener("input", search);

    // Event will run when page relode
    document.addEventListener("DOMContentLoaded", getTasks);


    
}

// Get Tasks

function getTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")); //array
    }

    if(tasks.length > 0){
        tasks.forEach(function(item){
            // create a li element
            const li = document.createElement("li");

            // Add class
            li.className = "collection-item";

            // Create a text node and append to li
            li.appendChild(document.createTextNode(item));

            // li.innerText = "Hello"

            // Create a New link element
            const link = document.createElement("a");

            // Add class to link
            link.className = "delete-item secondary-content";

            // Add icon to link
            link.innerHTML = `<i class="fa fa-remove"></i>`;

            // Append the link to li
            li.appendChild(link);

            // append li to ul
            taskList.appendChild(li);
        })
    }
}


// Add to task

function addTask(e){
    e.preventDefault();
    
    if(taskInput.value === ""){
        alert("Add the task");
        // return;
    }else {

        // create a li element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Create a text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        // li.innerText = "Hello"

        // Create a New link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append the link to li
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);

        // STORE IN LS
        storeInLS(taskInput.value);

         // Clear the input value
         taskInput.value = "";

    }
 
}

// Store in local storage

function storeInLS(taskValue){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")); //array
    }

    tasks.push(taskValue);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// Remove Task

function removeTask(e){

   
// if(e.target.parentElement.className === "delete-item secondary-content"){
//  if(confirm("Are you sure")){
//     e.target.parentElement.parentElement.remove();
//  }
// } 

// if(e.target.parentElement.classList)

// ***

if(e.target.parentElement.classList.contains("delete-item")){
     if(confirm("Are you sure")){
        e.target.parentElement.parentElement.remove();
        removeFromLs(e.target.parentElement.parentElement);
      }

      
}

// Event delegation in JavaScript is a pattern that 
// efficiently handles events. Events can be added to 
// a parent element instead of adding to every single element.

}

function removeFromLs(taskElement){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")); //array
    }

    tasks.forEach(function(task, index){
       if(taskElement.textContent === task){
          tasks.splice(index, 1);
       }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function clearTask(){
    taskList.innerHTML = null;

    // let lists = document.querySelectorAll("li");
    // lists.forEach(function (task) {
    //     task.remove();
    // });

    clearTaskFromLs();
}

function clearTaskFromLs(){
    localStorage.removeItem("tasks");
}

function search(e){

    const items = document.querySelectorAll("li");
    
    const searchTerm = e.target.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }

}

// const arr = [1,2,3];

// const arrayToString = JSON.stringify(arr);

// const stringToArray = JSON.parse(arrayToString);


// console.log(arrayToString);
// console.log(typeof arrayToString);

// const arr = [1,2,3];

// arr.splice(1,2);

// console.log(arr)







