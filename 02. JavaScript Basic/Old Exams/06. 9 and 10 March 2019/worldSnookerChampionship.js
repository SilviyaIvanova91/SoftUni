function worldSnookerChampionship(input) {
  let etap = input[0];
  let kindticket = input[1];
  let numTicket = Number(input[2]);
  let havePic = input[3];
  let price = 0;

  if (etap === "Quarter final") {
    if (kindticket === "Standard") {
      price = 55.5 * numTicket;
    } else if (kindticket === "Premium") {
      price = 105.2 * numTicket;
    } else if (kindticket === "VIP") {
      price = 118.9 * numTicket;
    }
  } else if (etap === "Semi final") {
    if (kindticket === "Standard") {
      price = 75.88 * numTicket;
    } else if (kindticket === "Premium") {
      price = 125.22 * numTicket;
    } else if (kindticket === "VIP") {
      price = 300.4 * numTicket;
    }
  } else if (etap === "Final") {
    if (kindticket === "Standard") {
      price = 110.1 * numTicket;
    } else if (kindticket === "Premium") {
      price = 160.66 * numTicket;
    } else if (kindticket === "VIP") {
      price = 400 * numTicket;
    }
  }
  if (price > 4000) {
    price -= price * 0.25;
  } else if (price > 2500 && price <= 4000) {
    price -= price * 0.1;
    if (havePic === "Y") {
      price += 40 * numTicket;
    }
  } else {
    if (havePic === "Y") {
      price += 40 * numTicket;
    }
  }
  console.log(price.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
