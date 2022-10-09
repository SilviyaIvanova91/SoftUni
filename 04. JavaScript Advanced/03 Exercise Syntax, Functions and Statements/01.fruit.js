function fruit(type, grams, priseInKilos) {
  let kilograms = grams / 1000;
  let allPrice = kilograms * priseInKilos;
  console.log(
    `I need $${allPrice.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${type}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
