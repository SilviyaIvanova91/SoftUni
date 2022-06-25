function harvest(input) {
  let index = 0;
  let Xloze = Number(input[index++]);
  let Ygrozde = Number(input[index++]);
  let Zneededl = Number(input[index++]);
  let workers = Number(input[index++]);
  let grozdeKG = Xloze * Ygrozde;
  let forwine = grozdeKG * 0.4;
  let wineLiters = forwine / 2.5;
  let diffWine = Math.abs(Zneededl - wineLiters);
  let forOneworker = Math.ceil(diffWine / workers);

  if (wineLiters < Zneededl) {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        diffWine
      )} liters wine needed.`
    );
  } else {
    console.log(`Good harvest this year! Total wine: ${wineLiters} liters.`);
    console.log(
      `${diffWine} liters left -> ${forOneworker} liters per person.`
    );
  }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
