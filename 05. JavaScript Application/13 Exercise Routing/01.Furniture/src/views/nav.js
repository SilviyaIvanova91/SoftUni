import { html, render, page } from "../lib.js";
import { logout } from "../api/user.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navtemplate = (hasUser) => html`
  <a id="catalogLink" href="/catalog" class="active">Dashboard</a>
  ${hasUser
    ? html`
        <div id="user">
          <a id="createLink" href="/create">Create Furniture</a>
          <a id="profileLink" href="/my-publications">My Publications</a>
          <a @click=${onLogout} id="logoutBtn" href="javascript:void(0)"
            >Logout</a
          >
        </div>
      `
    : html`
        <div id="guest">
          <a id="loginLink" href="/login" class="active">Login</a>
          <a id="registerLink" href="/register">Register</a>
        </div>
      `}
`;

export function updateNav() {
  const user = getUserData();
  render(navtemplate(user), nav);
}

async function onLogout() {
  await logout();
  updateNav();
  page.redirect("/");
}
