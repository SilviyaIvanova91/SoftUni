function sumofNumbers(input) {
  let n = "" + input[0];
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let num = Number(n[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum} `);
}

sumofNumbers(["1234"]);
sumofNumbers(["564891"]);
