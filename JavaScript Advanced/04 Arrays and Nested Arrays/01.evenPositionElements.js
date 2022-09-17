function evenPositionElements(input) {
  let newArr = [];
  for (let i = 0; i < input.length; i += 2) {
    newArr.push(input[i]);
  }
  console.log(newArr.join(" "));
}

evenPositionElements(["20", "30", "40", "50", "60"]);
evenPositionElements(["5", "10"]);

//-----------------------------------------------
// function evenPositionElements(input) {
//   let newArr = [];
//   for (let i = 0; i < input.length; i += 2) {
//     newArr[newArr.length] = input[i];
//   }
//   console.log(newArr.join(" "));
// }

//----------------------------------------
// function evenPositionElements(input) {
//   let newArr = "";
//   for (let i = 0; i < input.length; i++) {
//     if (i % 2 == 0) {
//       newArr += input[i];
//       newArr += " ";
//     }
//   }
//   console.log(newArr);
// }
