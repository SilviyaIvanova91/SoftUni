function cake(input) {
  let index = 0;
  let w = Number(input[index++]);
  let l = Number(input[index++]);
  let cakeSize = w * l;
  let command = input[index++];
  let isHaveCake = true;

  while (command !== "STOP") {
    let pieces = Number(command);

    cakeSize -= pieces;

    if (cakeSize < 0) {
      isHaveCake = false;
      console.log(
        `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
      );
      break;
    }
    command = input[index++];
  }
  if (isHaveCake) {
    console.log(`${cakeSize} pieces are left.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
