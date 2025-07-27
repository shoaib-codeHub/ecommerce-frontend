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

    // Show login form by default
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
        updateToggleText();
    });

    toLoginLink?.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
        updateToggleText();
    });

    updateToggleText();

    loginForm?.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = loginForm.querySelector("#login-email").value.trim();
        const password = loginForm.querySelector("#login-password").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (!password) {
            alert("Please enter your password.");
            return;
        }

        alert("Login successful!");
    });

    signupForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = signupForm.querySelector("#signup-name").value.trim();
        const email = signupForm.querySelector("#signup-email").value.trim();
        const password = signupForm.querySelector("#signup-password").value;
        const confirmPassword = signupForm.querySelector("#signup-confirm-password").value;
        const errorBox = signupForm.querySelector(".error-message");

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

        errorBox.textContent = "";
        alert("Signup successful!");
    });

    function validateEmail(email) {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    }

    function showError(message, container) {
        if (container) container.textContent = message;
    }
});
