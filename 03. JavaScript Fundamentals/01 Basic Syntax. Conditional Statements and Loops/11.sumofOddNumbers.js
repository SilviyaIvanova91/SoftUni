function sumofOddNumbers(num) {
  let j = 1;
  let sum = 0;
  for (let i = 1; j <= num; i += 2) {
    console.log(i);
    sum += i;
    j++;
  }
  console.log(`Sum: ${sum}`);
}

sumofOddNumbers(5);
sumofOddNumbers(3);
