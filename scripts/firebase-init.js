// File: scripts/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZLUeja5PMoBIOU3IVsfIFoqkuB5HGo3E",
  authDomain: "ecommerce-frontend-8c48f.firebaseapp.com",
  projectId: "ecommerce-frontend-8c48f",
  storageBucket: "ecommerce-frontend-8c48f.firebasestorage.app",
  messagingSenderId: "902501979869",
  appId: "1:902501979869:web:c5eb3b6d426f756417ad34",
  measurementId: "G-1YJ5PBQRPF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// ========== USER HEADER UPDATE ==========
const userNameDisplay = document.getElementById("user-name-display");
const logoutBtn = document.getElementById("logout-btn");

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user && userNameDisplay) {
    userNameDisplay.textContent = user.displayName || user.email;
    userNameDisplay.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (userNameDisplay) userNameDisplay.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      showToast("Logged out successfully.", "success");
      window.location.href = "login.html";
    } catch (error) {
      showToast("Error during logout. Please try again.", "error");
    }
  });
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}
export { auth };
