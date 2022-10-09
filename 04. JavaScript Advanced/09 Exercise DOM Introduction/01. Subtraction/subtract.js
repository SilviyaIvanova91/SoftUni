function subtract() {
  const numFirst = document.getElementById("firstNumber").value;
  const numSec = document.getElementById("secondNumber").value;
  const res = document.getElementById("result");
  res.textContent = Number(numFirst) - Number(numSec);
}
