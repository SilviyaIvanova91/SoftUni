function flowers(input) {
  let numHr = Number(input[0]);
  let numRos = Number(input[1]);
  let numLal = Number(input[2]);
  let season = input[3];
  let day = input[4];
  let price = 0;
  let priceHr = 0;
  let priceRos = 0;
  let priceLal = 0;

  if (season === "Spring" || season === "Summer") {
    priceHr = 2.0 * numHr;
    priceLal = 2.5 * numLal;
    priceRos = 4.1 * numRos;
    price = priceHr + priceLal + priceRos;
  } else if (season === "Autumn" || season === "Winter") {
    priceHr = 3.75 * numHr;
    priceLal = 4.15 * numLal;
    priceRos = 4.5 * numRos;
    price = priceHr + priceLal + priceRos;
  }
  if (day === "Y") {
    price += price * 0.15;
  }
  if (numLal > 7 && season === "Spring") {
    price -= price * 0.05;
  }
  if (numRos >= 10 && season === "Winter") {
    price -= price * 0.1;
  }
  if (numHr + numRos + numLal > 20) {
    price -= price * 0.2;
  }
  price += 2;
  console.log(price.toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
