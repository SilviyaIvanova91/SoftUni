function firm(input) {
  let needHour = Number(input[0]);
  let day = Number(input[1]);
  let worker = Number(input[2]);
  let needDay = day - day * 0.1;
  let hour = needDay * 8;
  let workerime = worker * (2 * day);
  let timeNeeded = Math.floor(hour + workerime);
  let diffHour = Math.abs(needHour - timeNeeded);
  if (timeNeeded >= needHour) {
    console.log(`Yes!${diffHour} hours left.`);
  } else {
    console.log(`Not enough time!${diffHour} hours needed.`);
  }
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
firm(["50", "5", "2"]);
