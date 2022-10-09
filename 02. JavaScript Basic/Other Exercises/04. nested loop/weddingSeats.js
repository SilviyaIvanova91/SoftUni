function weddingSeats(input) {
  let lastsector = input[0];
  let numRowSecA = Number(input[1]);
  let numSeatOdd = Number(input[2]);
  let firstSector = "A";
  let firstSeats = "a";
  let startSeat = firstSeats.charCodeAt(0);
  let startSector = firstSector.charCodeAt(0);
  let endSector = lastsector.charCodeAt(0);
  let counter = 0;

  for (let i = startSector; i <= endSector; i++) {
    for (let j = 1; j <= numRowSecA; j++) {
      if (j % 2 !== 0) {
        for (let k = startSeat; k < startSeat + numSeatOdd; k++) {
          console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
          counter++;
        }
      } else {
        for (let k = startSeat; k < startSeat + numSeatOdd + 2; k++) {
          console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
          counter++;
        }
      }
    }
    numRowSecA++;
  }
  console.log(counter);
}

weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);
