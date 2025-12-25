let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.getElementById('task-list');

//Load Tasks
let saved = localStorage.getItem('tasks');
let tasks = saved ? JSON.parse(saved) : [];

function saveTask() {
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask() {

}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const task = createTask(task, index);
        taskList.appendChild(task);
    });
}