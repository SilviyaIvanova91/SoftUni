function distinctArray(arr) {
  let newArr = arr.map(Number);
  for (let i = 0; i < newArr.length; i++) {
    for (let k = i + 1; k < newArr.length; k++) {
      if (newArr[i] == newArr[k]) {
        newArr.splice(k, 1);
        k--;
      }
    }
  }
  console.log(newArr.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

// function distinctArray(arr) {
//   let newArr = [];
//   arr.map((num) => {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   });
//   console.log(newMap.map(currNum));
// }

//-----------------------------------
// function distinctArray(arr) {
//   let newArr = [];
//   for (let num of arr) {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   }
//   console.log(newArr.join(" "));
// }

//---------------------------------------
// function distinctArray(arr) {
//   let newArr = arr;
//   for (let i = 0; i < newArr.length; i++) {
//     let currEl = arr[i];
//     for (let k = i + 1; k < newArr.length; k++) {
//       let nextEl = arr[k];
//       if (currEl == nextEl) {
//         newArr.splice(k, 1);
//         k--;
//       }
//     }
//   }
//   console.log(newArr.join(" "));
// }
