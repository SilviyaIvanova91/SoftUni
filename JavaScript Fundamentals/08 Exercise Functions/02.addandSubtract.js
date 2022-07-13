// function addandSubtract(numOne, numTwo, numThree) {
//   function add(firstNum, secNum) {
//     return firstNum + secNum;
//   }
//   let substract = (addResult, thirdNum) => addResult - thirdNum;
//   let result = add(numOne, numTwo);
//   let finalResult = substract(result, numThree);
//   console.log(finalResult);
// }

// addandSubtract(23, 6, 10);
// addandSubtract(1, 17, 30);
// addandSubtract(42, 58, 100);

//-------------------------------------------------------
function addandSubtract(numOne, numTwo, numThree) {
  let result = add(numOne, numTwo);
  function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  let substract = (result, numThree) => result - numThree;
  let finalResult = substract(result, numThree);
  console.log(finalResult);
}

addandSubtract(23, 6, 10);
addandSubtract(1, 17, 30);
addandSubtract(42, 58, 100);

//---------------------------------------------------
// function addandSubtract(numOne, numTwo, numThree) {
//   let result = add(numOne, numTwo);
//   let finalResult = substract(result, numThree);

//   console.log(finalResult);

//   function add(numOne, numTwo) {
//     return numOne + numTwo;
//   }
//   function substract(result, numThree) {
//     return result - numThree;
//   }
// }

//---------------------------------------------------
// function addandSubtract(numOne, numTwo, numThree) {
//   let add = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };
//   let substract = (result, numThree) => {
//     return result - numThree;
//   };

//   let result = add(numOne, numTwo);
//   let finalResult = substract(result, numThree);

//   console.log(finalResult);
// }
