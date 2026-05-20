/* LOADER */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 1800);

});

/* NAVBAR */

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background =
      "rgba(0,0,0,0.95)";

  } else {

    navbar.style.background =
      "rgba(0,0,0,0.7)";

  }

});

/* REVEAL */

const reveals =
  document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  const triggerBottom =
    window.innerHeight * 0.85;

  reveals.forEach(section => {

    const sectionTop =
      section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){

      section.classList.add("active");

    }

  });

}

revealSections();

/* CURSOR */

const cursor =
  document.querySelector(".cursor");

const blur =
  document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {

  if(cursor && blur){

    cursor.style.left =
      e.clientX + "px";

    cursor.style.top =
      e.clientY + "px";

    blur.style.left =
      e.clientX + "px";

    blur.style.top =
      e.clientY + "px";

  }

});

/* MAGNETIC BUTTONS */

const magnets =
  document.querySelectorAll(".magnetic");

magnets.forEach(btn => {

  btn.addEventListener("mousemove", (e) => {

    const position =
      btn.getBoundingClientRect();

    const x =
      e.clientX - position.left -
      position.width / 2;

    const y =
      e.clientY - position.top -
      position.height / 2;

    btn.style.transform =
      `translate(${x * 0.15}px,
      ${y * 0.25}px)`;

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform =
      "translate(0px,0px)";

  });

});

/* MOBILE MENU */

const menuToggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector("nav");

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("active");

});

/* THREE JS */

const canvas =
  document.getElementById("webgl");

const scene =
  new THREE.Scene();

const camera =
  new THREE.PerspectiveCamera(
    75,
    window.innerWidth /
    window.innerHeight,
    0.1,
    1000
  );

const renderer =
  new THREE.WebGLRenderer({
    canvas,
    alpha:true
  });

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);

camera.position.z = 5;

/* PARTICLES */

const particlesGeometry =
  new THREE.BufferGeometry();

const particlesCount = 1200;

const positions =
  new Float32Array(
    particlesCount * 3
  );

for(let i = 0;
    i < particlesCount * 3;
    i++){

  positions[i] =
    (Math.random() - 0.5) * 12;

}

particlesGeometry.setAttribute(
  'position',

  new THREE.BufferAttribute(
    positions,
    3
  )

);

const particlesMaterial =
  new THREE.PointsMaterial({

    size:0.03,

    color:"#d4af37",

    transparent:true,

    opacity:0.9

  });

const particles =
  new THREE.Points(
    particlesGeometry,
    particlesMaterial
  );

scene.add(particles);

/* ANIMATE */

function animate(){

  requestAnimationFrame(animate);

  particles.rotation.y += 0.0008;
  particles.rotation.x += 0.0003;

  renderer.render(scene,camera);

}

animate();

/* MOUSE REACTION */

document.addEventListener("mousemove", (e) => {

  particles.rotation.y =
    e.clientX * 0.00008;

  particles.rotation.x =
    e.clientY * 0.00008;

});

/* RESIZE */

window.addEventListener("resize", () => {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});

/* AUDIO */

document.addEventListener("click", () => {

  const audio =
    document.getElementById("bg-audio");

  if(audio){

    audio.volume = 0.2;

    audio.play();

  }

}, { once:true });
