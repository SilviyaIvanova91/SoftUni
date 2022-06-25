function bestPlayer(input) {
  let index = 0;
  let max = 0;
  let best = "";

  while (input[index] !== "END") {
    let name = input[index];
    let golls = Number(input[index + 1]);
    if (golls > max) {
      max = golls;
      best = name;
    }
    if (max >= 10) {
      break;
    }
    index += 2;
  }
  console.log(`${best} is the best player!`);
  if (max >= 3)
    console.log(`He has scored ${max} goals and made a hat-trick !!!`);
  else console.log(`He has scored ${max} goals.`);
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
