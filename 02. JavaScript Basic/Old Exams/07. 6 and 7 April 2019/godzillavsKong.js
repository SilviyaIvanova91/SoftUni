function godzillavsKong(input) {
  let budget = Number(input[0]);
  let numStat = Number(input[1]);
  let priceClothes = Number(input[2]);

  let allClothes = numStat * priceClothes;
  let decor = budget * 0.1;

  if (numStat > 150) {
    allClothes -= allClothes * 0.1;
  }

  let money = allClothes + decor;
  let diff = Math.abs(budget - money);

  if (money > budget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}

godzillavsKong(["20000", "120", "55.5"]);
godzillavsKong(["15437.62", "186", "57.99"]);
godzillavsKong(["9587.88", "222", "55.68"]);
