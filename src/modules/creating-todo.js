import { mdiConsoleNetworkOutline } from '@mdi/js';
import {alertime} from './todo-date'

const todoBtn = document.getElementById('btnadd');
todoBtn.addEventListener('click', addTodo)

const form = document.getElementById('Form');


let mytodos = [];
let newTodo;

class Todo {
    constructor(title, description, due_date, priority) {
        this.title = document.getElementById("title").value;
        this.description  = document.getElementById("description").value;
        this.due_date = document.getElementById("due_date").value;
        this.priority = document.getElementById('priority').value;
    
    }
    
}

function addTodo(event) {
    event.preventDefault();
    form.classList.remove('active');
    newTodo = new Todo (title, description, due_date, priority);
    mytodos.push(newTodo);
    console.log(mytodos);
    render();
    setData();
    todo_p.addEventListener('click', console.log('aaaa'))
    
}


function render() {
    const display = document.querySelector('.todos');
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => display.removeChild(todo));

    for (let i=0; i<mytodos.length; i++){
        Todo_items(mytodos[i])
    }
}


function Todo_items(item) {
    const todos = document.querySelector('.todos');
    const todo = document.createElement('div');
    const titl = document.createElement('div');
    const description = document.createElement('div');
    const due_date = document.createElement('div')

    const priority = document.createElement('div');

    todo.classList.add('todo');
    todo.setAttribute('id', mytodos.indexOf(item));

    titl.innerHTML = item.title
    titl.setAttribute('id', 'todo_name');
    todo.appendChild(titl);

    description.innerHTML = item.description
    description.setAttribute('id', 'description');
    todo.appendChild(description);

    due_date.innerHTML = item.due_date
    due_date.setAttribute('id', 'countdown');
    todo.appendChild(due_date);

    priority.innerHTML = item.priority
    priority.setAttribute('id', 'priority');
    todo.appendChild(priority);

    todos.appendChild(todo)
    
}
function setData() {
    localStorage.setItem(mytodos, JSON.stringify(mytodos));
}
function restore() {
    if(!localStorage.mytodos){
        render()
    } else {
        let objects = localStorage.getItem("mytodos")
        objects =JSON.parse(objects)
        mytodos = objects
        render()
    }
}



function work2(){
    addTodo();
    restore()
   
    
};


export {work2}