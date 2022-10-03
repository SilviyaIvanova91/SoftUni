function traveling(input) {
  let index = 0;
  let destination = input[index++];
  let budget = 0;
  let sum = 0;

  while (destination !== "End") {
    budget = Number(input[index++]);
    sum = 0;
    while (sum < budget) {
      sum += Number(input[index++]);
    }
    console.log(`Going to ${destination}!`);
    destination = input[index++];
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);

 function traveling(input) {
   let index = 0;
   let command = input[index++];
   let budget = 0;
   let sum = 0;

   while (command !== "End") {
     let destination = command;
     budget = Number(input[index++]);
     let saveMoney = 0;
     while (saveMoney < budget) {
       let tempMoney = Number(input[index++]);
       saveMoney += tempMoney;
     }
     console.log(`Going to ${destination}!`);
     command = input[index++];
   }
 }
