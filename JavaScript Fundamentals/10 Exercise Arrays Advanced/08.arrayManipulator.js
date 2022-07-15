function arrayManipulator(nums, command) {
  for (let i = 0; i < command.length; i++) {
    let currValue = command[i].split(" ");
    let currCommand = currValue.shift();

    currValue = currValue.map(Number);
    let sumPairs = 0;
    let pairsOfSumNums = [];

    switch (currCommand) {
      case "add":
        let indexToadd = currValue[0];
        let elToAd = currValue[1];
        nums.splice(indexToadd, 0, elToAd);
        break;
      case "addMany":
        let indexToAddMany = currValue.shift();
        nums.splice(indexToAddMany, 0, ...currValue);
        break;
      case "contains":
        console.log(nums.indexOf(currValue[0]));
        break;
      case "remove":
        let indexToRemove = currValue[0];
        nums.splice(indexToRemove, 1);
        break;
      case "shift":
        for (let i = 0; i < currValue[0]; i++) {
          nums.push(nums.shift());
        }
        break;
      case "sumPairs":
        if (nums.length % 2 != 0) {
          nums.push(0);
        }
        for (let i = 0; i < nums.length; i += 2) {
          sumPairs = nums[i] + nums[i + 1];
          pairsOfSumNums.push(sumPairs);
        }
        nums = [...pairsOfSumNums];
        break;
      case "print":
        console.log(`[ ${nums.join(", ")} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);

// function arrayManipulator(arrInteger, arrComand) {
//   for (let comand of arrComand) {
//     let tokens = comand.split(" ");
//     let currCommand = tokens[0];
//     if (currCommand == "add") {
//       let index = Number(tokens[1]);
//       let el = Number(tokens[2]);
//       arrInteger.splice(index, 0, el);
//     } else if (currCommand == "addMany") {
//       let index = Number(tokens[1]);
//       tokens.splice(0, 2);
//       let numToAdd = tokens.map(Number);
//       arrInteger.splice(index, 0, ...numToAdd);
//     } else if (currCommand == "contains") {
//       let res = arrInteger.indexOf(Number(tokens[1]));
//       console.log(res);
//     } else if (currCommand == "remove") {
//       let index = Number(tokens[1]);
//       arrInteger.splice(index, 1);
//     } else if (currCommand == "shift") {
//       let position = Number(tokens[1]);
//       for (let i = 0; i < position; i++) {
//         let firstNum = arrInteger.shift();
//         arrInteger.push(firstNum);
//       }
//     } else if (currCommand == "sumPairs") {
//       let ressArr = [];
//       if (arrInteger.length % 2 != 0) {
//         arrInteger.push(0);
//       }
//       for (let i = 0; i < arrInteger.length; i += 2) {
//         let sum = arrInteger[i] + arrInteger[i + 1];
//         ressArr.push(sum);
//       }
//       arrInteger = ressArr;
//     } else if (currCommand == "print") {
//       console.log(`[ ${arrInteger.join(", ")} ]`);
//     }
//   }
// }
