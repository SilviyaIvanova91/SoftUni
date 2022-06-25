function pipesInPool(input) {
  let index = 0;
  let V = Number(input[index++]);
  let P1 = Number(input[index++]);
  let P2 = Number(input[index++]);
  let H = Number(input[index++]);

  let HP1 = P1 * H;
  let HP2 = P2 * H;
  let P = HP1 + HP2;
  let pool = Math.abs(V - P);
  let poolPercentV = V / 100;
  let poolPercent = P / poolPercentV;
  let vPercent = P / 100;
  let vP1 = HP1 / vPercent;
  let vP2 = HP2 / vPercent;

  if (P > V) {
    console.log(
      `For ${H} hours the pool overflows with ${pool.toFixed(2)} liters.`
    );
  } else {
    console.log(
      `The pool is ${poolPercent.toFixed(2)}% full. Pipe 1: ${vP1.toFixed(
        2
      )} %. Pipe 2: ${vP2.toFixed(2)}%.`
    );
  }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);
