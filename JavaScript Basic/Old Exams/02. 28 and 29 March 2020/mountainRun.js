function mountainRun(input) {
  let recInSec = Number(input[0]);
  let meters = Number(input[1]);
  let timeInSec = Number(input[2]);

  let time = Math.floor(meters / 50);
  let timeNew = time * 30;
  let georgisTime = meters * timeInSec + timeNew;
  let diff = Math.abs(recInSec - georgisTime);

  if (georgisTime < recInSec) {
    console.log(`Yes! The new record is ${georgisTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}

mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);
