import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registertemplate = (onRegister) => html`
  <section id="registerPage">
    <form @submit=${onRegister}>
      <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input
          id="email"
          class="email"
          name="email"
          type="text"
          placeholder="Email"
        />

        <label for="password" class="vhide">Password</label>
        <input
          id="password"
          class="password"
          name="password"
          type="password"
          placeholder="Password"
        />

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input
          id="conf-pass"
          class="conf-pass"
          name="conf-pass"
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit" class="register">Register</button>

        <p class="field">
          <span
            >If you already have profile click <a href="/login">here</a></span
          >
        </p>
      </fieldset>
    </form>
  </section>
`;

export function showregister(ctx) {
  ctx.render(registertemplate(createSubmitHandler(onRegister)));

  async function onRegister({ email, password, rePassw }) {
    let pass = document.getElementById("password");
    let repass = document.getElementById("conf-pass");
    if (email == "" || password == "") {
      return alert("All fields are required!");
    }

    if (pass.value != repass.value) {
      return alert("Passwords dont match!");
    }

    await register(email, password);
    ctx.updateNav();
    ctx.page.redirect("/");
  }
}
