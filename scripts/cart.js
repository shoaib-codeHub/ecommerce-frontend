// cart.js

// Initialize or update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

// Add product to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if already in cart (optional)
  const exists = cart.find(item => item.id === product.id);
  if (!exists) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart!");
  } else {
    alert("Product already in cart!");
  }
}

// Call on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
