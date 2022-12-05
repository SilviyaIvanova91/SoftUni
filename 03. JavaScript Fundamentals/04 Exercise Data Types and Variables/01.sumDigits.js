function sumDigits(num) {
  let strNum = String(num);
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i]);
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

//----------------------------------------------------
function sumDigits(num) {
   let strNum = String(num);
   let sum = 0;
   strNum.split("").map(function (char) {
     sum += Number(char);
   });
   console.log(sum);
 }

//----------------------------------------------------------
 function sumDigits(num) {
   let strNum = String(num);
   let sum = 0;

   strNum.split('').forEach(function (char) {
     sum +=Number(char)
   })
   console.log(sum);
 }

//---------------------------------------------------------
 function sumDigits(num) {
   let strNum = String(num);
   let sum = 0;
   for (let char of strNum) {
     sum += Number(strNum);
   }
   console.log(sum);
 }
