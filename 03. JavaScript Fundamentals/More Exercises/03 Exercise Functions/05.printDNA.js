function printDNA(num) {
  let str = "ATCGTTAGGG";
  let counter = 0;

  for (let i = 0; i < num; i++) {
    if (i % 4 === 0) {
      console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
    } else if (i % 4 === 1) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
    } else if (i % 4 === 2) {
      console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
    } else if (i % 4 === 3) {
      console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
    }
    counter += 2;
  }
}

printDNA(4);
printDNA(10);

//--------------------------------------------------------------------
// function printDNA(num) {
//     let str = "ATCGTTAGGG";
//     let counter = 0;

//     for (let i = 0; i < num; i++) {
//       if (i % 4 == 0) {
//         console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
//       } else if (i % 4 == 1) {
//         console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
//       } else if (i % 4 == 2) {
//         console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
//       } else if (i % 4 == 3) {
//         console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
//       }
//       counter += 2;
//     }
//   }

//------------------------------------------------------------------
// function printDNA(num) {
//     let arr = "ATCGTTAGGG".split("");
//     for (let i = 1; i <= num; i++) {
//       let [a, b] = arr.splice(0, 2);
//       if (i === 1 || i % 4 === 1) {
//         console.log(`**${a}${b}**`);
//       } else if (i === 2 || i % 4 === 2) {
//         console.log(`*${a}--${b}*`);
//       } else if (i === 3 || i % 4 === 3) {
//         console.log(`${a}----${b}`);
//       } else if (i === 4 || i % 4 === 0) {
//         console.log(`*${a}--${b}*`);
//       }

//       arr.push(a);
//       arr.push(b);
//     }
//   }
