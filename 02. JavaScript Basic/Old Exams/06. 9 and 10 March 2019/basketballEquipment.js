function basketballEquipment(input) {
  let taxForYear = Number(input[0]);
  let shoes = taxForYear - taxForYear * 0.4;
  let clothes = shoes - shoes * 0.2;
  let ball = (clothes * 1) / 4;
  let acsessoares = (ball * 1) / 5;

  let all = taxForYear + shoes + clothes + ball + acsessoares;
  console.log(all.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);
basketballEquipment(["230"]);
