import { login } from "../api/users.js";
import { html, render, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { notification } from "./notification.js";

const loginTemplate = (onLogin) => html`
  <section id="login">
    <form @submit=${onLogin} id="login-form">
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export async function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  async function onLogin({ email, password }) {
    if (!email || !password) {
      notification("All fields are required!");
      return;
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect("/allMemes");
  }
}
