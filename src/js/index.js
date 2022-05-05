import '../css/style.css';
import tasks from './tasks.js';
import taskManager from './taskManager.js';

const markupAllLists = () => {
  let allLists = '';
  tasks.todoData.forEach((data, index) => {
    allLists += `<li class="todo-item">
                    <div class="todo-entry" id=entry_${index+1}>
                      <input type="checkbox" ${data.completed ? 'checked' : ''} status' title="Check!">
                      <input type="text" class="todo" value="${data.description}">
                      <i class="fa-solid fa-trash-can delete hide"></i>
                      <i class="fa-solid fa-ellipsis-vertical reorder"></i>
                    </div>
                    <hr class="divide">
                  </li>`;
  });
  return allLists;
};

const renderLists = () => {
  const todoCollection = document.getElementById('todo-collection');
  todoCollection.innerHTML = markupAllLists();
};

renderLists();

// Declarations partaining to list items must come after rendering lists
const enterTodo = document.getElementById('enter-todo');
const enterBu = document.querySelector('.enter');
const deleteButtons = document.querySelectorAll('.delete');
const reorderButtons = document.querySelectorAll('.reorder');
const refreshButton = document.getElementById('reorder');
const descInput = document.querySelectorAll('.todo');

const addEventListeners = () => {
  enterTodo.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      taskManager.addTask(e);

      renderLists();
      taskManager.setValue(e.target, '');
    }
  });
};

addEventListeners();