function calculator(num, sumbol, num2) {
  let sum = 0;
  switch (sumbol) {
    case "+":
      sum = num + num2;
      break;
    case "-":
      sum = num - num2;
      break;
    case "*":
      sum = num * num2;
      break;
    case "/":
      sum = num / num2;
      break;
  }
  console.log(sum.toFixed(2));
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
