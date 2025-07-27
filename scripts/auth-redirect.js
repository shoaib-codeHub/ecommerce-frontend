import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

// Redirect to login page if user is not authenticated and currently on index.html
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.endsWith("index.html")) {
    window.location.href = "login_signup.html";
  }
});
