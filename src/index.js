document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function handleFormSubmission(event){
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;
    const taskUser = document.getElementById('task-user').value;
    const taskDuration = document.getElementById('task-duration').value;
    const taskDateDue = document.getElementById('task-date-due').value;

    const newTaskElement = document.createElement('li');
    newTaskElement.innerHTML = `
    <strong>${taskDescription}</strong> (User: ${taskUser}, Duration: ${taskDuration}, Due Date: ${taskDateDue}) `;

      //delete function to remove tasks
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.addEventListener('click', () => {
        newTaskElement.remove();
      });
      newTaskElement.appendChild(deleteButton);

      const taskList = document.getElementById('tasks');
      taskList.appendChild(newTaskElement);
      taskInput.value = '';
      document.getElementById('task-user').value = '';
      document.getElementById('task-duration').value = '';
      document.getElementById('task-date-due').value = '';


  }
  const createTaskForm = document.getElementById('create-task-form');
  createTaskForm.addEventListener('submit', handleFormSubmission);
});
