import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

< !--Yandex.Metrika counter-- >
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105110290', 'ym');

    ym(105110290, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/105110290" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

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
