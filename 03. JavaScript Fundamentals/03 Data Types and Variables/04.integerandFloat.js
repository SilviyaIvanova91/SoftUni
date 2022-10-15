function integerandFloat(a, b, c) {
  let sum = a + b + c;
  let type = "Integer";

  if (sum % 1 != 0) {
    type = "Float";
  }
  console.log(`${sum} - ${type}`);
}

integerandFloat(9, 100, 1.1);
integerandFloat(100, 200, 303);

//--------------------------------------------------
 function integerandFloat(a, b, c) {
     let sum = a + b + c;
     let type = "Integer";
     let roundedSum = Math.round(sum);

     if (sum != roundedSum) {
       type = "Float";
     }
     console.log(`${sum} - ${type}`);
   }

//--------------------------------------------------
 function integerandFloat(a, b, c) {
     let sum = a + b + c;
     let sumAsString = String(sum);
     let type = "Integer";

     for (let i = 0; i < sumAsString.length; i++) {
       if (sumAsString[i] == ".") {
         type = "Float";
       }
     }
     console.log(`${sum} - ${type}`);
   }

//-------------------------------------
 function integerandFloat(a, b, c) {
   let sum = a + b + c;
   let resToStr = String(sum);
   let isFloat = false;

   for (let i = 0; i < resToStr.length; i++) {
     if (sumAsString[i] == ".") {
       isFloat = true;
     }
   }
   console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
 }

//------------------------------------
 function integerandFloat(a, b, c) {
   let sum = a + b + c;

   console.log(`${sum} - ${parseInt(sum) == sum ? "Integer" : "Float"}`);
 }
