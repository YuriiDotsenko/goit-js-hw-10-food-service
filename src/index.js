import "../src/styles.css";
import menu from "./menu.json";
import renderMenu from "./templates/card.hbs";
import Theme from "./localstorage";

const toogleRef = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");
const containerMenuCards = document.querySelector(".js-menu");

const cardMarkup = createCardMarcup(menu);

containerMenuCards.insertAdjacentHTML("beforeend", cardMarkup);

toogleRef.addEventListener("change", onClickChangeColor);

function onClickChangeColor(evt) {
  if (evt.target.checked) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");

    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
  }
}

function createCardMarcup(menu) {
  return menu.map(renderMenu).join("");
}
