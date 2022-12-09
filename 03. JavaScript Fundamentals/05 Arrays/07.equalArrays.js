function equalArrays(firstArr, secondArr) {
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    firstArr[i] = Number(firstArr[i]);
    firstSum += firstArr[i];
  }
  for (let i = 0; i < secondArr.length; i++) {
    secondArr[i] = Number(secondArr[i]);
    secondSum += secondArr[i];
  }
  if (firstSum === secondSum) {
    console.log(`Arrays are identical. Sum: ${firstSum}`);
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
      }
    }
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);

//----------------------------------------------------
 function equalArrays(firstArr, secondArr) {
   let sum = 0;
   let secsum = 0;
   for (let i = 0; i < firstArr.length; i++) {
     firstArr[i] = Number(firstArr[i]);
     sum += firstArr[i];
   }
   for (let i = 0; i < secondArr.length; i++) {
     secondArr[i] = Number(secondArr[i]);
     secsum += secondArr[i];
   }
   let areEqual = true;
   for (let i = 0; i < firstArr.length; i++) {
     if (firstArr[i] !== secondArr[i]) {
       console.log(`Arrays are not identical. Found difference at ${i} index`);
       areEqual = false;
       break;
     } else if (sum === secsum) {
       console.log(`Arrays are identical. Sum: ${sum}`);
       break;
     }
   }
 }
