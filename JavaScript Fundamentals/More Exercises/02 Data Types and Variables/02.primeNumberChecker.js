function primeNumberChecker(num) {
  let boolean = "";
  for (let i = 1; i < num; i++) {
    if ((num % 3 !== 0 && num % 2 !== 0) || num == 2) {
      boolean = true;
    } else {
      boolean = false;
      break;
    }
  }
  console.log(boolean);
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);

//--------------------------------------------
// function primeNumberChecker(num) {
//     for (let i = 1; i < num; i++) {
//       if ((num % 3 !== 0 && num % 2 !== 0) || num == 2) {
//         console.log(`true`);
//         break;
//       } else {
//         console.log(`false`);
//         break;
//       }
//     }
//   }

//-------------------------------------------
// function primeNumberChecker(num) {
//     let devider = 2;
//     let squiere = Math.sqrt(num);
//     let boolean = true;

//     while (boolean && devider <= squiere) {
//       if (num % devider === 0) {
//         boolean = false;
//         break;
//       }
//       devider++;
//     }
//     console.log(boolean);
//   }
