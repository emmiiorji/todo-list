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