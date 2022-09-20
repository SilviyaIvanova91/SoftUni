function jansNotation(array) {
  let numbersArr = [];
  let newSymbol = 0;
  let newNum = 0;
  let otherSum = 0;

  for (let i = 0; i < array.length; i++) {
    newSymbol = array[i];
    if (newSymbol == "+") {
      if (numbersArr.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
      }
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum + otherSum);
    } else if (newSymbol == "-") {
      if (numbersArr.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
      }
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum - otherSum);
    } else if (newSymbol == "*") {
      if (numbersArr.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
      }
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum * otherSum);
    } else if (newSymbol == "/") {
      if (numbersArr.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
      }
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum / otherSum);
    } else {
      numbersArr.push(newSymbol);
    }
  }

  if (numbersArr.length != 1) {
    console.log(`Error: too many operands!`);
  } else {
    console.log(numbersArr[0]);
  }
}

jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);

//-----------------------------------------
// function jansNotation(array) {
//     const operands = [];
//     const operators = [];
//     const operations = {
//       '+': (x, y) => x + y,
//       '-': (x, y) => x - y,
//       '*': (x, y) => x * y,
//       '/': (x, y) => x / y,
//     };

//     for (const el of array) {
//       typeof el === 'number' ? operands.push(el) : operators.push(el);

//       if (operands.length > 1 && operators.length > 0) {
//         calcs();
//       }
//     }

//     if (operands.length > 1) {
//       console.log("Error: too many operands!");
//     } else if (operators.length >= 1) {
//       console.log("Error: not enough operands!");
//     } else {
//       console.log(operands[0]);
//     }

//     function calcs() {
//       const operator = operators.shift();
//       const second = operands.pop();
//       const first = operands.pop();

//       const result = operations[operator](first, second);
//       operands.push(result);
//     }
//   }
