function agencyProfit(input) {
  let name = input[0];
  let numberTickketsOld = Number(input[1]);
  let numberTicketsKids = Number(input[2]);
  let priceTicketOld = Number(input[3]);
  let tax = Number(input[4]);

  let priceTicketKids = priceTicketOld - priceTicketOld * 0.7;
  let allForOld = numberTickketsOld * (priceTicketOld + tax);
  let allForKids = numberTicketsKids * (priceTicketKids + tax);
  let all = (allForKids + allForOld) * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${all.toFixed(2)} lv.`
  );
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
