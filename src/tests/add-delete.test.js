import addToDo from "./add";
import removeTodo from "./remove";
import display from "./display";

//addTodo should add 1 task with the latest index num
// Input: inputValue.value;
// expectation: for every click on addButton add 1 task into taskListDisplay
// check: if after click addButton, taskListDisplay.length + 1;

describe('add function', () => {
    it('is adding one task', () => {
        const input = {
            description: 'test task',
            index: null,
            completed: null,
        };

//mock localStorage [input[1]]
        const output = {
            description: 'test task',
            index: 1,
            completed: false,
        };
        expect().toBe();
    })
}) 

//removeTodo should remove the task with the clicked index num
// test('removeTodo is adequately removing tasks', () => {
//     expect(removeTodo().toBe());
// })