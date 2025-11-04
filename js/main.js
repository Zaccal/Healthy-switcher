import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

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
      entry.target.classList.add('animate__show')
    }

    else if (toggleOption && !entry.isIntersecting) {
      entry.target.classList.remove('animate__show')
    }

    if (entry.isIntersecting) {
      entry.target.classList.add('animate__show')
    }
  })
}, {
  threshold: 0.5,
})

const animateElements = document.querySelectorAll('.animate')

animateElements.forEach(animateElement => observerAnimate.observe(animateElement))


// Slider

const swiper = new Swiper('.slider', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    907: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 'auto',
      // slidesPerView: 1,
      spaceBetween: 0,
    }
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
