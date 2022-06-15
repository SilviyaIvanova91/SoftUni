function christmasGifts(input) {
  let index = 0;
  let adult = 0;
  let kids = 0;
  let command = input[index++];

  while (command !== "Christmas") {
    let age = Number(command);

    if (age <= 16) {
      kids++;
    } else if (age > 16) {
      adult++;
    }
    command = input[index++];
  }
  let moneyForToys = kids * 5;
  let moneyFrSweaters = adult * 15;
  console.log(`Number of adults: ${adult}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${moneyForToys}`);
  console.log(`Money for sweaters: ${moneyFrSweaters}`);
}

christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);
christmasGifts(["16", "16", "16", "16", "16", "Christmas"]);
christmasGifts(["18", "20", "48", "45", "56", "37", "12", "14", "Christmas"]);
