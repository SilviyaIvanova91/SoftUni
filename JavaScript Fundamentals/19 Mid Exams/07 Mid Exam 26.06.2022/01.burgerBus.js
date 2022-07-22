function burgerBus(arr) {
  let numCities = Number(arr.shift());
  let dayProfit = 0;
  let totalProfit = 0;

  for (let i = 1; i <= numCities; i++) {
    let nameCiti = arr.shift();
    let ownerIncome = Number(arr.shift());
    let ownerExpenses = Number(arr.shift());

    if (i % 3 == 0 && i % 5 != 0) {
      ownerExpenses += ownerExpenses / 2;
    }

    if (i % 5 === 0) {
      ownerIncome *= 0.9;
    }
    dayProfit = ownerIncome - ownerExpenses;

    console.log(
      `In ${nameCiti} Burger Bus earned ${dayProfit.toFixed(2)} leva.`
    );
    totalProfit += dayProfit;
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);

burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
