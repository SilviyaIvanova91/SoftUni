function sameNumbers(num) {
  let input = String(num);
  let a = input[0];
  let isSame = true;
  let sum = 0;
  for (let el of input) {
    sum += Number(el);
    if (a !== el) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);

//-----------------------------------
// function sameNumbers(num) {
//     let input = String(num);
//     let a = input[0];
//     let isSame = true;
//     let sum = 0;
//     for (let el of input) {
//       sum += Number(el);
//     }
//     for (let el of input) {
//       if (a !== el) {
//         isSame = false;
//         break;
//       }
//     }
//     if (isSame) {
//       console.log(`true`);
//     } else {
//       console.log(`false`);
//     }
//     console.log(sum);
//   }
