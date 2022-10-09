function amazingNumbers(num) {
  let result = 0;
  let numAsString = String(num);
  for (let i = 0; i < numAsString.length; i++) {
    result += Number(numAsString[i]);
  }
  let resultAsString = String(result);
  let special = false;
  for (let i = 0; i < resultAsString.length; i++) {
    if (resultAsString[i] == "9") {
      special = true;
      break;
    }
  }
  if (special) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumbers(1233);
amazingNumbers(999);

//-------------------------------------------------
// function amazingNumbers(num) {
//     let result = 0;
//     let numAsString = String(num);
//     for (let i = 0; i < numAsString.length; i++) {
//       result += Number(numAsString[i]);
//     }
//     let resultAsString = String(result);
//     let special = false;
//     for (let i = 0; i < resultAsString.length; i++) {
//       if (resultAsString[i] == "9") {
//         special = true;
//       }
//     }
//     console.log(`${num} Amazing? ${special ? "True" : "False"}`);
//   }

//-------------------------------------
// function amazingNumbers(num) {
//   let result = 0;
//   let numAsString = String(num);
//   for (let i = 0; i < numAsString.length; i++) {
//     result += Number(numAsString[i]);
//   }

//   console.log(
//     `${num} Amazing? ${result.toString().indexOf("9") >= 0 ? "True" : "False"}`
//   );
// }
