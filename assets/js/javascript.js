const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navLinks.classList.remove("is-open");
    }
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
