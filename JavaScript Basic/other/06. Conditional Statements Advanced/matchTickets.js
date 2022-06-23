function matchTickets(input) {
  let budget = Number(input[0]);
  let categories = input[1];
  let numGroups = Number(input[2]);
  let transport = 0;
  let all = 0;
  if (numGroups <= 4) {
    transport = budget * 0.75;
  } else if (numGroups >= 5 && numGroups <= 9) {
    transport = budget * 0.6;
  } else if (numGroups >= 10 && numGroups <= 24) {
    transport = budget * 0.5;
  } else if (numGroups >= 25 && numGroups <= 49) {
    transport = budget * 0.4;
  } else {
    transport = budget * 0.25;
  }

  if (categories === "VIP") {
    all = 499.99 * numGroups;
  } else if (categories === "Normal") {
    all = 249.99 * numGroups;
  }

  let moneyNeeded = all + transport;
  let diff = Math.abs(budget - moneyNeeded);

  if (moneyNeeded <= budget) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);
