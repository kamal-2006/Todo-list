document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    function createTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = taskText;

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = function() {
            const newText = prompt('Enter new task:', taskText);
            if (newText !== null) {
                li.innerHTML = newText;
                li.appendChild(editButton);
                li.appendChild(deleteButton);
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }

    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });
});
