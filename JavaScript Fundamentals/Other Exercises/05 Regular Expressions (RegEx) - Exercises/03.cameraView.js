function cameraView(input) {
  let [elToSkip, elToTake] = input.shift().split(" ");
  elToSkip = Number(elToSkip);
  elToTake = Number(elToTake);
  let regexp = /\|<([A-Za-z]+)/gm;
  let match = regexp.exec(input[0]);
  let all = [];
  while (match != null) {
    let word = match[0].slice(elToSkip + 2, elToSkip + elToTake + 2);
    all.push(word);

    match = regexp.exec(input[0]);
  }
  console.log(all.join(", "));
}

cameraView(["9 7", "GreatBigSea|<uglyStuffHawaii|<boriiiingKilauea"]);
cameraView(["0 5", "|>invalid|<beach|noMoreCameras"]);
