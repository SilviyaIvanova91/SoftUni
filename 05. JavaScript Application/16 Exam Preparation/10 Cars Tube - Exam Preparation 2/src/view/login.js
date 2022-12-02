import { login } from "../api/user.js";
import { html, render, nothing, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
  <!-- Login Page -->
  <section id="login">
    <div class="container">
      <form @submit=${onLogin} id="login-form" action="#" method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr />

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text" />

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn" value="Login" />
      </form>
      <div class="signin">
        <p>Dont have an account? <a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </section>
`;

export async function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  async function onLogin({ username, password }, form) {
    if (!username || !password) {
      return alert("All fields are required!");
    }

    await login(username, password);
    form.reset();
    ctx.updateNav();
    ctx.page.redirect("catalog");
  }
}
