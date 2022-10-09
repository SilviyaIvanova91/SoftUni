function solve() {
  let selectMenu = document.getElementById("selectMenuTo");
  let inputNum = document.getElementById("input");
  let btn = document.querySelector("button");
  let res = document.getElementById("result");

  let binary = document.createElement("option");
  binary.value = "binary";
  binary.textContent = "Binary";
  selectMenu.add(binary);

  let hexadecimal = document.createElement("option");
  hexadecimal.value = "hexadecimal";
  hexadecimal.textContent = "Hexadecimal";
  selectMenu.add(hexadecimal);

  let options = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toUpperCase(),
    "": (num) => num,
  };

  btn.addEventListener("click", () => {
    res.value = options[selectMenu.value](Number(inputNum.value));
  });
}
