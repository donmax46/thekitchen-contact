window.addEventListener("scroll", () => {

  const navbar =
  document.querySelector(".navbar");

  if(navbar){

    if(window.scrollY > 50){

      navbar.style.background =
      "rgba(0,0,0,0.95)";

    }else{

      navbar.style.background =
      "rgba(0,0,0,0.7)";

    }

  }

});

/* MOBILE MENU */

const menuToggle =
document.getElementById("menu-toggle");

const mobileNav =
document.getElementById("mobile-nav");

if(menuToggle && mobileNav){

  menuToggle.addEventListener("click",()=>{

    mobileNav.classList.toggle("active");

  });

}

/* CLOSE MENU WHEN LINK CLICKED */

document
.querySelectorAll("#mobile-nav a")
.forEach(link => {

  link.addEventListener("click",()=>{

    mobileNav.classList.remove("active");

  });

});

/* SAFE INTRO LOADER */

window.addEventListener("load",()=>{

  const intro =
  document.getElementById("cinematic-intro");

  if(intro){

    setTimeout(()=>{

      intro.style.opacity = "0";

      setTimeout(()=>{

        intro.style.display = "none";

      },1000);

    },1800);

  }

});
