function distancebetweenPoints(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log(distance);
}

distancebetweenPoints(2, 4, 5, 0);
distancebetweenPoints(2.34, 15.66, -13.55, -2.9985);
