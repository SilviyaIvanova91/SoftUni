function addItem() {
  const input = document.getElementById("newItemText").value;

  const liEl = document.createElement("li");
  liEl.textContent = input;

  //create [Delete] anchor
  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  liEl.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", onDeelete);

  document.getElementById("items").appendChild(liEl);

  input.value = "";

  function onDeelete(event) {
    event.target.parentElement.remove();
  }
}
