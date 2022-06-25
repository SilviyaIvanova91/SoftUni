function sleepyTomCat(input) {
  let freeDay = Number(input[0]);
  let busyDay = 365 - freeDay;
  let freeGame = 127 * freeDay;
  let busyGame = 63 * busyDay;
  let game = freeGame + busyGame;
  let diff = Math.abs(30000 - game);
  let H = Math.floor(diff / 60);
  let M = diff % 60;
  if (game > 30000) {
    console.log(`Tom will run away`);
    console.log(`${H} hours and ${M} minutes more for play`);
  } else {
    console.log(`Tom sleeps well`);
    console.log(`${H} hours and ${M} minutes less for play`);
  }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
