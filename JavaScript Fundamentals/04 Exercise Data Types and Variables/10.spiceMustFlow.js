function spiceMustFlow(startingYeld) {
  let dayCount = 0;
  let spice = 0;
  while (startingYeld >= 100) {
    dayCount++;
    spice += startingYeld - 26;
    startingYeld -= 10;
  }
  console.log(dayCount);
  if (dayCount != 0) {
    console.log(spice - 26);
  } else {
    console.log(spice);
  }
}

spiceMustFlow(111);
spiceMustFlow(450);
