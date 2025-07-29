
# 🛒 E-Commerce Website

A modern, fully responsive e-commerce frontend built using **HTML**, **CSS**, and **JavaScript** with **Firebase Authentication** and a dynamic client-side cart system. This project is perfect for learning how to build a full frontend shopping experience with real authentication and cart management using localStorage.

---
### Key Files and Directories Explained:

* **`hero.jpg`**: The eye-catching hero image featured prominently on the homepage.
* **`index.html`**: The main landing page, showcasing the product grid and serving as the primary entry point to the website.
* **`product.html`**: A dynamic page dedicated to displaying detailed information for individual products.
* **`cartpage.html`**: Provides a comprehensive view of the user's shopping cart, allowing for easy management of selected items.
* **`login_signup.html`**: Contains the user interface for both logging in and registering new accounts.

* **`scripts/`**: This directory centralizes all JavaScript files for the application:
    * **`app.js`**: Handles the core homepage logic and global JavaScript functionalities.
    * **`auth.js`**: Manages all Firebase authentication operations, including user login, signup, and logout.
    * **`auth-redirect.js`**: Controls user redirection based on their authentication status, ensuring protected routes are handled correctly.
    * **`cart.js`**: Implements the fundamental logic for all shopping cart operations (adding, removing, and updating items).
    * **`cartpage.js`**: Specifically manages the user interface and event handlers for the shopping cart page.
    * **`firebase-init.js`**: Initializes Firebase services and configures them for the project.
    * **`product.js`**: Contains JavaScript logic specific to the product detail page, such as handling dynamic content loading.

* **`styles/`**: This directory holds all the CSS stylesheets for the project:
    * **`main.css`**: Defines global styles, typography, and layout settings applied across the entire website.
    * **`auth.css`**: Provides specific styling rules for the authentication forms.
    * **`cart.css`**: Manages the visual presentation and layout of the shopping cart page.
    * **`login_signup.css`**: Offers additional styling nuances for the login and signup user interfaces.

* **`.gitignore`**: A standard file that instructs Git which files and directories to exclude from version control.
* **`package.json`**: Contains essential project metadata and lists development dependencies, commonly used with Node.js for project management.
* **`README.md`**: This very document, offering a detailed overview and information about the project.
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
