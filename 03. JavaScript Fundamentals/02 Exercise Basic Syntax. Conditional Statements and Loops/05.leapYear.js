function leapYear(number) {
  if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}

leapYear(1984);
leapYear(2003);
leapYear(4);

 function leapYear(number) {
   let result =
     (number % 4 === 0 && number % 100 !== 0) || number % 400 === 0
       ? "yes"
       : "no";
   console.log(result);
 }
