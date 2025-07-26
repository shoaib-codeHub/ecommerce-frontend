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
       <button class="add-to-cart" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      </div>
    </div>
  `;
}
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
        <button class="add-to-cart" id="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  `;

  // Now bind the product to the button
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const productData = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image
    };
    addToCart(productData); // from cart.js
  });
}
