// register event listeners to navigation
// switch view
// handle form submit
// send login information to REST service
// store authorization token

import { post } from "./api.js";
import { createSubmitHandler, setUserData } from "./util.js";

createSubmitHandler("login-form", onLogin);

const section = document.getElementById("login-view");
section.remove();
let ctx = null;

export function showLoginView(inCtx) {
  ctx = inCtx;
  ctx.render(section);
}

async function onLogin({ email, password }) {
  const userData = await post("/users/login", {
    email,
    password,
  });
  setUserData(userData);

  ctx.checkUserNav();
  ctx.goto("catalog-link");
}
