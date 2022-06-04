function timeMinutes(input) {
  let minutes = Number(input[0]);
  let seconds = Number(input[1]);
  let mintosek = minutes * 60;
  let other = 15;
  let totalsek = seconds + mintosek + other;
  let minet = Math.floor(totalsek / 60);
  let sek = totalsek % 60;
  if (minet >= 24) {
    minet = 0;
  }
  if (sek < 10) {
    console.log(`${minet}:0${sek}`);
  } else {
    console.log(`${minet}:${sek}`);
  }
}

timeMinutes(["1", "46"]);
timeMinutes(["0", "01"]);
timeMinutes(["23", "59"]);
timeMinutes(["11", "08"]);
timeMinutes(["12", "49"]);
