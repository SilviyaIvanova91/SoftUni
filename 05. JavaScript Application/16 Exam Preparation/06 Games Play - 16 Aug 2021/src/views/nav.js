import { logout } from "../api/user.js";
import { getUserData } from "../util.js";
import { html, render, page, nothing } from "../lib.js";

const header = document.querySelector("header");

const navTemplate = (hasUser) => html`
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/catalog">All games</a>
    ${hasUser
      ? html`
          <!-- Logged-in users -->
          <div id="user">
            <a href="/create">Create Game</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
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

export function updateNav() {
  const user = getUserData();
  render(navTemplate(user), header);
}

async function onLogout() {
  await logout();
  updateNav();

  page.redirect("/");
}
