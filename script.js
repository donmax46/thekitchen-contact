// script.js — vault toggles, staggered animation is via CSS variable --i
document.addEventListener('DOMContentLoaded', function () {
  // Set incremental indices if not present (defensive)
  const items = document.querySelectorAll('.vault-item');
  items.forEach((el, idx) => {
    if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', idx);
  });

  // Toggle details on click
  document.querySelectorAll('.vault-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.vault-item');
      const details = parent.querySelector('.vault-details');
      const open = details.style.display === 'block';
      // Collapse others (optional)
      document.querySelectorAll('.vault-details').forEach(d => { d.style.display = 'none'; });
      details.style.display = open ? 'none' : 'block';
      // On mobile, scroll into view a little
      if (window.innerWidth < 600 && !open) parent.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });
});
