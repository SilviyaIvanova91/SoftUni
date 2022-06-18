function trapeziodArea(input) {
  let index = 0;
  let a = Number(input[index++]);
  let b = Number(input[index++]);
  let h = Number(input[index++]);
  let area = ((a + b) * h) / 2;
  console.log(area.toFixed(2));
}

trapeziodArea(["8", "13", "7"]);
