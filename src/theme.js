const body = document.querySelector("body");
const checkbox = document.querySelector(".theme-switch__toggle");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

let currentTheme = localStorage.getItem("theme");
if (JSON.parse(currentTheme) === Theme.DARK) {
  checkbox.checked = true;
  body.setAttribute("class", Theme.DARK);
} else {
  body.setAttribute("class", Theme.LIGHT);
}

const changeTheme = function (evt) {
  if (evt.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", JSON.stringify(Theme.DARK));
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", JSON.stringify(Theme.LIGHT));
  }
};

checkbox.addEventListener("change", changeTheme);
