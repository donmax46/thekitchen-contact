/* =========================
   THE KITCHEN DXB V8
   products.js
========================= */

let allProducts = [];

/* LOAD PRODUCTS */

async function loadProducts(){

  try{

    const response =
    await fetch("products.json");

    const products =
    await response.json();

    allProducts = products;

    renderProducts(products);

  }

  catch(error){

    console.error(
      "Error loading products:",
      error
    );

  }

}

/* RENDER PRODUCTS */

function renderProducts(products){

  const productGrid =
  document.getElementById("product-grid");

  if(!productGrid) return;

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

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.description}
        </p>

        <span class="product-price">

          ${product.price}

        </span>

        <div class="product-actions">

          <a href="https://wa.me/237652172270"
             target="_blank"
             class="product-btn">

             WHATSAPP

          </a>

          <button class="telegram-btn details-btn"
                  onclick="openModal('${product.id}')">

                  DETAILS

          </button>

        </div>

      </div>

    `;

    productGrid.appendChild(card);

  });

}

/* FILTER PRODUCTS */

function filterProducts(category){

  if(category === "All"){

    renderProducts(allProducts);

    return;

  }

  const filteredProducts =
  allProducts.filter(product =>

    product.category === category

  );

  renderProducts(filteredProducts);

}

/* SEARCH PRODUCTS */

function searchProducts(){

  const searchInput =
  document.getElementById("searchInput");

  if(!searchInput) return;

  const search =
  searchInput.value.toLowerCase();

  const filteredProducts =
  allProducts.filter(product =>

    product.name
    .toLowerCase()
    .includes(search)

  );

  renderProducts(filteredProducts);

}

/* PRODUCT MODAL */

function openModal(id){

  const product =
  allProducts.find(p => p.id === id);

  if(!product) return;

  const modal =
  document.getElementById("product-modal");

  const modalContent =
  document.getElementById("modal-content");

  if(!modal || !modalContent) return;

  modalContent.innerHTML = `

    <img src="${product.image}"
         class="modal-image">

    <h2>
      ${product.name}
    </h2>

    <p>
      ${product.description}
    </p>

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

/* CLOSE MODAL */

function closeModal(){

  const modal =
  document.getElementById("product-modal");

  if(modal){

    modal.style.display = "none";

  }

}

/* CLOSE MODAL ON OUTSIDE CLICK */

window.addEventListener("click", (e) => {

  const modal =
  document.getElementById("product-modal");

  if(e.target === modal){

    closeModal();

  }

});

/* INITIALIZE */

loadProducts();
