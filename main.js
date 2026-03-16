function taskAdder() {
    const addTask = document.createElement('li');

    const taskList = document.getElementById('task-list');

    const taskInput = document.getElementById('task').value;
    const taskText = document.createTextNode(taskInput);
    const errorDisplay = document.querySelector('.error');
    errorDisplay.innerHTML = 'Non puoi aggiungere un&apos;attività vuota.';

    if (taskInput === '') {
        errorDisplay.style.display = 'block'
    } else {
        addTask.appendChild(taskText);
        taskList.appendChild(addTask);
        errorDisplay.style.display = 'none'
    }
}

