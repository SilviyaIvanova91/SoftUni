function plantDiscovery(input) {
  let num = Number(input.shift());
  let listOfPlants = {};
  for (let i = 0; i < num; i++) {
    let [plant, rarity] = input.shift().split("<->");
    rarity = Number(rarity);
    listOfPlants[plant] = { rarity, rating: 0, count: 0 };
  }
  let list = input.shift();
  while (list != "Exhibition") {
    let [command, info] = list.split(": ");
    let [plant, index] = info.split(" - ");
    index = Number(index);
    if (!listOfPlants.hasOwnProperty(plant)) {
      console.log(`error`);
      list = input.shift();
      continue;
    }
    if (command == "Rate") {
      listOfPlants[plant].rating += index;
      listOfPlants[plant].count++;
    } else if (command == "Update") {
      listOfPlants[plant].rarity = index;
    } else if (command == "Reset") {
      listOfPlants[plant].rating = 0;
      listOfPlants[plant].count = 0;
    }
    list = input.shift();
  }
  console.log(`Plants for the exhibition:`);
  for (let [plant, value] of Object.entries(listOfPlants)) {
    let avgValue = 0;
    if (value.rating != 0) {
      avgValue = value.rating / value.count;
    }
    console.log(
      `- ${plant}; Rarity: ${value.rarity}; Rating: ${avgValue.toFixed(2)}`
    );
  }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);

//----------------------------------------
// function plantDiscovery(array) {
//   let num = Number(array.shift());
//   let plantsObj = {};
//   for (let i = 0; i < num; i++) {
//     let [plant, rarity] = array.shift().split("<->");
//     rarity = Number(rarity);
//     plantsObj[plant] = {};
//     plantsObj[plant]["rarity"] = rarity;
//     plantsObj[plant]["rating"] = [];
//     plantsObj[plant]["counter"] = 0;
//   }

//   let line = array.shift();

//   while (line !== "Exhibition") {
//     if (line.includes("Rate")) {
//       let [command, plantInfo] = line.split(": ");
//       let [plant, rating] = plantInfo.split(" - ");
//       rating = Number(rating);
//       if (plantsObj.hasOwnProperty(plant)) {
//         plantsObj[plant]["rating"].push(rating);
//         plantsObj[plant]["counter"]++;
//       } else {
//         console.log(`error`);
//       }
//     } else if (line.includes("Update")) {
//       let [command, plantInfo] = line.split(": ");
//       let [plant, newRarity] = plantInfo.split(" - ");
//       newRarity = Number(newRarity);
//       if (plantsObj.hasOwnProperty(plant)) {
//         plantsObj[plant]["rarity"] = newRarity;
//       } else {
//         console.log(`error`);
//       }
//     } else if (line.includes("Reset")) {
//       let [command, plant] = line.split(": ");
//       if (plantsObj.hasOwnProperty(plant)) {
//         plantsObj[plant]["rating"] = [];
//         plantsObj[plant]["counter"] = 0;
//       } else {
//         console.log(`error`);
//       }
//     }
//     line = array.shift();
//   }
//   console.log(`Plants for the exhibition:`);
//   for (let key in plantsObj) {
//     let average = 0;
//     if (plantsObj[key]["rating"].length !== 0) {
//       let sum = plantsObj[key]["rating"].reduce((acc, num) => acc + num);
//       average = sum / plantsObj[key]["counter"];
//     }
//     console.log(
//       `- ${key}; Rarity: ${plantsObj[key]["rarity"]}; Rating: ${average.toFixed(
//         2
//       )}`
//     );
//   }
// }
