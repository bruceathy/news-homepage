const navLinks = document.getElementById("nav-links");
const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
});
