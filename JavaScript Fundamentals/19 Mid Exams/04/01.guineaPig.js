function guineaPig(arr) {
  let foodQuantity = arr.shift() * 1000;
  let hayQuantity = arr.shift() * 1000;
  let coverQuantity = arr.shift() * 1000;
  let guinieKg = arr.shift() * 1000;
  let counter = 1;
  let isOver = false;
  while (counter <= 30) {
    foodQuantity -= 300;
    if (counter % 2 == 0) {
      let neededHay = foodQuantity * 0.05;
      hayQuantity -= neededHay;
    }
    if (counter % 3 == 0) {
      let neededCover = guinieKg / 3;
      coverQuantity -= neededCover;
    }
    if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
      isOver = true;
      break;
    }
    counter++;
  }
  if (isOver) {
    console.log(`Merry must go to the pet store!`);
  } else {
    let food = foodQuantity / 1000;
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(
        foodQuantity / 1000
      ).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(
        coverQuantity / 1000
      ).toFixed(2)}.`
    );
  }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
