function NxNMatrix(num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(num);
  }
  for (let j = 0; j < num; j++) {
    console.log(newArr.join(" "));
  }
}

NxNMatrix(3);
NxNMatrix(7);
NxNMatrix(2);

//----------------------------------------
// function NxNMatrix(num) {
//   let newArr = [];
//   for (let i = 0; i < num; i++) {
//     let row = [];

//     for (let j = 0; j < num; j++) {
//       row.push(num);
//     }
//     newArr.push(row.join(" "));
//   }
//   console.log(newArr.join("\n"));
// }

//-----------------------------------------
// function NxNMatrix(number) {
//   let rowGenerator = (num) => {
//     return `${num} `.repeat(num);
//   };
//   for (let i = 1; i <= number; i++) {
//     console.log(rowGenerator(number));
//   }
// }
