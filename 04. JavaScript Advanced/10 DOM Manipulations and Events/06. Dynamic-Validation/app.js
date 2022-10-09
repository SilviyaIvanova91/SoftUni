function validate() {
  const input = document.getElementById("email");
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
  input.addEventListener("change", validation);

  function validation() {
    if (pattern.test(input.value)) {
      input.classList.remove(`error`);
    } else {
      input.classList.add(`error`);
    }
  }
}
