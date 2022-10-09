function search() {
  let serchInfo = document.getElementById("searchText").value;
  let town = document.querySelectorAll("ul#towns li");
  let resEl = document.getElementById("result");
  let counter = 0;

  for (let el of town) {
    el.style.fontWeight = "normal";
    el.style.textDecoration = "";
  }

  for (let el of town) {
    let text = el.textContent;
    if (text.match(serchInfo)) {
      counter++;
      el.style.fontWeight = "bold";
      el.style.textDecoration = "underline";
    }
  }
  resEl.textContent = `${counter} matches found`;
}
