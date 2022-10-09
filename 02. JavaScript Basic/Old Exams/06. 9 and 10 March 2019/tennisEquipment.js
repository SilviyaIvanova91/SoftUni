function tennisEquipment(input) {
  let priceRacket = Number(input[0]);
  let numRacket = Number(input[1]);
  let numShoes = Number(input[2]);
  let priceShoe = priceRacket / 6;
  let allPrice = priceRacket * numRacket + numShoes * priceShoe;
  let allOther = allPrice * 0.2;
  let all = allPrice + allOther;
  let Dj = Math.floor(all / 8);
  let sponsors = Math.ceil((all * 7) / 8);

  console.log(`Price to be paid by Djokovic ${Dj}`);
  console.log(`Price to be paid by sponsors ${sponsors}`);
}

tennisEquipment(["850", "4", "2"]);
tennisEquipment(["386", "7", "4"]);
