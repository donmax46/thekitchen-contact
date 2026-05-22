async function loadProducts(){

  const response = await fetch("products.json");

  const products = await response.json();

  const productGrid =
  document.getElementById("product-grid");

  products.forEach(product => {

    const card =
    document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `

      <div class="product-image"
      style="background-image:url('${product.image}')">
      </div>

      <div class="product-content">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <span class="product-price">
          ${product.price}
        </span>

        <a href="https://wa.me/923184252676"
           target="_blank"
           class="product-btn">

           ORDER NOW

        </a>

      </div>

    `;

    productGrid.appendChild(card);

  });

}

loadProducts();
