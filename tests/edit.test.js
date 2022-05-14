/*
* @jest-environment jsdom
*/

/* eslint-disable global-require */
/* eslint-disable import/first */

document.body.innerHTML = `<article class="todo-container">
                            <header class="todo-header">
                              <h1>Today's To Do</h1>
                              <i class="fa-solid fa-rotate" id="refresh" title="Refresh"></i>
                            </header>

                            <hr class="divide">

                            <div class="enter-todo">
                              <input type="text" id="enter-todo" placeholder="Add to your list...">
                              <span class="material-icons enter" title="Click this or press enter to submit">keyboard_return</span> 
                            </div>

                            <hr class="divide">
                            
                            <ul id="todo-collection"></ul>
                            
                            <input type="button" id="clear-completed" value="Clear all Completed">
                          </article>`;
require('../src/js/index.js');

import tasks from '../src/js/tasks.js';

const enterTodo = document.getElementById('enter-todo');
const todoCollection = document.getElementById('todo-collection');
const clearCompleted = document.getElementById('clear-completed');

describe('Edit and Update Status', () => {
  beforeAll(() => {
    // Create some number of tasks
    const tasksCount = 5;
    [...Array(tasksCount).keys()].forEach((taskIndex) => {
      enterTodo.value = `I will do task ${taskIndex}`;
      enterTodo.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    });
  });

  test('Task is edited on blur', () => {
    const countRendered = todoCollection.childNodes.length;
    const taskIndex = Math.floor(Math.random() * countRendered);// Randomly choose task to edit
    const toEdit = todoCollection.querySelector(`#entry_${taskIndex}`);
    const description = `I will do task ${taskIndex}`;

    const descInput = toEdit.querySelector('.todo');
    descInput.value = description;

    descInput.blur();

    const newStorage = JSON.parse(localStorage.getItem(tasks.storageKey));
    expect(newStorage.length).toBe(countRendered);
    expect(newStorage[taskIndex].description).toBe(description);
    expect(todoCollection.childNodes.length).toBe(countRendered);
    expect(todoCollection.querySelectorAll('.todo')[taskIndex].value).toBe(description);
  });

  test('Task is edited on Enter key press', (description = 'Another edited task description') => {
    const countRendered = todoCollection.childNodes.length;
    const taskIndex = Math.floor(Math.random() * countRendered);// Randomly choose task to edit
    const toEdit = todoCollection.querySelector(`#entry_${taskIndex}`);

    const descInput = toEdit.querySelector('.todo');
    descInput.value = description;

    descInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    const newStorage = JSON.parse(localStorage.getItem(tasks.storageKey));
    expect(newStorage.length).toBe(countRendered);
    expect(newStorage[taskIndex].description).toBe(description);
    expect(todoCollection.childNodes.length).toBe(countRendered);
    expect(todoCollection.querySelectorAll('.todo')[taskIndex].value).toBe(description);
  });

  test('Task is marked complete', (taskIndex = 2) => {
    const countRendered = todoCollection.childNodes.length;
    const toEdit = todoCollection.querySelector(`#entry_${taskIndex}`);

    const taskCheckbox = toEdit.querySelector('.status');
    const currentStatus = taskCheckbox.checked;

    taskCheckbox.checked = !currentStatus;
    taskCheckbox.dispatchEvent(new Event('change')); // Invert the check status

    const newStorage = JSON.parse(localStorage.getItem(tasks.storageKey));
    expect(todoCollection.childNodes.length).toBe(countRendered);
    expect(newStorage.length).toBe(countRendered);
    expect(newStorage[taskIndex].completed)
      .toBe(!currentStatus);
  });

  test('Another task is marked complete', (taskIndex = 0) => {
    const countRendered = todoCollection.childNodes.length;
    const toEdit = todoCollection.querySelector(`#entry_${taskIndex}`);

    const taskCheckbox = toEdit.querySelector('.status');
    const currentStatus = taskCheckbox.checked;

    taskCheckbox.checked = !currentStatus;
    taskCheckbox.dispatchEvent(new Event('change')); // Invert the check status

    const newStorage = JSON.parse(localStorage.getItem(tasks.storageKey));
    expect(todoCollection.childNodes.length).toBe(countRendered);
    expect(newStorage.length).toBe(countRendered);
    expect(newStorage[taskIndex].completed).toBe(!currentStatus);
  });

  test('All completed are cleared', () => {
    const countRendered = todoCollection.childNodes.length;
    const checkedCount = Array.from(todoCollection.querySelectorAll('.status'))
      .filter((status) => status.checked === true).length;
    const uncompleted = JSON.parse(localStorage.getItem(tasks.storageKey))
      .filter((task) => task.completed === false);

    clearCompleted.click();

    const newStorage = JSON.parse(localStorage.getItem(tasks.storageKey));

    expect(newStorage).toEqual(uncompleted);
    expect(todoCollection.childNodes.length).toBe(countRendered - checkedCount);
    expect(newStorage.length).toBe(countRendered - checkedCount);
  });
});