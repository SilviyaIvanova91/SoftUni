function squareofStars(input) {
  let num = Number(input);
  for (let i = 0; i < num; i++) {
    let res = "";
    for (let j = 0; j < num; j++) {
      res += "*" + " ";
    }
    console.log(res);
  }
}

squareofStars(1);
squareofStars(2);
squareofStars(5);
squareofStars(7);
