function smallestofThreeNumbers(numOne, numTwo, numThree) {
  let smallestNum = 0;
  if (numOne <= numTwo && numOne < numThree) {
    smallestNum = numOne;
  } else if (numTwo <= numOne && numTwo <= numThree) {
    smallestNum = numTwo;
  } else if (numThree < numOne && numThree < numTwo) {
    smallestNum = numThree;
  }
  console.log(smallestNum);
}

smallestofThreeNumbers(2, 5, 3);
smallestofThreeNumbers(600, 342, 123);
smallestofThreeNumbers(25, 21, 4);
smallestofThreeNumbers(2, 2, 2);

// function smallestofThreeNumbers(numOne, numTwo, numThree) {
//   let smallestNum = Math.min(numOne, numTwo, numThree);
//   console.log(smallestNum);
// }
//-------------------------------------------------------
// function smallestofThreeNumbers(numOne, numTwo, numThree) {
//   let smallestNum = function (numOne, numTwo, numThree) {
//     if (numOne <= numTwo && numOne < numThree) {
//       smallestNum = numOne;
//     } else if (numTwo <= numOne && numTwo <= numThree) {
//       smallestNum = numTwo;
//     } else {
//       smallestNum = numThree;
//     }
//     return smallestNum;
//   };
//   console.log(smallestNum(numOne, numTwo, numThree));
// }

// smallestofThreeNumbers(2, 5, 3);
// smallestofThreeNumbers(600, 342, 123);
// smallestofThreeNumbers(25, 21, 4);
// smallestofThreeNumbers(2, 2, 2);

//------------------------------------------------------------
// function smallestofThreeNumbers(numOne, numTwo, numThree) {
//   let smallestNum = (numOne, numTwo, numThree) =>
//     Math.min(numOne, numTwo, numThree);
//   console.log(smallestNum(numOne, numTwo, numThree));
// }
