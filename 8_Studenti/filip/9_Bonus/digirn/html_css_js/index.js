import { toggleNav } from "./js/shared/functions";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");

  hamburgerEl.addEventListener("click", toggleNav(hamburgerEl));
}
