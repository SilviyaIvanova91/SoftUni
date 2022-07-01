function cinemaTickets(input) {
  let index = 0;
  let command = input[index++];
  let student = 0;
  let standard = 0;
  let kid = 0;
  let all = 0;
  let allstudent = 0;
  let allstandart = 0;
  let allkids = 0;

  while (command !== "Finish") {
    let name = command;
    let freeSeats = Number(input[index++]);
    let type = input[index++];

    while (type !== "End") {
      if (type === "student") {
        student++;
      } else if (type === "standard") {
        standard++;
      } else if (type === "kid") {
        kid++;
      }
      all++;
      if (all === freeSeats) {
        break;
      }
      type = input[index++];
    }
    let fullSalon = (all / freeSeats) * 100;
    console.log(`${name} - ${fullSalon.toFixed(2)}% full.`);
    command = input[index++];
    fullSalon = 0;
    all = 0;
  }

  allstudent += student;
  allstandart += standard;
  allkids += kid;
  let allbilets = allkids + allstandart + allstudent;
  let percentSt = (allstudent / allbilets) * 100;
  let percentStandart = (allstandart / allbilets) * 100;
  let percentKid = (allkids / allbilets) * 100;

  console.log(`Total tickets: ${allbilets}`);
  console.log(`${percentSt.toFixed(2)}% student tickets.`);
  console.log(`${percentStandart.toFixed(2)}% standard tickets.`);
  console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
