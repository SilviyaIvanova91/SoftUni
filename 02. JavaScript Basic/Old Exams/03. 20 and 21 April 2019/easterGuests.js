function easterGuests(input) {
  let numGuest = Number(input[0]);
  let budget = Number(input[1]);

  let numKoz = Math.ceil(numGuest / 3);
  let priceKoz = numKoz * 4.0;
  let numEgg = numGuest * 2;
  let priceEgg = numEgg * 0.45;
  let needMoney = priceKoz + priceEgg;

  let diff = Math.abs(budget - needMoney);

  if (budget >= needMoney) {
    console.log(`Lyubo bought ${numKoz} Easter bread and ${numEgg} eggs.`);
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

easterGuests(["10", "35"]);
easterGuests(["9", "12"]);
