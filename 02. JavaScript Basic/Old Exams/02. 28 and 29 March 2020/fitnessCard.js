function fitnessCard(input) {
  let sum = Number(input[0]);
  let gender = input[1];
  let age = Number(input[2]);
  let sport = input[3];
  let pice = 0;

  if (gender === "m") {
    switch (sport) {
      case "Gym":
        pice = 42;
        break;
      case "Boxing":
        pice = 41;
        break;
      case "Yoga":
        pice = 45;
        break;
      case "Zumba":
        pice = 34;
        break;
      case "Dances":
        pice = 51;
        break;
      case "Pilates":
        pice = 39;
        break;
    }
  } else {
    switch (sport) {
      case "Gym":
        pice = 35;
        break;
      case "Boxing":
        pice = 37;
        break;
      case "Yoga":
        pice = 42;
        break;
      case "Zumba":
        pice = 31;
        break;
      case "Dances":
        pice = 53;
        break;
      case "Pilates":
        pice = 37;
        break;
    }
  }
  if (age <= 19) {
    pice = pice * 0.8;
  }
  let diff = Math.abs(pice - sum);
  if (pice <= sum) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${diff.toFixed(2)} more.`
    );
  }
}

fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"]);
