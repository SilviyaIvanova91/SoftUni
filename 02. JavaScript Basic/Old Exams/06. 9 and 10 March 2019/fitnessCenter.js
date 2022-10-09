function fitnessCenter(input) {
  let index = 0;
  let num = Number(input[index++]);
  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let proteinShake = 0;
  let proteinBar = 0;
  let command = input[index++];

  for (let i = 0; i < num; i++) {
    let action = command;
    if (action === "Back") {
      back++;
    } else if (action === "Chest") {
      chest++;
    } else if (action === "Legs") {
      legs++;
    } else if (action === "Abs") {
      abs++;
    } else if (action === "Protein shake") {
      proteinShake++;
    } else if (action === "Protein bar") {
      proteinBar++;
    }
    command = input[index++];
  }

  let percentWorkout = ((back + chest + legs + abs) / num) * 100;
  let percentShop = ((proteinBar + proteinShake) / num) * 100;

  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${percentWorkout.toFixed(2)}% - work out`);
  console.log(`${percentShop.toFixed(2)}% - protein`);
}

fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
fitnessCenter([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
