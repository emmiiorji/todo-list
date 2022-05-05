// eslint-disable-next-line import/no-cycle
import taskManager from './taskManager.js';

class Tasks {
  constructor() {
    this.storageKey = 'todoData';
    this.todoData = taskManager.readLocalCollection(this.storageKey);
  }
}

const tasks = new Tasks();
export default tasks;