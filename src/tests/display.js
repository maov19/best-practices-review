let taskList = [];
let taskListDisplay = document.createElement('div');

const display = () => {

  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((element) => {
    const task = document.createElement('div');
    const completed = element.completed ? 'checked' : '';
    task.classList.add('task');
    task.setAttribute('draggable', 'true');
    task.innerHTML = `
    <input type="checkbox" class="check" ${completed} id="check" data-set="${element.index}">
    <input class="edit" type="text" value="${element.description}">
    <div class="can">
    <i id="${element.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    taskListDisplay.appendChild(task);

    task.addEventListener('dragstart', (e) => {
      const index = Array.from(taskListDisplay.children).indexOf(e.target);
      e.dataTransfer.setData('text/plain', index);
    });

    const taskList2 = task.children[1];
    taskList2.addEventListener('change', () => {
      const listingData = document.querySelector('#data');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('localItem'));
      taskLocal[index].description = taskList2.value;
      localStorage.setItem('localItem', JSON.stringify(taskLocal));
    });
  });
};

export default display;
