'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

let todoData = [];


const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.splice(0);
    let returnTodoData = JSON.parse(localStorage.getItem('todoData'));
    if (returnTodoData === null) return;
    todoData = todoData.concat(returnTodoData);
    
    

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
            if (item.complited) {
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }
            localStorage.setItem("todoData",JSON.stringify(todoData));

        });
        const btnDelete = li.querySelector('.todo-remove');
        btnDelete.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.remove();
                todoData.splice(i, 1);
                localStorage.removeItem('todoData');
                localStorage.setItem("todoData",JSON.stringify(todoData));
                render();
        });
    });
};
let k = JSON.stringify(todoData);
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        complited: false
    };
    if (newTodo.value !== '') {
    todoData.push(newTodo);

    let serialTodoData = JSON.stringify(todoData);
    localStorage.setItem('todoData',serialTodoData);
    
    render();
    headerInput.value = '';
    }

});

render();

