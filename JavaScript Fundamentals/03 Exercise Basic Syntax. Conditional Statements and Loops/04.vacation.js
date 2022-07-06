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

// function vacation(numPeople, typeGroup, day) {
//   let studentsFridayPrice = 8.45;
//   let businessFridayPrice = 10.9;
//   let regularFridayPrice = 15;
//   let studentsSaturdayPrice = 9.8;
//   let businessSaturdayPrice = 15.6;
//   let regularSaturdayPrice = 20;
//   let studentsSundayPrice = 10.46;
//   let businessSundayPrice = 16;
//   let regularSundayPrice = 22.5;

//   let studentsDiscountPercentages = 15;
//   let businessDiscountCount = 10;
//   let regularDiscountPercentages = 5;

//   let price = 0;
//   if (typeGroup === "Business" && numPeople >= 100) {
//     numPeople -= businessDiscountCount;
//   }

//   if (typeGroup === "Students" && day === "Friday") {
//     price += numPeople * studentsFridayPrice;
//   } else if (typeGroup === "Students" && day === "Saturday") {
//     price += numPeople * studentsSaturdayPrice;
//   } else if (typeGroup === "Students" && day === "Sunday") {
//     price += numPeople * studentsSundayPrice;
//   } else if (typeGroup === "Business" && day === "Friday") {
//     price += numPeople * businessFridayPrice;
//   } else if (typeGroup === "Business" && day === "Saturday") {
//     price += numPeople * businessSaturdayPrice;
//   } else if (typeGroup === "Business" && day === "Sunday") {
//     price += numPeople * businessSundayPrice;
//   } else if (typeGroup === "Regular" && day === "Friday") {
//     price += numPeople * regularFridayPrice;
//   } else if (typeGroup === "Regular" && day === "Saturday") {
//     price += numPeople * regularSaturdayPrice;
//   } else if (typeGroup === "Regular" && day === "Sunday") {
//     price += numPeople * regularSundayPrice;
//   }

//   if (typeGroup === "Students" && numPeople >= 30) {
//     price -= (studentsDiscountPercentages / 100) * price;
//   } else if (typeGroup === "Regular" && numPeople >= 10 && numPeople <= 20) {
//     price -= (regularDiscountPercentages / 100) * price;
//   }
//   console.log(`Total price: ${price.toFixed(2)}`);
// }
