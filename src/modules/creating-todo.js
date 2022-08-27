

const todoBtn = document.getElementById('btnadd');
todoBtn.addEventListener('click', addTodo)


let title = document.getElementById("title").value;
let description = document.getElementById("description").value;
let due_date = document.getElementById("due_date").value;
let priority = document.getElementById('priority').value;


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

    newTodo = new Todo (title, description, due_date, priority)
    mytodos.push(newTodo)
    console.log(mytodos)
    console.log(priority)
}


function work2(){
    addTodo();
};

export default work2()