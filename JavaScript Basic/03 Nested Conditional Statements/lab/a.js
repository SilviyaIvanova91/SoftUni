function tradeComision(input) {
  let city = input[0];
  let sales = Number(input[1]);
  // let isValid = 0 <= sales && sales <= 500;
  // let isValid1 = 500 < sales && sales <= 1000;
  // let isValid2 = 1000 < sales && sales <= 10000;
  // let isValid3 = sales > 10000;
  // let finalSum = 0;

  if (0 <= trade && trade <= 500) {
    switch (city) {
      case "Sofia":
        comission = trade * 5;
        break;
      case "Varna":
        comission = trade * 4.5;
        break;
      case "Plovdiv":
        comission = trade * 5.5;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (500 <= trade && trade <= 1000) {
    switch (city) {
      case "Sofia":
        comission = trade * 7;
        break;
      case "Varna":
        comission = trade * 7.5;
        break;
      case "Plovdiv":
        comission = trade * 8;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (1000 <= trade && trade <= 10000) {
    switch (city) {
      case "Sofia":
        comission = trade * 8;
        break;
      case "Varna":
        comission = trade * 10;
        break;
      case "Plovdiv":
        comission = trade * 12;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (10000 < trade) {
    switch (city) {
      case "Sofia":
        comission = trade * 12;
        break;
      case "Varna":
        comission = trade * 13;
        break;
      case "Plovdiv":
        comission = trade * 14.5;
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }

  if (comission) {
    console.log((comission / 100).toFixed(2));
  }
}
//   if (isValid) {
//     switch (city) {
//       case "Sofia":
//         finalSum = 0.05 * sales;
//         break;
//       case "Varna":
//         finalSum = 0.045 * sales;
//         break;
//       case "Plovdiv":
//         finalSum = 0.055 * sales;
//         break;
//       default:
//         console.log("error");
//     }
//   } else if (isValid1) {
//     switch (city) {
//       case "Sofia":
//         finalSum = 0.07 * sales;
//         break;
//       case "Varna":
//         finalSum = 0.075 * sales;
//         break;
//       case "Plovdiv":
//         finalSum = 0.08 * sales;
//         break;
//       default:
//         console.log("error");
//     }
//   } else if (isValid2) {
//     switch (city) {
//       case "Sofia":
//         finalSum = 0.08 * sales;
//         break;
//       case "Varna":
//         finalSum = 0.1 * sales;
//         break;
//       case "Plovdiv":
//         finalSum = 0.12 * sales;
//         break;
//       default:
//         console.log("error");
//     }
//   } else if (isValid3) {
//     switch (city) {
//       case "Sofia":
//         finalSum = 0.12 * sales;
//         break;
//       case "Varna":
//         finalSum = 0.13 * sales;
//         break;
//       case "Plovdiv":
//         finalSum = 0.145 * sales;
//         break;
//       default:
//         console.log("error");
//     }
//   } else {
//     console.log("error");
//   }
//   {
//     console.log(finalSum.toFixed(2));
//   }
// }

tradeComision(["Sofia", "1500"]);
tradeComision(["Plovdiv", "499.99"]);
tradeComision(["Varna", "3874.50"]);
tradeComision(["Kaspichan", "-50"]);
