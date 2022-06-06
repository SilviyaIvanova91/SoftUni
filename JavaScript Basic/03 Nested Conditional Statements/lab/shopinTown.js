function shopInTown(input) {
  let product = input[0];
  let city = input[1];
  let count = Number(input[2]);
  let price = 0;
  if (city === "Sofia") {
    switch (product) {
      case "coffee":
        price = 0.5 * count;
        break;
      case "water":
        price = 0.8 * count;
        break;
      case "beer":
        price = 1.2 * count;
        break;
      case "sweets":
        price = 1.45 * count;
        break;
      case "peanuts":
        price = 1.6 * count;
        break;
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        price = 0.4 * count;
        break;
      case "water":
        price = 0.7 * count;
        break;
      case "beer":
        price = 1.15 * count;
        break;
      case "sweets":
        price = 1.3 * count;
        break;
      case "peanuts":
        price = 1.5 * count;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        price = 0.45 * count;
        break;
      case "water":
        price = 0.7 * count;
        break;
      case "beer":
        price = 1.1 * count;
        break;
      case "sweets":
        price = 1.35 * count;
        break;
      case "peanuts":
        price = 1.55 * count;
        break;
    }
  }
  console.log(price);
}

shopInTown(["coffee", "Varna", "2"]);
shopInTown(["peanuts", "Plovdiv", "1"]);
shopInTown(["beer", "Sofia", "2"]);
shopInTown(["water", "Plovdiv", "2"]);
shopInTown(["sweets", "Sofia", "2.23"]);
