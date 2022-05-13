import readWriteLocal from './readWriteLocal.js';

class Tasks {
  constructor() {
    this.storageKey = 'todoData';
    this.todoData = readWriteLocal.readLocalCollection(this.storageKey);
  }
}

const tasks = new Tasks();
export default tasks;