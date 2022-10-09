function notify(message) {
  let txt = document.getElementById("notification");
  txt.textContent = message;
  txt.style.display = "block";

  txt.addEventListener("click", onClick);

  function onClick(event) {
    txt.style.display = "none";
  }
}
