function worldSwimmingRecord(input) {
  let recorsdInsec = Number(input[0]);
  let lenghtInMet = Number(input[1]);
  let timeInSecForMet = Number(input[2]);
  let swim = lenghtInMet * timeInSecForMet;
  let slowSwim = Math.floor(lenghtInMet / 15);
  let newSwim = slowSwim * 12.5;
  let allTime = swim + newSwim;
  let diff = Math.abs(allTime - recorsdInsec);
  if (allTime < recorsdInsec) {
    console.log(
      `Yes, he succeeded! The new world record is ${allTime.toFixed(
        2
      )} seconds.`
    );
  } else if (allTime >= recorsdInsec) {
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
