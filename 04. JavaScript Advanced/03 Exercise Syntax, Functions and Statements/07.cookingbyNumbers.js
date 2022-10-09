function cookingbyNumbers(input, ...token) {
  let num = Number(input);
  for (let i = 0; i < 5; i++) {
    let command = token[i];
    if (command == "chop") {
      num /= 2;
    } else if (command == "dice") {
      num = Math.sqrt(num);
    } else if (command == "spice") {
      num++;
    } else if (command == "bake") {
      num *= 3;
    } else if (command == "fillet") {
      num -= num * 0.2;
    }
    console.log(num);
  }
}

cookingbyNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingbyNumbers("9", "dice", "spice", "chop", "bake", "fillet");

//-------------------------------------------
// function cookingbyNumbers(
//   input,
//   command1,
//   command2,
//   command3,
//   command4,
//   command5
// ) {
//   let num = Number(input);
//   let commandList = [command1, command2, command3, command4, command5];
//   let chop = (x) => x / 2;
//   let dice = (x) => Math.sqrt(x);
//   let spice = (x) => ++x;
//   let bake = (x) => x * 3;
//   let fillet = (x) => x - x * 0.2;
//   for (let i = 0; i < commandList.length; i++) {
//     switch (commandList[i]) {
//       case "chop":
//         num = chop(num);
//         console.log(num);
//         break;
//       case "dice":
//         num = dice(num);
//         console.log(num);
//         break;
//       case "spice":
//         num = spice(num);
//         console.log(num);
//         break;
//       case "bake":
//         num = bake(num);
//         console.log(num);
//         break;
//       case "fillet":
//         num = fillet(num);
//         console.log(num);
//         break;
//     }
//   }
// }
