function paintingEggs(input) {
  let type = input[0];
  let colour = input[1];
  let num = Number(input[2]);
  let price = 0;

  if (type === "Large") {
    if (colour === "Red") {
      price = num * 16;
    } else if (colour === "Green") {
      price = num * 12;
    } else if (colour === "Yellow") {
      price = num * 9;
    }
  } else if (type === "Medium") {
    if (colour === "Red") {
      price = num * 13;
    } else if (colour === "Green") {
      price = num * 9;
    } else if (colour === "Yellow") {
      price = num * 7;
    }
  } else if (type === "Small") {
    if (colour === "Red") {
      price = num * 9;
    } else if (colour === "Green") {
      price = num * 8;
    } else if (colour === "Yellow") {
      price = num * 5;
    }
  }
  let finalPrice = price - price * 0.35;
  console.log(`${finalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"]);
