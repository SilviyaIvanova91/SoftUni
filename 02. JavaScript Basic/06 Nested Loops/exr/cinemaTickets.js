function cinemaTickets(input) {
  let index = 0;
  let command = input[index++];

  let studentTicket = 0;
  let standartTicket = 0;
  let kidsTicket = 0;
  let ticketCounter = 0;

  while (command !== "Finish") {
    let name = command;
    let freeSpace = Number(input[index++]);
    let type = input[index++];
    let tempTicketCounter = 0;

    while (type !== "End") {
      switch (type) {
        case "student":
          studentTicket++;
          break;
        case "standard":
          standartTicket++;
          break;
        case "kid":
          kidsTicket++;
          break;
      }
      tempTicketCounter++;

      if (tempTicketCounter >= freeSpace) {
        break;
      }
      type = input[index++];
    }
    let capacity = (tempTicketCounter / freeSpace) * 100;
    ticketCounter += tempTicketCounter;
    console.log(`${name} - ${capacity.toFixed(2)}% full.`);
    command = input[index++];
  }
  let studentP = (studentTicket / ticketCounter) * 100;
  let standartP = (standartTicket / ticketCounter) * 100;
  let kidsP = (kidsTicket / ticketCounter) * 100;

  console.log(`Total tickets: ${ticketCounter}`);
  console.log(`${studentP.toFixed(2)}% student tickets.`);
  console.log(`${standartP.toFixed(2)}% standard tickets.`);
  console.log(`${kidsP.toFixed(2)}% kids tickets.`);
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
