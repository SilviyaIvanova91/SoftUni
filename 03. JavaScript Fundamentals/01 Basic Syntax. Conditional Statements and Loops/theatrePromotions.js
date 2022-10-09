function theatrePromotions(day, age) {
  if (day === "Weekday") {
    if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
      console.log(`12$`);
    } else if (18 < age && age <= 64) {
      console.log(`18$`);
    } else {
      console.log(`Error!`);
    }
  } else if (day === "Weekend") {
    if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
      console.log(`15$`);
    } else if (18 < age && age <= 64) {
      console.log(`20$`);
    } else {
      console.log(`Error!`);
    }
  } else if (day === "Holiday") {
    if (0 <= age && age <= 18) {
      console.log(`5$`);
    } else if (18 < age && age <= 64) {
      console.log(`12$`);
    } else if (64 < age && age <= 122) {
      console.log(`10$`);
    } else {
      console.log(`Error!`);
    }
  } else {
    console.log(`Error!`);
  }
}

theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);

// function theatrePromotions(day, age) {
//   if (age >= 0 && age <= 122) {
//     switch (day) {
//       case "Weekday":
//         if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
//           console.log(`12$`);
//         } else if (18 < age && age <= 64) {
//           console.log(`18$`);
//         }
//         break;
//       case "Weekend":
//         if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
//           console.log(`15$`);
//         } else if (18 < age && age <= 64) {
//           console.log(`20$`);
//         }
//         break;
//       case "Holiday":
//         if (0 <= age && age <= 18) {
//           console.log(`5$`);
//         } else if (18 < age && age <= 64) {
//           console.log(`12$`);
//         } else if (64 < age && age <= 122) {
//           console.log(`10$`);
//         }
//         break;
//     }
//   } else {
//     console.log(`Error!`);
//   }
// }
