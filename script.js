const iconBar = document.querySelector('.header-icon-bar')
const headerMenu = document.querySelector('.header-menu-2')

function start() {
    showMenu()
}
start()
function showMenu() {
    iconBar.addEventListener('click', ((e) => {
        let none = headerMenu.style.display == 'none'
    if (none) {
        headerMenu.style.display = 'block'
    } else {
        headerMenu.style.display = 'none'
    }
    }))
}
window.onscroll = () => {
    if (headerMenu) {
      
    }
}
