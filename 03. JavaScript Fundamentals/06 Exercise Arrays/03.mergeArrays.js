function mergeArrays(firstArr, secondArr) {
  let sum = [];
  for (let i = 0; i < firstArr.length; i++) {
    if (i % 2 === 0) {
      firstArr[i] = Number(firstArr[i]);
    } else {
      firstArr[i] = String(firstArr[i]);
    }
    for (let k = 0; k < secondArr.length; k++) {
      if (k % 2 === 0) {
        secondArr[k] = Number(secondArr[k]);
      } else {
        secondArr[k] = String(secondArr[k]);
      }
      if (i === k && i < firstArr.length) {
        sum[i] = firstArr[i] + secondArr[k];
      }
    }
  }
  console.log(sum.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

 function mergeArrays(firstArr, secondArr) {
   let sum = [];
   for (let i = 0; i < firstArr.length; i++) {
     if (i % 2 === 0) {
       firstArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
     } else {
       firstArr[i] = String(firstArr[i]) + Number(secondArr[i]);
     }
   }
   console.log(sum.join(" - "));
 }
//---------------------------------------------------
 function mergeArrays(firstArr, secondArr) {
   let thirdArray = [];
   for (let i = 0; i < firstArr.length; i++) {
     if (i % 2 === 0) {
       thirdArray.push(Number(firstArr[i]) + Number(secondArr[i]));
     } else {
       thirdArray.push(`${firstArr[i]}${secondArr[i]}`);
     }
   }
   console.log(thirdArray.join(" - "));
 }

//------------------------------------------------------
 function mergeArrays(firstArr, secondArr) {
   console.log(
     firstArr
       .map((el, i) =>
         i % 2 == 0 ? Number(el) + Number(secondArr[i]) : el + secondArr[i]
       )
       .join(" - ")
   );
 }

//----------------------------------------------------
 function mergeArrays(firstArr, secondArr) {
   let newArr = [];
   for (let i = 0; i < firstArr.length; i++) {
     if (i % 2 == 0) {
       newArr.push(Number(firstArr[i]) + Number(secondArr[i]));
     } else {
       newArr.push(firstArr[i] + secondArr[i]);
     }
   }
   console.log(newArr.join(" - "));
 }
