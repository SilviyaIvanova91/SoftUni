function sumFirstandLastArrayElements(numbers) {
  let firstNum = Number(numbers[0]);
  let lastNumber = Number(numbers[numbers.length - 1]);
  let sum = firstNum + lastNumber;
  console.log(sum);
}

sumFirstandLastArrayElements([20, 30, 40]);
sumFirstandLastArrayElements([10, 17, 22, 33]);
sumFirstandLastArrayElements([11, 58, 69]);
