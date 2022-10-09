function toyShop(input) {
  let excursion = Number(input[0]);
  let numberofPuzel = Number(input[1]);
  let dolls = Number(input[2]);
  let bear = Number(input[3]);
  let minions = Number(input[4]);
  let cars = Number(input[5]);
  let allstock =
    numberofPuzel * 2.6 + dolls * 3.0 + bear * 4.1 + minions * 8.2 + cars * 2.0;
  let numberToy = numberofPuzel + dolls + bear + minions + cars;
  if (numberToy >= 50) {
    count = allstock * 0.25;
  } else {
    count = 0;
  }
  let finalPrice = allstock - count;
  let forShop = finalPrice * 0.1;
  let money = finalPrice - forShop;
  let diff = Math.abs(money - excursion);
  if (excursion <= money) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
