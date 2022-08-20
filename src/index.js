const Open = document.getElementById('open')
Open.addEventListener('click', openForm)

function openForm(){
    const form = document.getElementById('Form');
    form.classList.add('active')
}


const Close = document.getElementById('close');
Close.addEventListener('click', closeForm)

function closeForm(){
    const form = document.getElementById('Form');
    form.classList.remove('active')
}  

