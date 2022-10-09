function easterEggs(input) {
  let index = 0;
  let numberColorEg = Number(input[index++]);
  let redEgg = 0;
  let orangeEgg = 0;
  let blueEgg = 0;
  let greenEgg = 0;

  for (let i = 1; i <= numberColorEg; i++) {
    let colour = input[index++];
    switch (colour) {
      case "red":
        redEgg++;
        break;
      case "orange":
        orangeEgg++;
        break;
      case "blue":
        blueEgg++;
        break;
      case "green":
        greenEgg++;
        break;
    }
  }

  let maxNumber = redEgg;
  let maxColour = "red";
  if (orangeEgg > maxNumber) {
    maxColour = "orange";
    maxNumber = orangeEgg;
  }
  if (blueEgg > maxNumber) {
    maxColour = "blue";
    maxNumber = blueEgg;
  }
  if (greenEgg > maxNumber) {
    maxColour = "green";
    maxNumber = greenEgg;
  }

  console.log(`Red eggs: ${redEgg}`);
  console.log(`Orange eggs: ${orangeEgg}`);
  console.log(`Blue eggs: ${blueEgg}`);
  console.log(`Green eggs: ${greenEgg}`);
  console.log(`Max eggs: ${maxNumber} -> ${maxColour}`);
}

easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
