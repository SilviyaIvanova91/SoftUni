function daysinamonth(month, year) {
  let days = new Date(year, month, 0).getDate();
  console.log(days);
}

daysinamonth(1, 2012);
daysinamonth(2, 2021);
