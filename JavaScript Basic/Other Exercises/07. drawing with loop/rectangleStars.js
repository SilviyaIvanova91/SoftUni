function rectangleStars() {
  for (let i = 1; i <= 10; i++) {
    let str = "";
    for (let j = 1; j <= 10; j++) {
      str += "*";
    }

    console.log(str);
  }
}

rectangleStars();
