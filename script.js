/* NAVBAR */

window.addEventListener("scroll", () => {

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(0,0,0,0.88)";

  } else {

    navbar.style.background =
    "rgba(0,0,0,0.45)";

  }

});

/* LOADER */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    },1000);

  },1600);

});

/* MOBILE MENU */

const menuToggle =
document.getElementById("menuToggle");

const mobileNav =
document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

});

/* CUSTOM CURSOR */

const cursor =
document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});

/* MAGNETIC BUTTON FEEL */

const buttons =
document.querySelectorAll(
  ".gold-btn, .outline-btn, .telegram-btn"
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
    `translate(${x * 0.12}px,
               ${y * 0.12}px)`;

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform =
    "translate(0,0)";

  });

});
/* SMOOTH SECTION REVEAL */

const revealItems =
document.querySelectorAll(
  ".category-card, .product-card, .step"
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
