var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (element) {
        this._boxes.push(element);
    };
    Box.prototype.remove = function () {
        this._boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
// class Box<T> {
//   private _boxes: T[] = [];
//   public add(element: T): void {
//     this._boxes.push(element);
//   }
//   // public remove(): void {
//   //   this._boxes.pop();
//   // }
//   public remove(): T | undefined {
//     return this._boxes.pop();
//   }
//   get count(): number {
//     return this._boxes.length;
//   }
// }
// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
