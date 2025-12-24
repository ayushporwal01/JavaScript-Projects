const taskInput = document.getElementById('task-input');
const taskText = taskInput.value.trim();

if(taskText == '') return;

const taskList = document.querySelector('task-list')

const taskItem = document.createElement('li');
taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="options">
        <i class="fa-solid fa-ellipsis"></i>
    </span>
`;
taskList.appendChild(taskItem);

taskInput.value = '';

const options = taskItem.querySelector('.options');
options.addEventListener('click', () => {
    const optionsMenu = document.createElement('div');
    optionsMenu.classList.add('options-menu');
    optionsMenu.innerHTML = `
       <p class="edit">Edit</p>
       <p class="edit">Delete</p>
       <p class="edit">Mark As Completed</p>
    `;
    taskItem.appendChild(optionsMenu);


    //Edit functionality
    const editBtn = optionsMenu.querySelector('.edit');
    editBtn.addEventListener('click', () => {
        const taskTextSpan = taskItem.querySelector('.task-text');
        const newTaskText = prompt('Edit task:', taskTextSpan.textContent);
        if(newTaskText) {
           taskTextSpan.textContent = newTaskText;
        }
        taskItem.removeChild(optionsMenu);
    });

    // Delete functionality
    const deleteBtn = optionsMenu.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Mark as Completed functionality
    const markCompletedBtn = optionsMenu.querySelector('.mark-completed');
    markCompletedBtn.addEventListener('click', () => {
        taskItem.querySelector('.task-text').classList.toggle('task-completed');
        taskItem.removeChild(optionsMenu);
    });

})