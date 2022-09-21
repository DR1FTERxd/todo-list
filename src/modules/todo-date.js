const todo_btn = document.querySelector('.todo-btn')
const projects_btn = document.querySelector('.projects-btn')
const today_btn = document.querySelector('.today-btn')
const tommorow_btn = document.querySelector('.tommorow-btn')

function switching(){
    today_btn.addEventListener('click', (document.querySelector('.todo').setAttribute('id', 'activated')))
}


function work5() {
    switching()
}

export {work5}