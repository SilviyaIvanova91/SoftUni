function coins(input) {
  let moneyInLv = Number(input[0]);
  let money = Math.floor(moneyInLv * 100);
  let coisinCounter = 0;

  while (money > 0) {
    coisinCounter++;
    if (money >= 200) {
      money -= 200;
      //   coisinCounter++;
    } else if (money >= 100) {
      money -= 100;
      //   coisinCounter++;
    } else if (money >= 50) {
      money -= 50;
      //   coisinCounter++;
    } else if (money >= 20) {
      money -= 20;
      //   coisinCounter++;
    } else if (money >= 10) {
      money -= 10;
      //   coisinCounter++;
    } else if (money >= 05) {
      money -= 5;
      //   coisinCounter++;
    } else if (money >= 2) {
      money -= 2;
      //   coisinCounter++;
    } else {
      money -= 1;
      //   coisinCounter++;
    }
  }
  console.log(coisinCounter);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
