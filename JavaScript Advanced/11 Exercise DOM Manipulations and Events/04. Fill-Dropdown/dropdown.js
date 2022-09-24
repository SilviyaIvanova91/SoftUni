function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");
  let select = document.getElementById("menu");

  let optionElement = document.createElement("option");
  optionElement.textContent = newItemText.value;
  optionElement.value = newItemValue.value;

  select.appendChild(optionElement);
  newItemValue.value = "";
  newItemText.value = "";
}
