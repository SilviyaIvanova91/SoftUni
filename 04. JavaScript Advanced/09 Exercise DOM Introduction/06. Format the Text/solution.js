function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");

  let sentence = input.split(".").filter((el) => el.length != 0);

  while (sentence.length > 0) {
    let textParagraph = sentence.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = textParagraph;
    output.appendChild(p);
  }
}

//--------------------------------------------
// function solve() {
//   let input = document.getElementById("input").value;
//   let output = document.getElementById("output");

//   let sentence = input.split(".").filter((el) => el.length != 0);
//   let paragraph = [];

//   while (sentence.length > 0) {
//     let textParagraph = sentence.splice(0, 3).join(". ") + ".";
//     paragraph.push(`<p>${textParagraph}</p>`);
//   }
//   output.innerHTML = paragraph.join("\n");
// }
