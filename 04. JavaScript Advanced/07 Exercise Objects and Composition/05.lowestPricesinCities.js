function lowestPricesinCities(input) {
  let obj = {};
  for (let line of input) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    if (!obj.hasOwnProperty(product)) {
      obj[product] = {
        price,
        town,
      };
    } else {
      if (obj[product].price > price) {
        obj[product].price = price;
        obj[product].town = town;
      }
    }
  }
  for (let [product, info] of Object.entries(obj)) {
    console.log(`${product} -> ${info.price} (${info.town})`);
  }
}

lowestPricesinCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
