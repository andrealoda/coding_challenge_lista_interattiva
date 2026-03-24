function taskAdder() {
    const addTask = document.createElement('li');

    const checkBox = document.createElement('div');
    checkBox.innerHTML = '<i class="bi bi-square"></i>';
    checkBox.addEventListener('click', checkBoxSelection);
    function checkBoxSelection () {
        if (checkBox.innerHTML === '<i class="bi bi-square"></i>') {
        checkBox.innerHTML = '<i class="bi bi-check-square-fill"></i>';
        divLi.classList.add('line-through');}
        else {
                checkBox.innerHTML = '<i class="bi bi-square"></i>';
                divLi.classList.remove('line-through')
        }
    };
    
    const taskInput = document.getElementById('task').value;
    document.getElementById('task').value = '';
    const divLi = document.createElement('div');
    divLi.classList.add('task-row');
    divLi.innerHTML = `&nbsp; ${taskInput} &nbsp;`;

    const trashIcon = document.createElement('div');
    trashIcon.innerHTML = '<i class="bi bi-trash"></i>';
    trashIcon.addEventListener('click', deleteFunction);
    function deleteFunction () {divLi.remove()};

    const taskList = document.getElementById('task-list');

    const errorDisplay = document.querySelector('.error');

    if (taskInput === '') {
        errorDisplay.innerHTML = 'Non puoi aggiungere un&apos;attività vuota.';
        errorDisplay.style.display = 'block'
    } else {
        addTask.appendChild(divLi);
        taskList.appendChild(addTask);
        divLi.appendChild(checkBox);
        divLi.appendChild(trashIcon);
        errorDisplay.style.display = 'none'
    }

}
