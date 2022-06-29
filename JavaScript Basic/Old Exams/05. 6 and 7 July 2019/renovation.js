function renovation(input) {
  let index = 0;
  let h = Number(input[index++]);
  let w = Number(input[index++]);
  let percentNo = Number(input[index++]);
  let all = h * w * 4;
  let percent = percentNo / 100;
  let colour = all - all * percent;
  let command = input[index++];
  let other = colour;

  while (command !== "Tired!") {
    let kv = Number(command);
    other -= kv;

    if (other <= 0) {
      break;
    }

    command = input[index++];
  }
  if (command === "Tired!") {
    console.log(`${other} quadratic m left.`);
  } else if (other < 0) {
    console.log(
      `All walls are painted and you have ${Math.abs(other)} l paint left!`
    );
  } else if (other >= 0) {
    console.log(`All walls are painted! Great job, Pesho!`);
  }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);
