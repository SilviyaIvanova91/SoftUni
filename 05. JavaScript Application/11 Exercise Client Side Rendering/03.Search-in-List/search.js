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
  //   Array.from(document.querySelectorAll(".active")).forEach((t) => {
  //     t.style.fontWeight = "100";
  //     t.style.textDecoration = "none";
  //   });
  //   document.querySelector("input").value = "";
}
