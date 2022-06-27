function easterParty(input) {
  let numGest = Number(input[0]);
  let priceForPerson = Number(input[1]);
  let budget = Number(input[2]);
  let cake = budget * 0.1;

  if (numGest >= 10 && numGest <= 15) {
    priceForPerson -= priceForPerson * 0.15;
  } else if (numGest > 15 && numGest <= 20) {
    priceForPerson -= priceForPerson * 0.2;
  } else if (numGest > 20) {
    priceForPerson -= priceForPerson * 0.25;
  } else {
    priceForPerson = priceForPerson;
  }

  let priceForGest = numGest * priceForPerson;
  let needMoney = priceForGest + cake;
  let diff = Math.abs(needMoney - budget);

  if (budget >= needMoney) {
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
}

easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);
