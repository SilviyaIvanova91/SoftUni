import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/users.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onSubmit) => html`
  <!--Register Page-->
  <section id="registerPage">
    <form @submit=${onSubmit} class="registerForm">
      <img src="./images/logo.png" alt="logo" />
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
        <span>If you have profile click <a href="#">here</a></span>
      </p>
    </form>
  </section>
`;

export function registerPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const emailValue = document.getElementById("email");
  const passValue = document.getElementById("password");
  const rePassValue = document.getElementById("repeatPassword");

  if (emailValue.value == "" || passValue.value == "" || rePassValue == "") {
    return window.alert("All fields are required!");
  }

  if (passValue.value != rePassValue.value) {
    return window.alert("Passwords dont match!");
  }

  await register(data.email, data.password);
  event.target.reset();
  ctx.page.redirect("/");
}
