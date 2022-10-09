function carFactory(wantedCar) {
  if (wantedCar.wheelsize % 2 == 0) {
    wantedCar.wheelsize = wantedCar.wheelsize - 1;
  }
  let car = {
    model: wantedCar.model,
    engine: {
      power: wantedCar.power,
      volume: wantedCar.volume,
    },
    carriage: {
      type: wantedCar.carriage,
      color: wantedCar.color,
    },
    wheels: [
      wantedCar.wheelsize,
      wantedCar.wheelsize,
      wantedCar.wheelsize,
      wantedCar.wheelsize,
    ],
  };
  if (wantedCar.power <= 90) {
    car.engine.power = 90;
    car.engine.volume = 1800;
  } else if (wantedCar.power > 90 && wantedCar.power <= 120) {
    car.engine.power = 120;
    car.engine.volume = 2400;
  } else if (wantedCar.power > 120 && wantedCar.power <= 200) {
    car.engine.power = 200;
    car.engine.volume = 3500;
  }

  return car;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

//--------------------------------------------------
// function carFactory(wantedCar) {
//   let engines = [
//     { power: 90, volume: 1800 },
//     { power: 120, volume: 2400 },
//     { power: 200, volume: 3500 },
//   ];
//   let carriages = [
//     { type: "hatchback", color: wantedCar.color },
//     { type: "coupe", color: wantedCar.color },
//   ];
//   let wheelsize =
//     wantedCar.wheelsize % 2 == 1
//       ? wantedCar.wheelsize
//       : wantedCar.wheelsize - 1;

//   return {
//     model: wantedCar.model,
//     engine: engines.filter((e) => e.power >= wantedCar.power)[0],
//     carriage: carriages.filter((c) => c.type == wantedCar.carriage)[0],
//     wheels: [wheelsize, wheelsize, wheelsize, wheelsize],
//   };
// }
