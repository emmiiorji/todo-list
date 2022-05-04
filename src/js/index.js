import '../css/style.css';

const todoData = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Eat unripe plantain',
    completed: true,
    index: 3,
  },
  {
    description: 'Complete te todo list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Post a blog',
    completed: true,
    index: 3,
  },

];

const markupAllLists = () => {
  let allLists = '';
  todoData.forEach((data) => {
    allLists += `<li class="todo-item">
                    <div class="todo-entry">
                      <input type="checkbox" ${data.completed ? 'checked' : ''} status' title="Check!">
                      <input type="text" class="todo" value="${data.description}">
                      <i class="fa-solid fa-trash-can delete hide"></i>
                      <i class="fa-solid fa-ellipsis-vertical reorder"></i>
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