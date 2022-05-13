import tasks from './tasks.js';
import readWriteLocal from './readWriteLocal.js';

class TaskManager {
  constructor() {
    this.enterTodo = document.getElementById('enter-todo');
    this.data = null;
  }

  addTask(value) {
    const task = {
      description: value,
      completed: false,
    };
    tasks.todoData = readWriteLocal.writeLocalCollection(tasks.storageKey, task);
    return this.undefined;
  }

  deleteTask(taskIndex) {
    const taskToDelete = tasks.todoData[taskIndex];
    tasks.todoData = tasks.todoData.filter((data, index) => index !== taskIndex);
    readWriteLocal.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
    this.taskToDelete = taskToDelete;
    return taskToDelete;
  }

  modifyTask(taskObject, taskIndex) {
    // To receive only the keys necessary to be changed
    Object.entries(taskObject).forEach(([key, value]) => {
      tasks.todoData[taskIndex][key] = value;
    });
    readWriteLocal.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
    return this.undefined;
  }

  clearCompletedTasks(taskIndexes) {
    tasks.todoData = tasks.todoData.filter((task, index) => !taskIndexes.includes(index));
    readWriteLocal.writeLocalCollection(tasks.storageKey, tasks.todoData, false);
    return this.undefined;
  }

  setValue(element, value = '') {
    element.value = value;
    return this.undefined; // Return undefined as though there's no return statement
  }
}

const taskManager = new TaskManager();
export default taskManager;