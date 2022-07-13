function simpleCalculator(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  let sum = 0;
  switch (operator) {
    case "multiply":
      sum = (numOne, numTwo) => numOne * numTwo;
      console.log(sum(numOne, numTwo, operator));
      break;
    case "divide":
      sum = (numOne, numTwo) => numOne / numTwo;
      console.log(sum(numOne, numTwo, operator));
      break;
    case "add":
      sum = (numOne, numTwo) => numOne + numTwo;
      console.log(sum(numOne, numTwo, operator));
      break;
    case "subtract":
      sum = (numOne, numTwo) => numOne - numTwo;
      console.log(sum(numOne, numTwo, operator));
      break;
  }
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");

//---------------------------------------------
function simpleCalculator(numOne, numTwo, operator) {
  let sum;
  // let multiply = (x, y) => x * y;
  // let divide = (x, y) => x / y;
  // let add = (x, y) => x + y;
  // let substract = (x, y) => x - y;
  switch (operator) {
    case "multiply":
      sum = (numOne, numTwo) => numOne * numTwo;
      break;
    case "divide":
      sum = (numOne, numTwo) => numOne / numTwo;
      break;
    case "add":
      sum = (numOne, numTwo) => numOne + numTwo;
      break;
    case "subtract":
      sum = (numOne, numTwo) => numOne - numTwo;
      break;
  }
  console.log(res(numOne, numTwo));
}
//---------------------------------------------------
// function solve(num1, num2, operator) {
//   let mathOpp = {
//     multiply: '*',
//     divide: '/',
//     add: '+',
//     subtract: '-'
//   }
//   let doMath = (a, b) => new Function('a', 'b', `return ${a} ${mathOpp[operator]} ${b}`)(a, b)
//   console.log(doMath(num1, num2))
// }
