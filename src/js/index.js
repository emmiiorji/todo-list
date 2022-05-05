import '../css/style.css';
import tasks from './tasks.js';
import taskManager from './taskManager.js';

const markupAllLists = () => {
  let allLists = '';
  tasks.todoData.forEach((data, index) => {
    allLists += `<li class="todo-item">
                    <div class="todo-entry" id=entry_${index}>
                      <input type="checkbox" ${data.completed ? 'checked' : ''} class="status" title="Check!">
                      <input type="text" class="todo" value="${data.description}">
                      <i class="fa-solid fa-trash-can delete hide" title="Delete entry"></i>
                      <i class="fa-solid fa-ellipsis-vertical reorder" title="Move"></i>
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

// const todoEntry = document.querySelectorAll('.todo-entry');
const reorderButtons = document.querySelectorAll('.reorder');
const refreshButton = document.getElementById('reorder');
const status = document.querySelectorAll('.status');
const clearCompleted = document.getElementById('clear-completed');

const addRefreshingListeners = () => {
  const descInput = document.querySelectorAll('.todo');
  const deleteButtons = document.querySelectorAll('.delete');

  descInput.forEach((element) => {
    ['focus', 'blur'].forEach((evt) => {
      element.addEventListener(evt, (e) => {
        const todoEntry = e.target.parentNode;
        todoEntry.classList.toggle('highlight-input');
        todoEntry.querySelector('.delete').classList.toggle('hide');
        todoEntry.querySelector('.reorder').classList.toggle('hide');
      });
    });
  });

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('mousedown', (e) => {
      const taskIndex = Number(e.target.parentNode.id.split('_')[1]);
      taskManager.deleteTask(taskIndex);
      renderLists();
      addRefreshingListeners();
    });
  });
};

addRefreshingListeners();

const addEventListeners = () => {
  const enterTodo = document.getElementById('enter-todo');
  const enterBu = document.querySelector('.enter');

  // Save todo events. Clicking enter icon or pressing enter key saves an entry
  const eventPairs = { keyup: enterTodo, click: enterBu };
  Object.entries(eventPairs).forEach(([evt, element]) => {
    element.addEventListener(evt, (e) => {
      if (enterTodo.value.trim() !== '') {
        if (evt === 'keyup' && !(e.key === 'Enter')) return;

        taskManager.addTask(enterTodo.value);
        renderLists();
        addRefreshingListeners();
        taskManager.setValue(enterTodo, '');
      }
    });
  });
};

addEventListeners();
