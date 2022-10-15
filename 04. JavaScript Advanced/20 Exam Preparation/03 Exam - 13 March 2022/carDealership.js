class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    horsepower = Number(horsepower);
    price = Number(price);
    mileage = Number(mileage);
    if (model == "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    let car = {
      model,
      horsepower,
      price,
      mileage,
    };

    this.availableCars.push(car);
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    desiredMileage = Number(desiredMileage);
    let avbCars = this.availableCars.find((car) => car.model == model);
    let avbCarsIndex = this.availableCars.findIndex(
      (car) => car.model == model
    );

    if (!avbCars) {
      throw new Error(`${model} was not found!`);
    }

    let diff = avbCars.mileage - desiredMileage;
    if (diff > 0 && diff <= 40000) {
      avbCars.price -= avbCars.price * 0.05;
    } else if (diff > 0 && diff > 40000) {
      avbCars.price -= avbCars.price * 0.1;
    }

    let modelCar = {
      model: avbCars.model,
      horsepower: avbCars.horsepower,
      soldPrice: avbCars.price,
    };

    this.availableCars.splice(avbCarsIndex, 1);
    this.soldCars.push(modelCar);
    this.totalIncome += avbCars.price;
    return `${model} was sold for ${avbCars.price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    } else {
      let allCars = this.availableCars.map(
        (c) =>
          `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
            2
          )} km - ${c.price.toFixed(2)}$`
      );
      return `-Available cars:\n${allCars.join("\n")}`;
    }
  }

  salesReport(criteria) {
    if (criteria != "horsepower" && criteria != "model") {
      throw new Error("Invalid criteria!");
    }
    let all;
    if (criteria == "horsepower") {
      all = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      all = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    let finalCras = all.map(
      (c) => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
    );
    let soldCarsCount = this.soldCars.length;
    return `-${this.name} has a total income of ${this.totalIncome.toFixed(
      2
    )}$\n-${soldCarsCount} cars sold:\n${finalCras.join("\n")}`;
  }
}

// let dealership = new CarDealership("SoftAuto");
// console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
// console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
// console.log(dealership.addCar("", 120, 4900, 240000));

//-------------------input 2----------------
// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

//-------------------input 3----------------
// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.currentCar());

//-------------------input 4----------------
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
