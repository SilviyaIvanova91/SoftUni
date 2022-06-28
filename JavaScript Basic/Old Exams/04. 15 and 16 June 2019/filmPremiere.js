function filmPremiere(input) {
  let projection = input[0];
  let pack = input[1];
  let numberBillets = Number(input[2]);
  let price = 0;

  if (projection === "John Wick") {
    if (pack === "Drink") {
      price = 12 * numberBillets;
    } else if (pack === "Popcorn") {
      price = 15 * numberBillets;
    } else if (pack === "Menu") {
      price = 19 * numberBillets;
    }
  } else if (projection === "Star Wars") {
    if (pack === "Drink") {
      price = 18 * numberBillets;
    } else if (pack === "Popcorn") {
      price = 25 * numberBillets;
    } else if (pack === "Menu") {
      price = 30 * numberBillets;
    }
    if (numberBillets >= 4) {
      price -= price * 0.3;
    }
  } else if (projection === "Jumanji") {
    if (pack === "Drink") {
      price = 9 * numberBillets;
    } else if (pack === "Popcorn") {
      price = 11 * numberBillets;
    } else if (pack === "Menu") {
      price = 14 * numberBillets;
    }
    if (numberBillets === 2) {
      price -= price * 0.15;
    }
  }
  console.log(`Your bill is ${price.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);
