//  Loading website 
var preloader = document.getElementById("loading");
setTimeout(loadingFunction,500)
function loadingFunction(){
     preloader.style.display = 'none';
};

// Navbar position fixed top 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header__navbar-fixed")
var sticky = navbar.offsetTop;

function myFunction() {
     if (window.pageYOffset >= sticky) {
          navbar.classList.add("fixed-top")
     } else {
          navbar.classList.remove("fixed-top");
     }
}

// Aos animation 
AOS.init({
     duration: 1200,
})



// Slider
$('.home-slider').owlCarousel({
          loop:true,
          autoplay:true,
          nav:true,
          margin:10,
          autoplayHoverPause:true,
          items:1,
          animationOut: 'fadeOut',
          animationIn: 'fadeIn',
          navText: ["<span class='fas fa-chevron-circle-left'></span>","<span class='fas fa-chevron-circle-right'></span>"],
          responsive:{
                    0:{
                              items: 1,
                              nav: false,
                    },
                    600:{
                              items: 1,
                              nav: false,
                    },
                    1000:{
                              items: 1,
                              nav: true,
                    }
          }
});

// Highlight scroll to section
const sections=document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li a');

const heightHeader = $('#header').outerHeight();
const heightHeaderNavFix = $('#header__navbar-fixed').outerHeight();

window.addEventListener('scroll', () => {
     let current = '';
     
     sections.forEach(section => {
          const sectionTop = section.offsetTop;
console.log(sectionTop)

          if(pageYOffset >= (sectionTop-(heightHeader+heightHeaderNavFix))){
               current = section.getAttribute('id');
          }
     })
     navLi.forEach(li => {
          li.classList.remove('active');
          if(li.classList.contains(current)){
               li.classList.add('active');
          }
     })
})
