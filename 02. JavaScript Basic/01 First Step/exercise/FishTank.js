function fishTank(input) {
  let lenght = Number(input[0]);
  let width = Number(input[1]);
  let long = Number(input[2]);
  let percent = Number(input[3]) / 100;
  let size = lenght * width * long;
  let out = size - size * percent;
  let final = out * 0.001;
  console.log(final);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
