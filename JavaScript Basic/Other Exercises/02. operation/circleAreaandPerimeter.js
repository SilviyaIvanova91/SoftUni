function circleAreaandPerimeter(input) {
  let r = Number(input[0]);
  let S = Math.PI * Math.pow(r, 2);
  console.log(S.toFixed(2));
  let P = 2 * Math.PI * r;
  console.log(P.toFixed(2));
}

circleAreaandPerimeter([3]);
circleAreaandPerimeter([4.5]);
