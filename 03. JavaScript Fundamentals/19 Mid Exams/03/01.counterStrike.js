function counterStrike(input) {
  let initalEnergy = input.shift();
  let command = input.shift();
  let winBattle = 0;

  while (command != "End of battle") {
    let distance = Number(command);

    if (initalEnergy < distance) {
      console.log(
        `Not enough energy! Game ends with ${winBattle} won battles and ${initalEnergy} energy`
      );
      initalEnergy -= distance;
      break;
    }
    initalEnergy -= distance;
    winBattle++;
    if (winBattle % 3 == 0) {
      initalEnergy += winBattle;
    }
    command = input.shift();
  }
  if (initalEnergy >= 0) {
    console.log(`Won battles: ${winBattle}. Energy left: ${initalEnergy}`);
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);

// function counterStrike(input) {
//   let initalEnergy = input.shift();
//   let command = input.shift();
//   let winBattle = 0;

//   while (command != "End of battle") {
//     let distance = Number(command);
//       initalEnergy -= distance;
//       if (initalEnergy < 0) {
//           initalEnergy = 0
//           break;
//       }
//     winBattle++;
//     if (winBattle % 3 == 0) {
//       initalEnergy += winBattle;
//     }
//     command = input.shift();
//   }
//   if (initalEnergy > 0) {
//     console.log(`Won battles: ${winBattle}. Energy left: ${initalEnergy}`);
//   } else {
//     console.log(
//       `Not enough energy! Game ends with ${winBattle} won battles and ${initalEnergy} energy`
//     );
//   }
// }
