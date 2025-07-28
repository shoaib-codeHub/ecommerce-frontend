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
    updateCartCount(); // 🟢 Update after adding
    showToast("Item added to cart!");
}

// Update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalQuantity = cart.reduce((sum, item) => {
        const qty = parseInt(item.quantity);
        return sum + (isNaN(qty) ? 0 : qty);
    }, 0);

    // Get all elements with the class 'cart-count-display'
    const countEls = document.querySelectorAll(".cart-count-display");

    // Iterate over them and update their text content
    countEls.forEach(el => {
        if (el) el.textContent = totalQuantity;
    });
}

// Show animation when product is added (no change needed)
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

// Helper for toast (example, you'll have your own implementation)
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message'; // Make sure you have this class in your CSS
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Show the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); // Small delay to allow reflow before animation

    // Hide and remove the toast after a few seconds
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 3000);
}