/* =========================
   THE KITCHEN DXB V8
   blog.js
========================= */

async function loadBlogs(){

  try{

    const response =
    await fetch("blog.json");

    const blogs =
    await response.json();

    renderBlogs(blogs);

  }

  catch(error){

    console.error(
      "Error loading blog posts:",
      error
    );

  }

}

/* RENDER BLOGS */

function renderBlogs(blogs){

  const blogGrid =
  document.getElementById("blog-grid");

  if(!blogGrid) return;

  blogGrid.innerHTML = "";

  blogs.forEach(blog => {

    const card =
    document.createElement("div");

    card.classList.add("blog-card");

    card.innerHTML = `

      <div class="blog-image"
           style="background-image:url('${blog.image}')">
      </div>

      <div class="blog-content">

        <span class="blog-category">

          ${blog.category}

        </span>

        <h3>

          ${blog.title}

        </h3>

        <p>

          ${blog.description}

        </p>

        <div class="blog-footer">

          <span class="blog-date">

            ${blog.date}

          </span>

          <a href="#"
             class="blog-link">

             READ MORE

          </a>

        </div>

      </div>

    `;

    blogGrid.appendChild(card);

  });

}

/* INITIALIZE */

loadBlogs();
