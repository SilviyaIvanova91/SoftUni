function negativeorPositiveNumbers(input) {
  let str = [];
  for (element of input) {
    if (Number(element) < 0) {
      str.unshift(element);
    } else {
      str.push(element);
    }
  }
  console.log(str.join("\n"));
}

negativeorPositiveNumbers(["7", "-2", "8", "9"]);
negativeorPositiveNumbers(["3", "-2", "0", "-1"]);

//-------------------------------------------
// function negativeorPositiveNumbers(input) {
//   let str = [];
//   for (element of input) {
//     if (Number(element) < 0) {
//       str.unshift(element);
//     } else {
//       str.push(element);
//     }
//     for (let element of str) {
//       console.log(element);
//     }
//   }
// }
