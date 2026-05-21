/* LOADER */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    },1000);

  },1500);

});

/* NAVBAR SCROLL */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

});

/* CUSTOM CURSOR */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* PARALLAX */

window.addEventListener("mousemove", (e) => {

  const hero = document.querySelector(".hero");

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  hero.style.backgroundPosition = `${x}px ${y}px`;

});
