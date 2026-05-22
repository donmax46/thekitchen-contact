let allProducts = [];

async function loadProducts(){

  const response =
  await fetch("products.json");

  const products =
  await response.json();

  allProducts = products;

  renderProducts(products);

}

function renderProducts(products){

  const productGrid =
  document.getElementById("product-grid");

  productGrid.innerHTML = "";

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

        <div class="product-actions">

          <a href="https://wa.me/237652172270"
             target="_blank"
             class="product-btn">

             WHATSAPP

          </a>

          <button class="details-btn"
                  onclick="openModal('${product.id}')">

                  DETAILS

          </button>

        </div>

      </div>

    `;

    productGrid.appendChild(card);

  });

}

function filterProducts(category){

  if(category === "All"){

    renderProducts(allProducts);

    return;

  }

  const filtered =
  allProducts.filter(product =>
  product.category === category);

  renderProducts(filtered);

}

function openModal(id){

  const product =
  allProducts.find(p => p.id === id);

  const modal =
  document.getElementById("product-modal");

  const modalContent =
  document.getElementById("modal-content");

  modalContent.innerHTML = `

    <img src="${product.image}" class="modal-image">

    <h2>${product.name}</h2>

    <p>${product.description}</p>

    <span class="modal-price">
      ${product.price}
    </span>

    <div class="modal-buttons">

      <a href="https://wa.me/237652172270"
         target="_blank"
         class="product-btn">

         ORDER ON WHATSAPP

      </a>

      <a href="https://t.me/mawjud126"
         target="_blank"
         class="telegram-btn">

         TELEGRAM

      </a>

    </div>

  `;

  modal.style.display = "flex";

}

function closeModal(){

  document.getElementById("product-modal")
  .style.display = "none";

}

loadProducts();
