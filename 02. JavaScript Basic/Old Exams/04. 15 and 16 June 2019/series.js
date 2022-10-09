function series(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let numSerials = Number(input[index++]);
  let newPrice = 0;
  let command = input[index++];
  let allPrice = 0;

  for (let i = 0; i < numSerials; i++) {
    let name = command;
    let price = Number(input[index++]);
    if (name === "Thrones") {
      newPrice = price - price * 0.5;
    } else if (name === "Lucifer") {
      newPrice = price - price * 0.4;
    } else if (name === "Protector") {
      newPrice = price - price * 0.3;
    } else if (name === "TotalDrama") {
      newPrice = price - price * 0.2;
    } else if (name === "Area") {
      newPrice = price - price * 0.1;
    } else {
      newPrice = price;
    }
    allPrice += newPrice;
    command = input[index++];
  }
  let diff = Math.abs(budget - allPrice);
  if (budget >= allPrice) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
