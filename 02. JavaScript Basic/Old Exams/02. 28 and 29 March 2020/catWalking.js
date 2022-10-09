function catWalking(input) {
  let minet = Number(input[0]);
  let numOut = Number(input[1]);
  let cal = Number(input[2]);

  let all = minet * 5 * numOut;
  let callOut = cal / 2;
  if (all >= callOut) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${all}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${all}.`
    );
  }
}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);
