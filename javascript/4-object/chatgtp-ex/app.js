function addTask(e) {
    e.preventDefault();

    if (taskInput.value === "") {
        alert("Add the task");
    } else {
        // Generate a unique ID (you can use a timestamp or a random string)
        const uniqueId = generateUniqueId();

        // Create a li element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Set a unique ID to the li element
        li.setAttribute("data-task-id", uniqueId);

        // Create a text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        // Create a New link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        // STORE IN LS with unique ID
        storeInLS(uniqueId, taskInput.value);

        // Clear the input value
        taskInput.value = "";
    }
}

// Function to generate a unique ID (you can customize this)
function generateUniqueId() {
    return Date.now().toString(); // Using timestamp as a simple example
}

// Modify your storeInLS function to accept a unique ID
function storeInLS(taskId, taskValue) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = {};
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")); // object
    }

    tasks[taskId] = taskValue; // Store the task with its unique ID

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
