import { logout } from "../api/users.js";
import { html, render, page, nothing } from "../lib.js";
import { getUserData } from "../util.js";

const nav = document.querySelector("nav");

const navTemplate = (hasUser) => html`
  <a href="/allMemes">All Memes</a>
  <!-- Logged users -->
  ${hasUser
    ? html` <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
          <span>Welcome, ${hasUser.email}</span>
          <a href="/myProfile">My Profile</a>
          <a @click=${onLogOut} href="javascript:void(0)">Logout</a>
        </div>
      </div>`
    : html` <!-- Guest users -->
        <div class="guest">
          <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
          <a class="active" href="/">Home Page</a>
        </div>`}
`;

export function updateNav() {
  const user = getUserData();
  render(navTemplate(user), nav);
}

async function onLogOut() {
await  logout();
  updateNav();
  page.redirect("/");
}
