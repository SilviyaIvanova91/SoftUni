import { register } from "../api/user.js";
import { html, render, nothing, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registertemplate = (onRegister) => html`
  <!-- Register Page -->
  <section id="register">
    <div class="container">
      <form @submit=${onRegister} id="register-form">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <p>Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <p>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <p>Repeat Password</p>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
          required
        />
        <hr />

        <input type="submit" class="registerbtn" value="Register" />
      </form>
      <div class="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </section>
`;

export async function showRegister(ctx) {
  ctx.render(registertemplate(createSubmitHandler(onRegister)));
  async function onRegister({ username, password, repeatPass }, form) {
    if (!username || !password || !repeatPass) {
      return alert("All fields are required!");
    }
    if (password != repeatPass) {
      return alert("Passwords don't match!");
    }

    await register(username, password);
    form.reset();
    ctx.updateNav();
    ctx.page.redirect("/catalog");
  }
}
