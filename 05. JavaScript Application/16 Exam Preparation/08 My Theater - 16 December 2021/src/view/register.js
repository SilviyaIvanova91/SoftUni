import { register } from "../api/user.js";
import { html, render, page, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registertemplate = (onRegister) => html`
  <!--Register Page-->
  <section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
      <h2>Register</h2>
      <div class="on-dark">
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Register</button>

      <p class="field">
        <span>If you have profile click <a href="/login">here</a></span>
      </p>
    </form>
  </section>
`;

export async function showregister(ctx) {
  ctx.render(registertemplate(createSubmitHandler(onRegister)));

  async function onRegister({ email, password, repeatPassword }) {
    if (!email || !password || !repeatPassword) {
      return alert("All fields are required!");
    }
    if (password != repeatPassword) {
      return alert("Passwords don't match!");
    }

    await register(email, password);
    ctx.updateNav();
    ctx.page.redirect("/");
  }
}
