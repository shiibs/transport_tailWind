const header = document.querySelector("header");
const mobileHeader = document.querySelector(".mobile-header");

function toggleFixedHeader() {
  if (window.scrollY > header.offsetHeight) {
    mobileHeader.classList.add("fixed-header");
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
    mobileHeader.classList.remove("fixed-header");
  }
}

window.addEventListener("scroll", toggleFixedHeader);

function toggleNav() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");

  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("shown");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
}

function toggleSubMenu(element) {
  const subMenu = element.parentElement.nextElementSibling;
  const isVisible = subMenu.style.display === "block";

  subMenu.style.display = isVisible ? "none" : "block";
  element.textContent = isVisible ? "+" : "-";
}
