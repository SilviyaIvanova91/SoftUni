var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function processTickets(ticketArr, sortBy) {
    var tickets = ticketArr.map(function (str) {
        var parts = str.split("|");
        return new Ticket(parts[0], Number(parts[1]), parts[2]);
    });
    tickets.sort(function (a, b) {
        var valueA;
        var valueB;
        if (sortBy === "destination") {
            valueA = a.destination;
            valueB = b.destination;
        }
        else if (sortBy === "price") {
            valueA = a.price;
            valueB = b.price;
        }
        else if (sortBy === "status") {
            valueA = a.status;
            valueB = b.status;
        }
        else {
            valueA = a.destination;
            valueB = b.destination;
        }
        if (typeof valueA === "string" && typeof valueB === "string") {
            return valueA.localeCompare(valueB);
        }
        else {
            return valueA - valueB;
        }
    });
    return tickets;
}
var byDestination = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
console.log(byDestination);
