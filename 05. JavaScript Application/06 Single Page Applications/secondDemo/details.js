//get information about single recipe by id
// display all information about recipe

export async function showDetailsView(id) {
  [...document.querySelectorAll("section")].forEach(
    (s) => (s.style.display = "none")
  );

  const recipe = await getById(id);
  document.getElementById("details-view").style.display = "block";

  displayRecipes(recipe);
}

async function getById(id) {
  const response = await fetch("http://localhost:3030/data/recipes/" + id);

  const recepies = await response.json();
  return recepies;
}

function displayRecipes(recipe) {
  document.getElementById("recipe-name").textContent = recipe.name;

  const ingredientsFragment = document.createDocumentFragment();
  for (let item of recipe.ingredients) {
    const element = document.createElement("li");
    element.textContent = item;
    ingredientsFragment.appendChild(element);
  }
  document
    .getElementById("recipe-ingredients")
    .replaceChildren(ingredientsFragment);

  const stepsFragment = document.createDocumentFragment();
  for (let item of recipe.steps) {
    const element = document.createElement("li");
    element.textContent = item;
    stepsFragment.appendChild(element);
  }
  document.getElementById("recipe-steps").replaceChildren(stepsFragment);
}
