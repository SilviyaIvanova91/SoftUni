function vehicleCatalogue(input) {
  let line = input.shift();
  let listOfVechicles = {};
  let counterCar = 0;
  let allHousepowerCar = 0;
  let counterTruck = 0;
  let allHousepowerTruck = 0;

  while (line != "End") {
    let [type, model, color, horsepower] = line.split(" ");
    if (type == "car") {
      type = "Car";
    } else if (type == "truck") {
      type = "Truck";
    }
    if (!listOfVechicles.hasOwnProperty(model)) {
      listOfVechicles[model] = {
        type,
        color,
        horsepower,
      };
    }

    if (type == "Car") {
      counterCar++;
      allHousepowerCar += Number(horsepower);
    } else if (type == "Truck") {
      counterTruck++;
      allHousepowerTruck += Number(horsepower);
    }
    line = input.shift();
  }
  line = input.shift();
  while (line != "Close the Catalogue") {
    for (let [model, values] of Object.entries(listOfVechicles)) {
      if (model == line) {
        console.log(`Type: ${values.type}`);
        console.log(`Model: ${model}`);
        console.log(`Color: ${values.color}`);
        console.log(`Horsepower: ${values.horsepower}`);
      }
    }
    line = input.shift();
  }
  let avgCar = 0;
  if (counterCar != 0) {
    avgCar = allHousepowerCar / counterCar;
  }
  console.log(`Cars have average horsepower of: ${avgCar.toFixed(2)}.`);

  let avgTruck = 0;
  if (counterTruck != 0) {
    avgCar = allHousepowerTruck / counterTruck;
  }
  console.log(`Trucks have average horsepower of: ${avgTruck.toFixed(2)}.`);
}

vehicleCatalogue([
  "truck Man red 200",
  "truck Mercedes blue 300",
  "car Ford green 120",
  "car Ferrari red 550",
  "car Lamborghini orange 570",
  "End",
  "Ferrari",
  "Ford",
  "Man",
  "Close the Catalogue",
]);
vehicleCatalogue([
  "Car Skoda grey 90",
  "car Nissan black 90",
  "car Bugatti blue 1000",
  "End",
  "Skoda",
  "Close the Catalogue",
]);
