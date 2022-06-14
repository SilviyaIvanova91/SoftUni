function braceletStand(input) {
  let moneyForDay = Number(input[0]);
  let moneyWin = Number(input[1]);
  let moneyOut = Number(input[2]);
  let pricePresent = Number(input[3]);

  let saveMoney = moneyForDay * 5;
  let winForPeriod = moneyWin * 5;
  let allSave = saveMoney + winForPeriod;
  let money = allSave - moneyOut;
  let diff = Math.abs(pricePresent - money);

  if (money >= pricePresent) {
    console.log(
      `Profit: ${money.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
  }
}

braceletStand(["5.12", "32.05", "15", "150"]);
braceletStand(["2.10", "17.50", "20.20", "148.50"]);
braceletStand(["15.20", "200.00", "7.30", "1500.12"]);
