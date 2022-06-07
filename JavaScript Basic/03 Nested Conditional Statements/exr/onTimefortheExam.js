function onTimefortheExam(input) {
  let hourOfExam = Number(input[0]);
  let minetOfExam = Number(input[1]);
  let hourToArive = Number(input[2]);
  let minetToArive = Number(input[3]);
  let exam = hourOfExam * 60 + minetOfExam;
  let arrive = hourToArive * 60 + minetToArive;
  if (arrive > exam) {
    console.log(`Late`);
    let diff = Math.abs(arrive - exam);
    let hh = Math.floor(diff / 60);
    let mm = diff % 60;
    if (hh > 0) {
      if (mm < 10) {
        console.log(`${hh}:0${mm} hours after the start`);
      } else {
        console.log(`${hh}:${mm} hours after the start`);
      }
    } else {
      console.log(`${mm} minutes after the start`);
    }
  } else if (arrive <= exam && Math.abs(exam - arrive) <= 30) {
    console.log(`On time`);
    let diff = Math.abs(arrive - exam);
    if (diff > 0) {
      console.log(`${diff} minutes before the start`);
    }
  } else {
    console.log(`Early`);
    let diff = Math.abs(arrive - exam);
    let hh = Math.floor(diff / 60);
    let mm = diff % 60;
    if (hh > 0) {
      if (mm < 10) {
        console.log(`${hh}:0${mm} hours before the start`);
      } else {
        console.log(`${hh}:${mm} hours before the start`);
      }
    } else {
      console.log(`${mm} minutes before the start`);
    }
  }
}

onTimefortheExam(["9", "30", "9", "50"]);
onTimefortheExam(["9", "00", "8", "30"]);
onTimefortheExam(["16", "00", "15", "00"]);
onTimefortheExam(["9", "00", "10", "30"]);
onTimefortheExam(["14", "00", "13", "55"]);
onTimefortheExam(["11", "30", "8", "12"]);
onTimefortheExam(["10", "00", "10", "00"]);
onTimefortheExam(["11", "30", "10", "55"]);
onTimefortheExam(["11", "30", "12", "29"]);
