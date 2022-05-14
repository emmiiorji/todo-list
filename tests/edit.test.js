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
  
  });