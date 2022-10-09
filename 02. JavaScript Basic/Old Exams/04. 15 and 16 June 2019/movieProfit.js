function movieProfit(input) {
  let name = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let price = Number(input[3]);
  let percentForCinem = Number(input[4]);
  let priceAll = days * tickets * price;
  let percent = priceAll - (priceAll * percentForCinem) / 100;
  console.log(`The profit from the movie ${name} is ${percent.toFixed(2)} lv.`);
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);
