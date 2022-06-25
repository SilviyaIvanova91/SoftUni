function profit(input) {
  let numOne = Number(input[0]);
  let numtwo = Number(input[1]);
  let numFive = Number(input[2]);
  let all = Number(input[3]);

  for (let x = 0; x <= numOne; x++) {
    for (let y = 0; y <= numtwo; y++) {
      for (let z = 0; z <= numFive; z++) {
        if (x * 1 + y * 2 + z * 5 === all) {
          console.log(
            `${x} * 1 lv. + ${y} * 2 lv. + ${z} * 5 lv. = ${all} lv.`
          );
        }
      }
    }
  }
}

profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);
