function averageNumber(input) {
  let index = 0;
  let n = Number(input[index++]);
  let countN = 0;

  for (let i = 1; i <= n; i++) {
    let num = Number(input[index++]);
    countN += num;
  }
  let avr = countN / n;
  console.log(avr.toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);
