// document.getElementById('btn').addEventListener('click',
//     function() {
//         console.log('click');
//     }
// );





function taskAdder() {
    const addTask = document.createElement('li');

    const taskList = document.getElementById('task-list');

    const taskInput = document.getElementById('task').value;
    const taskText = document.createTextNode(taskInput);
    const errorDisplay = document.querySelector('.error');

    // addTask.appendChild(taskText);

    // taskList.appendChild(addTask);

    if (taskInput === '') {
        errorDisplay.style.display = 'block'

    } else {
        addTask.appendChild(taskText);

        taskList.appendChild(addTask);
        errorDisplay.style.display = 'none'

    }

}

