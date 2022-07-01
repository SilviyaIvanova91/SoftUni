function cinemaVoucher(input) {
  let index = 0;
  let vaucher = Number(input[index++]);
  let command = input[index++];
  let points = 0;
  let other = 0;
  let bilets = 0;

  while (command !== "End") {
    let bought = command;
    points = 0;
    if (bought.length <= 8) {
      points += bought.charCodeAt(0);
    } else {
      for (let i = 0; i < 2; i++) {
        let letter = bought[i];
        let code = letter.charCodeAt(0);
        points += code;
      }
    }
    vaucher -= points;
    if (vaucher < 0) {
      break;
    }
    if (bought.length <= 8) {
      other++;
    } else {
      bilets++;
    }
    command = input[index++];
  }
  console.log(bilets);
  console.log(other);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
