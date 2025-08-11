// Basic interactions: slideshow for index + vault toggles + background wiring
document.addEventListener('DOMContentLoaded', function () {
  // --- City slideshow (full-screen fade) ---
  (function citySlideshow(){
    const slides = Array.from(document.querySelectorAll('.slide'));
    if(!slides.length) return;
    // set background images from data-bg attribute
    slides.forEach(s => {
      const bg = s.getAttribute('data-bg');
      if(bg) s.style.backgroundImage = `linear-gradient(rgba(7,7,7,0.28), rgba(4,4,4,0.45)), url('${bg}')`;
    });

    let idx = 0;
    const total = slides.length;
    slides[idx].classList.add('active');
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % total;
      slides[idx].classList.add('active');
    }, 6000); // 6s per slide
  })();

  // --- Vault: set background images and stagger animation ---
  (function vaultSetup(){
    const items = document.querySelectorAll('.vault-item');
    items.forEach((el, i) => {
      // set animation delay via inline style to ensure stagger
      el.style.animationDelay = `${i * 120}ms`;
      // if data-bg attribute exists, set inline background style
      const bg = el.getAttribute('data-bg');
      if(bg) {
        el.style.backgroundImage = `linear-gradient(rgba(7,7,7,0.38), rgba(4,4,4,0.45)), url('${bg}')`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
      }
      // reveal animation (CSS will pick up animation)
      el.classList.add('appearing');
    });

    // Toggle details
    document.querySelectorAll('.vault-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.vault-item');
        const details = parent.querySelector('.vault-details');
        const open = details.style.display === 'block';
        // close all
        document.querySelectorAll('.vault-details').forEach(d => d.style.display = 'none');
        if(!open) details.style.display = 'block';
        // scroll into view on mobile
        if(window.innerWidth < 600 && !open) parent.scrollIntoView({behavior:'smooth', block:'center'});
      });
    });

    // After a short delay, add opacity to start animation
    setTimeout(()=> {
      items.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }, 50);
  })();
});
