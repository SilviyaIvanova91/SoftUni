function sortArray(arr, type) {
  let sorted = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };
  arr.sort(sorted[type]);
  return arr;
}

sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], "desc");

//-----------------------------------
// function sortArray(arr, type) {
//     if (type == "asc") {
//       arr.sort((a, b) => a - b);
//     } else if (type === "desc") {
//       arr.sort((a, b) => b - a);
//     }
//     // console.log(arr);
//     return arr;
//   }
