import { register } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createRegisterTemp = (onRegister) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onRegister}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class="form-control"
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>
`;

export async function registerView(ctx) {
  ctx.render(createRegisterTemp(createSubmitHandler(onRegister)));

  async function onRegister({ email, password, rePass }) {
    if (!email || !password || !rePass) {
      return alert("All fields are required!");
    }
    if (password != rePass) {
      return alert("Passwords dont match!");
    }

    await register(email, password);
    ctx.updateNav();
    ctx.page.redirect("/catalog");
  }
}
