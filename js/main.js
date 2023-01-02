// Burger 
const burgerBtn = document.querySelector('.burger-btn')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('lock')
    burgerMenu.classList.toggle('burger-menu_active') 
    burgerBtn.classList.toggle('burger-btn_active')
})