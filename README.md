
# 🛒 E-Commerce Website

A modern, fully responsive e-commerce frontend built using **HTML**, **CSS**, and **JavaScript** with **Firebase Authentication** and a dynamic client-side cart system. This project is perfect for learning how to build a full frontend shopping experience with real authentication and cart management using localStorage.

---

## 📁 Project Structure

📦 E-Commerce-Website/
├── hero.jpg
├── index.html
├── product.html
├── cartpage.html
├── login_signup.html
│
├── scripts/
│ ├── app.js
│ ├── auth.js
│ ├── auth-redirect.js
│ ├── cart.js
│ ├── cartpage.js
│ ├── firebase-init.js
│ └── product.js
│
├── styles/
│ ├── main.css
│ ├── auth.css
│ ├── cart.css
│ └── login_signup.css
│
├── .gitignore
├── package.json
└── README.md

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
