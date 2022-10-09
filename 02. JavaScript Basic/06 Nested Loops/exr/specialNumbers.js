function specialNumbers(input) {
  let n = Number(input[0]);
  let buff = "";

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
            // buff =buff + a + b + c + d;
            buff += "" + a + b + c + d + " ";
          }
        }
      }
    }
  }
  console.log(buff);
}

specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);
