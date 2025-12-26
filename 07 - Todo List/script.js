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
    li.style.listStyle = "none";
    li.classList.add('todo-item');
    
    //wrapper inside li for checkbox and textSpan
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-content');
 
    //checkbox to toggle task completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!task.completed; //convert any value to true or false
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;

        //Strike-Through when completed
        textSpan.style.textDecoration = task.completed ? "line-through" : "";
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

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(textSpan);

    //Delete Task Button
    const delBtn = document.createElement('button');
    delBtn.id = 'delBtn';
    delBtn.textContent = "Delete";
    delBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
        saveTasks();
    })

    li.appendChild(taskDiv);
    li.appendChild(delBtn);
    
    return li;
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = createTask(task, index);
        taskList.appendChild(taskElement);
    });
    
    // After rendering the tasks, adjust the checkbox alignment
    setTimeout(adjustAllCheckboxes, 0);
}

function adjustCheckboxAlignment(todoItem, textSpan) {
    const lineHeight = parseFloat(getComputedStyle(textSpan).lineHeight);
    const textHeight = textSpan.offsetHeight;
    
    if (textHeight > lineHeight * 1.5) {
        todoItem.style.alignItems = "flex-start";
        todoItem.querySelector('input[type="checkbox"]').style.marginTop = "2px";
    } else {
        todoItem.style.alignItems = "center";
        todoItem.querySelector('input[type="checkbox"]').style.marginTop = "0";
    }
}

function adjustAllCheckboxes() {
    const todoItems = document.querySelectorAll('.todo-item');
    
    todoItems.forEach(item => {
        const textSpan = item.querySelector('.task-content span');
        adjustCheckboxAlignment(item, textSpan);
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
taskInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
       addTask();
    }
})

window.addEventListener('resize', adjustAllCheckboxes);

// Initial render of tasks
renderTasks();
