function tennisRanklist(input) {
  let index = 0;
  let numTournis = Number(input[index++]);
  let startpoints = Number(input[index++]);
  let finalPoints = 0;
  let command = input[index++];
  let W = 0;

  for (let i = 0; i < numTournis; i++) {
    let etap = command;
    if (etap === "W") {
      finalPoints += 2000;
      W++;
    } else if (etap === "F") {
      finalPoints += 1200;
    } else if (etap === "SF") {
      finalPoints += 720;
    }
    command = input[index++];
  }
  let avg = Math.floor(finalPoints / numTournis);
  let percent = (W / numTournis) * 100;

  console.log(`Final points: ${finalPoints + startpoints}`);
  console.log(`Average points: ${avg}`);
  console.log(`${percent.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
