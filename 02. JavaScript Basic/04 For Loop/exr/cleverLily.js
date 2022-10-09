function cleverLily(input) {
  let age = Number(input[0]);
  let priceMashine = Number(input[1]);
  let priceToy = Number(input[2]);

  let money = 0;
  let currentMoney = 10;
  let toyCounter = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += currentMoney;
      currentMoney += 10;
      money--;
    } else {
      toyCounter++;
    }
  }

  money += toyCounter * priceToy;
  let diff = Math.abs(money - priceMashine);
  if (money >= priceMashine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);

//-------------------------------------------------
 let index = 0
 let age = Number(input[index])
 index++
 let priceMashine = Number (input[index])
 index++
 let priceToy = Number(input[input])
 index++
