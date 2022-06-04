function sumSeconds(input) {
  let timeFirst = Number(input[0]);
  let timeSecond = Number(input[1]);
  let timeThird = Number(input[2]);
  let totalTime = timeFirst + timeSecond + timeThird;
  let minet = Math.floor(totalTime / 60);
  let second = totalTime % 60;
  if (second < 10) {
    console.log(`${minet}:0${second}`);
  } else {
    console.log(`${minet}:${second}`);
  }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
