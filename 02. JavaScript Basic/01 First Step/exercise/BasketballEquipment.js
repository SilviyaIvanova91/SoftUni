function basketballEquipment(input) {
  let tax = Number(input[0]);
  let shoes = tax - tax * 0.4;
  let clothes = shoes - shoes * 0.2;
  let ball = clothes / 4;
  let acsesoaries = ball / 5;
  let allCash = tax + shoes + clothes + ball + acsesoaries;
  console.log(allCash);
}

basketballEquipment(["365"]);
basketballEquipment(["550"]);
