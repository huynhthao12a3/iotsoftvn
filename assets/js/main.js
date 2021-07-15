//  Loading website 
var preloader = document.getElementById("loading");
setTimeout(loadingFunction, 500)
function loadingFunction() {
     preloader.style.display = 'none';
};

// Navbar position fixed top 
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("header__navbar-fixed")
var fixed = navbar.offsetTop;

function myFunction() {

     if (window.pageYOffset >= 84) {
          navbar.classList.add("position-fixed")
          navbar.classList.add("top-0")
          navbar.classList.add("start-0")
          navbar.classList.add("end-0")
     } else {
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
     let isClose = header.clientHeight === 68

     if (isClose) {
          header.style.height = 'auto';
     } else {
          header.style.height = null;
     }
}

//Auto đóng
var menuItems = document.querySelectorAll('nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
     let menuItem = menuItems[i];

     menuItem.onclick = function (event) {
          let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
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
     duration: 1000,
     easing: 'ease-in-out',
     once: true,
     mirror: false,
     anchorPlacement: 'top-bottom',
})

// Highlight scroll to section
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .header__navbar-list-item li a');

const heightHeader = $('#home').outerHeight();
const heightHeaderNavFix = $('.header__navbar').outerHeight();

window.addEventListener('scroll', () => {
     let current = '';

     sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= (sectionTop - heightHeaderNavFix)) {
               current = section.getAttribute('id');
          }
     })
     navLi.forEach(li => {
          li.classList.remove('nav-active');
          if (li.classList.contains(current)) {
               li.classList.add('nav-active');
          }
     })
})

// About detail Click
function ButtonInfo() 
{
     let para1 = document.getElementById("about__detail-para-item1");
     let para2 = document.getElementById("about__detail-para-item2");
     let para3 = document.getElementById("about__detail-para-item3");
     para1.innerHTML = "<strong> Tên Đơn vị: </strong> Công ty TNHH Giải pháp Công nghệ Phần mềm kết nối số Việt Nam IOT Software";
     para2.innerHTML = "<strong>Tên tiếng Anh: </strong> Vietnam Digital Connection Software Solutions Co., Ltd. IOT Software</p>";
     para3.innerHTML = "<strong>Tên viết tắt: </strong> IOT SOFTWARE VN";

     let btnActive = document.getElementById('btn-active');
     btnActive.classList.remove('about__detail-btn--active');
}

function ButtonVision() 
{
     let para1 = document.getElementById("about__detail-para-item1");
     let para2 = document.getElementById("about__detail-para-item2");
     let para3 = document.getElementById("about__detail-para-item3");
     para1.innerHTML = 'Trở thành đối tác trong việc tư vấn, phát triển và duy trì các hệ thống <em>CÔNG NGHỆ.</em>';
     para2.innerHTML = "Đạt được sự tín nhiệm của khách hàng chính là nhân tố quan trọng góp phần vào sự thành công của <em>IOT SOFTWARE.</em>";
     para3.innerHTML = "Mục tiêu trở thành một trong những công ty cung cấp các dịch vụ CNTT đa dạng và chuyên sâu tại thị trường Viêt Nam.";

     let btnActive = document.getElementById('btn-active');
     btnActive.classList.remove('about__detail-btn--active');
}

function ButtonMission() 
{
     let para1 = document.getElementById("about__detail-para-item1");
     let para2 = document.getElementById("about__detail-para-item2");
     let para3 = document.getElementById("about__detail-para-item3");
     para1.innerHTML = 'Công nghệ của chúng tôi sẽ giúp khách hàng tối ưu hóa lợi nhuận trong kinh doanh.';
     para2.innerHTML = "Cung cấp đến khách hàng dịch vụ CNTT chính hãng và đội ngũ triển khai chuyên nghiệp.";
     para3.innerHTML = "Tư vấn, triển khai các giải pháp CNTT tối ưu và phù hợp theo yêu cầu, qui mô và đặc thù của doanh nghiệp.";

     let btnActive = document.getElementById('btn-active');
     btnActive.classList.remove('about__detail-btn--active');

}


// - Swiper Library - Project slide
const swiper = new Swiper('.swiper-container', {
     direction: 'horizontal',
     preloadImages: false,
     lazy: true,
     loop: true,
     speed: 500,
     autoplay: {
          delay: 3000,
          disableOnInteraction: false
     },
     grabCursor: false,

     slidesPerView: 'auto',
     breakpoints: {
          100:{
               slidesPerView: 1,
               spaceBetween: 10,
          },
          768: {
               slidesPerView: 2,
               spaceBetween: 20,
          },
          992:{
               slidesPerView: 3,
               spaceBetween:20,
          }
     },

     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },

});