function extractIncreasingSubsequencefromArray(arr) {
  let biggest = arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) >= biggest) {
      newArr.push(arr[i]);
      biggest = arr[i];
    }
  }
  return newArr;
}

console.log(
  extractIncreasingSubsequencefromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
);
console.log(extractIncreasingSubsequencefromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequencefromArray([20, 3, 2, 15, 6, 1]));

//-------------------------------------------------
// function extractIncreasingSubsequencefromArray(arr) {
//   let biggest = arr[0];
//   return arr.reduce((newArr, currEl) => {
//     if (biggest <= currEl) {
//       newArr.push(currEl);
//       biggest = currEl;
//     }
//     return newArr;
//   }, []);
// }

//-------------------------------------------------
// function extractIncreasingSubsequencefromArray(arr) {
//     return arr.reduce((newArr, biggest) => {
//       if (biggest >= newArr[newArr.length - 1] || newArr.length == 0) {
//         newArr.push(biggest);
//       }
//       return newArr;
//     }, []);
//   }
