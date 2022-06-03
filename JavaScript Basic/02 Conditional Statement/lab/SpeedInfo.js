function speed(input) {
  let info = Number(input[0]);
  if (info <= 10) {
    console.log(`slow`);
  } else if (info >= 10 && info <= 50) {
    console.log(`average`);
  } else if (info >= 50 && info <= 150) {
    console.log(`fast`);
  } else if (info >= 150 && info <= 1000) {
    console.log(`ultra fast`);
  } else {
    console.log(`extremely fast`);
  }
}

speed(["8"]);
speed(["49.5"]);
speed(["126"]);
speed(["160"]);
speed(["3500"]);
