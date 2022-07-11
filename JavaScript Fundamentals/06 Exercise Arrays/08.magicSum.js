function magicSum(arr, num) {
  let newNum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newNum = arr[i] + arr[j];
      if (num === newNum) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);

//----------------------------------
// function magicSum(arr, num) {
//   let arrofvalidPairs = [];
//   let validPair = "";

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         validPair = `${arr[i]} ${arr[j]}`;
//         console.log(validPair);
//         //arrofvalidPairs.push(validPair);
//       }
//     }
//   }
//  // console.log(arrofvalidPairs.join("\n"));
// }

//------------------------------------
// function magicSum(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     let currEl = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let nextEl = arr[j];
//       let sum = currEl + nextEl;
//       if (sum === num) {
//         newNum = arr[i] + arr[j];
//         console.log(`${currEl} ${nextEl}`);
//       }
//     }
//   }
// }
