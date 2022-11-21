import page from "//unpkg.com/page/page.mjs";
import { html, render } from "https://unpkg.com/lit-html?module";
import { updateInfo } from "../app.js";

export const logout = () => {
  fetch("http://localhost:3030/users/logout", {
    method: "GET",
    headers: {
      "X-Authorization": localStorage.token,
    },
  });

  localStorage.clear();
  page.redirect("/catalog");
  updateInfo();
};
