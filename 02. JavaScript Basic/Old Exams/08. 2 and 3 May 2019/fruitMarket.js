function fruitMarket(input) {
  let priceStr = Number(input[0]);
  let bananasKG = Number(input[1]);
  let orange = Number(input[2]);
  let mal = Number(input[3]);
  let st = Number(input[4]);
  let prMal = priceStr / 2;
  let prOr = prMal - prMal * 0.4;
  let prban = prMal - prMal * 0.8;
  let allbanana = bananasKG * prban;
  let allOrange = orange * prOr;
  let allMal = mal * prMal;
  let allSt = st * priceStr;
  let all = allMal + allOrange + allSt + allbanana;
  console.log(all.toFixed(2));
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);
