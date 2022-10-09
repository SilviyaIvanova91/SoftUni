function christmasPreparation(input) {
  let numRols = Number(input[0]);
  let numPlate = Number(input[1]);
  let stickL = Number(input[2]);
  let percent = Number(input[3]);

  let priceRols = numRols * 5.8;
  let pricePlate = numPlate * 7.2;
  let priceTick = stickL * 1.2;
  let priceAll = pricePlate + priceRols + priceTick;
  let withPercent = priceAll - (priceAll * percent) / 100;
  console.log(withPercent.toFixed(3));
}

christmasPreparation(["2", "3", "2.5", "25"]);
christmasPreparation(["4", "2", "5", "13"]);
christmasPreparation(["7", "8", "0.5", "45"]);
