class Hex {
  constructor(x) {
    this.param = x;
  }

  valueOf() {
    return this.param;
  }

  plus(obj) {
    let result = this.param + Number(obj.valueOf());
    return new Hex(result);
  }

  minus(obj) {
    let result = this.param - Number(obj.valueOf());
    return new Hex(result);
  }

  toString() {
    return "0x" + this.param.toString(16).toUpperCase();
  }

  parse(str) {
    return parseInt(str, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
