function bikeRace(input) {
  let young = Number(input[0]);
  let old = Number(input[1]);
  let trace = input[2];
  let tax = 0;

  if (trace === "trail") {
    tax = young * 5.5 + old * 7;
  } else if (trace === "cross-country") {
    tax = young * 8 + old * 9.5;
    if (young + old >= 50) {
      tax = tax - tax * 0.25;
    }
  } else if (trace === "downhill") {
    tax = young * 12.25 + old * 13.75;
  } else if (trace === "road") {
    tax = young * 20 + old * 21.5;
  }
  let other = tax - tax * 0.05;
  console.log(other.toFixed(2));
}

bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);
