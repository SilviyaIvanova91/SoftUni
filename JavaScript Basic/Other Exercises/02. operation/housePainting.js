function housePainting(input) {
  let index = 0;
  let x = Number(input[index++]);
  let y = Number(input[index++]);
  let h = Number(input[index++]);
  let houseAa = x * x * 2;
  let houseAw = 1.2 * 2;
  let houseA = houseAa - houseAw;
  let houseBa = x * y * 2;
  let houseBw = 1.5 * 1.5 * 2;
  let houseB = houseBa - houseBw;
  let house = houseA + houseB;
  let green = house / 3.4;
  console.log(green.toFixed(2));
  let roofA = x * y * 2;
  let roofB = ((x * h) / 2) * 2;
  let roof = roofA + roofB;
  let red = roof / 4.3;
  console.log(red.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.8"]);
