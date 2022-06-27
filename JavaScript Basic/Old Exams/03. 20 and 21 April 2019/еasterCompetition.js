function еasterCompetition(input) {
  let index = 0;
  let num = Number(input[index++]);
  let command = input[index++];
  let points = 0;
  let localPoints = 0;
  let bestChef = "";
  let bestScore = 0;

  for (let i = 0; i < num; i++) {
    points = 0;
    let chef = command;
    command = input[index++];

    while (command !== "Stop") {
      localPoints = Number(command);
      points += localPoints;
      command = input[index++];
    }

    console.log(`${chef} has ${points} points.`);

    if (points > bestScore) {
      bestScore = points;
      bestChef = chef;
      console.log(`${chef} is the new number 1!`);
    }
    command = input[index++];
  }
  console.log(`${bestChef} won competition with ${bestScore} points!`);
}

еasterCompetition([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
еasterCompetition([
  "2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop",
]);
