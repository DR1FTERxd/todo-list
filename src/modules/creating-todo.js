import {alertime} from './todo-date'

const todoBtn = document.getElementById('btnadd');
todoBtn.addEventListener('click', addTodo)

const form = document.getElementById('Form');



let mytodos = [];
let newTodo;

class Todo {
    constructor(title, description, due_date, priority) {
        this.title = title = document.getElementById("title").value;
        this.description = description = document.getElementById("description").value;
        this.due_date = due_date = document.getElementById("due_date").value;
        this.priority = priority = document.getElementById('priority').value;
    }
}

function addTodo(event) {
    event.preventDefault();
    form.classList.remove('active')
    newTodo = new Todo (title, description, due_date, priority)
    mytodos.push(newTodo)
    console.log(mytodos)
    render()
    setData()
  
    
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

    titl.textContent = item.title
    titl.setAttribute('id', 'todo_name');
    todo.appendChild(titl);

    description.textContent = item.description
    description.setAttribute('id', 'description');
    todo.appendChild(description);

    due_date.textContent = item.due_date
    due_date.setAttribute('id', 'countdown');
    todo.appendChild(due_date);

    priority.textContent = item.priority
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