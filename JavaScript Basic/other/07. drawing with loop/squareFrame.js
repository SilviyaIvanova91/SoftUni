function squareFrame(input) {
  let n = Number(input[0]);
  let str = "";

  str = "" + "+ ";
  for (let i = 1; i <= n - 2; i++) {
    str += "" + "- ";
  }
  str += "" + "+";
  console.log(str);
  for (let i = 1; i <= n - 2; i++) {
    str = "" + "| ";
    for (let j = 1; j <= n - 2; j++) {
      str += "" + "- ";
    }
    str += "" + "| ";
    console.log(str);
  }

  str = "" + "+ ";
  for (let i = 1; i <= n - 2; i++) {
    str += "" + "- ";
  }
  str += "" + "+";
  console.log(str);
}

squareFrame(["3"]);
squareFrame(["4"]);
squareFrame(["5"]);
squareFrame(["6"]);

// Print the top row: + - - - +
// console.log("+ " + "- ".repeat(n-2) + "+");
// for (let row = 0; row < n - 2; row++)
// TODO: print the mid rows: | - - - |
// TODO: print the bottom row: + - - - +
