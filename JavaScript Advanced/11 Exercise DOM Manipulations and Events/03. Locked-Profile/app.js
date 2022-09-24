function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((b) =>
    b.addEventListener("click", onClick)
  );

  function onClick(event) {
    let profile = event.target.parentElement;
    let isActive = profile.querySelector(
      'input[type="radio"][value = "unlock"]'
    ).checked;

    if (isActive) {
      let div = profile.querySelector("div");

      if (event.target.textContent == "Show more") {
        div.style.display = "block";
        event.target.textContent = "Hide it";
      } else {
        div.style.display = "none";
        event.target.textContent = "Show more";
      }
    }
  }
}
