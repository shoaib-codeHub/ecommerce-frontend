
# 🛒 E-Commerce Website

A modern, fully responsive e-commerce frontend built using **HTML**, **CSS**, and **JavaScript** with **Firebase Authentication** and a dynamic client-side cart system. This project is perfect for learning how to build a full frontend shopping experience with real authentication and cart management using localStorage.

---

## 📁 Project Structure

📦 E-Commerce-Website/
├── hero.jpg # Hero image for homepage
├── index.html # Homepage with product grid
├── product.html # Product detail page (dynamic content)
├── cartpage.html # Shopping cart view
├── login_signup.html # Login & Signup forms
│
├── scripts/ # JavaScript files
│ ├── app.js # Main homepage and global logic
│ ├── auth.js # Firebase login/signup/logout functions
│ ├── auth-redirect.js # Redirect users based on login status
│ ├── cart.js # Logic for cart operations (add/update/remove)
│ ├── cartpage.js # Cart page UI logic and event handlers
│ ├── firebase-init.js # Firebase initialization and config
│ └── product.js # Product detail page logic
│
├── styles/ # CSS stylesheets
│ ├── main.css # Global styles
│ ├── auth.css # Styles for login/signup forms
│ ├── cart.css # Styles for cart page
│ └── login_signup.css # Extra styling for auth UI
│
├── .gitignore # Git ignore rules
├── package.json # Project metadata (for tools, optional)
└── README.md # This documentation file

markdown
Copy
Edit

---

## 🚀 Features

- 🔐 **Firebase Authentication**
  - Email/Password login and registration
  - Google Sign-In support (optional)
  - Auth state detection and route protection

- 🛍️ **Product Display**
  - Product listing on homepage
  - Dynamic product detail view
  - Image zoom and variations (if implemented)

- 🛒 **Shopping Cart System**
  - Add/remove/update cart items
  - Quantity selection
  - Total price calculation
  - Data stored in browser localStorage

- 📱 **Responsive Design**
  - Mobile-friendly layout
  - CSS media queries and animations

- 🔔 **Interactive UI**
  - Toast-style alerts and user feedback
  - Redirect to dashboard/cart after login
  - User name displayed after login

---

## 🧩 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project
