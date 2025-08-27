// File: scripts/auth.js
import { auth } from './firebase-init.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    togglePasswordIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const input = icon.previousElementSibling;
            const type = input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);
            icon.textContent = type === "password" ? "👁️" : "🙈";
        });
    });

    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formToggleText = document.getElementById("formToggleText");
    const formToggleLink = document.getElementById("formToggleLink");
    const toLoginLink = document.getElementById("to-login");
    const toSignupLink = document.getElementById("to-signup");
    const userDisplay = document.createElement("div");
    const navMenu = document.querySelector(".nav-menu");

    loginForm.classList.add("active");

    function updateToggleText() {
        if (loginForm.classList.contains("active")) {
            formToggleText.textContent = "Don't have an account?";
            formToggleLink.textContent = "Sign up";
        } else {
            formToggleText.textContent = "Already have an account?";
            formToggleLink.textContent = "Login";
        }
    }

    function toggleForm() {
        loginForm.classList.toggle("active");
        signupForm.classList.toggle("active");
        clearAllErrors();
        updateToggleText();
    }

    formToggleLink?.addEventListener("click", (e) => {
        e.preventDefault();
        toggleForm();
    });

    toSignupLink?.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
        clearAllErrors();
        updateToggleText();
    });

    toLoginLink?.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
        clearAllErrors();
        updateToggleText();
    });

    updateToggleText();

    loginForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = loginForm.querySelector("#login-email").value.trim();
        const password = loginForm.querySelector("#login-password").value;
        const errorBox = loginForm.querySelector("#login-error");

        clearError(errorBox);

        if (!validateEmail(email)) {
            return showError("Please enter a valid email.", errorBox);
        }

        if (!password) {
            return showError("Please enter your password.", errorBox);
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            showToast("Login successful!");
            window.location.href = "index.html";
        } catch (error) {
            showError(error.message, errorBox);
        }
    });

    signupForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = signupForm.querySelector("#signup-name").value.trim();
        const email = signupForm.querySelector("#signup-email").value.trim();
        const password = signupForm.querySelector("#signup-password").value;
        const confirmPassword = signupForm.querySelector("#signup-confirm-password").value;
        const errorBox = signupForm.querySelector("#signup-error");

        clearError(errorBox);

        if (!name) {
            return showError("Please enter your name.", errorBox);
        }

        if (!validateEmail(email)) {
            return showError("Please enter a valid email.", errorBox);
        }

        if (!validatePassword(password)) {
            return showError("Password must be at least 8 characters with uppercase, lowercase, and a number.", errorBox);
        }

        if (password !== confirmPassword) {
            return showError("Passwords do not match.", errorBox);
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, { displayName: name });
            showToast("Signup successful!");
            window.location.href = "index.html";
        } catch (error) {
            showError(error.message, errorBox);
        }
    });

    function addUserDisplayAndLogout(user) {
        if (!document.getElementById("user-info")) {
            const userDiv = document.createElement("div");
            userDiv.id = "user-info";
userDiv.innerHTML = `<span class="user-name">👤 ${user.displayName || user.email}</span> <button id="logoutBtn" style="padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Logout 🔓</button>`;
            userDiv.style.display = "flex";
            userDiv.style.alignItems = "center";
            userDiv.style.gap = "10px";
            navMenu.parentElement.appendChild(userDiv);

            document.getElementById("logoutBtn").addEventListener("click", async () => {
                await signOut(auth);
                showToast("Logged out successfully!");
                window.location.href = "login_signup.html";
            });
        }
    }

    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.className = "toast";
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add("show"), 100);
        setTimeout(() => {
            toast.classList.remove("show");
            toast.addEventListener("transitionend", () => toast.remove());
        }, 3000);
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            addUserDisplayAndLogout(user);
        } else {
            if (window.location.pathname.includes("cartpage") || window.location.pathname.includes("checkout")) {
                window.location.href = "login_signup.html";
            }
        }
    });

    function validateEmail(email) {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    function showError(message, container) {
        if (container) {
            container.textContent = message;
            container.style.display = "block";
        }
    }

    function clearError(container) {
        if (container) {
            container.textContent = "";
            container.style.display = "none";
        }
    }

    function clearAllErrors() {
        const errorBoxes = document.querySelectorAll(".error-message");
        errorBoxes.forEach((box) => clearError(box));
    }
});