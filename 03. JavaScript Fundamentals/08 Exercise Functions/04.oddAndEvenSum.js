function oddAndEvenSum(arr) {
  let even = 0;
  let odd = 0;
  arr = arr.toString();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 == 0) {
      even += Number(arr[i]);
    } else {
      odd += Number(arr[i]);
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

//------------------------------------------------------
function oddAndEvenSum(arr) {
  let even = 0;
  let odd = 0;
  arr = arr.toString();

  for (let char of arr) {
    let currNum = Number(char);
    if (currNum % 2 == 0) {
      even += currNum;
    } else {
      odd += currNum;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

//-----------------------------------
 function oddAndEvenSum(arr) {
   let numberAsText = arr.toString();
   function totalOddSum(numAsString) {
     let odd = 0;
     for (let i = 0; i < numAsString.length; i++) {
       let curNum = Number(numAsString[i]);
       if (curNum % 2 !== 0) {
         odd += curNum;
       }
     }
     return odd;
   }
   function totalEvenSum(numAsString) {
     let even = 0;
     for (let i = 0; i < numAsString.length; i++) {
       let curNum = Number(numAsString[i]);
       if (curNum % 2 === 0) {
         even += curNum;
       }
     }
     return even;
   }
   console.log(
     `Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(
       numberAsText
     )}`
   );
 }
