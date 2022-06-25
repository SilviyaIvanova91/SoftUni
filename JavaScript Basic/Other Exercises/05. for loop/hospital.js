function hospital(input) {
  index = 0;
  let period = Number(input[index++]);
  let tread = 0;
  let untread = 0;
  let doctor = 7;

  for (let i = 1; i <= period; i++) {
    let pacient = Number(input[index++]);
    if (i % 3 === 0) {
      if (tread < untread) {
        doctor++;
      } else {
        doctor = doctor;
      }
    }
    if (pacient > doctor) {
      untread += pacient - doctor;
      tread += doctor;
    } else {
      tread += pacient;
    }
  }
  console.log(`Treated patients: ${tread}.`);
  console.log(`Untreated patients: ${untread}.`);
}

hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
