function rhombusofStars(input) {
  let n = Number(input[0]);
  let str = " ";

  for (let row = 1; row <= n; row++) {
    str = "";
    for (let col = 1; col <= n - row - 1; col++) {
      str += " ";
    }
    for (let col = 1; col <= row; col++) {
      if (row === n && col === 1) {
        str += "*";
      } else {
        str += " " + "*";
      }
    }
    console.log(str);
  }

  for (let row = n - 1; row > 0; row--) {
    str = "";
    for (let col = 1; col <= n - row - 1; col++) {
      str += " ";
    }
    for (let col = 1; col <= row; col++) {
      str += " " + "*";
    }
    console.log(str);
  }
}

rhombusofStars(["1"]);
rhombusofStars(["2"]);
rhombusofStars(["3"]);
rhombusofStars(["4"]);

 for (let row = 0; row < n - 1; row++) {
     console.log(
       " ".repeat(n - 1 - row) + "* ".repeat(row + 1) + " ".repeat(n - 1 - row)
     );
   }
   console.log("* ".repeat(n));
   for (let row = n - 2; row >= 0; row--) {
     console.log(
       " ".repeat(n - 1 - row) + "* ".repeat(row + 1) + " ".repeat(n - 1 - row)
     );
   }
 for (let row = 0; row < n - 1; row++) {
     console.log(
       " ".repeat(n - 1 - row) + "* ".repeat(row + 1) + " ".repeat(n - 1 - row)
     );
   }
   console.log("* ".repeat(n));
   for (let row = n - 2; row >= 0; row--) {
     console.log(
       " ".repeat(n - 1 - row) + "* ".repeat(row + 1) + " ".repeat(n - 1 - row)
     );
   }
