function autoEngineeringCompany(arr) {
  let carRegistry = {};

  arr.forEach((line) => {
    let [brand, model, qty] = line.split(" | ");

    if (!carRegistry.hasOwnProperty(brand)) {
      carRegistry[brand] = {};
    }

    if (!carRegistry[brand].hasOwnProperty(model)) {
      carRegistry[brand][model] = 0;
    }

    carRegistry[brand][model] += Number(qty);
  });

  for (const brand in carRegistry) {
    console.log(brand);
    Object.entries(carRegistry[brand]).forEach((el) =>
      console.log(`###${el[0]} -> ${el[1]}`)
    );
  }
}

autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
