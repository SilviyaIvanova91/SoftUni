function toggle() {
  let textEl = document.getElementById("extra");
  let buttonEl = document.getElementsByClassName("button")[0];

  if (buttonEl.textContent == "More") {
    buttonEl.textContent = "Less";
    textEl.style.display = "block";
  } else {
    buttonEl.textContent = "More";
    textEl.style.display = "none";
  }
}
