//register event listeners to navigations
//switch view
//handle for submit
//send login information to RESET service
//store authorization token

import { chekUserNav } from "./auth.js";
import { showCatalogView } from "./catalog.js";

document.getElementById("login-link").addEventListener("click", showLoginView);
document.getElementById("login-form").addEventListener("submit", onLogin);

export function showLoginView() {
  [...document.querySelectorAll("section")].forEach(
    (s) => (s.style.display = "none")
  );
  document.getElementById("login-view").style.display = "block";
}

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { email, password } = Object.fromEntries(formData);

  try {
    await login(email, password);
    chekUserNav();
    showCatalogView();
  } catch (error) {
    alert(error.message);
  }
}

async function login(email, password) {
  const response = await fetch("http://localhost:3030/users/login", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok != true) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();

  sessionStorage.setItem("userId", data._id);
  sessionStorage.setItem("username", data.username);
  sessionStorage.setItem("accessToken", data.accessToken);
}
