document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    document.getElementById("product-detail").innerHTML = console.log("Product ID from URL:", productId);
  }

  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => displayProduct(product))
    .catch(err => {
      document.getElementById("product-detail").innerHTML = "<p>Failed to load product.</p>";
      console.error("Fetch Error:", err);
    });
});

function displayProduct(product) {
  const container = document.getElementById("product-detail");
  const price = parseFloat(product.price.toFixed(2));

  container.innerHTML = `
    <div class="product-wrapper">
      <div class="image-section">
        <div class="zoom-container">
          <img src="${product.image}" alt="${product.title}" id="main-img" />
        </div>
      </div>

      <div class="info-section">
        <h2>${product.title}</h2>
        <p class="desc">${product.description}</p>

        <label for="size">Size:</label>
        <select id="size">
          <option value="S">Small</option>
          <option value="M" selected>Medium</option>
          <option value="L">Large</option>
        </select>

        <label for="color">Color:</label>
        <select id="color">
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
        </select>

        <div class="quantity-selector">
          <button id="qty-decrease">−</button>
          <input type="number" id="quantity" value="1" min="1" max="10" readonly />
          <button id="qty-increase">+</button>
        </div>

        <p class="price">Price: $<span id="unit-price">${price}</span></p>
        <p class="total-price">Total: $<span id="total-price">${price}</span></p>

        <button class="add-to-cart" id="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  `;

  // Elements
  const quantityInput = document.getElementById("quantity");
  const unitPrice = price;
  const totalPriceEl = document.getElementById("total-price");

  // Zoom effect
  const mainImg = document.getElementById("main-img");
  mainImg.addEventListener("mousemove", (e) => {
    const rect = mainImg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainImg.style.transformOrigin = `${x}% ${y}%`;
    mainImg.style.transform = "scale(2)";
  });
  mainImg.addEventListener("mouseleave", () => {
    mainImg.style.transform = "scale(1)";
    mainImg.style.transformOrigin = "center center";
  });

  // Quantity controls
  document.getElementById("qty-increase").addEventListener("click", () => changeQuantity(1));
  document.getElementById("qty-decrease").addEventListener("click", () => changeQuantity(-1));

  function changeQuantity(delta) {
    let qty = parseInt(quantityInput.value);
    qty = Math.max(1, Math.min(10, qty + delta));
    quantityInput.value = qty;
    totalPriceEl.textContent = (qty * unitPrice).toFixed(2);
  }

  // Add to cart
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price: unitPrice,
      image: product.image,
      quantity: parseInt(quantityInput.value),
      size: document.getElementById("size").value,
      color: document.getElementById("color").value
    };
    addToCart(cartItem); // from cart.js
  });
}
