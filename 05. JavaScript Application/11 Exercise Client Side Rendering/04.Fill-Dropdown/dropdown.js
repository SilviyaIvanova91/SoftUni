import { html, render } from "https://unpkg.com/lit-html?module";

async function getAllItem() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/advanced/dropdown"
  );
  const data = await response.json();
  return data;
}

let items = Object.values(await getAllItem());

let cardTemplates = html`${items.map(
  (item) => html`<option value=${item._id}>${item.text}</option>`
)}`;
let main = document.getElementById("menu");
render(cardTemplates, main);

document
  .querySelector("input[type='submit']")
  .addEventListener("click", addItem);

async function addItem() {
  let text = document.querySelector("#itemText").value;
  let response = fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  let data = await response.json();

  items.push(data);

  if (!response.ok) {
    cardTemplates = html`<option value=${data._id}>${data.text}</option>`;
    render(cardTemplates, main);
  }
}

//---------------second solution---------------------------------
const url = "http://localhost:3030/jsonstore/advanced/dropdown";
const root = document.getElementById("menu");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

onLoadContent();

async function onLoadContent() {
  const response = await fetch(url);
  const data = await response.json();

  const result = Object.values(data).map((x) => createOptiontemplate(x));
  render(result, root);
}

function createOptiontemplate(option) {
  return html`<option value=${option._id}>${option.text}</option>`;
}

function onSubmit(e) {
  e.preventDefault();
  const value = document.getElementById("itemText").value;
  value && addItem(value);
}

async function addItem(data) {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: data }),
  });

  form.reset();
  onLoadContent();
}

