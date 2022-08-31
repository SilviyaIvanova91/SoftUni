function jansNotation(array) {
  let numbersArr = [];
  let newSymbol = 0;
  let newNum = 0;
  let otherSum = 0;

  /*  обикааляме целия масив
   */
  for (let i = 0; i < array.length; i++) {
    /*   вземаме всеки един елемент, ако е число го вкарваме в numbersArr масива
      ако е знак изпълняваме операцията
      */
    newSymbol = array[i];

    if (newSymbol == "+") {
      if (numbersArr.length < 2) {
        /*  проверяваме дали в масива с числа има попне 2, за да изпълним 
          операцията
          */
        console.log(`Error: not enough operands!`);
        return;
      }

      /* вземаме последните 2 числа, които са в масива с числа и на
        тяхно място слагаме сумата, т.е. pop-ваме последните 2 и 
        push-ваме новата стойност
        */
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum + otherSum);
    } else if (newSymbol == "-") {
      if (numbersArr.length < 2) {
        /*   проверяваме дали в масива с числа има попне 2, за да изпълним 
          операцията
          */
        console.log(`Error: not enough operands!`);
        return;
      }
      /*  вземаме последните 2 числа, които са в масива с числа и на
        тяхно място слагаме сумата, т.е. pop-ваме последните 2 и 
        push-ваме новата стойност
        */
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum - otherSum);
    } else if (newSymbol == "*") {
      if (numbersArr.length < 2) {
        /*   проверяваме дали в масива с числа има попне 2, за да изпълним 
          операцията
          */
        console.log(`Error: not enough operands!`);
        return;
      }
      /*  вземаме последните 2 числа, които са в масива с числа и на
        тяхно място слагаме сумата, т.е. pop-ваме последните 2 и 
        push-ваме новата стойност
        */
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum * otherSum);
    } else if (newSymbol == "/") {
      if (numbersArr.length < 2) {
        /*  проверяваме дали в масива с числа има попне 2, за да изпълним 
          операцията
          */
        console.log(`Error: not enough operands!`);
        return;
      }
      /*  вземаме последните 2 числа, които са в масива с числа и на
        тяхно място слагаме сумата, т.е. pop-ваме последните 2 и 
        push-ваме новата стойност
        */
      otherSum = numbersArr.pop();
      newNum = numbersArr.pop();
      numbersArr.push(newNum / otherSum);
    } else {
      numbersArr.push(newSymbol);
    }
  }

  /* в масива с числа, трябва да е останала само една стойност ->
    резултата
    */
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
jansNotation([31, 2, "+", 11, "/"]);
jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);

// function jansNotation(array) {
//   let numbersArr = [];
//   let numberLength = 0;
//   let sumbolArr = [];
//   let sumbolLength = 0;
//   let isNumberOnly = false;
//   for (let i = 0; i < array.length / 2; i++) {
//     let a = array[i];
//     if (
//       array[i] == "+" ||
//       array[i] == "-" ||
//       array[i] == "*" ||
//       array[i] == "/"
//     ) {
//       isNumberOnly = true;
//       break;
//     }
//   }
//   for (let sumbol of array) {
//     if (Number(sumbol)) {
//       numbersArr.push(sumbol);
//       numberLength++;
//     } else if (
//       sumbol == "+" ||
//       sumbol == "-" ||
//       sumbol == "*" ||
//       sumbol == "/"
//     ) {
//       sumbolArr.push(sumbol);
//       sumbolLength++;
//     }
//   }
//   let res = 0;
//   if (sumbolLength > numberLength - 1 && numberLength < 2) {
//     console.log(`Error: not enough operands!`);
//   } else if (numberLength - 1 > sumbolLength) {
//     console.log(`Error: too many operands!`);
//   } else {
//     let newSumbol = 0;
//     let newNum = 0;
//     let otherSum = 0;
//     for (let i = 0; i < sumbolLength; i++) {
//       if (isNumberOnly) {
//         newSumbol = sumbolArr.shift();
//         newNum = numbersArr.shift();
//         if (i == 0) {
//           otherSum = numbersArr.shift();
//         }
//       } else {
//         if (i == 0) {
//           otherSum = numbersArr.pop();
//         }
//         newSumbol = sumbolArr.shift();
//         newNum = numbersArr.pop();
//       }
//       if (i == 0) {
//         if (newSumbol == "+") {
//           res = newNum + otherSum;
//         } else if (newSumbol == "-") {
//           res = newNum - otherSum;
//         } else if (newSumbol == "*") {
//           res = newNum * otherSum;
//         } else if (newSumbol == "/") {
//           res = newNum / otherSum;
//         }
//       } else {
//         if (isNumberOnly) {
//           if (newSumbol == "+") {
//             res += newNum;
//           } else if (newSumbol == "-") {
//             res -= newNum;
//           } else if (newSumbol == "*") {
//             res *= newNum;
//           } else if (newSumbol == "/") {
//             res /= newNum;
//           }
//         } else {
//           if (newSumbol == "+") {
//             newNum += res;
//           } else if (newSumbol == "-") {
//             newNum -= res;
//           } else if (newSumbol == "*") {
//             newNum *= res;
//           } else if (newSumbol == "/") {
//             newNum /= res;
//           }
//           res = newNum;
//         }
//       }
//     }
//     console.log(res);
//   }
// }

//-----------------------------------------
// function jansNotation(array) {
//   let numbersArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Number(array[i])) {
//       numbersArray.push(Number(array[i]));
//     } else {
//       if (numbersArray.length >= 2) {
//         console.log("Error: not enough operands!");
//       }
//       if (array[i] === "+") {
//         array[i][numbersArray.length - 2] =
//           array[i][numbersArray.length - 2] + array[i][numbersArray.length - 1];
//         numbersArray.splice(-1, 1);
//       } else if (array[i] == "-") {
//         array[i][numbersArray.length - 2] =
//           array[i][numbersArray.length - 2] - array[i][numbersArray.length - 1];
//         numbersArray.splice(-1, 1);
//       } else if (array[i] == "*") {
//         array[i][numbersArray.length - 2] =
//           array[i][numbersArray.length - 2] * array[i][numbersArray.length - 1];
//         numbersArray.splice(-1, 1);
//       } else if (array[i] == "/") {
//         array[i][numbersArray.length - 2] =
//           array[i][numbersArray.length - 2] / array[i][numbersArray.length - 1];
//         numbersArray.splice(-1, 1);
//       }
//     }
//   }
//   if (numbersArray.length == 1) {
//     console.log("Error: too many operands!");
//   } else if (numbersArray.length != 0) {
//     console.log(numbersArray.toString());
//   }
// }
