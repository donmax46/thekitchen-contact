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
.menu-toggle{

  display:none;

  font-size:2rem;

  color:#d4af37;

  cursor:pointer;

  z-index:10001;

}

@media(max-width:768px){

  .menu-toggle{

    display:block;

  }

  nav{

    position:fixed;

    top:0;
    right:-100%;

    width:75%;
    height:100vh;

    background:#050505;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:flex-start;

    gap:40px;

    padding-left:50px;

    transition:0.5s;

    z-index:9999;

  }

  nav.active{

    right:0;

  }

}
  });

}

/* CLOSE MENU */

document
.querySelectorAll("#mobile-nav a")
.forEach(link => {

  link.addEventListener("click",()=>{

    mobileNav.classList.remove("active");

  });

});
