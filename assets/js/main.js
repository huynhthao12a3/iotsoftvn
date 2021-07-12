//  Loading website 
var preloader = document.getElementById("loading");
setTimeout(loadingFunction,500)
function loadingFunction(){
     preloader.style.display = 'none';
};

// Navbar position fixed top 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header__navbar-fixed")
var fixed = navbar.offsetTop;

function myFunction() {

     if (window.pageYOffset >= 84) {
          console.log("1111111111111")
          navbar.classList.add("position-fixed")
          navbar.classList.add("top-0")
          navbar.classList.add("start-0")
          navbar.classList.add("end-0")
     } else {
          console.log("2222222222222222")

          navbar.classList.remove("position-fixed");
          navbar.classList.remove("top-0")
          navbar.classList.remove("start-0")
          navbar.classList.remove("end-0")
     }
}

// Navbar mobile

     var header = document.getElementById('header__navbar-fixed');
     var mobileMenu = document.getElementById('mobile-menu');
    //Đóng/Mở mobile menu
     mobileMenu.onclick = function () {
          var isClose = header.clientHeight === 68

          if (isClose) {
               header.style.height = 'auto';
          } else {
               header.style.height = null;
          }
     }

    //Auto đóng
     var menuItems = document.querySelectorAll('nav li a[href*="#"]');
     for (var i = 0; i < menuItems.length; i++) {
          var menuItem = menuItems[i];

          menuItem.onclick = function (event) {
               var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
               if (isParentMenu) {
              //Bỏ qua mặc định trở về đầu trang
               event.preventDefault();
               } else {
               header.style.height = null;
               }
          }
     }

    
// Aos animation 
AOS.init({
     duration: 1200,
})

// $('#carouselExampleIndicators').carousel();

// const sliderItem = document.querySelectorAll('.slider-item h3');
// console.log(sliderItem)
// $('.slider-item').onload = function(){
//      let current = '';
//      sliderItem.forEach(item => {
//           item.classList.remove('animate__animated animate__fadeInDown');
//           if(item.classList.contains(current)){
//                item.classList.add('animate__animated animate__fadeInDown');
//           }
//      })()
// }


// Slider
// $('.home-slider').owlCarousel({
//           loop:true,
//           autoplay:true,
//           nav:true,
//           margin:10,
//           autoplayHoverPause:true,
//           items:1,
//           animationOut: 'fadeOut',
//           animationIn: 'fadeIn',
//           navText: ["<span class='fas fa-chevron-circle-left'></span>","<span class='fas fa-chevron-circle-right'></span>"],
//           responsive:{
//                     0:{
//                               items: 1,
//                               nav: false,
//                     },
//                     600:{
//                               items: 1,
//                               nav: false,
//                     },
//                     1000:{
//                               items: 1,
//                               nav: true,
//                     }
//           }
// });

// Highlight scroll to section
const sections=document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .header__navbar-list-item li a');

const heightHeader = $('#home').outerHeight();
const heightHeaderNavFix = $('.header__navbar').outerHeight();

window.addEventListener('scroll', () => {
     let current = '';
     
     sections.forEach(section => {
          const sectionTop = section.offsetTop;
console.log(pageYOffset)
console.log(sectionTop)
          if(pageYOffset >= (sectionTop  - heightHeaderNavFix)){
               current = section.getAttribute('id');
          }
     })
     navLi.forEach(li => {
          li.classList.remove('nav-active');
          if(li.classList.contains(current)){
               li.classList.add('nav-active');
          }               
     })
})


