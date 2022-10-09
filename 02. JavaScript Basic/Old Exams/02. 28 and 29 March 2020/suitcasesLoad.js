function suitcasesLoad(input) {
  let index = 0;
  let capacity = Number(input[index++]);
  let command = input[index++];
  let counter = 0;
  let sum = 0;

  while (command !== "End") {
    let bagade = Number(command);
    sum++;
    if (sum % 3 === 0) {
      bagade += bagade * 0.1;
    }
    capacity -= bagade;
    if (capacity < 0) {
      break;
    }

    counter++;
    command = input[index++];
  }

  if (command === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${counter} suitcases loaded.`);
  } else {
    console.log(`No more space!`);
    console.log(`Statistic: ${counter} suitcases loaded.`);
  }
}

suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
