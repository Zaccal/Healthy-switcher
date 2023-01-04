// Burger 
const burgerBtn = document.querySelector('.burger-btn')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('lock')
    burgerMenu.classList.toggle('burger-menu_active') 
    burgerBtn.classList.toggle('burger-btn_active')
})

// Animation Observer 

const observerAnimate = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const toggleOption = Array.from(entry.target.classList).includes('animate-toggle')
        
        if (toggleOption && entry.isIntersecting) {
            console.log(true);
            entry.target.classList.toggle('animate__show')
        }
        else if (entry.isIntersecting) {
            entry.target.classList.add('animate__show')
        }
    })
}, {threshold: 0.6,})

const animateElements = document.querySelectorAll('.animate')

animateElements.forEach(animateElement => {
    observerAnimate.observe(animateElement)
})