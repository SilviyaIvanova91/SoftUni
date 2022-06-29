function footballTournament(input) {
  let index = 0;
  let name = input[index++];
  let numGame = Number(input[index++]);
  let command = input[index++];
  let point = 0;
  let W = 0;
  let D = 0;
  let L = 0;
  let counter = 0;

  while (command !== numGame) {
    let result = command;
    counter++;
    if (numGame === 0) {
      break;
    }
    if (counter > numGame) {
      break;
    }

    if (result === "W") {
      point += 3;
      W++;
    } else if (result === "D") {
      point += 1;
      D++;
    } else if (result === "L") {
      point += 0;
      L++;
    }

    command = input[index++];
  }

  let winRate = (W / numGame) * 100;
  if (numGame === 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(`${name} has won ${point} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${W}`);
    console.log(`## D: ${D}`);
    console.log(`## L: ${L}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
  }
}

footballTournament([
  "Liverpool",
  "10",
  "W",
  "D",
  "D",
  "W",
  "L",
  "W",
  "D",
  "D",
  "W",
  "W",
]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);
