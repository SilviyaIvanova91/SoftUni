function oddEvenPosition(input) {
  let index = 0;
  let num = Number(input[index++]);
  let currentNumber = 0;
  let sumOdd = 0;
  let sumEven = 0;
  let minOdd = Number.MAX_SAFE_INTEGER;
  let minEven = Number.MAX_SAFE_INTEGER;
  let maxOdd = Number.MIN_SAFE_INTEGER;
  let maxEven = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= num; i++) {
    currentNumber = Number(input[index++]);

    if (i % 2 !== 0) {
      sumOdd += currentNumber;

      if (currentNumber < minOdd) {
        minOdd = currentNumber;
      }
      if (currentNumber > maxOdd) {
        maxOdd = currentNumber;
      }
    } else {
      sumEven += currentNumber;

      if (currentNumber < minEven) {
        minEven = currentNumber;
      }
      if (currentNumber > maxEven) {
        maxEven = currentNumber;
      }
    }
  }
  minOdd = minOdd.toFixed(2);
  maxOdd = maxOdd.toFixed(2);
  minEven = minEven.toFixed(2);
  maxEven = maxEven.toFixed(2);

  if (num === 0) {
    minOdd = `No`;
    maxOdd = `No`;
    minEven = `No`;
    maxEven = `No`;
  } else if (num === 1) {
    minEven = `No`;
    maxEven = `No`;
  }
  console.log(`OddSum=${sumOdd.toFixed(2)},`);
  console.log(`OddMin=${minOdd},`);
  console.log(`OddMax=${maxOdd},`);
  console.log(`EvenSum=${sumEven.toFixed(2)},`);
  console.log(`EvenMin=${minEven},`);
  console.log(`EvenMax=${maxEven}`);
}
oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
oddEvenPosition(["2", "1.5", "-2.5"]);
oddEvenPosition(["1", "1"]);
oddEvenPosition(["0"]);
oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
oddEvenPosition(["4", "1.5", "1.75", "1.5", "1.75"]);
oddEvenPosition(["1", "-5"]);
oddEvenPosition(["3", "-1", "-2", "-3"]);
