function famiyTrip(input) {
  let budget = Number(input[0]);
  let numNights = Number(input[1]);
  let priceForNight = Number(input[2]);
  let percentOther = Number(input[3]);
  let price = 0;
  let other = (budget * percentOther) / 100;
  let finalPrice = 0;

  if (numNights > 7) {
    price = priceForNight - priceForNight * 0.05;
    finalPrice = price * numNights + other;
  } else {
    finalPrice = priceForNight * numNights + other;
  }

  let diff = Math.abs(budget - finalPrice);
  if (budget >= finalPrice) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}

famiyTrip(["800.50", "8", "100", "2"]);
famiyTrip(["500", "7", "66", "15"]);
