export const clearing = (e) => {
  const click = e.target.closest('.check');
  if (!click) return;

  const localCheck = parseInt(click.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('localItem')) || [];
  const find = task.find((todo) => todo.index === localCheck);
  find.completed = !find.completed;
  localStorage.setItem('localItem', JSON.stringify(task));
};

export const clearCompleted = () => {
  const getLocal = JSON.parse(localStorage.getItem('localItem')) || [];
  const notDone = getLocal.filter((taskList) => !taskList.completed);
  getLocal.length = 0;
  let i = 1;
  notDone.forEach((element) => {
    element.index = i;
    i += 1;
  });
  getLocal.push(...notDone);
  localStorage.setItem('localItem', JSON.stringify(getLocal));
};
