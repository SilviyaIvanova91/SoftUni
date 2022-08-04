function needforSpeedIII(input) {
  let numOfCars = Number(input.shift());
  let list = input.shift();
  let listOfCar = {};
  for (let i = 0; i < numOfCars; i++) {
    let [car, milage, fuel] = list.split("|");
    listOfCar[car] = { milage: Number(milage), fuel: Number(fuel) };
    list = input.shift();
  }
  while (list != "Stop") {
    let command = list.split(" : ");
    let car = command[1];
    if (command[0] == "Drive") {
      let distance = Number(command[2]);
      let fuel = Number(command[3]);
      if (listOfCar[car].fuel < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else if (listOfCar[car].fuel >= fuel) {
        listOfCar[car].milage += distance;
        listOfCar[car].fuel -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }
      if (listOfCar[car].milage >= 100000) {
        delete listOfCar[car];
        console.log(`Time to sell the ${car}!`);
      }
    } else if (command[0] == "Refuel") {
      let fuel = Number(command[2]);
      if (listOfCar[car].fuel + fuel > 75) {
        fuel = 75 - listOfCar[car].fuel;
        listOfCar[car].fuel = 75;
      } else {
        listOfCar[car].fuel += fuel;
      }
      console.log(`${car} refueled with ${fuel} liters`);
    } else if (command[0] == "Revert") {
      let kilometers = Number(command[2]);
      if (listOfCar[car].milage - kilometers < 10000) {
        listOfCar[car].milage = 10000;
      } else {
        listOfCar[car].milage -= kilometers;
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
    list = input.shift();
  }
  for (let [car, el] of Object.entries(listOfCar)) {
    console.log(
      `${car} -> Mileage: ${el.milage} kms, Fuel in the tank: ${el.fuel} lt.`
    );
  }
}

needforSpeedIII([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
needforSpeedIII([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);

//-----------------------------------------------
// function needforSpeedIII(input) {
//   let numOfCars = Number(input.shift());
//   let res = new Map();
//   for (let el of input) {
//     if (el == "Stop") {
//       break;
//     }
//     if (el.includes("|")) {
//       let [car, mileage, fuel] = el.split("|");
//       res.set(car, []);
//       res.get(car).push(Number(mileage));
//       res.get(car).push(Number(fuel));
//     }
//     if (el.includes(" : ")) {
//       let tokens = el.split(" : ");
//       if (el.includes("Refuel")) {
//         let givenCar = tokens[1];
//         let givenfuel = Number(tokens[2]);
//         let sum = givenfuel + res.get(givenCar)[1];
//         if (sum > 75) {
//           res.get(givenCar)[1] = 75;
//           sum -= 75;
//           console.log(`${givenCar} refueled with ${givenfuel - sum} liters`);
//         } else {
//           res.get(givenCar)[1] = sum;
//           console.log(`${givenCar} refueled with ${givenfuel} liters`);
//         }
//       } else if (el.includes("Revert")) {
//         let givenCar = tokens[1];
//         let kilometers = Number(tokens[2]);
//         res.get(givenCar)[0] -= kilometers;
//         if (res.get(givenCar)[0] < 10000) {
//           res.get(givenCar)[0] = 10000;
//         } else {
//           console.log(
//             `${givenCar} mileage decreased by ${kilometers} kilometers`
//           );
//         }
//       } else if (el.includes("Drive")) {
//         let givenCar = tokens[1];
//         let distance = Number(tokens[2]);
//         let givenfuel = Number(tokens[3]);
//         if (res.get(givenCar)[1] >= givenfuel) {
//           res.get(givenCar)[1] -= givenfuel;
//           res.get(givenCar)[0] += distance;
//           console.log(
//             `${givenCar} driven for ${distance} kilometers. ${givenfuel} liters of fuel consumed.`
//           );
//         } else {
//           console.log(`Not enough fuel to make that ride`);
//         }
//         if (res.get(givenCar)[0] >= 100000) {
//           res.delete(givenCar);
//           console.log(`Time to sell the ${givenCar}!`);
//         }
//       }
//     }
//   }
//   for (let [car, carInfo] of res) {
//     console.log(
//       `${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`
//     );
//   }
// }
