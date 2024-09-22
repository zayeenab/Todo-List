document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
    taskInput.value = ""; // Clear the input
});
