function sunglasses(input) {
  let n = Number(input[0]);
  let str = "";

  for (let i = 1; i <= n * 2; i++) {
    str += "*";
  }
  for (let j = 1; j <= n; j++) {
    str += " ";
  }
  for (let i = 1; i <= n * 2; i++) {
    str += "*";
  }
  console.log(str);

  for (let row = 1; row <= n - 2; row++) {
    str = "*";
    for (let m = 1; m <= 2 * n - 2; m++) {
      str += "/";
    }
    str += "*";

    if (row === Math.ceil((n - 2) / 2)) {
      for (let k = 1; k <= n; k++) {
        str += "|";
      }
    } else {
      for (let k = 1; k <= n; k++) {
        str += " ";
      }
    }
    str += "*";
    for (let m = 1; m <= 2 * n - 2; m++) {
      str += "/";
    }
    str += "*";

    console.log(str);
  }
  str = "";
  for (let i = 1; i <= n * 2; i++) {
    str += "*";
  }
  for (let j = 1; j <= n; j++) {
    str += " ";
  }
  for (let i = 1; i <= n * 2; i++) {
    str += "*";
  }
  console.log(str);
}

sunglasses(["3"]);
sunglasses(["4"]);
sunglasses(["5"]);

// Print the top part
// console.log("*".repeat(n * 2) + " ".repeat(n) + "*".repeat(n * 2));
// for (let i = 1; i <= n - 2; i++) {
// TODO: print the middle part
// }
// TODO: Print the bottom part
// Print the middle part
// for (let i = 1; i <= n - 2; i++) {
//   TODO: write *///////*
//   if (i == Math.floor((n - 1) / 2)) result += "|".repeat(n);
//   else result += " ".repeat(n);
//   TODO: write *///////*
//   console.log(result);
//   result = "";
// }
