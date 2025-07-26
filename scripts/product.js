document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    document.getElementById("product-detail").innerHTML = "<p>Product ID not found.</p>";
    return;
  }

  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => displayProduct(product))
    .catch(err => {
      document.getElementById("product-detail").innerHTML = "<p>Failed to load product.</p>";
      console.error("Error:", err);
    });
});

function displayProduct(product) {
  const container = document.getElementById("product-detail");

  container.innerHTML = `
    <div class="product-wrapper">
      <div class="image-section">
        <img src="${product.image}" alt="${product.title}" id="main-img"/>
      </div>
      <div class="info-section">
        <h2>${product.title}</h2>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p class="desc">${product.description}</p>
       <button class="add-to-cart" onclick="addToCartFromCard(this)">Add to Cart</button>
      </div>
    </div>
  `;
}
function addToCartFromCard(button) {
  const card = button.closest('.product-card');
  const product = {
    id: card.dataset.id,
    name: card.querySelector('h3').textContent,
    price: card.querySelector('p').textContent,
    image: card.querySelector('img').src
  };
  addToCart(product); // from cart.js
}