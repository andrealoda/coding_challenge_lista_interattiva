const taskBtn = document.getElementById('task-btn');
taskBtn.addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const taskBox = document.querySelector('.task-box');

    // --- nodi
    const taskRow = document.createElement('div');
    taskRow.classList.add('task-row');
    const taskCheck = document.createElement('div');
    taskCheck.classList.add('task-check');
    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    const taskTrash = document.createElement('div');
    taskTrash.classList.add('task-trash');

    // --- contenuto
    taskCheck.innerHTML = '<i class="bi bi-square"></i>';
    taskText.innerHTML = `&nbsp; ${taskInput} &nbsp;`;
    taskTrash.innerHTML = '<i class="bi bi-trash"></i>';

    // trash a task
    taskTrash.addEventListener('click', deleteFunction);
    function deleteFunction() { taskRow.remove() };


    // --- toggle check
    taskCheck.addEventListener('click', () => {
        if (taskCheck.innerHTML === '<i class="bi bi-square"></i>') {
            taskCheck.innerHTML = '<i class="bi bi-check-square-fill"></i>';
            taskText.classList.add('line-through');
        }
        else {
            taskCheck.innerHTML = '<i class="bi bi-square"></i>';
            taskText.classList.remove('line-through');
        }
    });


    const errorDisplay = document.querySelector('.error');

    if (taskInput === '') {
        errorDisplay.innerHTML = 'Non puoi aggiungere un&apos;attività vuota.';
        errorDisplay.style.display = 'block'
    } else {
        taskRow.append(taskCheck, taskText, taskTrash);
        taskBox.appendChild(taskRow);
        errorDisplay.style.display = 'none';
    }

}

