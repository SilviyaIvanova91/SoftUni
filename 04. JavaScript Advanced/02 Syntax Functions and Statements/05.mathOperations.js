function mathOperations(numFirst, numSec, op) {
  let res = 0;
  if (op == "+") {
    res = numFirst + numSec;
  } else if (op == "-") {
    res = numFirst - numSec;
  } else if (op == "*") {
    res = numFirst * numSec;
  } else if (op == "/") {
    res = numFirst / numSec;
  } else if (op == "%") {
    res = numFirst % numSec;
  } else if (op == "**") {
    res = numFirst ** numSec;
  }
  console.log(res);
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
