function barcodeGeneration(input) {
  let start = "" + input[0];
  let end = "" + input[1];

  let startA = Number(start[0]);
  //   let startA = Number(start.charAt(0));
  let startB = Number(start[1]);
  let startC = Number(start[2]);
  let startD = Number(start[3]);

  let ednA = Number(end[0]);
  let ednB = Number(end[1]);
  let ednC = Number(end[2]);
  let ednD = Number(end[3]);

  let res = "";

  for (let a = startA; a <= ednA; a++) {
    for (let b = startB; b <= ednB; b++) {
      for (let c = startC; c <= ednC; c++) {
        for (let d = startD; d <= ednD; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            res += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(res);
}

barcodeGeneration(["2345", "6789"]);
barcodeGeneration(["3256", "6579"]);
barcodeGeneration(["1365", "5877"]);
