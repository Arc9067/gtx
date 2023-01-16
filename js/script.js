const nav_toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const nav_list = document.querySelector(".nav-list");

nav_toggle.addEventListener("click", () => {
  nav.classList.toggle("navclr");
  nav_toggle.classList.toggle("navc");
  nav_list.classList.toggle("dblock");
});
