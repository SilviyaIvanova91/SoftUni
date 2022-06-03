function greatNumber(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}

greatNumber(["5", "3"]);
greatNumber(["3", "5"]);
greatNumber(["10", "10"]);
greatNumber(["-5", "5"]);
