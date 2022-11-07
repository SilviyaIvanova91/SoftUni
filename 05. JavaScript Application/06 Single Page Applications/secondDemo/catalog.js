// get data from REST servise
// parse and display each recipes

import { showDetailsView } from "./details.js";

document.getElementById("recipe-list").addEventListener("click", openRecipe);
document
  .getElementById("catalog-link")
  .addEventListener("click", showCatalogView);

export async function showCatalogView() {
  [...document.querySelectorAll("section")].forEach(
    (s) => (s.style.display = "none")
  );
  const recepies = await getAllRecepies();
  document.getElementById("catalog-view").style.display = "block";

  displayRecipes(recepies);
}

async function getAllRecepies() {
  const response = await fetch(
    "http://localhost:3030/data/recipes?select="
    // + encodeURIComponent("_id, name")
  );
  const recepies = await response.json();

  return recepies;
}

function displayRecipes(recipes) {
  const cards = recipes.map(createRecepiCard);

  const fragment = document.createDocumentFragment();
  for (let item of cards) {
    fragment.appendChild(item);
  }
  const list = document.getElementById("recipe-list");
  list.replaceChildren(fragment);
}

function createRecepiCard(recipe) {
  const element = document.createElement("li");
  element.textContent = recipe.name;

  const link = document.createElement("a");
  link.href = "javascript:void(0)";
  link.text = "[Details]";
  link.id = recipe._id;
  element.appendChild(link);

  return element;
}

function openRecipe(event) {
  if (event.target.tagName == "A") {
    console.log("link clicked");
    event.preventDefault();
    const id = event.target.id;
    showDetailsView(id);
  }
}
