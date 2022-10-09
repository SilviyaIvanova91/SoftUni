function flightSchedule(data) {
  class Flight {
    constructor(flyNumber, destination) {
      this.flyNumber = flyNumber;
      this.destination = destination;
      this.status = "Ready to fly";
    }
  }

  let result = [];

  for (let flightInfo of data[0]) {
    let token = flightInfo.split(" ");
    let flightNumber = token.shift();
    let destination = token.join(" ");

    let myFlight = new Flight(flightNumber, destination);
    result.push(myFlight);
  }

  for (let token of data[1]) {
    let tokens = token.split(" ");
    let findFlight = result.filter((obj) => obj.flyNumber === tokens[0])[0];
    if (findFlight) {
      findFlight.status = "Cancelled";
    }
  }
  let command = data[2][0];

  switch (command) {
    case "Cancelled":
      let canceledFly = result.filter((obj) => obj.status === "Cancelled");
      canceledFly.forEach((x) =>
        console.log(
          `{ Destination: '${x.destination}', Status: '${x.status}' }`
        )
      );
      break;
    case "Ready to fly":
      let readyToFly = result.filter((obj) => obj.status === "Ready to fly");
      readyToFly.forEach((x) =>
        console.log(
          `{ Destination: '${x.destination}', Status: '${x.status}' }`
        )
      );
      break;
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
