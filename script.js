const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

// Add ID to new div

function addID(div) {
  for (let i = 0; i < 4; i++) {
    div.id = `new-task${i}`;
  }
}

// Add Task

function addTask(taskInput) {
  // Creating New Div
  const newDiv = document.createElement('div');
  // Adding class name to new div
  newDiv.className = 'new-task';
  // newDiv.id = 'new-task';
  // Assigning content inside new div
  const newTask = document.createTextNode(`${taskInput.value}`);
  newTask.className = 'new-task-text';
  // Add ID function
  addID(newDiv);
  // Appending new content to new div
  newDiv.appendChild(newTask);
  
  // Create delete button in new div

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn-delete';
  deleteButton.id = 'delete';
  const deleteButtonContent = document.createTextNode('X');
  deleteButton.appendChild(deleteButtonContent);
  

  // Append delete button to new div
  newDiv.appendChild(deleteButton);
  
  // Delete Task Function
  deleteButton.addEventListener('click', function() {
    deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
  });

  // Establishing parent element
  const parentDiv = document.querySelector('.form');
  // Inserting new div into DOM
  parentDiv.insertBefore(newDiv, button);

  
}

// Clear input on submit
function clearInput(input) {
  input.value = '';
}



//Event Listeners

form.addEventListener('submit', function(e) {
  e.preventDefault();

  addTask(input);
  clearInput(input);
} )

