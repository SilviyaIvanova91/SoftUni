function travelTime(data) {
  let result = {};

  for (let line of data) {
    let tokens = line.split(" > ");
    let country = tokens[0];
    let town = tokens[1];
    let cost = Number(tokens[2]);

    if (!result.hasOwnProperty(country)) {
      result[country] = {};
    }

    if (!result[country].hasOwnProperty(town)) {
      result[country][town] = 0;
    }

    let oldCost = result[country][town];
    if (oldCost > cost || oldCost === 0) {
      result[country][town] = cost;
    }
  }

  let sortCountry = Object.entries(result).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return keyA.localeCompare(keyB);
    }
  );
  for (let [key, townInfo] of sortCountry) {
    let sortTown = Object.entries(townInfo).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        return valueA - valueB;
      }
    );
    let buff = `${key} -> `;
    for (let [townName, townCost] of sortTown) {
      buff += `${townName} -> ${townCost} `;
    }
    console.log(buff);
  }
}

// function travelTime(input) {
//   let finalMap = {};
//   let res = "";
//   for (let line of input) {
//     let [country, city, price] = line.split(" > ");
//     price = Number(price);
//     if (!finalMap.hasOwnProperty(country)) {
//       finalMap[country] = {};
//     }
//     if (!finalMap[country].hasOwnProperty(city)) {
//       finalMap[country][city] = price;
//     }
//     let oldPrice = Number(finalMap[country][city]);
//     if (oldPrice > price) {
//       finalMap[country][city] = price;
//     }
//   }
//   let sorted = Object.keys(finalMap).sort((a, b) =>
//     a.toLowerCase().localeCompare(b.toLowerCase())
//   );
//   for (let country of sorted) {
//     let sortedTown = Object.keys(finalMap[country]).sort(
//       (a, b) => finalMap[country][a] - finalMap[country][b]
//     );
//     res = `${country} -> `;
//     for (let town of sortedTown) {
//       res += `${town} -> ${finalMap[country][town]} `;
//     }
//     console.log(res);
//   }
// }

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);

travelTime([
  "Bulgaria > Sofia > 25000",
  "aaa > Sofia > 1",
  "aa > Orgrimar > 0",
  "Albania > Tirana > 25000",
  "zz > Aarna > 25010",
  "Bulgaria > Lukovit > 10",
]);

//--------------------------------------------------
