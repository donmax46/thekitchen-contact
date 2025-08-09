// Toggle Vault Product Details
function toggleDetails(el) {
  el.classList.toggle('active');
}

// Animate staggered fade for Vault
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});
