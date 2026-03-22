

function taskAdder() {
    const addTask = document.createElement('li');

    const taskList = document.getElementById('task-list');

    const taskInput = document.getElementById('task').value;
    document.getElementById('task').value = '';

    // const taskText = document.createTextNode(taskInput);

    const errorDisplay = document.querySelector('.error');
    
    const divLi = document.createElement('div');
    divLi.classList.add('task-row');
    divLi.innerHTML = `
        <i class="bi bi-square"></i>
        <i class="bi bi-check-square-fill"></i>
        <span>${taskInput}</span>
        <i class="bi bi-trash"></i>`;

    if (taskInput === '') {
        errorDisplay.innerHTML = 'Non puoi aggiungere un&apos;attività vuota.';
        errorDisplay.style.display = 'block'
    } else {
        addTask.appendChild(divLi);
        taskList.appendChild(addTask);
        errorDisplay.style.display = 'none'


    }
}
