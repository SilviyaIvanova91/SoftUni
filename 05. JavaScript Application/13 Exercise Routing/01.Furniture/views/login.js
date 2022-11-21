import page from "//unpkg.com/page/page.mjs";
import { html, render } from "https://unpkg.com/lit-html?module";
import { updateInfo } from "../app.js";

let loginTemplate = () => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
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
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>
`;

function onSubmit(e) {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  let email = formData.get("email");
  let password = formData.get("password");
  fetch("http://localhost:3030/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid email/password");
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("ownerId", data._id);
      updateInfo();
      page.redirect("/catalog");
    })
    .catch((err) => alert(err.message));
}

export const loginView = (ctx) =>
  render(loginTemplate(), document.querySelector(".container"));
