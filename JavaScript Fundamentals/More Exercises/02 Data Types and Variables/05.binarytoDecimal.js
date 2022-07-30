function binarytoDecimal(num) {
  let n = num.length - 1;
  let sum = 0;
  let localNum = 0;
  let localSum = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    localNum = Number(num[i]);
    localSum = localNum * Math.pow(2, n);
    sum += localSum;
    n--;
  }
  console.log(sum);
}

binarytoDecimal("00001001");
binarytoDecimal("11110000");
