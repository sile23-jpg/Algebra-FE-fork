export function toggleNav(hamburgerEl, asideEl) {
  let asideDispplay = window.getComputedStyle(asideEl).display;

  if (asideDispplay === "block") {
    
}

  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");
}
