function footballSouvenirs(input) {
  let team = input[0];
  let souvenir = input[1];
  let numBuySouvenir = Number(input[2]);
  let price = 0;

  if (team === "Argentina") {
    if (souvenir === "flags") {
      price = numBuySouvenir * 3.25;
    } else if (souvenir === "caps") {
      price = numBuySouvenir * 7.2;
    } else if (souvenir === "posters") {
      price = numBuySouvenir * 5.1;
    } else if (souvenir === "stickers") {
      price = numBuySouvenir * 1.25;
    }
  } else if (team === "Brazil") {
    if (souvenir === "flags") {
      price = numBuySouvenir * 4.2;
    } else if (souvenir === "caps") {
      price = numBuySouvenir * 8.5;
    } else if (souvenir === "posters") {
      price = numBuySouvenir * 5.35;
    } else if (souvenir === "stickers") {
      price = numBuySouvenir * 1.2;
    }
  } else if (team === "Croatia") {
    if (souvenir === "flags") {
      price = numBuySouvenir * 2.75;
    } else if (souvenir === "caps") {
      price = numBuySouvenir * 6.9;
    } else if (souvenir === "posters") {
      price = numBuySouvenir * 4.95;
    } else if (souvenir === "stickers") {
      price = numBuySouvenir * 1.1;
    }
  } else if (team === "Denmark") {
    if (souvenir === "flags") {
      price = numBuySouvenir * 3.1;
    } else if (souvenir === "caps") {
      price = numBuySouvenir * 6.5;
    } else if (souvenir === "posters") {
      price = numBuySouvenir * 4.8;
    } else if (souvenir === "stickers") {
      price = numBuySouvenir * 0.9;
    }
  }
  if (
    team !== "Argentina" &&
    team !== "Brazil" &&
    team !== "Croatia" &&
    team !== "Denmark"
  ) {
    console.log(`Invalid country!`);
  } else if (
    souvenir !== "flags" &&
    souvenir !== "caps" &&
    souvenir !== "posters" &&
    souvenir !== "stickers"
  ) {
    console.log(`Invalid stock!`);
  } else {
    console.log(
      `Pepi bought ${numBuySouvenir} ${souvenir} of ${team} for ${price.toFixed(
        2
      )} lv.`
    );
  }
}

footballSouvenirs(["Brazil", "stickers", "5"]);
footballSouvenirs(["Denmark", "caps", "8"]);
footballSouvenirs(["USA", "caps", "18"]);
footballSouvenirs(["Croatia", "flags", "13"]);
footballSouvenirs(["Argentina", "shirts", "35"]);
