 function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
      document.getElementById("cart-count").textContent = totalQuantity;
    }

    function renderCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const container = document.getElementById("cart-container");
      const totalDisplay = document.getElementById("cart-total");
      const checkoutBtn = document.getElementById("checkout-btn");

      container.innerHTML = "";
      let total = 0;

      if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        checkoutBtn.disabled = true;
        totalDisplay.textContent = "0.00";
        return;
      }

      cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-img" />
          <div class="cart-details">
            <h3>${item.name}</h3>
            <p>Size: ${item.size} | Color: ${item.color}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <div class="quantity-controls">
              <button class="qty-decrease">−</button>
              <input type="number" value="${item.quantity}" min="1" max="10" readonly />
              <button class="qty-increase">+</button>
            </div>
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <button class="remove-btn">Remove</button>
          </div>
        `;

        itemEl.querySelector(".qty-increase").addEventListener("click", () => changeQty(index, 1));
        itemEl.querySelector(".qty-decrease").addEventListener("click", () => changeQty(index, -1));
        itemEl.querySelector(".remove-btn").addEventListener("click", () => removeItem(index));

        container.appendChild(itemEl);
      });

      totalDisplay.textContent = total.toFixed(2);
      checkoutBtn.disabled = false;
    }

    function changeQty(index, delta) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart[index].quantity = Math.max(1, cart[index].quantity + delta);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }

    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateCartCount();
      renderCart();
    });