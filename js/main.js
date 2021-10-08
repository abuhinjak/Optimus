// Sticky Navbar
window.addEventListener("scroll", function() {
  let header = document.querySelector("#main-header #header-upper");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log(header);
});
// End Sticky Navbar

// ScrollToTop
window.addEventListener("scroll", function(){
  let scroll = document.querySelector("#scrollToTop");
  scroll.classList.toggle("active", window.scrollY > 500); 
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// End ScrollToTop


// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});
var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
// End Smooth Scroll


// Mobile Menu 
let mobileSlide = () => {
  let mobileMenu = document.getElementById("mobile-menu");
  let nav = document.getElementById("nav-items");
  let navLinks = document.querySelectorAll("#nav-items li");
  // let navItems = document.querySelectorAll("#nav-items nav-links");
  
  mobileMenu.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("mobile-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease ${index / 7 + 0.5}s forwards`;
      }
    }); 

    // Hamburger Animation
    mobileMenu.classList.toggle("toggle");
  });

  
  navLinks.forEach(link => link.addEventListener("click", ()=> {
    nav.classList.remove("mobile-active");
  }));
  
  
}

mobileSlide();


// End Mobile Menu

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

// AOS
AOS.init({
  offset: 70, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});
// End AOS

// EmailJS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || msg.value == "") {
      emptyerror();
    } else if (!(re.test(email.value.trim()))) {
      error();  
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
      name.value = "";
      email.value = "";
      msg.value = "";
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_9kew26n", "template_hfolbss", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo popunite sva polja!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo Vas unesite ispravnu Email adresu!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Poslano!",
    text: "Poruka je uspješno poslana",
  });
}
// End EmailJS