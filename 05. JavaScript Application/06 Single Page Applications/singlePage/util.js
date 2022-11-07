export function sum(a, b) {
  verifyNumber(a);
  verifyNumber(b);
  return a + b;
}

export function product(a, b) {
  verifyNumber(a);
  verifyNumber(b);
  return a * b;
}

function printData() {
  console.log("Data from app.js");
  console.log(data);
}

function verifyNumber(arg) {
  if (typeof arg != "number") {
    throw new TypeError("Argument must be a number");
  }
}

const data = [10, 20, 30];

export { data, printData };
