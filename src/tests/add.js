import display from './display'
let taskList = [];

const addToDo = () => {
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];

  const object = {
    description: 'this is a test task',
    index: null,
    completed: null,
  };
  taskList.push(object);
  localStorage.setItem('localItem', JSON.stringify(taskList));

  display();
}

export default addToDo;