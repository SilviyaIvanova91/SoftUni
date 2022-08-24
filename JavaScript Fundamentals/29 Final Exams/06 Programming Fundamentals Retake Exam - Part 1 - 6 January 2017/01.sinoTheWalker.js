function sinoTheWalker(input) {
  let leftTime = input.shift().split(":");
  let hour = Number(leftTime[0]);
  let minutes = Number(leftTime[1]);
  let sec = Number(leftTime[2]);

  let steps = Number(input.shift());
  let timeInSecForSteps = Number(input.shift());
  let timeTohome = steps * timeInSecForSteps;

  sec += timeTohome;

  if (sec >= 60) {
    minutes = Math.floor(minutes + sec / 60);
    sec = Math.floor(sec % 60);
  }

  if (minutes >= 60) {
    hour = Math.floor(hour + minutes / 60);
    minutes = Math.floor(minutes % 60);
  }

  if (hour >= 24) {
    hour = hour % 24;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  console.log(`Time Arrival: ${hour}:${minutes}:${sec}`);
}

sinoTheWalker(["12:30:30", "56666690", "1"]);

sinoTheWalker(["12:30:30", "90", "1"]);
sinoTheWalker(["23:49:13", "5424", "2"]);

//-------------------------
// function sinoTheWalker(input) {
//   let timeLeaves = input.shift().split(":");
//   let hours = Number(timeLeaves[0]);
//   let minutes = Number(timeLeaves[1]);
//   let seconds = Number(timeLeaves[2]);

//   let eachSteps = Number(input[0]);
//   let timeForEachSteps = Number(input[1]);
//   let walking = eachSteps * timeForEachSteps;

//   seconds = walking + seconds;

//   if (seconds >= 60) {
//     minutes = Math.floor(minutes + seconds / 60);
//     seconds = Math.floor(seconds % 60);
//   }

//   if (minutes >= 60) {
//     hours = Math.floor(hours + minutes / 60);
//     minutes = Math.floor(minutes % 60);
//   }

//   if (hours >= 24) {
//     hours = hours % 24;
//   }

//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   console.log(`Time Arrival: ${hours}:${minutes}:${seconds}`);
// }
