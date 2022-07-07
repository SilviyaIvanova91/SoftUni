function printAndSum(start, end) {
  let sum = 0;
  let str = "";
  for (let i = start; i <= end; i++) {
    str += i + " ";
    sum += i;
  }
  console.log(str);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
