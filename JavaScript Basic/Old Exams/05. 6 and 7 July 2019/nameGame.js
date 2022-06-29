function nameGame(input) {
  index = 0;
  let command = input[index++];
  let maxPoint = Number.MIN_SAFE_INTEGER;
  let points = 0;
  let winnerNmae = "";

  while (command !== "Stop") {
    points = 0;
    for (let i = 0; i < command.length; i++) {
      let number = Number(input[index++]);
      let letter = command[i];
      let symbol = letter.charCodeAt(0);
      if (number === symbol) {
        points += 10;
      } else {
        points += 2;
      }
    }
    if (points >= maxPoint) {
      maxPoint = points;
      winnerNmae = command;
    }
    command = input[index++];
  }
  console.log(`The winner is ${winnerNmae} with ${maxPoint} points!`);
}

nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame([
  "Pesho",
  "124",
  "34",
  "111",
  "97",
  "99",
  "Gosho",
  "98",
  "124",
  "88",
  "76",
  "18",
  "Stop",
]);
