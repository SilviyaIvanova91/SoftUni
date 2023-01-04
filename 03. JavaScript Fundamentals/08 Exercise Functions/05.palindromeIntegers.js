function palindromeIntegers(inputArr) {
  for (let el of inputArr) {
    let curr = String(el);
    let reversed = String(el).split("").reverse().join("");

    if (curr === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);

 function palindromeIntegers(inputArr) {
   let arrOfNums = inputArr;

   function isPalindrom(number) {
     let startNum = number;
     let reversedNum = Number(number.toString().split("").reverse().join(""));
     if (startNum === reversedNum) {
       return true;
     } else {
       return false;
     }
   }
   for (let i = 0; i < arrOfNums.length; i++) {
     let currNum = arrOfNums[i];
     console.log(isPalindrom(currNum));
   }
 }
