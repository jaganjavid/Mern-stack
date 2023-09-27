document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const notification = document.getElementById("notification");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskTitle = document.getElementById("task-title").value;
        if (taskTitle.trim() === "") {
            showAlert("Please enter a task title", "alert-danger");
            return;
        }

        addTask(taskTitle);
        taskForm.reset();
        showAlert("Task added successfully", "alert-success");
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-button")) {
            deleteTask(e.target.parentElement);
            showAlert("Task deleted successfully", "alert-success");
        } else if (e.target.classList.contains("complete-toggle")) {
            toggleComplete(e.target.parentElement);
        }
    });

    function showAlert(message, className) {
        notification.textContent = message;
        notification.className = `alert ${className}`;
        notification.style.display = "block";

        setTimeout(function () {
            notification.style.display = "none";
        }, 3000);
    }

    function addTask(title) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-title">${title}</span>
            <button class="complete-toggle">Complete</button>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function deleteTask(task) {
        task.remove();
    }

    function toggleComplete(task) {
        const title = task.querySelector(".task-title");
        title.classList.toggle("complete");
        const completeButton = task.querySelector(".complete-toggle");
        completeButton.textContent = title.classList.contains("complete") ? "Undo" : "Complete";
    }

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-button")) {
            deleteTask(e.target.parentElement);
            showAlert("Task deleted successfully", "alert-success");
        } else if (e.target.classList.contains("complete-toggle")) {
            toggleComplete(e.target.parentElement);
        }
    });

    function toggleComplete(task) {
        const title = task.querySelector(".task-title");
        title.classList.toggle("complete");
        const completeButton = task.querySelector(".complete-toggle");
        completeButton.textContent = title.classList.contains("complete") ? "Undo" : "Complete";

        if (title.classList.contains("complete")) {
            // Move the completed task to the completed task list
            const completedTaskList = document.getElementById("completed-task-list");
            completedTaskList.appendChild(task);
            document.getElementById("completed-tasks").style.display = "block";
        } else {
            // Move the task back to the tasks list
            const taskList = document.getElementById("task-list");
            taskList.appendChild(task);

            // Check if there are no completed tasks left
            const completedTaskList = document.getElementById("completed-task-list");
            if (completedTaskList.children.length === 0) {
                document.getElementById("completed-tasks").style.display = "none";
            }
        }
    }
});
