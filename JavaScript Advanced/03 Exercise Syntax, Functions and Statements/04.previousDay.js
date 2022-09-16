function previousDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);

//-----------------------------------------------
// function previousDay(year, month, day) {
//   year = Number(year);
//   month = Number(month) - 1;
//   day = Number(day);

//   let date = new Date(year, month, day);
//   let nextDate = new Date(date);
//   nextDate.setDate(date.getDate() - 1);
//   let outputYear = nextDate.getFullYear();
//   let outputMonth = nextDate.getMonth() + 1;
//   let outputDay = nextDate.getDate();

//   console.log(`${outputYear}-${outputMonth}-${outputDay}`);
// }

//-------------------------------------------
// function previousDay(year, month, day) {
//     let date = new Date(year, month - 1, day - 1);
//     console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
//   }
