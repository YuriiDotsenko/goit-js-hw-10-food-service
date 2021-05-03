import "../src/styles.css";
import menu from "./menu.json";
import renderMenu from "./templates/card.hbs";

const toogleRef = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");

// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme",
// };

toogleRef.addEventListener("change", onClickChangeColor);

function onClickChangeColor(evt) {
  if (evt.target.checked) {
    body.classList.add(".dark-theme");
    body.classList.remove(".light-theme");
  } else {
    body.classList.remove(".dark-theme");
    body.classList.add(".light-theme");
  }
}
