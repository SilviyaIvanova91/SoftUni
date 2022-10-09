function easterLunch(input) {
  let pricebrashnoKG = Number(input[0]);
  let brasnoKG = Number(input[1]);
  let sugarKG = Number(input[2]);
  let numerEgs = Number(input[3]);
  let packMaq = Number(input[4]);

  let allBrashno = pricebrashnoKG * brasnoKG;
  let priceSugar = pricebrashnoKG - pricebrashnoKG * 0.25;
  let allSugar = priceSugar * sugarKG;
  let priceEg = pricebrashnoKG + pricebrashnoKG * 0.1;
  let allEgs = numerEgs * priceEg;
  let priceMaq = priceSugar - priceSugar * 0.8;
  let allMaq = packMaq * priceMaq;
  let all = allBrashno + allEgs + allMaq + allSugar;
  console.log(all.toFixed(2));
}

easterLunch(["50", "10", "3.5", "6", "1"]);
easterLunch(["63.44", "3.57", "6.35", "8", "2"]);
