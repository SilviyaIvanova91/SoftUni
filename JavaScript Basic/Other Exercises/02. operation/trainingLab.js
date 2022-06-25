function trainingLab(input) {
  let index = 0;
  let h = Number(input[index++]) * 100;
  let w = Number(input[index++]) * 100;
  let roomW = Math.floor((w - 100) / 70);
  let roomH = Math.floor(h / 120);
  let all = roomH * roomW - 3;
  console.log(all);
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);
