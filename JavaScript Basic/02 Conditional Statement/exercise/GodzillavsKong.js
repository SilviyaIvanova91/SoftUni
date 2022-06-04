function godzilavsKong(input) {
  let budget = Number(input[0]);
  let statist = Number(input[1]);
  let priseForClothes = Number(input[2]);
  let decor = budget * 0.1;
  if (statist >= 150) {
    count = priseForClothes * 0.1;
  } else {
    count = 0;
  }
  let countClothes = priseForClothes - count;
  let finalClothes = statist * countClothes;
  let moneyFor = decor + finalClothes;
  let dif = Math.abs(budget - moneyFor);
  if (moneyFor > budget) {
    console.log(`Not enough money! 
    Wingard needs ${dif.toFixed(2)} leva more.`);
  } else if (moneyFor <= budget) {
    console.log(
      `Action!
       Wingard starts filming with ${dif.toFixed(2)} leva left.`
    );
  }
}

godzilavsKong(["20000", "120", "55.5"]);
godzilavsKong(["15437.62", "186", "57.99"]);
godzilavsKong(["9587.88", "222", "55.68"]);
