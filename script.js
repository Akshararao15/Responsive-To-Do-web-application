const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener for the Enter button
addTaskButton.onclick = () => {
    addTask();
};

// Add event listener for the Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = task; // Set the text of the new list item
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖'; // Cross icon
        deleteButton.className = 'delete-button';
        
        // Add click event to delete the task
        deleteButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item
        };

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem); // Add the new task to the list
        taskInput.value = ''; // Clear the input after adding the task
    } else {
        alert('Please enter a task!'); // Alert if input is empty
    }
}
