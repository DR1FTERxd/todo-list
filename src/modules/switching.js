

function switching(){
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target =  document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.removeAttribute('id', 'active')
            })
            tabs.forEach(tab => {
                tab.removeAttribute('id', 'active')
            })
            tab.setAtribute('id', 'active')
            target.setAtribute('id', 'active')
        })
    })
    }



function work5() {
    switching()
}

export {work5}