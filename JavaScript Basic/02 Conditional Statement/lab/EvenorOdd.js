function evenorOdd(input) {
  let even = Number(input[0]);
  if (even % 2 === 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
}

evenorOdd(["2"]);
evenorOdd(["3"]);
evenorOdd(["25"]);
evenorOdd(["1024"]);
