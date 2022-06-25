function multiply(input) {
  let index = 0;
  let num = Number(input[index++]);
  while (num >= 0) {
    if (num >= 0) {
      console.log(`Result: ${(num * 2).toFixed(2)}`);
    }
    num = Number(input[index++]);
  }

  if (num < 0) {
    console.log(`Negative number!`);
  }
}

multiply(["12", "43.2144", "12.3", "543.23", "-20"]);
multiply(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiply(["-123"]);
