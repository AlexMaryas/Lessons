'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

let todoData = [];

let obj = [0, 'dfdf']
const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    console.log('todoData: ', todoData);
    todoData.splice(0);
    console.log('todoData: ', todoData);
    let returnTodoData = JSON.parse(localStorage.getItem('todoData'));
    console.log('returnTodoData: ', returnTodoData);
    if (returnTodoData === null) return;
    todoData = todoData.concat(returnTodoData);
    console.log('todoDataBEFORE: ', todoData);
    
    

    todoData.forEach(function (item,i) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';
        
        if (item.complited) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        
        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function () {
            item.complited = !item.complited;
            render();
        });
        const btnDelete = li.querySelector('.todo-remove');
        btnDelete.addEventListener('click', function (event) {
                    todoData.splice(i, 1);
                    event.target.parentNode.parentNode.remove();
        });
    });
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        complited: false
    };
    if (newTodo.value !== '') {
    todoData.push(newTodo);

    let serialTodoData = JSON.stringify(todoData);
    console.log('serialTodoData: ', serialTodoData);
    localStorage.setItem("todoData",serialTodoData);
    
    render();
    headerInput.value = '';
    }

});

render();
let a = [
    {
        aa: 'aaa',
        aa1: 1
    }

];
let b = [
    {
        bb: 'bbb',
        bb1: 1
    },
    {
        bc: 'bcb',
        bcb: 2
    }

];
a = a.concat(b);
console.log(a);