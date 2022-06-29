function PCGameShop(input) {
  index = 0;
  let saleGame = Number(input[index++]);
  let command = input[index++];
  let Hearthstone = 0;
  let Fornite = 0;
  let Overwatch = 0;
  let Others = 0;
  let counter = 0;

  while (command !== saleGame) {
    let name = command;
    counter++;
    if (name === "Hearthstone") {
      Hearthstone++;
    } else if (name === "Fornite") {
      Fornite++;
    } else if (name === "Overwatch") {
      Overwatch++;
    } else {
      Others++;
    }
    command = input[index++];
    if (counter === saleGame) {
      break;
    }
  }
  let percentH = (Hearthstone / saleGame) * 100;
  let percentF = (Fornite / saleGame) * 100;
  let percentOv = (Overwatch / saleGame) * 100;
  let percentOther = (Others / saleGame) * 100;
  console.log(`Hearthstone - ${percentH.toFixed(2)}%`);
  console.log(`Fornite - ${percentF.toFixed(2)}%`);
  console.log(`Overwatch - ${percentOv.toFixed(2)}%`);
  console.log(`Others - ${percentOther.toFixed(2)}%`);
}

PCGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
PCGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
