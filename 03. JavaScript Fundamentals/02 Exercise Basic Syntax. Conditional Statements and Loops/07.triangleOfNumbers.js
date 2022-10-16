function triangleOfNumbers(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += i + " ";
    }
    console.log(str);
    str = "";
  }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);

 function triangleOfNumbers(num) {
   for (let i = 1; i <= num; i++) {
     let str = "";
     for (let j = 1; j <= i; j++) {
       str += i;
       if (j !== i) {
         str += " ";
       }
     }
     console.log(str);
   }
 }

 triangleOfNumbers(3);
 triangleOfNumbers(5);
 triangleOfNumbers(6);
