function addTask() {
    const taskText = document.getElementById("task").value;
    const dateText = document.getElementById("date").value;
    const tagsText = document.getElementById("tags").value;
    const infoText = document.getElementById("info").value;

    if (taskText.trim() === "") {
        alert("Por favor, ingresa una tarea válida.");
        return;
    }

    const tags = ["trabajo", "personal", "importante", "compras"];

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} - Fecha: ${dateText} - Tags: ${tagsText} - Info: ${infoText}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(taskItem);

    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("info").value = "";
}