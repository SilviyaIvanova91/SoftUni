function areaandVolumeCalculator(areaIn, volIn, input) {
  let data = JSON.parse(input);

  let res = data.map((cube) => {
    let current = {
      area: areaIn.call(cube),
      volume: volIn.call(cube),
    };
    return current;
  });
  return res;
}

//--------------------------------------------------
// function areaandVolumeCalculator(areaIn, volIn, input) {
//   return JSON.parse(input).map((cube) => ({
//     area: areaIn.call(cube),
//     volume: volIn.call(cube),
//   }));
// }

//-------------------------------------------------
// function areaandVolumeCalculator(areaIn, volIn, input) {
//     let data = JSON.parse(input);

//     let res = [];

//     for (const cube of data) {
//       let current = {
//         area: areaIn.call(cube),
//         volume: volIn.call(cube),
//       };
//       res.push(current);
//     }
//     return res;
//   }

areaandVolumeCalculator(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
areaandVolumeCalculator(
  area,
  vol,
  `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
