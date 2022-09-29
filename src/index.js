import {work} from './modules/todo-popup'
import {work2} from './modules/creating-todo'
import {work3} from './modules/todo-date'
import {work4} from './modules/priority'
import {work5} from './modules/switching'


function render(){
    work();
    work2();
    work4();
    work5();
    const tabs = document.querySelectorAll("[data-tab-target]");
    const tabContents = document.querySelectorAll("data-tab-content");

    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active');
    })
})

}

render()     