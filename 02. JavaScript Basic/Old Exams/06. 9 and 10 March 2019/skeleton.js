function skeleton(input) {
  let minKon = Number(input[0]);
  let sekKon = Number(input[1]);
  let lengthM = Number(input[2]);
  let sekForMetres = Number(input[3]);

  let allsekKon = minKon * 60 + sekKon;
  let min = (lengthM / 120) * 2.5;
  let timeM = ((lengthM / 100) * sekForMetres - min).toFixed(3);
  let diff = Math.abs(timeM - allsekKon);

  if (allsekKon >= timeM) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${timeM}.`);
  } else {
    console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
  }
}

skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);
