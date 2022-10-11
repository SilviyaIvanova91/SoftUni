class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (typeof plantName !== "string" || typeof spaceRequired !== "number") {
      return;
    }
    if (spaceRequired > this.spaceAvailable) {
      throw Error(`Not enough space in the garden.`);
    }
    let plant = {
      plantName,
      spaceRequired,
      ripe: false,
      qty: 0,
    };
    this.plants.push(plant);
    this.spaceAvailable -= Number(spaceRequired);
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((plant) => plant.plantName == plantName);
    if (!plant) {
      throw Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe) {
      throw Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.qty += Number(quantity);

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((plant) => plant.plantName == plantName);
    if (!plant) {
      throw Error(`There is no ${plantName} in the garden.`);
    }
    if (plant.ripe == false) {
      throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }

    let index = this.plants.findIndex((plant) => plant.plantName == plantName);
    this.plants.splice(index, 1);
    this.storage.push({
      plantName: plant.plantName,
      quantity: plant.qty,
    });

    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let finalRes = "";
    finalRes = `The garden has ${this.spaceAvailable} free space left.`;
    if (this.plants.length > 0) {
      let sortedPlants = this.plants.map((plant) => plant.plantName);
      finalRes += `\nPlants in the garden: ${sortedPlants.join(", ")}`;
    }
    if (this.storage.length == 0) {
      finalRes += `\n Plants in storage: The storage is empty.`;
    } else {
      let plantStorage = this.storage
        .sort((a, b) => a.plantName - b.plantName)
        .map((plant) => `${plant.plantName} (${plant.quantity})`);
      finalRes += `\nPlants in storage: ${plantStorage.join(", ")}`;
    }
    return finalRes;
  }
}

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));

//-----------------------------------------------
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));

//-------------------------------------------------------
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("olive", 30));

//---------------------------------
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("cucumber", -5));

//------------------------------------------------------
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("olive"));

//----------------------------
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("raspberry"));

//-------------------------------------------
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
