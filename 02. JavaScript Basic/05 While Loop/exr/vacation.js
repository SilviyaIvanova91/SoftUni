function vacation(input) {
  let index = 0;
  let needMoney = Number(input[index++]);
  let money = Number(input[index++]);
  let spendCounter = 0;
  let dayCounter = 0;
  let isPossibleSavetheMoney = true;

  while (needMoney > money) {
    let type = input[index++];
    let tempMoney = Number(input[index++]);
    dayCounter++;

    if (type === "save") {
      money += tempMoney;
      spendCounter = 0;
    } else {
      money -= tempMoney;
      spendCounter++;
      if (money < 0) {
        money = 0;
      }
    }

    if (spendCounter === 5) {
      console.log(`You can't save the money.`);
      console.log(dayCounter);
      isPossibleSavetheMoney = false;
      break;
    }
  }

  if (isPossibleSavetheMoney) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
