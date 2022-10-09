function cinema(input) {
  let type = input[0];
  let numberRow = Number(input[1]);
  let numberColum = Number(input[2]);
  let win = 0;

  if (type === "Premiere") {
    win = numberRow * numberColum * 12.0;
  } else if (type === "Normal") {
    win = numberRow * numberColum * 7.5;
  } else if (type === "Discount") {
    win = numberRow * numberColum * 5.0;
  }
  {
    console.log(`${win.toFixed(2)} leva`);
  }
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
