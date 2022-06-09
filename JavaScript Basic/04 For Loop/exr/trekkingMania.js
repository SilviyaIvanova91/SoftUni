function trekkingMania(input) {
  let index = 0;
  let groups = Number(input[index]);
  index++;

  let Musala = 0;
  let Monblan = 0;
  let Kilimadzaro = 0;
  let K2 = 0;
  let Everest = 0;

  for (let i = 0; i < groups; i++) {
    let num = Number(input[index]);
    index++;
    if (num <= 5) {
      Musala += num;
    } else if (num >= 6 && num <= 12) {
      Monblan += num;
    } else if (num >= 13 && num <= 25) {
      Kilimadzaro = Kilimadzaro + num;
    } else if (num >= 26 && num <= 40) {
      K2 += num;
    } else {
      Everest += num;
    }
  }
  let allGroup = Musala + Monblan + Kilimadzaro + K2 + Everest;

  let p1 = (Musala / allGroup) * 100;
  let p2 = (Monblan / allGroup) * 100;
  let p3 = (Kilimadzaro / allGroup) * 100;
  let p4 = (K2 / allGroup) * 100;
  let p5 = (Everest / allGroup) * 100;

  console.log(p1.toFixed(2) + "%");
  console.log(p2.toFixed(2) + "%");
  console.log(p3.toFixed(2) + "%");
  console.log(p4.toFixed(2) + "%");
  console.log(p5.toFixed(2) + "%");
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
