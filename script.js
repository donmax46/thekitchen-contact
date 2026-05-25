/* =========================
   THE KITCHEN DXB V8
   script.js
========================= */

/* LOADER */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

  }, 1200);

});

/* MOBILE MENU */

const menuToggle =
document.getElementById("menu-toggle");

const mobileNav =
document.getElementById("mobile-nav");

if(menuToggle){

  menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

  });

}

/* CLOSE MENU ON LINK CLICK */

document
.querySelectorAll("#mobile-nav a")
.forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("active");

  });

});

/* NAVBAR SCROLL EFFECT */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.style.background =
    "rgba(5,5,5,0.98)";

    navbar.style.borderBottom =
    "1px solid rgba(212,175,55,0.12)";

  }

  else{

    navbar.style.background =
    "rgba(5,5,5,0.92)";

    navbar.style.borderBottom =
    "1px solid rgba(255,255,255,0.05)";

  }

});

/* SIMPLE REVEAL ANIMATION */

const revealElements =
document.querySelectorAll(

  ".category-card, .product-card, .step-card"

);

const revealOnScroll = () => {

  const triggerBottom =
  window.innerHeight * 0.88;

  revealElements.forEach(element => {

    const boxTop =
    element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      element.classList.add("show-element");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* OPTIONAL GSAP */

if(typeof gsap !== "undefined"){

  gsap.from(".hero-content",{

    opacity:0,
    y:40,
    duration:1.2

  });

  gsap.from(".navbar",{

    opacity:0,
    y:-30,
    duration:1

  });

}

/* SMOOTH INTERNAL LINKS */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    const targetId =
    this.getAttribute("href");

    const target =
    document.querySelector(targetId);

    if(target){

      e.preventDefault();

      target.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

});

/* FLOATING BUTTON GLOW */

const floatButtons =
document.querySelectorAll(".float-btn");

floatButtons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
    "translateY(-5px) scale(1.03)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
    "translateY(0) scale(1)";

  });

});
