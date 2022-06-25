function challengetheWedding(input) {
  let man = Number(input[0]);
  let women = Number(input[1]);
  let max = Number(input[2]);
  let res = "";
  counter = 0;

  for (let i = 1; i <= man; i++) {
    for (let j = 1; j <= women; j++) {
      counter++;
      res += "" + "(" + i + " <-> " + j + ")" + " ";
      if (counter === max) {
        break;
      }
    }
    if (counter === max) {
      break;
    }
  }
  console.log(res);
}

challengetheWedding(["2", "2", "6"]);
challengetheWedding(["2", "2", "3"]);
challengetheWedding(["5", "8", "40"]);
