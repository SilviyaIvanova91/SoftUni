function tournamentofChristmas(input) {
  let index = 0;
  let day = Number(input[index++]);

  let dayWin = 0;
  let dayLose = 0;
  let win = 0;
  let lose = 0;
  let money = 0;
  let moneyForDay = 0;

  for (let c = 1; c <= day; c++) {
    let command = input[index++];
    while (command !== "Finish") {
      let sport = command;
      let type = input[index++];
      if (type === "win") {
        dayWin++;
        moneyForDay += 20;
      } else if (type === "lose") {
        dayLose++;
      }
      command = input[index++];
    }
    if (dayWin > dayLose) {
      win++;
      money += moneyForDay + moneyForDay * 0.1;
    } else {
      lose++;
      money += moneyForDay;
    }
    dayWin = 0;
    dayLose = 0;
    moneyForDay = 0;
  }

  if (win > lose) {
    money += money * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${money.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${money.toFixed(2)}`
    );
  }
}

tournamentofChristmas([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
tournamentofChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
