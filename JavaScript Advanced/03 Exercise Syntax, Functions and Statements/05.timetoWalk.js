function timetoWalk(steps, foot, speed) {
  let distanceMet = steps * foot;
  let speedMetSec = speed / 3.6;
  let time = distanceMet / speedMetSec;
  let rest = Math.floor(distanceMet / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  console.log(
    (timeHr < 10 ? "0" : "") +
      timeHr +
      ":" +
      (timeMin + rest < 10 ? "0" : "") +
      (timeMin + rest) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}

timetoWalk(4000, 0.6, 5);
timetoWalk(2564, 0.7, 5.5);
