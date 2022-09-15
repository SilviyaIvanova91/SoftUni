function sumofNumbersNM(a, b) {
  let sum = 0;
  let firstNum = Number(a);
  let secNum = Number(b);
  for (let i = firstNum; i <= secNum; i++) {
    sum += i;
  }
  console.log(sum);
}

sumofNumbersNM("1", "5");
sumofNumbersNM("-8", "20");
