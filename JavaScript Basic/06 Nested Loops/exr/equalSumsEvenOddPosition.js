function equalSumsEvenOddPosition(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  let printLine = "";

  for (let i = x; i <= y; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      let num = Number(currentNum.charAt(j));
      if (j % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);
