function easterLunch(input) {
  let numKoz = Number(input[0]);
  let numEggs = Number(input[1]);
  let kgKurabii = Number(input[2]);

  let priceKoz = numKoz * 3.2;
  let priceEgss = numEggs * 4.35;
  let priceKurabii = kgKurabii * 5.4;
  let peiceColour = numEggs * 12 * 0.15;
  let all = peiceColour + priceEgss + priceKoz + priceKurabii;
  console.log(all.toFixed(2));
}

easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);
easterLunch(["2", "3", "2"]);
