function dayofWeek(daysAsNumber) {
  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (daysAsNumber >= 1 && daysAsNumber <= 7) {
    console.log(day[daysAsNumber - 1]);
  } else {
    console.log(`Invalid day!`);
  }
}

dayofWeek(3);
dayofWeek(6);
dayofWeek(11);

//----------------------------------------------------
// function dayofWeek(daysAsNumber) {
//   if (daysAsNumber < 1 || daysAsNumber > 7) {
//     console.log(`Invalid day!`);
//   } else {
//     let day = [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ];
//     let index = daysAsNumber - 1;
//     console.log(day[index]);
//   }
// }

//-----------------------------------------------------
// function dayofWeek(day) {
//   return day <= 7 && day >= 1
//     ? [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday",
//       ][day - 1]
//     : `Invalid day!`;
// }
