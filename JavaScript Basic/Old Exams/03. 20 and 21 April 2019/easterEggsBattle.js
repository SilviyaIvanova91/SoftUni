function easterEggsBattle(input) {
  let index = 0;
  let numEgsFirsGamer = Number(input[index++]);
  let numEgsSecondGamer = Number(input[index++]);
  let command = input[index++];

  while (command !== "End of battle") {
    let winner = command;

    if (winner === "one") {
      numEgsSecondGamer--;
    } else if (winner === "two") {
      numEgsFirsGamer--;
    }
    if (numEgsFirsGamer <= 0) {
      break;
    } else if (numEgsSecondGamer <= 0) {
      break;
    }
    command = input[index++];
  }

  if (numEgsFirsGamer <= 0) {
    console.log(
      `Player one is out of eggs. Player two has ${numEgsSecondGamer} eggs left.`
    );
  } else if (numEgsSecondGamer <= 0) {
    console.log(
      `Player two is out of eggs. Player one has ${numEgsFirsGamer} eggs left.`
    );
  } else {
    console.log(`Player one has ${numEgsFirsGamer} eggs left.`);
    console.log(`Player two has ${numEgsSecondGamer} eggs left.`);
  }
}

easterEggsBattle([
  "5",
  "4",
  "one",
  "two",
  "one",
  "two",
  "two",
  "End of battle",
]);
easterEggsBattle(["2", "6", "one", "two", "two"]);
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);
