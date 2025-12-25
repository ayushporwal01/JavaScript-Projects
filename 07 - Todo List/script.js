let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.getElementById('task-list');

//Load Tasks
let saved = localStorage.getItem('tasks');
let tasks = saved ? JSON.parse(saved) : [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTasks(task, index) {
    const li = document.createElement('li');

    //checkbox to toggle completion
    const checkbox = docuement.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!task.completed; //convert any value to true or false
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        //Strike-Through when completed

        saveTasks();
    })
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = createTasks(task, index);
        taskList.appendChild(taskElement);
    });
}