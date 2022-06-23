function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let clas = "";
  let price = 0;
  let type = "";

  if (budget <= 100) {
    clas = "Economy class";
    if (season === "Summer") {
      type = "Cabrio";
      price = budget * 0.35;
    } else if (season === "Winter") {
      type = "Jeep";
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    clas = "Compact class";
    if (season === "Summer") {
      type = "Cabrio";
      price = budget * 0.45;
    } else if (season === "Winter") {
      type = "Jeep";
      price = budget * 0.8;
    }
  } else {
    clas = "Luxury class";
    if (season === "Summer" || season === "Winter") {
      type = "Jeep";
      price = budget * 0.9;
    }
  }
  console.log(clas);
  console.log(`${type} - ${price.toFixed(2)}`);
}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);
