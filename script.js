// DOM elements
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

// Show section
function show(sectionId, clickedLink) {
  sections.forEach((sec) => sec.classList.remove("active"));
  navLinks.forEach((link) => link.classList.remove("active"));
  
  document.getElementById(sectionId).classList.add("active");
  clickedLink.classList.add("active");
}

// Animation
document.addEventListener("click", (e) => {
  const el = e.target.closest(".float");
  if (!el) {
    document
      .querySelectorAll(".is-floating")
      .forEach((i) => i.classList.remove("is-floating"));
    return;
  }
  
  const active = el.classList.contains("is-floating");
  document
    .querySelectorAll(".is-floating")
    .forEach((i) => i.classList.remove("is-floating"));
  
  if (!active) el.classList.add("is-floating");
});
