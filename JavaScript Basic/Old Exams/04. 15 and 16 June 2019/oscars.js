function oscars(input) {
  let index = 0;
  let nameoAct = input[index++];
  let points = Number(input[index++]);
  let numComision = input[index++];
  let command = input[index++];
  let numPoint = 0;
  let allpoint = points;

  for (let i = 0; i < numComision; i++) {
    let nameCommision = command;
    let pointCom = Number(input[index++]);
    numPoint = (nameCommision.length * pointCom) / 2;

    allpoint += numPoint;
    if (allpoint > 1250.5) {
      break;
    }
    command = input[index++];
  }

  let diff = 1250.5 - allpoint;
  if (allpoint > 1250.5) {
    console.log(
      `Congratulations, ${nameoAct} got a nominee for leading role with ${allpoint.toFixed(
        1
      )}!`
    );
  } else {
    console.log(`Sorry, ${nameoAct} you need ${diff.toFixed(1)} more!`);
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
