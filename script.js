/* script.js
 - vault toggles
 - staggered animation for vault items
 - small helpers
*/

document.addEventListener('DOMContentLoaded', function () {
  // staggered animation for vault items
  const vaultItems = document.querySelectorAll('.vault-item');
  vaultItems.forEach((el, i) => {
    // delay slightly per item to create stagger
    const delay = (i % 6) * 80 + Math.floor(i / 6) * 40;
    el.style.animationDelay = `${delay}ms`;
  });

  // vault toggle listeners
  const toggles = document.querySelectorAll('.vault-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.vault-item');
      const details = item.querySelector('.vault-details');
      const isOpen = details.style.display === 'block';
      // close any opened siblings if desired (optional)
      document.querySelectorAll('.vault-details').forEach(d=>{
        if(d!==details) d.style.display = 'none';
      });
      details.style.display = isOpen ? 'none' : 'block';
      // smooth scroll if mobile
      if(window.innerWidth < 600 && !isOpen){
        item.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });

  // small no-js fallback cleanup
  document.documentElement.classList.remove('no-js');
});
