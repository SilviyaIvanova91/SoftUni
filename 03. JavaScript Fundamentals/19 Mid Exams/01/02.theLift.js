function theLift(arr) {
  let peopleOnLift = Number(arr.shift());
  let wagons = arr.toString().split(" ").map(Number);
  let isHavePeople = false;
  let NewWagons = [];
  let allSpace = 4 * wagons.length;

  for (let i = 0; i < wagons.length; i++) {
    while (wagons[i] < 4) {
      wagons[i]++;
      peopleOnLift--;
      if (peopleOnLift == 0) {
        isHavePeople = true;
        break;
      }
    }
    NewWagons.push(wagons);
    if (isHavePeople) {
      break;
    }
  }
  let all = wagons.reduce((a, b) => a + b);
  if (!isHavePeople) {
    console.log(`There isn't enough space! ${peopleOnLift} people in a queue!`);
    console.log(`${wagons.join(" ")}`);
  } else if (peopleOnLift == 0 && all == allSpace) {
    console.log(`${wagons.join(" ")}`);
  } else {
    console.log(`The lift has empty spots!`);
    console.log(`${wagons.join(" ")}`);
  }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);

//------------------------------------------------------------------
// function theLift(arr) {
//     let peopleOnLift = Number(arr[0]);
//     let wagons = arr[1].split(" ");
//     let isHavePeople = true;
//     let NewWagons = [];

//     for (let i = 0; i < wagons.length; i++) {
//       let currWagon = Number(wagons[i]);
//       while (currWagon < 4) {
//         currWagon++;
//         peopleOnLift--;
//         if (peopleOnLift == 0) {
//           isHavePeople = false;
//           break;
//         }
//       }
//       NewWagons.push(currWagon);
//       if (!isHavePeople) {
//         break;
//       }
//     }
//     if (isHavePeople) {
//       console.log(`There isn't enough space! ${peopleOnLift} people in a queue!`);
//       console.log(NewWagons.join(" "));
//     } else {
//       console.log(`The lift has empty spots!`);
//       console.log(NewWagons.join(" "));
//     }
//   }
