// Define a UI VARS
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#btn-clear");




// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){
   
    // Add Task
    form.addEventListener("submit", addTask);

    // Remove task
    taskList.addEventListener("click", removeTask);
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

         // Clear the input value
         taskInput.value = "";

    }
 
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
      }
}




// Event delegation in JavaScript is a pattern that 
// efficiently handles events. Events can be added to 
// a parent element instead of adding to every single element.
}
