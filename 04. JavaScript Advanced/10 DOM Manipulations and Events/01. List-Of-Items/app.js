function addItem() {
  // select input field and read its value
  const content = document.getElementById("newItemText").value;

  // create <li> element
  const liEl = document.createElement("li");

  //assign input value to element text content
  liEl.textContent = content;

  //select <ul> and append new element
  const ulElement = document.getElementById("items");
  ulElement.appendChild(liEl);

  //select input field and clear content (value)
  document.getElementById("newItemText").value = "";
}

//-----------------------------------
// function addItem() {
//   const input = document.getElementById("newItemText");
//   const liEl = document.createElement("li");
//   liEl.textContent = content.value;
//   document.getElementById("items").appendChild(liEl);
//   input.value = "";
// }
