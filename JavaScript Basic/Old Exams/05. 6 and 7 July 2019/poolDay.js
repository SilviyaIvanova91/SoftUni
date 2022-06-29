function poolDay(input) {
  let numPeople = Number(input[0]);
  let taxEntry = Number(input[1]);
  let priseShezlong = Number(input[2]);
  let priceCh = Number(input[3]);

  let allTaxEntry = numPeople * taxEntry;
  let allCh = Math.ceil(numPeople / 2);
  let allChPrice = allCh * priceCh;
  let allSh = Math.ceil(numPeople * 0.75);
  let allShPrice = allSh * priseShezlong;
  let all = allTaxEntry + allChPrice + allShPrice;

  console.log(`${all.toFixed(2)} lv.`);
}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);
