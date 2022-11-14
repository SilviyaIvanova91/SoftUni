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
