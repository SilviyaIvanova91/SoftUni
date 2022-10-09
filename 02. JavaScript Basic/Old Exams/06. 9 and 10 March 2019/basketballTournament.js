function basketballTournament(input) {
  index = 0;
  let command = input[index++];
  let counter = 0;
  let firstPoints = 0;
  let secondPoints = 0;
  let win = 0;
  let lost = 0;
  let winall = 0;
  let lostall = 0;
  let counterall = 0;

  while (command !== "End of tournaments") {
    let name = command;
    let n = Number(input[index++]);
    counter = 0;

    while (counter < n) {
      counter++;
      counterall++;
      firstPoints = Number(input[index++]);
      secondPoints = Number(input[index++]);
      let point = Math.abs(firstPoints - secondPoints);
      if (firstPoints > secondPoints) {
        win++;
        winall++;
        console.log(
          `Game ${counter} of tournament ${name}: win with ${point} points.`
        );
      } else if (firstPoints < secondPoints) {
        lost++;
        lostall++;
        console.log(
          `Game ${counter} of tournament ${name}: lost with ${point} points.`
        );
      }
    }
    command = input[index++];
    if (command === "End of tournaments") {
      let percentWin = (winall / counterall) * 100;
      let persentLost = (lostall / counterall) * 100;
      console.log(`${percentWin.toFixed(2)}% matches win`);
      console.log(`${persentLost.toFixed(2)}% matches lost`);
    }
  }
}

basketballTournament([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
basketballTournament([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);
