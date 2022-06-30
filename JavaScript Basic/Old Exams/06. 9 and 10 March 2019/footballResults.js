function footballResults(input) {
  let frst = input[0];
  let second = input[1];
  let third = input[2];

  let letterFirsta = Number(frst[0]);
  let letterFirstb = Number(frst[2]);
  let letterSeconda = Number(second[0]);
  let letterSecondb = Number(second[2]);
  let letterThirda = Number(third[0]);
  let letterThirdb = Number(third[2]);

  let w = 0;
  let l = 0;
  let e = 0;

  if (letterFirsta > letterFirstb) {
    w++;
  } else if (letterFirsta < letterFirstb) {
    l++;
  } else {
    e++;
  }

  if (letterSeconda > letterSecondb) {
    w++;
  } else if (letterSeconda < letterSecondb) {
    l++;
  } else {
    e++;
  }

  if (letterThirda > letterThirdb) {
    w++;
  } else if (letterThirda < letterThirdb) {
    l++;
  } else {
    e++;
  }
  console.log(`Team won ${w} games.`);
  console.log(`Team lost ${l} games.`);
  console.log(`Drawn games: ${e}`);
}

footballResults(["3:1", "0:2", "0:0"]);
footballResults(["4:2", "0:3", "1:0"]);
footballResults(["0:2", "0:1", "3:3"]);
