import { login } from "../api/user.js";
import { html, render, page, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
  <!-- Login Page ( Only for Guest users ) -->
  <section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@gmail.com"
        />

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" class="btn submit" value="Login" />
        <p class="field">
          <span
            >If you don't have profile click <a href="/register">here</a></span
          >
        </p>
      </div>
    </form>
  </section>
`;

export async function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  async function onLogin({ email, password }) {
    if (!email || !password) {
      return alert("All fields are required!");
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect("/");
  }
}
