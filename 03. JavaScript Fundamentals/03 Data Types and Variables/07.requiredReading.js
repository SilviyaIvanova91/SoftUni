function requiredReading(numPages, pageForHour, numDay) {
  let totalTime = numPages / pageForHour;
  let hourOfDay = totalTime / numDay;
  console.log(hourOfDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
