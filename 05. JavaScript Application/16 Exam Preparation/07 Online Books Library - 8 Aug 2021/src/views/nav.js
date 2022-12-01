import { logout } from "../api/user.js";
import { html, render, page, nothing } from "../lib.js";
import { getUserData } from "../util.js";

const header = document.getElementById("site-header");

const navTemplate = (hasUser) => html`
  <nav class="navbar">
    <section class="navbar-dashboard">
      <a href="/catalog">Dashboard</a>
      ${!hasUser
        ? html`
            <!-- Guest users -->
            <div id="guest">
              <a class="button" href="/login">Login</a>
              <a class="button" href="/register">Register</a>
            </div>
          `
        : html`
            <!-- Logged-in users -->
            <div id="user">
              <span>Welcome, ${hasUser.email}</span>
              <a class="button" href="/myBook">My Books</a>
              <a class="button" href="/create">Add Book</a>
              <a @click=${onLogout} class="button" href="/logout">Logout</a>
            </div>
          `}
    </section>
  </nav>
`;

export async function updateNav() {
  const user = getUserData();

  render(navTemplate(user), header);
}

export async function onLogout() {
  await logout();

  updateNav();
  page.redirect("/");
}
