export function solve() {
  let tableRows = document.querySelector(".container tbody").children;
  let input = document.querySelector("#searchField");
  let searchterm = input.value;
  input.value = "";

  for (const row of tableRows) {
    row.classList.remove("select");

    if (row.textContent.toLowerCase().includes(searchterm.toLowerCase())) {
      row.classList.add("select");
    }
  }
}
