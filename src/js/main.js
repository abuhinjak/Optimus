// ScrollToTop
const scrollToTopButton = document.querySelector("#scrollToTop");

window.addEventListener("scroll", function(){
   scrollToTopButton.classList.toggle("active", window.scrollY > 500); 
 });

function scrollToTop() {
     window.scrollTo({
       top: 0,
      behavior: "smooth"
     });
   }

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
// End ScrollToTop

// Mobile Menu 
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav-items');
const navLinks = document.querySelectorAll("#nav-items li");


document.onclick = function(e) {
  if(e.target.id !== 'nav-items' && e.target.id !== 'mobile-menu') {
    mobileMenu.classList.remove('toggle');
    nav.classList.remove('mobile-active');
  }
}

mobileMenu.onclick = function() {
  mobileMenu.classList.toggle('toggle');
  nav.classList.toggle('mobile-active');
   navLinks.forEach((link, index) => {
    if(!link.style.animation) {
      link.style.animation = `navLinkFade 0.5s ease ${index / 7 + 0.5}s forwards`;
     }
  });
}
// End Mobile Menu

// Sticky Navbar
window.addEventListener("scroll", function() {
  let headerUpper = document.querySelector("#main-header #header-upper");
  headerUpper.classList.toggle("sticky", window.scrollY > 0);
  console.log(headerUpper);
});
// End Sticky Navbar

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});
var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
// End Smooth Scroll