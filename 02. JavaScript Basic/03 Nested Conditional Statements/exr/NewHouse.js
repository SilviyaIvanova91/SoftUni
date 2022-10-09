function newHouse(input) {
  let typeFlower = input[0];
  let numberFlower = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  switch (typeFlower) {
    case "Roses":
      price = numberFlower * 5;
      if (numberFlower > 80) {
        price = price - price * 0.1;
      }
      break;
    case "Dahlias":
      price = numberFlower * 3.8;
      if (numberFlower > 90) {
        price = price - price * 0.15;
      }
      break;
    case "Tulips":
      price = numberFlower * 2.8;
      if (numberFlower > 80) {
        price = price - price * 0.15;
      }
      break;
    case "Narcissus":
      price = numberFlower * 3.0;
      if (numberFlower < 120) {
        price = price + price * 0.15;
      }
      break;
    case "Gladiolus":
      price = numberFlower * 2.5;
      if (numberFlower < 80) {
        price = price + price * 0.2;
      }
      break;
  }
  let finalSum = Math.abs(budget - price);
  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${numberFlower} ${typeFlower} and ${finalSum.toFixed(
        2
      )} leva left.`
    );
  }
  if (budget < price) {
    console.log(`Not enough money, you need ${finalSum.toFixed(2)} leva more.`);
  }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
