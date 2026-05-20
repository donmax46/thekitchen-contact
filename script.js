window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1800);

});

/* NAVBAR */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.95)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
  }

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(section => {

    const sectionTop =
      section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add("active");
    }

  });

}

revealSections();
