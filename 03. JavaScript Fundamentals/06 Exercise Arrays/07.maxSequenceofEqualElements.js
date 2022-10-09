function maxSequenceofEqualElements(arr) {
  let newArr = [];
  let firstArr = [];

  for (let i = 0; i < arr.length; i++) {
    firstArr = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        firstArr.push(arr[j]);
      } else {
        break;
      }
      if (firstArr.length > newArr.length) {
        newArr = firstArr;
      }
    }
  }
  console.log(newArr.join(" "));
}

maxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceofEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceofEqualElements([4, 4, 4, 4]);
maxSequenceofEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

//---------------------------
// function maxSequenceofEqualElements(arr) {
//   let maxSquence = [];

//   for (let i = 0; i < arr.length; i++) {
//     let currsequence = [];
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         currsequence.push(arr[i]);
//       } else {
//         break;
//       }
//     }
//     if (currsequence.length > maxSquence.length) {
//       maxSquence = currsequence;
//     }
//   }
//   console.log(maxSquence.join(" "));
// }
