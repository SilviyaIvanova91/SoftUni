function townPopulation(input) {
  let obj = {};
  for (let el of input) {
    let [townName, townPopulation] = el.split(" <-> ");
    townPopulation = Number(townPopulation);
    if (obj.hasOwnProperty(townName)) {
      obj[townName] += townPopulation;
    } else {
      obj[townName] = townPopulation;
    }
  }
  for (let [name, population] of Object.entries(obj)) {
    console.log(`${name} : ${population}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

//------------------------------------------
// function townPopulation(input) {
//   let obj = {};
//   for (let el of input) {
//     let [townName, townPopulation] = el.split(" <-> ");
//     townPopulation = Number(townPopulation);
//     if (obj[townName] != undefined) {
//       townPopulation += obj[townName];
//     }
//     obj[townName] = townPopulation;
//   }
//   for (let townName in obj) {
//     console.log(`${townName} : ${obj[townName]}`);
//   }
// }
