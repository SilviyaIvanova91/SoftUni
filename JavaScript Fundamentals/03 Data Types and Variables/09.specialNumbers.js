function specialNumbers(n) {
  for (let num = 1; num <= n; num++) {
    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
      result += Number(numAsString[i]);
    }

    let special = false;
    if (result == 5 || result == 7 || result == 11) {
      special = true;
    }

    if (special) {
      console.log(`${num} -> True`);
    } else {
      console.log(`${num} -> False`);
    }
  }
}

specialNumbers(15);
specialNumbers(20);
