function mathPower(num, power) {
  let res = 1; //не започваме от 0, защото ще ни даде грешен отговор, на нум*0 ще е 1 а не 0
  for (let i = 1; i <= power; i++) {
    res *= num;
  }
  console.log(res);
}

mathPower(2, 8);
mathPower(3, 4);

 function mathPower(num, power) {
     let newNum = Math.pow(num, power);
     console.log(newNum);
   }
