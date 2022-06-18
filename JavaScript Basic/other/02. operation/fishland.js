function fishland(input) {
  let index = 0;
  let skum = Number(input[index++]);
  let caca = Number(input[index++]);
  let palamudKG = Number(input[index++]);
  let safridKG = Number(input[index++]);
  let midiKG = Number(input[index++]);

  let palamud = (skum + skum * 0.6) * palamudKG;
  let safrid = (caca + caca * 0.8) * safridKG;
  let midi = 7.5 * midiKG;
  let all = palamud + safrid + midi;
  console.log(all.toFixed(2));
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", " 4.3", "3.6", "7"]);
fishland(["7.79", "5.35", " 9.3", "0", "0"]);
