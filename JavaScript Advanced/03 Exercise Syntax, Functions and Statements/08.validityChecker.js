function validityChecker(x1, y1, x2, y2) {
  let first = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  if (first % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  let sec = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  if (sec % 1 === 0) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  let third = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (third % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);

//-------------------------------------------------
// function validityChecker(x1, y1, x2, y2) {
//   let first = Math.sqrt(x1 ** 2 + y1 ** 2);
//   let second = Math.sqrt(x2 ** 2 + y2 ** 2);
//   let third = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//   res(first, x1, y1);
//   res(second, x2, y2);
//   res(third, x1, y1, x2, y2);

//   function res(number, p1, p2, p3 = 0, p4 = 0) {
//     if (number % 1 === 0) {
//       console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is valid`);
//     } else {
//       console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is invalid`);
//     }
//   }
// }
