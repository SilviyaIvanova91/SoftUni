function club(input) {
  let index = 0;
  let finalWin = Number(input[index++]);
  let command = input[index++];
  let newPrice = 0;
  let price = 0;

  while (command !== "Party!") {
    let name = command;
    let numCoctails = Number(input[index++]);
    price = name.length;
    price = price * numCoctails;

    if (price % 2 !== 0) {
      price -= price * 0.25;
    }

    newPrice += price;

    if (newPrice >= finalWin) {
      break;
    }
    command = input[index++];
  }
  let diff = Math.abs(finalWin - newPrice);

  if (command === "Party!") {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
  } else {
    console.log(`Target acquired.`);
  }
  console.log(`Club income - ${newPrice.toFixed(2)} leva.`);
}

club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
