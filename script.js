// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add a delete button to the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    // Add event listener to toggle completion
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Optional: Clear all tasks
function clearTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}
