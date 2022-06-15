function giftsfromSanta(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let s = Number(input[2]);
  let sum = "";

  for (let i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === s) {
        break;
      }
      sum += "" + i + " ";
    }
  }
  console.log(sum);
}

giftsfromSanta(["1", "30", "15"]);
giftsfromSanta(["1", "36", "12"]);
giftsfromSanta(["20", "1000", "36"]);
