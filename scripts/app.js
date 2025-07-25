

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // Toggle the navigation menu when hamburger icon is clicked
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
