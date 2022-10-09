function footballLeague(input) {
  let index = 0;
  let capasity = Number(input[index++]);
  let fans = Number(input[index++]);
  let a = 0;
  let b = 0;
  let v = 0;
  let g = 0;

  for (let i = 0; i < fans; i++) {
    let sectors = input[index++];
    if (sectors === "A") {
      a++;
    } else if (sectors === "B") {
      b++;
    } else if (sectors === "V") {
      v++;
    } else if (sectors === "G") {
      g++;
    }
  }
  let percenta = (a / fans) * 100;
  let percetb = (b / fans) * 100;
  let percetv = (v / fans) * 100;
  let percentg = (g / fans) * 100;
  let avg = (fans / capasity) * 100;
  console.log(`${percenta.toFixed(2)}%`);
  console.log(`${percetb.toFixed(2)}%`);
  console.log(`${percetv.toFixed(2)}%`);
  console.log(`${percentg.toFixed(2)}%`);
  console.log(`${avg.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A",
]);
footballLeague([
  "1000",
  "12",
  "A",
  "A",
  "V",
  "V",
  "A",
  "G",
  "A",
  "A",
  "V",
  "G",
  "V",
  "A",
]);
