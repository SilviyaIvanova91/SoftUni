function melrahShake(input) {
  let text = input.shift();
  let serchedChar = input.shift();
  while (serchedChar.length > 0) {
    let firstIndex = text.indexOf(serchedChar);
    let lastIndex = text.lastIndexOf(serchedChar);
    if (firstIndex >= 0 && lastIndex >= 0 && firstIndex != lastIndex) {
      text = text.split("");
      text.splice(firstIndex, serchedChar.length);
      text = text.join("");
      lastIndex = text.lastIndexOf(serchedChar);
      text = text.split("");
      text.splice(lastIndex, serchedChar.length);
      text = text.join("");
      let indexOfRemove = Math.floor(serchedChar.length / 2);
      serchedChar = serchedChar.split("");
      serchedChar.splice(indexOfRemove, 1);
      serchedChar = serchedChar.join("");
      console.log(`Shaked it.`);
    } else {
      break;
    }
  }
  console.log(`No shake.`);
  console.log(text);
}

melrahShake(["astalavista baby", "sta"]);
melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);

// function melrahShake(input) {
//   let text = input.shift();
//   let pattern = input.shift();

//   while (pattern.length > 0) {
//     let firstMatch = text.indexOf(pattern);
//     let lastMatch = text.lastIndexOf(pattern);

//     if (firstMatch > -1 && lastMatch > -1 && firstMatch !== lastMatch) {
//       text = text.split("");
//       text.splice(firstMatch, pattern.length);
//       text = text.join("");
//       lastMatch = text.lastIndexOf(pattern);
//       text = text.split("");
//       text.splice(lastMatch, pattern.length);
//       let removeFromPatt = pattern[Math.floor(pattern.length / 2)];
//       pattern = pattern.replace(removeFromPatt, "");
//       text = text.join("");

//       console.log("Shaked it.");
//     } else {
//       break;
//     }
//   }
//   console.log("No shake.");
//   console.log(text);
// }
