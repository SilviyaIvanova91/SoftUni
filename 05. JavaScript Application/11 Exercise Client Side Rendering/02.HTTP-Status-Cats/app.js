import { html, render } from "https://unpkg.com/lit-html?module";
import { cats } from "./catSeeder.js";

let cardtemplate = (c) => html`
  <li>
    <img src="./images/${c.imageLocation}.jpg" width="250" height="250" />
    <div class="info">
      <button class="showBtn" @click=${onClick}>Show status code</button>
      <div class="status" style="display: none" id=${c.id}>
        <h4>Status code: ${c.statusCode}</h4>
        <p>${c.statusMessage}</p>
      </div>
    </div>
  </li>
`;

function onClick(e) {
  e.preventDefault();
  let cat = e.target.parentNode;
  let result = cat.querySelector(".status").style.display;
  if (result == "block") {
    cat.querySelector(".status").style.display = "none";
  } else {
    cat.querySelector(".status").style.display = "block";
  }
}

let result = cats.map(cardtemplate);
let main = document.getElementById("allCats");
render(result, main);


//-----------Second solution-------------------------
let root = document.getElementById("allCats");

const cattemplate = html` <ul>
  ${cats.map((cat) => createCard(cat))}
</ul>`;

render(cattemplate, root);

function createCard(cat) {
  return html`
    <li>
      <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" />
      <div class="info">
        <button class="showBtn" @click=${showContent}>Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
          <h4>Status code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>
  `;
}

function showContent(e) {
  e.preventDefault();
  let contentContainer = e.target.parentElement.querySelector("div");
  let currentState = contentContainer.style.display;
  if (currentState == "block") {
    contentContainer.style.display = "none";
    e.target.textContent = "Show status code";
  } else {
    contentContainer.style.display = "block";
    e.target.textContent = "Hide status code";
  }
}
