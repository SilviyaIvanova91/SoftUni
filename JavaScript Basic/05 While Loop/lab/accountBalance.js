function accountBalance(input) {
  let index = 0;
  let sum = 0;
  let command = input[index++];

  while (command !== "NoMoreMoney") {
    let n = Number(command);

    if (n < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    sum += n;
    console.log(`Increase: ${n.toFixed(2)}`);

    command = input[index++];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);
