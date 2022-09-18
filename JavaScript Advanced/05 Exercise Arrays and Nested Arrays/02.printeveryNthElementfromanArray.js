function printeveryNthElementfromanArray(arr, num) {
  return arr.filter((x, i) => i % num == 0);
}

console.log(printeveryNthElementfromanArray(["5", "20", "31", "4", "20"], 2));
console.log(printeveryNthElementfromanArray(["dsa", "asd", "test", "tset"], 2));
console.log(printeveryNthElementfromanArray(["1", "2", "3", "4", "5"], 6));

//------------
// function printeveryNthElementfromanArray(arr, num) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += num) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
//   }
