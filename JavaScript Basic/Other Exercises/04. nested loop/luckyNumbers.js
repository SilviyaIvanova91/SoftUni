function luckyNumbers(input) {
  let lucky = Number(input[0]);
  let res = "";

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (a + b === c + d && lucky % (a + b) === 0) {
            res += "" + a + b + c + d + " ";
          }
        }
      }
    }
  }
  console.log(res);
}

luckyNumbers(["3"]);
luckyNumbers(["7"]);
luckyNumbers(["24"]);
