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
}

// Function to adjust checkbox alignment based on text wrapping
function adjustCheckboxAlignment() {
    const todoItems = document.querySelectorAll('.todo-item');
    
    todoItems.forEach(item => {
        const checkbox = item.querySelector('.checkbox');
        const label = item.querySelector('.task-content span');

        // Function to check if the text has wrapped
        function checkTextWrap() {
            if (label.scrollHeight > label.clientHeight) {
                // If text is wrapped, align checkbox to the top of text
                item.style.alignItems = "flex-start";
            } else {
                // If text is a single line, align checkbox to center vertically
                item.style.alignItems = "baseline";
            }
        }

        // Run check initially and when window is resized
        checkTextWrap();
        window.addEventListener('resize', checkTextWrap);
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
renderTasks();
