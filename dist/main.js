(()=>{"use strict";var e=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={};e(t);var o={};function n(){document.getElementById("Form").classList.add("active")}function d(){document.getElementById("Form").classList.remove("active")}e(o),document.getElementById("open").addEventListener("click",n),document.getElementById("btncancel").addEventListener("click",d),d(),n(),document.getElementById("btnadd").addEventListener("click",s);let i,l=document.getElementById("title").value,c=document.getElementById("description").value,r=document.getElementById("due_date").value,u=document.getElementById("priority").value,a=[];a.length;class m{constructor(e,t,o,n){this.title=document.getElementById("title").value,this.description=document.getElementById("description").value,this.due_date=document.getElementById("due_date").value,this.priority=document.getElementById("priority").value}}function s(e){e.preventDefault(),i=new m(l,c,r,u),a.push(i),console.log(a),console.log(i.title),console.log(i.description),console.log(i.due_date),console.log(i.priority),console.log(JSON.stringify(i)),g(),y(),localStorage.setItem(a,JSON.stringify(a))}function y(){const e=document.querySelector(".todos");document.querySelectorAll(".todo").forEach((t=>e.removeChild(t)));for(let e=0;e<a.length;e++)g(a[e])}function g(e){const t=document.querySelector(".todos"),o=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");o.classList.add("todo"),o.setAttribute("id",a.indexOf(e)),n.textContent=e.title,n.setAttribute("id","todo_name"),o.appendChild(n),d.textContent=e.description,d.setAttribute("id","description"),o.appendChild(d),i.textContent=e.due_date,i.setAttribute("id","due_date"),o.appendChild(i),l.textContent=e.priority,l.setAttribute("id","priority"),o.appendChild(l),t.appendChild(o)}s(),function(){if(localStorage.mytodos){let e=localStorage.getItem("mytodos");e=JSON.parse(e),a=e,y()}else y()}(),(0,t.work)(),(0,o.work2)()})();