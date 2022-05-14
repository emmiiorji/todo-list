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
const enterBu = document.querySelector('.enter');

describe('Adding task', () => {
  test('Task is added on enter press', (description = 'Visit the gym') => {
    enterTodo.value = description;
    const countRendered = todoCollection.childNodes.length;

    enterTodo.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    expect(todoCollection.childNodes.length).toBe(countRendered + 1);
    expect(todoCollection.querySelectorAll('.todo')[countRendered].value).toBe(description);
    expect(JSON.parse(localStorage.getItem(tasks.storageKey)).length).toBe(countRendered + 1);
  });

  test('Task is added on enter-button click', (description = 'Visit the gym again') => {
    enterTodo.value = description;
    const countRendered = todoCollection.childNodes.length;

    enterBu.click();

    expect(todoCollection.childNodes.length).toBe(countRendered + 1);
    expect(todoCollection.querySelectorAll('.todo')[countRendered].value).toBe(description);
    expect(JSON.parse(localStorage.getItem(tasks.storageKey)).length).toBe(countRendered + 1);
  });

  test('String that is empty when trimmed is not added', (description = ' ') => {
    enterTodo.value = description;
    const countRendered = todoCollection.childNodes.length;

    enterTodo.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));

    expect(todoCollection.childNodes.length).toBe(countRendered);
    expect(todoCollection.querySelectorAll('.todo')[countRendered]).toBe(undefined);
    expect(JSON.parse(localStorage.getItem(tasks.storageKey)).length).toBe(countRendered);
  });

  test('Task is deleted', () => {
    const countRendered = todoCollection.childNodes.length;
    const taskIndex = Math.floor(Math.random() * countRendered);// Randomly choose element to delete
    const toDelete = todoCollection.querySelector(`#entry_${taskIndex}`);

    toDelete.querySelector('.delete').dispatchEvent(new MouseEvent('mousedown'));

    expect(todoCollection.childNodes.length).toBe(countRendered - 1);
    expect(todoCollection.querySelectorAll('.todo')[countRendered - 1]).toBe(undefined);
    expect(JSON.parse(localStorage.getItem(tasks.storageKey)).length).toBe(countRendered - 1);
  });
});