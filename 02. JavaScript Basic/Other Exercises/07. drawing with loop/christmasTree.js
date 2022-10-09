function christmasTree(input) {
  let n = Number(input[0]);
  let str = "";
  for (let row = 0; row <= n; row++) {
    str = "";
    for (let i = 1; i <= n - row; i++) {
      str += " ";
    }
    for (let j = 1; j <= row; j++) {
      str += "" + "*";
    }
    str += " | ";
    for (let k = 1; k <= row; k++) {
      str += "" + "*";
    }
    for (let l = 1; l <= n - row; l++) {
      str += " ";
    }
    console.log(str);
  }
}

christmasTree(["1"]);
christmasTree(["2"]);
christmasTree(["3"]);
christmasTree(["4"]);

 function christmasTree(input) {
   let n = Number(input[0]);
   for (let row = 0; row <= n; row++) {
     console.log(
       " ".repeat(n - row) +
         "*".repeat(row) +
         " | " +
         "*".repeat(row) +
         " ".repeat(n - row)
     );
   }
 }
