import { get } from "./api.js";
import { clearUserData } from "./util.js";

export function checkUserNav() {
  const username = sessionStorage.getItem("username");
  if (username) {
    [...document.querySelectorAll(".guest")].forEach(
      (i) => (i.style.display = "none")
    );
    [...document.querySelectorAll(".user")].forEach(
      (i) => (i.style.display = "inline")
    );
    document.getElementById(
      "welcome-msg"
    ).textContent = `Welcome, ${username}!`;
  } else {
    [...document.querySelectorAll(".guest")].forEach(
      (i) => (i.style.display = "inline")
    );
    [...document.querySelectorAll(".user")].forEach(
      (i) => (i.style.display = "none")
    );
  }
}

export function onLogout(ctx) {
  get("/users/logout");
  clearUserData();
  ctx.checkUserNav();
  ctx.goto("catalog-link");
}
