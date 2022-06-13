function numberPyramid(input) {
  let n = Number(input[0]);
  let printNum = 1;
  let isFinish = false;

  for (let i = 1; i <= n; i++) {
    let buff = "";
    for (let y = 1; y <= i; y++) {
      buff += printNum + " ";
      printNum++;
      if (printNum > n) {
        isFinish = true;
        break;
      }
    }
    console.log(buff);
    if (isFinish) {
      break;
    }
  }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);

// function numberPyramid(input) {
//   let n = Number(input[0]);
//   let current = 1;
//   let isBigger = false;
//   let currentLine = "";

//   for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= row; col++) {
//       if (current > n) {
//         isBigger = true;
//         break;
//       }
//       currentLine += current + " ";
//       current++;
//     }
//     console.log(currentLine);
//     currentLine = "";
//     if (isBigger) {
//       break;
//     }
//   }
// }
