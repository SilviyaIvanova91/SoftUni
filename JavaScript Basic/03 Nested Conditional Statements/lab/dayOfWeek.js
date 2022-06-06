function solve(input) {
  let day = Number(input[0]);
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
}

function solve(input) {
  let day = Number(input[0]);
  if (day === 1) {
    console.log("Monday");
  } else if (day === 2) {
    console.log("Tuesday");
  } else if (day === 3) {
    console.log("Thursday");
  } else if (day === 4) {
    console.log("Wednesday");
  } else if (day === 5) {
    console.log("Friday");
  } else if (day === 6) {
    console.log("Saturday");
  } else if (day === 7) {
    console.log("Sunday");
  } else {
    console.log("Error");
  }
}

solve(["1"]);
solve(["2"]);
solve(["3"]);
solve(["4"]);
solve(["5"]);
solve(["6"]);
solve(["7"]);
solve(["-1"]);
