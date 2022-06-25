function diamond(input) {
  let n = Number(input[0]);
  let str = "";
  if (n % 2 === 0) {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      str = "";
      for (let j = 0; j < Math.floor((n - 1) / 2) - i; j++) {
        str += "-";
      }
      str += "*";
      for (let k = 0; k < 2 * i; k++) {
        str += "-";
      }
      str += "*";
      for (let l = 0; l < Math.floor((n - 1) / 2) - i; l++) {
        str += "-";
      }
      console.log(str);
    }
  } else if (n % 2 !== 0) {
    str = "";
    for (let i = 0; i < Math.floor(n / 2); i++) {
      str = "";
      for (let j = 0; j < Math.floor((n - 1) / 2) - i; j++) {
        str += "-";
      }
      str += "*";
      if (i > 0) {
        for (let k = 0; k < 2 * i - 1; k++) {
          str += "-";
        }
      } else {
        for (let k = 0; k < 2 * i; k++) {
          str += "-";
        }
      }
      if (i > 0) {
        str += "*";
      }
      for (let l = 1; l <= Math.floor((n - 1) / 2) - i; l++) {
        str += "-";
      }
      console.log(str);
    }
  }

  if (n % 2 === 0) {
    for (let i = Math.floor((n - 1) / 2) - 1; i >= 0; i--) {
      str = "";
      for (let j = 0; j < Math.floor((n - 1) / 2) - i; j++) {
        str += "-";
      }
      str += "*";
      for (let k = 0; k < 2 * i; k++) {
        str += "-";
      }
      str += "*";
      for (let l = 0; l < Math.floor((n - 1) / 2) - i; l++) {
        str += "-";
      }
      console.log(str);
    }
  } else if (n % 2 !== 0) {
    for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
      str = "";
      for (let j = 0; j < Math.floor(n - 1) / 2 - i; j++) {
        str += "-";
      }
      str += "*";
      if (i > 0) {
        for (let k = 0; k < 2 * i - 1; k++) {
          str += "-";
        }
        str += "*";
      } else {
        for (let k = 0; k < 2 * i; k++) {
          str += "-";
        }
      }
      for (let l = 1; l <= Math.floor((n - 1) / 2) - i; l++) {
        str += "-";
      }
      console.log(str);
    }
  }
}

diamond(["1"]);
diamond(["2"]);
diamond(["3"]);
diamond(["4"]);
diamond(["5"]);
diamond(["6"]);
diamond(["7"]);
diamond(["8"]);
diamond(["9"]);

// let n = Number(arg1);
// if (n % 2 == 0) {
//   //Draw the first half
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     console.log(
//       "-".repeat(Math.floor((n - 1) / 2) - i) +
//         "*" +
//         "-".repeat(2 * i) +
//         "*" +
//         "-".repeat(Math.floor((n - 1) / 2) - i)
//     );
//   }
// }
// //Draw the second half
// for (let i = Math.floor((n - 1) / 2) - 1; i >= 0; i--) {
//   console.log(
//     "-".repeat(Math.floor((n - 1) / 2) - i) +
//       "*" +
//       "-".repeat(2 * i) +
//       "*" +
//       "-".repeat(Math.floor((n - 1) / 2) - i)
//   );
// }
// //TODO: Draw diamond for odd values of N
