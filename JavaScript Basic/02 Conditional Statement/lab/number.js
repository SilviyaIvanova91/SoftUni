 function number(input) {
   let a = Number(input[0]);

   if (a < 100) {
     console.log(`Less than 100`);
   } else if (a >= 100 && a <= 200) {
     console.log(`Between 100 and 200`);
   } else {
     console.log(`Greater than 200`);
   }
 }

//---------------------------------------------------
function number(input) {
  let a = Number(input[0]);
  if (a < 100) {
    console.log(`Less than 100`);
  } else if (a > 200) {
    console.log(`Greater than 200`);
  } else {
    console.log(`Between 100 and 200`);
  }
}
number(["95"]);
number(["120"]);
number(["210"]);
