class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
    this.isOn = false;
    this.prise = 800 - this.info.age * 2 + this.quality * 0.5;
  }

  turnOn() {
    this.quality--;
    this.isOn = true;
  }

  turnOff() {
    this.quality--;
    this.isOn = false;
  }
  showInfo() {
    return JSON.stringify(this.info);
  }

  get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

//--------решение с  get-------------

// let info = { producer: "Lenovo", age: 1, brand: "Legion" };
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// laptop.turnOn();
// laptop.turnOff();
// console.log(laptop.isOn);

//--------------------------------------------------
// class Laptop {
//   constructor(info, quality) {
//     this.info = info;
//     this.quality = quality;
//     this.isOn = false;
//     this.price = 800 - this.info.age * 2 + this.quality * 0.5;
//   }

//   turnOn() {
//     this.isOn = true;
//     this.quality--;
//     this.price -= 0.5;
////////////this.prise = 800 - this.info.age * 2 + this.quality * 0.5;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.quality--;
//     this.price -= 0.5;
/////////// this.prise = 800 - this.info.age * 2 + this.quality * 0.5;
//   }

//   showInfo() {
//     return JSON.stringify(this.info);
//   }
// }

//------------------------------------------------------
// class Laptop {
//   info = {};
//   isOn = false;
//   quality = 0;
//   constructor(info, quality) {
//     this.info = {
//       producer: info.producer,
//       age: info.age,
//       brand: info.brand,
//     };
//     this.quality = quality;
//   }

//   turnOn() {
//     this.quality--;
//     this.isOn = true;
//     return this.isOn;
//   }

//   turnOff() {
//     this.quality--;
//     this.isOn = false;
//     return this.isOn;
//   }
//   showInfo() {
//     return JSON.stringify({
//       producer: this.info.producer,
//       age: this.info.age,
//       brand: this.info.brand,
//     });
//   }

//   get price() {
//     return 800 - this.info.age * 2 + this.quality * 0.5;
//   }
// }
