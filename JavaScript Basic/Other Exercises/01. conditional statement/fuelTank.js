function fuelTank(input) {
  let type = input[0];
  let all = Number(input[1]);
  if (type === "Diesel") {
    if (all >= 25) {
      console.log(`You have enough diesel`);
    } else {
      console.log(`Fill your tank with diesel!`);
    }
  } else if (type === "Gasoline") {
    if (all >= 25) {
      console.log(`You have enough gasoline.`);
    } else {
      console.log(`Fill your tank with gasoline!`);
    }
  } else if (type === "Gas") {
    if (all >= 25) {
      console.log(`You have enough gas.`);
    } else {
      console.log(`Fill your tank with gas!`);
    }
  } else {
    console.log(`Invalid fuel!`);
  }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);
