function rotateArray(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

//----------------------------------------
// function rotateArray(arr, num) {
//   let rotate = num % arr.length;
//   for (let i = 0; i < rotate; i++) {
//     arr.unshift(arr.pop());
//   }
//   console.log(arr.join(" "));
// }
