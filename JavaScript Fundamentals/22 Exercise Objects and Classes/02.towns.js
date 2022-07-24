function towns(input) {
  let towns = {};
  for (let townn of input) {
    let newObj = townn.split(" | ");
    towns.town = newObj[0];
    towns.latitude = Number(newObj[1]).toFixed(2);
    towns.longitude = Number(newObj[2]).toFixed(2);
    console.log(towns);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);

//---------------------------------------
// function towns(input) {
//     let towns = {};
//     for (let townn of input) {
//       let newObj = townn.split(" | ");
//       let townName = newObj[0];
//       let latitude = Number(newObj[1]).toFixed(2);
//       let longitude = Number(newObj[2]).toFixed(2);
//       towns.town = townName;
//       towns.latitude = latitude;
//       towns.longitude = longitude;
//       console.log(towns);
//     }
//   }

//--------------------------------------------
