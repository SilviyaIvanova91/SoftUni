function rectangleStars(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
}

rectangleStars(["2"]);
rectangleStars(["3"]);
rectangleStars(["4"]);
