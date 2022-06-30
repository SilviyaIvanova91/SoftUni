function gameNumberWars(input) {
  let index = 0;
  let firstName = input[index++];
  let secondName = input[index++];
  let command = input[index++];
  let firstcount = 0;
  let secondcount = 0;
  let lastfirstCard = 0;
  let lastsecondCard = 0;
  let firstCard = 0;
  let secondCard = 0;

  while (command !== "End of game") {
    let firstCard = Number(command);
    let secondCard = Number(input[index++]);
    if (firstCard > secondCard) {
      firstcount += firstCard - secondCard;
    } else if (secondCard > firstCard) {
      secondcount += secondCard - firstCard;
    } else if (firstCard === secondCard) {
      lastfirstCard = Number(input[index++]);
      lastsecondCard = Number(input[index++]);
      break;
    }
    command = input[index++];
  }

  if ((firstCard === secondCard) & (command !== "End of game")) {
    console.log(`Number wars!`);
    if (lastfirstCard > lastsecondCard) {
      console.log(`${firstName} is winner with ${firstcount} points`);
    } else if (lastfirstCard < lastsecondCard) {
      console.log(`${secondName} is winner with ${secondcount} points`);
    }
  } else if (command === "End of game") {
    console.log(`${firstName} has ${firstcount} points`);
    console.log(`${secondName} has ${secondcount} points`);
  }
}

gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNumberWars([
  "Elena",
  "Simeon",
  "6",
  "3",
  "2",
  "5",
  "8",
  "9",
  "End of game",
]);
gameNumberWars([
  "Aleks",
  "Georgi",
  "4",
  "5",
  "3",
  "2",
  "4",
  "3",
  "4",
  "4",
  "5",
  "2",
]);
