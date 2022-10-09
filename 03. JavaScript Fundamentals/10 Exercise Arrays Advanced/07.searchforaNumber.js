function searchforaNumber(firstArr, secondArr) {
  let takeEl = firstArr.length - Number(secondArr[0]);
  let deletedEl = Number(secondArr[1]);
  let searchNum = Number(secondArr[2]);
  let newArr = [];
  let counter = 0;

  for (let i = 0; i < firstArr.length - takeEl; i++) {
    newArr.push(firstArr[i]);
  }
  newArr.splice(0, deletedEl);
  for (let i = 0; i < newArr.length; i++) {
    let num = Number(newArr[i]);
    if (num == searchNum) {
      counter++;
    }
  }
  console.log(`Number ${searchNum} occurs ${counter} times.`);
}

searchforaNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchforaNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

// function searchforaNumber(firstArr, secondArr) {
//   let takeEl = secondArr[0];
//   let deletedEl = secondArr[1];
//   let searchNum = secondArr[2];
//   let newArr = firstArr.splice(0, takeEl);
//   newArr.splice(0, deletedEl);
//   let counter = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] == searchNum) {
//       counter++;
//     }
//   }
//   console.log(`Number ${searchNum} occurs ${counter} times.`);
// }
