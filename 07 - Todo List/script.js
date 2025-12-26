let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.getElementById('task-list');

//Load Tasks
let saved = localStorage.getItem('tasks');
let tasks = saved ? JSON.parse(saved) : [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask(task, index) {
    const li = document.createElement('li');

    //checkbox to toggle completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!task.completed; //convert any value to true or false
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        //Strike-Through when completed

        saveTasks();
    })

    //Todo Text
    const textSpan = document.createElement("span");
    textSpan.textContent = task.text; 
    textSpan.style.margin = `0 8px`;
    if(task.completed) {
        textSpan.style.textDecoration = `line-through`;
    }

    //Add double-click event listener
    textSpan.addEventListener("dblclick", () => {
        const newText = prompt("Edit Task", task.text);
        if(newText !== null) {
            task.text = newText.trim();
            textSpan.textContent = task.text;
            saveTasks();
        }

    })

    //Delete Task Button
    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
        saveTasks();
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);
    return li;
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = createTask(task, index);
        taskList.appendChild(taskElement);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if(!text) {
       return;
    }

    //Push a new task object
    tasks.push({text, completed: false});
    taskInput.value = '';
    renderTasks();
    saveTasks();
}

addBtn.addEventListener("click", addTask);
renderTasks();
