function tennisRanklist(input) {
  let index = 0;
  let countT = Number(input[index]);
  index++;
  let startPoints = Number(input[index]);
  index++;
  let points = 0;
  let countWin = 0;

  for (let i = 0; i < countT; i++) {
    let result = input[index];
    index++;

    switch (result) {
      case "W":
        points += 2000;
        countWin++;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
  }
  let totalPoints = points + startPoints;
  let avgPoints = Math.floor(points / countT);
  let winPercentage = (countWin / countT) * 100;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(`${winPercentage.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
