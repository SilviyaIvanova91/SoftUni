function building(input) {
  let floor = Number(input[0]);
  let room = Number(input[1]);

  for (let i = floor; i > 0; i--) {
    let otherFloor = "";

    for (let j = 0; j < room; j++) {
      // if floor number is top floor
      if (i === floor) {
        otherFloor += `L${i}${j} `;
      }

      //   if floor numer is even
      else if (i % 2 === 0 && i !== floor) {
        otherFloor += `O${i}${j} `;
      }

      //   if floor number is odd
      // else if (i % 2 !== 0 && i !== floor) {
      else {
        otherFloor += `A${i}${j} `;
      }
    }
    console.log(otherFloor);
  }
}

building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);

// function building(input) {
//   let floor = Number(input[0]);
//   let room = Number(input[1]);

//   for (let i = floor; i > 0; i--) {
//     let otherFloor = "";

//     for (let j = 0; j < room; j++) {
//       // if floor number is top floor
//       if (i === floor) {
//         otherFloor = otherFloor + `L${i}${j} `;
//       }

//       //   if floor numer is even
//       if (i % 2 === 0 && i !== floor) {
//         otherFloor = otherFloor + `O${i}${j} `;
//       }

//       //   if floor number is odd
//       if (i % 2 !== 0 && i !== floor) {
//         otherFloor = otherFloor + `A${i}${j} `;
//       }
//     }
//     console.log(otherFloor);
//   }
// }
