let taskId = 1;

function addTask(isDayList) {
    const textInput = document.getElementById("input-new-task").value.trim();
    let taskList;

    // selecionar o id equivalente para cada botão
    if (isDayList) {
        taskList = document.getElementById("day-task");
    } else {
        taskList = document.getElementById("night-task");
    }

    // não permite adicionar tarefas vazias
    if (textInput != null && textInput.length > 0) {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" id=${taskId}>
            <label for="${taskId}">
            <p>${textInput}</p>
            </label>
            <button class="deleteBtn">
                <img src="https://i.ibb.co/mSRM8kk/trash.png" alt="deletar tarefa">
            </button>
        `;

        const deleteButton = li.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', function() {
            removeTask(this);
        });

        taskList.appendChild(li);
        document.getElementById("input-new-task").value = "";
        taskId++;
    }
}

function removeTask(button) {
    const li = button.parentNode;
    const taskList = li.parentNode;
    taskList.removeChild(li);
}