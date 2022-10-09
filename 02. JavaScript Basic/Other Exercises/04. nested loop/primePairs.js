function primePairs(input) {
  let startFirst = Number(input[0]);
  let startSec = Number(input[1]);
  let razFirst = Number(input[2]);
  let razSec = Number(input[3]);

  for (let i = startFirst; i <= startFirst + razFirst; i++) {
    for (let y = startSec; y <= startSec + razSec; y++) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        if (y % 2 !== 0 && y % 3 !== 0 && y % 5 !== 0 && y % 7 !== 0) {
          console.log(`${i}${y}`);
        }
      }
    }
  }
}

primePairs(["10", "20", "5", "5"]);
primePairs(["10", "30", "9", "6"]);
