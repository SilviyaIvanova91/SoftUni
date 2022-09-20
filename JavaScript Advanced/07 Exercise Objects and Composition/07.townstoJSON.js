function townstoJSON(input) {
  let first = input.shift();
  let obj = {};
  let arr = [];
  for (let line of input) {
    let [townF, latitude, longitudeF] = line.split(" | ");
    townF = townF.split("| ");
    let town = townF[1];
    longitudeF = longitudeF.split(" |");
    latitude = Number(latitude).toFixed(2);
    Number.parseFloat(Number(latitude).toFixed(2));
    let longitude = Number(longitudeF[0]).toFixed(2);
    Number.parseFloat(longitude);
    obj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    arr.push(obj);
  }
  console.log(JSON.stringify(arr));
}

townstoJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
townstoJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);

//-----------------------------------------------
// function townstoJSON(input) {
//   let res = [];
//   class Town {
//     constructor(town, latitude, longitude) {
//       this.Town = town;
//       this.Latitude = latitude;
//       this.Longitude = longitude;
//     }
//   }
//   for (let i = 1; i < input.length; i++) {
//     let arr = input[i]
//       .split("|")
//       .map((t) => t.trim())
//       .filter((x) => x.length != 0);
//     let townName = arr[0];
//     let latitude = Number(arr[1]).toFixed(2);
//     let longitude = Number(arr[2]).toFixed(2);
//     let town = new Town(townName, latitude, longitude);
//     res.push(town);
//   }
//   console.log(JSON.stringify(res));
// }
