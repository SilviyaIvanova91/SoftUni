function shootfortheWin(arr) {
  let trackOfShoots = arr.shift().split(" ");
  trackOfShoots.map(Number);
  let command = arr.shift();
  let count = 0;

  while (command != "End") {
    let index = Number(command);
    let num = Number(trackOfShoots[index]);
    if (index > trackOfShoots.length - 1) {
      command = arr.shift();
      continue;
    }
    if (num == -1) {
      command = arr.shift();
      continue;
    } else {
      trackOfShoots.splice(index, 1, -1);
      for (let i = 0; i < trackOfShoots.length; i++) {
        let newnum = Number(trackOfShoots[i]);
        if (newnum == -1) {
          continue;
        } else if (num >= newnum) {
          newnum += num;
        } else if (num < newnum) {
          newnum -= num;
        }
        trackOfShoots.splice(i, 1, newnum);
      }

      count++;
    }
    command = arr.shift();
  }
  console.log(`Shot targets: ${count} -> ${trackOfShoots.join(" ")}`);
}

shootfortheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootfortheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
