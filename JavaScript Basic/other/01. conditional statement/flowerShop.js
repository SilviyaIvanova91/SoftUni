function flowerShop(input) {
  let magnolii = Number(input[0]);
  let zumbul = Number(input[1]);
  let roses = Number(input[2]);
  let cactus = Number(input[3]);
  let price = Number(input[4]);
  let priceM = 3.25 * magnolii;
  let priceZ = 4 * zumbul;
  let priceR = 3.5 * roses;
  let priceC = 8 * cactus;
  let allPrice = priceM + priceZ + priceR + priceC;
  let forPrecent = allPrice - allPrice * 0.05;
  let diff = Math.abs(price - forPrecent);
  if (forPrecent >= price) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);
