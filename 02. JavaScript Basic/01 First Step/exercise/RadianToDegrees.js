function radientToDegrees(input) {
  let radians = Number(input[0]);
  let degrees = (radians * 180) / Math.PI;
  console.log(degrees);
}
radientToDegrees(["3.1416"]);
radientToDegrees(["6.2832"]);
