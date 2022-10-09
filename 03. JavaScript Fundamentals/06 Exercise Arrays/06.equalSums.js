function equalSums(arr) {
  let hasequal = "no";
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum == rightSum) {
      hasequal = i;
    }
  }
  console.log(hasequal);
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

//-------------------------------------------------
// function equalSums(arr) {
//   let hasequal = false;
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       leftSum += arr[j];
//     }
//     for (let k = i + 1; k < arr.length; k++) {
//       rightSum += arr[k];
//     }
//     if (leftSum == rightSum) {
//       console.log(i);
//       hasequal = true;
//     }
//   }
//   if (!hasequal) {
//     console.log(`no`);
//   }
// }
