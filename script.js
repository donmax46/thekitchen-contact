function toggleDetails(card) {
    const details = card.querySelector('.product-details');
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
