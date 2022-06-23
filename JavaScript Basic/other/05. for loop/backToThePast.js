function backToThePast(input) {
  let money = Number(input[0]);
  let year = Number(input[1]);
  let count = 0;

  for (let i = 1800; i <= year; i++) {
    if (i % 2 === 0) {
      money -= 12000;
    } else {
      money -= 12000 + 50 * (18 + (i - 1800));
    }
  }
  let allmoney = Math.abs(money);
  if (money >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${allmoney.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${allmoney.toFixed(2)} dollars to survive.`);
  }
}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);
