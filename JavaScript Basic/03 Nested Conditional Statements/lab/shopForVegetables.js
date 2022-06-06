function shopForVegetables(input) {
  let vegetable = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (vegetable) {
      case "banana":
        price = quantity * 2.5;
        break;
      case "apple":
        price = quantity * 1.2;
        break;
      case "orange":
        price = quantity * 0.85;
        break;
      case "grapefruit":
        price = quantity * 1.45;
        break;
      case "kiwi":
        price = quantity * 2.7;
        break;
      case "pineapple":
        price = quantity * 5.5;
        break;
      case "grapes":
        price = quantity * 3.85;
        break;
      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (vegetable) {
      case "banana":
        price = quantity * 2.7;
        break;
      case "apple":
        price = quantity * 1.25;
        break;
      case "orange":
        price = quantity * 0.9;
        break;
      case "grapefruit":
        price = quantity * 1.6;
        break;
      case "kiwi":
        price = quantity * 3.0;
        break;
      case "pineapple":
        price = quantity * 5.6;
        break;
      case "grapes":
        price = quantity * 4.2;
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
  if (price) {
    console.log(price.toFixed(2));
  }
}

shopForVegetables(["apple", "Tuesday", "2"]);
shopForVegetables(["orange", "Sunday", "3"]);
shopForVegetables(["kiwi", "Monday", "2.5"]);
shopForVegetables(["grapes", "Saturday", "0.5"]);
shopForVegetables(["tomato", "Monday", "0.5"]);
