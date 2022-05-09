// eslint-disable-next-line import/no-cycle
import tasks from './tasks.js';

class TaskManager {
  constructor() {
    this.enterTodo = document.getElementById('enter-todo');
    this.data = null;
  }

  addTask(value) {
    const task = {
      description: value,
      completed: false,
      // index: tasks.todoData.length + 1,
    };
    tasks.todoData = this.writeLocalCollection(tasks.storageKey, task);
  }

  deleteTask(taskIndex) {
    const taskToDelete = tasks.todoData[taskIndex];
    tasks.todoData = tasks.todoData.filter((data, index) => index !== taskIndex);
    this.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
    return taskToDelete;
  }

  modifyTask(taskObject, taskIndex) {
    // To receive only the keys necessary to be changed
    Object.entries(taskObject).forEach(([key, value]) => {
      tasks.todoData[taskIndex][key] = value;
    });
    this.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
  }

  clearCompletedTasks(taskIndexes) {
    tasks.todoData = tasks.todoData.filter((task, index) => !taskIndexes.includes(index));
    this.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
  }

  setValue(element, value = '') {
    element.value = value;
    return this.undefined; // Return undefined as though there's no return statement
  }

  readLocalCollection(key) {
    this.data = JSON.parse(localStorage.getItem(key)) || [];
    return this.data;
  }

  writeLocalCollection(key, item, single = true) { // When single is false, do a replace
    let existingData;
    if (single) {
      existingData = this.readLocalCollection(key);
      existingData.push(item);
    } else {
      existingData = item;
    }

    localStorage.setItem(key, JSON.stringify(existingData));
    return existingData;
  }
}

const taskManager = new TaskManager();
export default taskManager;