const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const sortSelect = document.getElementById('sortSelect');

let tasks = [];

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

function renderTasks() {
    taskList.innerHTML = '';
    const filter = sortSelect.value;

    let filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const realIndex = tasks.indexOf(task);

        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        const taskInfoDiv = document.createElement('div');
        taskInfoDiv.className = 'task-info';

        if (!task.completed) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                tasks[realIndex].completed = !tasks[realIndex].completed;
                renderTasks();
            });
            taskInfoDiv.appendChild(checkbox);
        }

        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.text;

        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.textContent = `(${formatDate(task.createdAt)})`;

        taskInfoDiv.appendChild(textSpan);
        taskInfoDiv.appendChild(dateSpan);

        taskInfoDiv.addEventListener('dblclick', () => {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'edit-input';
            editInput.value = task.text;

            taskInfoDiv.replaceChild(editInput, textSpan);
            dateSpan.style.display = 'none';
            editInput.focus();

            editInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const newText = editInput.value.trim();
                    if (newText !== '') {
                        tasks[realIndex].text = newText;
                    }
                    renderTasks();
                }
            });

            editInput.addEventListener('blur', () => {
                const newText = editInput.value.trim();
                if (newText !== '') {
                    tasks[realIndex].text = newText;
                }
                renderTasks();
            });
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(realIndex, 1);
            renderTasks();
        });

        li.appendChild(taskInfoDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const text = taskInput.value.trim();
        if (text !== '') {
            const newTask = {
                text: text,
                completed: false,
                createdAt: new Date().toISOString()
            };
            tasks.push(newTask);
            taskInput.value = '';
            renderTasks();
        }
    }
});

sortSelect.addEventListener('change', renderTasks);