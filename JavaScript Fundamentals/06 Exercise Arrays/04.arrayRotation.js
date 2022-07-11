function arrayRotation(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    let currNum = arr.shift();
    arr.push(currNum);
  }
  console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

//----------------------------------------------
// function arrayRotation(arr, rotation) {
//   while (rotation > 0) {
//     let elToMove = arr.shift();
//     arr.push(elToMove);

//     rotation--;
//   }
//   console.log(arr.join(" "));
// }
