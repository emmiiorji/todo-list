// eslint-disable-next-line import/no-cycle
import tasks from './tasks.js';

class TaskManager {
  constructor() {
    this.enterTodo = document.getElementById('enter-todo');
  }

  addTask(e) {
    const task = {
      description: e.target.value,
      completed: false,
      index: tasks.todoData.length + 1,
    };
    tasks.todoData = this.writeLocalCollection(tasks.storageKey, task);
    console.log(tasks.todoData);
  }

  setValue(element, value = '') {
    element.value = value;
    return this;
  }

  readLocalCollection(key) {
    this.data = JSON.parse(localStorage.getItem(key)) || [];
    return this.data;
  }

  writeLocalCollection(key, item) {
    const existingData = this.readLocalCollection(key);
    existingData.push(item);
    localStorage.setItem(key, JSON.stringify(existingData));
    return existingData;
  }
}

const taskManager = new TaskManager();
export default taskManager;