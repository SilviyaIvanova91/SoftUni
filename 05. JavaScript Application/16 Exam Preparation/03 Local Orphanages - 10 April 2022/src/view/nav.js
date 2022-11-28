import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const header = document.querySelector("header");

const navTemplate = (hasUser) => html`
  <!-- Navigation -->
  <h1><a href="/">Orphelp</a></h1>

  <nav>
    <a href="/dashboard">Dashboard</a>

    ${hasUser
      ? html`
          <!-- Logged-in users -->
          <div id="user">
            <a href="/myPost">My Posts</a>
            <a href="/create">Create Post</a>
            <a @click=${onLogout} href="/logout">Logout</a>
          </div>
        `
      : html`
          <!-- Guest users -->
          <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
  </nav>
`;

export async function updateNav() {
  const user = getUserData();

  render(navTemplate(user), header);
}

export function onLogout() {
  logout();
  updateNav();
  page.redirect("/dashboard");
}
