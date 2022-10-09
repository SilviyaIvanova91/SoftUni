function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let seazon = input[2];
  let numDays = Number(input[3]);

  if (destination === "Dubai") {
    if (seazon === "Summer") {
      price = 40000 * numDays;
    } else if (seazon === "Winter") {
      price = 45000 * numDays;
    }
    price -= price * 0.3;
  } else if (destination === "Sofia") {
    if (seazon === "Summer") {
      price = 12500 * numDays;
    } else if (seazon === "Winter") {
      price = 17000 * numDays;
    }
    price += price * 0.25;
  } else if (destination === "London") {
    if (seazon === "Summer") {
      price = 20250 * numDays;
    } else if (seazon === "Winter") {
      price = 24000 * numDays;
    }
  }
  let diff = Math.abs(budget - price);
  if (budget >= price) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

movieDestination(["400000", "Sofia", "Winter", "20"]);
movieDestination(["1000000", "Dubai", "Summer", "5"]);
movieDestination(["200000", "London", "Summer", "7"]);
