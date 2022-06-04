function lunchBreak(input) {
  let name = input[0];
  let fullTime = Number(input[1]);
  let breakTime = Number(input[2]);
  let freeTime = breakTime / 4;
  let lunchTime = breakTime / 8;
  let timeForSerial = breakTime - (freeTime + lunchTime);
  let otherTime = Math.ceil(Math.abs(timeForSerial - fullTime));
  if (fullTime <= timeForSerial) {
    console.log(
      `You have enough time to watch ${name} and left with ${otherTime} minutes free time.`
    );
  } else if (fullTime > timeForSerial) {
    console.log(
      `You don't have enough time to watch ${name}, you need ${otherTime} more minutes.`
    );
  }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
