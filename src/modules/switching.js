

function switching(){
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target =  document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
            tabContent.removeAttribute('active')
            console.log('aa')
        })
            target.setAttribute('id', 'active')
        })
    })
    }



function work5() {
    switching()
    
}

export {work5}