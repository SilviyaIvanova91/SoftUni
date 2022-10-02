class PointDistance {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}

const point1 = new PointDistance(1, 1);
const point2 = new PointDistance(4, 5);

console.log(point1, point2);
console.log(PointDistance.distance(point1, point2));
