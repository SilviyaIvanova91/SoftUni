function addBags(input) {
  let priceForBag = Number(input[0]);
  let bagsKg = Number(input[1]);
  let days = Number(input[2]);
  let numberBags = Number(input[3]);
  let priceForBagNew = 0;
  let newPrice = 0;

  if (bagsKg > 20) {
    priceForBagNew = priceForBag;
  } else if (bagsKg >= 10 && bagsKg <= 20) {
    priceForBagNew = priceForBag * 0.5;
  } else {
    priceForBagNew = priceForBag * 0.2;
  }

  if (days > 30) {
    newPrice = priceForBagNew + priceForBagNew * 0.1;
  } else if (days <= 30 && days >= 7) {
    newPrice = priceForBagNew + priceForBagNew * 0.15;
  } else {
    newPrice = priceForBagNew + priceForBagNew * 0.4;
  }

  let all = newPrice * numberBags;

  console.log(`The total price of bags is: ${all.toFixed(2)} lv.`);
}

addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
