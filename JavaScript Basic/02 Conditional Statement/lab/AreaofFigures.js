function areaofFigures(input) {
  let typefigure = input[0];
  let area = 0;

  if (typefigure === "square") {
    let lenghtofSide = Number(input[1]);
    area = lenghtofSide * lenghtofSide;
  } else if (typefigure === "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;
  } else if (typefigure === "circle") {
    let radious = Number(input[1]);
    area = Math.PI * Math.pow(radious, 2);
  } else if (typefigure === "triangle") {
    let side = Number(input[1]);
    let heigh = Number(input[2]);
    area = (side * heigh) / 2;
  }

  console.log(area.toFixed(3));
}

areaofFigures(["square", "5"]);
areaofFigures(["rectangle", "7", "2.5"]);
areaofFigures(["circle", "6"]);
areaofFigures(["triangle", "4.5", "20"]);
