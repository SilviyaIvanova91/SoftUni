function operationsBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];
  let result = 0;

  switch (operator) {
    case "+":
      result = N1 + N2;
      if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
      }
      break;
    case "-":
      result = N1 - N2;
      if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
      }
      break;
    case "*":
      result = N1 * N2;
      if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
      }
      break;
    case "/":
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        result = N1 / N2;
        console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
      }
      break;
    case "%":
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        result = N1 % N2;
        console.log(`${N1} ${operator} ${N2} = ${result}`);
      }
      break;
  }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
