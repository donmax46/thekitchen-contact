window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(0,0,0,0.95)";

  } else {

    navbar.style.background =
    "rgba(0,0,0,0.7)";

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

  },1800);

});

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      section.classList.add("reveal");
      section.classList.add("active");

    }

  });

});
