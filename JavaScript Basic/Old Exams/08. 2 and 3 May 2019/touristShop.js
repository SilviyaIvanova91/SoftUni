function touristShop(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let command = input[index++];
  let count = 0;
  let finalPrice = 0;

  while (command !== "Stop") {
    let name = command;
    let price = Number(input[index++]);
    count++;
    if (count % 3 === 0) {
      price = price * 0.5;
    }

    finalPrice += price;
    if (finalPrice > budget) {
      break;
    }
    command = input[index++];
  }
  let diff = Math.abs(finalPrice - budget);
  if (finalPrice > budget) {
    console.log(`You don't have enough money!`);
    console.log(`You need ${diff.toFixed(2)} leva!`);
  } else {
    console.log(
      `You bought ${count} products for ${finalPrice.toFixed(2)} leva.`
    );
  }
}

 touristShop([
   "153.20",
   "Backpack",
   "25.20",
   "Shoes",
   "54",
   "Sunglasses",
   "30",
   "Stop",
 ]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
