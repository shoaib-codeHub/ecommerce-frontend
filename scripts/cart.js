// Add product to cart and update localStorage
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  item.quantity = parseInt(item.quantity);
  if (isNaN(item.quantity) || item.quantity <= 0) item.quantity = 1;

  item.size = item.size || "default";
  item.color = item.color || "default";

  const existing = cart.find(
    p => p.id === item.id && p.size === item.size && p.color === item.color
  );

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();          // 🟢 Update after adding
}

// Update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalQuantity = cart.reduce((sum, item) => {
    const qty = parseInt(item.quantity);
    return sum + (isNaN(qty) ? 0 : qty);
  }, 0);

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = totalQuantity;
}

// Show animation when product is added
function showCartAnimation() {
  const el = document.getElementById("cart-animation");
  if (!el) return;

  el.classList.add("show");
  setTimeout(() => {
    el.classList.remove("show");
  }, 1500);
}

// Run update on all pages
document.addEventListener("DOMContentLoaded", updateCartCount);
