import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const header = document.querySelector("header");

const navTemplate = (hasUser) => html`
  <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

  <nav>
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>

    ${hasUser
      ? html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="/create">Create Offer</a>
            <a @click=${onLogout} href="/logout">Logout</a>
          </div>
        `
      : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
  </nav>
`;

export function updateNav() {
  const user = getUserData();

  render(navTemplate(user), header);
}

async function onLogout() {
 await logout();
  updateNav();
  page.redirect("/dashboard");
}
