function sorting(arr) {
  let length = arr.length;
  arr.sort((a, b) => a - b);
  let newArr = arr;
  let finalArr = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) {
      finalArr.push(newArr.pop());
    } else {
      finalArr.push(newArr.shift());
    }
  }
  console.log(finalArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

// function sorting(arr) {
//   arr.sort((a, b) => a - b);
//   let newArr = [];
//   while (arr.length > 0) {
//     let biggerNum = arr.pop();
//     newArr.push(biggerNum);
//     let smallerNum = arr.shift();
//     newArr.push(smallerNum);
//   }
//   console.log(newArr.join(" "));
// }
