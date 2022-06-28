function movieTickets(input) {
  let index = 0;
  let a = input[index++];
  let b = input[index++];
  let c = input[index++];

  let a1 = Number(a);
  let a2 = Number(b);
  let n = Number(c);

  for (i = a1; i <= a2 - 1; i++) {
    let asciiSymbol = String.fromCharCode(i);
    let symbol1 = asciiSymbol;
    let symbol4 = i;

    for (j = 1; j <= n - 1; j++) {
      let symbol2 = j;

      for (k = 1; k <= n / 2 - 1; k++) {
        let symbol3 = k;
        let symbolSum = symbol2 + symbol3 + symbol4;

        if (i % 2 != 0 && symbolSum % 2 != 0) {
          console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);
        }
      }
    }
  }
}

movieTickets(["86", "88", "4"]);
movieTickets(["71", "74", "6"]);
movieTickets(["69", "72", "4"]);
