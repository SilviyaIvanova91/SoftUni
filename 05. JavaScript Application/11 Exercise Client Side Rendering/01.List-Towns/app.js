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

//------------Second solution---------------
let form = document.getElementById("form");
form.addEventListener("click", onSubmit);
let root = document.getElementById("root");

function onSubmit(e) {
  e.preventDefault();

  let formData = new FormData(form);
  const { towns } = Object.fromEntries(formData);
  let townsArr = towns.split(", ");
  renderTownList(townsArr);
  form.reset();
}

function renderTownList(data) {
  const result = createTownList(data);
  render(result, root);
}

function createTownList(data) {
  let ul = html`
    <ul>
      ${data.map((t) => html`<li>${t}</li>`)}
    </ul>
  `;
  return ul;
}
