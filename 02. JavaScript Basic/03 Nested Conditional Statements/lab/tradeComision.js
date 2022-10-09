function tradeComision(input) {
  let city = input[0];
  let trade = Number(input[1]);
  let comission = 0;

  if (0 <= trade && trade <= 500) {
    switch (city) {
      case "Sofia":
        comission = trade * 0.05;
        break;
      case "Varna":
        comission = trade * 0.045;
        break;
      case "Plovdiv":
        comission = trade * 0.055;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (500 <= trade && trade <= 1000) {
    switch (city) {
      case "Sofia":
        comission = trade * 0.07;
        break;
      case "Varna":
        comission = trade * 0.075;
        break;
      case "Plovdiv":
        comission = trade * 0.08;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (1000 <= trade && trade <= 10000) {
    switch (city) {
      case "Sofia":
        comission = trade * 0.08;
        break;
      case "Varna":
        comission = trade * 0.1;
        break;
      case "Plovdiv":
        comission = trade * 0.12;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (10000 < trade) {
    switch (city) {
      case "Sofia":
        comission = trade * 0.12;
        break;
      case "Varna":
        comission = trade * 0.13;
        break;
      case "Plovdiv":
        comission = trade * 0.145;
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }

  if (comission) {
    console.log(comission.toFixed(2));
  }
}

tradeComision(["Sofia", "1500"]);
tradeComision(["Plovdiv", "499.99"]);
tradeComision(["Varna", "3874.50"]);
tradeComision(["Kaspichan", "-50"]);
