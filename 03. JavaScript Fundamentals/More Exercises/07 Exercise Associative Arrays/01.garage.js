function garage(input) {
  let res = {};
  for (let line of input) {
    let [numGarage, infoGarage] = line.split(" - ");
    if (!res.hasOwnProperty(numGarage)) {
      res[numGarage] = [];
    }
    res[numGarage].push(infoGarage);
  }
  let finalgarage = "";
  let sorted = Object.entries(res).sort((a, b) => a[0] - b[0]);
  for (let [garage, cars] of sorted) {
    console.log(`Garage № ${garage}`);
    let newCar = Object.entries(cars);
    for (let everyCars of Object.values(cars)) {
      let infoCar = everyCars.split(", ");
      let type = everyCars.split(": ").join(" - ");
      console.log(`--- ${type}`);
    }
  }
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
garage([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
]);
