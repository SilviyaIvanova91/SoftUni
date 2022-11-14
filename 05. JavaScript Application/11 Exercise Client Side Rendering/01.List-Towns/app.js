import { html, render } from "https://unpkg.com/lit-html?module";

document.getElementById("btnLoadTowns").addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("#towns").value;

  let townList = input.split(", ");
  let cardTemplate = html`
    <ul>
      ${townList.map((t) => html`<li>${t}</li>`)}
    </ul>
  `;

  let root = document.getElementById("root");
  render(cardTemplate, root);
});
