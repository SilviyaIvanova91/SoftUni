function tickets(ticketAsStr, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];
  for (let line of ticketAsStr) {
    let [destination, price, status] = line.split("|");
    price = Number(price);
    let ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
  }

  tickets.sort((a, b) => {
    if (sortingCriteria == "destination") {
      return a.destination.localeCompare(b.destination);
    } else if (sortingCriteria == "status") {
      return a.status.localeCompare(b.status);
    } else {
      return a.price - b.price;
    }
  });
  return tickets;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);

// function tickets(ticketAsStr, sortingCriteria) {
//   class Ticket {
//     constructor(destination, price, status) {
//       this.destination = destination;
//       this.price = price;
//       this.status = status;
//     }

//     compareTo(other, criteria) {
//       if (typeof this[criteria] === "string") {
//         return this[criteria].localeCompare(other[criteria]);
//       } else {
//         return this[criteria] - other[criteria];
//       }
//     }
//   }

//   let tickets = [];
//   for (let i = 0; i < ticketAsStr.length; i++) {
//     let [destination, price, status] = ticketAsStr[i].split("|");
//     price = Number(price);
//     let ticket = new Ticket(destination, price, status);
//     tickets.push(ticket);
//   }

//   tickets.sort((a, b) => a.compareTo(b, sortingCriteria));
//   return tickets;
// }
