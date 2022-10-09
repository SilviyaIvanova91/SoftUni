function create(words) {
  let contentBox = document.getElementById("content");

  for (const word of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    contentBox.appendChild(div);

    div.addEventListener("click", onClick);

    function onClick(event) {
      event.currentTarget.children[0].style.display = "";
    }
  }
}
