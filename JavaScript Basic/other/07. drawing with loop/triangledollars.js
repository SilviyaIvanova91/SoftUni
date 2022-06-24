function triangle(input) {
  let num = Number(input[0]);
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += "$ ";
    console.log(str);
  }
}

triangle(["2"]);
triangle(["3"]);
triangle(["4"]);
triangle(["5"]);
