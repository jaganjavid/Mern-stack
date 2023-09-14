

const taskInput = document.getElementById("task");

// Key Board
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent); // ***
// taskInput.addEventListener("focus", runEvent); 
// taskInput.addEventListener("blur", runEvent); 
// taskInput.addEventListener("cut", runEvent); 
// taskInput.addEventListener("copy", runEvent); 
taskInput.addEventListener("paste", runEvent); 










function runEvent(e){
    // console.log(e);
    console.log(`Event Type : ${e.type}`);
    console.log(e.target.value);
}