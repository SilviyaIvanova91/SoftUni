function perfectNumber(num) {
  let newNum = 0;
  let isIttrue = true;
  for (let i = 1; i <= num; i++) {
    newNum += i;
    if (newNum === num) {
      isIttrue = true;
      break;
    } else if (newNum > num) {
      isIttrue = false;
      break;
    }
  }
  if (isIttrue) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

//------------------------------------------------
// function perfectNumber(num) {
//   let sumOfDevisors = 1;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       sumOfDevisors += i;
//     }
//   }
//   let res =
//     sumOfDevisors === num
//       ? `We have a perfect number!`
//       : `It's not so perfect.`;
//   console.log(res);
// }

//--------------------------------------------------
// function perfectNumber(n) {
//   let sum = 1;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) {
//       sum += i;
//     }
//   }
//   return sum === n ? `We have a perfect number!` : `It's not so perfect.`;
// }
