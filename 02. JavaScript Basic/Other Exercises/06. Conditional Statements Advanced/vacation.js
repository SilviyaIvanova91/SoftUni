function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let place = "";
  let price = 0;
  let location = "";

  if (budget <= 1000) {
    place = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    place = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else {
    place = "Hotel";
    price = budget * 0.9;
    if (season === "Summer") {
      location = "Alaska";
    } else if (season === "Winter") {
      location = "Morocco";
    }
  }
  console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);
