// Add product to cart
function addToCart(item) {
  // Get cart from localStorage or initialize empty
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Validate and sanitize input
  item.quantity = parseInt(item.quantity);
  if (isNaN(item.quantity) || item.quantity <= 0) item.quantity = 1;

  item.size = item.size || "default";
  item.color = item.color || "default";

  // Check if the same item (with size & color) already exists
  const existing = cart.find(
    p => p.id === item.id && p.size === item.size && p.color === item.color
  );

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count in UI
  updateCartCount();

  // Show confirmation
  alert("Product added to cart!");
}

// Update cart count in header (total quantity)
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalQuantity = cart.reduce((sum, item) => {
    const qty = parseInt(item.quantity);
    return sum + (isNaN(qty) ? 0 : qty);
  }, 0);

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = totalQuantity;
}

// Run cart count update on every page load
document.addEventListener("DOMContentLoaded", updateCartCount);
