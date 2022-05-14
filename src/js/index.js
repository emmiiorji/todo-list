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

// General declaration that re-rendering lists will not affect
const enterTodo = document.getElementById('enter-todo');
const enterBu = document.querySelector('.enter');
const clearCompleted = document.getElementById('clear-completed');
const refreshBu = document.getElementById('refresh');

const addRefreshingListeners = () => {
  const descInput = document.querySelectorAll('.todo');
  const deleteButtons = document.querySelectorAll('.delete');
  const statuses = document.querySelectorAll('.status');

  descInput.forEach((element) => {
    ['focus', 'blur', 'keyup'].forEach((evt) => {
      element.addEventListener(evt, (e) => {
        const todoEntry = e.target.parentNode;

        // Modify the looks
        todoEntry.classList.toggle('highlight-input');
        todoEntry.querySelector('.delete').classList.toggle('hide');
        todoEntry.querySelector('.reorder').classList.toggle('hide');

        if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {
          // It's a modify
          const taskIndex = Number(e.target.parentNode.id.split('_')[1]);
          taskManager.modifyTask({ description: e.target.value }, taskIndex);
          todoEntry.classList.remove('highlight-input');
          todoEntry.querySelector('.delete').classList.add('hide');
          todoEntry.querySelector('.reorder').classList.remove('hide');
          e.target.blur();
        }
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

  statuses.forEach((status) => {
    status.addEventListener('change', (e) => {
      const taskIndex = Number(e.target.parentNode.id.split('_')[1]);
      taskManager.modifyTask({ completed: e.target.checked }, taskIndex);
    });
  });
};

addRefreshingListeners();

const addOneTimeListeners = () => {
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

  // Clear completed tasks
  clearCompleted.addEventListener('click', () => {
    const todoEntries = Array.from(document.querySelectorAll('.todo-entry'));
    const completedTasks = todoEntries.filter((todoEntry) => todoEntry.querySelector('.status').checked);
    const taskIndexes = completedTasks.map((completedTask) => Number(completedTask.id.split('_')[1]));
    taskManager.clearCompletedTasks(taskIndexes);
    renderLists();
    addRefreshingListeners();
  });

  refreshBu.onclick = (e) => {
    e.target.classList.add('rotate');
    setTimeout(() => {
      e.target.classList.remove('rotate');
    }, 500);
    renderLists();
  };
};

addOneTimeListeners();
