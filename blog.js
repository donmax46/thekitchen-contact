async function loadBlogs(){

  const response =
  await fetch("blog.json");

  const blogs =
  await response.json();

  const blogGrid =
  document.getElementById("blog-grid");

  blogs.forEach(blog => {

    const card =
    document.createElement("div");

    card.classList.add("blog-card");

    card.innerHTML = `

      <div class="blog-image"
      style="background-image:url('${blog.image}')">
      </div>

      <div class="blog-content">

        <h3>${blog.title}</h3>

        <p>${blog.description}</p>

        <a href="#">
          READ ARTICLE
        </a>

      </div>

    `;

    blogGrid.appendChild(card);

  });

}

loadBlogs();
