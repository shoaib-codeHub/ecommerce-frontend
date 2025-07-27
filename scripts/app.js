// ✅ JavaScript added for mobile menu toggle
// ✅ Website tested on multiple devices for usability

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // Toggle the navigation menu when hamburger icon is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// product-grid start here

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data))
    .catch(err => console.error("Error fetching products:", err));
});

function displayProducts(products) {
  const container = document.getElementById("products-container");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
  card.innerHTML = `
      <a href="product.html?id=${product.id}" class="product-link">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button class="add-to-cart">View Details</button>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}

