import { html, render } from "https://unpkg.com/lit-html?module";
import { towns } from "./towns.js";

let cardtemplate = html`
  <ul>
    ${towns.map((item) => {
      return html`<li id=${item}>${item}</li>`;
    })}
  </ul>
`;

let card = document.getElementById("towns");
render(cardtemplate, card);

document.querySelector("button").addEventListener("click", search);

function search() {
  let text = document.getElementById("searchText").value;
  let result = towns.filter((t) => {
    if (t.includes(text)) {
      let match = document.getElementById(`${t}`);
      match.setAttribute("class", "active");
      return t;
    }
  });

  let resultHTML = document.getElementById("result");
  resultHTML.textContent = `${result.length} matches found`;

  //--- if we want to clear input and decoration------
     Array.from(document.querySelectorAll(".active")).forEach((t) => {
       t.style.fontWeight = "100";
       t.style.textDecoration = "none";
     });
     document.querySelector("input").value = "";
}

//-----------Second solution--------------

let townsRoot = document.getElementById("towns");
let resultRoot = document.getElementById("result");
document.querySelector("button").addEventListener("click", search);

update();

function serachtemplate(townName, match) {
  const ul = html` <ul>
    ${townName.map((townName) => createtemplate(townName, match))}
  </ul>`;

  return ul;
}

function createtemplate(town, match) {
  return html`
    <li class="${match && town.toLowerCase().includes(match) ? "active" : ""}">
      ${town}
    </li>
  `;
}

function update(text) {
  const ul = serachtemplate(towns, text);
  render(ul, townsRoot);
}

function search(e) {
  let textNode = document.getElementById("searchText");
  const text = textNode.value.toLowerCase();
  update(text);
  updateCount();
  textNode.value = "";
}

function updateCount() {
  const count = document.querySelectorAll(".active").length;
  const coutnEl = count ? html`<p>${count} matches found</p>` : "";

  render(coutnEl, resultRoot);
}
