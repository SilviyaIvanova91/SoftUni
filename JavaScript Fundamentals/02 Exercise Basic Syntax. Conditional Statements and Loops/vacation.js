function vacation(numPeople, typeGroup, day) {
  let price = 0;
  if (typeGroup === "Students") {
    if (day === "Friday") {
      price = numPeople * 8.45;
    } else if (day === "Saturday") {
      price = numPeople * 9.8;
    } else if (day === "Sunday") {
      price = numPeople * 10.46;
    }
  } else if (typeGroup === "Business") {
    if (day === "Friday") {
      price = numPeople * 10.9;
      if (numPeople >= 100) {
        price -= 10 * 10.9;
      }
    } else if (day === "Saturday") {
      price = numPeople * 15.6;
      if (numPeople >= 100) {
        price -= 10 * 15.6;
      }
    } else if (day === "Sunday") {
      price = numPeople * 16;
      if (numPeople >= 100) {
        price -= 10 * 16;
      }
    }
  } else if (typeGroup === "Regular") {
    if (day === "Friday") {
      price = numPeople * 15;
    } else if (day === "Saturday") {
      price = numPeople * 20;
    } else if (day === "Sunday") {
      price = numPeople * 22.5;
    }
  }
  if (typeGroup === "Students" && numPeople >= 30) {
    price -= price * 0.15;
  }
  if (typeGroup === "Regular" && numPeople >= 10 && numPeople <= 20) {
    price -= price * 0.05;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
