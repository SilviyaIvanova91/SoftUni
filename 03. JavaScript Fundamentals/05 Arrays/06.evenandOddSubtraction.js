function evenandOddSubtraction(arr) {
  let oddSum = 0;
  let evenSum = 0;
  let all = 0;
  for (let i = 0; i < arr.length; i++) {
    let anewArr = Number(arr[i]);
    if (anewArr % 2 === 0) {
      oddSum += anewArr;
    } else {
      evenSum += anewArr;
    }
  }
  all = oddSum - evenSum;
  console.log(all);
}

evenandOddSubtraction([1, 2, 3, 4, 5, 6]);
evenandOddSubtraction([3, 5, 7, 9]);
evenandOddSubtraction([2, 4, 6, 8, 10]);

//--------------------------------------------------------
 function evenandOddSubtraction(arr) {
   let diff = 0;
   for (let i = 0; i < arr.length; i++) {
     arr[i] = Number(arr[i]);

     let evenSum = 0;
     let oddSum = 0;

     for (let num of arr) {
       if (num % 2 === 0) {
         evenSum += num;
       } else {
         oddSum += num;
       }
       diff = evenSum - oddSum;
     }
   }
   console.log(diff);
 }
