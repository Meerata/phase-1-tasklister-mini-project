document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTaskDescription = document.getElementById(
      "new-task-description"
    ).value;
    if (newTaskDescription === "") return;

    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;

    // Delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    document.getElementById("new-task-description").value = "";
  });
});
