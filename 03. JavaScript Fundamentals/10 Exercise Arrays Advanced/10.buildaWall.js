function buildaWall(arr) {
  arr = arr.map(Number);
  let workers = arr.filter((len) => len < 30).length;
  let newArr = [];

  while (workers != 0) {
    let sumOfAllWorkersByDay = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 30) {
        sumOfAllWorkersByDay += 195;
        arr[i]++;

        if (arr[i] == 30) {
          workers--;
        }
      }
    }
    newArr.push(sumOfAllWorkersByDay);
  }
  let sum = newArr.reduce((a, b) => a + b);
  sum *= 1900;
  console.log(newArr.join(", "));
  console.log(`${sum} pesos`);
}

//buildaWall([17]);
//buildaWall([17, 22, 17, 19, 17]);
buildaWall([21, 25, 28]);

//   let oneFut = 195;
//   let oneCubicYardOfConcreteCost = 1900;
//   let oneFutCost = oneFut * oneCubicYardOfConcreteCost;

// function buildaWall(input) {
//   input = input.map(Number);
//   let concrete = [];
//   while (true) {
//     let buildOn = false;
//     let dailyConcrete = 0;
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] !== 30) {
//         dailyConcrete += 195;
//         input[i]++;
//         buildOn = true;
//       }
//     }
//     if (!buildOn) {
//       break;
//     } else {
//       concrete.push(dailyConcrete);
//     }
//   }
//   let sumOfConcrete = concrete.reduce((a, b) => a + b);
//   console.log(concrete.join(", "));
//   console.log(sumOfConcrete * 1900 + " pesos");
// }

//--------------------------------------------------------------------
// function solve(arr) {
//   let parsedArr = arr.map(Number);
//   let dailyConcrete = [];
//   let totalConcrete = 0;
//   let costs = 0;
//   let crews = parsedArr.filter((len) => len < 30).length;
//   while (crews !== 0) {
//     let concreteByAllCrews = 0;
//     for (let i = 0; i < parsedArr.length; i++) {
//       if (parsedArr[i] !== 30) {
//         parsedArr[i]++;
//         concreteByAllCrews += 195;
//         if (parsedArr[i] == 30) {
//           crews--;
//         }
//       }
//     }
//     totalConcrete += concreteByAllCrews;
//     dailyConcrete.push(concreteByAllCrews);
//   }
//   costs = totalConcrete * 1900;
//   console.log(dailyConcrete.join(", "));
//   console.log(`${costs} pesos`);
// }

//---------------------------------------------
// Решение, което в джъдж дава 60/100

// function buildaWall(arr) {
//   let num = arr.map(Number);
//   let incr = [];
//   let sumFut = [];
//   let countThirty = 0;
//   let count = num.length;
//   while (count != 0) {
//     incr = num.map((a) => a + 1);
//     if (incr.includes(30)) {
//       countThirty = 0;
//       for (let i = 0; i < num.length; i++) {
//         if (incr[i] == 30) {
//           countThirty++;
//         }
//       }
//       let index = incr.indexOf(30);
//       incr.splice(index, countThirty);
//     }
//     sumFut.push(195 * count);
//     num = incr;
//     count = incr.length;
//   }
//   let sum = sumFut.reduce((a, b) => a + b);
//   sum *= 1900;
//   console.log(sumFut.join(", "));
//   console.log(`${sum} pesos`);
// }
