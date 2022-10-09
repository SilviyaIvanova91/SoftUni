function addandSubtract(arr) {
  let newSum = 0;
  let modifySum = 0;
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    newSum += arr[i];
    if (arr[i] % 2 === 0) {
      sum.push(arr[i] + i);
      arr[i] += i;
    } else {
      sum.push(arr[i] - i);
      arr[i] -= i;
    }
    modifySum += arr[i];
  }
  console.log(sum);
  console.log(newSum);
  console.log(modifySum);
}

addandSubtract([5, 15, 23, 56, 35]);
addandSubtract([-5, 11, 3, 0, 2]);

// function addandSubtract(arr) {
//   let newSum = 0;
//   let modifySum = 0;
//   let newLength = arr.length

//   for (let i = 0; i < newLength; i++) {
//     newSum += input[i]
//     if (input[i] % 2 === 0) {
//       input[i] += i
//     } else {
//       input[i] -= i;
//     }
//     modifySum += input[i];
//   }
//   console.log(sum);
//   console.log(newSum);
//   console.log(modifySum);
// }
//---------------------------------------------
// function addandSubtract(arr) {
//   let sumOriginal = 0;
//   let sumModify = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumOriginal += arr[i];
//     if (arr[i] % 2 === 0) {
//       arr[i] += i;
//     } else {
//       arr[i] -= i;
//     }
//     sumModify += arr[i];
//   }
//   console.log(arr);
//   console.log(sumOriginal);
//   console.log(sumModify);
// }
