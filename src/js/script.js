menuButton = document.querySelector(".menuButton");
menu = document.querySelector("menu");

menuButton.addEventListener("click", () => {
  visibility = menu.getAttribute("aria-expanded");

  if (visibility === "false") {
    menu.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    menu.setAttribute("aria-expanded", false);
  }
});
