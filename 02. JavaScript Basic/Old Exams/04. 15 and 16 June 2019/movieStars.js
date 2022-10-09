function movieStars(input) {
  index = 0;
  let budget = Number(input[index++]);
  let command = input[index++];
  let price = 0;
  let finalBudget = budget;

  while (command !== "ACTION") {
    let name = command;

    if (name.length > 15) {
      price = finalBudget * 0.2;
    } else {
      price = Number(input[index++]);
    }
    finalBudget -= price;
    if (finalBudget <= 0) {
      break;
    }
    command = input[index++];
  }
  let diff = Math.abs(finalBudget);

  if (finalBudget <= 0) {
    console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
  } else {
    console.log(`We are left with ${diff.toFixed(2)} leva.`);
  }
}

movieStars([
  "90000",
  "Christian Bale",
  "70000.50",
  "Leonard DiCaprio",
  "Kevin Spacey",
  "24000.99",
]);
movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);
