/* =========================
   NAVBAR BACKGROUND
========================= */

window.addEventListener("scroll", () => {

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 40){

    navbar.style.background =
    "rgba(0,0,0,0.88)";

  } else {

    navbar.style.background =
    "rgba(0,0,0,0.45)";

  }

});

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    },1000);

  },1400);

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.getElementById("menu-toggle");

const mobileNav =
document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

});

/* =========================
   CLOSE MENU ON CLICK
========================= */

const navLinks =
document.querySelectorAll("#mobileNav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("active");

  });

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".custom-cursor");

document.querySelectorAll("#mobile-nav a");

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});

/* =========================
   REVEAL ON SCROLL
========================= */

const revealItems =
document.querySelectorAll(
  ".feature-box, .category-card, .product-card, .step"
);

const revealOnScroll = () => {

  revealItems.forEach((item) => {

    const top =
    item.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){

      item.style.opacity = "1";

      item.style.transform =
      "translateY(0px)";

    }

  });

};

revealItems.forEach((item) => {

  item.style.opacity = "0";

  item.style.transform =
  "translateY(40px)";

  item.style.transition =
  "all 1s ease";

});

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================
   BUTTON HOVER MOTION
========================= */

const buttons =
document.querySelectorAll(
  ".gold-btn, .telegram-btn, .product-btn"
);

buttons.forEach((btn) => {

  btn.addEventListener("mousemove", (e) => {

    const rect =
    btn.getBoundingClientRect();

    const x =
    e.clientX - rect.left - rect.width / 2;

    const y =
    e.clientY - rect.top - rect.height / 2;

    btn.style.transform =
    `translate(${x * 0.08}px,
               ${y * 0.08}px)`;

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform =
    "translate(0,0)";

  });

});
gsap.to(".intro-logo",{

  opacity:1,
  scale:1,

  duration:1.8

});

setTimeout(()=>{

  gsap.to("#cinematic-intro",{

    opacity:0,

    duration:1.5,

    onComplete:()=>{

      document
      .getElementById("cinematic-intro")
      .style.display="none";

    }

  });

},2600);

window.addEventListener("mousemove",(e)=>{

  const x =
  (window.innerWidth / 2 - e.pageX) / 40;

  const y =
  (window.innerHeight / 2 - e.pageY) / 40;

  document
  .querySelector(".cinematic-light")
  .style.transform =

  `translate(${x}px, ${y}px)`;

});
