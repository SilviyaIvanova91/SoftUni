function validate() {
  let validRegExp = new RegExp("^[a-z]+@[a-z]+\\.[a-z]+");
  let emailEl = document.getElementById("email");
  emailEl.addEventListener("change", onChange);

  function onChange() {
    if (validRegExp.test(emailEl.value)) {
      emailEl.classList.remove("error");
    } else {
      emailEl.classList.add("error");
    }
  }
}
