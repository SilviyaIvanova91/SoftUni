function ANDProcessors(input) {
  let numPr = Number(input[0]);
  let numConsult = Number(input[1]);
  let workDay = Number(input[2]);

  let workHour = workDay * numConsult * 8;
  let numWorkPr = Math.floor(workHour / 3);
  let diff = Math.abs(numPr - numWorkPr);
  let price = diff * 110.1;
  if (numWorkPr < numPr) {
    console.log(`Losses: -> ${price.toFixed(2)} BGN`);
  } else {
    console.log(`Profit: -> ${price.toFixed(2)} BGN`);
  }
}

ANDProcessors(["500", "8", "20"]);
ANDProcessors(["150", "7", "18"]);
