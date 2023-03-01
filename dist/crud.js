"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["crud"],{

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "clearing": () => (/* binding */ clearing)
/* harmony export */ });
const clearing = (e) => {
  const click = e.target.closest('.check');
  if (!click) return;

  const dataT = parseInt(click.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('localItem')) || [];
  const find = task.find((todo) => todo.index === dataT);
  find.completed = !find.completed;
  localStorage.setItem('localItem', JSON.stringify(task));
};

const clear = () => {
  const set = JSON.parse(localStorage.getItem('localItem')) || [];
  const notDone = set.filter((taskList) => !taskList.completed);
  set.length = 0;
  let i = 1;
  notDone.forEach((element) => {
    element.index = i;
    i += 1;
  });
  set.push(...notDone);
  localStorage.setItem('localItem', JSON.stringify(set));
};


/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear.js */ "./src/clear.js");


const taskListDisplay = document.querySelector('#data');
const inputValue = document.querySelector('.new-task');
const addButton = document.querySelector('.add-to-list');
const deleteBtn = document.querySelector('.delete');

let taskList = [];

const display = () => {
  taskListDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((element) => {
    const task = document.createElement('div');
    const comp = element.completed ? 'checked' : '';
    task.classList.add('task');
    task.setAttribute('draggable', 'true');
    task.innerHTML = `
    <input type="checkbox" class="check" ${comp} id="check" data-set="${element.index}">
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

display();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];

  const object = {
    description: inputValue.value,
    index: taskList.length + 1,
    completed: false,
  };
  taskList.push(object);
  localStorage.setItem('localItem', JSON.stringify(taskList));

  inputValue.value = '';
  display();
});

const remove = (index) => {
  const removeList = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 1;
  removeList.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...removeList);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};

taskListDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    remove(index);
  }
});

taskListDisplay.addEventListener('click', _clear_js__WEBPACK_IMPORTED_MODULE_0__.clearing);
deleteBtn.addEventListener('click', () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_0__.clear)();
  display();
});

taskListDisplay.addEventListener('dragover', (e) => {
  e.preventDefault();
  taskListDisplay.classList.add('dragover');
});

taskListDisplay.addEventListener('dragleave', (e) => {
  e.preventDefault();
  taskListDisplay.classList.remove('dragover');
});

taskListDisplay.addEventListener('drop', (e) => {
  e.preventDefault();
  taskListDisplay.classList.remove('dragover');
  const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
  const toIndex = Array.from(taskListDisplay.children).indexOf(e.target);
  if (fromIndex !== toIndex) {
    const task = taskList.splice(fromIndex, 1)[0];
    taskList.splice(toIndex, 0, task);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    display();
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNLHVCQUF1QixjQUFjO0FBQ3RGLDZDQUE2QyxvQkFBb0I7QUFDakU7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLCtDQUFRO0FBQ2xEO0FBQ0EsRUFBRSxnREFBSztBQUNQO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsZWFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3J1ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xlYXJpbmcgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGNsaWNrID0gZS50YXJnZXQuY2xvc2VzdCgnLmNoZWNrJyk7XHJcbiAgaWYgKCFjbGljaykgcmV0dXJuO1xyXG5cclxuICBjb25zdCBkYXRhVCA9IHBhcnNlSW50KGNsaWNrLmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKSwgMTApO1xyXG4gIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XHJcbiAgY29uc3QgZmluZCA9IHRhc2suZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gZGF0YVQpO1xyXG4gIGZpbmQuY29tcGxldGVkID0gIWZpbmQuY29tcGxldGVkO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxJdGVtJykpIHx8IFtdO1xyXG4gIGNvbnN0IG5vdERvbmUgPSBzZXQuZmlsdGVyKCh0YXNrTGlzdCkgPT4gIXRhc2tMaXN0LmNvbXBsZXRlZCk7XHJcbiAgc2V0Lmxlbmd0aCA9IDA7XHJcbiAgbGV0IGkgPSAxO1xyXG4gIG5vdERvbmUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5pbmRleCA9IGk7XHJcbiAgICBpICs9IDE7XHJcbiAgfSk7XHJcbiAgc2V0LnB1c2goLi4ubm90RG9uZSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHNldCkpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjbGVhcmluZywgY2xlYXIgfSBmcm9tICcuL2NsZWFyLmpzJztcclxuXHJcbmNvbnN0IHRhc2tMaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRhJyk7XHJcbmNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1saXN0Jyk7XHJcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbmxldCB0YXNrTGlzdCA9IFtdO1xyXG5cclxuY29uc3QgZGlzcGxheSA9ICgpID0+IHtcclxuICB0YXNrTGlzdERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XHJcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XHJcbiAgdGFza0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29tcCA9IGVsZW1lbnQuY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyc7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gICAgdGFzay5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiICR7Y29tcH0gaWQ9XCJjaGVja1wiIGRhdGEtc2V0PVwiJHtlbGVtZW50LmluZGV4fVwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiZWRpdFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2VsZW1lbnQuZGVzY3JpcHRpb259XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FuXCI+XHJcbiAgICA8aSBpZD1cIiR7ZWxlbWVudC5pbmRleH1cIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRhc2tMaXN0RGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdERpc3BsYXkuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgaW5kZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3QyID0gdGFzay5jaGlsZHJlblsxXTtcclxuICAgIHRhc2tMaXN0Mi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RpbmdEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEnKTtcclxuICAgICAgY29uc3QgYXJyYXlMaXN0ID0gQXJyYXkuZnJvbShsaXN0aW5nRGF0YS5jaGlsZHJlbik7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXlMaXN0LmluZGV4T2YodGFzayk7XHJcbiAgICAgIGNvbnN0IHRhc2tMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKTtcclxuICAgICAgdGFza0xvY2FsW2luZGV4XS5kZXNjcmlwdGlvbiA9IHRhc2tMaXN0Mi52YWx1ZTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMb2NhbCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5kaXNwbGF5KCk7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJycpIHJldHVybjtcclxuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcclxuXHJcbiAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgZGVzY3JpcHRpb246IGlucHV0VmFsdWUudmFsdWUsXHJcbiAgICBpbmRleDogdGFza0xpc3QubGVuZ3RoICsgMSxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfTtcclxuICB0YXNrTGlzdC5wdXNoKG9iamVjdCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcblxyXG4gIGlucHV0VmFsdWUudmFsdWUgPSAnJztcclxuICBkaXNwbGF5KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgcmVtb3ZlID0gKGluZGV4KSA9PiB7XHJcbiAgY29uc3QgcmVtb3ZlTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pbmRleCAhPT0gaW5kZXgpO1xyXG4gIHRhc2tMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgbGV0IGkgPSAxO1xyXG4gIHJlbW92ZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5pbmRleCA9IGk7XHJcbiAgICBpICs9IDE7XHJcbiAgfSk7XHJcbiAgdGFza0xpc3QucHVzaCguLi5yZW1vdmVMaXN0KTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICBkaXNwbGF5KCk7XHJcbn07XHJcblxyXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXNvbGlkJykpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLCAxMCk7XHJcbiAgICByZW1vdmUoaW5kZXgpO1xyXG4gIH1cclxufSk7XHJcblxyXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcmluZyk7XHJcbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbGVhcigpO1xyXG4gIGRpc3BsYXkoKTtcclxufSk7XHJcblxyXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB0YXNrTGlzdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZHJhZ292ZXInKTtcclxufSk7XHJcblxyXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdGFza0xpc3REaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyJyk7XHJcbn0pO1xyXG5cclxudGFza0xpc3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB0YXNrTGlzdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTtcclxuICBjb25zdCBmcm9tSW5kZXggPSBwYXJzZUludChlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyksIDEwKTtcclxuICBjb25zdCB0b0luZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdERpc3BsYXkuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIGlmIChmcm9tSW5kZXggIT09IHRvSW5kZXgpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0YXNrTGlzdC5zcGxpY2UoZnJvbUluZGV4LCAxKVswXTtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0b0luZGV4LCAwLCB0YXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xyXG4gICAgZGlzcGxheSgpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==