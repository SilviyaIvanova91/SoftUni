function vacationBooksList(input) {
  let page = Number(input[0]);
  let pageForOneHour = Number(input[1]);
  let day = Number(input[2]);
  let totalTime = page / pageForOneHour;
  let hourForDay = totalTime / day;
  console.log(hourForDay);
}
vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ", "15 ", "4 "]);
