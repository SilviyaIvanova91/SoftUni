import { logout } from "../api/user.js";
import { html, render, nothing, page } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navTemplate = (hasUser) => html`
  <a class="active" href="/">Home</a>
  <a href="/catalog">All Listings</a>
  <a href="/catalogByYear">By Year</a>
  ${!hasUser
    ? html`
        <!-- Guest users -->
        <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      `
    : html`
        <!-- Logged users -->
        <div id="profile">
          <a>Welcome ${hasUser.username}</a>
          <a href="/myCatalog">My Listings</a>
          <a href="/create">Create Listing</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>
      `}
`;

export function updateNav() {
  const user = getUserData();
  render(navTemplate(user), nav);
}

async function onLogout() {
  await logout();
  updateNav();
  page.redirect("/");
}
