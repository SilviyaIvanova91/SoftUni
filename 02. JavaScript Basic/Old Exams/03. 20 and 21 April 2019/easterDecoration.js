function easterDecoration(input) {
  let index = 0;
  let numClient = Number(input[index++]);
  let command = input[index++];

  let basket = 0;
  let wreath = 0;
  let chocolateBunny = 0;
  let avgPrice = 0;
  let allProductsCounter = 0;

  for (let i = 0; i < numClient; i++) {
    while (command !== "Finish") {
      switch (command) {
        case "basket":
          basket++;
          allProductsCounter++;
          break;
        case "wreath":
          wreath++;
          allProductsCounter++;
          break;
        case "chocolate bunny":
          chocolateBunny++;
          allProductsCounter++;
          break;
      }
      command = input[index++];
    }

    let priceBasket = basket * 1.5;
    let priceWreath = wreath * 3.8;
    let priceBunny = chocolateBunny * 7;
    let allPrice = priceBasket + priceBunny + priceWreath;
    let allProducts = basket + wreath + chocolateBunny;
    if (allProductsCounter % 2 === 0) {
      allPrice -= allPrice * 0.2;
    }
    console.log(
      `You purchased ${allProducts} items for ${allPrice.toFixed(2)} leva.`
    );
    avgPrice += allPrice;
    allProductsCounter = 0;

    if (command === "Finish") {
      basket = 0;
      wreath = 0;
      chocolateBunny = 0;
    }
    command = input[index++];
  }
  let finalAvg = avgPrice / numClient;
  console.log(`Average bill per client is: ${finalAvg.toFixed(2)} leva.`);
}

easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
